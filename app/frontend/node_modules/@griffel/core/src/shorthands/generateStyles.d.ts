import type { GriffelStylesCSSValue, ValueOrArray } from '../types';
import { GriffelStylesStrictCSSObject } from '../types';
declare type DirectionalProperties = 'border' | 'padding' | 'margin';
export declare function generateStyles<Styles extends GriffelStylesStrictCSSObject>(property: DirectionalProperties, suffix: '' | 'Color' | 'Style' | 'Width', ...values: ValueOrArray<GriffelStylesCSSValue>[]): Styles;
export {};
