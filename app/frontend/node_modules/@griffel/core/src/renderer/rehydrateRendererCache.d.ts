import { GriffelRenderer } from '../types';
/**
 * Should be called in a case of Server-Side rendering. Rehydrates cache from for a renderer to avoid double insertion
 * of classes to DOM.
 *
 * @public
 */
export declare function rehydrateRendererCache(renderer: GriffelRenderer, target?: Document | undefined): void;
