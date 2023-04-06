import type { GriffelStylesStrictCSSObject } from '../types';
import { BorderColorInput } from './types';
declare type BorderColorStyle = Pick<GriffelStylesStrictCSSObject, 'borderTopColor' | 'borderRightColor' | 'borderBottomColor' | 'borderLeftColor'>;
export declare function borderColor(all: BorderColorInput): BorderColorStyle;
export declare function borderColor(vertical: BorderColorInput, horizontal: BorderColorInput): BorderColorStyle;
export declare function borderColor(top: BorderColorInput, horizontal: BorderColorInput, bottom: BorderColorInput): BorderColorStyle;
export declare function borderColor(top: BorderColorInput, right: BorderColorInput, bottom: BorderColorInput, left: BorderColorInput): BorderColorStyle;
export {};
