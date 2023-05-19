# OpenAI at Scale

[![Open in GitHub Codespaces](https://img.shields.io/static/v1?style=for-the-badge&label=GitHub+Codespaces&message=Open&color=brightgreen&logo=github)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=622759641&machine=standardLinux32gb&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2&skip_quickstart=true&geo=SoutheastAsia)
[![Open in Remote - Containers](https://img.shields.io/static/v1?style=for-the-badge&label=Remote%20-%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/Azure/openai-at-scale)

🌏 [English](README.md) | 日本語

✨ **OpenAI at Scale** は Microsoft 社の FastTrack for Azure チームによるワークショップです。Azure 上にシンプルは GhatGPT のインターフェースを持つアプリケーションをビルドしデプロイします。

👉 [Workshop 資料](./docs/jp/openai-ai-scale.md) 📖 

<img src="./docs/images/chatscreen.png" width="500" />

---

## 🎯 機能

- チャットインタフェース
- システムプロンプトとハイパーパラメータの設定
- Azure Active Directory による認証と Microsoft Graph からのユーザー情報の取得
- Azure Log Analytics によるアプリケーションログの取得
- プロンプトログの Azure Cosmos DB への格納

<img src="./docs/images/appcomponents.png" width="500" />

---

## 🚀 作業開始

### ⚒️ 事前条件

#### ローカルでの実行

- OS - Windows 11, MacOS or Linux
> ⚠ Windows ユーザは、Ubuntu 20.04 LTS (Windows subsystem for Linux) を利用すること<br/>
> ⚠ GitHub Codespaces は Linux 環境としてサポート

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) (v4.28.1 or higher)
- [Node.js](https://nodejs.org/en/download/) (v16.20 or higher)
- [Python](https://www.python.org/downloads/) (v3.9 or higher)
- [git client](https://git-scm.com/downloads)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) or any other Docker environment
  - Docker は Visual Studio Code Dev Container で利用します。


#### Azure での実行

- Azure サブスクリプション
  - リソース
    - Azure OpenAI Service
    - Azure Active Directory application
    - Azure Log Analytics
    - (Optional) Azure Cosmos DB
> ⚠ 無償アカウントは利用できません。
- ロール
  - 共同作成者、もしくはそれ以上の Azure サブスクリプションに対する権限
  - Azure Active Directory を作成できる権限
  - Azure OpenAI Service が利用可能なこと

<br/>

### 1. Azure OpenAI Service の作成 🧠

Azure OpenAI Service のリソースを作成する方法はいくつかございますが、Azure CLI に慣れていない方は Azure Portal から作成することをおすすめします。

始める前に、Azure OpenAI Service のリージョンを選択する必要があります。利用可能なリージョンは [こちら](https://azure.microsoft.com/ja-JP/explore/global-infrastructure/products-by-region/?regions=all&products=cognitive-services) から確認できます。


- **Azure Portal** :
[公式ドキュメント](https://docs.microsoft.com/ja-jp/azure/cognitive-services/openai/how-to/create-resource?tabs=azure-portal) を参考に Azure OpenAI Service を作成します。
- **Azure CLI** : 次のコマンドを用いて Azure OpenAI Service を作成することもできます。

<details><summary>コマンドの例</summary><br/>

```shell
# Set environment variables
export SUBSCRIPTION_ID=<your subscription id>
export RESOURCE_GROUP=<your resource group name>
export LOCATION=eastus #hard coded to avoid confusion, you can change any avaiable location.
export AZURE_OPENAI_SERVICE=<your openai service name>
export AZURE_OPENAI_CHATGPT_DEPLOYMENT=<deployment name of your gpt-35-turbo model>
```

```shell
az login #check your subscription id
az account set --subscription $SUBSCRIPTION_ID
az group create --name $RESOURCE_GROUP  --location $LOCATION
az cognitiveservices account create \
    --name $AZURE_OPENAI_SERVICE \
    --kind OpenAI \
    --sku S0 \
    --resource-group $RESOURCE_GROUP \
    --location $LOCATION \
    --yes
az cognitiveservices account deployment create \
   -g $RESOURCE_GROUP  \
   -n $AZURE_OPENAI_SERVICE \
   --deployment-name $AZURE_OPENAI_CHATGPT_DEPLOYMENT \
   --model-name gpt-35-turbo \
   --model-version "0301"  \
   --model-format OpenAI \
   --scale-settings-scale-type "Standard"
```

</details>

<br/>

### 2. Azure Active Directory application の作成 🔑

[アプリまたは Web API の登録](https://docs.microsoft.com/ja-jp/azure/active-directory/develop/quickstart-register-app) を参考に Azure Active Directory application を作成します。

- **`Single-page application (SPA)`** をプラットフォームとして選択します。
- Redict URI は、ローカル開発用に **`http://localhost:5000`** と **`http://localhost:5173`** を設定します。
- **`Application (client) ID`** と **`Directory (tenant) ID`** の情報を控えておきます。


<br/>

### (オプション) 3. Azure Cosmos DB の作成 🪐	
Azure ドキュメント [こちら](https://docs.microsoft.com/ja-jp/azure/cosmos-db/create-cosmosdb-resources-portal) を参考に Azure Cosmos DB を作成します。また、Azure Cosmos DB に Analytical Store を有効にする必要があります。詳細は [こちら](https://docs.microsoft.com/ja-jp/azure/cosmos-db/analytical-store-introduction) を参照してください。

- **`Core (SQL)`** を API として選択します。
- コンテナ名は **`chat_log`** とし、パーティションキーは **`/chat_session_id`** とします。

<br/>

### 4. ローカル環境へのデプロイ 💻

#### 環境変数

アプリケーションを起動する前に、環境変数を設定するために、`.env.sample` ファイルを参考に `.env` ファイルを作成します。

- `app/frontend/.env`
  - Azure Active Directory の SDK で利用されます.

```shell
# Azure Active Directory application
VITE_CLIENTID="<your client id>"
VITE_TENANTID="<your tenant id>"
```

- `app/backend/.env`
  - Azure OpenAI Service と Azure Cosmos DB への接続に利用されます。

```shell
# Azure OpenAI Service
AZURE_OPENAI_SERVICE="<your Azure OpenAI Service endpoint>"
OPENAI_API_KEY="<your Azure OpenAI Service key>"
AZURE_OPENAI_CHATGPT_DEPLOYMENT="<your model deployment>"


# (Optional) Azure Cosmos DB
AZURE_COSMOSDB_ENDPOINT="https://<account_name>.documents.azure.com:443/"
AZURE_COSMOSDB_KEY="<your Azure Cosmos DB access Key>"
AZURE_COSMOSDB_DB="< your Azure Cosmos DB database name>"
```
> ⚠ 本番環境においては [Azure Key Vault](https://azure.microsoft.com/ja-jp/products/key-vault) を用いて環境変数を設定することを推奨します。
  
  
<details><summary>Azure CLI を用いて環境変数を取得するコマンド例</summary><br/>

```shell
export RESOURCE_GROUP=<your resource group name>
export AZURE_OPENAI_SERVICE=<your openai service name>
export AZURE_OPENAI_CHATGPT_DEPLOYMENT=<deployment name of your gpt-35-turbo model>
export OPENAI_API_KEY=`az cognitiveservices account keys list \
-n $AZURE_OPENAI_SERVICE \
-g $RESOURCE_GROUP \
-o json \
| jq -r .key1`
```

</details>

#### Python 環境

Python は Flask アプリケーションを稼働されるために必要です。

##### Python ライブラリのインストール

```shell
cd app/backend
python -m venv ./backend_env
source .backend_env/bin/activate  #bash
pip install -r requirements.txt
```

##### バックエンドの開始 (Flask)

```shell
cd app/backend
flask run --debug #hot reload
#python ./app.py 
```

#### Node.js 環境

Node.js is は React アプリケーションを稼働させるために必要です。

##### Node.js パッケージのインストール

```shell
cd app/frontend
npm install
```

##### フロントエンドの開始 (React)
開発用途<br/>

```shell
npm run dev
```

本番用途<br/>

```shell
npm run build
```

> このコマンドは app/backend/static フォルダにデプロイされるアプリケーションファイルのサイズを最適化し削減します。<br/>

<br/>

### 5. Azure へのデプロイ ☁️

#### Azure App Service へのデプロイ

> ⚠ 以下のコマンドを実行する前に、app/frontend で `npm run build` を実行し、フロントエンドファイルを app/backend/static に配置してください。


- Azure App Service の例
  - 簡単な方法でアプリケーションを Azure App Service にデプロイします。

    ```shell
    cd app/backend
    az webapp up --runtime "python:3.10" --sku B1 -g <Resource Group Name>
    ```

  - Azure App Service Plan と Web アプリケーションを別々にデプロイ
    - 上記のコマンドでもアプリケーションをデプロイできますが、詳細な Azure App Service Plan や Web アプリケーションの設定を変更することはできません。したがって、これらの設定を変更したい場合は、以下のコマンドで別途デプロイする必要があります。
    - Azure App Service Plan リソースの作成します。

      ```shell
      az appservice plan create -g <Resource Group Name> -n <App Service Plan Name> --sku <SKU Name> --location eastus
      ```

    - 作成した Azure App Service Plan 上に Web アプリケーションのリソースを作成します。

      ```shell
      az webapp create -g <Resource Group Name> -n <WebApp Name> -p <App Service Plan Name> -r "python:3.10"
      ```

      ⚡️ 任意: システムにプライベートエンドポイントやVNETの統合を追加する必要がある場合は、以下のオプションを使用して追加できます。

      - VNET Integration
  
        ```shell
        # you need create vnet/subnet before execute this command
        az webapp create -g <Resource Group Name> -n <WebApp Name> -p <App Service Plan Name> -r "python:3.10" --vnet <VNET Name> --subnet <Subnet Name>
        ```

      - Private Endpoint

        ```shell
        # you need create vnet/subnet webapp before execute this command
        az network private-endpoint create \
          -n <PE Name> \
          -g <Resource Group Name> \
          --vnet-name <VNET Name> \
          --subnet <Subnet Name> \
          --connection-name <Private Endpoint Connection Name> \
          --private-connection-resource-id /subscriptions/SubscriptionID/resourceGroups/myResourceGroup/providers/Microsoft.Web/sites/<WebApp Name> \
          --group-id sites
        ```

    - aadConfig.ts ファイルの redirectURI を更新し、フロントエンドアプリを再構築します
      - 以下で出力される FQDN を使用して、redirectURI を更新してください。これは Webアプリケーションのエンドポイントです。
  
        ```shell
        az webapp config hostname list -g <Resource Group Name> --webapp-name <WebApp Name> -o json | jq '.[0].name'
        ```

      - フロントの再ビルド

        ```shell
        cd app/frontend
        npm run build
        ```

    - Web アプリケーションのデプロイ

      ```shell
      cd app/backend
      zip -r deploy.zip .
      az webapp deploy -g <Resource Group Name> -n <Webapp Name> --src-path deploy.zip --type zip
      ```

    - Web アプリケーションをデプロイした後、Azure App Service のアプリケーション設定で環境変数を変更する必要があります。

      ```shell
      az webapp config appsettings set --name <Web App Name> -g <Resource Group Name> --settings OPENAI_API_KEY=<KEY> AZURE_OPENAI_CHATGPT_DEPLOYMENT=<Deployment Model Name> AZURE_OPENAI_SERVICE=<OpenAI Service Name>
      ```

<br/>

### 6. 設定 ⚙️
#### Azure Log Analytics によるアプリケーションログの収集

  - ログ収集の例
    - Azure Log Analytics workspace のデプロイ
  
    ```shell
    export APP_SERIVCE=<your app service name>
    export LOCATION=<azure datacenter region - eastus, japaneast, etc...>
    export RESOURCE_GROUP=<your resource group name>
    export WORKSPACE=<your log analytics workspace name>
    export DIAGSETTINNG_NAME=<your diagnistics setting name (arbitary)>

    az monitor log-analytics workspace create --name $WORKSPACE  --resource-group $RESOURCE_GROUP --location $LOCATION
    ```

    - 診断設定の有効化

    ```shell
    export RESOURCE_ID=`az webapp show -g $RESOURCE_GROUP -n $APP_SERIVCE --query id --output tsv | tr -d '\r'`
    export WORKSPACE_ID=`az monitor log-analytics workspace show -g $RESOURCE_GROUP --workspace-name $WORKSPACE --query id --output tsv | tr -d '\r'`

    az monitor diagnostic-settings create \
      --resource $RESOURCE_ID \
      --workspace $WORKSPACE_ID \
    -n $DIAGSETTINNG_NAME \
    --logs '[{"category": "AppServiceAppLogs", "enabled": true},{"category": "AppServicePlatformLogs", "enabled": true},{"category": "AppServiceConsoleLogs", "enabled": true},{"category": "AppServiceAuditLogs", "enabled": true},{"category": "AppServiceHTTPLogs", "enabled": true}]'
    ```


#### (オプション) プロンプトログの Azure Cosmos DB への格納
[Logging chat on Azure Cosmos DB](docs/en/logging_cosmosdb.md) セクションでは、チャットメッセージを Azure Cosmos DB にログ出力し、さらにダウンストリームで洞察を導出する方法について詳しく説明します。

---
## 🙋🏾‍♂️ 質問やフィードバック

[GitHub Issues](https://github.com/Azure/openai-at-scale/issues) でこのリポジトリに関する質問やフィードバックをお寄せください。


---
## 📚 参考情報

- [ChatGPT + Enterprise data with Azure OpenAI and Cognitive Search](https://github.com/Azure-Samples/azure-search-openai-demo)
  - This repo is based on this sample code.

---
## 🤝 貢献

お客様や Microsoft 社員からの貢献を歓迎しています。[CONTRIBUTING](./CONTRIBUTING.md) を参照してください。このリポジトリの発展に貢献いただく全ての方に感謝します！


<a href="https://github.com/Azure/openai-at-scale/graphs/contributors"><img src="https://contrib.rocks/image?repo=Azure/openai-at-scale&max=240&columns=18" /></a>
