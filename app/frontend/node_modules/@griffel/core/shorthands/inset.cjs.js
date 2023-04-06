'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * A function that implements CSS spec conformant expansion for "inset"
 *
 * @example
 *   inset('10px')
 *   inset('10px', '5px')
 *   inset('2px', '4px', '8px')
 *   inset('1px', 0, '3px', '4px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/inset
 */
function inset(...values) {
  const [firstValue, secondValue = firstValue, thirdValue = firstValue, fourthValue = secondValue] = values;
  return {
    top: firstValue,
    right: secondValue,
    bottom: thirdValue,
    left: fourthValue
  };
}

exports.inset = inset;
//# sourceMappingURL=inset.cjs.js.map
