function generateCombinedQuery(currentMediaQuery, nestedMediaQuery) {
  if (currentMediaQuery.length === 0) {
    return nestedMediaQuery;
  }
  return `${currentMediaQuery} and ${nestedMediaQuery}`;
}

export { generateCombinedQuery };
//# sourceMappingURL=generateCombinedMediaQuery.esm.js.map
