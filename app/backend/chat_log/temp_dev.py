import azure.cosmos.cosmos_client as cosmos_client

import azure.cosmos.errors as errors
import uuid
import cosmosdb_logging

## Sample code to insert chat log data into Cosmos DB 

if __name__ == "__main__":       
    chat_session_id = str(uuid.uuid4())
    user_id = str(uuid.uuid4())
    chat_id = str(uuid.uuid4())
    previous_message_id = str(uuid.uuid4())
    document_definition = { "id": str(uuid.uuid4()),
                            "chat_session_id": chat_session_id, 
                           "user": {"name":'test',"user_id":user_id}, 
                           'message': {"id":chat_id, 
                                       "prompt":[{"role":"system","content":"test content"},{"role":"human","content":"test content works!"}],
                                       "other_attr":[{"completion":  {
                                                        "choices": [
                                                        {
                                                            "finish_reason": "stop",
                                                            "index": 0,
                                                            "message": {
                                                            "content": "",
                                                            "role": "assistant"
                                                            }
                                                        }
                                                        ]}},{"created":"datetime"},{"model": "gpt-35-turbo"},{"object": "chat.completion"},{"usage": {
                                                            "completion_tokens": 95,
                                                            "prompt_tokens": 664,
                                                            "total_tokens": 759
                                                        }}],
                                            "previous_message_id":previous_message_id}}
    #document = container.create_item(body=document_definition)
    
    result = cosmosdb_logging.insert_chat_log(document_definition)
    if result.is_err == True:
        print('chat log insert error:  ' + result.err_msg)
    else:
        print('chat log inserted successfully')

    







# Create a container with partition key




# Insert a JSON document with partition key




'''

{
    : "<unique session ID created for a chat>",
    "user":{"name":"","user_id":"<unique ID identifying user who initiated the chat, Ex: AD Guid>"},    
    "message":{
        "id": "unique ID identifying the message",
        "prompt":[{
            "role": "system | human",
            "content": "message content"

        }],
        
        "other_attr": [{"completion":  {
            "choices": [
              {
                "finish_reason": "stop",
                "index": 0,
                "message": {
                  "content": "",
                  "role": "assistant"
                }
              }
            ]}},{"created":"datetime"},{"model": "gpt-35-turbo"},{"object": "chat.completion"},{"usage": {
                "completion_tokens": 95,
                "prompt_tokens": 664,
                "total_tokens": 759
              }}],
        "previous_message_id": ""
        
    }
}

'''