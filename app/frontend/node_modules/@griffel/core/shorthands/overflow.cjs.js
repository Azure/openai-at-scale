'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * A function that implements CSS spec conformant expansion for "overflow"
 *
 * @example
 *   overflow('hidden')
 *   overflow('hidden', 'scroll')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
 */
function overflow(overflowX, overflowY = overflowX) {
  return {
    overflowX,
    overflowY
  };
}

exports.overflow = overflow;
//# sourceMappingURL=overflow.cjs.js.map
