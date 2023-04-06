import type { GriffelStylesStrictCSSObject } from '../types';
import { OutlineColorInput, OutlineStyleInput, OutlineWidthInput } from './types';
declare type OutlineStyle = Pick<GriffelStylesStrictCSSObject, 'outlineColor' | 'outlineStyle' | 'outlineWidth'>;
export declare function outline(width: OutlineWidthInput): OutlineStyle;
export declare function outline(width: OutlineWidthInput, style: OutlineStyleInput): OutlineStyle;
export declare function outline(width: OutlineWidthInput, style: OutlineStyleInput, color: OutlineColorInput): OutlineStyle;
export {};
