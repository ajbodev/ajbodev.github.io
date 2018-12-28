/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nwindow.hyperx = __webpack_require__(/*! hyperx */ \"./node_modules/hyperx/index.js\");\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/hyperscript-attribute-to-property/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/hyperscript-attribute-to-property/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = attributeToProperty\n\nvar transform = {\n  'class': 'className',\n  'for': 'htmlFor',\n  'http-equiv': 'httpEquiv'\n}\n\nfunction attributeToProperty (h) {\n  return function (tagName, attrs, children) {\n    for (var attr in attrs) {\n      if (attr in transform) {\n        attrs[transform[attr]] = attrs[attr]\n        delete attrs[attr]\n      }\n    }\n    return h(tagName, attrs, children)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/hyperscript-attribute-to-property/index.js?");

/***/ }),

/***/ "./node_modules/hyperx/index.js":
/*!**************************************!*\
  !*** ./node_modules/hyperx/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var attrToProp = __webpack_require__(/*! hyperscript-attribute-to-property */ \"./node_modules/hyperscript-attribute-to-property/index.js\")\n\nvar VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4\nvar ATTR_KEY = 5, ATTR_KEY_W = 6\nvar ATTR_VALUE_W = 7, ATTR_VALUE = 8\nvar ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10\nvar ATTR_EQ = 11, ATTR_BREAK = 12\nvar COMMENT = 13\n\nmodule.exports = function (h, opts) {\n  if (!opts) opts = {}\n  var concat = opts.concat || function (a, b) {\n    return String(a) + String(b)\n  }\n  if (opts.attrToProp !== false) {\n    h = attrToProp(h)\n  }\n\n  return function (strings) {\n    var state = TEXT, reg = ''\n    var arglen = arguments.length\n    var parts = []\n\n    for (var i = 0; i < strings.length; i++) {\n      if (i < arglen - 1) {\n        var arg = arguments[i+1]\n        var p = parse(strings[i])\n        var xstate = state\n        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE\n        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE\n        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE\n        if (xstate === ATTR) xstate = ATTR_KEY\n        if (xstate === OPEN) {\n          if (reg === '/') {\n            p.push([ OPEN, '/', arg ])\n            reg = ''\n          } else {\n            p.push([ OPEN, arg ])\n          }\n        } else {\n          p.push([ VAR, xstate, arg ])\n        }\n        parts.push.apply(parts, p)\n      } else parts.push.apply(parts, parse(strings[i]))\n    }\n\n    var tree = [null,{},[]]\n    var stack = [[tree,-1]]\n    for (var i = 0; i < parts.length; i++) {\n      var cur = stack[stack.length-1][0]\n      var p = parts[i], s = p[0]\n      if (s === OPEN && /^\\//.test(p[1])) {\n        var ix = stack[stack.length-1][1]\n        if (stack.length > 1) {\n          stack.pop()\n          stack[stack.length-1][0][2][ix] = h(\n            cur[0], cur[1], cur[2].length ? cur[2] : undefined\n          )\n        }\n      } else if (s === OPEN) {\n        var c = [p[1],{},[]]\n        cur[2].push(c)\n        stack.push([c,cur[2].length-1])\n      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {\n        var key = ''\n        var copyKey\n        for (; i < parts.length; i++) {\n          if (parts[i][0] === ATTR_KEY) {\n            key = concat(key, parts[i][1])\n          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {\n            if (typeof parts[i][2] === 'object' && !key) {\n              for (copyKey in parts[i][2]) {\n                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {\n                  cur[1][copyKey] = parts[i][2][copyKey]\n                }\n              }\n            } else {\n              key = concat(key, parts[i][2])\n            }\n          } else break\n        }\n        if (parts[i][0] === ATTR_EQ) i++\n        var j = i\n        for (; i < parts.length; i++) {\n          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {\n            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])\n            else parts[i][1]===\"\" || (cur[1][key] = concat(cur[1][key], parts[i][1]));\n          } else if (parts[i][0] === VAR\n          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {\n            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])\n            else parts[i][2]===\"\" || (cur[1][key] = concat(cur[1][key], parts[i][2]));\n          } else {\n            if (key.length && !cur[1][key] && i === j\n            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {\n              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes\n              // empty string is falsy, not well behaved value in browser\n              cur[1][key] = key.toLowerCase()\n            }\n            if (parts[i][0] === CLOSE) {\n              i--\n            }\n            break\n          }\n        }\n      } else if (s === ATTR_KEY) {\n        cur[1][p[1]] = true\n      } else if (s === VAR && p[1] === ATTR_KEY) {\n        cur[1][p[2]] = true\n      } else if (s === CLOSE) {\n        if (selfClosing(cur[0]) && stack.length) {\n          var ix = stack[stack.length-1][1]\n          stack.pop()\n          stack[stack.length-1][0][2][ix] = h(\n            cur[0], cur[1], cur[2].length ? cur[2] : undefined\n          )\n        }\n      } else if (s === VAR && p[1] === TEXT) {\n        if (p[2] === undefined || p[2] === null) p[2] = ''\n        else if (!p[2]) p[2] = concat('', p[2])\n        if (Array.isArray(p[2][0])) {\n          cur[2].push.apply(cur[2], p[2])\n        } else {\n          cur[2].push(p[2])\n        }\n      } else if (s === TEXT) {\n        cur[2].push(p[1])\n      } else if (s === ATTR_EQ || s === ATTR_BREAK) {\n        // no-op\n      } else {\n        throw new Error('unhandled: ' + s)\n      }\n    }\n\n    if (tree[2].length > 1 && /^\\s*$/.test(tree[2][0])) {\n      tree[2].shift()\n    }\n\n    if (tree[2].length > 2\n    || (tree[2].length === 2 && /\\S/.test(tree[2][1]))) {\n      throw new Error(\n        'multiple root elements must be wrapped in an enclosing tag'\n      )\n    }\n    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'\n    && Array.isArray(tree[2][0][2])) {\n      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])\n    }\n    return tree[2][0]\n\n    function parse (str) {\n      var res = []\n      if (state === ATTR_VALUE_W) state = ATTR\n      for (var i = 0; i < str.length; i++) {\n        var c = str.charAt(i)\n        if (state === TEXT && c === '<') {\n          if (reg.length) res.push([TEXT, reg])\n          reg = ''\n          state = OPEN\n        } else if (c === '>' && !quot(state) && state !== COMMENT) {\n          if (state === OPEN && reg.length) {\n            res.push([OPEN,reg])\n          } else if (state === ATTR_KEY) {\n            res.push([ATTR_KEY,reg])\n          } else if (state === ATTR_VALUE && reg.length) {\n            res.push([ATTR_VALUE,reg])\n          }\n          res.push([CLOSE])\n          reg = ''\n          state = TEXT\n        } else if (state === COMMENT && /-$/.test(reg) && c === '-') {\n          if (opts.comments) {\n            res.push([ATTR_VALUE,reg.substr(0, reg.length - 1)],[CLOSE])\n          }\n          reg = ''\n          state = TEXT\n        } else if (state === OPEN && /^!--$/.test(reg)) {\n          if (opts.comments) {\n            res.push([OPEN, reg],[ATTR_KEY,'comment'],[ATTR_EQ])\n          }\n          reg = c\n          state = COMMENT\n        } else if (state === TEXT || state === COMMENT) {\n          reg += c\n        } else if (state === OPEN && c === '/' && reg.length) {\n          // no-op, self closing tag without a space <br/>\n        } else if (state === OPEN && /\\s/.test(c)) {\n          if (reg.length) {\n            res.push([OPEN, reg])\n          }\n          reg = ''\n          state = ATTR\n        } else if (state === OPEN) {\n          reg += c\n        } else if (state === ATTR && /[^\\s\"'=/]/.test(c)) {\n          state = ATTR_KEY\n          reg = c\n        } else if (state === ATTR && /\\s/.test(c)) {\n          if (reg.length) res.push([ATTR_KEY,reg])\n          res.push([ATTR_BREAK])\n        } else if (state === ATTR_KEY && /\\s/.test(c)) {\n          res.push([ATTR_KEY,reg])\n          reg = ''\n          state = ATTR_KEY_W\n        } else if (state === ATTR_KEY && c === '=') {\n          res.push([ATTR_KEY,reg],[ATTR_EQ])\n          reg = ''\n          state = ATTR_VALUE_W\n        } else if (state === ATTR_KEY) {\n          reg += c\n        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {\n          res.push([ATTR_EQ])\n          state = ATTR_VALUE_W\n        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\\s/.test(c)) {\n          res.push([ATTR_BREAK])\n          if (/[\\w-]/.test(c)) {\n            reg += c\n            state = ATTR_KEY\n          } else state = ATTR\n        } else if (state === ATTR_VALUE_W && c === '\"') {\n          state = ATTR_VALUE_DQ\n        } else if (state === ATTR_VALUE_W && c === \"'\") {\n          state = ATTR_VALUE_SQ\n        } else if (state === ATTR_VALUE_DQ && c === '\"') {\n          res.push([ATTR_VALUE,reg],[ATTR_BREAK])\n          reg = ''\n          state = ATTR\n        } else if (state === ATTR_VALUE_SQ && c === \"'\") {\n          res.push([ATTR_VALUE,reg],[ATTR_BREAK])\n          reg = ''\n          state = ATTR\n        } else if (state === ATTR_VALUE_W && !/\\s/.test(c)) {\n          state = ATTR_VALUE\n          i--\n        } else if (state === ATTR_VALUE && /\\s/.test(c)) {\n          res.push([ATTR_VALUE,reg],[ATTR_BREAK])\n          reg = ''\n          state = ATTR\n        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ\n        || state === ATTR_VALUE_DQ) {\n          reg += c\n        }\n      }\n      if (state === TEXT && reg.length) {\n        res.push([TEXT,reg])\n        reg = ''\n      } else if (state === ATTR_VALUE && reg.length) {\n        res.push([ATTR_VALUE,reg])\n        reg = ''\n      } else if (state === ATTR_VALUE_DQ && reg.length) {\n        res.push([ATTR_VALUE,reg])\n        reg = ''\n      } else if (state === ATTR_VALUE_SQ && reg.length) {\n        res.push([ATTR_VALUE,reg])\n        reg = ''\n      } else if (state === ATTR_KEY) {\n        res.push([ATTR_KEY,reg])\n        reg = ''\n      }\n      return res\n    }\n  }\n\n  function strfn (x) {\n    if (typeof x === 'function') return x\n    else if (typeof x === 'string') return x\n    else if (x && typeof x === 'object') return x\n    else return concat('', x)\n  }\n}\n\nfunction quot (state) {\n  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ\n}\n\nvar hasOwn = Object.prototype.hasOwnProperty\nfunction has (obj, key) { return hasOwn.call(obj, key) }\n\nvar closeRE = RegExp('^(' + [\n  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',\n  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',\n  'source', 'track', 'wbr', '!--',\n  // SVG TAGS\n  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',\n  'feBlend', 'feColorMatrix', 'feComposite',\n  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',\n  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',\n  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',\n  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',\n  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',\n  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',\n  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',\n  'vkern'\n].join('|') + ')(?:[\\.#][a-zA-Z0-9\\u007F-\\uFFFF_:-]+)*$')\nfunction selfClosing (tag) { return closeRE.test(tag) }\n\n\n//# sourceURL=webpack:///./node_modules/hyperx/index.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?");

/***/ })

/******/ });