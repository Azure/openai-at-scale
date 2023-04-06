import type { GriffelStylesStrictCSSObject } from '../types';
import { BorderWidthInput } from './types';
declare type BorderWidthStyle = Pick<GriffelStylesStrictCSSObject, 'borderTopStyle' | 'borderRightStyle' | 'borderBottomStyle' | 'borderLeftStyle'>;
export declare function borderWidth(all: BorderWidthInput): BorderWidthStyle;
export declare function borderWidth(vertical: BorderWidthInput, horizontal: BorderWidthInput): BorderWidthStyle;
export declare function borderWidth(top: BorderWidthInput, horizontal: BorderWidthInput, bottom: BorderWidthInput): BorderWidthStyle;
export declare function borderWidth(top: BorderWidthInput, right: BorderWidthInput, bottom: BorderWidthInput, left: BorderWidthInput): BorderWidthStyle;
export {};
