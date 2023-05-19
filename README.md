# OpenAI at Scale

[![Open in GitHub Codespaces](https://img.shields.io/static/v1?style=for-the-badge&label=GitHub+Codespaces&message=Open&color=brightgreen&logo=github)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=622759641&machine=standardLinux32gb&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2&skip_quickstart=true&geo=SoutheastAsia)
[![Open in Remote - Containers](https://img.shields.io/static/v1?style=for-the-badge&label=Remote%20-%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/Azure/openai-at-scale)

🌏 English | [日本語](README.ja.md) 

✨ **OpenAI at Scale** is a workshop by **FastTrack for Azure in Microsoft** team that helps customers to build and deploy simple ChatGPT UI application on Azure.

<img src="./docs/images/chatscreen.png" width="500" />

---

## 🎯 Features

- Chat UI
- Configure system prompts and hyperparameters
- Authenticate with Azure Active Directory and get user information from Microsoft Graph
- Collect application logs with Azure Log Analytics
- Store prompt log data to Azure Cosmos DB

<img src="./docs/images/appcomponents.png" width="500" />

---

## 🚀 Getting Started

### ⚒️ Prerequisites

#### To run locally

- OS - Windows 11, MacOS or Linux
> ⚠ For Windows client user, please use Ubuntu 20.04 LTS (Windows subsystem for Linux) to run this application. <br/>
> ⚠ GitHub Codespaces is supported as Linux envionment.

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) (v4.28.1 or higher)
- [Node.js](https://nodejs.org/en/download/) (v16.20 or higher)
- [Python](https://www.python.org/downloads/) (v3.9 or higher)
- [git client](https://git-scm.com/downloads)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) or any other Docker environment
  - Docker is used for Visual Studio Code Dev Container.


#### To run on Azure

- Azure subscription
  - Resources
    - Azure OpenAI Service
    - Azure Active Directory application
    - Azure Log Analytics
    - (Optional) Azure Cosmos DB
> ⚠ Free account is not supported
- Role
  - Contributor role or higher for Azure subscription
  - Permission to create Azure Active Directory application
  - Permission to create Azure OpenAI Service

<br/>

### 1. Creating Azure OpenAI Service 🧠

There are some ways to create Azure OpenAI Service, we recommend to use Azure Portal if you are not familiar with Azure CLI.

Before started you need to choose a location for your service. You can find the list of available locations here -> supported location is here : [Supported locations](https://azure.microsoft.com/en-us/explore/global-infrastructure/products-by-region/?regions=all&products=cognitive-services)

- **Azure Portal** :
You can follow the [official document](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal) to create Azure OpenAI Service.
- **Azure CLI** : You can use the following command to create Azure OpenAI Service.

<details><summary>command example</summary><br/>

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

### 2. Creating Azure Active Directory application 🔑

Follow the steps in [register your application](https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app) to register your application.

- Select **`Single-page application (SPA)`** as platform type
- The Redirect URI will be **`http://localhost:5000`** and **`http://localhost:5173`** for local development
- Keep the **`Application (client) ID`** and **`Directory (tenant) ID`** for later use

<br/>

### (Optional) 3. Creating Azure Cosmos DB 🪐	

You can create a Azure Cosmos DB account by following instructions on the Azure docs [here](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-portal) and please make sure you enable Analytical Store, more details can be found [here](https://learn.microsoft.com/en-us/azure/cosmos-db/analytical-store-introduction).

- Select **`Core (SQL)`** as API
- Container name will be **`chat_log`** and partition key will be **`/chat_session_id`**

<br/>

### 4. Deploying to local environment 💻


#### Environment variables

You need to create `.env` files from `.env.sample` to set up your environment variables before you spin up your application.

- `app/frontend/.env`
  - This file will be used for authentication function by Azure Active Directory SDK.

```shell
# Azure Active Directory application
VITE_CLIENTID="<your client id>"
VITE_TENANTID="<your tenant id>"
```

- `app/backend/.env`
  - This file will be used for accessing to Azure OpenAI Service and Azure Cosmos DB.

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
> ⚠ Please use [Azure Key Vault](https://azure.microsoft.com/en-US/products/key-vault) to configure environment variables in production environments.
  
  
<details><summary>command examples to get environment variables from Azure CLI.</summary><br/>

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

#### Python environment

Python is required to run the backend Flask application.

##### Install Python libraries

```shell
cd app/backend
python -m venv ./backend_env
source .backend_env/bin/activate  #bash
pip install -r requirements.txt
```

##### Start Backend (Flask)

```shell
cd app/backend
flask run --debug #hot reload
#python ./app.py 
```

#### Node.js environment

Node.js is required to run the frontend React application.

##### Install Node.js packages

```shell
cd app/frontend
npm install
```

##### Start Frontend (React)
For development<br/>

```shell
npm run dev
```

For production<br/>

```shell
npm run build
```
> It is used to optimize and reduce the size of all application files which are deployed in app/backend/static folder. <br/>

<br/>

### 5. Deploying to Azure ☁️

#### Deploy to Azure App Service

> ⚠ Before you run following command, you must run `npm run build` on app/frontend to set frontend files to backend static dir.

- Example of Azure App Service
  - Deploy app to Azure App Service with easist way.

    ```shell
    cd app/backend
    az webapp up --runtime "python:3.10" --sku B1 -g <Resource Group Name>
    ```

  - Deploy Azure App Service Plan and Web App separately.
    - You can deploy an app with above command but the command doesn't allow to change detailed App Service Plan and Web App settings. So if you want to change these settings you can deploy it separately with following command.
    - Create Azure App Service Plan resources

      ```shell
      az appservice plan create -g <Resource Group Name> --is-linux -n <App Service Plan Name> --sku <SKU Name> --location eastus
      ```

    - Create WebApp Resource on above App Service Plan

      ```shell
      az webapp create -g <Resource Group Name> -n <WebApp Name> -p <App Service Plan Name> -r "python:3.10"
      ```

      ⚡️completely optional: if your system needs to add private endpoint and/or VNET integration, you can add it here with following options.

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

    - Update redirectURI at aadConfig.ts and rebuild frontend app
      - Update redirectURI with following FQDN, which is webapp endpoint.
  
        ```shell
        az webapp config hostname list -g <Resource Group Name> --webapp-name <WebApp Name> -o json | jq '.[0].name'
        ```

      - Rebuild frontend

        ```shell
        cd app/frontend
        npm run build
        ```
  
    - Before deployed webapp, you must change the environment variable with application settings of Azure App Service.

      ```shell
      az webapp config appsettings set --name <Web App Name> -g <Resource Group Name> --settings SCM_DO_BUILD_DURING_DEPLOYMENT="true"
      ```


    - Deploy demo app to WebApp

      ```shell
      cd app/backend
      zip -r deploy.zip .
      az webapp deploy -g <Resource Group Name> -n <Webapp Name> --src-path deploy.zip --type zip
      ```

    - After deployed webapp, you must change the environment variables with application settings of Azure App Service.

      ```shell
      az webapp config appsettings set --name <Web App Name> -g <Resource Group Name> --settings OPENAI_API_KEY=<KEY> AZURE_OPENAI_CHATGPT_DEPLOYMENT=<Deployment Model Name> AZURE_OPENAI_SERVICE=<OpenAI Service Name>
      ```

<br/>

### 6. Configuration ⚙️
#### Collect application logs with Azure Log Analytics

  - Example of Log collection
    - Deploy Azure Log Analytics workspace
  
    ```shell
    export APP_SERIVCE=<your app service name>
    export LOCATION=<azure datacenter region - eastus, japaneast, etc...>
    export RESOURCE_GROUP=<your resource group name>
    export WORKSPACE=<your log analytics workspace name>
    export DIAGSETTINNG_NAME=<your diagnistics setting name (arbitary)>

    az monitor log-analytics workspace create --name $WORKSPACE  --resource-group $RESOURCE_GROUP --location $LOCATION
    ```

    - Enable diagnostics setting  

    ```shell
    export RESOURCE_ID=`az webapp show -g $RESOURCE_GROUP -n $APP_SERIVCE --query id --output tsv | tr -d '\r'`
    export WORKSPACE_ID=`az monitor log-analytics workspace show -g $RESOURCE_GROUP --workspace-name $WORKSPACE --query id --output tsv | tr -d '\r'`

    az monitor diagnostic-settings create \
      --resource $RESOURCE_ID \
      --workspace $WORKSPACE_ID \
    -n $DIAGSETTINNG_NAME \
    --logs '[{"category": "AppServiceAppLogs", "enabled": true},{"category": "AppServicePlatformLogs", "enabled": true},{"category": "AppServiceConsoleLogs", "enabled": true},{"category": "AppServiceAuditLogs", "enabled": true},{"category": "AppServiceHTTPLogs", "enabled": true}]'
    ```


#### (Optional) Store prompt log data to Azure Cosmos DB
The [logging chat on Azure Cosmos DB](docs/en/logging_cosmosdb.md) section explains in detail on how chat messages can be logged into Azure Cosmos DB and used in deriving insights further downstream.


---
## 🙋🏾‍♂️Question and Feedback

You can ask question and feedback about this repo on [GitHub Issues](https://github.com/Azure/openai-at-scale/issues).

---
## 📚 Resources

- [ChatGPT + Enterprise data with Azure OpenAI and Cognitive Search](https://github.com/Azure-Samples/azure-search-openai-demo)
  - This repo is based on this sample code.

---
## 🤝 Contributing
We are welcome your contribution from customers and internal Microsoft employees. Please see [CONTRIBUTING](./CONTRIBUTING.md). We appreciate all contributors to make this repo thrive!

<a href="https://github.com/Azure/openai-at-scale/graphs/contributors"><img src="https://contrib.rocks/image?repo=Azure/openai-at-scale&max=240&columns=18" /></a>
