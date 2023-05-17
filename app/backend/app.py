import os
import logging
import openai
from flask import Flask, request, jsonify
from azure.identity import DefaultAzureCredential
from approaches.chatreadretrieveread import ChatReadRetrieveReadApproach
from dotenv import load_dotenv

env_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(env_path, verbose=True, override=True)

# Replace these with your own values, either in environment variables or directly here
AZURE_OPENAI_SERVICE = os.environ.get("AZURE_OPENAI_SERVICE") or "myopenai"
AZURE_OPENAI_GPT_DEPLOYMENT = os.environ.get("AZURE_OPENAI_GPT_DEPLOYMENT") or "davinci"
AZURE_OPENAI_CHATGPT_DEPLOYMENT = os.environ.get("AZURE_OPENAI_CHATGPT_DEPLOYMENT") or "chat"

# Used by the OpenAI SDK
openai.api_type = "azure"
openai.api_base = f"https://{AZURE_OPENAI_SERVICE}.openai.azure.com"
openai.api_version = "2023-03-15-preview"
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

    # ensure_openai_token()
    approach = request.json["approach"]
    try:
        impl = chat_approaches.get(approach)
        if not impl:
            return jsonify({"error": "unknown approach"}), 400
        r = impl.run(request.json["history"], request.json.get("overrides") or {}, request.json.get("sessionConfig") or {}, request.json.get("userInfo") or {}, dict(request.headers) or {})
        return jsonify(r)

    except Exception as e:
        logging.exception("Exception in /chat")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run()
