import type { GriffelStylesStrictCSSObject } from '../types';
import { BorderColorInput, BorderStyleInput, BorderWidthInput } from './types';
declare type BorderRightStyle = Pick<GriffelStylesStrictCSSObject, 'borderRightWidth' | 'borderRightStyle' | 'borderRightColor'>;
export declare function borderRight(width: BorderWidthInput): BorderRightStyle;
export declare function borderRight(width: BorderWidthInput, style: BorderStyleInput): BorderRightStyle;
export declare function borderRight(width: BorderWidthInput, style: BorderStyleInput, color: BorderColorInput): BorderRightStyle;
export {};
