export const enum Approaches {
    RetrieveThenRead = "rtr",
    ReadRetrieveRead = "rrr",
    ReadDecomposeAsk = "rda"
}

export type AskRequestOverrides = {
    semanticRanker?: boolean;
    semanticCaptions?: boolean;
    excludeCategory?: string;
    promptSystemTemplate?: string;
    maxResponse?: number;
    temperature?: number;
    top?: number;
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
};
