import { CSSClassesMapBySlot, CSSRulesByBucket, StylesBySlots } from './types';
/**
 * Calls resolveStyleRules() for each slot, is also used by build time transform.
 *
 * @param stylesBySlots - An object with makeStyles rules where a key is a slot name
 *
 * @return - A tuple with an object classnames mapping where a key is a slot name and an array with CSS rules
 */
export declare function resolveStyleRulesForSlots<Slots extends string | number>(stylesBySlots: StylesBySlots<Slots>): [CSSClassesMapBySlot<Slots>, CSSRulesByBucket];
