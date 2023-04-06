'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hashString = require('@emotion/hash');
var constants = require('../../constants.cjs.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var hashString__default = /*#__PURE__*/_interopDefaultLegacy(hashString);

function hashClassName({
  media,
  layer,
  property,
  selectors,
  support,
  value
}) {
  // Trimming of value is required to generate consistent hashes
  const classNameHash = hashString__default["default"](selectors.join('') + media + layer + support + property + value.trim());
  return constants.HASH_PREFIX + classNameHash;
}

exports.hashClassName = hashClassName;
//# sourceMappingURL=hashClassName.cjs.js.map
