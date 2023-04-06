import type { CSSClassesMapBySlot, CSSRulesByBucket } from '@griffel/core';
/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
export declare function __styles<Slots extends string>(classesMapBySlot: CSSClassesMapBySlot<Slots>, cssRules: CSSRulesByBucket): () => Record<Slots, string>;
