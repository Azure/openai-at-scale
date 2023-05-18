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
|   |  |FastTrack for Azure| FastTrack for Azure のプログラムの概要を説明します。 | **プログラム紹介ページ** : [FastTrack for Azure](https://azure.microsoft.com/ja-jp/pricing/offers/azure-fasttrack/) <br/> **セミナー** : [プログラムのご紹介（FTA Intro）セッション](https://developer.microsoft.com/en-us/reactor/events/17981/) |
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
|   |  | ローカル環境| ローカル環境でアプリケーションを構築し、動作確認をします。 |  |
|   |  | Azure 環境| Azure 環境でアプリケーションをデプロイし、動作確認をします。 |  |
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

なお、5月24日(水) 13:00 より Program Manager による FastTrack for Azure 紹介セッションが予定されています。ぜひ参加ください。<br/>
:point_right: [プログラムのご紹介（FTA Intro）セッション](https://developer.microsoft.com/en-us/reactor/events/17981/)

## アーキテクチャ
本セッションで構築するアプリケーションの全体像は以下の通りです。

**開発環境の要件**<br/>
<img src="../images/appcomponents.png" width="500" />


## クライアント開発環境の確認
クライアント端末で開発環境を構築します。

- [ ] GitHub Codespaces、Windows (WSL を利用)、MacOS/Ubuntu のクライアント端末
   - Windows の場合、**Ubuntu 22.04 (Windows Subsystem for Linux)** を利用すること
- [ ] 統合開発環境/エディタ
   - [Visual Studio Code](https://code.visualstudio.com/) を推奨
- [ ] [Docker Desktop](https://www.docker.com/products/docker-desktop/) (もしくは [Rancher Desktop](https://rancherdesktop.io/)
 などの代替品)
- [ ] インターネット接続
    - コードのダウンロード、Python/Javascript やそのライブラリのダウンロードに利用
- [ ] ブラウザ
    - Microsoft Edge もしくは Google Chrome
- [ ] [Git クライアント](https://git-scm.com/downloads)
- [ ] GitHub アカウント
- [ ] ソフトウェア群 (Python、Node.js、Azure CLI)
   - GitHub Codespaces の場合
      - 必要なソフトウェアは Dockerfile の内容に従ってインストールされます。

   - Windows の場合
      - Visual Studio Code Dev Container を利用するため、必要なソフトウェアは Dockerfile の内容に従ってインストールされます。
      - Docker が利用できない場合は、以下をマニュアルで Ubuntu 22.04 (Windows Subsystem for Linux) 上にインストールしてください。
         - Python (3.9 以上)
         - Node.js (16.20 以上)
         - Azure CLI (4.28.1 以上)

   - MacOS/Ubuntu の場合
      - Visual Studio Code Dev Container を利用するため、必要なソフトウェアは Dockerfile の内容に従ってインストールされます。
      - Docker が利用できない場合は、以下をマニュアルでインストールしてください。
         - Python (3.9 以上)
         - Node.js (16.20 以上)
         - Azure CLI (4.28.1 以上)


## Azure 環境の確認
- Azure OpenAI Service 利用申請
   - Azure OpenAI Service を利用するためには、事前に利用申請を行い、Microsoft より承諾を得る必要があります。
   - 申請フォーム : [Request Access to Azure OpenAI Service](https://aka.ms/oai/access)
- Azure 権限
   - Azure Subscription の共同管理者
   - Azure Active Directory のアプリケーションの登録 & そのアプリケーションへのロール割り当て可能な権限

<br/>

---
# 2. Azure サービス構築と設定 🛠️
## Azure Active Directory
**製品概要**
- [Azure Active Directory とは](https://learn.microsoft.com/ja-jp/azure/active-directory/fundamentals/active-directory-whatis)
- [Azure Active Directory のアプリケーションオブジェクトとサービスプリンシパルオブジェクト](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/app-objects-and-service-principals)

**構築と設定**
1. [チュートリアル: Microsoft ID プラットフォームにシングルページ アプリケーションを登録する](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/single-page-app-tutorial-01-register-app) の内容に従って、Azure Active Directory アプリケーションを作成します。
1. 下記の情報を取得します。
   - クライアント ID
   - テナント ID

## Azure OpenAI Service
**製品概要**
- [Azure OpenAI Service とは](https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/overview)
- [Azure OpenAI Service モデル](https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/concepts/models)


**構築と設定**
1. [Azure OpenAI を使用してリソースを作成し、モデルをデプロイする](https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal) の内容に従って、Azure OpenAI Serivce のリソースを作成します。
   - モデル : ChatGPT (gpt-35-turbo)
   - 既存のリソースがある場合はそちらをご利用いただいて構いません。

1. 下記の情報を取得します。
   - エンドポイント名
   - キー
   - モデルデプロイ名

## Azure App Service

**製品概要**
- [App Service について](https://learn.microsoft.com/ja-jp/azure/app-service/overview)

**構築と設定**
  
App Service は、まず初めに、App Service Plan　を作り、その上に Web App として、アプリをデプロイする流れとなります。そのため、`azure-cli` か `Azure Portal` を使い、上記の流れにしたがって

- コマンドラインの場合
  - 最も簡単な例
    - [クイックスタート：Python Web アプリを Azure App　Service にデプロイする](https://learn.microsoft.com/ja-jp/azure/app-service/quickstart-python?tabs=flask%2Cwindows%2Cazure-cli%2Cvscode-deploy%2Cdeploy-instructions-azportal%2Cterminal-bash%2Cdeploy-instructions-zip-azcli) を参考に `az webapp up` コマンドを使うと、デフォルトの設定で App Service が構築され、ローカルのアプリケーションを App Service 上で実行することができます。

- ポータルを使う場合
  - ポータルの操作など、詳しい説明は、割愛しますが、 App Service Plan を構成し、作成した Web App にアプリをデプロイするという流れは変わりません。Web App　のデプロイメントオプションについては、[こちら](https://learn.microsoft.com/ja-jp/azure/app-service/deploy-best-practices)のドキュメントを参考にしてください。

## Azure Monitor

**製品概要**

[Azure Monitor ログの概要](https://learn.microsoft.com/ja-jp/azure/azure-monitor/logs/data-platform-logs)

**構築と設定**

Azure Monitor ログは Azure 上で様々なデータソースからログを収集し、分析を行うための Azure Monitor の機能です。Azure Monitor ログでは Log Analytics ワークスペースを作成し、リソースのログを収集します。

  - 次のドキュメントを参考に、Log Analytics ワークスペースを作成します。
  
    [Log Analytics ワークスペースを作成する](https://learn.microsoft.com/ja-jp/azure/azure-monitor/logs/quick-create-workspace?tabs=azure-portal)


  - 多くの Azure リソースは診断設定を持っており、様々なタイプのログを Log Analytics ワークスペースに取り込むことができます。
    
    [Azure Monitor の診断設定](https://learn.microsoft.com/ja-jp/azure/azure-monitor/essentials/diagnostic-settings?tabs=portal)

Log Analytics ワークスペースを作成し、App Service のログを取り込むためのコマンドの例は次のリンクを参照してください。

[Collect application logs with Azure Log Analytics](https://github.com/Azure/openai-at-scale/blob/main/README.md#collect-application-logs-with-azure-log-analytics)

**ログの分析**
  - Log Analytics ワークスペースに集約されたログは Kusto Query Language (KQL) という言語を使用して検索や可視化を行うことができます。基本的な使い方は[こちらのチュートリアル](https://learn.microsoft.com/ja-jp/azure/azure-monitor/logs/log-analytics-tutorial)を参照してください。
  
  - 言語の詳細なリファレンスは以下のドキュメントを参考にしてください。


    [Kusto クエリ言語](https://learn.microsoft.com/ja-jp/azure/data-explorer/kusto/query/)


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
> 手順は [README.ja.md - 4. ローカル環境へのデプロイ 💻](../../README.ja.md#4-ローカル環境へのデプロイ-)をご参照ください。

---
# 5. 今後の拡張案  💡
本ハンズオンで構築したアプリケーションは非常にシンプルで Sandbox としての利用用途を想定しています。今後より本格的にビジネスで活用していくためには、改良が必要になります。

## ネットワーク アクセスの制御
今回のハンズオンの環境は複数の PaaS サービスを使用しています。PaaS サービスはパブリック インターネットからアクセスすることが可能ですが、ほとんどのサービスではネットワーク アクセスの経路を制限するための設定を持っています。ここではパブリック インターネットからのアクセスを許可された経路だけに制限し、リソース間のアクセスを閉域ネットワークで行うための構成を紹介します。

<img src="../images/network-control.png" width="800" />

- シークレットを Key Vault に保存する
  Open AI サービスにアクセスするキーはセキュアに取り扱う必要があるため、KeyVault に保存したものを参照するように構成します。

  - App Service で Managed ID を有効化します。
  - Key Vault を作成し、Key Vault の RBAC で App Service の Managed ID に [キー コンテナー シークレット ユーザー] を割り当てます。
  - シークレットに Open AI サービスのキーを保存します。
  - App Service のアプリケーション設定で次の環境変数を追加します。
    名前 : OPENAI_API_KEY、値 : @Microsoft.KeyVault(SecretUri=<シークレットのURI>)  
    [参考：App Service と Azure Functions の Key Vault 参照を使用する](https://learn.microsoft.com/ja-jp/azure/app-service/app-service-key-vault-references?tabs=azure-cli)

- 仮想ネットワークの作成  
  リソース間のネットワークアクセスを閉域化するための仮想ネットワークを作成します。各 PaaS リソースのプライベート エンドポイントを接続するために、リソースの種類ごとにサブネットを作成します。

- Application Gateway の作成
  アプリケーションの負荷分散とアクセス制御、既知の攻撃の検出とブロックを行うために Application Gateway を作成します。
  
  - App Service をバックエンドプールに追加し、Application Gateway 経由でアプリケーションにアクセスできるようにします。
  - Application Gateway へのアクセスは許可された IP からのみの通信に制限します。
  - Application Gateway の診断ログを Log Analytics ワークスペースに送信します。

- App Service の閉域化
  App Service はアプリケーションに対するインバウンド接続と、App Service からのアウトバウンド接続は異なる設定を持つため、それぞれに設定が必要です。  
  ※ この構成により、パブリック インターネットからのアプリケーション コードのアップロードも制限されるようになります。アプリケーションを更新する場合には仮想ネットワークを経由するアクセスとするか、一時的にパブリックアクセスを許可してください。
  
  - App Service でプライベート エンドポイントを作成します。
  - 「パブリック アクセスを許可する」を無効化し、パブリック インターネットからのアクセスが無効になることを確認します。
  - App Service で VNET 統合を有効化し、アウトバウンド接続が仮想ネットワークを経由する設定にします。  

- Key Vault の閉域化
  - Key Vault でプライベートエンドポイントを作成します。
  - 「パブリック アクセスの無効化」を選択し、パブリック インターネットからのアクセスが無効になることを確認します。
  - Key Vault の診断ログを Log Analytics ワークスペースに送信します。

    ※ App Service の VNET 統合が既に有効化されているため、App Service からのアクセスは仮想ネットワーク経由で行われます。

- Azure OpenAI Service の閉域化
  ※ この構成により、パブリック インターネット経由でアクセスするローカルコンピューター上のアプリケーションからのアクセスや、Azure Open AI Studio からのアクセスが制限されます。現在この構成の有効化 / 無効化には数時間程度かかる場合があるため注意してください。

  - OpenAI Service でプライベート エンドポイントを作成します。
  - 許可するアクセス元を [無効] に設定し、パブリック インターネットからのアクセスが無効になることを確認します。

    
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

