import { AskResponse, ChatRequest } from "./models";

export async function chatApi(options: ChatRequest): Promise<AskResponse> {
    console.log("options.approach:", options.approach);
    console.log("chatApi options: ", options.overrides?.promptSytemTemplate);
    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            history: options.history,
            approach: options.approach,
            overrides: {
                top: options.overrides?.top,
                temperature: options.overrides?.temperature,
                prompt_template: options.overrides?.promptTemplate,
                prompt_system_template: options.overrides?.promptSytemTemplate
            }
        })
    });

    const parsedResponse: AskResponse = await response.json();
    if (response.status > 299 || !response.ok) {
        throw Error(parsedResponse.error || "Unknown error");
    }
    console.log("shweta request", parsedResponse);
    return parsedResponse;
}
