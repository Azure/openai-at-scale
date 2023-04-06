import * as React from 'react';
export interface TextDirectionProviderProps {
    /** Indicates the directionality of the element's text. */
    dir: 'ltr' | 'rtl';
    /**
     * Content wrapped by the TextDirectionProvider.
     */
    children: React.ReactNode;
}
/**
 * @public
 */
export declare const TextDirectionProvider: React.FC<TextDirectionProviderProps>;
/**
 * Returns current directionality of the element's text.
 *
 * @private
 */
export declare function useTextDirection(): "ltr" | "rtl";
