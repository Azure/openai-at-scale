import type { GriffelStylesStrictCSSObject } from '../types';
import { BorderColorInput, BorderStyleInput, BorderWidthInput } from './types';
declare type BorderBottomStyle = Pick<GriffelStylesStrictCSSObject, 'borderBottomWidth' | 'borderBottomStyle' | 'borderBottomColor'>;
export declare function borderBottom(width: BorderWidthInput): BorderBottomStyle;
export declare function borderBottom(width: BorderWidthInput, style: BorderStyleInput): BorderBottomStyle;
export declare function borderBottom(width: BorderWidthInput, style: BorderStyleInput, color: BorderColorInput): BorderBottomStyle;
export {};
