declare type LineParseResult = null | {
    name: string;
    loc: string | null;
};
export declare function parseStackTraceLine(line: string): LineParseResult;
export {};
