## Logging prompt log with Azure Cosmos DB
Large scale systems that are adopting Azure OpenAI APIs to incorporate Large Language Models such as chatgpt. Logging the user interactions in terms of prompts and responses is very critical. This data can be used for downstream analytis in determining patterns of conversations, identifying risks and effectiveness of the model in providing accurate responses. 

### Azure Cosmos DB
We have decided to store the prompt log in Azure Cosmos DB as it can scale to a large number of concurrent transactions and has the provision of an Analytical store that enables executing analytical queries at scale with controlled costs.

### Typical downstream Analytics
Following are examples of some analytical use-cases in addition to the monitoring and logging use-cases that can be built. This repository will have a set of pre-designed dashboard implementing the below use-cases and can be extended to others depending on specific requirements of the implementations.

1. Sentiment analytics on conversations
2. Common topics discussed 
3. Conversation stats in a session
4. Concurrent sessions stats

## Document Structure
Following is the JSON document structure that will store the prompt log data. 

{
    "chat_session_id": "<unique session ID created for a chat>",
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

### Partitioning 
Recommended partitioning key for storing prompt log data is "chat_session_id". This will ensure that all prompts related to the same session are in the same partitions, and basic logging queries will avoid cross-partitions queries. 

Following structure automatically created in the analytical store will enable further analytics (WIP).

Coming Soon
1. Setting up Azure Cosmos DB for prompt logging
2. Inserting prompt log data into Azure Cosmos DB
3. Dashboards for Analytics
