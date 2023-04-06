import * as React from 'react';
import type { GriffelRenderer } from '@griffel/core';
/**
 * This method returns a list of <style> React elements with the rendered CSS. This is useful for Server-Side rendering.
 *
 * @public
 */
export declare function renderToStyleElements(renderer: GriffelRenderer): React.ReactElement[];
