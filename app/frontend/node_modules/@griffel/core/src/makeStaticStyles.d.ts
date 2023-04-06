import { MakeStaticStylesOptions, GriffelStaticStyles } from './types';
/**
 * Register static css.
 * @param styles - styles object or string.
 */
export declare function makeStaticStyles(styles: GriffelStaticStyles | GriffelStaticStyles[]): (options: MakeStaticStylesOptions) => void;
