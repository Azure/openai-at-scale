import type { GriffelStylesStrictCSSObject } from '../types';
import { BorderColorInput, BorderStyleInput, BorderWidthInput } from './types';
declare type BorderTopStyle = Pick<GriffelStylesStrictCSSObject, 'borderTopWidth' | 'borderTopStyle' | 'borderTopColor'>;
export declare function borderTop(width: BorderWidthInput): BorderTopStyle;
export declare function borderTop(width: BorderWidthInput, style: BorderStyleInput): BorderTopStyle;
export declare function borderTop(width: BorderWidthInput, style: BorderStyleInput, color: BorderColorInput): BorderTopStyle;
export {};
