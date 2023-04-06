import * as React from 'react';
import type { GriffelRenderer } from '@griffel/core';
export interface RendererProviderProps {
    /** An instance of Griffel renderer. */
    renderer: GriffelRenderer;
    /**
     * Document used to insert CSS variables to head
     */
    targetDocument?: Document;
    /**
     * Content wrapped by the RendererProvider
     */
    children: React.ReactNode;
}
/**
 * @public
 */
export declare const RendererProvider: React.FC<RendererProviderProps>;
/**
 * Returns an instance of current makeStyles() renderer.
 *
 * @private Exported as "useRenderer_unstable" use it on own risk. Can be changed or removed without a notice.
 */
export declare function useRenderer(): GriffelRenderer;
