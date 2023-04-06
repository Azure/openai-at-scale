import { CSSBucketEntry } from '../../types';
/**
 * @internal
 *
 * @param entry - CSS bucket entry that can be either a string or an array
 * @returns An array where the first element is the CSS rule
 */
export declare function normalizeCSSBucketEntry(entry: CSSBucketEntry): [string] | [string, Record<string, unknown>];
