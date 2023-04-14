import os
import logging
import openai
from flask import Flask, request, jsonify
from azure.identity import DefaultAzureCredential
from approaches.chatreadretrieveread import ChatReadRetrieveReadApproach

# Replace these with your own values, either in environment variables or directly here
AZURE_OPENAI_SERVICE = os.environ.get("AZURE_OPENAI_SERVICE") or "myopenai"
AZURE_OPENAI_GPT_DEPLOYMENT = os.environ.get("AZURE_OPENAI_GPT_DEPLOYMENT") or "davinci"
AZURE_OPENAI_CHATGPT_DEPLOYMENT = os.environ.get("AZURE_OPENAI_CHATGPT_DEPLOYMENT") or "chat"

# Use the current user identity to authenticate with Azure OpenAI, Cognitive Search and Blob Storage (no secrets needed, 
# just use 'az login' locally, and managed identity when deployed on Azure). If you need to use keys, use separate AzureKeyCredential instances with the 
# keys for each service
# If you encounter a blocking error during a DefaultAzureCredntial resolution, you can exclude the problematic credential by using a parameter (ex. exclude_shared_token_cache_credential=True)
azure_credential = DefaultAzureCredential(exclude_shared_token_cache_credential=True)

# Used by the OpenAI SDK
openai.api_type = "azure"
openai.api_base = f"https://{AZURE_OPENAI_SERVICE}.openai.azure.com"
openai.api_version = "2023-03-15-preview"

# Comment these two lines out if using keys, set your API key in the OPENAI_API_KEY environment variable instead
# openai.api_type = "azure_ad"
# openai_token = azure_credential.get_token("https://cognitiveservices.azure.com/.default")
# openai.api_key = openai_token.token
openai.api_key = os.getenv("OPENAI_API_KEY")


chat_approaches = {
    "rrr": ChatReadRetrieveReadApproach(AZURE_OPENAI_CHATGPT_DEPLOYMENT, AZURE_OPENAI_GPT_DEPLOYMENT)

}

app = Flask(__name__)

@app.route("/", defaults={"path": "index.html"})
@app.route("/<path:path>")
def static_file(path):
    print(path)
    return app.send_static_file(path)

@app.route("/chat", methods=["POST"])
def chat():
    print("/chat request", request)
    # ensure_openai_token()
    approach = request.json["approach"]
    try:
        impl = chat_approaches.get(approach)
        if not impl:
            return jsonify({"error": "unknown approach"}), 400
        r = impl.run(request.json["history"], request.json.get("overrides") or {})
        return jsonify(r)
    except Exception as e:
        logging.exception("Exception in /chat")
        return jsonify({"error": str(e)}), 500
    
if __name__ == "__main__":
    app.run()
