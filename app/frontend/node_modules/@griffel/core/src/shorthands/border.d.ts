import type { GriffelStylesStrictCSSObject } from '../types';
import { BorderColorInput, BorderStyleInput, BorderWidthInput } from './types';
declare type BorderStyle = Pick<GriffelStylesStrictCSSObject, 'borderTopColor' | 'borderTopStyle' | 'borderTopWidth' | 'borderRightColor' | 'borderRightStyle' | 'borderRightWidth' | 'borderBottomColor' | 'borderBottomStyle' | 'borderBottomWidth' | 'borderLeftColor' | 'borderLeftStyle' | 'borderLeftWidth'>;
export declare function border(width: BorderWidthInput): BorderStyle;
export declare function border(width: BorderWidthInput, style: BorderStyleInput): BorderStyle;
export declare function border(width: BorderWidthInput, style: BorderStyleInput, color: BorderColorInput): BorderStyle;
export {};
