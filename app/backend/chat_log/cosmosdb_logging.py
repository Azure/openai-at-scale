import azure.cosmos.cosmos_client as cosmos_client
import azure.cosmos.errors as errors
import azure.cosmos.exceptions as cosmos_exception
import os
import json
from dotenv import load_dotenv

## Read environment variables
env_path = os.path.join(os.path.dirname(__file__), '../.env')
load_dotenv(env_path, verbose=True, override=True)

endpoint = os.environ.get("AZURE_COSMOSDB_ENDPOINT") or None
key = os.environ.get("AZURE_COSMOSDB_KEY") or None 
database_name = os.environ.get("AZURE_COSMOSDB_DB") or None

# Replace with your own values if you are changing the default document structure

container_name = 'chat_log'
partition_key = '/chat_session_id'

class chat_log_result:
    def __init__(self,is_err,err_msg):
        self.is_err = is_err
        self.err_msg = err_msg
        

def insert_chat_log(chat_message) -> chat_log_result:
     chat_log_inserted = False 
     err_message = ""
     if endpoint is not None and key is not None and database_name is not None:
        try:
             client = cosmos_client.CosmosClient(endpoint, {'masterKey': key})
             database = client.create_database_if_not_exists(database_name)
             container = database.create_container_if_not_exists(id=container_name,partition_key=partition_key,default_ttl=3600,offer_throughput=400)
             
             ## Ensure the message has partition key , chat_session_id and user_id
             try:
                if chat_message["chat_session_id"] is not None and len(str(chat_message["chat_session_id"])) > 0:
                    document = container.create_item(body=chat_message)
                    

             except cosmos_exception.CosmosHttpResponseError as err:
                print(err.message)
                chat_log_inserted = True
                err_message = err_message + err.message + " ::: " 
             except:
                msg = "Missing partition key: chat_session_id or invalid message structure" + json.loads(chat_message)
                chat_log_inserted = True
                print(msg)          
                err_message = err_message + msg + " ::: "
                
    
        except cosmos_exception.CosmosHttpResponseError as err:
             err_message = err_message + err.message + " ::: " 
             chat_log_inserted = True
             print(err.message)

     else:
        msg = "Cannot initiate connection as one of the environment variables is empty - AZURE_COSMOSDB_ENDPOINT, AZURE_COSMOSDB_KEY ,AZURE_COSMOSDB_DB"
        chat_log_inserted = True
        print(msg)
        err_message = err_message + msg + " ::: "
     chat_log_res = chat_log_result(is_err=chat_log_inserted,err_msg=err_message)
     return chat_log_res
     


  


      
