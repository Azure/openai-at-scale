function normalizeNestedProperty(nestedProperty) {
  if (nestedProperty.charAt(0) === '&') {
    return nestedProperty.slice(1);
  }
  return nestedProperty;
}

export { normalizeNestedProperty };
//# sourceMappingURL=normalizeNestedProperty.esm.js.map
