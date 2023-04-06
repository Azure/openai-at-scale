import { MakeStylesOptions, CSSClassesMapBySlot } from './types';
/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms & DOM insertion.
 *
 * @internal
 */
export declare function __css<Slots extends string>(classesMapBySlot: CSSClassesMapBySlot<Slots>): (options: Pick<MakeStylesOptions, 'dir'>) => Record<Slots, string>;
