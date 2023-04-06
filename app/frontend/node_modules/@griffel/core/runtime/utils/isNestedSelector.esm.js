const regex = /^(:|\[|>|&)/;
function isNestedSelector(property) {
  return regex.test(property);
}

export { isNestedSelector };
//# sourceMappingURL=isNestedSelector.esm.js.map
