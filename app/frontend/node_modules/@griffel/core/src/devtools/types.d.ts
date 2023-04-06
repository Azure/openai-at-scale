import { SequenceHash } from '../types';
declare global {
    interface Window {
        __GRIFFEL_DEVTOOLS__: {
            getInfo: (el: HTMLElement) => DebugResult | undefined;
        };
    }
}
export declare type DebugAtomicClassName = {
    className: string;
    overriddenBy?: string;
};
export declare type DebugCSSRules = Record<string, string>;
export declare type DebugSequence = {
    sequenceHash: SequenceHash;
    direction: 'ltr' | 'rtl';
    children: DebugSequence[];
    debugClassNames: DebugAtomicClassName[];
    slot?: string;
    rules?: DebugCSSRules;
    sourceURL?: string;
};
export declare type DebugResult = DebugSequence;
