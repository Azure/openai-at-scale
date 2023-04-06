import { compileCSSRules } from './compileCSS.esm.js';
import { cssifyObject } from './utils/cssifyObject.esm.js';

function compileStaticCSS(property, value) {
  const cssRule = `${property} {${cssifyObject(value)}}`;
  return compileCSSRules(cssRule)[0];
}

export { compileStaticCSS };
//# sourceMappingURL=compileStaticCSS.esm.js.map
