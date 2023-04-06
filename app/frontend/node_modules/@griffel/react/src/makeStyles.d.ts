import type { GriffelStyle } from '@griffel/core';
export declare function makeStyles<Slots extends string | number>(stylesBySlots: Record<Slots, GriffelStyle>): () => Record<Slots, string>;
