# 1. OpenAI at Scale 概要 📝
## 目的とアジェンダ
OpenAI at Scale は [FastTrack for Azure](https://azure.microsoft.com/ja-jp/pricing/offers/azure-fasttrack/#overview) が提供する計 3 日間のハンズオンセッションです。Azure OpenAI Service が提供する ChatGPT を利用したサンドボックス的な簡易アプリケーションを構築します。

**目的**
- エンタープライズ対応した ChatGPT アプリケーションを Azure 上に構築する
- アプリーケーションで利用する Azure サービスの基本を理解する

**アジェンダ**

#### Day1
|   | Section | Item | Description | Reference |
|---|--|--|--|--|
| 1 | OpenAI at Scale 概要|  |  |  |
|   |  |目的とアジェンダ| OpenAI at Scale の目的とアジェンダを説明します。 |  |
|   |  |FastTrack for Azure| FastTrack for Azure のプログラムの概要を説明します。 | **プログラム紹介ページ** : [FastTrack for Azure](https://azure.microsoft.com/ja-jp/pricing/offers/azure-fasttrack/) <br/> **セミナー** : [プログラムのご紹介（FTA Intro）セッション](https://developer.microsoft.com/en-us/reactor/events/17982/) |
|   |  |アーキテクチャ| 本ハンズオンで構築するアプリケーションのアーキテクチャを説明します。 |  |
|   |  | クライアント開発環境の確認 | 開発者ごとのクライアント端末における開発環境を確認します。 |  |
|   |  | Azure 環境の確認 | Azure OpenAI Service の申請状況、サブスクリプション上での権限の確認をします。 |  |
| 2 | Azure サービス構築と設定|  |  |  |
|   |  |Azure Active Directory| アプリケーションを作成します。 | **製品資料** : [Azure Active Directory のアプリケーションオブジェクトとサービスプリンシパルオブジェクト](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/app-objects-and-service-principals) <br/> **リソース作成手順** : [チュートリアル: Microsoft ID プラットフォームにシングルページ アプリケーションを登録する](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/single-page-app-tutorial-01-register-app)|
|   |  |Azure OpenAI Service| Azure OpenAI Service のリソースを作成し、モデルをデプロイします。 | **製品資料** : [Web](https://azure.microsoft.com/ja-jp/products/cognitive-services/openai-service) / [Document](https://learn.microsoft.com/ja-JP/azure/cognitive-services/openai/overview) <br /> **リソース作成手順** : [リソースの作成 & モデルデプロイ](https://learn.microsoft.com/ja-JP/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal) |
|   |  |Azure App Service| Azure App Service のリソースを作成します。 | **製品資料** : [Web](https://azure.microsoft.com/ja-jp/products/app-service) / [Document](https://learn.microsoft.com/ja-JP/azure/app-service/) <br/> **リソース作成資料** : [クイックスタート : Python をデプロイする](https://learn.microsoft.com/ja-jp/azure/app-service/quickstart-python?tabs=flask%2Cwindows%2Cvscode-aztools%2Cvscode-deploy%2Cdeploy-instructions-azportal%2Cterminal-bash%2Cdeploy-instructions-zip-azcli) |
|   |  |Azure Log Analytics| Azure Log Analytics のリソースを作成します。 | **製品資料** : [Web](https://azure.microsoft.com/ja-jp/products/monitor) / [Document](https://learn.microsoft.com/ja-JP/azure/azure-monitor/) <br/> **リソース作成資料** : [チュートリアル : リソースログを収集して表示する](https://learn.microsoft.com/ja-jp/azure/azure-monitor/essentials/tutorial-resource-logs) |

#### Day2
|   | Section | Item | Description | Reference |
|---|--|--|--|--|
| 2' | Azure サービス構築と設定 |  前日の続き |  |  |
| 3 |　クライアント開発環境の構築 | クライアント端末へソフトウェアインストール| Docker、VSCode、Python、Node.js、Azure CLI をインストールします。|  |
| 4 | ChatGPT アプリケーション構築|  |  |  |
|   |  | ローカル環境へのデプロイ| ローカル環境でアプリケーションを構築し、動作確認をします。 |  |
|   |  | Azure 環境へのデプロイ| Azure 環境でアプリケーションをデプロイし、動作確認をします。 |  |
|   |  | 設定 | ログの取得などの追加設定を行い、動作確認をします。 |  |

#### Day3
|   | Section | Item | Description | Reference |
|---|--|--|--|--|
| 4' | ChatGPT アプリ構築 |前日の続き| 
| 5 | 今後の拡張案 |  | アプリケーションを改良するポイントを説明します。 |  |
| 6 | 実装のベストプラクティス|  | LLM をベースとしたアプリケーション開発におけるベストプラクティスや留意点について説明します。 |  |
| 7 | その他 | |  |
|   | | Q&A |  |
|   | | 参考情報 |  |


## FastTrack for Azure
FastTrack for Azure は、Azure の迅速に & 確実な構築を支援するカスタマーサクセスプログラムです。Azure 製品部門に所属する Engineer と Program Manager が担当します。Azure をご利用いただくお客様やパートナー様がご利用になれます。

なお、6月21日(水) 13:00 より Program Manager による FastTrack for Azure 紹介セッションが予定されています。ぜひ参加ください。<br/>
:point_right: [プログラムのご紹介（FTA Intro）セッション](https://developer.microsoft.com/en-us/reactor/events/17982/)

## アーキテクチャ
本セッションで構築するアプリケーションの全体像は以下の通りです。

**開発環境の要件**<br/>
<img src="../images/appcomponents.png" width="500" />


## クライアント開発環境の確認
クライアント端末における開発環境の要件を[こちら](https://github.com/Azure/openai-at-scale/wiki/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%E3%81%AE%E8%A6%81%E4%BB%B6)よりご確認ください。


## Azure 環境の確認
Azure サブスクリプションにおける要件は[こちら](https://github.com/Azure/openai-at-scale/wiki/Azure-%E3%82%B5%E3%83%96%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E8%A6%81%E4%BB%B6)よりご確認ください。

<br/>

---
# 2. Azure サービス構築と設定 🛠️
## Azure Active Directory アプリケーション 🔑
**製品概要**
- [Azure Active Directory とは](https://learn.microsoft.com/ja-jp/azure/active-directory/fundamentals/active-directory-whatis)
- [Azure Active Directory のアプリケーションオブジェクトとサービスプリンシパルオブジェクト](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/app-objects-and-service-principals)

**構築と設定**
1. [チュートリアル: Microsoft ID プラットフォームにシングルページ アプリケーションを登録する](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/single-page-app-tutorial-01-register-app) の内容に従って、Azure Active Directory アプリケーションを作成します。
    - **`Single-page application (SPA)`** をプラットフォームとして選択します。
    - リダイレクト URI は、ローカル開発用に **`http://localhost:5000`** と **`http://localhost:5173`** を設定しておきます。
1. 下記の情報を控えておきます。
   - クライアント ID
   - テナント ID

## Azure OpenAI Service 🧠
**製品概要**
- [Azure OpenAI Service とは](https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/overview)
- [Azure OpenAI Service モデル](https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/concepts/models)


**構築と設定**
Azure OpenAI Service のリソースを作成する方法はいくつかございますが、Azure CLI に慣れていない方は Azure Portal から作成することをおすすめします。

始める前に、Azure OpenAI Service のリージョンを選択する必要があります。利用可能なリージョンは [こちら](https://azure.microsoft.com/ja-JP/explore/global-infrastructure/products-by-region/?regions=all&products=cognitive-services) から確認できます。

1. [Azure OpenAI を使用してリソースを作成し、モデルをデプロイする](https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal) の内容に従って、Azure OpenAI Serivce のリソースを作成します。
   - モデル : ChatGPT (gpt-35-turbo)
   - 既存のリソースがある場合はそちらをご利用いただいて構いません。
   - ⚠ Azure OpenAI Servce のリソース作成や、モデルのデプロイに時間がかかる場合があります。

1. 下記の情報を取得します。
   - エンドポイント名
   - キー
   - モデルデプロイ名



## Azure App Service 🌐

**製品概要**
- [App Service について](https://learn.microsoft.com/ja-jp/azure/app-service/overview)

**構築と設定**
  
App Service は、まず初めに、App Service Plan　を作り、その上に Web App として、アプリをデプロイする流れとなります。ここでは [クイックスタート：Python Web アプリを Azure App　Service にデプロイする](https://learn.microsoft.com/ja-jp/azure/app-service/quickstart-python?tabs=flask%2Cwindows%2Cazure-cli%2Cvscode-deploy%2Cdeploy-instructions-azportal%2Cterminal-bash%2Cdeploy-instructions-zip-azcli) 
 を参考に、`Azure Portal` を用いて App Service Plan の作成と Web App のデプロイを行います。

> コマンドライン (azure-cli) を用いても同様の操作が可能です。上記クイックスタートのドキュメントにも記載がありますが、`az webapp up` コマンドを用いると、リソースグループの作成、App Service Plan の作成、Web App のデプロイまで一括で行うことができます。 

## Azure Log Analytics 🖌️

**製品概要**

[Azure Monitor ログの概要](https://learn.microsoft.com/ja-jp/azure/azure-monitor/logs/data-platform-logs)

**構築と設定**

Azure Log Analytics は Azure 上で様々なデータソースからログを収集し、分析を行うための Azure Monitor の機能です。ここでは Log Analytics ワークスペースを作成し、リソースのログを収集します。

  - 次のドキュメントを参考に、Log Analytics ワークスペースを作成します。
  
    - [Log Analytics ワークスペースを作成する](https://learn.microsoft.com/ja-jp/azure/azure-monitor/logs/quick-create-workspace?tabs=azure-portal)


  - 多くの Azure リソースは診断設定を持っており、様々なタイプのログを Log Analytics ワークスペースに取り込むことができます。
    
    - [Azure Monitor の診断設定](https://learn.microsoft.com/ja-jp/azure/azure-monitor/essentials/diagnostic-settings?tabs=portal)

Log Analytics ワークスペースを作成し、App Service のログを取り込むためのコマンドの例は次のリンクを参照してください。

  - [Azure Log Analytics によるアプリケーションログの収集](#azure-log-analytics-によるアプリケーションログの収集)

**ログの分析**
  - Log Analytics ワークスペースに集約されたログは Kusto Query Language (KQL) という言語を使用して検索や可視化を行うことができます。基本的な使い方は[こちらのチュートリアル](https://learn.microsoft.com/ja-jp/azure/azure-monitor/logs/log-analytics-tutorial)を参照してください。
  
  - 言語の詳細なリファレンスは以下のドキュメントを参考にしてください。
    - [Kusto クエリ言語の概要](https://learn.microsoft.com/ja-jp/azure/data-explorer/kusto/query/)


## (任意) Azure Cosmos DB の作成 🪐	
**製品概要**

[Azure Cosmos DB の概要](https://learn.microsoft.com/ja-jp/azure/cosmos-db/introduction)

**構築と設定**

Azure ドキュメント [こちら](https://docs.microsoft.com/ja-jp/azure/cosmos-db/create-cosmosdb-resources-portal) を参考に Azure Cosmos DB を作成します。また、Azure Cosmos DB に Analytical Store を有効にする必要があります。詳細は [こちら](https://docs.microsoft.com/ja-jp/azure/cosmos-db/analytical-store-introduction) を参照してください。

- **`Core (SQL)`** を API として選択します。
- コンテナ名は **`chat_log`** とし、パーティションキーは **`/chat_session_id`** とします。

<br/>

---
# 3. クライアント開発環境の構築 🖥️
開発で必要なソフトウェアをクライアント端末にインストールします。

**GitHub Codespaces を利用する場合**
1. https://github.com/Azure/openai-at-scale にアクセス
1. Codespaces の起動
   - 4-core 以上を推奨
1. Python、Node.js バージョン確認
```shell
python --version
node --version
```
1. Azure CLI による認証確認
```shell
az login --use-device
```

**Docker が利用可能な場合**
1. Docker Desktop (もしくは代替ソフトウェア) の起動
1. クライアント端末へのコードのダウンロード
```shell
git clone https://github.com/Azure/openai-at-scale
```
1. Visual Studio Code Dev Container の起動
1. Python、Node.js バージョン確認
```shell
python --version
node --version
```
1. Azure CLI による認証確認
```shell
az login --use-device
```


**Docker が利用不可の場合**
1. クライアント端末へのコードのダウンロード
```shell
git clone https://github.com/Azure/openai-at-scale
```
1. Visual Studio Codeの起動

1. Python、Node.js、Azure CLI のインストール

1. Python、Node.js バージョン確認
```shell
python --version
node --version
```
1. Azure CLI による認証確認
```shell
az login --use-device
```

---
# 4. ChatGPT アプリケーション構築 🤖
## ローカル環境へのデプロイ
### 環境変数の設定

アプリケーションを起動する前に、環境変数を設定するために、`.env.sample` ファイルを参考に `.env` ファイルを作成します。

- `app/frontend/.env`
  - Azure Active Directory の SDK で利用されます.

```shell
# Azure Active Directory application
VITE_CLIENTID="<your client id>"
VITE_TENANTID="<your tenant id>"
```

- `app/fronend/src/aadConfig.ts`
  - Azure Active Directory による認証で用いられます。


```typescript
export const aadConfig = {
    clientId: import.meta.env.VITE_CLIENTID,
    tenantId: import.meta.env.VITE_TENANTID,
    redirectUri: "http://localhost:5173",
    authorityBaseUrl: "https://login.microsoftonline.com/"
};
```

>⚠ 今は変更する必要はありませんが、以降の手順でアプリケーションを起動した際は、Web アプリケーションの環境 (URL、ポート) に応じて redirectUri を変更する必要があります。
>- GitHub Codespaces を用いている場合は、ポート転送で Web アプリケーションにアクセスします。そのため、redirectUri は `http://localhost:5173` ではなく、Codespaces 環境の URL に変更します。ポート番号 5173 の場合は、`https://xxxx-5173.preview.app.github.dev/` のようになります。URL は Visual Studio Code のポートタブから確認できます。
>- また、Azure Active Directory アプリケーションのリダイレクト URI の設定にもこの URL を適宜追加します。

<br/>

- `app/backend/.env`
  - Azure OpenAI Service と Azure Cosmos DB への接続に利用されます。

```shell
# Azure OpenAI Service
AZURE_OPENAI_SERVICE="<your Azure OpenAI Service endpoint>"
OPENAI_API_KEY="<your Azure OpenAI Service key>"
AZURE_OPENAI_CHATGPT_DEPLOYMENT="<your model deployment>"


# (Optional) Azure Cosmos DB
# AZURE_COSMOSDB_ENDPOINT="https://<account_name>.documents.azure.com:443/"
# AZURE_COSMOSDB_KEY="<your Azure Cosmos DB access Key>"
# AZURE_COSMOSDB_DB="< your Azure Cosmos DB database name>"
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

### Python 環境

Python は Flask アプリケーションを稼働させるために必要です。

#### Python ライブラリのインストール

```shell
cd app/backend
python -m venv ./backend_env
source ./backend_env/bin/activate  #bash
pip install -r requirements.txt
```

#### バックエンドアプリケーションの開始 (Flask)

```shell
cd app/backend
flask run --debug #hot reload
#python ./app.py 
```

### Node.js 環境

Node.js is は React アプリケーションを稼働させるために必要です。

#### Node.js パッケージのインストール

```shell
cd app/frontend
npm install
```

#### フロントエンドアプリケーションの開始 (React)
開発用途<br/>

```shell
npm run dev
```

本番用途<br/>

```shell
npm run build
```

> このコマンドは app/backend/static フォルダにデプロイされるアプリケーションファイルのサイズを最適化し削減します。<br/>

### 動作確認
- ローカル環境で Chat 機能や認証機能が使えることを確認します。エラーが発生した場合は、修正してください。
- 本リポジトリでの実装では認証機能の利用は任意です。ユーザ認証しない場合は Anonymous というユーザでアプリケーションをご利用になれます。

<br/>

## Azure へのデプロイ ☁️

### Azure App Service へのデプロイ

- `az webapp up` コマンドを用いたアプリケーションのデプロイ
  - aadConfig.ts ファイルの redirectURI を Web アプリケーションの FQDN に更新します。
    > ⚠ Web アプリケーションの名前はグローバルで一意である必要があります。
    ```typescript
    export const aadConfig = {
    clientId: import.meta.env.VITE_CLIENTID,
    tenantId: import.meta.env.VITE_TENANTID,
    redirectUri: "https://<WebApp Name>.azurewebsites.net/", //Edit here
    authorityBaseUrl: "https://login.microsoftonline.com/"
    };
    ```
  
  - フロントエンドアプリを構築します。
    ```shell
    cd app/frontend
    npm run build
    ```
    > ⚠ `npm run build` を実行することで、フロントエンドファイルが app/backend/static に配置されます。

  - Azure Active Directory アプリケーションのリダイレクト URI に Web アプリケーションの FQDN (`http://<WebApp Name>.azurewebsites.net/`) を追加します。

  - ここでは簡単のために、`az webapp up` コマンドを用いて、Azure App Service と Web アプリケーションを同時にデプロイします。まず dryrun オプションを用いて、`The webapp '<WebApp Name>' doesn't exist` と表示されるか確認します。
    > ⚠ エラーが発生した場合、Web アプリケーションの名前がグローバルで一意になっていない可能性があります。その場合は、新たに Web アプリケーションの名前を決めていただき、本セクションの最初からやり直してください。 
    ```shell
    cd app/backend
    az webapp up -n <WebApp Name> --dryrun
    #az webapp up --runtime "python:3.10" --sku B1 -n <WebApp Name> -p <App Service Plan Name> -g <Resource Group Name> --dryrun
    ```

  - 問題がなければ、`az webapp up` コマンドを実行します。
    ```shell
    cd app/backend
    az webapp up --runtime "python:3.10" --sku B1 -n <WebApp Name> -p <App Service Plan Name> -g <Resource Group Name>
    ```

  - Web アプリケーションをデプロイした後、`Azure Portal` の Azure App Service のアプリケーション設定で以下の環境変数を変更します。
    - OPENAI_API_KEY
    - AZURE_OPENAI_CHATGPT_DEPLOYMENT
    - AZURE_OPENAI_SERVICE
  
  - アプリケーションを開き、動作確認をします。
 

<details><summary>(任意) コマンドベースで Azure App Service Plan と Web アプリケーションをデプロイする方法</summary>


  - ⚠ 上記の手順でもアプリケーションをデプロイできますが、詳細な Azure App Service Plan や Web アプリケーションの設定を変更することはできません。また手動で行なっている部分も多く、自動化することができません。コマンドベースで詳細な設定を行いたい場合は、以下の手順を実行してください。
  - Azure App Service Plan リソースの作成します。

    ```shell
    az appservice plan create -g <Resource Group Name> --is-linux -n <App Service Plan Name> --sku <SKU Name> --location eastus
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

  - Web アプリケーションのデプロイ前に、Azure App Service のアプリケーション設定で環境変数を変更する必要があります。

    ```shell
    az webapp config appsettings set --name <Web App Name> -g <Resource Group Name> --settings SCM_DO_BUILD_DURING_DEPLOYMENT="true"
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
</details>

<br/>

## 設定 ⚙️
### Azure Log Analytics によるアプリケーションログの収集

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


### (オプション) プロンプトログの Azure Cosmos DB への格納
[Logging chat on Azure Cosmos DB](../en/logging_cosmosdb.md) のドキュメント (英語) では、チャットメッセージを Azure Cosmos DB にログ出力し、さらにダウンストリームで洞察を導出する方法について詳しく説明しています。

<br/>

---
# 5. 今後の拡張案  💡

本ハンズオンで構築したアプリケーションは非常にシンプルで Sandbox としての利用用途を想定しています。今後より本格的にビジネスで活用していくためには、改良が必要になります。

## 標準的なセキュア化

クラウドサービスを利用する際に考慮る必要がある全体的なセキュリティ コントロールや、各リソースのセキュリティ設定の推奨を確認するためには [Microsoft Cloud Security Benchmark](https://learn.microsoft.com/ja-jp/security/benchmark/azure/overview) を参照します。ここでは一般的に行われるセキュリティ対策として、Azure OpenAI Service のキーの保護と、ネットワーク制御の一部を紹介します。

<img src="../images/network-control.png" width="800" />

### シークレットの保護

Azure OpenAI Serviceにアクセスするキーはセキュアに取り扱う必要があります。キーを Key Vault に保存することで、複数のアプリケーションでキーを利用する際の運用を簡単にし、アプリケーションへの権限とキーに対するアクセスの権限を分けることができます。

  <details>
  <summary> 手順の概要 </summary>

  ※ この手順の実行には `Microsoft.Authorization/roleAssignments/write` および `Microsoft.Authorization/roleAssignments/delete` のアクセス許可 (ユーザー アクセス管理者や所有者など) が必要です。

- App Service で Managed ID を有効化します。
- Key Vault を作成します。
- Key Vault の RBAC でシークレットの操作を行うユーザーに [キー コンテナー シークレット責任者] を割り当てます。
- シークレットに Azure OpenAI Service のキーを保存します。
- Key Vault の RBAC で App Service の Managed ID に [キー コンテナー シークレット ユーザー] を割り当てます。
- App Service のアプリケーション設定で次の環境変数を追加します。  
  **名前 : OPENAI_API_KEY、値 : @Microsoft.KeyVault(SecretUri=<シークレットのURI>)**  
    [参考：App Service と Azure Functions の Key Vault 参照を使用する](https://learn.microsoft.com/ja-jp/azure/app-service/app-service-key-vault-references?tabs=azure-cli)

  </details>

### ネットワークアクセスの制御

今回のハンズオンの環境は複数の PaaS サービスを使用しています。PaaS サービスはパブリック インターネットからアクセスすることが可能ですが、ほとんどのサービスではネットワーク アクセスの経路を制限するための設定を持っています。以下はパブリック インターネットからのアクセスを許可された経路だけに制限し、リソース間のアクセスをプライベート ネットワークで行うための構成です。

- 仮想ネットワークの構成  
  リソース間のネットワークアクセスをプライベート ネットワーク経由にするために仮想ネットワークを作成します。各 PaaS リソースのプライベート エンドポイントを作成するため、リソースの種類ごとにサブネットを作成します。

- Application Gateway の作成
  アプリケーションの負荷分散とアクセス制御、Web Application Firewall を使用して既知の攻撃の検出とブロックを行うために Application Gateway を作成します。
  <details>
  <summary> 手順の概要 </summary>

  - App Service をバックエンドプールに追加し、Application Gateway 経由でアプリケーションにアクセスできるようにします。
  - Application Gateway へのアクセスは許可された IP からのみの通信に制限します。
  - Application Gateway の診断ログを Log Analytics ワークスペースに送信します。

  </details>

- App Service の閉域化  
  App Service はアプリケーションに対するインバウンド接続と、App Service からのアウトバウンド接続は異なる設定を持つため、それぞれにプライベート通信のための接続を行います。
  
  <details>
  <summary>手順の概要 </summary>

  - App Service でプライベート エンドポイントを作成します。
  - 「パブリック アクセスを許可する」を無効化し、パブリック インターネットからのアクセスが無効になることを確認します。
  - App Service で VNET 統合を有効化し、アウトバウンド接続が仮想ネットワークを経由する設定にします。  

  ※ この構成により、パブリック インターネットからのアプリケーション コードのアップロードも制限されるようになります。アプリケーションを更新する場合には仮想ネットワークを経由するアクセスとするか、一時的にパブリックアクセスを許可する必要があります。

</details>

- Key Vault の閉域化
  
  Key Vault に対するアクセスは Managed ID と RBAC によるセキュアな認証と認可が行われますが、ネットワーク制御を行うことで攻撃面を小さくすることができます。

  <details>
  <summary> 手順の概要 </summary>

  - Key Vault でプライベートエンドポイントを作成します。
  - 「パブリック アクセスの無効化」を選択し、パブリック インターネットからのアクセスが無効になることを確認します。
  - Key Vault の診断ログを Log Analytics ワークスペースに送信します。

    ※ App Service の VNET 統合が既に有効化されているため、App Service からのアクセスは仮想ネットワーク経由で行われます。

</details>

- Azure OpenAI Service の閉域化

  Azure OpenAI Service にプライベート エンドポイントを構成し、全てのサービス間の通信がプライベート ネットワークを経由するようにします。

  <details>
  <summary> 手順の概要 </summary>

  - Azure OpenAI Service でプライベート エンドポイントを作成します。
  - 許可するアクセス元を [無効] に設定し、パブリック インターネットからのアクセスが無効になることを確認します。

  ※ この構成により、パブリック インターネット経由でアクセスするローカルコンピューター上のアプリケーションからのアクセスや、Azure OpenAI Studio からのアクセスが制限されます。現在この構成の有効化 / 無効化には数時間程度かかる場合があるため注意してください。

</details>

## API Management
API Management（以下、APIM） には、[こちら](https://learn.microsoft.com/ja-jp/azure/api-management/api-management-key-concepts) に紹介されているように、API ゲートウェイとしての機能、管理プレーンとして API を構成するための機能、API を開発者として利用するための、開発者ポータルなどがあります。特に今回のように、frontend のための backend API を公開するケースにおいては、APIM のゲートウェイ機能のAPI呼び入れ、JWTトークン、使用量のレートリミット、ロギングなどの機能が役にたつでしょう。

## デプロイの選択肢
今回の環境では、Azure のアプリケーション PaaS として運用が容易である、Azure App Service を使いましたが、その他のオプションについては、[Container Apps と他の Azure コンテナー オプションの比較](https://learn.microsoft.com/ja-jp/azure/container-apps/compare-options) と [Azure でアプリケーションをホストする](https://learn.microsoft.com/ja-jp/azure/developer/intro/hosting-apps-on-azure) のドキュメントを参考に選択すると良いでしょう。また、アプリケーションをどこにホストするか迷った時には、[Azure コンピューティング サービスを選択する](https://learn.microsoft.com/ja-jp/azure/architecture/guide/technology-choices/compute-decision-tree) のフローチャートも参考にしていただけたらと思います。

<br/>

---
# 6. 実装のベストプラクティス 📚
ChatGPT などの LLM をベースとしたアプリケーション開発におけるベストプラクティスや留意点を説明します。

## Fine Tuning vs Prompt Engineering
OpenAI 社が提供するモデルは汎用的なものであるため、ファインチューニングやプロンプトエンジニアリングによって工夫する必要があります。ファインチューニングは特定のタスクに適応しやすくなり高い精度が期待できる一方で、学習のための大量データが必要で、計算リソースのコストも高くなります。一方でプロンプトエンジニアリングは、プロンプトを加工するのみでタスクに適応することができる可能性がありますが、プロンプト長の制限や、プロンプトの組み合わせによるパフォーマンスの懸念があります。

- [プロンプトエンジニアリングの概要](https://learn.microsoft.com/ja-JP/azure/cognitive-services/openai/concepts/prompt-engineering)

## User Experience と責任のある AI
大規模言語モデルは応答時間が長いことがあります。簡単な入力に関してはルールベースで定型文を返すことでパフォーマンスを向上したり、ストリーム処理で結果を返すなどの UI/UX の工夫が必要になります。

また、大規模言語モデルは halluciation と呼ばれる現象が発生する可能性があります。そのため、モデルのアウトプットをモニタリングしたり制御することが必要になるケースがあります。

更には、透明性を保つための緩和策を考えることも重要で、フィードバックの機能を取り入れたり、モデルの出力をユーザーが確認できて必要に応じて編集できるなどの人間を中心としたシステム設計が必要になってきます。

**参考情報**
- [Azure OpenAI Service - Transparency Note](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/transparency-note?context=%2Fazure%2Fcognitive-services%2Fopenai%2Fcontext%2Fcontext&tabs=text)
- [HAX Toolkit](https://www.microsoft.com/en-us/haxtoolkit/toolkit-overview/)

<br/>

---
# 7. その他 ❓
## Q&A
コードに関する質問は GitHub の Issue よりお問い合わせください。
- [Issue - Azure/openai-at-scale](https://github.com/Azure/openai-at-scale/issues)

## 参考情報
