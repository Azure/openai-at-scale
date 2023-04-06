import type { GriffelStylesStrictCSSObject } from '../types';
import { GridAreaInput } from './types';
declare type GridAreaStyle = Pick<GriffelStylesStrictCSSObject, 'gridRowStart' | 'gridRowEnd' | 'gridColumnStart' | 'gridColumnEnd'>;
export declare function gridArea(all: GridAreaInput): GridAreaStyle;
export declare function gridArea(rowStart: GridAreaInput, columnStart: GridAreaInput): GridAreaStyle;
export declare function gridArea(rowStart: GridAreaInput, columnStart: GridAreaInput, rowEnd: GridAreaInput): GridAreaStyle;
export declare function gridArea(rowStart: GridAreaInput, columnStart: GridAreaInput, rowEnd: GridAreaInput, columnEnd: GridAreaInput): GridAreaStyle;
export {};
