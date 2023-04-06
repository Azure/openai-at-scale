import { CSSClassesMapBySlot, CSSClassesMap } from '../types';
/**
 * Reduces a classname map for slot to a classname string. Uses classnames according to text directions.
 *
 * @private
 */
export declare function reduceToClassName(classMap: CSSClassesMap, dir: 'ltr' | 'rtl'): string;
/**
 * Reduces classname maps for slots to classname strings. Registers them in a definition cache to be used by
 * `mergeClasses()`.
 *
 * @internal
 */
export declare function reduceToClassNameForSlots<Slots extends string | number>(classesMapBySlot: CSSClassesMapBySlot<Slots>, dir: 'ltr' | 'rtl'): Record<Slots, string>;
