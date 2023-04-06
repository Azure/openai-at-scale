import type { GriffelStylesStrictCSSObject } from '../types';
import { FlexInput } from './types';
declare type FlexStyle = Pick<GriffelStylesStrictCSSObject, 'flexGrow' | 'flexShrink' | 'flexBasis'>;
/**
 * A function that implements CSS spec conformant expansion for "flex".
 *
 * @example
 *   flex('auto')
 *   flex(1, '2.5rem')
 *   flex(0, 0, 'auto')
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
 */
export declare function flex(...values: FlexInput): FlexStyle;
export {};
