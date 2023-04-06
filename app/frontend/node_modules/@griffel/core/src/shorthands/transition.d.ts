import type { GriffelStylesStrictCSSObject } from '../types';
import { TransitionDelayInput, TransitionDurationInput, TransitionPropertyInput, TransitionTimingFunctionInput, TransitionGlobalInput } from './types';
declare type TransitionInputs = [
    TransitionPropertyInput,
    TransitionDurationInput?,
    TransitionDelayInput?,
    TransitionTimingFunctionInput?
];
declare type TransitionStyle = Pick<GriffelStylesStrictCSSObject, 'transitionProperty' | 'transitionDelay' | 'transitionDuration' | 'transitionTimingFunction'>;
export declare function transition(globalValue: TransitionGlobalInput): TransitionStyle;
export declare function transition(property: TransitionPropertyInput, duration: TransitionDurationInput): TransitionStyle;
export declare function transition(property: TransitionPropertyInput, duration: TransitionDurationInput, delay: TransitionDelayInput): TransitionStyle;
export declare function transition(property: TransitionPropertyInput, duration: TransitionDurationInput, delay: TransitionDelayInput, easingFunction: TransitionTimingFunctionInput): TransitionStyle;
export declare function transition(values: TransitionInputs[]): TransitionStyle;
export {};
