import { MakeStylesOptions, StylesBySlots } from './types';
export declare function makeStyles<Slots extends string | number>(stylesBySlots: StylesBySlots<Slots>): (options: MakeStylesOptions) => Record<Slots, string>;
