'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * A function that implements CSS spec conformant expansion for "gap"
 *
 * @example
 *   gap('10px')
 *   gap('10px', '5px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/gap
 */
function gap(columnGap, rowGap = columnGap) {
  return {
    columnGap,
    rowGap
  };
}

exports.gap = gap;
//# sourceMappingURL=gap.cjs.js.map
