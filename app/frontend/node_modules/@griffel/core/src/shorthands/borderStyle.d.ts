import type { GriffelStylesStrictCSSObject } from '../types';
import { BorderStyleInput } from './types';
declare type BorderStyleStyle = Pick<GriffelStylesStrictCSSObject, 'borderTopStyle' | 'borderRightStyle' | 'borderBottomStyle' | 'borderLeftStyle'>;
export declare function borderStyle(all: BorderStyleInput): BorderStyleStyle;
export declare function borderStyle(vertical: BorderStyleInput, horizontal: BorderStyleInput): BorderStyleStyle;
export declare function borderStyle(top: BorderStyleInput, horizontal: BorderStyleInput, bottom: BorderStyleInput): BorderStyleStyle;
export declare function borderStyle(top: BorderStyleInput, right: BorderStyleInput, bottom: BorderStyleInput, left: BorderStyleInput): BorderStyleStyle;
export {};
