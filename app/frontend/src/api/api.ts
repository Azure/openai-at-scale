import { AskResponse, ChatRequest } from "./models";

export async function chatApi(options: ChatRequest): Promise<AskResponse> {
    console.log("options.approach:", options.approach);
    console.log("chatApi options: ", options.overrides?.promptSystemTemplate);
    console.log("sessionId: ", options.sessionId?.sessionId);
    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + options.accessToken?.accessToken || "",
            SessionId: options.sessionId?.sessionId || "",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            history: options.history,
            approach: options.approach,
            overrides: {
                top: options.overrides?.top,
                temperature: options.overrides?.temperature,
                prompt_system_template: options.overrides?.promptSystemTemplate,
                maxResponse: options.overrides?.maxResponse
            },
            sessionConfig: {
                pastMessages: options.sessionConfig?.pastMessages
            },
            userInfo: {
                username: options.userInfo?.username,
                email: options.userInfo?.email
            },
        })
    });

    const parsedResponse: AskResponse = await response.json();
    if (response.status > 299 || !response.ok) {
        throw Error(parsedResponse.error || "Unknown error");
    }

    return parsedResponse;
}
