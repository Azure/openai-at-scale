import type { GriffelStylesStrictCSSObject } from '../types';
import { PaddingInput } from './types';
declare type PaddingStyle = Pick<GriffelStylesStrictCSSObject, 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft'>;
export declare function padding(all: PaddingInput): PaddingStyle;
export declare function padding(vertical: PaddingInput, horizontal: PaddingInput): PaddingStyle;
export declare function padding(top: PaddingInput, horizontal: PaddingInput, bottom: PaddingInput): PaddingStyle;
export declare function padding(top: PaddingInput, right: PaddingInput, bottom: PaddingInput, left: PaddingInput): PaddingStyle;
export {};
