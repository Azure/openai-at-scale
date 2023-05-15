# OpenAI at Scale
>
> Note
This content is in early alpha stage and is subject to change.

**OpenAI at Scale** is a workshop by FastTrack for Azure team that helps customers to build and deploy simple ChatGPT UI application on Azure.

<img src="./docs/appcomponents.png" width="400">

## Features

- Chat and Q&A interfaces
- Configure system prompts and hyperparameters
- Authenticate with Azure Active Directory and get user information from Microsoft Graph
- Store logs into Cosmos DB and Log Analytics

<img src="./docs/chatscreen.png" width="400">

---

## Get Started

### Prerequisites
#### To run locally
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) (v4.28.1 or higher)
- [Node.js](https://nodejs.org/en/download/) (v16.20 or higher)
- [Python](https://www.python.org/downloads/) (v3.9 or higher)
- [git](https://git-scm.com/downloads)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) or any other Docker environment
  - for running VSCode DevContainer


> ⚠ For Windows client user, please use WSL Ubuntu 20.04 LTS to run this application.

#### To run on Azure
- Azure subscription
  - Resources
    - Azure OpenAI Service
    - Azure Active Directory application
    - Azure Log Analytics
    - (Optional) Azure Cosmos DB
  - ⚠ Free account is not supported
- Role
  - Contributor role or higher for Azure subscription
  - Permission to create Azure Active Directory application
  - Permission to create Azure OpenAI Service


### Creating Azure OpenAI Service

There are some ways to create Azure OpenAI Service, we recommend to use Azure Portal if you are not familiar with Azure CLI.

Before started you need to choose a location for your service. You can find the list of available locations here -> supported location is here : [Supported locations](https://azure.microsoft.com/en-us/explore/global-infrastructure/products-by-region/?regions=all&products=cognitive-services)

- **Azure Portal** :
You can follow the [official document](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal) to create Azure OpenAI Service.
- **Azure CLI** : You can use the following command to create Azure OpenAI Service.

```shell
# Set environment variables
export SUBSCRIPTION_ID=<your subscription id>
export RESOURCE_GROUP=<your resource group name>
export LOCATION=eastus #hard coded to avoid confusion, you can change any avaiable location.
export OPENAI_SERVICE_NAME=<your openai service name>
export AZURE_OPENAI_CHATGPT_DEPLOYMENT=<deployment name of your gpt-35-turbo model>
```

```shell
az login #check your subscription id
az account set --subscription $SUBSCRIPTION_ID
az group create --name $RESOURCE_GROUP  --location $LOCATION
az cognitiveservices account create \
    --name $OPENAI_SERVICE_NAME \
    --kind OpenAI \
    --sku S0 \
    --resource-group $RESOURCE_GROUP \
    --location $LOCATION \
    --yes
az cognitiveservices account deployment create \
   -g $RESOURCE_GROUP  \
   -n $OPENAI_SERVICE_NAME \
   --deployment-name $AZURE_OPENAI_CHATGPT_DEPLOYMENT \
   --model-name gpt-35-turbo \
   --model-version "0301"  \
   --model-format OpenAI \
   --scale-settings-scale-type "Standard"
```

### Creating Azure Active Directory application

Follow the steps in [register your application](https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app) to register your app.

- Select **`Single-page application (SPA)`** as platform type
- The Redirect URI will be **`http://localhost:5000`** and/or **`http://localhost:5173`** for local development
- Keep the **`Application (client) ID`** and **`Directory (tenant) ID`** for later use





### Deploy to local environment
#### Environment variables
You need to create following files to set up your environment variables before you spin up your application.

- `app/frontend/.env`
  - This file will be used for authentication function by Azure AD SDK.

```shell
VITE_clientId="<your client id>"
VITE_tenantId="<your tenant id>"
```

- `app/backend/.env`
  - This file will be used for accessing to Azure OpenAI Service.

```shell
AZURE_OPENAI_SERVICE="<your Azure OpenAI Service endpoint>"
OPENAI_API_KEY="<your Azure OpenAI Service key>"
AZURE_OPENAI_CHATGPT_DEPLOYMENT="<your model deployment>"
```


> Run the following commands to get environment variables from Azure CLI.

```shell
export RESOURCE_GROUP=<your resource group name>
export OPENAI_SERVICE_NAME=<your openai service name>
export AZURE_OPENAI_CHATGPT_DEPLOYMENT=<deployment name of your gpt-35-turbo model>
export OPENAI_API_KEY=`az cognitiveservices account keys list \
-n $OPENAI_SERVICE_NAME \
-g $RESOURCE_GROUP \
-o json \
| jq -r .key1`
export AZURE_OPENAI_SERVICE_ENDPOINT=`az cognitiveservices account show \
-n $OPENAI_SERVICE_NAME \
-g $RESOURCE_GROUP \
-o json \
| jq -r .properties.endpoint`
```


### Python environment
Python is required to run the backend application, Flask.

#### Install Python libraries
```shell
cd app/backend
python -m venv ./backend_env
./backend_env/bin/python -m pip install -r requirements.txt
```

#### Start Backend (Flask)

```shell
cd app/backend
./backend_env/bin/python ./app.py
```

### Node.js environment
Node.js is required to run the frontend application, React.

#### Install Node.js packages
```shell
cd app/frontend
npm install
```

##### Start Frontend (React)
For development<br/>
```shell
cd app/frontend
npm install
npm run dev
```

For production<br/>
```shell
cd app/frontend
npm install
npm run build
```
> It is used to optimize and reduce the size of all application files which are deployed in app/backend/static folder. <br/>
> Please access via Flask application.



### Deploy to Azure

> Under construction

> ⚠ Before you run following command, you must run `npm run build` on app/frontend to set frontend files to backend static dir.

- example of App Service
  - deploy to app service
  ```shell
  cd app/backend
  az webapp up --runtime "python:3.10" --sku B1 -g <Resource Group Name>
  ```

  - after dployed webapp, you must change the environment variables with application settings of App Service.
  ```shell
  az webapp config appsettings set --name <Web App Name> -g <Resource Group Name> --settings OPENAI_API_KEY=<KEY> AZURE_OPENAI_CHATGPT_DEPLOYMENT=<Deployment Model Name>
  ```

## Resources

- [ChatGPT + Enterprise data with Azure OpenAI and Cognitive Search](https://github.com/Azure-Samples/azure-search-openai-demo)
  - This repo is based on this sample code.
