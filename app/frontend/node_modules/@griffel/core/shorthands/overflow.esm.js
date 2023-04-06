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

export { overflow };
//# sourceMappingURL=overflow.esm.js.map
