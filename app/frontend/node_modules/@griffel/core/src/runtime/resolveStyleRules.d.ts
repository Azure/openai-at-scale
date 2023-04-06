import { GriffelStyle, CSSClassesMap, CSSRulesByBucket } from '../types';
/**
 * Transforms input styles to classes maps & CSS rules.
 *
 * @internal
 */
export declare function resolveStyleRules(styles: GriffelStyle, selectors?: string[], media?: string, layer?: string, support?: string, cssClassesMap?: CSSClassesMap, cssRulesByBucket?: CSSRulesByBucket, rtlValue?: string): [CSSClassesMap, CSSRulesByBucket];
