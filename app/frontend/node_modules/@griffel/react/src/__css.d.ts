import type { CSSClassesMapBySlot } from '@griffel/core';
/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms & DOM insertion.
 *
 * @internal
 */
export declare function __css<Slots extends string>(classesMapBySlot: CSSClassesMapBySlot<Slots>): () => Record<Slots, string>;
