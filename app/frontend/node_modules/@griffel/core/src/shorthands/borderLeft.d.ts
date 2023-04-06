import type { GriffelStylesStrictCSSObject } from '../types';
import { BorderColorInput, BorderStyleInput, BorderWidthInput } from './types';
declare type BorderLeftStyle = Pick<GriffelStylesStrictCSSObject, 'borderLeftColor' | 'borderLeftStyle' | 'borderLeftWidth'>;
export declare function borderLeft(width: BorderWidthInput): BorderLeftStyle;
export declare function borderLeft(width: BorderWidthInput, style: BorderStyleInput): BorderLeftStyle;
export declare function borderLeft(width: BorderWidthInput, style: BorderStyleInput, color: BorderColorInput): BorderLeftStyle;
export {};
