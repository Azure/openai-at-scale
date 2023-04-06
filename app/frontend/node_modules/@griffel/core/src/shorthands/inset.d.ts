import type { GriffelStylesStrictCSSObject } from '../types';
import { InsetInput } from './types';
declare type InsetStyle = Pick<GriffelStylesStrictCSSObject, 'top' | 'right' | 'bottom' | 'left'>;
export declare function inset(all: InsetInput): InsetStyle;
export declare function inset(vertical: InsetInput, horizontal: InsetInput): InsetStyle;
export declare function inset(top: InsetInput, horizontal: InsetInput, bottom: InsetInput): InsetStyle;
export declare function inset(top: InsetInput, right: InsetInput, bottom: InsetInput, left: InsetInput): InsetStyle;
export {};
