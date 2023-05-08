export const enum Approaches {
    RetrieveThenRead = "rtr",
    ReadRetrieveRead = "rrr",
    ReadDecomposeAsk = "rda"
}

export type AskRequestOverrides = {
    promptSystemTemplate?: string;
    maxResponse?: number;
    temperature?: number;
    top?: number;
};

export type SessionConfig = {
    pastMessages?: number;
};

export type AskResponse = {
    answer: string | undefined;
    error?: string;
};

export type ChatTurn = {
    user: string;
    bot: string | undefined;
};

export type ChatRequest = {
    history: ChatTurn[];
    approach: Approaches;
    overrides?: AskRequestOverrides;
    sessionConfig?: SessionConfig;
};
