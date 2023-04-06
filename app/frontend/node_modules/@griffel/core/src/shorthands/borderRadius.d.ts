import type { GriffelStylesStrictCSSObject } from '../types';
import { BorderRadiusInput } from './types';
declare type BorderRadiusStyle = Pick<GriffelStylesStrictCSSObject, 'borderBottomRightRadius' | 'borderBottomLeftRadius' | 'borderTopRightRadius' | 'borderTopLeftRadius'>;
/**
 * A function that implements CSS spec conformant expansion for "borderRadius". "/" is not supported, please use CSS
 * longhands directly.
 *
 * @example
 *   borderRadius('10px')
 *   borderRadius('10px', '5%')
 *   borderRadius('2px', '4px', '8px')
 *   borderRadius('1px', 0, '3px', '4px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
 */
export declare function borderRadius(value1: BorderRadiusInput, value2?: BorderRadiusInput, value3?: BorderRadiusInput, value4?: BorderRadiusInput): BorderRadiusStyle;
export {};
