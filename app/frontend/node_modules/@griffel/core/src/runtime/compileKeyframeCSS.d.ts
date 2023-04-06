import { GriffelAnimation } from '../types';
export declare function compileKeyframeRule(keyframeObject: GriffelAnimation): string;
/**
 * Creates CSS rules for insertion from passed CSS.
 */
export declare function compileKeyframesCSS(keyframeName: string, keyframeCSS: string): string[];
