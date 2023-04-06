import hashString from '@emotion/hash';
import { HASH_PREFIX } from '../../constants.esm.js';

function hashClassName({
  media,
  layer,
  property,
  selectors,
  support,
  value
}) {
  // Trimming of value is required to generate consistent hashes
  const classNameHash = hashString(selectors.join('') + media + layer + support + property + value.trim());
  return HASH_PREFIX + classNameHash;
}

export { hashClassName };
//# sourceMappingURL=hashClassName.esm.js.map
