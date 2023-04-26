import azure.cosmos.cosmos_client as cosmos_client
import azure.cosmos.errors as errors

# Initialize the Cosmos client
endpoint = "https://<your-account>.documents.azure.com:443/"
key = '<your-key>'
client = cosmos_client.CosmosClient(endpoint, {'masterKey': key})

# Create a database
database_name = 'mydatabase'
database = client.create_database(database_name)

# Create a container with partition key
container_name = 'mycontainer'
partition_key = '/myPartitionKey'
container_definition = {'id': container_name, 'partitionKey': {'paths': [partition_key]}, 'defaultTtl': 3600}
container_options = {'offerThroughput': 400}
container = database.create_container(container_definition, options=container_options)

# Insert a JSON document with partition key
document_definition = {'id': 'document_id', 'myPartitionKey': 'partition_key_value', 'name': 'sample document'}
document = container.create_item(body=document_definition)

