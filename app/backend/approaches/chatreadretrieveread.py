import openai
from approaches.approach import Approach
from text import nonewlines

# Simple retrieve-then-read implementation, using the Cognitive Search and OpenAI APIs directly. It first retrieves
# top documents from search, then constructs a prompt with them, and then uses OpenAI to generate an completion 
# (answer) with that prompt.
class ChatReadRetrieveReadApproach(Approach):


    # def __init__(self, chatgpt_deployment: str, gpt_deployment: str, sourcepage_field: str, content_field: str):
    def __init__(self, chatgpt_deployment: str, gpt_deployment: str):
        self.chatgpt_deployment = chatgpt_deployment
        self.gpt_deployment = gpt_deployment
        # self.sourcepage_field = sourcepage_field
        # self.content_field = content_field

    def run(self, history: list[dict], overrides: dict) -> any:
        print(overrides)
        use_semantic_captions = True if overrides.get("semantic_captions") else False
        top = overrides.get("top") or 3
        exclude_category = overrides.get("exclude_category") or None
        filter = "category ne '{}'".format(exclude_category.replace("'", "''")) if exclude_category else None
        temperature = overrides.get("temperature") or 0.5
        promptSystemTemplate = overrides.get("prompt_system_template") or "You are an AI assistant that helps people find information."
        # print(openai.Model.list())
        # Step
        system_prompt_template = {}
        system_prompt_template["role"] = "system"
        system_prompt_template["content"] = promptSystemTemplate
        user_prompt_template = {}
        user_prompt_template["role"] = "user"
        user_prompt_template["content"] = history[-1]["user"]
        print([system_prompt_template, user_prompt_template])
        completion = openai.ChatCompletion.create(
            engine=self.chatgpt_deployment,
            messages = [system_prompt_template, user_prompt_template],
            temperature=temperature,
            max_tokens=800,
            top_p=0.95,
            frequency_penalty=0,
            presence_penalty=0,
            stop=None)
        print(completion)
        return {"data_points": [], "answer": completion.choices[0].message["content"], "thoughts": None}
    
    def get_chat_history_as_text(self, history, include_last_turn=True, approx_max_tokens=1000) -> str:
        history_text = ""
        for h in reversed(history if include_last_turn else history[:-1]):
            history_text = """<|im_start|>user""" +"\n" + h["user"] + "\n" + """<|im_end|>""" + "\n" + """<|im_start|>assistant""" + "\n" + (h.get("bot") + """<|im_end|>""" if h.get("bot") else "") + "\n" + history_text
            if len(history_text) > approx_max_tokens*4:
                break    
        return history_text
