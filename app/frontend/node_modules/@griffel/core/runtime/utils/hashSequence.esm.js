import hashString from '@emotion/hash';
import { SEQUENCE_PREFIX, DEBUG_SEQUENCE_SEPARATOR, SEQUENCE_HASH_LENGTH } from '../../constants.esm.js';

function padEndHash(value) {
  const hashLength = value.length;
  if (hashLength === SEQUENCE_HASH_LENGTH) {
    return value;
  }
  for (let i = hashLength; i < SEQUENCE_HASH_LENGTH; i++) {
    value += '0';
  }
  return value;
}
function hashSequence(classes, dir, sequenceIds = []) {
  if (process.env.NODE_ENV === 'production') {
    return SEQUENCE_PREFIX + padEndHash(hashString(classes + dir));
  }
  return SEQUENCE_PREFIX + padEndHash(hashString(classes + dir)) + DEBUG_SEQUENCE_SEPARATOR + padEndHash(hashString(sequenceIds.join('')));
}

export { hashSequence };
//# sourceMappingURL=hashSequence.esm.js.map
