# 1. OpenAI at Scale 概要
## 目的とアジェンダ
### 目的
OpenAI at Scale は FastTrack for Azure が提供する計 3 日間のハンズオンセッションです。Azure OpenAI Service を通じて ChatGPT を利用したサンドボックス的な簡易アプリケーションを構築します。

- エンタープライズ対応した ChatGPT アプリケーションを Azure 上に構築する
- アプリーケーションで利用する Azure サービスの基本を理解する

### アジェンダ
#### Day1
|   | Section | Item | Description | Reference |
|---|--|--|--|--|
| 1 | OpenAI at Scale 概要|  |  |  |
|   |  |目的とアジェンダ| OpenAI at Scale の目的とアジェンダを説明します。 |  |
|   |  |FastTrack for Azure| FastTrack for Azure のプログラムの概要を説明します。 | [FastTrack for Azure](https://azure.microsoft.com/ja-jp/pricing/offers/azure-fasttrack/) |
|   |  |アーキテクチャ| 本ハンズオンで構築するアプリケーションのアーキテクチャを説明します。 |  |
|   | 環境の確認 ||  |  |
|   |  | クライアント開発環境 | 開発者ごとのクライアント端末における開発環境を確認します。 |  |
|   |  | Azure 環境の開発 | Azure OpenAI Service の申請状況、サブスクリプション上での権限の確認をします。 |  |
| 2 | Azure サービス 概要|  |  |  |
|   |  | Azure OpenAI Service | Azure OpenAI Service の概要を説明します。 | [Web](https://azure.microsoft.com/ja-jp/products/cognitive-services/openai-service) / [Document](https://learn.microsoft.com/ja-JP/azure/cognitive-services/openai/overview) |
|   |  | Azure App Service    | Azure App Service の概要を説明します。 | [Web](https://azure.microsoft.com/ja-jp/products/app-service) / [Document](https://learn.microsoft.com/ja-JP/azure/app-service/) |
|   |  | Azure Monitor        | Azure Monitor の概要を説明します。 | [Web](https://azure.microsoft.com/ja-jp/products/monitor) / [Document](https://learn.microsoft.com/ja-JP/azure/azure-monitor/) |


#### Day2
|   | Section | Item | Description | Reference |
|---|--|--|--|--|
| 3 | Azure サービス構築と設定|  |  |  |
|   |  |Azure OpenAI Service| Azure OpenAI Service のリソースを作成し、モデルをデプロイします。 | [リソースの作成 & モデルデプロイ](https://learn.microsoft.com/ja-JP/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal) |
|   |  |Azure App Service| Azure App Service のリソースを作成します。 | [クイックスタート : Python をデプロイする](https://learn.microsoft.com/ja-jp/azure/app-service/quickstart-python?tabs=flask%2Cwindows%2Cvscode-aztools%2Cvscode-deploy%2Cdeploy-instructions-azportal%2Cterminal-bash%2Cdeploy-instructions-zip-azcli) |
|   |  |Azure Monitor| Azure Monitor のリソースを作成します。 | [チュートリアル : リソースログを収集して表示する](https://learn.microsoft.com/ja-jp/azure/azure-monitor/essentials/tutorial-resource-logs) |
|   |  |Azure Active Directory| アプリケーションを作成します。 | [チュートリアル: Microsoft ID プラットフォームにシングルページ アプリケーションを登録する](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/single-page-app-tutorial-01-register-app) |
| 4 |　クライアント開発環境の構築 |  |  |  |
|   |  | Docker | Docker Desktop を起動します。 |  |
|   |  | Visual Studio Code | Visual Studio Code 上でコードを開きます。 |
|   |  | Python | DevContainer or マニュアルで Python をインストールします。また、利用するライブラリをインストールします。 |  |
|   |  | Node.js | DevContainer or マニュアルで Node.js をインストールします。また、利用するパッケージをインストールします。 |  |
|   |  | Azure CLI | DevContainer or マニュアルで Azure CLI をインストールします。また、Azure Active Directory 上のユーザでログインします。 |  |
| 5 | ChatGPT アプリケーション構築|  |  |  |
|   |  | ローカル環境| ローカル環境でアプリケーションを構築し、動作確認をします。 |  |
|   |  | Azure 環境| Azure 環境でアプリケーションをデプロイし、動作確認をします。 |  |
|   |  | 設定 | ログの取得などの追加設定を行い、動作確認をします。 |  |

#### Day3
|   | Section | Item | Description | Reference |
|---|--|--|--|--|
| 5' | ChatGPT アプリ構築 (前日の続き) ||
| 6 | 今後の拡張案 |  | アプリケーションを改良するポイントを説明します。 |  |
| 7 | 実装のベストプラクティス|  | LLM をベースとしたアプリケーション開発におけるベストプラクティスや留意点について説明します。 |  |
| 8 | その他 | |  |
|   | | Q&A |  |
|   | | 参考情報 |  |


## FastTrack for Azure
FastTrack for Azure は、Azure の迅速に & 確実な構築を支援するカスタマーサクセスプログラムです。Azure 製品部門に所属する Engineer と Program Manager が担当します。Azure をご利用いただくお客様やパートナー様がご利用になれます。

## アーキテクチャ
本セッションで構築するアプリケーションの全体像は以下の通りです。

<TODO:アーキテクチャの絵を添付する>

## 環境の確認
本格的な作業に入る前に環境の確認を行います。
### クライアント開発環境

<TODO:パワポの内容を転記する>

### Azure 環境
- Azure OpenAI Service 利用許可
   - Azure OpenAI Service を利用するためには、事前に利用申請を行い、Microsoft より承諾を得る必要があります。
- Azure 権限
   - Azure Subscription の共同管理者
   - アプリケーションの登録 & そのアプリケーションへのロール割り当て可能な権限


---
# 2. Azure サービス概要
## Azure OpenAI Service
## Azure App Service
## Azure Monitor

---
# 3. Azure サービス構築と設定
## Azure OpenAI Service

1. 下記の情報を取得します。
   - エンドポイント名
   - キー
   - モデルデプロイ名
## Azure App Service
## Azure Monitor
## Azure Active Directory
1. [チュートリアル: Microsoft ID プラットフォームにシングルページ アプリケーションを登録する](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/single-page-app-tutorial-01-register-app) の内容に従って、Azure Active Directory アプリケーションを作成します。
1. 下記の情報を取得します。
   - クライアント ID
   - テナント ID

---
# 4. クライアント開発環境の構築
## Docker
Visual Studio Code の DevContainer で利用する Docker Desktop や代替ソフトウェアを起動します。
## Visual Studio Code
Visual Studio Code を起動し、前ステップで取得したコードを DevContainer で開きます。
## Python
DevContainer or マニュアルで Python をインストールします。また、利用するライブラリをインストールします。
## Node.js
DevContainer or マニュアルで Node.js をインストールします。また、利用するパッケージをインストールします。
## Azure CLI
DevContainer or マニュアルで Azure CLI をインストールします。また、Azure Active Directory 上のユーザでログインします。

---
# 5. ChatGPT アプリケーション構築
## ローカル環境
Azure のアプリケーションをデプロイする前に、ローカル環境でアプリケーションをビルドし、最低限の動作確認をします。
1. コードの取得
   - git clone もしくは Zip ファイルでハンズオンで利用するコードを取得します。
1. Visual Studio Code 起動
1. DevContainer 起動
   - もしくは Python、Node.js、Azure CLI をマニュアルでインストール
1. Python、Node.js のライブラリ/パッケージのインストール
1. Flask/React の起動
1. React のビルド
1. 動作確認

## Azure 環境
ビルドした静的ファイルを含む Flask アプリケーションを Azure App Service にデプロイします。

1. Azure CLI によるデプロイ
1. 動作確認

## 設定
### Azure Active Directoy アプリケーション
1. Redirect URL の設定

### Azure Monitor

### Azure Cosmos DB (Advanced)


---
# 6. 今後の拡張案
本ハンズオンで構築したアプリケーションは非常にシンプルで Sandbox としての利用用途を想定しています。今後より本格的にビジネスで活用していくためには、改良が必要になります。

## 仮想ネットワーク対応
今回構築したアプリケーションは Azure Active Directory による認証機能を容易につけることはできますが、仮想ネットワークには対応していません。今後よりセキュリティを強固にしていくために、仮想ネットワークを考慮したアーキテクチャにすることを検討すると良いかも知れません。


---
# 7. 実装のベストプラクティス
ChatGPT などの LLM をベースとしたアプリケーション開発におけるベストプラクティスや留意点を説明します。

## Fine Tuning vs Prompt Engineering

---
# 8. その他
## Q&A
希望があれば後日フォローアップするミーティングを設定致します。

## 参考情報

