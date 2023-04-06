import type { GriffelStylesStrictCSSObject } from '../types';
import { MarginInput } from './types';
declare type MarginStyle = Pick<GriffelStylesStrictCSSObject, 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'>;
export declare function margin(all: MarginInput): MarginStyle;
export declare function margin(vertical: MarginInput, horizontal: MarginInput): MarginStyle;
export declare function margin(top: MarginInput, horizontal: MarginInput, bottom: MarginInput): MarginStyle;
export declare function margin(top: MarginInput, right: MarginInput, bottom: MarginInput, left: MarginInput): MarginStyle;
export {};
