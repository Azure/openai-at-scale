'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var compileCSS = require('./compileCSS.cjs.js');
var cssifyObject = require('./utils/cssifyObject.cjs.js');

function compileStaticCSS(property, value) {
  const cssRule = `${property} {${cssifyObject.cssifyObject(value)}}`;
  return compileCSS.compileCSSRules(cssRule)[0];
}

exports.compileStaticCSS = compileStaticCSS;
//# sourceMappingURL=compileStaticCSS.cjs.js.map
