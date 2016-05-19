/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var index, Component, component;
	index = __webpack_require__(1);
	Component = __webpack_require__(32);
	component = new Component(index);
	window.app = {
	  component: component
	};
	component.init();
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\index\jquery\index.ls.map


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var lib, index;
	lib = __webpack_require__(2);
	index = {
	  Stores: __webpack_require__(18),
	  templates: __webpack_require__(24),
	  samples: lib.samples,
	  vendors: lib.vendors,
	  props: lib.props
	};
	if (true) {
	  module.exports = index;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\index\lib\index.ls.map


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var lib;
	lib = {
	  samples: {
	    main: {
	      md: {
	        input_notes: __webpack_require__(3)
	      },
	      html_css_js: {
	        input_notes: __webpack_require__(4)
	      },
	      jade_css_ls: {
	        input_notes: __webpack_require__(5)
	      }
	    }
	  },
	  vendors: {
	    highlight_js: __webpack_require__(6),
	    highlight_css: __webpack_require__(7),
	    katex_css: __webpack_require__(8),
	    katex_js: __webpack_require__(9),
	    katex_auto_js: __webpack_require__(10),
	    primer_css: __webpack_require__(11)
	  },
	  props: {
	    _title: 'x+1',
	    store: __webpack_require__(12),
	    boot: __webpack_require__(13),
	    main: __webpack_require__(14),
	    admin: __webpack_require__(15),
	    util: __webpack_require__(16),
	    app: __webpack_require__(17)
	  }
	};
	if (true) {
	  module.exports = lib;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\index\lib\index\lib.ls.map


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "{\n  \"index\":  {\"name\":\"index\",  \"ext\":\"++.md\", \"mode\":\"text/x-markdown\", \"src\": \"\\n\\n\"},\n  \"config\": {\"name\":\"config\", \"ext\":\"json\",  \"mode\":\"application/x-json\", \"src\": \"{\\n  \\\"global\\\": {\\n     \\\"run\\\": \\\"index\\\"\\n  },\\n  \\\"index\\\": {\\n    \\\"prepends\\\": [],\\n    \\\"appends\\\":  []\\n  }\\n}\\n\"}\n}";

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "{\n  \"index\": {\n    \"name\": \"index\",\n    \"ext\": \"html\",\n    \"mode\": \"text/html\",\n    \"src\": \"<!DOCTYPE html>\\n<html>\\n  <head>\\n    <style  data-include='css/index'></style>\\n  </head>\\n  <body>\\n    <div    data-include='html/content'></div>\\n    <script data-include='js/index' ><\\/script>\\n  </body>\\n</html>\"\n  },\n  \"css/index\": {\n    \"name\": \"css/index\",\n    \"ext\": \"css\",\n    \"mode\": \"text/css\",\n    \"src\": \"\\n#app {\\n  background: red;\\n  height: 50px;\\n  width: 50px;\\n}\\n\"\n  },\n  \"js/index\": {\n    \"name\": \"js/index\",\n    \"ext\": \"js\",\n    \"mode\": \"text/javascript\",\n    \"src\": \"\\nalert(1)\\n\"\n  },\n  \"html/content\": {\n    \"name\": \"html/content\",\n    \"ext\": \"html\",\n    \"mode\": \"text/html\",\n    \"src\": \"\\n<ul>\\n  <li><a href=\\\"#/\\\">Home</a></li>\\n  <li><a href=\\\"#/som\\\">Som</a></li>\\n</ul>\\n<div id='app'>\\n<div>\\n\"\n  },\n  \"config\": {\n    \"name\": \"config\",\n    \"ext\": \"json\",\n    \"mode\": \"application/x-json\",\n    \"src\": \"{\\n  \\\"global\\\": {\\n     \\\"run\\\": \\\"index\\\"\\n  },\\n  \\\"index\\\": {\\n  },\\n  \\\"js/index\\\": {\\n    \\\"prepends\\\":  []\\n  },\\n  \\\"css/index\\\": {\\n    \\\"prepends\\\":  []\\n  }\\n}\\n\"\n  }\n}";

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "{\n  \"index\":        {\"name\":\"index\",        \"ext\":\"jade\", \"mode\":\"text/x-jade\", \"src\": \"doctype html\\nhtml\\n  head\\n    style(data-include='css/index')\\n  body\\n    div(data-include='html/content')\\n    script(data-include='js/index')\"},\n  \"css/index\":    {\"name\":\"css/index\",    \"ext\":\"css\",  \"mode\":\"text/css\", \"src\": \"\\n#app {\\n  background: red;\\n  height: 50px;\\n  width: 50px;\\n}\\n\"},\n  \"js/index\":     {\"name\":\"js/index\",     \"ext\":\"ls\",   \"mode\":\"text/x-livescript\", \"src\": \"\\nalert 2\\n\"},\n  \"html/content\": {\"name\":\"html/content\", \"ext\":\"jade\", \"mode\":\"text/x-jade\", \"src\": \"\\nul\\n  li\\n    a(href='#/') Home\\n  li\\n    a(href='#/') Som\\n#app\\n\"},\n  \"config\":       {\"name\":\"config\",       \"ext\":\"json\", \"mode\":\"application/x-json\", \"src\": \"{\\n  \\\"global\\\": {\\n     \\\"run\\\": \\\"index\\\"\\n  },\\n  \\\"index\\\": {\\n  },\\n  \\\"js/index\\\": {\\n    \\\"prepends\\\":  []\\n  },\\n  \\\"css/index\\\": {\\n    \\\"prepends\\\":  []\\n  }\\n}\\n\"}\n}";

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "/*\nSyntax highlighting with language autodetection.\nhttps://highlightjs.org/\n*/\n\n(function(factory) {\n\n  // Setup highlight.js for different environments. First is Node.js or\n  // CommonJS.\n  if(typeof exports !== 'undefined') {\n    factory(exports);\n  } else {\n    // Export hljs globally even when using AMD for cases when this script\n    // is loaded with others that may still expect a global hljs.\n    window.hljs = factory({});\n\n    // Finally register the global hljs with AMD.\n    if(typeof define === 'function' && define.amd) {\n      define('hljs', [], function() {\n        return window.hljs;\n      });\n    }\n  }\n\n}(function(hljs) {\n\n  /* Utility functions */\n\n  function escape(value) {\n    return value.replace(/&/gm, '&amp;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;');\n  }\n\n  function tag(node) {\n    return node.nodeName.toLowerCase();\n  }\n\n  function testRe(re, lexeme) {\n    var match = re && re.exec(lexeme);\n    return match && match.index == 0;\n  }\n\n  function isNotHighlighted(language) {\n    return (/^(no-?highlight|plain|text)$/i).test(language);\n  }\n\n  function blockLanguage(block) {\n    var i, match, length,\n        classes = block.className + ' ';\n\n    classes += block.parentNode ? block.parentNode.className : '';\n\n    // language-* takes precedence over non-prefixed class names\n    match = (/\\blang(?:uage)?-([\\w-]+)\\b/i).exec(classes);\n    if (match) {\n      return getLanguage(match[1]) ? match[1] : 'no-highlight';\n    }\n\n    classes = classes.split(/\\s+/);\n    for (i = 0, length = classes.length; i < length; i++) {\n      if (getLanguage(classes[i]) || isNotHighlighted(classes[i])) {\n        return classes[i];\n      }\n    }\n  }\n\n  function inherit(parent, obj) {\n    var result = {}, key;\n    for (key in parent)\n      result[key] = parent[key];\n    if (obj)\n      for (key in obj)\n        result[key] = obj[key];\n    return result;\n  }\n\n  /* Stream merging */\n\n  function nodeStream(node) {\n    var result = [];\n    (function _nodeStream(node, offset) {\n      for (var child = node.firstChild; child; child = child.nextSibling) {\n        if (child.nodeType == 3)\n          offset += child.nodeValue.length;\n        else if (child.nodeType == 1) {\n          result.push({\n            event: 'start',\n            offset: offset,\n            node: child\n          });\n          offset = _nodeStream(child, offset);\n          // Prevent void elements from having an end tag that would actually\n          // double them in the output. There are more void elements in HTML\n          // but we list only those realistically expected in code display.\n          if (!tag(child).match(/br|hr|img|input/)) {\n            result.push({\n              event: 'stop',\n              offset: offset,\n              node: child\n            });\n          }\n        }\n      }\n      return offset;\n    })(node, 0);\n    return result;\n  }\n\n  function mergeStreams(original, highlighted, value) {\n    var processed = 0;\n    var result = '';\n    var nodeStack = [];\n\n    function selectStream() {\n      if (!original.length || !highlighted.length) {\n        return original.length ? original : highlighted;\n      }\n      if (original[0].offset != highlighted[0].offset) {\n        return (original[0].offset < highlighted[0].offset) ? original : highlighted;\n      }\n\n      /*\n      To avoid starting the stream just before it should stop the order is\n      ensured that original always starts first and closes last:\n\n      if (event1 == 'start' && event2 == 'start')\n        return original;\n      if (event1 == 'start' && event2 == 'stop')\n        return highlighted;\n      if (event1 == 'stop' && event2 == 'start')\n        return original;\n      if (event1 == 'stop' && event2 == 'stop')\n        return highlighted;\n\n      ... which is collapsed to:\n      */\n      return highlighted[0].event == 'start' ? original : highlighted;\n    }\n\n    function open(node) {\n      function attr_str(a) {return ' ' + a.nodeName + '=\"' + escape(a.value) + '\"';}\n      result += '<' + tag(node) + Array.prototype.map.call(node.attributes, attr_str).join('') + '>';\n    }\n\n    function close(node) {\n      result += '</' + tag(node) + '>';\n    }\n\n    function render(event) {\n      (event.event == 'start' ? open : close)(event.node);\n    }\n\n    while (original.length || highlighted.length) {\n      var stream = selectStream();\n      result += escape(value.substr(processed, stream[0].offset - processed));\n      processed = stream[0].offset;\n      if (stream == original) {\n        /*\n        On any opening or closing tag of the original markup we first close\n        the entire highlighted node stack, then render the original tag along\n        with all the following original tags at the same offset and then\n        reopen all the tags on the highlighted stack.\n        */\n        nodeStack.reverse().forEach(close);\n        do {\n          render(stream.splice(0, 1)[0]);\n          stream = selectStream();\n        } while (stream == original && stream.length && stream[0].offset == processed);\n        nodeStack.reverse().forEach(open);\n      } else {\n        if (stream[0].event == 'start') {\n          nodeStack.push(stream[0].node);\n        } else {\n          nodeStack.pop();\n        }\n        render(stream.splice(0, 1)[0]);\n      }\n    }\n    return result + escape(value.substr(processed));\n  }\n\n  /* Initialization */\n\n  function compileLanguage(language) {\n\n    function reStr(re) {\n        return (re && re.source) || re;\n    }\n\n    function langRe(value, global) {\n      return new RegExp(\n        reStr(value),\n        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')\n      );\n    }\n\n    function compileMode(mode, parent) {\n      if (mode.compiled)\n        return;\n      mode.compiled = true;\n\n      mode.keywords = mode.keywords || mode.beginKeywords;\n      if (mode.keywords) {\n        var compiled_keywords = {};\n\n        var flatten = function(className, str) {\n          if (language.case_insensitive) {\n            str = str.toLowerCase();\n          }\n          str.split(' ').forEach(function(kw) {\n            var pair = kw.split('|');\n            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];\n          });\n        };\n\n        if (typeof mode.keywords == 'string') { // string\n          flatten('keyword', mode.keywords);\n        } else {\n          Object.keys(mode.keywords).forEach(function (className) {\n            flatten(className, mode.keywords[className]);\n          });\n        }\n        mode.keywords = compiled_keywords;\n      }\n      mode.lexemesRe = langRe(mode.lexemes || /\\b\\w+\\b/, true);\n\n      if (parent) {\n        if (mode.beginKeywords) {\n          mode.begin = '\\\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\\\b';\n        }\n        if (!mode.begin)\n          mode.begin = /\\B|\\b/;\n        mode.beginRe = langRe(mode.begin);\n        if (!mode.end && !mode.endsWithParent)\n          mode.end = /\\B|\\b/;\n        if (mode.end)\n          mode.endRe = langRe(mode.end);\n        mode.terminator_end = reStr(mode.end) || '';\n        if (mode.endsWithParent && parent.terminator_end)\n          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;\n      }\n      if (mode.illegal)\n        mode.illegalRe = langRe(mode.illegal);\n      if (mode.relevance === undefined)\n        mode.relevance = 1;\n      if (!mode.contains) {\n        mode.contains = [];\n      }\n      var expanded_contains = [];\n      mode.contains.forEach(function(c) {\n        if (c.variants) {\n          c.variants.forEach(function(v) {expanded_contains.push(inherit(c, v));});\n        } else {\n          expanded_contains.push(c == 'self' ? mode : c);\n        }\n      });\n      mode.contains = expanded_contains;\n      mode.contains.forEach(function(c) {compileMode(c, mode);});\n\n      if (mode.starts) {\n        compileMode(mode.starts, parent);\n      }\n\n      var terminators =\n        mode.contains.map(function(c) {\n          return c.beginKeywords ? '\\\\.?(' + c.begin + ')\\\\.?' : c.begin;\n        })\n        .concat([mode.terminator_end, mode.illegal])\n        .map(reStr)\n        .filter(Boolean);\n      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};\n    }\n\n    compileMode(language);\n  }\n\n  /*\n  Core highlighting function. Accepts a language name, or an alias, and a\n  string with the code to highlight. Returns an object with the following\n  properties:\n\n  - relevance (int)\n  - value (an HTML string with highlighting markup)\n\n  */\n  function highlight(name, value, ignore_illegals, continuation) {\n\n    function subMode(lexeme, mode) {\n      for (var i = 0; i < mode.contains.length; i++) {\n        if (testRe(mode.contains[i].beginRe, lexeme)) {\n          return mode.contains[i];\n        }\n      }\n    }\n\n    function endOfMode(mode, lexeme) {\n      if (testRe(mode.endRe, lexeme)) {\n        while (mode.endsParent && mode.parent) {\n          mode = mode.parent;\n        }\n        return mode;\n      }\n      if (mode.endsWithParent) {\n        return endOfMode(mode.parent, lexeme);\n      }\n    }\n\n    function isIllegal(lexeme, mode) {\n      return !ignore_illegals && testRe(mode.illegalRe, lexeme);\n    }\n\n    function keywordMatch(mode, match) {\n      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];\n      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];\n    }\n\n    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {\n      var classPrefix = noPrefix ? '' : options.classPrefix,\n          openSpan    = '<span class=\"' + classPrefix,\n          closeSpan   = leaveOpen ? '' : '</span>';\n\n      openSpan += classname + '\">';\n\n      return openSpan + insideSpan + closeSpan;\n    }\n\n    function processKeywords() {\n      if (!top.keywords)\n        return escape(mode_buffer);\n      var result = '';\n      var last_index = 0;\n      top.lexemesRe.lastIndex = 0;\n      var match = top.lexemesRe.exec(mode_buffer);\n      while (match) {\n        result += escape(mode_buffer.substr(last_index, match.index - last_index));\n        var keyword_match = keywordMatch(top, match);\n        if (keyword_match) {\n          relevance += keyword_match[1];\n          result += buildSpan(keyword_match[0], escape(match[0]));\n        } else {\n          result += escape(match[0]);\n        }\n        last_index = top.lexemesRe.lastIndex;\n        match = top.lexemesRe.exec(mode_buffer);\n      }\n      return result + escape(mode_buffer.substr(last_index));\n    }\n\n    function processSubLanguage() {\n      var explicit = typeof top.subLanguage == 'string';\n      if (explicit && !languages[top.subLanguage]) {\n        return escape(mode_buffer);\n      }\n\n      var result = explicit ?\n                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :\n                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);\n\n      // Counting embedded language score towards the host language may be disabled\n      // with zeroing the containing mode relevance. Usecase in point is Markdown that\n      // allows XML everywhere and makes every XML snippet to have a much larger Markdown\n      // score.\n      if (top.relevance > 0) {\n        relevance += result.relevance;\n      }\n      if (explicit) {\n        continuations[top.subLanguage] = result.top;\n      }\n      return buildSpan(result.language, result.value, false, true);\n    }\n\n    function processBuffer() {\n      return top.subLanguage !== undefined ? processSubLanguage() : processKeywords();\n    }\n\n    function startNewMode(mode, lexeme) {\n      var markup = mode.className? buildSpan(mode.className, '', true): '';\n      if (mode.returnBegin) {\n        result += markup;\n        mode_buffer = '';\n      } else if (mode.excludeBegin) {\n        result += escape(lexeme) + markup;\n        mode_buffer = '';\n      } else {\n        result += markup;\n        mode_buffer = lexeme;\n      }\n      top = Object.create(mode, {parent: {value: top}});\n    }\n\n    function processLexeme(buffer, lexeme) {\n\n      mode_buffer += buffer;\n      if (lexeme === undefined) {\n        result += processBuffer();\n        return 0;\n      }\n\n      var new_mode = subMode(lexeme, top);\n      if (new_mode) {\n        result += processBuffer();\n        startNewMode(new_mode, lexeme);\n        return new_mode.returnBegin ? 0 : lexeme.length;\n      }\n\n      var end_mode = endOfMode(top, lexeme);\n      if (end_mode) {\n        var origin = top;\n        if (!(origin.returnEnd || origin.excludeEnd)) {\n          mode_buffer += lexeme;\n        }\n        result += processBuffer();\n        do {\n          if (top.className) {\n            result += '</span>';\n          }\n          relevance += top.relevance;\n          top = top.parent;\n        } while (top != end_mode.parent);\n        if (origin.excludeEnd) {\n          result += escape(lexeme);\n        }\n        mode_buffer = '';\n        if (end_mode.starts) {\n          startNewMode(end_mode.starts, '');\n        }\n        return origin.returnEnd ? 0 : lexeme.length;\n      }\n\n      if (isIllegal(lexeme, top))\n        throw new Error('Illegal lexeme \"' + lexeme + '\" for mode \"' + (top.className || '<unnamed>') + '\"');\n\n      /*\n      Parser should not reach this point as all types of lexemes should be caught\n      earlier, but if it does due to some bug make sure it advances at least one\n      character forward to prevent infinite looping.\n      */\n      mode_buffer += lexeme;\n      return lexeme.length || 1;\n    }\n\n    var language = getLanguage(name);\n    if (!language) {\n      throw new Error('Unknown language: \"' + name + '\"');\n    }\n\n    compileLanguage(language);\n    var top = continuation || language;\n    var continuations = {}; // keep continuations for sub-languages\n    var result = '', current;\n    for(current = top; current != language; current = current.parent) {\n      if (current.className) {\n        result = buildSpan(current.className, '', true) + result;\n      }\n    }\n    var mode_buffer = '';\n    var relevance = 0;\n    try {\n      var match, count, index = 0;\n      while (true) {\n        top.terminators.lastIndex = index;\n        match = top.terminators.exec(value);\n        if (!match)\n          break;\n        count = processLexeme(value.substr(index, match.index - index), match[0]);\n        index = match.index + count;\n      }\n      processLexeme(value.substr(index));\n      for(current = top; current.parent; current = current.parent) { // close dangling modes\n        if (current.className) {\n          result += '</span>';\n        }\n      }\n      return {\n        relevance: relevance,\n        value: result,\n        language: name,\n        top: top\n      };\n    } catch (e) {\n      if (e.message.indexOf('Illegal') != -1) {\n        return {\n          relevance: 0,\n          value: escape(value)\n        };\n      } else {\n        throw e;\n      }\n    }\n  }\n\n  /*\n  Highlighting with language detection. Accepts a string with the code to\n  highlight. Returns an object with the following properties:\n\n  - language (detected language)\n  - relevance (int)\n  - value (an HTML string with highlighting markup)\n  - second_best (object with the same structure for second-best heuristically\n    detected language, may be absent)\n\n  */\n  function highlightAuto(text, languageSubset) {\n    languageSubset = languageSubset || options.languages || Object.keys(languages);\n    var result = {\n      relevance: 0,\n      value: escape(text)\n    };\n    var second_best = result;\n    languageSubset.forEach(function(name) {\n      if (!getLanguage(name)) {\n        return;\n      }\n      var current = highlight(name, text, false);\n      current.language = name;\n      if (current.relevance > second_best.relevance) {\n        second_best = current;\n      }\n      if (current.relevance > result.relevance) {\n        second_best = result;\n        result = current;\n      }\n    });\n    if (second_best.language) {\n      result.second_best = second_best;\n    }\n    return result;\n  }\n\n  /*\n  Post-processing of the highlighted markup:\n\n  - replace TABs with something more useful\n  - replace real line-breaks with '<br>' for non-pre containers\n\n  */\n  function fixMarkup(value) {\n    if (options.tabReplace) {\n      value = value.replace(/^((<[^>]+>|\\t)+)/gm, function(match, p1 /*..., offset, s*/) {\n        return p1.replace(/\\t/g, options.tabReplace);\n      });\n    }\n    if (options.useBR) {\n      value = value.replace(/\\n/g, '<br>');\n    }\n    return value;\n  }\n\n  function buildClassName(prevClassName, currentLang, resultLang) {\n    var language = currentLang ? aliases[currentLang] : resultLang,\n        result   = [prevClassName.trim()];\n\n    if (!prevClassName.match(/\\bhljs\\b/)) {\n      result.push('hljs');\n    }\n\n    if (prevClassName.indexOf(language) === -1) {\n      result.push(language);\n    }\n\n    return result.join(' ').trim();\n  }\n\n  /*\n  Applies highlighting to a DOM node containing code. Accepts a DOM node and\n  two optional parameters for fixMarkup.\n  */\n  function highlightBlock(block) {\n    var language = blockLanguage(block);\n    if (isNotHighlighted(language))\n        return;\n\n    var node;\n    if (options.useBR) {\n      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');\n      node.innerHTML = block.innerHTML.replace(/\\n/g, '').replace(/<br[ \\/]*>/g, '\\n');\n    } else {\n      node = block;\n    }\n    var text = node.textContent;\n    var result = language ? highlight(language, text, true) : highlightAuto(text);\n\n    var originalStream = nodeStream(node);\n    if (originalStream.length) {\n      var resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');\n      resultNode.innerHTML = result.value;\n      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);\n    }\n    result.value = fixMarkup(result.value);\n\n    block.innerHTML = result.value;\n    block.className = buildClassName(block.className, language, result.language);\n    block.result = {\n      language: result.language,\n      re: result.relevance\n    };\n    if (result.second_best) {\n      block.second_best = {\n        language: result.second_best.language,\n        re: result.second_best.relevance\n      };\n    }\n  }\n\n  var options = {\n    classPrefix: 'hljs-',\n    tabReplace: null,\n    useBR: false,\n    languages: undefined\n  };\n\n  /*\n  Updates highlight.js global options with values passed in the form of an object\n  */\n  function configure(user_options) {\n    options = inherit(options, user_options);\n  }\n\n  /*\n  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.\n  */\n  function initHighlighting() {\n    if (initHighlighting.called)\n      return;\n    initHighlighting.called = true;\n\n    var blocks = document.querySelectorAll('pre code');\n    Array.prototype.forEach.call(blocks, highlightBlock);\n  }\n\n  /*\n  Attaches highlighting to the page load event.\n  */\n  function initHighlightingOnLoad() {\n    addEventListener('DOMContentLoaded', initHighlighting, false);\n    addEventListener('load', initHighlighting, false);\n  }\n\n  var languages = {};\n  var aliases = {};\n\n  function registerLanguage(name, language) {\n    var lang = languages[name] = language(hljs);\n    if (lang.aliases) {\n      lang.aliases.forEach(function(alias) {aliases[alias] = name;});\n    }\n  }\n\n  function listLanguages() {\n    return Object.keys(languages);\n  }\n\n  function getLanguage(name) {\n    name = (name || '').toLowerCase();\n    return languages[name] || languages[aliases[name]];\n  }\n\n  /* Interface definition */\n\n  hljs.highlight = highlight;\n  hljs.highlightAuto = highlightAuto;\n  hljs.fixMarkup = fixMarkup;\n  hljs.highlightBlock = highlightBlock;\n  hljs.configure = configure;\n  hljs.initHighlighting = initHighlighting;\n  hljs.initHighlightingOnLoad = initHighlightingOnLoad;\n  hljs.registerLanguage = registerLanguage;\n  hljs.listLanguages = listLanguages;\n  hljs.getLanguage = getLanguage;\n  hljs.inherit = inherit;\n\n  // Common regexps\n  hljs.IDENT_RE = '[a-zA-Z]\\\\w*';\n  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\\\w*';\n  hljs.NUMBER_RE = '\\\\b\\\\d+(\\\\.\\\\d+)?';\n  hljs.C_NUMBER_RE = '(\\\\b0[xX][a-fA-F0-9]+|(\\\\b\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)'; // 0x..., 0..., decimal, float\n  hljs.BINARY_NUMBER_RE = '\\\\b(0b[01]+)'; // 0b...\n  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\\\*|\\\\*=|\\\\+|\\\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\\\?|\\\\[|\\\\{|\\\\(|\\\\^|\\\\^=|\\\\||\\\\|=|\\\\|\\\\||~';\n\n  // Common modes\n  hljs.BACKSLASH_ESCAPE = {\n    begin: '\\\\\\\\[\\\\s\\\\S]', relevance: 0\n  };\n  hljs.APOS_STRING_MODE = {\n    className: 'string',\n    begin: '\\'', end: '\\'',\n    illegal: '\\\\n',\n    contains: [hljs.BACKSLASH_ESCAPE]\n  };\n  hljs.QUOTE_STRING_MODE = {\n    className: 'string',\n    begin: '\"', end: '\"',\n    illegal: '\\\\n',\n    contains: [hljs.BACKSLASH_ESCAPE]\n  };\n  hljs.PHRASAL_WORDS_MODE = {\n    begin: /\\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\\b/\n  };\n  hljs.COMMENT = function (begin, end, inherits) {\n    var mode = hljs.inherit(\n      {\n        className: 'comment',\n        begin: begin, end: end,\n        contains: []\n      },\n      inherits || {}\n    );\n    mode.contains.push(hljs.PHRASAL_WORDS_MODE);\n    mode.contains.push({\n      className: 'doctag',\n      begin: \"(?:TODO|FIXME|NOTE|BUG|XXX):\",\n      relevance: 0\n    });\n    return mode;\n  };\n  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');\n  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\\\*', '\\\\*/');\n  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');\n  hljs.NUMBER_MODE = {\n    className: 'number',\n    begin: hljs.NUMBER_RE,\n    relevance: 0\n  };\n  hljs.C_NUMBER_MODE = {\n    className: 'number',\n    begin: hljs.C_NUMBER_RE,\n    relevance: 0\n  };\n  hljs.BINARY_NUMBER_MODE = {\n    className: 'number',\n    begin: hljs.BINARY_NUMBER_RE,\n    relevance: 0\n  };\n  hljs.CSS_NUMBER_MODE = {\n    className: 'number',\n    begin: hljs.NUMBER_RE + '(' +\n      '%|em|ex|ch|rem'  +\n      '|vw|vh|vmin|vmax' +\n      '|cm|mm|in|pt|pc|px' +\n      '|deg|grad|rad|turn' +\n      '|s|ms' +\n      '|Hz|kHz' +\n      '|dpi|dpcm|dppx' +\n      ')?',\n    relevance: 0\n  };\n  hljs.REGEXP_MODE = {\n    className: 'regexp',\n    begin: /\\//, end: /\\/[gimuy]*/,\n    illegal: /\\n/,\n    contains: [\n      hljs.BACKSLASH_ESCAPE,\n      {\n        begin: /\\[/, end: /\\]/,\n        relevance: 0,\n        contains: [hljs.BACKSLASH_ESCAPE]\n      }\n    ]\n  };\n  hljs.TITLE_MODE = {\n    className: 'title',\n    begin: hljs.IDENT_RE,\n    relevance: 0\n  };\n  hljs.UNDERSCORE_TITLE_MODE = {\n    className: 'title',\n    begin: hljs.UNDERSCORE_IDENT_RE,\n    relevance: 0\n  };\n\n  return hljs;\n}));\n";

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "/*\n\nOriginal style from softwaremaniacs.org (c) Ivan Sagalaev <Maniac@SoftwareManiacs.Org>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #f0f0f0;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs,\n.hljs-subst,\n.hljs-tag .hljs-title,\n.nginx .hljs-title {\n  color: black;\n}\n\n.hljs-string,\n.hljs-title,\n.hljs-constant,\n.hljs-parent,\n.hljs-tag .hljs-value,\n.hljs-rule .hljs-value,\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-name,\n.haml .hljs-symbol,\n.ruby .hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.hljs-template_tag,\n.django .hljs-variable,\n.smalltalk .hljs-class,\n.hljs-addition,\n.hljs-flow,\n.hljs-stream,\n.bash .hljs-variable,\n.pf .hljs-variable,\n.apache .hljs-tag,\n.apache .hljs-cbracket,\n.tex .hljs-command,\n.tex .hljs-special,\n.erlang_repl .hljs-function_or_atom,\n.asciidoc .hljs-header,\n.markdown .hljs-header,\n.coffeescript .hljs-attribute,\n.tp .hljs-variable {\n  color: #800;\n}\n\n.smartquote,\n.hljs-comment,\n.hljs-annotation,\n.diff .hljs-header,\n.hljs-chunk,\n.asciidoc .hljs-blockquote,\n.markdown .hljs-blockquote {\n  color: #888;\n}\n\n.hljs-number,\n.hljs-date,\n.hljs-regexp,\n.hljs-literal,\n.hljs-hexcolor,\n.smalltalk .hljs-symbol,\n.smalltalk .hljs-char,\n.go .hljs-constant,\n.hljs-change,\n.lasso .hljs-variable,\n.makefile .hljs-variable,\n.asciidoc .hljs-bullet,\n.markdown .hljs-bullet,\n.asciidoc .hljs-link_url,\n.markdown .hljs-link_url {\n  color: #080;\n}\n\n.hljs-label,\n.ruby .hljs-string,\n.hljs-decorator,\n.hljs-filter .hljs-argument,\n.hljs-localvars,\n.hljs-array,\n.hljs-attr_selector,\n.hljs-important,\n.hljs-pseudo,\n.hljs-pi,\n.haml .hljs-bullet,\n.hljs-doctype,\n.hljs-deletion,\n.hljs-envvar,\n.hljs-shebang,\n.apache .hljs-sqbracket,\n.nginx .hljs-built_in,\n.tex .hljs-formula,\n.erlang_repl .hljs-reserved,\n.hljs-prompt,\n.asciidoc .hljs-link_label,\n.markdown .hljs-link_label,\n.vhdl .hljs-attribute,\n.clojure .hljs-attribute,\n.asciidoc .hljs-attribute,\n.lasso .hljs-attribute,\n.coffeescript .hljs-property,\n.hljs-phony {\n  color: #88f;\n}\n\n.hljs-keyword,\n.hljs-id,\n.hljs-title,\n.hljs-built_in,\n.css .hljs-tag,\n.hljs-doctag,\n.smalltalk .hljs-class,\n.hljs-winutils,\n.bash .hljs-variable,\n.pf .hljs-variable,\n.apache .hljs-tag,\n.hljs-type,\n.hljs-typename,\n.tex .hljs-command,\n.asciidoc .hljs-strong,\n.markdown .hljs-strong,\n.hljs-request,\n.hljs-status,\n.tp .hljs-data,\n.tp .hljs-io {\n  font-weight: bold;\n}\n\n.asciidoc .hljs-emphasis,\n.markdown .hljs-emphasis,\n.tp .hljs-units {\n  font-style: italic;\n}\n\n.nginx .hljs-built_in {\n  font-weight: normal;\n}\n\n.coffeescript .javascript,\n.javascript .xml,\n.lasso .markup,\n.tex .hljs-formula,\n.xml .javascript,\n.xml .vbscript,\n.xml .css,\n.xml .hljs-cdata {\n  opacity: 0.5;\n}\n";

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "@font-face{font-family:KaTeX_AMS;src:url(fonts/KaTeX_AMS-Regular.eot);src:url(fonts/KaTeX_AMS-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_AMS-Regular.woff2) format('woff2'),url(fonts/KaTeX_AMS-Regular.woff) format('woff'),url(fonts/KaTeX_AMS-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(fonts/KaTeX_Caligraphic-Bold.eot);src:url(fonts/KaTeX_Caligraphic-Bold.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Caligraphic-Bold.woff2) format('woff2'),url(fonts/KaTeX_Caligraphic-Bold.woff) format('woff'),url(fonts/KaTeX_Caligraphic-Bold.ttf) format('ttf');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(fonts/KaTeX_Caligraphic-Regular.eot);src:url(fonts/KaTeX_Caligraphic-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Caligraphic-Regular.woff2) format('woff2'),url(fonts/KaTeX_Caligraphic-Regular.woff) format('woff'),url(fonts/KaTeX_Caligraphic-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(fonts/KaTeX_Fraktur-Bold.eot);src:url(fonts/KaTeX_Fraktur-Bold.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Fraktur-Bold.woff2) format('woff2'),url(fonts/KaTeX_Fraktur-Bold.woff) format('woff'),url(fonts/KaTeX_Fraktur-Bold.ttf) format('ttf');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(fonts/KaTeX_Fraktur-Regular.eot);src:url(fonts/KaTeX_Fraktur-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Fraktur-Regular.woff2) format('woff2'),url(fonts/KaTeX_Fraktur-Regular.woff) format('woff'),url(fonts/KaTeX_Fraktur-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Bold.eot);src:url(fonts/KaTeX_Main-Bold.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Main-Bold.woff2) format('woff2'),url(fonts/KaTeX_Main-Bold.woff) format('woff'),url(fonts/KaTeX_Main-Bold.ttf) format('ttf');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Italic.eot);src:url(fonts/KaTeX_Main-Italic.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Main-Italic.woff2) format('woff2'),url(fonts/KaTeX_Main-Italic.woff) format('woff'),url(fonts/KaTeX_Main-Italic.ttf) format('ttf');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Regular.eot);src:url(fonts/KaTeX_Main-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Main-Regular.woff2) format('woff2'),url(fonts/KaTeX_Main-Regular.woff) format('woff'),url(fonts/KaTeX_Main-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url(fonts/KaTeX_Math-Italic.eot);src:url(fonts/KaTeX_Math-Italic.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Math-Italic.woff2) format('woff2'),url(fonts/KaTeX_Math-Italic.woff) format('woff'),url(fonts/KaTeX_Math-Italic.ttf) format('ttf');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url(fonts/KaTeX_SansSerif-Regular.eot);src:url(fonts/KaTeX_SansSerif-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_SansSerif-Regular.woff2) format('woff2'),url(fonts/KaTeX_SansSerif-Regular.woff) format('woff'),url(fonts/KaTeX_SansSerif-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Script;src:url(fonts/KaTeX_Script-Regular.eot);src:url(fonts/KaTeX_Script-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Script-Regular.woff2) format('woff2'),url(fonts/KaTeX_Script-Regular.woff) format('woff'),url(fonts/KaTeX_Script-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url(fonts/KaTeX_Size1-Regular.eot);src:url(fonts/KaTeX_Size1-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size1-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size1-Regular.woff) format('woff'),url(fonts/KaTeX_Size1-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url(fonts/KaTeX_Size2-Regular.eot);src:url(fonts/KaTeX_Size2-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size2-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size2-Regular.woff) format('woff'),url(fonts/KaTeX_Size2-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url(fonts/KaTeX_Size3-Regular.eot);src:url(fonts/KaTeX_Size3-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size3-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size3-Regular.woff) format('woff'),url(fonts/KaTeX_Size3-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url(fonts/KaTeX_Size4-Regular.eot);src:url(fonts/KaTeX_Size4-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size4-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size4-Regular.woff) format('woff'),url(fonts/KaTeX_Size4-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Typewriter;src:url(fonts/KaTeX_Typewriter-Regular.eot);src:url(fonts/KaTeX_Typewriter-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Typewriter-Regular.woff2) format('woff2'),url(fonts/KaTeX_Typewriter-Regular.woff) format('woff'),url(fonts/KaTeX_Typewriter-Regular.ttf) format('ttf');font-weight:400;font-style:normal}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:inline-block}.katex{font:400 1.21em KaTeX_Main;line-height:1.2;white-space:nowrap;text-indent:0}.katex .katex-html{display:inline-block}.katex .katex-mathml{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .base,.katex .strut{display:inline-block}.katex .mathit{font-family:KaTeX_Math;font-style:italic}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .amsrm,.katex .mathbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr{font-family:KaTeX_Script}.katex .mathsf{font-family:KaTeX_SansSerif}.katex .mainit{font-family:KaTeX_Main;font-style:italic}.katex .textstyle>.mord+.mop{margin-left:.16667em}.katex .textstyle>.mord+.mbin{margin-left:.22222em}.katex .textstyle>.mord+.mrel{margin-left:.27778em}.katex .textstyle>.mop+.mop,.katex .textstyle>.mop+.mord,.katex .textstyle>.mord+.minner{margin-left:.16667em}.katex .textstyle>.mop+.mrel{margin-left:.27778em}.katex .textstyle>.mop+.minner{margin-left:.16667em}.katex .textstyle>.mbin+.minner,.katex .textstyle>.mbin+.mop,.katex .textstyle>.mbin+.mopen,.katex .textstyle>.mbin+.mord{margin-left:.22222em}.katex .textstyle>.mrel+.minner,.katex .textstyle>.mrel+.mop,.katex .textstyle>.mrel+.mopen,.katex .textstyle>.mrel+.mord{margin-left:.27778em}.katex .textstyle>.mclose+.mop{margin-left:.16667em}.katex .textstyle>.mclose+.mbin{margin-left:.22222em}.katex .textstyle>.mclose+.mrel{margin-left:.27778em}.katex .textstyle>.mclose+.minner,.katex .textstyle>.minner+.mop,.katex .textstyle>.minner+.mord,.katex .textstyle>.mpunct+.mclose,.katex .textstyle>.mpunct+.minner,.katex .textstyle>.mpunct+.mop,.katex .textstyle>.mpunct+.mopen,.katex .textstyle>.mpunct+.mord,.katex .textstyle>.mpunct+.mpunct,.katex .textstyle>.mpunct+.mrel{margin-left:.16667em}.katex .textstyle>.minner+.mbin{margin-left:.22222em}.katex .textstyle>.minner+.mrel{margin-left:.27778em}.katex .mclose+.mop,.katex .minner+.mop,.katex .mop+.mop,.katex .mop+.mord,.katex .mord+.mop,.katex .textstyle>.minner+.minner,.katex .textstyle>.minner+.mopen,.katex .textstyle>.minner+.mpunct{margin-left:.16667em}.katex .reset-textstyle.textstyle{font-size:1em}.katex .reset-textstyle.scriptstyle{font-size:.7em}.katex .reset-textstyle.scriptscriptstyle{font-size:.5em}.katex .reset-scriptstyle.textstyle{font-size:1.42857em}.katex .reset-scriptstyle.scriptstyle{font-size:1em}.katex .reset-scriptstyle.scriptscriptstyle{font-size:.71429em}.katex .reset-scriptscriptstyle.textstyle{font-size:2em}.katex .reset-scriptscriptstyle.scriptstyle{font-size:1.4em}.katex .reset-scriptscriptstyle.scriptscriptstyle{font-size:1em}.katex .style-wrap{position:relative}.katex .vlist{display:inline-block}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist .baseline-fix{display:inline-table;table-layout:fixed}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{width:100%}.katex .mfrac .frac-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .mfrac .frac-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .mspace{display:inline-block}.katex .mspace.negativethinspace{margin-left:-.16667em}.katex .mspace.thinspace{width:.16667em}.katex .mspace.mediumspace{width:.22222em}.katex .mspace.thickspace{width:.27778em}.katex .mspace.enspace{width:.5em}.katex .mspace.quad{width:1em}.katex .mspace.qquad{width:2em}.katex .llap,.katex .rlap{width:0;position:relative}.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .rlap>.inner{left:0}.katex .katex-logo .a{font-size:.75em;margin-left:-.32em;position:relative;top:-.2em}.katex .katex-logo .t{margin-left:-.23em}.katex .katex-logo .e{margin-left:-.1667em;position:relative;top:.2155em}.katex .katex-logo .x{margin-left:-.125em}.katex .rule{display:inline-block;border-style:solid;position:relative}.katex .overline .overline-line{width:100%}.katex .overline .overline-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .overline .overline-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .sqrt>.sqrt-sign{position:relative}.katex .sqrt .sqrt-line{width:100%}.katex .sqrt .sqrt-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .sqrt .sqrt-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .fontsize-ensurer,.katex .sizing{display:inline-block}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:2em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:3.46em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:4.14em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.98em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.47142857em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.95714286em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.55714286em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.875em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.125em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.25em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.5em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.8em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.1625em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.5875em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:3.1125em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.77777778em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.88888889em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.6em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.92222222em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.3em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.76666667em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.7em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.8em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.9em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.2em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.44em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.73em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:2.07em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.49em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.58333333em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.66666667em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.75em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.83333333em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44166667em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.725em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.075em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.48611111em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.55555556em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.625em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.69444444em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.20138889em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.4375em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72916667em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.28901734em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.40462428em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.46242775em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.52023121em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.57803468em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69364162em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83236994em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.19653179em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.43930636em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.24154589em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.33816425em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.38647343em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.43478261em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.48309179em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.57971014em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69565217em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83574879em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20289855em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.20080321em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.2811245em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.32128514em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.36144578em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.40160643em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48192771em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57831325em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69477912em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.8313253em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist>span,.katex .op-limits>.vlist>span{text-align:center}.katex .accent .accent-body>span{width:0}.katex .accent .accent-body.accent-vec>span{position:relative;left:.326em}.katex .mtable .vertical-separator{display:inline-block;margin:0 -.025em;border-right:.05em solid #000}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist{text-align:center}.katex .mtable .col-align-l>.vlist{text-align:left}.katex .mtable .col-align-r>.vlist{text-align:right}";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "(function(e){if(typeof exports===\"object\"&&typeof module!==\"undefined\"){module.exports=e()}else if(typeof define===\"function\"&&define.amd){define([],e)}else{var t;if(typeof window!==\"undefined\"){t=window}else if(typeof global!==\"undefined\"){t=global}else if(typeof self!==\"undefined\"){t=self}else{t=this}t.katex=e()}})(function(){var e,t,i;return function h(e,t,i){function a(l,s){if(!t[l]){if(!e[l]){var p=typeof require==\"function\"&&require;if(!s&&p)return p(l,!0);if(r)return r(l,!0);var c=new Error(\"Cannot find module '\"+l+\"'\");throw c.code=\"MODULE_NOT_FOUND\",c}var n=t[l]={exports:{}};e[l][0].call(n.exports,function(t){var i=e[l][1][t];return a(i?i:t)},n,n.exports,h,e,t,i)}return t[l].exports}var r=typeof require==\"function\"&&require;for(var l=0;l<i.length;l++)a(i[l]);return a}({1:[function(e,t,i){var h=e(\"./src/ParseError\");var a=e(\"./src/Settings\");var r=e(\"./src/buildTree\");var l=e(\"./src/parseTree\");var s=e(\"./src/utils\");var p=function(e,t,i){s.clearNode(t);var h=new a(i);var p=l(e,h);var c=r(p,e,h).toNode();t.appendChild(c)};if(typeof document!==\"undefined\"){if(document.compatMode!==\"CSS1Compat\"){typeof console!==\"undefined\"&&console.warn(\"Warning: KaTeX doesn't work in quirks mode. Make sure your \"+\"website has a suitable doctype.\");p=function(){throw new h(\"KaTeX doesn't work in quirks mode.\")}}}var c=function(e,t){var i=new a(t);var h=l(e,i);return r(h,e,i).toMarkup()};var n=function(e,t){var i=new a(t);return l(e,i)};t.exports={render:p,renderToString:c,__parse:n,ParseError:h}},{\"./src/ParseError\":5,\"./src/Settings\":7,\"./src/buildTree\":12,\"./src/parseTree\":21,\"./src/utils\":23}],2:[function(e,t,i){\"use strict\";function h(e){if(!e.__matchAtRelocatable){var t=e.source+\"|()\";var i=\"g\"+(e.ignoreCase?\"i\":\"\")+(e.multiline?\"m\":\"\")+(e.unicode?\"u\":\"\");e.__matchAtRelocatable=new RegExp(t,i)}return e.__matchAtRelocatable}function a(e,t,i){if(e.global||e.sticky){throw new Error(\"matchAt(...): Only non-global regexes are supported\")}var a=h(e);a.lastIndex=i;var r=a.exec(t);if(r[r.length-1]==null){r.length=r.length-1;return r}else{return null}}t.exports=a},{}],3:[function(e,t,i){var h=e(\"match-at\");var a=e(\"./ParseError\");function r(e){this._input=e}function l(e,t,i){this.text=e;this.data=t;this.position=i}var s=[/[/|@.\"\"`0-9a-zA-Z]/,/[*+-]/,/[=<>:]/,/[,;]/,/['\\^_{}]/,/[(\\[]/,/[)\\]?!]/,/~/,/&/,/\\\\\\\\/];var p=[/[a-zA-Z0-9`!@*()-=+\\[\\]'\";:?\\/.,]/,/[{}]/,/~/,/&/,/\\\\\\\\/];var c=/\\s*/;var n=/ +|\\\\  +/;var o=/\\\\(?:[a-zA-Z]+|.)/;r.prototype._innerLex=function(e,t,i){var r=this._input;var s;if(i){s=h(c,r,e)[0];e+=s.length}else{s=h(n,r,e);if(s!==null){return new l(\" \",null,e+s[0].length)}}if(e===r.length){return new l(\"EOF\",null,e)}var p;if(p=h(o,r,e)){return new l(p[0],null,e+p[0].length)}else{for(var g=0;g<t.length;g++){var d=t[g];if(p=h(d,r,e)){return new l(p[0],null,e+p[0].length)}}}throw new a(\"Unexpected character: '\"+r[e]+\"'\",this,e)};var g=/#[a-z0-9]+|[a-z]+/i;r.prototype._innerLexColor=function(e){var t=this._input;var i=h(c,t,e)[0];e+=i.length;var r;if(r=h(g,t,e)){return new l(r[0],null,e+r[0].length)}else{throw new a(\"Invalid color\",this,e)}};var d=/(-?)\\s*(\\d+(?:\\.\\d*)?|\\.\\d+)\\s*([a-z]{2})/;r.prototype._innerLexSize=function(e){var t=this._input;var i=h(c,t,e)[0];e+=i.length;var r;if(r=h(d,t,e)){var s=r[3];if(s!==\"em\"&&s!==\"ex\"){throw new a(\"Invalid unit: '\"+s+\"'\",this,e)}return new l(r[0],{number:+(r[1]+r[2]),unit:s},e+r[0].length)}throw new a(\"Invalid size\",this,e)};r.prototype._innerLexWhitespace=function(e){var t=this._input;var i=h(c,t,e)[0];e+=i.length;return new l(i[0],null,e)};r.prototype.lex=function(e,t){if(t===\"math\"){return this._innerLex(e,s,true)}else if(t===\"text\"){return this._innerLex(e,p,false)}else if(t===\"color\"){return this._innerLexColor(e)}else if(t===\"size\"){return this._innerLexSize(e)}else if(t===\"whitespace\"){return this._innerLexWhitespace(e)}};t.exports=r},{\"./ParseError\":5,\"match-at\":2}],4:[function(e,t,i){function h(e){this.style=e.style;this.color=e.color;this.size=e.size;this.phantom=e.phantom;this.font=e.font;if(e.parentStyle===undefined){this.parentStyle=e.style}else{this.parentStyle=e.parentStyle}if(e.parentSize===undefined){this.parentSize=e.size}else{this.parentSize=e.parentSize}}h.prototype.extend=function(e){var t={style:this.style,size:this.size,color:this.color,parentStyle:this.style,parentSize:this.size,phantom:this.phantom,font:this.font};for(var i in e){if(e.hasOwnProperty(i)){t[i]=e[i]}}return new h(t)};h.prototype.withStyle=function(e){return this.extend({style:e})};h.prototype.withSize=function(e){return this.extend({size:e})};h.prototype.withColor=function(e){return this.extend({color:e})};h.prototype.withPhantom=function(){return this.extend({phantom:true})};h.prototype.withFont=function(e){return this.extend({font:e})};h.prototype.reset=function(){return this.extend({})};var a={\"katex-blue\":\"#6495ed\",\"katex-orange\":\"#ffa500\",\"katex-pink\":\"#ff00af\",\"katex-red\":\"#df0030\",\"katex-green\":\"#28ae7b\",\"katex-gray\":\"gray\",\"katex-purple\":\"#9d38bd\",\"katex-blueA\":\"#c7e9f1\",\"katex-blueB\":\"#9cdceb\",\"katex-blueC\":\"#58c4dd\",\"katex-blueD\":\"#29abca\",\"katex-blueE\":\"#1c758a\",\"katex-tealA\":\"#acead7\",\"katex-tealB\":\"#76ddc0\",\"katex-tealC\":\"#5cd0b3\",\"katex-tealD\":\"#55c1a7\",\"katex-tealE\":\"#49a88f\",\"katex-greenA\":\"#c9e2ae\",\"katex-greenB\":\"#a6cf8c\",\"katex-greenC\":\"#83c167\",\"katex-greenD\":\"#77b05d\",\"katex-greenE\":\"#699c52\",\"katex-goldA\":\"#f7c797\",\"katex-goldB\":\"#f9b775\",\"katex-goldC\":\"#f0ac5f\",\"katex-goldD\":\"#e1a158\",\"katex-goldE\":\"#c78d46\",\"katex-redA\":\"#f7a1a3\",\"katex-redB\":\"#ff8080\",\"katex-redC\":\"#fc6255\",\"katex-redD\":\"#e65a4c\",\"katex-redE\":\"#cf5044\",\"katex-maroonA\":\"#ecabc1\",\"katex-maroonB\":\"#ec92ab\",\"katex-maroonC\":\"#c55f73\",\"katex-maroonD\":\"#a24d61\",\"katex-maroonE\":\"#94424f\",\"katex-purpleA\":\"#caa3e8\",\"katex-purpleB\":\"#b189c6\",\"katex-purpleC\":\"#9a72ac\",\"katex-purpleD\":\"#715582\",\"katex-purpleE\":\"#644172\",\"katex-mintA\":\"#f5f9e8\",\"katex-mintB\":\"#edf2df\",\"katex-mintC\":\"#e0e5cc\",\"katex-grayA\":\"#fdfdfd\",\"katex-grayB\":\"#f7f7f7\",\"katex-grayC\":\"#eeeeee\",\"katex-grayD\":\"#dddddd\",\"katex-grayE\":\"#cccccc\",\"katex-grayF\":\"#aaaaaa\",\"katex-grayG\":\"#999999\",\"katex-grayH\":\"#555555\",\"katex-grayI\":\"#333333\",\"katex-kaBlue\":\"#314453\",\"katex-kaGreen\":\"#639b24\"};h.prototype.getColor=function(){if(this.phantom){return\"transparent\"}else{return a[this.color]||this.color}};t.exports=h},{}],5:[function(e,t,i){function h(e,t,i){var a=\"KaTeX parse error: \"+e;if(t!==undefined&&i!==undefined){a+=\" at position \"+i+\": \";var r=t._input;r=r.slice(0,i)+\"\\u0332\"+r.slice(i);var l=Math.max(0,i-15);var s=i+15;a+=r.slice(l,s)}var p=new Error(a);p.name=\"ParseError\";p.__proto__=h.prototype;p.position=i;return p}h.prototype.__proto__=Error.prototype;t.exports=h},{}],6:[function(e,t,i){var h=e(\"./functions\");var a=e(\"./environments\");var r=e(\"./Lexer\");var l=e(\"./symbols\");var s=e(\"./utils\");var p=e(\"./parseData\");var c=e(\"./ParseError\");function n(e,t){this.lexer=new r(e);this.settings=t}var o=p.ParseNode;var g=p.ParseResult;function d(e,t){this.result=e;this.isFunction=t}n.prototype.expect=function(e,t){if(e.text!==t){throw new c(\"Expected '\"+t+\"', got '\"+e.text+\"'\",this.lexer,e.position)}};n.prototype.parse=function(e){var t=this.parseInput(0,\"math\");return t.result};n.prototype.parseInput=function(e,t){var i=this.parseExpression(e,t,false);this.expect(i.peek,\"EOF\");return i};var w=[\"}\",\"\\\\end\",\"\\\\right\",\"&\",\"\\\\\\\\\",\"\\\\cr\"];n.prototype.parseExpression=function(e,t,i,h){var a=[];var r=null;while(true){r=this.lexer.lex(e,t);if(w.indexOf(r.text)!==-1){break}if(h&&r.text===h){break}var l=this.parseAtom(e,t);if(!l){if(!this.settings.throwOnError&&r.text[0]===\"\\\\\"){var s=this.handleUnsupportedCmd(r.text,t);a.push(s);e=r.position;continue}break}if(i&&l.result.type===\"infix\"){break}a.push(l.result);e=l.position}var p=new g(this.handleInfixNodes(a,t),e);p.peek=r;return p};n.prototype.handleInfixNodes=function(e,t){var i=-1;var a;var r;for(var l=0;l<e.length;l++){var s=e[l];if(s.type===\"infix\"){if(i!==-1){throw new c(\"only one infix operator per group\",this.lexer,-1)}i=l;r=s.value.replaceWith;a=h.funcs[r]}}if(i!==-1){var p,n;var g=e.slice(0,i);var d=e.slice(i+1);if(g.length===1&&g[0].type===\"ordgroup\"){p=g[0]}else{p=new o(\"ordgroup\",g,t)}if(d.length===1&&d[0].type===\"ordgroup\"){n=d[0]}else{n=new o(\"ordgroup\",d,t)}var w=a.handler(r,p,n);return[new o(w.type,w,t)]}else{return e}};var u=1;n.prototype.handleSupSubscript=function(e,t,i,a){var r=this.parseGroup(e,t);if(!r){var l=this.lexer.lex(e,t);if(!this.settings.throwOnError&&l.text[0]===\"\\\\\"){return new g(this.handleUnsupportedCmd(l.text,t),l.position)}else{throw new c(\"Expected group after '\"+i+\"'\",this.lexer,e)}}else if(r.isFunction){var s=h.funcs[r.result.result].greediness;if(s>u){return this.parseFunction(e,t)}else{throw new c(\"Got function '\"+r.result.result+\"' with no arguments \"+\"as \"+a,this.lexer,e)}}else{return r.result}};n.prototype.handleUnsupportedCmd=function(e,t){var i=[];for(var h=0;h<e.length;h++){i.push(new o(\"textord\",e[h],\"text\"))}var a=new o(\"text\",{body:i,type:\"text\"},t);var r=new o(\"color\",{color:this.settings.errorColor,value:[a],type:\"color\"},t);return r};n.prototype.parseAtom=function(e,t){var i=this.parseImplicitGroup(e,t);if(t===\"text\"){return i}var h;if(!i){h=e;i=undefined}else{h=i.position}var a;var r;var l;while(true){var s=this.lexer.lex(h,t);if(s.text===\"\\\\limits\"||s.text===\"\\\\nolimits\"){if(!i||i.result.type!==\"op\"){throw new c(\"Limit controls must follow a math operator\",this.lexer,h)}else{var p=s.text===\"\\\\limits\";i.result.value.limits=p;i.result.value.alwaysHandleSupSub=true;h=s.position}}else if(s.text===\"^\"){if(a){throw new c(\"Double superscript\",this.lexer,h)}l=this.handleSupSubscript(s.position,t,s.text,\"superscript\");h=l.position;a=l.result}else if(s.text===\"_\"){if(r){throw new c(\"Double subscript\",this.lexer,h)}l=this.handleSupSubscript(s.position,t,s.text,\"subscript\");h=l.position;r=l.result}else if(s.text===\"'\"){var n=new o(\"textord\",\"\\\\prime\",t);var d=[n];h=s.position;while((s=this.lexer.lex(h,t)).text===\"'\"){d.push(n);h=s.position}a=new o(\"ordgroup\",d,t)}else{break}}if(a||r){return new g(new o(\"supsub\",{base:i&&i.result,sup:a,sub:r},t),h)}else{return i}};var k=[\"\\\\tiny\",\"\\\\scriptsize\",\"\\\\footnotesize\",\"\\\\small\",\"\\\\normalsize\",\"\\\\large\",\"\\\\Large\",\"\\\\LARGE\",\"\\\\huge\",\"\\\\Huge\"];var m=[\"\\\\displaystyle\",\"\\\\textstyle\",\"\\\\scriptstyle\",\"\\\\scriptscriptstyle\"];n.prototype.parseImplicitGroup=function(e,t){var i=this.parseSymbol(e,t);if(!i||!i.result){return this.parseFunction(e,t)}var h=i.result.result;var r;if(h===\"\\\\left\"){var l=this.parseFunction(e,t);r=this.parseExpression(l.position,t,false);this.expect(r.peek,\"\\\\right\");var p=this.parseFunction(r.position,t);return new g(new o(\"leftright\",{body:r.result,left:l.result.value.value,right:p.result.value.value},t),p.position)}else if(h===\"\\\\begin\"){var n=this.parseFunction(e,t);var d=n.result.value.name;if(!a.hasOwnProperty(d)){throw new c(\"No such environment: \"+d,this.lexer,n.result.value.namepos)}var w=a[d];var u=[null,t,d];var f=this.parseArguments(n.position,t,\"\\\\begin{\"+d+\"}\",w,u);u[0]=f;var v=w.handler.apply(this,u);var y=this.lexer.lex(v.position,t);this.expect(y,\"\\\\end\");var x=this.parseFunction(v.position,t);if(x.result.value.name!==d){throw new c(\"Mismatch: \\\\begin{\"+d+\"} matched \"+\"by \\\\end{\"+x.result.value.name+\"}\",this.lexer,x.namepos)}v.position=x.position;return v}else if(s.contains(k,h)){r=this.parseExpression(i.result.position,t,false);return new g(new o(\"sizing\",{size:\"size\"+(s.indexOf(k,h)+1),value:r.result},t),r.position)}else if(s.contains(m,h)){r=this.parseExpression(i.result.position,t,true);return new g(new o(\"styling\",{style:h.slice(1,h.length-5),value:r.result},t),r.position)}else{return this.parseFunction(e,t)}};n.prototype.parseFunction=function(e,t){var i=this.parseGroup(e,t);if(i){if(i.isFunction){var a=i.result.result;var r=h.funcs[a];if(t===\"text\"&&!r.allowedInText){throw new c(\"Can't use function '\"+a+\"' in text mode\",this.lexer,i.position)}var l=[a];var s=this.parseArguments(i.result.position,t,a,r,l);var p=h.funcs[a].handler.apply(this,l);return new g(new o(p.type,p,t),s)}else{return i.result}}else{return null}};n.prototype.parseArguments=function(e,t,i,a,r){var l=a.numArgs+a.numOptionalArgs;if(l===0){return e}var s=e;var p=a.greediness;var n=[s];for(var o=0;o<l;o++){var w=a.argTypes&&a.argTypes[o];var u;if(o<a.numOptionalArgs){if(w){u=this.parseSpecialGroup(s,w,t,true)}else{u=this.parseOptionalGroup(s,t)}if(!u){r.push(null);n.push(s);continue}}else{if(w){u=this.parseSpecialGroup(s,w,t)}else{u=this.parseGroup(s,t)}if(!u){var k=this.lexer.lex(s,t);if(!this.settings.throwOnError&&k.text[0]===\"\\\\\"){u=new d(new g(this.handleUnsupportedCmd(k.text,t),k.position),false)}else{throw new c(\"Expected group after '\"+i+\"'\",this.lexer,e)}}}var m;if(u.isFunction){var f=h.funcs[u.result.result].greediness;if(f>p){m=this.parseFunction(s,t)}else{throw new c(\"Got function '\"+u.result.result+\"' as \"+\"argument to '\"+i+\"'\",this.lexer,u.result.position-1)}}else{m=u.result}r.push(m.result);n.push(m.position);s=m.position}r.push(n);return s};n.prototype.parseSpecialGroup=function(e,t,i,h){if(t===\"original\"){t=i}if(t===\"color\"||t===\"size\"){var a=this.lexer.lex(e,i);if(h&&a.text!==\"[\"){return null}this.expect(a,h?\"[\":\"{\");var r=this.lexer.lex(a.position,t);var l;if(t===\"color\"){l=r.text}else{l=r.data}var s=this.lexer.lex(r.position,i);this.expect(s,h?\"]\":\"}\");return new d(new g(new o(t,l,i),s.position),false)}else if(t===\"text\"){var p=this.lexer.lex(e,\"whitespace\");e=p.position}if(h){return this.parseOptionalGroup(e,t)}else{return this.parseGroup(e,t)}};n.prototype.parseGroup=function(e,t){var i=this.lexer.lex(e,t);if(i.text===\"{\"){var h=this.parseExpression(i.position,t,false);var a=this.lexer.lex(h.position,t);this.expect(a,\"}\");return new d(new g(new o(\"ordgroup\",h.result,t),a.position),false)}else{return this.parseSymbol(e,t)}};n.prototype.parseOptionalGroup=function(e,t){var i=this.lexer.lex(e,t);if(i.text===\"[\"){var h=this.parseExpression(i.position,t,false,\"]\");var a=this.lexer.lex(h.position,t);this.expect(a,\"]\");return new d(new g(new o(\"ordgroup\",h.result,t),a.position),false)}else{return null}};n.prototype.parseSymbol=function(e,t){var i=this.lexer.lex(e,t);if(h.funcs[i.text]){return new d(new g(i.text,i.position),true)}else if(l[t][i.text]){return new d(new g(new o(l[t][i.text].group,i.text,t),i.position),false)}else{return null}};n.prototype.ParseNode=o;t.exports=n},{\"./Lexer\":3,\"./ParseError\":5,\"./environments\":15,\"./functions\":18,\"./parseData\":20,\"./symbols\":22,\"./utils\":23}],7:[function(e,t,i){function h(e,t){return e===undefined?t:e}function a(e){e=e||{};this.displayMode=h(e.displayMode,false);this.throwOnError=h(e.throwOnError,true);this.errorColor=h(e.errorColor,\"#cc0000\")}t.exports=a},{}],8:[function(e,t,i){function h(e,t,i,h){this.id=e;this.size=t;this.cramped=h;this.sizeMultiplier=i}h.prototype.sup=function(){return w[u[this.id]]};h.prototype.sub=function(){return w[k[this.id]]};h.prototype.fracNum=function(){return w[m[this.id]]};h.prototype.fracDen=function(){return w[f[this.id]]};h.prototype.cramp=function(){return w[v[this.id]]};h.prototype.cls=function(){return g[this.size]+(this.cramped?\" cramped\":\" uncramped\")};h.prototype.reset=function(){return d[this.size]};var a=0;var r=1;var l=2;var s=3;var p=4;var c=5;var n=6;var o=7;var g=[\"displaystyle textstyle\",\"textstyle\",\"scriptstyle\",\"scriptscriptstyle\"];var d=[\"reset-textstyle\",\"reset-textstyle\",\"reset-scriptstyle\",\"reset-scriptscriptstyle\"];var w=[new h(a,0,1,false),new h(r,0,1,true),new h(l,1,1,false),new h(s,1,1,true),new h(p,2,.7,false),new h(c,2,.7,true),new h(n,3,.5,false),new h(o,3,.5,true)];var u=[p,c,p,c,n,o,n,o];var k=[c,c,c,c,o,o,o,o];var m=[l,s,p,c,n,o,n,o];var f=[s,s,c,c,o,o,o,o];var v=[r,r,s,s,c,c,o,o];t.exports={DISPLAY:w[a],TEXT:w[l],SCRIPT:w[p],SCRIPTSCRIPT:w[n]}},{}],9:[function(e,t,i){var h=e(\"./domTree\");var a=e(\"./fontMetrics\");var r=e(\"./symbols\");var l=e(\"./utils\");var s=[\"\\\\Gamma\",\"\\\\Delta\",\"\\\\Theta\",\"\\\\Lambda\",\"\\\\Xi\",\"\\\\Pi\",\"\\\\Sigma\",\"\\\\Upsilon\",\"\\\\Phi\",\"\\\\Psi\",\"\\\\Omega\"];var p=[\"\\u0131\",\"\\u0237\"];var c=function(e,t,i,l,s){if(r[i][e]&&r[i][e].replace){e=r[i][e].replace}var p=a.getCharacterMetrics(e,t);var c;if(p){c=new h.symbolNode(e,p.height,p.depth,p.italic,p.skew,s)}else{typeof console!==\"undefined\"&&console.warn(\"No character metrics for '\"+e+\"' in style '\"+t+\"'\");c=new h.symbolNode(e,0,0,0,0,s)}if(l){c.style.color=l}return c};var n=function(e,t,i,h){if(e===\"\\\\\"||r[t][e].font===\"main\"){return c(e,\"Main-Regular\",t,i,h)}else{return c(e,\"AMS-Regular\",t,i,h.concat([\"amsrm\"]))}};var o=function(e,t,i,h,a){if(a===\"mathord\"){return g(e,t,i,h)}else if(a===\"textord\"){return c(e,\"Main-Regular\",t,i,h.concat([\"mathrm\"]))}else{throw new Error(\"unexpected type: \"+a+\" in mathDefault\")}};var g=function(e,t,i,h){if(/[0-9]/.test(e.charAt(0))||l.contains(p,e)||l.contains(s,e)){return c(e,\"Main-Italic\",t,i,h.concat([\"mainit\"]))}else{return c(e,\"Math-Italic\",t,i,h.concat([\"mathit\"]))}};var d=function(e,t,i){var h=e.mode;var s=e.value;if(r[h][s]&&r[h][s].replace){s=r[h][s].replace}var n=[\"mord\"];var d=t.getColor();var w=t.font;if(w){if(w===\"mathit\"||l.contains(p,s)){return g(s,h,d,n)}else{var u=x[w].fontName;if(a.getCharacterMetrics(s,u)){return c(s,u,h,d,n.concat([w]))}else{return o(s,h,d,n,i)}}}else{return o(s,h,d,n,i)}};var w=function(e){var t=0;var i=0;var h=0;if(e.children){for(var a=0;a<e.children.length;a++){if(e.children[a].height>t){t=e.children[a].height}if(e.children[a].depth>i){i=e.children[a].depth}if(e.children[a].maxFontSize>h){h=e.children[a].maxFontSize}}}e.height=t;e.depth=i;e.maxFontSize=h};var u=function(e,t,i){var a=new h.span(e,t);w(a);if(i){a.style.color=i}return a};var k=function(e){var t=new h.documentFragment(e);w(t);return t};var m=function(e,t){var i=u([],[new h.symbolNode(\"\\u200b\")]);i.style.fontSize=t/e.style.sizeMultiplier+\"em\";var a=u([\"fontsize-ensurer\",\"reset-\"+e.size,\"size5\"],[i]);return a};var f=function(e,t,i,a){var r;var l;var s;if(t===\"individualShift\"){var p=e;e=[p[0]];r=-p[0].shift-p[0].elem.depth;l=r;for(s=1;s<p.length;s++){var c=-p[s].shift-l-p[s].elem.depth;var n=c-(p[s-1].elem.height+p[s-1].elem.depth);l=l+c;e.push({type:\"kern\",size:n});e.push(p[s])}}else if(t===\"top\"){var o=i;for(s=0;s<e.length;s++){if(e[s].type===\"kern\"){o-=e[s].size}else{o-=e[s].elem.height+e[s].elem.depth}}r=o}else if(t===\"bottom\"){r=-i}else if(t===\"shift\"){r=-e[0].elem.depth-i}else if(t===\"firstBaseline\"){r=-e[0].elem.depth}else{r=0}var g=0;for(s=0;s<e.length;s++){if(e[s].type===\"elem\"){g=Math.max(g,e[s].elem.maxFontSize)}}var d=m(a,g);var w=[];l=r;for(s=0;s<e.length;s++){if(e[s].type===\"kern\"){l+=e[s].size}else{var k=e[s].elem;var f=-k.depth-l;l+=k.height+k.depth;var v=u([],[d,k]);v.height-=f;v.depth+=f;v.style.top=f+\"em\";w.push(v)}}var y=u([\"baseline-fix\"],[d,new h.symbolNode(\"\\u200b\")]);w.push(y);var x=u([\"vlist\"],w);x.height=Math.max(l,x.height);x.depth=Math.max(-r,x.depth);return x};var v={size1:.5,size2:.7,size3:.8,size4:.9,size5:1,size6:1.2,size7:1.44,size8:1.73,size9:2.07,size10:2.49};var y={\"\\\\qquad\":{size:\"2em\",className:\"qquad\"},\"\\\\quad\":{size:\"1em\",className:\"quad\"},\"\\\\enspace\":{size:\"0.5em\",className:\"enspace\"},\"\\\\;\":{size:\"0.277778em\",className:\"thickspace\"},\"\\\\:\":{size:\"0.22222em\",className:\"mediumspace\"},\"\\\\,\":{size:\"0.16667em\",className:\"thinspace\"},\"\\\\!\":{size:\"-0.16667em\",className:\"negativethinspace\"}};var x={mathbf:{variant:\"bold\",fontName:\"Main-Bold\"},mathrm:{variant:\"normal\",fontName:\"Main-Regular\"},mathbb:{variant:\"double-struck\",fontName:\"AMS-Regular\"},mathcal:{variant:\"script\",fontName:\"Caligraphic-Regular\"},mathfrak:{variant:\"fraktur\",fontName:\"Fraktur-Regular\"},mathscr:{variant:\"script\",fontName:\"Script-Regular\"},mathsf:{variant:\"sans-serif\",fontName:\"SansSerif-Regular\"},mathtt:{variant:\"monospace\",fontName:\"Typewriter-Regular\"}};t.exports={fontMap:x,makeSymbol:c,mathsym:n,makeSpan:u,makeFragment:k,makeVList:f,makeOrd:d,sizingMultiplier:v,spacingFunctions:y}},{\"./domTree\":14,\"./fontMetrics\":16,\"./symbols\":22,\"./utils\":23}],10:[function(e,t,i){var h=e(\"./ParseError\");var a=e(\"./Style\");var r=e(\"./buildCommon\");var l=e(\"./delimiter\");var s=e(\"./domTree\");var p=e(\"./fontMetrics\");var c=e(\"./utils\");var n=r.makeSpan;var o=function(e,t,i){var h=[];for(var a=0;a<e.length;a++){var r=e[a];h.push(v(r,t,i));i=r}return h};var g={mathord:\"mord\",textord:\"mord\",bin:\"mbin\",rel:\"mrel\",text:\"mord\",open:\"mopen\",close:\"mclose\",inner:\"minner\",genfrac:\"mord\",array:\"mord\",spacing:\"mord\",punct:\"mpunct\",ordgroup:\"mord\",op:\"mop\",katex:\"mord\",overline:\"mord\",rule:\"mord\",leftright:\"minner\",sqrt:\"mord\",accent:\"mord\"};var d=function(e){if(e==null){return g.mathord}else if(e.type===\"supsub\"){return d(e.value.base)}else if(e.type===\"llap\"||e.type===\"rlap\"){return d(e.value)}else if(e.type===\"color\"){return d(e.value.value)}else if(e.type===\"sizing\"){return d(e.value.value)}else if(e.type===\"styling\"){return d(e.value.value)}else if(e.type===\"delimsizing\"){return g[e.value.delimType]}else{return g[e.type]}};var w=function(e,t){if(!e){return false}else if(e.type===\"op\"){return e.value.limits&&(t.style.size===a.DISPLAY.size||e.value.alwaysHandleSupSub)}else if(e.type===\"accent\"){return k(e.value.base)}else{return null}};var u=function(e){if(!e){return false}else if(e.type===\"ordgroup\"){if(e.value.length===1){return u(e.value[0])}else{return e}}else if(e.type===\"color\"){if(e.value.value.length===1){return u(e.value.value[0])}else{return e}}else{return e}};var k=function(e){var t=u(e);return t.type===\"mathord\"||t.type===\"textord\"||t.type===\"bin\"||t.type===\"rel\"||t.type===\"inner\"||t.type===\"open\"||t.type===\"close\"||t.type===\"punct\"};var m=function(e){return n([\"sizing\",\"reset-\"+e.size,\"size5\",e.style.reset(),a.TEXT.cls(),\"nulldelimiter\"])};var f={mathord:function(e,t,i){return r.makeOrd(e,t,\"mathord\")},textord:function(e,t,i){return r.makeOrd(e,t,\"textord\")},bin:function(e,t,i){var h=\"mbin\";var a=i;while(a&&a.type===\"color\"){var l=a.value.value;a=l[l.length-1]}if(!i||c.contains([\"mbin\",\"mopen\",\"mrel\",\"mop\",\"mpunct\"],d(a))){e.type=\"textord\";h=\"mord\"}return r.mathsym(e.value,e.mode,t.getColor(),[h])},rel:function(e,t,i){return r.mathsym(e.value,e.mode,t.getColor(),[\"mrel\"])},open:function(e,t,i){return r.mathsym(e.value,e.mode,t.getColor(),[\"mopen\"])},close:function(e,t,i){return r.mathsym(e.value,e.mode,t.getColor(),[\"mclose\"])},inner:function(e,t,i){return r.mathsym(e.value,e.mode,t.getColor(),[\"minner\"])},punct:function(e,t,i){return r.mathsym(e.value,e.mode,t.getColor(),[\"mpunct\"])},ordgroup:function(e,t,i){return n([\"mord\",t.style.cls()],o(e.value,t.reset()))},text:function(e,t,i){return n([\"text\",\"mord\",t.style.cls()],o(e.value.body,t.reset()))},color:function(e,t,i){var h=o(e.value.value,t.withColor(e.value.color),i);return new r.makeFragment(h)},supsub:function(e,t,i){if(w(e.value.base,t)){return f[e.value.base.type](e,t,i)}var h=v(e.value.base,t.reset());var l,c,o,g;if(e.value.sup){o=v(e.value.sup,t.withStyle(t.style.sup()));l=n([t.style.reset(),t.style.sup().cls()],[o])}if(e.value.sub){g=v(e.value.sub,t.withStyle(t.style.sub()));c=n([t.style.reset(),t.style.sub().cls()],[g])}var u,m;if(k(e.value.base)){u=0;m=0}else{u=h.height-p.metrics.supDrop;m=h.depth+p.metrics.subDrop}var y;if(t.style===a.DISPLAY){y=p.metrics.sup1}else if(t.style.cramped){y=p.metrics.sup3}else{y=p.metrics.sup2}var x=a.TEXT.sizeMultiplier*t.style.sizeMultiplier;var b=.5/p.metrics.ptPerEm/x+\"em\";var z;if(!e.value.sup){m=Math.max(m,p.metrics.sub1,g.height-.8*p.metrics.xHeight);z=r.makeVList([{type:\"elem\",elem:c}],\"shift\",m,t);z.children[0].style.marginRight=b;if(h instanceof s.symbolNode){z.children[0].style.marginLeft=-h.italic+\"em\"}}else if(!e.value.sub){u=Math.max(u,y,o.depth+.25*p.metrics.xHeight);z=r.makeVList([{type:\"elem\",elem:l}],\"shift\",-u,t);z.children[0].style.marginRight=b}else{u=Math.max(u,y,o.depth+.25*p.metrics.xHeight);m=Math.max(m,p.metrics.sub2);var S=p.metrics.defaultRuleThickness;if(u-o.depth-(g.height-m)<4*S){m=4*S-(u-o.depth)+g.height;var M=.8*p.metrics.xHeight-(u-o.depth);if(M>0){u+=M;m-=M}}z=r.makeVList([{type:\"elem\",elem:c,shift:m},{type:\"elem\",elem:l,shift:-u}],\"individualShift\",null,t);if(h instanceof s.symbolNode){z.children[0].style.marginLeft=-h.italic+\"em\"}z.children[0].style.marginRight=b;z.children[1].style.marginRight=b}return n([d(e.value.base)],[h,z])},genfrac:function(e,t,i){var h=t.style;if(e.value.size===\"display\"){h=a.DISPLAY}else if(e.value.size===\"text\"){h=a.TEXT}var s=h.fracNum();var c=h.fracDen();var o=v(e.value.numer,t.withStyle(s));var g=n([h.reset(),s.cls()],[o]);var d=v(e.value.denom,t.withStyle(c));var w=n([h.reset(),c.cls()],[d]);var u;if(e.value.hasBarLine){u=p.metrics.defaultRuleThickness/t.style.sizeMultiplier}else{u=0}var k;var f;var y;if(h.size===a.DISPLAY.size){k=p.metrics.num1;if(u>0){f=3*u}else{f=7*p.metrics.defaultRuleThickness}y=p.metrics.denom1}else{if(u>0){k=p.metrics.num2;f=u}else{k=p.metrics.num3;f=3*p.metrics.defaultRuleThickness}y=p.metrics.denom2}var x;if(u===0){var b=k-o.depth-(d.height-y);if(b<f){k+=.5*(f-b);y+=.5*(f-b)}x=r.makeVList([{type:\"elem\",elem:w,shift:y},{type:\"elem\",elem:g,shift:-k}],\"individualShift\",null,t)}else{var z=p.metrics.axisHeight;if(k-o.depth-(z+.5*u)<f){k+=f-(k-o.depth-(z+.5*u))}if(z-.5*u-(d.height-y)<f){y+=f-(z-.5*u-(d.height-y))}var S=n([t.style.reset(),a.TEXT.cls(),\"frac-line\"]);S.height=u;var M=-(z-.5*u);x=r.makeVList([{type:\"elem\",elem:w,shift:y},{type:\"elem\",elem:S,shift:M},{type:\"elem\",elem:g,shift:-k}],\"individualShift\",null,t)}x.height*=h.sizeMultiplier/t.style.sizeMultiplier;x.depth*=h.sizeMultiplier/t.style.sizeMultiplier;var q;if(h.size===a.DISPLAY.size){q=p.metrics.delim1}else{q=p.metrics.getDelim2(h)}var A,T;if(e.value.leftDelim==null){A=m(t)}else{A=l.customSizedDelim(e.value.leftDelim,q,true,t.withStyle(h),e.mode)}if(e.value.rightDelim==null){T=m(t)}else{T=l.customSizedDelim(e.value.rightDelim,q,true,t.withStyle(h),e.mode)}return n([\"mord\",t.style.reset(),h.cls()],[A,n([\"mfrac\"],[x]),T],t.getColor())},array:function(e,t,i){var a,l;var s=e.value.body.length;var o=0;var g=new Array(s);var d=1/p.metrics.ptPerEm;var w=5*d;var u=12*d;var k=c.deflt(e.value.arraystretch,1);var m=k*u;var f=.7*m;var y=.3*m;var x=0;for(a=0;a<e.value.body.length;++a){var b=e.value.body[a];var z=f;var S=y;if(o<b.length){o=b.length}var M=new Array(b.length);for(l=0;l<b.length;++l){var q=v(b[l],t);if(S<q.depth){S=q.depth}if(z<q.height){z=q.height}M[l]=q}var A=0;if(e.value.rowGaps[a]){A=e.value.rowGaps[a].value;switch(A.unit){case\"em\":A=A.number;break;case\"ex\":A=A.number*p.metrics.emPerEx;break;default:console.error(\"Can't handle unit \"+A.unit);A=0}if(A>0){A+=y;if(S<A){S=A}A=0}}M.height=z;M.depth=S;x+=z;M.pos=x;x+=S+A;g[a]=M}var T=x/2+p.metrics.axisHeight;var N=e.value.cols||[];var C=[];var R;var E;for(l=0,E=0;l<o||E<N.length;++l,++E){var P=N[E]||{};var D=true;while(P.type===\"separator\"){if(!D){R=n([\"arraycolsep\"],[]);R.style.width=p.metrics.doubleRuleSep+\"em\";C.push(R)}if(P.separator===\"|\"){var L=n([\"vertical-separator\"],[]);L.style.height=x+\"em\";L.style.verticalAlign=-(x-T)+\"em\";C.push(L)}else{throw new h(\"Invalid separator type: \"+P.separator)}E++;P=N[E]||{};D=false}if(l>=o){continue}var O;if(l>0||e.value.hskipBeforeAndAfter){O=c.deflt(P.pregap,w);if(O!==0){R=n([\"arraycolsep\"],[]);R.style.width=O+\"em\";C.push(R)}}var I=[];for(a=0;a<s;++a){var B=g[a];var F=B[l];if(!F){continue}var _=B.pos-T;F.depth=B.depth;F.height=B.height;I.push({type:\"elem\",elem:F,shift:_})}I=r.makeVList(I,\"individualShift\",null,t);I=n([\"col-align-\"+(P.align||\"c\")],[I]);C.push(I);if(l<o-1||e.value.hskipBeforeAndAfter){O=c.deflt(P.postgap,w);if(O!==0){R=n([\"arraycolsep\"],[]);R.style.width=O+\"em\";C.push(R)}}}g=n([\"mtable\"],C);return n([\"mord\"],[g],t.getColor())},spacing:function(e,t,i){if(e.value===\"\\\\ \"||e.value===\"\\\\space\"||e.value===\" \"||e.value===\"~\"){return n([\"mord\",\"mspace\"],[r.mathsym(e.value,e.mode)])}else{return n([\"mord\",\"mspace\",r.spacingFunctions[e.value].className])}},llap:function(e,t,i){var h=n([\"inner\"],[v(e.value.body,t.reset())]);var a=n([\"fix\"],[]);return n([\"llap\",t.style.cls()],[h,a])},rlap:function(e,t,i){var h=n([\"inner\"],[v(e.value.body,t.reset())]);var a=n([\"fix\"],[]);return n([\"rlap\",t.style.cls()],[h,a])},op:function(e,t,i){var h;var l;var s=false;if(e.type===\"supsub\"){h=e.value.sup;l=e.value.sub;e=e.value.base;s=true}var o=[\"\\\\smallint\"];var g=false;if(t.style.size===a.DISPLAY.size&&e.value.symbol&&!c.contains(o,e.value.body)){g=true}var d;var w=0;var u=0;if(e.value.symbol){var k=g?\"Size2-Regular\":\"Size1-Regular\";d=r.makeSymbol(e.value.body,k,\"math\",t.getColor(),[\"op-symbol\",g?\"large-op\":\"small-op\",\"mop\"]);w=(d.height-d.depth)/2-p.metrics.axisHeight*t.style.sizeMultiplier;u=d.italic}else{var m=[];for(var f=1;f<e.value.body.length;f++){m.push(r.mathsym(e.value.body[f],e.mode))}d=n([\"mop\"],m,t.getColor())}if(s){d=n([],[d]);var y,x,b,z;if(h){var S=v(h,t.withStyle(t.style.sup()));y=n([t.style.reset(),t.style.sup().cls()],[S]);x=Math.max(p.metrics.bigOpSpacing1,p.metrics.bigOpSpacing3-S.depth)}if(l){var M=v(l,t.withStyle(t.style.sub()));b=n([t.style.reset(),t.style.sub().cls()],[M]);z=Math.max(p.metrics.bigOpSpacing2,p.metrics.bigOpSpacing4-M.height)}var q,A,T;if(!h){A=d.height-w;q=r.makeVList([{type:\"kern\",size:p.metrics.bigOpSpacing5},{type:\"elem\",elem:b},{type:\"kern\",size:z},{type:\"elem\",elem:d}],\"top\",A,t);q.children[0].style.marginLeft=-u+\"em\"}else if(!l){T=d.depth+w;q=r.makeVList([{type:\"elem\",elem:d},{type:\"kern\",size:x},{type:\"elem\",elem:y},{type:\"kern\",size:p.metrics.bigOpSpacing5}],\"bottom\",T,t);q.children[1].style.marginLeft=u+\"em\"}else if(!h&&!l){return d}else{T=p.metrics.bigOpSpacing5+b.height+b.depth+z+d.depth+w;q=r.makeVList([{type:\"kern\",size:p.metrics.bigOpSpacing5},{type:\"elem\",elem:b},{type:\"kern\",size:z},{type:\"elem\",elem:d},{type:\"kern\",size:x},{type:\"elem\",elem:y},{type:\"kern\",size:p.metrics.bigOpSpacing5}],\"bottom\",T,t);q.children[0].style.marginLeft=-u+\"em\";q.children[2].style.marginLeft=u+\"em\"}return n([\"mop\",\"op-limits\"],[q])}else{if(e.value.symbol){d.style.top=w+\"em\"}return d}},katex:function(e,t,i){var h=n([\"k\"],[r.mathsym(\"K\",e.mode)]);var a=n([\"a\"],[r.mathsym(\"A\",e.mode)]);a.height=(a.height+.2)*.75;a.depth=(a.height-.2)*.75;var l=n([\"t\"],[r.mathsym(\"T\",e.mode)]);var s=n([\"e\"],[r.mathsym(\"E\",e.mode)]);s.height=s.height-.2155;s.depth=s.depth+.2155;var p=n([\"x\"],[r.mathsym(\"X\",e.mode)]);return n([\"katex-logo\",\"mord\"],[h,a,l,s,p],t.getColor())},overline:function(e,t,i){var h=v(e.value.body,t.withStyle(t.style.cramp()));var l=p.metrics.defaultRuleThickness/t.style.sizeMultiplier;var s=n([t.style.reset(),a.TEXT.cls(),\"overline-line\"]);s.height=l;s.maxFontSize=1;var c=r.makeVList([{type:\"elem\",elem:h},{type:\"kern\",size:3*l},{type:\"elem\",elem:s},{type:\"kern\",size:l}],\"firstBaseline\",null,t);return n([\"overline\",\"mord\"],[c],t.getColor())},sqrt:function(e,t,i){var h=v(e.value.body,t.withStyle(t.style.cramp()));var s=p.metrics.defaultRuleThickness/t.style.sizeMultiplier;var c=n([t.style.reset(),a.TEXT.cls(),\"sqrt-line\"],[],t.getColor());c.height=s;c.maxFontSize=1;var o=s;if(t.style.id<a.TEXT.id){o=p.metrics.xHeight}var g=s+o/4;var d=(h.height+h.depth)*t.style.sizeMultiplier;var w=d+g+s;var u=n([\"sqrt-sign\"],[l.customSizedDelim(\"\\\\surd\",w,false,t,e.mode)],t.getColor());var k=u.height+u.depth-s;if(k>h.height+h.depth+g){g=(g+k-h.height-h.depth)/2}var m=-(h.height+g+s)+u.height;u.style.top=m+\"em\";u.height-=m;u.depth+=m;var f;if(h.height===0&&h.depth===0){f=n()}else{f=r.makeVList([{type:\"elem\",elem:h},{type:\"kern\",size:g},{type:\"elem\",elem:c},{type:\"kern\",size:s}],\"firstBaseline\",null,t)}if(!e.value.index){return n([\"sqrt\",\"mord\"],[u,f])}else{var y=v(e.value.index,t.withStyle(a.SCRIPTSCRIPT));var x=n([t.style.reset(),a.SCRIPTSCRIPT.cls()],[y]);var b=Math.max(u.height,f.height);var z=Math.max(u.depth,f.depth);var S=.6*(b-z);var M=r.makeVList([{type:\"elem\",elem:x}],\"shift\",-S,t);var q=n([\"root\"],[M]);return n([\"sqrt\",\"mord\"],[q,u,f])}},sizing:function(e,t,i){var h=o(e.value.value,t.withSize(e.value.size),i);var a=n([\"mord\"],[n([\"sizing\",\"reset-\"+t.size,e.value.size,t.style.cls()],h)]);var l=r.sizingMultiplier[e.value.size];a.maxFontSize=l*t.style.sizeMultiplier;\nreturn a},styling:function(e,t,i){var h={display:a.DISPLAY,text:a.TEXT,script:a.SCRIPT,scriptscript:a.SCRIPTSCRIPT};var r=h[e.value.style];var l=o(e.value.value,t.withStyle(r),i);return n([t.style.reset(),r.cls()],l)},font:function(e,t,i){var h=e.value.font;return v(e.value.body,t.withFont(h),i)},delimsizing:function(e,t,i){var h=e.value.value;if(h===\".\"){return n([g[e.value.delimType]])}return n([g[e.value.delimType]],[l.sizedDelim(h,e.value.size,t,e.mode)])},leftright:function(e,t,i){var h=o(e.value.body,t.reset());var a=0;var r=0;for(var s=0;s<h.length;s++){a=Math.max(h[s].height,a);r=Math.max(h[s].depth,r)}a*=t.style.sizeMultiplier;r*=t.style.sizeMultiplier;var p;if(e.value.left===\".\"){p=m(t)}else{p=l.leftRightDelim(e.value.left,a,r,t,e.mode)}h.unshift(p);var c;if(e.value.right===\".\"){c=m(t)}else{c=l.leftRightDelim(e.value.right,a,r,t,e.mode)}h.push(c);return n([\"minner\",t.style.cls()],h,t.getColor())},rule:function(e,t,i){var h=n([\"mord\",\"rule\"],[],t.getColor());var a=0;if(e.value.shift){a=e.value.shift.number;if(e.value.shift.unit===\"ex\"){a*=p.metrics.xHeight}}var r=e.value.width.number;if(e.value.width.unit===\"ex\"){r*=p.metrics.xHeight}var l=e.value.height.number;if(e.value.height.unit===\"ex\"){l*=p.metrics.xHeight}a/=t.style.sizeMultiplier;r/=t.style.sizeMultiplier;l/=t.style.sizeMultiplier;h.style.borderRightWidth=r+\"em\";h.style.borderTopWidth=l+\"em\";h.style.bottom=a+\"em\";h.width=r;h.height=l+a;h.depth=-a;return h},accent:function(e,t,i){var h=e.value.base;var a;if(e.type===\"supsub\"){var l=e;e=l.value.base;h=e.value.base;l.value.base=h;a=v(l,t.reset(),i)}var s=v(h,t.withStyle(t.style.cramp()));var c;if(k(h)){var o=u(h);var g=v(o,t.withStyle(t.style.cramp()));c=g.skew}else{c=0}var d=Math.min(s.height,p.metrics.xHeight);var w=r.makeSymbol(e.value.accent,\"Main-Regular\",\"math\",t.getColor());w.italic=0;var m=e.value.accent===\"\\\\vec\"?\"accent-vec\":null;var f=n([\"accent-body\",m],[n([],[w])]);f=r.makeVList([{type:\"elem\",elem:s},{type:\"kern\",size:-d},{type:\"elem\",elem:f}],\"firstBaseline\",null,t);f.children[1].style.marginLeft=2*c+\"em\";var y=n([\"mord\",\"accent\"],[f]);if(a){a.children[0]=y;a.height=Math.max(y.height,a.height);a.classes[0]=\"mord\";return a}else{return y}},phantom:function(e,t,i){var h=o(e.value.value,t.withPhantom(),i);return new r.makeFragment(h)}};var v=function(e,t,i){if(!e){return n()}if(f[e.type]){var a=f[e.type](e,t,i);var l;if(t.style!==t.parentStyle){l=t.style.sizeMultiplier/t.parentStyle.sizeMultiplier;a.height*=l;a.depth*=l}if(t.size!==t.parentSize){l=r.sizingMultiplier[t.size]/r.sizingMultiplier[t.parentSize];a.height*=l;a.depth*=l}return a}else{throw new h(\"Got group of unknown type: '\"+e.type+\"'\")}};var y=function(e,t){e=JSON.parse(JSON.stringify(e));var i=o(e,t);var h=n([\"base\",t.style.cls()],i);var a=n([\"strut\"]);var r=n([\"strut\",\"bottom\"]);a.style.height=h.height+\"em\";r.style.height=h.height+h.depth+\"em\";r.style.verticalAlign=-h.depth+\"em\";var l=n([\"katex-html\"],[a,r,h]);l.setAttribute(\"aria-hidden\",\"true\");return l};t.exports=y},{\"./ParseError\":5,\"./Style\":8,\"./buildCommon\":9,\"./delimiter\":13,\"./domTree\":14,\"./fontMetrics\":16,\"./utils\":23}],11:[function(e,t,i){var h=e(\"./buildCommon\");var a=e(\"./fontMetrics\");var r=e(\"./mathMLTree\");var l=e(\"./ParseError\");var s=e(\"./symbols\");var p=e(\"./utils\");var c=h.makeSpan;var n=h.fontMap;var o=function(e,t){if(s[t][e]&&s[t][e].replace){e=s[t][e].replace}return new r.TextNode(e)};var g=function(e,t){var i=t.font;if(!i){return null}var h=e.mode;if(i===\"mathit\"){return\"italic\"}var r=e.value;if(p.contains([\"\\\\imath\",\"\\\\jmath\"],r)){return null}if(s[h][r]&&s[h][r].replace){r=s[h][r].replace}var l=n[i].fontName;if(a.getCharacterMetrics(r,l)){return n[t.font].variant}return null};var d={mathord:function(e,t){var i=new r.MathNode(\"mi\",[o(e.value,e.mode)]);var h=g(e,t);if(h){i.setAttribute(\"mathvariant\",h)}return i},textord:function(e,t){var i=o(e.value,e.mode);var h=g(e,t)||\"normal\";var a;if(/[0-9]/.test(e.value)){a=new r.MathNode(\"mn\",[i]);if(t.font){a.setAttribute(\"mathvariant\",h)}}else{a=new r.MathNode(\"mi\",[i]);a.setAttribute(\"mathvariant\",h)}return a},bin:function(e){var t=new r.MathNode(\"mo\",[o(e.value,e.mode)]);return t},rel:function(e){var t=new r.MathNode(\"mo\",[o(e.value,e.mode)]);return t},open:function(e){var t=new r.MathNode(\"mo\",[o(e.value,e.mode)]);return t},close:function(e){var t=new r.MathNode(\"mo\",[o(e.value,e.mode)]);return t},inner:function(e){var t=new r.MathNode(\"mo\",[o(e.value,e.mode)]);return t},punct:function(e){var t=new r.MathNode(\"mo\",[o(e.value,e.mode)]);t.setAttribute(\"separator\",\"true\");return t},ordgroup:function(e,t){var i=w(e.value,t);var h=new r.MathNode(\"mrow\",i);return h},text:function(e,t){var i=w(e.value.body,t);var h=new r.MathNode(\"mtext\",i);return h},color:function(e,t){var i=w(e.value.value,t);var h=new r.MathNode(\"mstyle\",i);h.setAttribute(\"mathcolor\",e.value.color);return h},supsub:function(e,t){var i=[u(e.value.base,t)];if(e.value.sub){i.push(u(e.value.sub,t))}if(e.value.sup){i.push(u(e.value.sup,t))}var h;if(!e.value.sub){h=\"msup\"}else if(!e.value.sup){h=\"msub\"}else{h=\"msubsup\"}var a=new r.MathNode(h,i);return a},genfrac:function(e,t){var i=new r.MathNode(\"mfrac\",[u(e.value.numer,t),u(e.value.denom,t)]);if(!e.value.hasBarLine){i.setAttribute(\"linethickness\",\"0px\")}if(e.value.leftDelim!=null||e.value.rightDelim!=null){var h=[];if(e.value.leftDelim!=null){var a=new r.MathNode(\"mo\",[new r.TextNode(e.value.leftDelim)]);a.setAttribute(\"fence\",\"true\");h.push(a)}h.push(i);if(e.value.rightDelim!=null){var l=new r.MathNode(\"mo\",[new r.TextNode(e.value.rightDelim)]);l.setAttribute(\"fence\",\"true\");h.push(l)}var s=new r.MathNode(\"mrow\",h);return s}return i},array:function(e,t){return new r.MathNode(\"mtable\",e.value.body.map(function(e){return new r.MathNode(\"mtr\",e.map(function(e){return new r.MathNode(\"mtd\",[u(e,t)])}))}))},sqrt:function(e,t){var i;if(e.value.index){i=new r.MathNode(\"mroot\",[u(e.value.body,t),u(e.value.index,t)])}else{i=new r.MathNode(\"msqrt\",[u(e.value.body,t)])}return i},leftright:function(e,t){var i=w(e.value.body,t);if(e.value.left!==\".\"){var h=new r.MathNode(\"mo\",[o(e.value.left,e.mode)]);h.setAttribute(\"fence\",\"true\");i.unshift(h)}if(e.value.right!==\".\"){var a=new r.MathNode(\"mo\",[o(e.value.right,e.mode)]);a.setAttribute(\"fence\",\"true\");i.push(a)}var l=new r.MathNode(\"mrow\",i);return l},accent:function(e,t){var i=new r.MathNode(\"mo\",[o(e.value.accent,e.mode)]);var h=new r.MathNode(\"mover\",[u(e.value.base,t),i]);h.setAttribute(\"accent\",\"true\");return h},spacing:function(e){var t;if(e.value===\"\\\\ \"||e.value===\"\\\\space\"||e.value===\" \"||e.value===\"~\"){t=new r.MathNode(\"mtext\",[new r.TextNode(\"\\xa0\")])}else{t=new r.MathNode(\"mspace\");t.setAttribute(\"width\",h.spacingFunctions[e.value].size)}return t},op:function(e){var t;if(e.value.symbol){t=new r.MathNode(\"mo\",[o(e.value.body,e.mode)])}else{t=new r.MathNode(\"mi\",[new r.TextNode(e.value.body.slice(1))])}return t},katex:function(e){var t=new r.MathNode(\"mtext\",[new r.TextNode(\"KaTeX\")]);return t},font:function(e,t){var i=e.value.font;return u(e.value.body,t.withFont(i))},delimsizing:function(e){var t=[];if(e.value.value!==\".\"){t.push(o(e.value.value,e.mode))}var i=new r.MathNode(\"mo\",t);if(e.value.delimType===\"open\"||e.value.delimType===\"close\"){i.setAttribute(\"fence\",\"true\")}else{i.setAttribute(\"fence\",\"false\")}return i},styling:function(e,t){var i=w(e.value.value,t);var h=new r.MathNode(\"mstyle\",i);var a={display:[\"0\",\"true\"],text:[\"0\",\"false\"],script:[\"1\",\"false\"],scriptscript:[\"2\",\"false\"]};var l=a[e.value.style];h.setAttribute(\"scriptlevel\",l[0]);h.setAttribute(\"displaystyle\",l[1]);return h},sizing:function(e,t){var i=w(e.value.value,t);var a=new r.MathNode(\"mstyle\",i);a.setAttribute(\"mathsize\",h.sizingMultiplier[e.value.size]+\"em\");return a},overline:function(e,t){var i=new r.MathNode(\"mo\",[new r.TextNode(\"\\u203e\")]);i.setAttribute(\"stretchy\",\"true\");var h=new r.MathNode(\"mover\",[u(e.value.body,t),i]);h.setAttribute(\"accent\",\"true\");return h},rule:function(e){var t=new r.MathNode(\"mrow\");return t},llap:function(e,t){var i=new r.MathNode(\"mpadded\",[u(e.value.body,t)]);i.setAttribute(\"lspace\",\"-1width\");i.setAttribute(\"width\",\"0px\");return i},rlap:function(e,t){var i=new r.MathNode(\"mpadded\",[u(e.value.body,t)]);i.setAttribute(\"width\",\"0px\");return i},phantom:function(e,t,i){var h=w(e.value.value,t);return new r.MathNode(\"mphantom\",h)}};var w=function(e,t){var i=[];for(var h=0;h<e.length;h++){var a=e[h];i.push(u(a,t))}return i};var u=function(e,t){if(!e){return new r.MathNode(\"mrow\")}if(d[e.type]){return d[e.type](e,t)}else{throw new l(\"Got group of unknown type: '\"+e.type+\"'\")}};var k=function(e,t,i){var h=w(e,i);var a=new r.MathNode(\"mrow\",h);var l=new r.MathNode(\"annotation\",[new r.TextNode(t)]);l.setAttribute(\"encoding\",\"application/x-tex\");var s=new r.MathNode(\"semantics\",[a,l]);var p=new r.MathNode(\"math\",[s]);return c([\"katex-mathml\"],[p])};t.exports=k},{\"./ParseError\":5,\"./buildCommon\":9,\"./fontMetrics\":16,\"./mathMLTree\":19,\"./symbols\":22,\"./utils\":23}],12:[function(e,t,i){var h=e(\"./buildHTML\");var a=e(\"./buildMathML\");var r=e(\"./buildCommon\");var l=e(\"./Options\");var s=e(\"./Settings\");var p=e(\"./Style\");var c=r.makeSpan;var n=function(e,t,i){i=i||new s({});var r=p.TEXT;if(i.displayMode){r=p.DISPLAY}var n=new l({style:r,size:\"size5\"});var o=a(e,t,n);var g=h(e,n);var d=c([\"katex\"],[o,g]);if(i.displayMode){return c([\"katex-display\"],[d])}else{return d}};t.exports=n},{\"./Options\":4,\"./Settings\":7,\"./Style\":8,\"./buildCommon\":9,\"./buildHTML\":10,\"./buildMathML\":11}],13:[function(e,t,i){var h=e(\"./ParseError\");var a=e(\"./Style\");var r=e(\"./buildCommon\");var l=e(\"./fontMetrics\");var s=e(\"./symbols\");var p=e(\"./utils\");var c=r.makeSpan;var n=function(e,t){if(s.math[e]&&s.math[e].replace){return l.getCharacterMetrics(s.math[e].replace,t)}else{return l.getCharacterMetrics(e,t)}};var o=function(e,t,i){return r.makeSymbol(e,\"Size\"+t+\"-Regular\",i)};var g=function(e,t,i){var h=c([\"style-wrap\",i.style.reset(),t.cls()],[e]);var a=t.sizeMultiplier/i.style.sizeMultiplier;h.height*=a;h.depth*=a;h.maxFontSize=t.sizeMultiplier;return h};var d=function(e,t,i,h,a){var s=r.makeSymbol(e,\"Main-Regular\",a);var p=g(s,t,h);if(i){var c=(1-h.style.sizeMultiplier/t.sizeMultiplier)*l.metrics.axisHeight;p.style.top=c+\"em\";p.height-=c;p.depth+=c}return p};var w=function(e,t,i,h,r){var s=o(e,t,r);var p=g(c([\"delimsizing\",\"size\"+t],[s],h.getColor()),a.TEXT,h);if(i){var n=(1-h.style.sizeMultiplier)*l.metrics.axisHeight;p.style.top=n+\"em\";p.height-=n;p.depth+=n}return p};var u=function(e,t,i){var h;if(t===\"Size1-Regular\"){h=\"delim-size1\"}else if(t===\"Size4-Regular\"){h=\"delim-size4\"}var a=c([\"delimsizinginner\",h],[c([],[r.makeSymbol(e,t,i)])]);return{type:\"elem\",elem:a}};var k=function(e,t,i,h,s){var p,o,d,w;p=d=w=e;o=null;var k=\"Size1-Regular\";if(e===\"\\\\uparrow\"){d=w=\"\\u23d0\"}else if(e===\"\\\\Uparrow\"){d=w=\"\\u2016\"}else if(e===\"\\\\downarrow\"){p=d=\"\\u23d0\"}else if(e===\"\\\\Downarrow\"){p=d=\"\\u2016\"}else if(e===\"\\\\updownarrow\"){p=\"\\\\uparrow\";d=\"\\u23d0\";w=\"\\\\downarrow\"}else if(e===\"\\\\Updownarrow\"){p=\"\\\\Uparrow\";d=\"\\u2016\";w=\"\\\\Downarrow\"}else if(e===\"[\"||e===\"\\\\lbrack\"){p=\"\\u23a1\";d=\"\\u23a2\";w=\"\\u23a3\";k=\"Size4-Regular\"}else if(e===\"]\"||e===\"\\\\rbrack\"){p=\"\\u23a4\";d=\"\\u23a5\";w=\"\\u23a6\";k=\"Size4-Regular\"}else if(e===\"\\\\lfloor\"){d=p=\"\\u23a2\";w=\"\\u23a3\";k=\"Size4-Regular\"}else if(e===\"\\\\lceil\"){p=\"\\u23a1\";d=w=\"\\u23a2\";k=\"Size4-Regular\"}else if(e===\"\\\\rfloor\"){d=p=\"\\u23a5\";w=\"\\u23a6\";k=\"Size4-Regular\"}else if(e===\"\\\\rceil\"){p=\"\\u23a4\";d=w=\"\\u23a5\";k=\"Size4-Regular\"}else if(e===\"(\"){p=\"\\u239b\";d=\"\\u239c\";w=\"\\u239d\";k=\"Size4-Regular\"}else if(e===\")\"){p=\"\\u239e\";d=\"\\u239f\";w=\"\\u23a0\";k=\"Size4-Regular\"}else if(e===\"\\\\{\"||e===\"\\\\lbrace\"){p=\"\\u23a7\";o=\"\\u23a8\";w=\"\\u23a9\";d=\"\\u23aa\";k=\"Size4-Regular\"}else if(e===\"\\\\}\"||e===\"\\\\rbrace\"){p=\"\\u23ab\";o=\"\\u23ac\";w=\"\\u23ad\";d=\"\\u23aa\";k=\"Size4-Regular\"}else if(e===\"\\\\lgroup\"){p=\"\\u23a7\";w=\"\\u23a9\";d=\"\\u23aa\";k=\"Size4-Regular\"}else if(e===\"\\\\rgroup\"){p=\"\\u23ab\";w=\"\\u23ad\";d=\"\\u23aa\";k=\"Size4-Regular\"}else if(e===\"\\\\lmoustache\"){p=\"\\u23a7\";w=\"\\u23ad\";d=\"\\u23aa\";k=\"Size4-Regular\"}else if(e===\"\\\\rmoustache\"){p=\"\\u23ab\";w=\"\\u23a9\";d=\"\\u23aa\";k=\"Size4-Regular\"}else if(e===\"\\\\surd\"){p=\"\\ue001\";w=\"\\u23b7\";d=\"\\ue000\";k=\"Size4-Regular\"}var m=n(p,k);var f=m.height+m.depth;var v=n(d,k);var y=v.height+v.depth;var x=n(w,k);var b=x.height+x.depth;var z=0;var S=1;if(o!==null){var M=n(o,k);z=M.height+M.depth;S=2}var q=f+b+z;var A=Math.ceil((t-q)/(S*y));var T=q+A*S*y;var N=l.metrics.axisHeight;if(i){N*=h.style.sizeMultiplier}var C=T/2-N;var R=[];R.push(u(w,k,s));var E;if(o===null){for(E=0;E<A;E++){R.push(u(d,k,s))}}else{for(E=0;E<A;E++){R.push(u(d,k,s))}R.push(u(o,k,s));for(E=0;E<A;E++){R.push(u(d,k,s))}}R.push(u(p,k,s));var P=r.makeVList(R,\"bottom\",C,h);return g(c([\"delimsizing\",\"mult\"],[P],h.getColor()),a.TEXT,h)};var m=[\"(\",\")\",\"[\",\"\\\\lbrack\",\"]\",\"\\\\rbrack\",\"\\\\{\",\"\\\\lbrace\",\"\\\\}\",\"\\\\rbrace\",\"\\\\lfloor\",\"\\\\rfloor\",\"\\\\lceil\",\"\\\\rceil\",\"\\\\surd\"];var f=[\"\\\\uparrow\",\"\\\\downarrow\",\"\\\\updownarrow\",\"\\\\Uparrow\",\"\\\\Downarrow\",\"\\\\Updownarrow\",\"|\",\"\\\\|\",\"\\\\vert\",\"\\\\Vert\",\"\\\\lvert\",\"\\\\rvert\",\"\\\\lVert\",\"\\\\rVert\",\"\\\\lgroup\",\"\\\\rgroup\",\"\\\\lmoustache\",\"\\\\rmoustache\"];var v=[\"<\",\">\",\"\\\\langle\",\"\\\\rangle\",\"/\",\"\\\\backslash\"];var y=[0,1.2,1.8,2.4,3];var x=function(e,t,i,a){if(e===\"<\"){e=\"\\\\langle\"}else if(e===\">\"){e=\"\\\\rangle\"}if(p.contains(m,e)||p.contains(v,e)){return w(e,t,false,i,a)}else if(p.contains(f,e)){return k(e,y[t],false,i,a)}else{throw new h(\"Illegal delimiter: '\"+e+\"'\")}};var b=[{type:\"small\",style:a.SCRIPTSCRIPT},{type:\"small\",style:a.SCRIPT},{type:\"small\",style:a.TEXT},{type:\"large\",size:1},{type:\"large\",size:2},{type:\"large\",size:3},{type:\"large\",size:4}];var z=[{type:\"small\",style:a.SCRIPTSCRIPT},{type:\"small\",style:a.SCRIPT},{type:\"small\",style:a.TEXT},{type:\"stack\"}];var S=[{type:\"small\",style:a.SCRIPTSCRIPT},{type:\"small\",style:a.SCRIPT},{type:\"small\",style:a.TEXT},{type:\"large\",size:1},{type:\"large\",size:2},{type:\"large\",size:3},{type:\"large\",size:4},{type:\"stack\"}];var M=function(e){if(e.type===\"small\"){return\"Main-Regular\"}else if(e.type===\"large\"){return\"Size\"+e.size+\"-Regular\"}else if(e.type===\"stack\"){return\"Size4-Regular\"}};var q=function(e,t,i,h){var a=Math.min(2,3-h.style.size);for(var r=a;r<i.length;r++){if(i[r].type===\"stack\"){break}var l=n(e,M(i[r]));var s=l.height+l.depth;if(i[r].type===\"small\"){s*=i[r].style.sizeMultiplier}if(s>t){return i[r]}}return i[i.length-1]};var A=function(e,t,i,h,a){if(e===\"<\"){e=\"\\\\langle\"}else if(e===\">\"){e=\"\\\\rangle\"}var r;if(p.contains(v,e)){r=b}else if(p.contains(m,e)){r=S}else{r=z}var l=q(e,t,r,h);if(l.type===\"small\"){return d(e,l.style,i,h,a)}else if(l.type===\"large\"){return w(e,l.size,i,h,a)}else if(l.type===\"stack\"){return k(e,t,i,h,a)}};var T=function(e,t,i,h,a){var r=l.metrics.axisHeight*h.style.sizeMultiplier;var s=901;var p=5/l.metrics.ptPerEm;var c=Math.max(t-r,i+r);var n=Math.max(c/500*s,2*c-p);return A(e,n,true,h,a)};t.exports={sizedDelim:x,customSizedDelim:A,leftRightDelim:T}},{\"./ParseError\":5,\"./Style\":8,\"./buildCommon\":9,\"./fontMetrics\":16,\"./symbols\":22,\"./utils\":23}],14:[function(e,t,i){var h=e(\"./utils\");var a=function(e){e=e.slice();for(var t=e.length-1;t>=0;t--){if(!e[t]){e.splice(t,1)}}return e.join(\" \")};function r(e,t,i,h,a,r){this.classes=e||[];this.children=t||[];this.height=i||0;this.depth=h||0;this.maxFontSize=a||0;this.style=r||{};this.attributes={}}r.prototype.setAttribute=function(e,t){this.attributes[e]=t};r.prototype.toNode=function(){var e=document.createElement(\"span\");e.className=a(this.classes);for(var t in this.style){if(Object.prototype.hasOwnProperty.call(this.style,t)){e.style[t]=this.style[t]}}for(var i in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,i)){e.setAttribute(i,this.attributes[i])}}for(var h=0;h<this.children.length;h++){e.appendChild(this.children[h].toNode())}return e};r.prototype.toMarkup=function(){var e=\"<span\";if(this.classes.length){e+=' class=\"';e+=h.escape(a(this.classes));e+='\"'}var t=\"\";for(var i in this.style){if(this.style.hasOwnProperty(i)){t+=h.hyphenate(i)+\":\"+this.style[i]+\";\"}}if(t){e+=' style=\"'+h.escape(t)+'\"'}for(var r in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,r)){e+=\" \"+r+'=\"';e+=h.escape(this.attributes[r]);e+='\"'}}e+=\">\";for(var l=0;l<this.children.length;l++){e+=this.children[l].toMarkup()}e+=\"</span>\";return e};function l(e,t,i,h){this.children=e||[];this.height=t||0;this.depth=i||0;this.maxFontSize=h||0}l.prototype.toNode=function(){var e=document.createDocumentFragment();for(var t=0;t<this.children.length;t++){e.appendChild(this.children[t].toNode())}return e};l.prototype.toMarkup=function(){var e=\"\";for(var t=0;t<this.children.length;t++){e+=this.children[t].toMarkup()}return e};function s(e,t,i,h,a,r,l){this.value=e||\"\";this.height=t||0;this.depth=i||0;this.italic=h||0;this.skew=a||0;this.classes=r||[];this.style=l||{};this.maxFontSize=0}s.prototype.toNode=function(){var e=document.createTextNode(this.value);var t=null;if(this.italic>0){t=document.createElement(\"span\");t.style.marginRight=this.italic+\"em\"}if(this.classes.length>0){t=t||document.createElement(\"span\");t.className=a(this.classes)}for(var i in this.style){if(this.style.hasOwnProperty(i)){t=t||document.createElement(\"span\");t.style[i]=this.style[i]}}if(t){t.appendChild(e);return t}else{return e}};s.prototype.toMarkup=function(){var e=false;var t=\"<span\";if(this.classes.length){e=true;t+=' class=\"';t+=h.escape(a(this.classes));t+='\"'}var i=\"\";if(this.italic>0){i+=\"margin-right:\"+this.italic+\"em;\"}for(var r in this.style){if(this.style.hasOwnProperty(r)){i+=h.hyphenate(r)+\":\"+this.style[r]+\";\"}}if(i){e=true;t+=' style=\"'+h.escape(i)+'\"'}var l=h.escape(this.value);if(e){t+=\">\";t+=l;t+=\"</span>\";return t}else{return l}};t.exports={span:r,documentFragment:l,symbolNode:s}},{\"./utils\":23}],15:[function(e,t,i){var h=e(\"./fontMetrics\");var a=e(\"./parseData\");var r=e(\"./ParseError\");var l=a.ParseNode;var s=a.ParseResult;function p(e,t,i,h){var a=[],p=[a],c=[];while(true){var n=e.parseExpression(t,i,false,null);a.push(new l(\"ordgroup\",n.result,i));t=n.position;var o=n.peek.text;if(o===\"&\"){t=n.peek.position}else if(o===\"\\\\end\"){break}else if(o===\"\\\\\\\\\"||o===\"\\\\cr\"){var g=e.parseFunction(t,i);c.push(g.result.value.size);t=g.position;a=[];p.push(a)}else{throw new r(\"Expected & or \\\\\\\\ or \\\\end\",e.lexer,n.peek.position)}}h.body=p;h.rowGaps=c;return new s(new l(h.type,h,i),t)}var c=[{names:[\"array\"],numArgs:1,handler:function(e,t,i,h,a){var l=this;h=h.value.map?h.value:[h];var s=h.map(function(e){var t=e.value;if(\"lcr\".indexOf(t)!==-1){return{type:\"align\",align:t}}else if(t===\"|\"){return{type:\"separator\",separator:\"|\"}}throw new r(\"Unknown column alignment: \"+e.value,l.lexer,a[1])});var c={type:\"array\",cols:s,hskipBeforeAndAfter:true};c=p(l,e,t,c);return c}},{names:[\"matrix\",\"pmatrix\",\"bmatrix\",\"Bmatrix\",\"vmatrix\",\"Vmatrix\"],handler:function(e,t,i){var h={matrix:null,pmatrix:[\"(\",\")\"],bmatrix:[\"[\",\"]\"],Bmatrix:[\"\\\\{\",\"\\\\}\"],vmatrix:[\"|\",\"|\"],Vmatrix:[\"\\\\Vert\",\"\\\\Vert\"]}[i];var a={type:\"array\",hskipBeforeAndAfter:false};a=p(this,e,t,a);if(h){a.result=new l(\"leftright\",{body:[a.result],left:h[0],right:h[1]},t)}return a}},{names:[\"cases\"],handler:function(e,t,i){var a={type:\"array\",arraystretch:1.2,cols:[{type:\"align\",align:\"l\",pregap:0,postgap:h.metrics.quad},{type:\"align\",align:\"l\",pregap:0,postgap:0}]};a=p(this,e,t,a);a.result=new l(\"leftright\",{body:[a.result],left:\"\\\\{\",right:\".\"},t);return a}}];t.exports=function(){var e={};for(var t=0;t<c.length;++t){var i=c[t];i.greediness=1;i.allowedInText=!!i.allowedInText;i.numArgs=i.numArgs||0;i.numOptionalArgs=i.numOptionalArgs||0;for(var h=0;h<i.names.length;++h){e[i.names[h]]=i}}return e}()},{\"./ParseError\":5,\"./fontMetrics\":16,\"./parseData\":20}],16:[function(e,t,i){var h=e(\"./Style\");var a=.025;var r=0;var l=0;var s=0;var p=.431;var c=1;var n=0;var o=.677;var g=.394;var d=.444;var w=.686;var u=.345;var k=.413;var m=.363;var f=.289;var v=.15;var y=.247;var x=.386;var b=.05;var z=2.39;var S=1.01;var M=.81;var q=.71;var A=.25;var T=0;var N=0;var C=0;var R=0;var E=.431;var P=1;var D=0;var L=.04;var O=.111;var I=.166;var B=.2;var F=.6;var _=.1;var V=10;var G=2/V;var H={xHeight:p,quad:c,num1:o,num2:g,num3:d,denom1:w,denom2:u,sup1:k,sup2:m,sup3:f,sub1:v,sub2:y,supDrop:x,subDrop:b,axisHeight:A,defaultRuleThickness:L,bigOpSpacing1:O,bigOpSpacing2:I,bigOpSpacing3:B,bigOpSpacing4:F,bigOpSpacing5:_,ptPerEm:V,emPerEx:p/c,doubleRuleSep:G,delim1:z,getDelim2:function(e){if(e.size===h.TEXT.size){return S}else if(e.size===h.SCRIPT.size){return M}else if(e.size===h.SCRIPTSCRIPT.size){return q}throw new Error(\"Unexpected style size: \"+e.size)}};var X=e(\"./fontMetricsData\");var U=function(e,t){return X[t][e.charCodeAt(0)]};t.exports={metrics:H,getCharacterMetrics:U}},{\"./Style\":8,\"./fontMetricsData\":17}],17:[function(e,t,i){t.exports={\"AMS-Regular\":{65:{depth:0,height:.68889,italic:0,skew:0},66:{depth:0,height:.68889,italic:0,skew:0},67:{depth:0,height:.68889,italic:0,skew:0},68:{depth:0,height:.68889,italic:0,skew:0},69:{depth:0,height:.68889,italic:0,skew:0},70:{depth:0,height:.68889,italic:0,skew:0},71:{depth:0,height:.68889,italic:0,skew:0},72:{depth:0,height:.68889,italic:0,skew:0},73:{depth:0,height:.68889,italic:0,skew:0},74:{depth:.16667,height:.68889,italic:0,skew:0},75:{depth:0,height:.68889,italic:0,skew:0},76:{depth:0,height:.68889,italic:0,skew:0},77:{depth:0,height:.68889,italic:0,skew:0},78:{depth:0,height:.68889,italic:0,skew:0},79:{depth:.16667,height:.68889,italic:0,skew:0},80:{depth:0,height:.68889,italic:0,skew:0},81:{depth:.16667,height:.68889,italic:0,skew:0},82:{depth:0,height:.68889,italic:0,skew:0},83:{depth:0,height:.68889,italic:0,skew:0},84:{depth:0,height:.68889,italic:0,skew:0},85:{depth:0,height:.68889,italic:0,skew:0},86:{depth:0,height:.68889,italic:0,skew:0},87:{depth:0,height:.68889,italic:0,skew:0},88:{depth:0,height:.68889,italic:0,skew:0},89:{depth:0,height:.68889,italic:0,skew:0},90:{depth:0,height:.68889,italic:0,skew:0},107:{depth:0,height:.68889,italic:0,skew:0},165:{depth:0,height:.675,italic:.025,skew:0},174:{depth:.15559,height:.69224,italic:0,skew:0},240:{depth:0,height:.68889,italic:0,skew:0},295:{depth:0,height:.68889,italic:0,skew:0},710:{depth:0,height:.825,italic:0,skew:0},732:{depth:0,height:.9,italic:0,skew:0},770:{depth:0,height:.825,italic:0,skew:0},771:{depth:0,height:.9,italic:0,skew:0},989:{depth:.08167,height:.58167,italic:0,skew:0},1008:{depth:0,height:.43056,italic:.04028,skew:0},8245:{depth:0,height:.54986,italic:0,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},8487:{depth:0,height:.68889,italic:0,skew:0},8498:{depth:0,height:.68889,italic:0,skew:0},8502:{depth:0,height:.68889,italic:0,skew:0},8503:{depth:0,height:.68889,italic:0,skew:0},8504:{depth:0,height:.68889,italic:0,skew:0},8513:{depth:0,height:.68889,italic:0,skew:0},8592:{depth:-.03598,height:.46402,italic:0,skew:0},8594:{depth:-.03598,height:.46402,italic:0,skew:0},8602:{depth:-.13313,height:.36687,italic:0,skew:0},8603:{depth:-.13313,height:.36687,italic:0,skew:0},8606:{depth:.01354,height:.52239,italic:0,skew:0},8608:{depth:.01354,height:.52239,italic:0,skew:0},8610:{depth:.01354,height:.52239,italic:0,skew:0},8611:{depth:.01354,height:.52239,italic:0,skew:0},8619:{depth:0,height:.54986,italic:0,skew:0},8620:{depth:0,height:.54986,italic:0,skew:0},8621:{depth:-.13313,height:.37788,italic:0,skew:0},8622:{depth:-.13313,height:.36687,italic:0,skew:0},8624:{depth:0,height:.69224,italic:0,skew:0},8625:{depth:0,height:.69224,italic:0,skew:0},8630:{depth:0,height:.43056,italic:0,skew:0},8631:{depth:0,height:.43056,italic:0,skew:0},8634:{depth:.08198,height:.58198,italic:0,skew:0},8635:{depth:.08198,height:.58198,italic:0,skew:0},8638:{depth:.19444,height:.69224,italic:0,skew:0},8639:{depth:.19444,height:.69224,italic:0,skew:0},8642:{depth:.19444,height:.69224,italic:0,skew:0},8643:{depth:.19444,height:.69224,italic:0,skew:0},8644:{depth:.1808,height:.675,italic:0,skew:0},8646:{depth:.1808,height:.675,italic:0,skew:0},8647:{depth:.1808,height:.675,italic:0,skew:0},8648:{depth:.19444,height:.69224,italic:0,skew:0},8649:{depth:.1808,height:.675,italic:0,skew:0},8650:{depth:.19444,height:.69224,italic:0,skew:0},8651:{depth:.01354,height:.52239,italic:0,skew:0},8652:{depth:.01354,height:.52239,italic:0,skew:0},8653:{depth:-.13313,height:.36687,italic:0,skew:0},8654:{depth:-.13313,height:.36687,italic:0,skew:0},8655:{depth:-.13313,height:.36687,italic:0,skew:0},8666:{depth:.13667,height:.63667,italic:0,skew:0},8667:{depth:.13667,height:.63667,italic:0,skew:0},8669:{depth:-.13313,height:.37788,italic:0,skew:0},8672:{depth:-.064,height:.437,italic:0,skew:0},8674:{depth:-.064,height:.437,italic:0,skew:0},8705:{depth:0,height:.825,italic:0,skew:0},8708:{depth:0,height:.68889,italic:0,skew:0},8709:{depth:.08167,height:.58167,italic:0,skew:0},8717:{depth:0,height:.43056,italic:0,skew:0},8722:{depth:-.03598,height:.46402,italic:0,skew:0},8724:{depth:.08198,height:.69224,italic:0,skew:0},8726:{depth:.08167,height:.58167,italic:0,skew:0},8733:{depth:0,height:.69224,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8737:{depth:0,height:.69224,italic:0,skew:0},8738:{depth:.03517,height:.52239,italic:0,skew:0},8739:{depth:.08167,height:.58167,italic:0,skew:0},8740:{depth:.25142,height:.74111,italic:0,skew:0},8741:{depth:.08167,height:.58167,italic:0,skew:0},8742:{depth:.25142,height:.74111,italic:0,skew:0},8756:{depth:0,height:.69224,italic:0,skew:0},8757:{depth:0,height:.69224,italic:0,skew:0},8764:{depth:-.13313,height:.36687,italic:0,skew:0},8765:{depth:-.13313,height:.37788,italic:0,skew:0},8769:{depth:-.13313,height:.36687,italic:0,skew:0},8770:{depth:-.03625,height:.46375,italic:0,skew:0},8774:{depth:.30274,height:.79383,italic:0,skew:0},8776:{depth:-.01688,height:.48312,italic:0,skew:0},8778:{depth:.08167,height:.58167,italic:0,skew:0},8782:{depth:.06062,height:.54986,italic:0,skew:0},8783:{depth:.06062,height:.54986,italic:0,skew:0},8785:{depth:.08198,height:.58198,italic:0,skew:0},8786:{depth:.08198,height:.58198,italic:0,skew:0},8787:{depth:.08198,height:.58198,italic:0,skew:0},8790:{depth:0,height:.69224,italic:0,skew:0},8791:{depth:.22958,height:.72958,italic:0,skew:0},8796:{depth:.08198,height:.91667,italic:0,skew:0},8806:{depth:.25583,height:.75583,italic:0,skew:0},8807:{depth:.25583,height:.75583,italic:0,skew:0},8808:{depth:.25142,height:.75726,italic:0,skew:0},8809:{depth:.25142,height:.75726,italic:0,skew:0},8812:{depth:.25583,height:.75583,italic:0,skew:0},8814:{depth:.20576,height:.70576,italic:0,skew:0},8815:{depth:.20576,height:.70576,italic:0,skew:0},8816:{depth:.30274,height:.79383,italic:0,skew:0},8817:{depth:.30274,height:.79383,italic:0,skew:0},8818:{depth:.22958,height:.72958,italic:0,skew:0},8819:{depth:.22958,height:.72958,italic:0,skew:0},8822:{depth:.1808,height:.675,italic:0,skew:0},8823:{depth:.1808,height:.675,italic:0,skew:0},8828:{depth:.13667,height:.63667,italic:0,skew:0},8829:{depth:.13667,height:.63667,italic:0,skew:0},8830:{depth:.22958,height:.72958,italic:0,skew:0},8831:{depth:.22958,height:.72958,italic:0,skew:0},8832:{depth:.20576,height:.70576,italic:0,skew:0},8833:{depth:.20576,height:.70576,italic:0,skew:0},8840:{depth:.30274,height:.79383,italic:0,skew:0},8841:{depth:.30274,height:.79383,italic:0,skew:0},8842:{depth:.13597,height:.63597,italic:0,skew:0},8843:{depth:.13597,height:.63597,italic:0,skew:0},8847:{depth:.03517,height:.54986,italic:0,skew:0},8848:{depth:.03517,height:.54986,italic:0,skew:0},8858:{depth:.08198,height:.58198,italic:0,skew:0},8859:{depth:.08198,height:.58198,italic:0,skew:0},8861:{depth:.08198,height:.58198,italic:0,skew:0},8862:{depth:0,height:.675,italic:0,skew:0},8863:{depth:0,height:.675,italic:0,skew:0},8864:{depth:0,height:.675,italic:0,skew:0},8865:{depth:0,height:.675,italic:0,skew:0},8872:{depth:0,height:.69224,italic:0,skew:0},8873:{depth:0,height:.69224,italic:0,skew:0},8874:{depth:0,height:.69224,italic:0,skew:0},8876:{depth:0,height:.68889,italic:0,skew:0},8877:{depth:0,height:.68889,italic:0,skew:0},8878:{depth:0,height:.68889,italic:0,skew:0},8879:{depth:0,height:.68889,italic:0,skew:0},8882:{depth:.03517,height:.54986,italic:0,skew:0},8883:{depth:.03517,height:.54986,italic:0,skew:0},8884:{depth:.13667,height:.63667,italic:0,skew:0},8885:{depth:.13667,height:.63667,italic:0,skew:0},8888:{depth:0,height:.54986,italic:0,skew:0},8890:{depth:.19444,height:.43056,italic:0,skew:0},8891:{depth:.19444,height:.69224,italic:0,skew:0},8892:{depth:.19444,height:.69224,italic:0,skew:0},8901:{depth:0,height:.54986,italic:0,skew:0},8903:{depth:.08167,height:.58167,italic:0,skew:0},8905:{depth:.08167,height:.58167,italic:0,skew:0},8906:{depth:.08167,height:.58167,italic:0,skew:0},8907:{depth:0,height:.69224,italic:0,skew:0},8908:{depth:0,height:.69224,italic:0,skew:0},8909:{depth:-.03598,height:.46402,italic:0,skew:0},8910:{depth:0,height:.54986,italic:0,skew:0},8911:{depth:0,height:.54986,italic:0,skew:0},8912:{depth:.03517,height:.54986,italic:0,skew:0},8913:{depth:.03517,height:.54986,italic:0,skew:0},8914:{depth:0,height:.54986,italic:0,skew:0},8915:{depth:0,height:.54986,italic:0,skew:0},8916:{depth:0,height:.69224,italic:0,skew:0},8918:{depth:.0391,height:.5391,italic:0,skew:0},8919:{depth:.0391,height:.5391,italic:0,skew:0},8920:{depth:.03517,height:.54986,italic:0,skew:0},8921:{depth:.03517,height:.54986,italic:0,skew:0},8922:{depth:.38569,height:.88569,italic:0,skew:0},8923:{depth:.38569,height:.88569,italic:0,skew:0},8926:{depth:.13667,height:.63667,italic:0,skew:0},8927:{depth:.13667,height:.63667,italic:0,skew:0},8928:{depth:.30274,height:.79383,italic:0,skew:0},8929:{depth:.30274,height:.79383,italic:0,skew:0},8934:{depth:.23222,height:.74111,italic:0,skew:0},8935:{depth:.23222,height:.74111,italic:0,skew:0},8936:{depth:.23222,height:.74111,italic:0,skew:0},8937:{depth:.23222,height:.74111,italic:0,skew:0},8938:{depth:.20576,height:.70576,italic:0,skew:0},8939:{depth:.20576,height:.70576,italic:0,skew:0},8940:{depth:.30274,height:.79383,italic:0,skew:0},8941:{depth:.30274,height:.79383,italic:0,skew:0},8994:{depth:.19444,height:.69224,italic:0,skew:0},8995:{depth:.19444,height:.69224,italic:0,skew:0},9416:{depth:.15559,height:.69224,italic:0,skew:0},9484:{depth:0,height:.69224,italic:0,skew:0},9488:{depth:0,height:.69224,italic:0,skew:0},9492:{depth:0,height:.37788,italic:0,skew:0},9496:{depth:0,height:.37788,italic:0,skew:0},9585:{depth:.19444,height:.68889,italic:0,skew:0},9586:{depth:.19444,height:.74111,italic:0,skew:0},9632:{depth:0,height:.675,italic:0,skew:0},9633:{depth:0,height:.675,italic:0,skew:0},9650:{depth:0,height:.54986,italic:0,skew:0},9651:{depth:0,height:.54986,italic:0,skew:0},9654:{depth:.03517,height:.54986,italic:0,skew:0},9660:{depth:0,height:.54986,italic:0,skew:0},9661:{depth:0,height:.54986,italic:0,skew:0},9664:{depth:.03517,height:.54986,italic:0,skew:0},9674:{depth:.11111,height:.69224,italic:0,skew:0},9733:{depth:.19444,height:.69224,italic:0,skew:0},10003:{depth:0,height:.69224,italic:0,skew:0},10016:{depth:0,height:.69224,italic:0,skew:0},10731:{depth:.11111,height:.69224,italic:0,skew:0},10846:{depth:.19444,height:.75583,italic:0,skew:0},10877:{depth:.13667,height:.63667,italic:0,skew:0},10878:{depth:.13667,height:.63667,italic:0,skew:0},10885:{depth:.25583,height:.75583,italic:0,skew:0},10886:{depth:.25583,height:.75583,italic:0,skew:0},10887:{depth:.13597,height:.63597,italic:0,skew:0},10888:{depth:.13597,height:.63597,italic:0,skew:0},10889:{depth:.26167,height:.75726,italic:0,skew:0},10890:{depth:.26167,height:.75726,italic:0,skew:0},10891:{depth:.48256,height:.98256,italic:0,skew:0},10892:{depth:.48256,height:.98256,italic:0,skew:0},10901:{depth:.13667,height:.63667,italic:0,skew:0},10902:{depth:.13667,height:.63667,italic:0,skew:0},10933:{depth:.25142,height:.75726,italic:0,skew:0},10934:{depth:.25142,height:.75726,italic:0,skew:0},10935:{depth:.26167,height:.75726,italic:0,skew:0},10936:{depth:.26167,height:.75726,italic:0,skew:0},10937:{depth:.26167,\nheight:.75726,italic:0,skew:0},10938:{depth:.26167,height:.75726,italic:0,skew:0},10949:{depth:.25583,height:.75583,italic:0,skew:0},10950:{depth:.25583,height:.75583,italic:0,skew:0},10955:{depth:.28481,height:.79383,italic:0,skew:0},10956:{depth:.28481,height:.79383,italic:0,skew:0},57350:{depth:.08167,height:.58167,italic:0,skew:0},57351:{depth:.08167,height:.58167,italic:0,skew:0},57352:{depth:.08167,height:.58167,italic:0,skew:0},57353:{depth:0,height:.43056,italic:.04028,skew:0},57356:{depth:.25142,height:.75726,italic:0,skew:0},57357:{depth:.25142,height:.75726,italic:0,skew:0},57358:{depth:.41951,height:.91951,italic:0,skew:0},57359:{depth:.30274,height:.79383,italic:0,skew:0},57360:{depth:.30274,height:.79383,italic:0,skew:0},57361:{depth:.41951,height:.91951,italic:0,skew:0},57366:{depth:.25142,height:.75726,italic:0,skew:0},57367:{depth:.25142,height:.75726,italic:0,skew:0},57368:{depth:.25142,height:.75726,italic:0,skew:0},57369:{depth:.25142,height:.75726,italic:0,skew:0},57370:{depth:.13597,height:.63597,italic:0,skew:0},57371:{depth:.13597,height:.63597,italic:0,skew:0}},\"Caligraphic-Regular\":{48:{depth:0,height:.43056,italic:0,skew:0},49:{depth:0,height:.43056,italic:0,skew:0},50:{depth:0,height:.43056,italic:0,skew:0},51:{depth:.19444,height:.43056,italic:0,skew:0},52:{depth:.19444,height:.43056,italic:0,skew:0},53:{depth:.19444,height:.43056,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:.19444,height:.43056,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:.19444,height:.43056,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:.19445},66:{depth:0,height:.68333,italic:.03041,skew:.13889},67:{depth:0,height:.68333,italic:.05834,skew:.13889},68:{depth:0,height:.68333,italic:.02778,skew:.08334},69:{depth:0,height:.68333,italic:.08944,skew:.11111},70:{depth:0,height:.68333,italic:.09931,skew:.11111},71:{depth:.09722,height:.68333,italic:.0593,skew:.11111},72:{depth:0,height:.68333,italic:.00965,skew:.11111},73:{depth:0,height:.68333,italic:.07382,skew:0},74:{depth:.09722,height:.68333,italic:.18472,skew:.16667},75:{depth:0,height:.68333,italic:.01445,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.13889},77:{depth:0,height:.68333,italic:0,skew:.13889},78:{depth:0,height:.68333,italic:.14736,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.11111},80:{depth:0,height:.68333,italic:.08222,skew:.08334},81:{depth:.09722,height:.68333,italic:0,skew:.11111},82:{depth:0,height:.68333,italic:0,skew:.08334},83:{depth:0,height:.68333,italic:.075,skew:.13889},84:{depth:0,height:.68333,italic:.25417,skew:0},85:{depth:0,height:.68333,italic:.09931,skew:.08334},86:{depth:0,height:.68333,italic:.08222,skew:0},87:{depth:0,height:.68333,italic:.08222,skew:.08334},88:{depth:0,height:.68333,italic:.14643,skew:.13889},89:{depth:.09722,height:.68333,italic:.08222,skew:.08334},90:{depth:0,height:.68333,italic:.07944,skew:.13889}},\"Fraktur-Regular\":{33:{depth:0,height:.69141,italic:0,skew:0},34:{depth:0,height:.69141,italic:0,skew:0},38:{depth:0,height:.69141,italic:0,skew:0},39:{depth:0,height:.69141,italic:0,skew:0},40:{depth:.24982,height:.74947,italic:0,skew:0},41:{depth:.24982,height:.74947,italic:0,skew:0},42:{depth:0,height:.62119,italic:0,skew:0},43:{depth:.08319,height:.58283,italic:0,skew:0},44:{depth:0,height:.10803,italic:0,skew:0},45:{depth:.08319,height:.58283,italic:0,skew:0},46:{depth:0,height:.10803,italic:0,skew:0},47:{depth:.24982,height:.74947,italic:0,skew:0},48:{depth:0,height:.47534,italic:0,skew:0},49:{depth:0,height:.47534,italic:0,skew:0},50:{depth:0,height:.47534,italic:0,skew:0},51:{depth:.18906,height:.47534,italic:0,skew:0},52:{depth:.18906,height:.47534,italic:0,skew:0},53:{depth:.18906,height:.47534,italic:0,skew:0},54:{depth:0,height:.69141,italic:0,skew:0},55:{depth:.18906,height:.47534,italic:0,skew:0},56:{depth:0,height:.69141,italic:0,skew:0},57:{depth:.18906,height:.47534,italic:0,skew:0},58:{depth:0,height:.47534,italic:0,skew:0},59:{depth:.12604,height:.47534,italic:0,skew:0},61:{depth:-.13099,height:.36866,italic:0,skew:0},63:{depth:0,height:.69141,italic:0,skew:0},65:{depth:0,height:.69141,italic:0,skew:0},66:{depth:0,height:.69141,italic:0,skew:0},67:{depth:0,height:.69141,italic:0,skew:0},68:{depth:0,height:.69141,italic:0,skew:0},69:{depth:0,height:.69141,italic:0,skew:0},70:{depth:.12604,height:.69141,italic:0,skew:0},71:{depth:0,height:.69141,italic:0,skew:0},72:{depth:.06302,height:.69141,italic:0,skew:0},73:{depth:0,height:.69141,italic:0,skew:0},74:{depth:.12604,height:.69141,italic:0,skew:0},75:{depth:0,height:.69141,italic:0,skew:0},76:{depth:0,height:.69141,italic:0,skew:0},77:{depth:0,height:.69141,italic:0,skew:0},78:{depth:0,height:.69141,italic:0,skew:0},79:{depth:0,height:.69141,italic:0,skew:0},80:{depth:.18906,height:.69141,italic:0,skew:0},81:{depth:.03781,height:.69141,italic:0,skew:0},82:{depth:0,height:.69141,italic:0,skew:0},83:{depth:0,height:.69141,italic:0,skew:0},84:{depth:0,height:.69141,italic:0,skew:0},85:{depth:0,height:.69141,italic:0,skew:0},86:{depth:0,height:.69141,italic:0,skew:0},87:{depth:0,height:.69141,italic:0,skew:0},88:{depth:0,height:.69141,italic:0,skew:0},89:{depth:.18906,height:.69141,italic:0,skew:0},90:{depth:.12604,height:.69141,italic:0,skew:0},91:{depth:.24982,height:.74947,italic:0,skew:0},93:{depth:.24982,height:.74947,italic:0,skew:0},94:{depth:0,height:.69141,italic:0,skew:0},97:{depth:0,height:.47534,italic:0,skew:0},98:{depth:0,height:.69141,italic:0,skew:0},99:{depth:0,height:.47534,italic:0,skew:0},100:{depth:0,height:.62119,italic:0,skew:0},101:{depth:0,height:.47534,italic:0,skew:0},102:{depth:.18906,height:.69141,italic:0,skew:0},103:{depth:.18906,height:.47534,italic:0,skew:0},104:{depth:.18906,height:.69141,italic:0,skew:0},105:{depth:0,height:.69141,italic:0,skew:0},106:{depth:0,height:.69141,italic:0,skew:0},107:{depth:0,height:.69141,italic:0,skew:0},108:{depth:0,height:.69141,italic:0,skew:0},109:{depth:0,height:.47534,italic:0,skew:0},110:{depth:0,height:.47534,italic:0,skew:0},111:{depth:0,height:.47534,italic:0,skew:0},112:{depth:.18906,height:.52396,italic:0,skew:0},113:{depth:.18906,height:.47534,italic:0,skew:0},114:{depth:0,height:.47534,italic:0,skew:0},115:{depth:0,height:.47534,italic:0,skew:0},116:{depth:0,height:.62119,italic:0,skew:0},117:{depth:0,height:.47534,italic:0,skew:0},118:{depth:0,height:.52396,italic:0,skew:0},119:{depth:0,height:.52396,italic:0,skew:0},120:{depth:.18906,height:.47534,italic:0,skew:0},121:{depth:.18906,height:.47534,italic:0,skew:0},122:{depth:.18906,height:.47534,italic:0,skew:0},8216:{depth:0,height:.69141,italic:0,skew:0},8217:{depth:0,height:.69141,italic:0,skew:0},58112:{depth:0,height:.62119,italic:0,skew:0},58113:{depth:0,height:.62119,italic:0,skew:0},58114:{depth:.18906,height:.69141,italic:0,skew:0},58115:{depth:.18906,height:.69141,italic:0,skew:0},58116:{depth:.18906,height:.47534,italic:0,skew:0},58117:{depth:0,height:.69141,italic:0,skew:0},58118:{depth:0,height:.62119,italic:0,skew:0},58119:{depth:0,height:.47534,italic:0,skew:0}},\"Main-Bold\":{33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.13333,height:.63333,italic:0,skew:0},44:{depth:.19444,height:.15556,italic:0,skew:0},45:{depth:0,height:.44444,italic:0,skew:0},46:{depth:0,height:.15556,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.64444,italic:0,skew:0},49:{depth:0,height:.64444,italic:0,skew:0},50:{depth:0,height:.64444,italic:0,skew:0},51:{depth:0,height:.64444,italic:0,skew:0},52:{depth:0,height:.64444,italic:0,skew:0},53:{depth:0,height:.64444,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:0,height:.64444,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:0,height:.64444,italic:0,skew:0},58:{depth:0,height:.44444,italic:0,skew:0},59:{depth:.19444,height:.44444,italic:0,skew:0},60:{depth:.08556,height:.58556,italic:0,skew:0},61:{depth:-.10889,height:.39111,italic:0,skew:0},62:{depth:.08556,height:.58556,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.68611,italic:0,skew:0},66:{depth:0,height:.68611,italic:0,skew:0},67:{depth:0,height:.68611,italic:0,skew:0},68:{depth:0,height:.68611,italic:0,skew:0},69:{depth:0,height:.68611,italic:0,skew:0},70:{depth:0,height:.68611,italic:0,skew:0},71:{depth:0,height:.68611,italic:0,skew:0},72:{depth:0,height:.68611,italic:0,skew:0},73:{depth:0,height:.68611,italic:0,skew:0},74:{depth:0,height:.68611,italic:0,skew:0},75:{depth:0,height:.68611,italic:0,skew:0},76:{depth:0,height:.68611,italic:0,skew:0},77:{depth:0,height:.68611,italic:0,skew:0},78:{depth:0,height:.68611,italic:0,skew:0},79:{depth:0,height:.68611,italic:0,skew:0},80:{depth:0,height:.68611,italic:0,skew:0},81:{depth:.19444,height:.68611,italic:0,skew:0},82:{depth:0,height:.68611,italic:0,skew:0},83:{depth:0,height:.68611,italic:0,skew:0},84:{depth:0,height:.68611,italic:0,skew:0},85:{depth:0,height:.68611,italic:0,skew:0},86:{depth:0,height:.68611,italic:.01597,skew:0},87:{depth:0,height:.68611,italic:.01597,skew:0},88:{depth:0,height:.68611,italic:0,skew:0},89:{depth:0,height:.68611,italic:.02875,skew:0},90:{depth:0,height:.68611,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},92:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.31,height:.13444,italic:.03194,skew:0},96:{depth:0,height:.69444,italic:0,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:0,height:.69444,italic:.10903,skew:0},103:{depth:.19444,height:.44444,italic:.01597,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.69444,italic:0,skew:0},106:{depth:.19444,height:.69444,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:0,skew:0},114:{depth:0,height:.44444,italic:0,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.63492,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.01597,skew:0},119:{depth:0,height:.44444,italic:.01597,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.01597,skew:0},122:{depth:0,height:.44444,italic:0,skew:0},123:{depth:.25,height:.75,italic:0,skew:0},124:{depth:.25,height:.75,italic:0,skew:0},125:{depth:.25,height:.75,italic:0,skew:0},126:{depth:.35,height:.34444,italic:0,skew:0},168:{depth:0,height:.69444,italic:0,skew:0},172:{depth:0,height:.44444,italic:0,skew:0},175:{depth:0,height:.59611,italic:0,skew:0},176:{depth:0,height:.69444,italic:0,skew:0},177:{depth:.13333,height:.63333,italic:0,skew:0},180:{depth:0,height:.69444,italic:0,skew:0},215:{depth:.13333,height:.63333,italic:0,skew:0},247:{depth:.13333,height:.63333,italic:0,skew:0},305:{depth:0,height:.44444,italic:0,skew:0},567:{depth:.19444,height:.44444,italic:0,skew:0},710:{depth:0,height:.69444,italic:0,skew:0},711:{depth:0,height:.63194,italic:0,skew:0},713:{depth:0,height:.59611,italic:0,skew:0},714:{depth:0,height:.69444,italic:0,skew:0},715:{depth:0,height:.69444,italic:0,skew:0},728:{depth:0,height:.69444,italic:0,skew:0},729:{depth:0,height:.69444,italic:0,skew:0},730:{depth:0,height:.69444,italic:0,skew:0},732:{depth:0,height:.69444,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.69444,italic:0,skew:0},772:{depth:0,height:.59611,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.69444,italic:0,skew:0},776:{depth:0,height:.69444,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.63194,italic:0,skew:0},824:{depth:.19444,height:.69444,italic:0,skew:0},915:{depth:0,height:.68611,italic:0,skew:0},916:{depth:0,height:.68611,italic:0,skew:0},920:{depth:0,height:.68611,italic:0,skew:0},923:{depth:0,height:.68611,italic:0,skew:0},926:{depth:0,height:.68611,italic:0,skew:0},928:{depth:0,height:.68611,italic:0,skew:0},931:{depth:0,height:.68611,italic:0,skew:0},933:{depth:0,height:.68611,italic:0,skew:0},934:{depth:0,height:.68611,italic:0,skew:0},936:{depth:0,height:.68611,italic:0,skew:0},937:{depth:0,height:.68611,italic:0,skew:0},8211:{depth:0,height:.44444,italic:.03194,skew:0},8212:{depth:0,height:.44444,italic:.03194,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0},8224:{depth:.19444,height:.69444,italic:0,skew:0},8225:{depth:.19444,height:.69444,italic:0,skew:0},8242:{depth:0,height:.55556,italic:0,skew:0},8407:{depth:0,height:.72444,italic:.15486,skew:0},8463:{depth:0,height:.69444,italic:0,skew:0},8465:{depth:0,height:.69444,italic:0,skew:0},8467:{depth:0,height:.69444,italic:0,skew:0},8472:{depth:.19444,height:.44444,italic:0,skew:0},8476:{depth:0,height:.69444,italic:0,skew:0},8501:{depth:0,height:.69444,italic:0,skew:0},8592:{depth:-.10889,height:.39111,italic:0,skew:0},8593:{depth:.19444,height:.69444,italic:0,skew:0},8594:{depth:-.10889,height:.39111,italic:0,skew:0},8595:{depth:.19444,height:.69444,italic:0,skew:0},8596:{depth:-.10889,height:.39111,italic:0,skew:0},8597:{depth:.25,height:.75,italic:0,skew:0},8598:{depth:.19444,height:.69444,italic:0,skew:0},8599:{depth:.19444,height:.69444,italic:0,skew:0},8600:{depth:.19444,height:.69444,italic:0,skew:0},8601:{depth:.19444,height:.69444,italic:0,skew:0},8636:{depth:-.10889,height:.39111,italic:0,skew:0},8637:{depth:-.10889,height:.39111,italic:0,skew:0},8640:{depth:-.10889,height:.39111,italic:0,skew:0},8641:{depth:-.10889,height:.39111,italic:0,skew:0},8656:{depth:-.10889,height:.39111,italic:0,skew:0},8657:{depth:.19444,height:.69444,italic:0,skew:0},8658:{depth:-.10889,height:.39111,italic:0,skew:0},8659:{depth:.19444,height:.69444,italic:0,skew:0},8660:{depth:-.10889,height:.39111,italic:0,skew:0},8661:{depth:.25,height:.75,italic:0,skew:0},8704:{depth:0,height:.69444,italic:0,skew:0},8706:{depth:0,height:.69444,italic:.06389,skew:0},8707:{depth:0,height:.69444,italic:0,skew:0},8709:{depth:.05556,height:.75,italic:0,skew:0},8711:{depth:0,height:.68611,italic:0,skew:0},8712:{depth:.08556,height:.58556,italic:0,skew:0},8715:{depth:.08556,height:.58556,italic:0,skew:0},8722:{depth:.13333,height:.63333,italic:0,skew:0},8723:{depth:.13333,height:.63333,italic:0,skew:0},8725:{depth:.25,height:.75,italic:0,skew:0},8726:{depth:.25,height:.75,italic:0,skew:0},8727:{depth:-.02778,height:.47222,italic:0,skew:0},8728:{depth:-.02639,height:.47361,italic:0,skew:0},8729:{depth:-.02639,height:.47361,italic:0,skew:0},8730:{depth:.18,height:.82,italic:0,skew:0},8733:{depth:0,height:.44444,italic:0,skew:0},8734:{depth:0,height:.44444,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8739:{depth:.25,height:.75,italic:0,skew:0},8741:{depth:.25,height:.75,italic:0,skew:0},8743:{depth:0,height:.55556,italic:0,skew:0},8744:{depth:0,height:.55556,italic:0,skew:0},8745:{depth:0,height:.55556,italic:0,skew:0},8746:{depth:0,height:.55556,italic:0,skew:0},8747:{depth:.19444,height:.69444,italic:.12778,skew:0},8764:{depth:-.10889,height:.39111,italic:0,skew:0},8768:{depth:.19444,height:.69444,italic:0,skew:0},8771:{depth:.00222,height:.50222,italic:0,skew:0},8776:{depth:.02444,height:.52444,italic:0,skew:0},8781:{depth:.00222,height:.50222,italic:0,skew:0},8801:{depth:.00222,height:.50222,italic:0,skew:0},8804:{depth:.19667,height:.69667,italic:0,skew:0},8805:{depth:.19667,height:.69667,italic:0,skew:0},8810:{depth:.08556,height:.58556,italic:0,skew:0},8811:{depth:.08556,height:.58556,italic:0,skew:0},8826:{depth:.08556,height:.58556,italic:0,skew:0},8827:{depth:.08556,height:.58556,italic:0,skew:0},8834:{depth:.08556,height:.58556,italic:0,skew:0},8835:{depth:.08556,height:.58556,italic:0,skew:0},8838:{depth:.19667,height:.69667,italic:0,skew:0},8839:{depth:.19667,height:.69667,italic:0,skew:0},8846:{depth:0,height:.55556,italic:0,skew:0},8849:{depth:.19667,height:.69667,italic:0,skew:0},8850:{depth:.19667,height:.69667,italic:0,skew:0},8851:{depth:0,height:.55556,italic:0,skew:0},8852:{depth:0,height:.55556,italic:0,skew:0},8853:{depth:.13333,height:.63333,italic:0,skew:0},8854:{depth:.13333,height:.63333,italic:0,skew:0},8855:{depth:.13333,height:.63333,italic:0,skew:0},8856:{depth:.13333,height:.63333,italic:0,skew:0},8857:{depth:.13333,height:.63333,italic:0,skew:0},8866:{depth:0,height:.69444,italic:0,skew:0},8867:{depth:0,height:.69444,italic:0,skew:0},8868:{depth:0,height:.69444,italic:0,skew:0},8869:{depth:0,height:.69444,italic:0,skew:0},8900:{depth:-.02639,height:.47361,italic:0,skew:0},8901:{depth:-.02639,height:.47361,italic:0,skew:0},8902:{depth:-.02778,height:.47222,italic:0,skew:0},8968:{depth:.25,height:.75,italic:0,skew:0},8969:{depth:.25,height:.75,italic:0,skew:0},8970:{depth:.25,height:.75,italic:0,skew:0},8971:{depth:.25,height:.75,italic:0,skew:0},8994:{depth:-.13889,height:.36111,italic:0,skew:0},8995:{depth:-.13889,height:.36111,italic:0,skew:0},9651:{depth:.19444,height:.69444,italic:0,skew:0},9657:{depth:-.02778,height:.47222,italic:0,skew:0},9661:{depth:.19444,height:.69444,italic:0,skew:0},9667:{depth:-.02778,height:.47222,italic:0,skew:0},9711:{depth:.19444,height:.69444,italic:0,skew:0},9824:{depth:.12963,height:.69444,italic:0,skew:0},9825:{depth:.12963,height:.69444,italic:0,skew:0},9826:{depth:.12963,height:.69444,italic:0,skew:0},9827:{depth:.12963,height:.69444,italic:0,skew:0},9837:{depth:0,height:.75,italic:0,skew:0},9838:{depth:.19444,height:.69444,italic:0,skew:0},9839:{depth:.19444,height:.69444,italic:0,skew:0},10216:{depth:.25,height:.75,italic:0,skew:0},10217:{depth:.25,height:.75,italic:0,skew:0},10815:{depth:0,height:.68611,italic:0,skew:0},10927:{depth:.19667,height:.69667,italic:0,skew:0},10928:{depth:.19667,height:.69667,italic:0,skew:0}},\"Main-Italic\":{33:{depth:0,height:.69444,italic:.12417,skew:0},34:{depth:0,height:.69444,italic:.06961,skew:0},35:{depth:.19444,height:.69444,italic:.06616,skew:0},37:{depth:.05556,height:.75,italic:.13639,skew:0},38:{depth:0,height:.69444,italic:.09694,skew:0},39:{depth:0,height:.69444,italic:.12417,skew:0},40:{depth:.25,height:.75,italic:.16194,skew:0},41:{depth:.25,height:.75,italic:.03694,skew:0},42:{depth:0,height:.75,italic:.14917,skew:0},43:{depth:.05667,height:.56167,italic:.03694,skew:0},44:{depth:.19444,height:.10556,italic:0,skew:0},45:{depth:0,height:.43056,italic:.02826,skew:0},46:{depth:0,height:.10556,italic:0,skew:0},47:{depth:.25,height:.75,italic:.16194,skew:0},48:{depth:0,height:.64444,italic:.13556,skew:0},49:{depth:0,height:.64444,italic:.13556,skew:0},50:{depth:0,height:.64444,italic:.13556,skew:0},51:{depth:0,height:.64444,italic:.13556,skew:0},52:{depth:.19444,height:.64444,italic:.13556,skew:0},53:{depth:0,height:.64444,italic:.13556,skew:0},54:{depth:0,height:.64444,italic:.13556,skew:0},55:{depth:.19444,height:.64444,italic:.13556,skew:0},56:{depth:0,height:.64444,italic:.13556,skew:0},57:{depth:0,height:.64444,italic:.13556,skew:0},58:{depth:0,height:.43056,italic:.0582,skew:0},59:{depth:.19444,height:.43056,italic:.0582,skew:0},61:{depth:-.13313,height:.36687,italic:.06616,skew:0},63:{depth:0,height:.69444,italic:.1225,skew:0},64:{depth:0,height:.69444,italic:.09597,skew:0},65:{depth:0,height:.68333,italic:0,skew:0},66:{depth:0,height:.68333,italic:.10257,skew:0},67:{depth:0,height:.68333,italic:.14528,skew:0},68:{depth:0,height:.68333,italic:.09403,skew:0},69:{depth:0,height:.68333,italic:.12028,skew:0},70:{depth:0,height:.68333,italic:.13305,skew:0},71:{depth:0,height:.68333,italic:.08722,skew:0},72:{depth:0,height:.68333,italic:.16389,skew:0},73:{depth:0,height:.68333,italic:.15806,skew:0},74:{depth:0,height:.68333,italic:.14028,skew:0},75:{depth:0,height:.68333,italic:.14528,skew:0},76:{depth:0,height:.68333,italic:0,skew:0},77:{depth:0,height:.68333,italic:.16389,skew:0},78:{depth:0,height:.68333,italic:.16389,skew:0},79:{depth:0,height:.68333,italic:.09403,skew:0},80:{depth:0,height:.68333,italic:.10257,skew:0},81:{depth:.19444,height:.68333,italic:.09403,skew:0},82:{depth:0,height:.68333,italic:.03868,skew:0},83:{depth:0,height:.68333,italic:.11972,skew:0},84:{depth:0,height:.68333,italic:.13305,skew:0},85:{depth:0,height:.68333,italic:.16389,skew:0},86:{depth:0,height:.68333,italic:.18361,skew:0},87:{depth:0,height:.68333,italic:.18361,skew:0},88:{depth:0,height:.68333,italic:.15806,skew:0},89:{depth:0,height:.68333,italic:.19383,skew:0},90:{depth:0,height:.68333,italic:.14528,skew:0},91:{depth:.25,height:.75,italic:.1875,skew:0},93:{depth:.25,height:.75,italic:.10528,skew:0},94:{depth:0,height:.69444,italic:.06646,skew:0},95:{depth:.31,height:.12056,italic:.09208,skew:0},97:{depth:0,height:.43056,italic:.07671,skew:0},98:{depth:0,height:.69444,italic:.06312,skew:0},99:{depth:0,height:.43056,italic:.05653,skew:0},100:{depth:0,height:.69444,italic:.10333,skew:0},101:{depth:0,height:.43056,italic:.07514,skew:0},102:{depth:.19444,height:.69444,italic:.21194,skew:0},103:{depth:.19444,height:.43056,italic:.08847,skew:0},104:{depth:0,height:.69444,italic:.07671,skew:0},105:{depth:0,height:.65536,italic:.1019,skew:0},106:{depth:.19444,height:.65536,italic:.14467,skew:0},107:{depth:0,height:.69444,italic:.10764,skew:0},108:{depth:0,height:.69444,italic:.10333,skew:0},109:{depth:0,height:.43056,italic:.07671,skew:0},110:{depth:0,height:.43056,italic:.07671,skew:0},111:{depth:0,height:.43056,italic:.06312,skew:0},112:{depth:.19444,height:.43056,italic:.06312,skew:0},113:{depth:.19444,height:.43056,italic:.08847,skew:0},114:{depth:0,height:.43056,italic:.10764,skew:0},115:{depth:0,height:.43056,italic:.08208,skew:0},116:{depth:0,height:.61508,italic:.09486,skew:0},117:{depth:0,height:.43056,italic:.07671,skew:0},118:{depth:0,height:.43056,italic:.10764,skew:0},119:{depth:0,height:.43056,italic:.10764,skew:0},120:{depth:0,height:.43056,italic:.12042,skew:0},121:{depth:.19444,height:.43056,italic:.08847,skew:0},122:{depth:0,height:.43056,italic:.12292,skew:0},126:{depth:.35,height:.31786,italic:.11585,skew:0},163:{depth:0,height:.69444,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:.02778},567:{depth:.19444,height:.43056,italic:0,skew:.08334},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:.09694,skew:0},770:{depth:0,height:.69444,italic:.06646,skew:0},771:{depth:0,height:.66786,italic:.11585,skew:0},772:{depth:0,height:.56167,italic:.10333,skew:0},774:{depth:0,height:.69444,italic:.10806,skew:0},775:{depth:0,height:.66786,italic:.11752,skew:0},776:{depth:0,height:.66786,italic:.10474,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:.1225,skew:0},780:{depth:0,height:.62847,italic:.08295,skew:0},915:{depth:0,height:.68333,italic:.13305,skew:0},916:{depth:0,height:.68333,italic:0,skew:0},920:{depth:0,height:.68333,italic:.09403,skew:0},923:{depth:0,height:.68333,italic:0,skew:0},926:{depth:0,height:.68333,italic:.15294,skew:0},928:{depth:0,height:.68333,italic:.16389,skew:0},931:{depth:0,height:.68333,italic:.12028,skew:0},933:{depth:0,height:.68333,italic:.11111,skew:0},934:{depth:0,height:.68333,italic:.05986,skew:0},936:{depth:0,height:.68333,italic:.11111,skew:0},937:{depth:0,height:.68333,italic:.10257,skew:0},8211:{depth:0,height:.43056,italic:.09208,skew:0},8212:{depth:0,height:.43056,italic:.09208,skew:0},8216:{depth:0,height:.69444,italic:.12417,skew:0},8217:{depth:0,height:.69444,italic:.12417,skew:0},8220:{depth:0,height:.69444,italic:.1685,skew:0},8221:{depth:0,height:.69444,italic:.06961,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0}},\"Main-Regular\":{32:{depth:0,height:0,italic:0,skew:0},33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.08333,height:.58333,italic:0,skew:0},44:{depth:.19444,height:.10556,italic:0,skew:0},45:{depth:0,height:.43056,italic:0,skew:0},46:{depth:0,height:.10556,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.64444,italic:0,skew:0},49:{depth:0,height:.64444,italic:0,skew:0},50:{depth:0,height:.64444,italic:0,skew:0},51:{depth:0,height:.64444,italic:0,skew:0},52:{depth:0,height:.64444,italic:0,skew:0},53:{depth:0,height:.64444,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:0,height:.64444,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:0,height:.64444,italic:0,skew:0},58:{depth:0,height:.43056,italic:0,skew:0},59:{depth:.19444,height:.43056,italic:0,skew:0},60:{depth:.0391,height:.5391,italic:0,skew:0},61:{depth:-.13313,height:.36687,italic:0,skew:0},62:{depth:.0391,height:.5391,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:0},66:{depth:0,height:.68333,italic:0,skew:0},67:{depth:0,height:.68333,italic:0,skew:0},68:{depth:0,height:.68333,italic:0,skew:0},69:{depth:0,height:.68333,italic:0,skew:0},70:{depth:0,height:.68333,italic:0,skew:0},71:{depth:0,height:.68333,italic:0,skew:0},72:{depth:0,height:.68333,italic:0,skew:0},73:{depth:0,height:.68333,italic:0,skew:0},74:{depth:0,height:.68333,italic:0,skew:0},75:{depth:0,height:.68333,italic:0,skew:0},76:{depth:0,height:.68333,italic:0,skew:0},77:{depth:0,height:.68333,italic:0,skew:0},78:{depth:0,height:.68333,italic:0,skew:0},79:{depth:0,height:.68333,italic:0,skew:0},80:{depth:0,height:.68333,italic:0,skew:0},81:{depth:.19444,height:.68333,italic:0,skew:0},82:{depth:0,height:.68333,italic:0,skew:0},83:{depth:0,height:.68333,italic:0,skew:0},84:{depth:0,height:.68333,italic:0,skew:0},85:{depth:0,height:.68333,italic:0,skew:0},86:{depth:0,height:.68333,italic:.01389,skew:0},87:{depth:0,height:.68333,italic:.01389,skew:0},88:{depth:0,height:.68333,italic:0,skew:0},89:{depth:0,height:.68333,italic:.025,skew:0},90:{depth:0,height:.68333,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},92:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.31,height:.12056,italic:.02778,skew:0},96:{depth:0,height:.69444,italic:0,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.43056,italic:0,skew:0},102:{depth:0,height:.69444,italic:.07778,skew:0},103:{depth:.19444,height:.43056,italic:.01389,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.66786,italic:0,skew:0},106:{depth:.19444,height:.66786,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:0},112:{depth:.19444,height:.43056,italic:0,skew:0},113:{depth:.19444,height:.43056,italic:0,skew:0},114:{depth:0,height:.43056,italic:0,skew:0},115:{depth:0,height:.43056,italic:0,skew:0},116:{depth:0,height:.61508,italic:0,skew:0},117:{depth:0,height:.43056,italic:0,skew:0},118:{depth:0,height:.43056,italic:.01389,skew:0},119:{depth:0,height:.43056,italic:.01389,skew:0},120:{depth:0,height:.43056,italic:0,skew:0},121:{depth:.19444,height:.43056,italic:.01389,skew:0},122:{depth:0,height:.43056,italic:0,skew:0},123:{depth:.25,height:.75,italic:0,skew:0},124:{depth:.25,height:.75,italic:0,skew:0},125:{depth:.25,height:.75,italic:0,skew:0},126:{depth:.35,height:.31786,italic:0,skew:0},160:{depth:0,height:0,italic:0,skew:0},168:{depth:0,height:.66786,italic:0,skew:0},172:{depth:0,height:.43056,italic:0,skew:0},175:{depth:0,height:.56778,italic:0,skew:0},176:{depth:0,height:.69444,italic:0,skew:0},177:{depth:.08333,height:.58333,italic:0,skew:0},180:{depth:0,height:.69444,italic:0,skew:0},215:{depth:.08333,height:.58333,italic:0,skew:0},247:{depth:.08333,height:.58333,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:0},567:{depth:.19444,height:.43056,italic:0,skew:0},710:{depth:0,height:.69444,italic:0,skew:0},711:{depth:0,height:.62847,italic:0,skew:0},713:{depth:0,height:.56778,italic:0,skew:0},714:{depth:0,height:.69444,italic:0,skew:0},715:{depth:0,height:.69444,italic:0,skew:0},728:{depth:0,height:.69444,italic:0,skew:0},729:{depth:0,height:.66786,italic:0,skew:0},730:{depth:0,height:.69444,italic:0,skew:0},732:{depth:0,height:.66786,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.66786,italic:0,skew:0},772:{depth:0,height:.56778,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.66786,italic:0,skew:0},776:{depth:0,height:.66786,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.62847,italic:0,skew:0},824:{depth:.19444,height:.69444,italic:0,skew:0},915:{depth:0,height:.68333,italic:0,skew:0},916:{depth:0,height:.68333,italic:0,skew:0},920:{depth:0,height:.68333,italic:0,skew:0},923:{depth:0,height:.68333,italic:0,skew:0},926:{depth:0,height:.68333,italic:0,skew:0},928:{depth:0,height:.68333,italic:0,skew:0},931:{depth:0,height:.68333,italic:0,skew:0},933:{depth:0,height:.68333,italic:0,skew:0},934:{depth:0,height:.68333,italic:0,skew:0},936:{depth:0,height:.68333,italic:0,skew:0},937:{depth:0,height:.68333,italic:0,skew:0},8211:{depth:0,height:.43056,italic:.02778,skew:0},8212:{depth:0,height:.43056,italic:.02778,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0},8224:{depth:.19444,height:.69444,italic:0,skew:0},8225:{depth:.19444,height:.69444,italic:0,skew:0},8230:{depth:0,height:.12,italic:0,skew:0},8242:{depth:0,height:.55556,italic:0,skew:0},8407:{depth:0,height:.71444,italic:.15382,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},8465:{depth:0,height:.69444,italic:0,skew:0},8467:{depth:0,height:.69444,italic:0,skew:.11111},8472:{depth:.19444,height:.43056,italic:0,skew:.11111},8476:{depth:0,height:.69444,italic:0,skew:0},8501:{depth:0,height:.69444,italic:0,skew:0},8592:{depth:-.13313,height:.36687,italic:0,skew:0},8593:{depth:.19444,height:.69444,italic:0,skew:0},8594:{depth:-.13313,height:.36687,italic:0,skew:0},8595:{depth:.19444,height:.69444,italic:0,skew:0},8596:{depth:-.13313,height:.36687,italic:0,skew:0},8597:{depth:.25,height:.75,italic:0,skew:0},8598:{depth:.19444,height:.69444,italic:0,skew:0},8599:{depth:.19444,height:.69444,italic:0,skew:0},8600:{depth:.19444,height:.69444,italic:0,skew:0},8601:{depth:.19444,height:.69444,italic:0,skew:0},8614:{depth:.011,\nheight:.511,italic:0,skew:0},8617:{depth:.011,height:.511,italic:0,skew:0},8618:{depth:.011,height:.511,italic:0,skew:0},8636:{depth:-.13313,height:.36687,italic:0,skew:0},8637:{depth:-.13313,height:.36687,italic:0,skew:0},8640:{depth:-.13313,height:.36687,italic:0,skew:0},8641:{depth:-.13313,height:.36687,italic:0,skew:0},8652:{depth:.011,height:.671,italic:0,skew:0},8656:{depth:-.13313,height:.36687,italic:0,skew:0},8657:{depth:.19444,height:.69444,italic:0,skew:0},8658:{depth:-.13313,height:.36687,italic:0,skew:0},8659:{depth:.19444,height:.69444,italic:0,skew:0},8660:{depth:-.13313,height:.36687,italic:0,skew:0},8661:{depth:.25,height:.75,italic:0,skew:0},8704:{depth:0,height:.69444,italic:0,skew:0},8706:{depth:0,height:.69444,italic:.05556,skew:.08334},8707:{depth:0,height:.69444,italic:0,skew:0},8709:{depth:.05556,height:.75,italic:0,skew:0},8711:{depth:0,height:.68333,italic:0,skew:0},8712:{depth:.0391,height:.5391,italic:0,skew:0},8715:{depth:.0391,height:.5391,italic:0,skew:0},8722:{depth:.08333,height:.58333,italic:0,skew:0},8723:{depth:.08333,height:.58333,italic:0,skew:0},8725:{depth:.25,height:.75,italic:0,skew:0},8726:{depth:.25,height:.75,italic:0,skew:0},8727:{depth:-.03472,height:.46528,italic:0,skew:0},8728:{depth:-.05555,height:.44445,italic:0,skew:0},8729:{depth:-.05555,height:.44445,italic:0,skew:0},8730:{depth:.2,height:.8,italic:0,skew:0},8733:{depth:0,height:.43056,italic:0,skew:0},8734:{depth:0,height:.43056,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8739:{depth:.25,height:.75,italic:0,skew:0},8741:{depth:.25,height:.75,italic:0,skew:0},8743:{depth:0,height:.55556,italic:0,skew:0},8744:{depth:0,height:.55556,italic:0,skew:0},8745:{depth:0,height:.55556,italic:0,skew:0},8746:{depth:0,height:.55556,italic:0,skew:0},8747:{depth:.19444,height:.69444,italic:.11111,skew:0},8764:{depth:-.13313,height:.36687,italic:0,skew:0},8768:{depth:.19444,height:.69444,italic:0,skew:0},8771:{depth:-.03625,height:.46375,italic:0,skew:0},8773:{depth:-.022,height:.589,italic:0,skew:0},8776:{depth:-.01688,height:.48312,italic:0,skew:0},8781:{depth:-.03625,height:.46375,italic:0,skew:0},8784:{depth:-.133,height:.67,italic:0,skew:0},8800:{depth:.215,height:.716,italic:0,skew:0},8801:{depth:-.03625,height:.46375,italic:0,skew:0},8804:{depth:.13597,height:.63597,italic:0,skew:0},8805:{depth:.13597,height:.63597,italic:0,skew:0},8810:{depth:.0391,height:.5391,italic:0,skew:0},8811:{depth:.0391,height:.5391,italic:0,skew:0},8826:{depth:.0391,height:.5391,italic:0,skew:0},8827:{depth:.0391,height:.5391,italic:0,skew:0},8834:{depth:.0391,height:.5391,italic:0,skew:0},8835:{depth:.0391,height:.5391,italic:0,skew:0},8838:{depth:.13597,height:.63597,italic:0,skew:0},8839:{depth:.13597,height:.63597,italic:0,skew:0},8846:{depth:0,height:.55556,italic:0,skew:0},8849:{depth:.13597,height:.63597,italic:0,skew:0},8850:{depth:.13597,height:.63597,italic:0,skew:0},8851:{depth:0,height:.55556,italic:0,skew:0},8852:{depth:0,height:.55556,italic:0,skew:0},8853:{depth:.08333,height:.58333,italic:0,skew:0},8854:{depth:.08333,height:.58333,italic:0,skew:0},8855:{depth:.08333,height:.58333,italic:0,skew:0},8856:{depth:.08333,height:.58333,italic:0,skew:0},8857:{depth:.08333,height:.58333,italic:0,skew:0},8866:{depth:0,height:.69444,italic:0,skew:0},8867:{depth:0,height:.69444,italic:0,skew:0},8868:{depth:0,height:.69444,italic:0,skew:0},8869:{depth:0,height:.69444,italic:0,skew:0},8872:{depth:.249,height:.75,italic:0,skew:0},8900:{depth:-.05555,height:.44445,italic:0,skew:0},8901:{depth:-.05555,height:.44445,italic:0,skew:0},8902:{depth:-.03472,height:.46528,italic:0,skew:0},8904:{depth:.005,height:.505,italic:0,skew:0},8942:{depth:.03,height:.9,italic:0,skew:0},8943:{depth:-.19,height:.31,italic:0,skew:0},8945:{depth:-.1,height:.82,italic:0,skew:0},8968:{depth:.25,height:.75,italic:0,skew:0},8969:{depth:.25,height:.75,italic:0,skew:0},8970:{depth:.25,height:.75,italic:0,skew:0},8971:{depth:.25,height:.75,italic:0,skew:0},8994:{depth:-.14236,height:.35764,italic:0,skew:0},8995:{depth:-.14236,height:.35764,italic:0,skew:0},9136:{depth:.244,height:.744,italic:0,skew:0},9137:{depth:.244,height:.744,italic:0,skew:0},9651:{depth:.19444,height:.69444,italic:0,skew:0},9657:{depth:-.03472,height:.46528,italic:0,skew:0},9661:{depth:.19444,height:.69444,italic:0,skew:0},9667:{depth:-.03472,height:.46528,italic:0,skew:0},9711:{depth:.19444,height:.69444,italic:0,skew:0},9824:{depth:.12963,height:.69444,italic:0,skew:0},9825:{depth:.12963,height:.69444,italic:0,skew:0},9826:{depth:.12963,height:.69444,italic:0,skew:0},9827:{depth:.12963,height:.69444,italic:0,skew:0},9837:{depth:0,height:.75,italic:0,skew:0},9838:{depth:.19444,height:.69444,italic:0,skew:0},9839:{depth:.19444,height:.69444,italic:0,skew:0},10216:{depth:.25,height:.75,italic:0,skew:0},10217:{depth:.25,height:.75,italic:0,skew:0},10222:{depth:.244,height:.744,italic:0,skew:0},10223:{depth:.244,height:.744,italic:0,skew:0},10229:{depth:.011,height:.511,italic:0,skew:0},10230:{depth:.011,height:.511,italic:0,skew:0},10231:{depth:.011,height:.511,italic:0,skew:0},10232:{depth:.024,height:.525,italic:0,skew:0},10233:{depth:.024,height:.525,italic:0,skew:0},10234:{depth:.024,height:.525,italic:0,skew:0},10236:{depth:.011,height:.511,italic:0,skew:0},10815:{depth:0,height:.68333,italic:0,skew:0},10927:{depth:.13597,height:.63597,italic:0,skew:0},10928:{depth:.13597,height:.63597,italic:0,skew:0}},\"Math-BoldItalic\":{47:{depth:.19444,height:.69444,italic:0,skew:0},65:{depth:0,height:.68611,italic:0,skew:0},66:{depth:0,height:.68611,italic:.04835,skew:0},67:{depth:0,height:.68611,italic:.06979,skew:0},68:{depth:0,height:.68611,italic:.03194,skew:0},69:{depth:0,height:.68611,italic:.05451,skew:0},70:{depth:0,height:.68611,italic:.15972,skew:0},71:{depth:0,height:.68611,italic:0,skew:0},72:{depth:0,height:.68611,italic:.08229,skew:0},73:{depth:0,height:.68611,italic:.07778,skew:0},74:{depth:0,height:.68611,italic:.10069,skew:0},75:{depth:0,height:.68611,italic:.06979,skew:0},76:{depth:0,height:.68611,italic:0,skew:0},77:{depth:0,height:.68611,italic:.11424,skew:0},78:{depth:0,height:.68611,italic:.11424,skew:0},79:{depth:0,height:.68611,italic:.03194,skew:0},80:{depth:0,height:.68611,italic:.15972,skew:0},81:{depth:.19444,height:.68611,italic:0,skew:0},82:{depth:0,height:.68611,italic:.00421,skew:0},83:{depth:0,height:.68611,italic:.05382,skew:0},84:{depth:0,height:.68611,italic:.15972,skew:0},85:{depth:0,height:.68611,italic:.11424,skew:0},86:{depth:0,height:.68611,italic:.25555,skew:0},87:{depth:0,height:.68611,italic:.15972,skew:0},88:{depth:0,height:.68611,italic:.07778,skew:0},89:{depth:0,height:.68611,italic:.25555,skew:0},90:{depth:0,height:.68611,italic:.06979,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:.19444,height:.69444,italic:.11042,skew:0},103:{depth:.19444,height:.44444,italic:.03704,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.69326,italic:0,skew:0},106:{depth:.19444,height:.69326,italic:.0622,skew:0},107:{depth:0,height:.69444,italic:.01852,skew:0},108:{depth:0,height:.69444,italic:.0088,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:.03704,skew:0},114:{depth:0,height:.44444,italic:.03194,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.63492,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.03704,skew:0},119:{depth:0,height:.44444,italic:.02778,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.03704,skew:0},122:{depth:0,height:.44444,italic:.04213,skew:0},915:{depth:0,height:.68611,italic:.15972,skew:0},916:{depth:0,height:.68611,italic:0,skew:0},920:{depth:0,height:.68611,italic:.03194,skew:0},923:{depth:0,height:.68611,italic:0,skew:0},926:{depth:0,height:.68611,italic:.07458,skew:0},928:{depth:0,height:.68611,italic:.08229,skew:0},931:{depth:0,height:.68611,italic:.05451,skew:0},933:{depth:0,height:.68611,italic:.15972,skew:0},934:{depth:0,height:.68611,italic:0,skew:0},936:{depth:0,height:.68611,italic:.11653,skew:0},937:{depth:0,height:.68611,italic:.04835,skew:0},945:{depth:0,height:.44444,italic:0,skew:0},946:{depth:.19444,height:.69444,italic:.03403,skew:0},947:{depth:.19444,height:.44444,italic:.06389,skew:0},948:{depth:0,height:.69444,italic:.03819,skew:0},949:{depth:0,height:.44444,italic:0,skew:0},950:{depth:.19444,height:.69444,italic:.06215,skew:0},951:{depth:.19444,height:.44444,italic:.03704,skew:0},952:{depth:0,height:.69444,italic:.03194,skew:0},953:{depth:0,height:.44444,italic:0,skew:0},954:{depth:0,height:.44444,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.44444,italic:0,skew:0},957:{depth:0,height:.44444,italic:.06898,skew:0},958:{depth:.19444,height:.69444,italic:.03021,skew:0},959:{depth:0,height:.44444,italic:0,skew:0},960:{depth:0,height:.44444,italic:.03704,skew:0},961:{depth:.19444,height:.44444,italic:0,skew:0},962:{depth:.09722,height:.44444,italic:.07917,skew:0},963:{depth:0,height:.44444,italic:.03704,skew:0},964:{depth:0,height:.44444,italic:.13472,skew:0},965:{depth:0,height:.44444,italic:.03704,skew:0},966:{depth:.19444,height:.44444,italic:0,skew:0},967:{depth:.19444,height:.44444,italic:0,skew:0},968:{depth:.19444,height:.69444,italic:.03704,skew:0},969:{depth:0,height:.44444,italic:.03704,skew:0},977:{depth:0,height:.69444,italic:0,skew:0},981:{depth:.19444,height:.69444,italic:0,skew:0},982:{depth:0,height:.44444,italic:.03194,skew:0},1009:{depth:.19444,height:.44444,italic:0,skew:0},1013:{depth:0,height:.44444,italic:0,skew:0}},\"Math-Italic\":{47:{depth:.19444,height:.69444,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:.13889},66:{depth:0,height:.68333,italic:.05017,skew:.08334},67:{depth:0,height:.68333,italic:.07153,skew:.08334},68:{depth:0,height:.68333,italic:.02778,skew:.05556},69:{depth:0,height:.68333,italic:.05764,skew:.08334},70:{depth:0,height:.68333,italic:.13889,skew:.08334},71:{depth:0,height:.68333,italic:0,skew:.08334},72:{depth:0,height:.68333,italic:.08125,skew:.05556},73:{depth:0,height:.68333,italic:.07847,skew:.11111},74:{depth:0,height:.68333,italic:.09618,skew:.16667},75:{depth:0,height:.68333,italic:.07153,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.02778},77:{depth:0,height:.68333,italic:.10903,skew:.08334},78:{depth:0,height:.68333,italic:.10903,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.08334},80:{depth:0,height:.68333,italic:.13889,skew:.08334},81:{depth:.19444,height:.68333,italic:0,skew:.08334},82:{depth:0,height:.68333,italic:.00773,skew:.08334},83:{depth:0,height:.68333,italic:.05764,skew:.08334},84:{depth:0,height:.68333,italic:.13889,skew:.08334},85:{depth:0,height:.68333,italic:.10903,skew:.02778},86:{depth:0,height:.68333,italic:.22222,skew:0},87:{depth:0,height:.68333,italic:.13889,skew:0},88:{depth:0,height:.68333,italic:.07847,skew:.08334},89:{depth:0,height:.68333,italic:.22222,skew:0},90:{depth:0,height:.68333,italic:.07153,skew:.08334},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:.05556},100:{depth:0,height:.69444,italic:0,skew:.16667},101:{depth:0,height:.43056,italic:0,skew:.05556},102:{depth:.19444,height:.69444,italic:.10764,skew:.16667},103:{depth:.19444,height:.43056,italic:.03588,skew:.02778},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.65952,italic:0,skew:0},106:{depth:.19444,height:.65952,italic:.05724,skew:0},107:{depth:0,height:.69444,italic:.03148,skew:0},108:{depth:0,height:.69444,italic:.01968,skew:.08334},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:.05556},112:{depth:.19444,height:.43056,italic:0,skew:.08334},113:{depth:.19444,height:.43056,italic:.03588,skew:.08334},114:{depth:0,height:.43056,italic:.02778,skew:.05556},115:{depth:0,height:.43056,italic:0,skew:.05556},116:{depth:0,height:.61508,italic:0,skew:.08334},117:{depth:0,height:.43056,italic:0,skew:.02778},118:{depth:0,height:.43056,italic:.03588,skew:.02778},119:{depth:0,height:.43056,italic:.02691,skew:.08334},120:{depth:0,height:.43056,italic:0,skew:.02778},121:{depth:.19444,height:.43056,italic:.03588,skew:.05556},122:{depth:0,height:.43056,italic:.04398,skew:.05556},915:{depth:0,height:.68333,italic:.13889,skew:.08334},916:{depth:0,height:.68333,italic:0,skew:.16667},920:{depth:0,height:.68333,italic:.02778,skew:.08334},923:{depth:0,height:.68333,italic:0,skew:.16667},926:{depth:0,height:.68333,italic:.07569,skew:.08334},928:{depth:0,height:.68333,italic:.08125,skew:.05556},931:{depth:0,height:.68333,italic:.05764,skew:.08334},933:{depth:0,height:.68333,italic:.13889,skew:.05556},934:{depth:0,height:.68333,italic:0,skew:.08334},936:{depth:0,height:.68333,italic:.11,skew:.05556},937:{depth:0,height:.68333,italic:.05017,skew:.08334},945:{depth:0,height:.43056,italic:.0037,skew:.02778},946:{depth:.19444,height:.69444,italic:.05278,skew:.08334},947:{depth:.19444,height:.43056,italic:.05556,skew:0},948:{depth:0,height:.69444,italic:.03785,skew:.05556},949:{depth:0,height:.43056,italic:0,skew:.08334},950:{depth:.19444,height:.69444,italic:.07378,skew:.08334},951:{depth:.19444,height:.43056,italic:.03588,skew:.05556},952:{depth:0,height:.69444,italic:.02778,skew:.08334},953:{depth:0,height:.43056,italic:0,skew:.05556},954:{depth:0,height:.43056,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.43056,italic:0,skew:.02778},957:{depth:0,height:.43056,italic:.06366,skew:.02778},958:{depth:.19444,height:.69444,italic:.04601,skew:.11111},959:{depth:0,height:.43056,italic:0,skew:.05556},960:{depth:0,height:.43056,italic:.03588,skew:0},961:{depth:.19444,height:.43056,italic:0,skew:.08334},962:{depth:.09722,height:.43056,italic:.07986,skew:.08334},963:{depth:0,height:.43056,italic:.03588,skew:0},964:{depth:0,height:.43056,italic:.1132,skew:.02778},965:{depth:0,height:.43056,italic:.03588,skew:.02778},966:{depth:.19444,height:.43056,italic:0,skew:.08334},967:{depth:.19444,height:.43056,italic:0,skew:.05556},968:{depth:.19444,height:.69444,italic:.03588,skew:.11111},969:{depth:0,height:.43056,italic:.03588,skew:0},977:{depth:0,height:.69444,italic:0,skew:.08334},981:{depth:.19444,height:.69444,italic:0,skew:.08334},982:{depth:0,height:.43056,italic:.02778,skew:0},1009:{depth:.19444,height:.43056,italic:0,skew:.08334},1013:{depth:0,height:.43056,italic:0,skew:.05556}},\"Math-Regular\":{65:{depth:0,height:.68333,italic:0,skew:.13889},66:{depth:0,height:.68333,italic:.05017,skew:.08334},67:{depth:0,height:.68333,italic:.07153,skew:.08334},68:{depth:0,height:.68333,italic:.02778,skew:.05556},69:{depth:0,height:.68333,italic:.05764,skew:.08334},70:{depth:0,height:.68333,italic:.13889,skew:.08334},71:{depth:0,height:.68333,italic:0,skew:.08334},72:{depth:0,height:.68333,italic:.08125,skew:.05556},73:{depth:0,height:.68333,italic:.07847,skew:.11111},74:{depth:0,height:.68333,italic:.09618,skew:.16667},75:{depth:0,height:.68333,italic:.07153,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.02778},77:{depth:0,height:.68333,italic:.10903,skew:.08334},78:{depth:0,height:.68333,italic:.10903,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.08334},80:{depth:0,height:.68333,italic:.13889,skew:.08334},81:{depth:.19444,height:.68333,italic:0,skew:.08334},82:{depth:0,height:.68333,italic:.00773,skew:.08334},83:{depth:0,height:.68333,italic:.05764,skew:.08334},84:{depth:0,height:.68333,italic:.13889,skew:.08334},85:{depth:0,height:.68333,italic:.10903,skew:.02778},86:{depth:0,height:.68333,italic:.22222,skew:0},87:{depth:0,height:.68333,italic:.13889,skew:0},88:{depth:0,height:.68333,italic:.07847,skew:.08334},89:{depth:0,height:.68333,italic:.22222,skew:0},90:{depth:0,height:.68333,italic:.07153,skew:.08334},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:.05556},100:{depth:0,height:.69444,italic:0,skew:.16667},101:{depth:0,height:.43056,italic:0,skew:.05556},102:{depth:.19444,height:.69444,italic:.10764,skew:.16667},103:{depth:.19444,height:.43056,italic:.03588,skew:.02778},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.65952,italic:0,skew:0},106:{depth:.19444,height:.65952,italic:.05724,skew:0},107:{depth:0,height:.69444,italic:.03148,skew:0},108:{depth:0,height:.69444,italic:.01968,skew:.08334},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:.05556},112:{depth:.19444,height:.43056,italic:0,skew:.08334},113:{depth:.19444,height:.43056,italic:.03588,skew:.08334},114:{depth:0,height:.43056,italic:.02778,skew:.05556},115:{depth:0,height:.43056,italic:0,skew:.05556},116:{depth:0,height:.61508,italic:0,skew:.08334},117:{depth:0,height:.43056,italic:0,skew:.02778},118:{depth:0,height:.43056,italic:.03588,skew:.02778},119:{depth:0,height:.43056,italic:.02691,skew:.08334},120:{depth:0,height:.43056,italic:0,skew:.02778},121:{depth:.19444,height:.43056,italic:.03588,skew:.05556},122:{depth:0,height:.43056,italic:.04398,skew:.05556},915:{depth:0,height:.68333,italic:.13889,skew:.08334},916:{depth:0,height:.68333,italic:0,skew:.16667},920:{depth:0,height:.68333,italic:.02778,skew:.08334},923:{depth:0,height:.68333,italic:0,skew:.16667},926:{depth:0,height:.68333,italic:.07569,skew:.08334},928:{depth:0,height:.68333,italic:.08125,skew:.05556},931:{depth:0,height:.68333,italic:.05764,skew:.08334},933:{depth:0,height:.68333,italic:.13889,skew:.05556},934:{depth:0,height:.68333,italic:0,skew:.08334},936:{depth:0,height:.68333,italic:.11,skew:.05556},937:{depth:0,height:.68333,italic:.05017,skew:.08334},945:{depth:0,height:.43056,italic:.0037,skew:.02778},946:{depth:.19444,height:.69444,italic:.05278,skew:.08334},947:{depth:.19444,height:.43056,italic:.05556,skew:0},948:{depth:0,height:.69444,italic:.03785,skew:.05556},949:{depth:0,height:.43056,italic:0,skew:.08334},950:{depth:.19444,height:.69444,italic:.07378,skew:.08334},951:{depth:.19444,height:.43056,italic:.03588,skew:.05556},952:{depth:0,height:.69444,italic:.02778,skew:.08334},953:{depth:0,height:.43056,italic:0,skew:.05556},954:{depth:0,height:.43056,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.43056,italic:0,skew:.02778},957:{depth:0,height:.43056,italic:.06366,skew:.02778},958:{depth:.19444,height:.69444,italic:.04601,skew:.11111},959:{depth:0,height:.43056,italic:0,skew:.05556},960:{depth:0,height:.43056,italic:.03588,skew:0},961:{depth:.19444,height:.43056,italic:0,skew:.08334},962:{depth:.09722,height:.43056,italic:.07986,skew:.08334},963:{depth:0,height:.43056,italic:.03588,skew:0},964:{depth:0,height:.43056,italic:.1132,skew:.02778},965:{depth:0,height:.43056,italic:.03588,skew:.02778},966:{depth:.19444,height:.43056,italic:0,skew:.08334},967:{depth:.19444,height:.43056,italic:0,skew:.05556},968:{depth:.19444,height:.69444,italic:.03588,skew:.11111},969:{depth:0,height:.43056,italic:.03588,skew:0},977:{depth:0,height:.69444,italic:0,skew:.08334},981:{depth:.19444,height:.69444,italic:0,skew:.08334},982:{depth:0,height:.43056,italic:.02778,skew:0},1009:{depth:.19444,height:.43056,italic:0,skew:.08334},1013:{depth:0,height:.43056,italic:0,skew:.05556}},\"SansSerif-Regular\":{33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.08333,height:.58333,italic:0,skew:0},44:{depth:.125,height:.08333,italic:0,skew:0},45:{depth:0,height:.44444,italic:0,skew:0},46:{depth:0,height:.08333,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.65556,italic:0,skew:0},49:{depth:0,height:.65556,italic:0,skew:0},50:{depth:0,height:.65556,italic:0,skew:0},51:{depth:0,height:.65556,italic:0,skew:0},52:{depth:0,height:.65556,italic:0,skew:0},53:{depth:0,height:.65556,italic:0,skew:0},54:{depth:0,height:.65556,italic:0,skew:0},55:{depth:0,height:.65556,italic:0,skew:0},56:{depth:0,height:.65556,italic:0,skew:0},57:{depth:0,height:.65556,italic:0,skew:0},58:{depth:0,height:.44444,italic:0,skew:0},59:{depth:.125,height:.44444,italic:0,skew:0},61:{depth:-.13,height:.37,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.69444,italic:0,skew:0},66:{depth:0,height:.69444,italic:0,skew:0},67:{depth:0,height:.69444,italic:0,skew:0},68:{depth:0,height:.69444,italic:0,skew:0},69:{depth:0,height:.69444,italic:0,skew:0},70:{depth:0,height:.69444,italic:0,skew:0},71:{depth:0,height:.69444,italic:0,skew:0},72:{depth:0,height:.69444,italic:0,skew:0},73:{depth:0,height:.69444,italic:0,skew:0},74:{depth:0,height:.69444,italic:0,skew:0},75:{depth:0,height:.69444,italic:0,skew:0},76:{depth:0,height:.69444,italic:0,skew:0},77:{depth:0,height:.69444,italic:0,skew:0},78:{depth:0,height:.69444,italic:0,skew:0},79:{depth:0,height:.69444,italic:0,skew:0},80:{depth:0,height:.69444,italic:0,skew:0},81:{depth:.125,height:.69444,italic:0,skew:0},82:{depth:0,height:.69444,italic:0,skew:0},83:{depth:0,height:.69444,italic:0,skew:0},84:{depth:0,height:.69444,italic:0,skew:0},85:{depth:0,height:.69444,italic:0,skew:0},86:{depth:0,height:.69444,italic:.01389,skew:0},87:{depth:0,height:.69444,italic:.01389,skew:0},88:{depth:0,height:.69444,italic:0,skew:0},89:{depth:0,height:.69444,italic:.025,skew:0},90:{depth:0,height:.69444,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.35,height:.09444,italic:.02778,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:0,height:.69444,italic:.06944,skew:0},103:{depth:.19444,height:.44444,italic:.01389,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.67937,italic:0,skew:0},106:{depth:.19444,height:.67937,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:0,skew:0},114:{depth:0,height:.44444,italic:.01389,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.57143,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.01389,skew:0},119:{depth:0,height:.44444,italic:.01389,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.01389,skew:0},122:{depth:0,height:.44444,italic:0,skew:0},126:{depth:.35,height:.32659,italic:0,skew:0},305:{depth:0,height:.44444,italic:0,skew:0},567:{depth:.19444,height:.44444,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.67659,italic:0,skew:0},772:{depth:0,height:.60889,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.67937,italic:0,skew:0},776:{depth:0,height:.67937,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.63194,italic:0,skew:0},915:{depth:0,height:.69444,italic:0,skew:0},916:{depth:0,height:.69444,italic:0,skew:0},920:{depth:0,height:.69444,italic:0,skew:0},923:{depth:0,height:.69444,italic:0,skew:0},926:{depth:0,height:.69444,italic:0,skew:0},928:{depth:0,height:.69444,italic:0,skew:0},931:{depth:0,height:.69444,italic:0,skew:0},933:{depth:0,height:.69444,italic:0,skew:0},934:{depth:0,height:.69444,italic:0,skew:0},936:{depth:0,height:.69444,italic:0,skew:0},937:{depth:0,height:.69444,italic:0,skew:0},8211:{depth:0,height:.44444,italic:.02778,skew:0},8212:{depth:0,height:.44444,italic:.02778,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0}},\"Script-Regular\":{65:{depth:0,height:.7,italic:.22925,skew:0},66:{depth:0,height:.7,italic:.04087,skew:0},67:{depth:0,height:.7,italic:.1689,skew:0},68:{depth:0,height:.7,italic:.09371,skew:0},69:{depth:0,height:.7,italic:.18583,skew:0},70:{depth:0,height:.7,italic:.13634,skew:0},71:{depth:0,height:.7,italic:.17322,skew:0},72:{depth:0,height:.7,italic:.29694,skew:0},73:{depth:0,height:.7,italic:.19189,skew:0},74:{depth:.27778,height:.7,italic:.19189,skew:0},75:{depth:0,height:.7,italic:.31259,skew:0},76:{depth:0,height:.7,italic:.19189,skew:0},77:{depth:0,height:.7,italic:.15981,skew:0},78:{depth:0,height:.7,italic:.3525,skew:0},79:{depth:0,height:.7,italic:.08078,skew:0},80:{depth:0,height:.7,italic:.08078,skew:0},81:{depth:0,height:.7,italic:.03305,skew:0},82:{depth:0,height:.7,italic:.06259,skew:0},83:{depth:0,height:.7,italic:.19189,skew:0},84:{depth:0,height:.7,italic:.29087,skew:0},85:{depth:0,height:.7,italic:.25815,skew:0},86:{depth:0,height:.7,italic:.27523,skew:0},87:{depth:0,height:.7,italic:.27523,skew:0},88:{depth:0,height:.7,italic:.26006,skew:0},89:{depth:0,height:.7,italic:.2939,skew:0},90:{depth:0,height:.7,italic:.24037,skew:0}},\"Size1-Regular\":{40:{depth:.35001,height:.85,italic:0,skew:0},41:{depth:.35001,height:.85,italic:0,skew:0},47:{depth:.35001,height:.85,italic:0,skew:0},91:{depth:.35001,height:.85,italic:0,skew:0},92:{depth:.35001,height:.85,italic:0,skew:0},93:{depth:.35001,height:.85,italic:0,skew:0},123:{depth:.35001,height:.85,italic:0,skew:0},125:{depth:.35001,height:.85,italic:0,skew:0},710:{depth:0,height:.72222,italic:0,skew:0},732:{depth:0,height:.72222,italic:0,skew:0},770:{depth:0,height:.72222,italic:0,skew:0},771:{depth:0,height:.72222,italic:0,skew:0},8214:{depth:-99e-5,height:.601,italic:0,skew:0},8593:{depth:1e-5,height:.6,italic:0,skew:0},8595:{depth:1e-5,height:.6,italic:0,skew:0},8657:{depth:1e-5,height:.6,italic:0,skew:0},8659:{depth:1e-5,height:.6,italic:0,skew:0},8719:{depth:.25001,height:.75,italic:0,skew:0},8720:{depth:.25001,height:.75,italic:0,skew:0},8721:{depth:.25001,height:.75,italic:0,skew:0},8730:{depth:.35001,height:.85,italic:0,skew:0},8739:{depth:-.00599,height:.606,italic:0,skew:0},8741:{depth:-.00599,height:.606,italic:0,skew:0},8747:{depth:.30612,height:.805,italic:.19445,skew:0},8748:{depth:.306,height:.805,italic:.19445,skew:0},8749:{depth:.306,height:.805,italic:.19445,skew:0},8750:{depth:.30612,height:.805,italic:.19445,skew:0},8896:{depth:.25001,height:.75,italic:0,skew:0},8897:{depth:.25001,height:.75,italic:0,skew:0},8898:{depth:.25001,height:.75,italic:0,skew:0},8899:{depth:.25001,height:.75,italic:0,skew:0},8968:{depth:.35001,height:.85,italic:0,skew:0},8969:{depth:.35001,height:.85,italic:0,skew:0},8970:{depth:.35001,height:.85,italic:0,skew:0},8971:{depth:.35001,height:.85,italic:0,skew:0},9168:{depth:-99e-5,height:.601,italic:0,skew:0},10216:{depth:.35001,height:.85,italic:0,skew:0},10217:{depth:.35001,height:.85,italic:0,skew:0},10752:{depth:.25001,height:.75,italic:0,skew:0},10753:{depth:.25001,height:.75,italic:0,skew:0},10754:{depth:.25001,height:.75,italic:0,skew:0},10756:{depth:.25001,height:.75,italic:0,skew:0},10758:{depth:.25001,height:.75,italic:0,skew:0}},\"Size2-Regular\":{40:{depth:.65002,height:1.15,italic:0,skew:0},41:{depth:.65002,height:1.15,italic:0,skew:0},47:{depth:.65002,height:1.15,italic:0,skew:0},91:{depth:.65002,height:1.15,italic:0,skew:0},92:{depth:.65002,height:1.15,italic:0,skew:0},93:{depth:.65002,height:1.15,italic:0,skew:0},123:{depth:.65002,height:1.15,italic:0,skew:0},125:{depth:.65002,height:1.15,italic:0,skew:0},710:{depth:0,height:.75,italic:0,skew:0},732:{depth:0,height:.75,italic:0,skew:0},770:{depth:0,height:.75,italic:0,skew:0},771:{depth:0,height:.75,italic:0,skew:0},8719:{depth:.55001,height:1.05,italic:0,skew:0},8720:{depth:.55001,height:1.05,italic:0,skew:0},8721:{depth:.55001,height:1.05,italic:0,skew:0},8730:{depth:.65002,height:1.15,italic:0,skew:0},8747:{depth:.86225,height:1.36,italic:.44445,skew:0},8748:{depth:.862,height:1.36,italic:.44445,skew:0},8749:{depth:.862,height:1.36,italic:.44445,skew:0},8750:{depth:.86225,height:1.36,italic:.44445,skew:0},8896:{depth:.55001,height:1.05,italic:0,skew:0},8897:{depth:.55001,height:1.05,italic:0,skew:0},8898:{depth:.55001,height:1.05,italic:0,skew:0},8899:{depth:.55001,height:1.05,italic:0,skew:0},8968:{depth:.65002,height:1.15,italic:0,skew:0},8969:{depth:.65002,height:1.15,italic:0,skew:0},8970:{depth:.65002,height:1.15,italic:0,skew:0},8971:{depth:.65002,height:1.15,italic:0,skew:0},10216:{depth:.65002,height:1.15,italic:0,skew:0},10217:{depth:.65002,height:1.15,italic:0,skew:0},10752:{depth:.55001,height:1.05,italic:0,skew:0},10753:{depth:.55001,height:1.05,italic:0,skew:0},10754:{depth:.55001,height:1.05,italic:0,skew:0},10756:{depth:.55001,height:1.05,italic:0,skew:0},10758:{depth:.55001,height:1.05,italic:0,skew:0}},\"Size3-Regular\":{40:{depth:.95003,height:1.45,italic:0,skew:0},41:{depth:.95003,height:1.45,italic:0,skew:0},47:{depth:.95003,height:1.45,italic:0,skew:0},91:{depth:.95003,height:1.45,italic:0,skew:0},92:{depth:.95003,height:1.45,italic:0,skew:0},93:{depth:.95003,height:1.45,italic:0,skew:0},123:{depth:.95003,height:1.45,italic:0,skew:0},125:{depth:.95003,height:1.45,italic:0,skew:0},710:{depth:0,height:.75,italic:0,skew:0},732:{depth:0,height:.75,italic:0,skew:0},770:{depth:0,height:.75,italic:0,skew:0},771:{depth:0,height:.75,italic:0,skew:0},8730:{depth:.95003,height:1.45,italic:0,skew:0},8968:{depth:.95003,height:1.45,italic:0,skew:0},8969:{depth:.95003,height:1.45,italic:0,skew:0},8970:{depth:.95003,height:1.45,italic:0,skew:0},8971:{depth:.95003,height:1.45,italic:0,skew:0},10216:{depth:.95003,height:1.45,italic:0,skew:0},10217:{depth:.95003,height:1.45,italic:0,skew:0}},\"Size4-Regular\":{40:{depth:1.25003,height:1.75,italic:0,skew:0},41:{depth:1.25003,height:1.75,italic:0,skew:0},47:{depth:1.25003,height:1.75,italic:0,skew:0},91:{depth:1.25003,height:1.75,italic:0,skew:0},92:{depth:1.25003,height:1.75,italic:0,skew:0},93:{depth:1.25003,height:1.75,italic:0,skew:0},123:{depth:1.25003,height:1.75,italic:0,skew:0},125:{depth:1.25003,height:1.75,italic:0,skew:0},710:{depth:0,height:.825,italic:0,skew:0},732:{depth:0,height:.825,italic:0,skew:0},770:{depth:0,height:.825,italic:0,skew:0},771:{depth:0,height:.825,italic:0,skew:0},8730:{depth:1.25003,height:1.75,italic:0,skew:0},8968:{depth:1.25003,height:1.75,italic:0,skew:0},8969:{depth:1.25003,height:1.75,italic:0,skew:0},8970:{depth:1.25003,height:1.75,italic:0,skew:0},8971:{depth:1.25003,height:1.75,italic:0,skew:0},9115:{depth:.64502,height:1.155,italic:0,skew:0},9116:{depth:1e-5,height:.6,italic:0,skew:0},9117:{depth:.64502,height:1.155,italic:0,skew:0},9118:{depth:.64502,height:1.155,italic:0,skew:0},9119:{depth:1e-5,height:.6,italic:0,skew:0},9120:{depth:.64502,height:1.155,italic:0,skew:0},9121:{depth:.64502,height:1.155,italic:0,skew:0},9122:{depth:-99e-5,height:.601,italic:0,skew:0},9123:{depth:.64502,height:1.155,italic:0,skew:0},9124:{depth:.64502,height:1.155,italic:0,skew:0},9125:{depth:-99e-5,height:.601,italic:0,\nskew:0},9126:{depth:.64502,height:1.155,italic:0,skew:0},9127:{depth:1e-5,height:.9,italic:0,skew:0},9128:{depth:.65002,height:1.15,italic:0,skew:0},9129:{depth:.90001,height:0,italic:0,skew:0},9130:{depth:0,height:.3,italic:0,skew:0},9131:{depth:1e-5,height:.9,italic:0,skew:0},9132:{depth:.65002,height:1.15,italic:0,skew:0},9133:{depth:.90001,height:0,italic:0,skew:0},9143:{depth:.88502,height:.915,italic:0,skew:0},10216:{depth:1.25003,height:1.75,italic:0,skew:0},10217:{depth:1.25003,height:1.75,italic:0,skew:0},57344:{depth:-.00499,height:.605,italic:0,skew:0},57345:{depth:-.00499,height:.605,italic:0,skew:0},57680:{depth:0,height:.12,italic:0,skew:0},57681:{depth:0,height:.12,italic:0,skew:0},57682:{depth:0,height:.12,italic:0,skew:0},57683:{depth:0,height:.12,italic:0,skew:0}},\"Typewriter-Regular\":{33:{depth:0,height:.61111,italic:0,skew:0},34:{depth:0,height:.61111,italic:0,skew:0},35:{depth:0,height:.61111,italic:0,skew:0},36:{depth:.08333,height:.69444,italic:0,skew:0},37:{depth:.08333,height:.69444,italic:0,skew:0},38:{depth:0,height:.61111,italic:0,skew:0},39:{depth:0,height:.61111,italic:0,skew:0},40:{depth:.08333,height:.69444,italic:0,skew:0},41:{depth:.08333,height:.69444,italic:0,skew:0},42:{depth:0,height:.52083,italic:0,skew:0},43:{depth:-.08056,height:.53055,italic:0,skew:0},44:{depth:.13889,height:.125,italic:0,skew:0},45:{depth:-.08056,height:.53055,italic:0,skew:0},46:{depth:0,height:.125,italic:0,skew:0},47:{depth:.08333,height:.69444,italic:0,skew:0},48:{depth:0,height:.61111,italic:0,skew:0},49:{depth:0,height:.61111,italic:0,skew:0},50:{depth:0,height:.61111,italic:0,skew:0},51:{depth:0,height:.61111,italic:0,skew:0},52:{depth:0,height:.61111,italic:0,skew:0},53:{depth:0,height:.61111,italic:0,skew:0},54:{depth:0,height:.61111,italic:0,skew:0},55:{depth:0,height:.61111,italic:0,skew:0},56:{depth:0,height:.61111,italic:0,skew:0},57:{depth:0,height:.61111,italic:0,skew:0},58:{depth:0,height:.43056,italic:0,skew:0},59:{depth:.13889,height:.43056,italic:0,skew:0},60:{depth:-.05556,height:.55556,italic:0,skew:0},61:{depth:-.19549,height:.41562,italic:0,skew:0},62:{depth:-.05556,height:.55556,italic:0,skew:0},63:{depth:0,height:.61111,italic:0,skew:0},64:{depth:0,height:.61111,italic:0,skew:0},65:{depth:0,height:.61111,italic:0,skew:0},66:{depth:0,height:.61111,italic:0,skew:0},67:{depth:0,height:.61111,italic:0,skew:0},68:{depth:0,height:.61111,italic:0,skew:0},69:{depth:0,height:.61111,italic:0,skew:0},70:{depth:0,height:.61111,italic:0,skew:0},71:{depth:0,height:.61111,italic:0,skew:0},72:{depth:0,height:.61111,italic:0,skew:0},73:{depth:0,height:.61111,italic:0,skew:0},74:{depth:0,height:.61111,italic:0,skew:0},75:{depth:0,height:.61111,italic:0,skew:0},76:{depth:0,height:.61111,italic:0,skew:0},77:{depth:0,height:.61111,italic:0,skew:0},78:{depth:0,height:.61111,italic:0,skew:0},79:{depth:0,height:.61111,italic:0,skew:0},80:{depth:0,height:.61111,italic:0,skew:0},81:{depth:.13889,height:.61111,italic:0,skew:0},82:{depth:0,height:.61111,italic:0,skew:0},83:{depth:0,height:.61111,italic:0,skew:0},84:{depth:0,height:.61111,italic:0,skew:0},85:{depth:0,height:.61111,italic:0,skew:0},86:{depth:0,height:.61111,italic:0,skew:0},87:{depth:0,height:.61111,italic:0,skew:0},88:{depth:0,height:.61111,italic:0,skew:0},89:{depth:0,height:.61111,italic:0,skew:0},90:{depth:0,height:.61111,italic:0,skew:0},91:{depth:.08333,height:.69444,italic:0,skew:0},92:{depth:.08333,height:.69444,italic:0,skew:0},93:{depth:.08333,height:.69444,italic:0,skew:0},94:{depth:0,height:.61111,italic:0,skew:0},95:{depth:.09514,height:0,italic:0,skew:0},96:{depth:0,height:.61111,italic:0,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.61111,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:0},100:{depth:0,height:.61111,italic:0,skew:0},101:{depth:0,height:.43056,italic:0,skew:0},102:{depth:0,height:.61111,italic:0,skew:0},103:{depth:.22222,height:.43056,italic:0,skew:0},104:{depth:0,height:.61111,italic:0,skew:0},105:{depth:0,height:.61111,italic:0,skew:0},106:{depth:.22222,height:.61111,italic:0,skew:0},107:{depth:0,height:.61111,italic:0,skew:0},108:{depth:0,height:.61111,italic:0,skew:0},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:0},112:{depth:.22222,height:.43056,italic:0,skew:0},113:{depth:.22222,height:.43056,italic:0,skew:0},114:{depth:0,height:.43056,italic:0,skew:0},115:{depth:0,height:.43056,italic:0,skew:0},116:{depth:0,height:.55358,italic:0,skew:0},117:{depth:0,height:.43056,italic:0,skew:0},118:{depth:0,height:.43056,italic:0,skew:0},119:{depth:0,height:.43056,italic:0,skew:0},120:{depth:0,height:.43056,italic:0,skew:0},121:{depth:.22222,height:.43056,italic:0,skew:0},122:{depth:0,height:.43056,italic:0,skew:0},123:{depth:.08333,height:.69444,italic:0,skew:0},124:{depth:.08333,height:.69444,italic:0,skew:0},125:{depth:.08333,height:.69444,italic:0,skew:0},126:{depth:0,height:.61111,italic:0,skew:0},127:{depth:0,height:.61111,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:0},567:{depth:.22222,height:.43056,italic:0,skew:0},768:{depth:0,height:.61111,italic:0,skew:0},769:{depth:0,height:.61111,italic:0,skew:0},770:{depth:0,height:.61111,italic:0,skew:0},771:{depth:0,height:.61111,italic:0,skew:0},772:{depth:0,height:.56555,italic:0,skew:0},774:{depth:0,height:.61111,italic:0,skew:0},776:{depth:0,height:.61111,italic:0,skew:0},778:{depth:0,height:.61111,italic:0,skew:0},780:{depth:0,height:.56597,italic:0,skew:0},915:{depth:0,height:.61111,italic:0,skew:0},916:{depth:0,height:.61111,italic:0,skew:0},920:{depth:0,height:.61111,italic:0,skew:0},923:{depth:0,height:.61111,italic:0,skew:0},926:{depth:0,height:.61111,italic:0,skew:0},928:{depth:0,height:.61111,italic:0,skew:0},931:{depth:0,height:.61111,italic:0,skew:0},933:{depth:0,height:.61111,italic:0,skew:0},934:{depth:0,height:.61111,italic:0,skew:0},936:{depth:0,height:.61111,italic:0,skew:0},937:{depth:0,height:.61111,italic:0,skew:0},2018:{depth:0,height:.61111,italic:0,skew:0},2019:{depth:0,height:.61111,italic:0,skew:0},8242:{depth:0,height:.61111,italic:0,skew:0}}}},{}],18:[function(e,t,i){var h=e(\"./utils\");var a=e(\"./ParseError\");var r={\"\\\\sqrt\":{numArgs:1,numOptionalArgs:1,handler:function(e,t,i,h){return{type:\"sqrt\",body:i,index:t}}},\"\\\\text\":{numArgs:1,argTypes:[\"text\"],greediness:2,handler:function(e,t){var i;if(t.type===\"ordgroup\"){i=t.value}else{i=[t]}return{type:\"text\",body:i}}},\"\\\\color\":{numArgs:2,allowedInText:true,greediness:3,argTypes:[\"color\",\"original\"],handler:function(e,t,i){var h;if(i.type===\"ordgroup\"){h=i.value}else{h=[i]}return{type:\"color\",color:t.value,value:h}}},\"\\\\overline\":{numArgs:1,handler:function(e,t){return{type:\"overline\",body:t}}},\"\\\\rule\":{numArgs:2,numOptionalArgs:1,argTypes:[\"size\",\"size\",\"size\"],handler:function(e,t,i,h){return{type:\"rule\",shift:t&&t.value,width:i.value,height:h.value}}},\"\\\\KaTeX\":{numArgs:0,handler:function(e){return{type:\"katex\"}}},\"\\\\phantom\":{numArgs:1,handler:function(e,t){var i;if(t.type===\"ordgroup\"){i=t.value}else{i=[t]}return{type:\"phantom\",value:i}}}};var l={\"\\\\bigl\":{type:\"open\",size:1},\"\\\\Bigl\":{type:\"open\",size:2},\"\\\\biggl\":{type:\"open\",size:3},\"\\\\Biggl\":{type:\"open\",size:4},\"\\\\bigr\":{type:\"close\",size:1},\"\\\\Bigr\":{type:\"close\",size:2},\"\\\\biggr\":{type:\"close\",size:3},\"\\\\Biggr\":{type:\"close\",size:4},\"\\\\bigm\":{type:\"rel\",size:1},\"\\\\Bigm\":{type:\"rel\",size:2},\"\\\\biggm\":{type:\"rel\",size:3},\"\\\\Biggm\":{type:\"rel\",size:4},\"\\\\big\":{type:\"textord\",size:1},\"\\\\Big\":{type:\"textord\",size:2},\"\\\\bigg\":{type:\"textord\",size:3},\"\\\\Bigg\":{type:\"textord\",size:4}};var s=[\"(\",\")\",\"[\",\"\\\\lbrack\",\"]\",\"\\\\rbrack\",\"\\\\{\",\"\\\\lbrace\",\"\\\\}\",\"\\\\rbrace\",\"\\\\lfloor\",\"\\\\rfloor\",\"\\\\lceil\",\"\\\\rceil\",\"<\",\">\",\"\\\\langle\",\"\\\\rangle\",\"\\\\lvert\",\"\\\\rvert\",\"\\\\lVert\",\"\\\\rVert\",\"\\\\lgroup\",\"\\\\rgroup\",\"\\\\lmoustache\",\"\\\\rmoustache\",\"/\",\"\\\\backslash\",\"|\",\"\\\\vert\",\"\\\\|\",\"\\\\Vert\",\"\\\\uparrow\",\"\\\\Uparrow\",\"\\\\downarrow\",\"\\\\Downarrow\",\"\\\\updownarrow\",\"\\\\Updownarrow\",\".\"];var p={\"\\\\Bbb\":\"\\\\mathbb\",\"\\\\bold\":\"\\\\mathbf\",\"\\\\frak\":\"\\\\mathfrak\"};var c=[{funcs:[\"\\\\blue\",\"\\\\orange\",\"\\\\pink\",\"\\\\red\",\"\\\\green\",\"\\\\gray\",\"\\\\purple\",\"\\\\blueA\",\"\\\\blueB\",\"\\\\blueC\",\"\\\\blueD\",\"\\\\blueE\",\"\\\\tealA\",\"\\\\tealB\",\"\\\\tealC\",\"\\\\tealD\",\"\\\\tealE\",\"\\\\greenA\",\"\\\\greenB\",\"\\\\greenC\",\"\\\\greenD\",\"\\\\greenE\",\"\\\\goldA\",\"\\\\goldB\",\"\\\\goldC\",\"\\\\goldD\",\"\\\\goldE\",\"\\\\redA\",\"\\\\redB\",\"\\\\redC\",\"\\\\redD\",\"\\\\redE\",\"\\\\maroonA\",\"\\\\maroonB\",\"\\\\maroonC\",\"\\\\maroonD\",\"\\\\maroonE\",\"\\\\purpleA\",\"\\\\purpleB\",\"\\\\purpleC\",\"\\\\purpleD\",\"\\\\purpleE\",\"\\\\mintA\",\"\\\\mintB\",\"\\\\mintC\",\"\\\\grayA\",\"\\\\grayB\",\"\\\\grayC\",\"\\\\grayD\",\"\\\\grayE\",\"\\\\grayF\",\"\\\\grayG\",\"\\\\grayH\",\"\\\\grayI\",\"\\\\kaBlue\",\"\\\\kaGreen\"],data:{numArgs:1,allowedInText:true,greediness:3,handler:function(e,t){var i;if(t.type===\"ordgroup\"){i=t.value}else{i=[t]}return{type:\"color\",color:\"katex-\"+e.slice(1),value:i}}}},{funcs:[\"\\\\arcsin\",\"\\\\arccos\",\"\\\\arctan\",\"\\\\arg\",\"\\\\cos\",\"\\\\cosh\",\"\\\\cot\",\"\\\\coth\",\"\\\\csc\",\"\\\\deg\",\"\\\\dim\",\"\\\\exp\",\"\\\\hom\",\"\\\\ker\",\"\\\\lg\",\"\\\\ln\",\"\\\\log\",\"\\\\sec\",\"\\\\sin\",\"\\\\sinh\",\"\\\\tan\",\"\\\\tanh\"],data:{numArgs:0,handler:function(e){return{type:\"op\",limits:false,symbol:false,body:e}}}},{funcs:[\"\\\\det\",\"\\\\gcd\",\"\\\\inf\",\"\\\\lim\",\"\\\\liminf\",\"\\\\limsup\",\"\\\\max\",\"\\\\min\",\"\\\\Pr\",\"\\\\sup\"],data:{numArgs:0,handler:function(e){return{type:\"op\",limits:true,symbol:false,body:e}}}},{funcs:[\"\\\\int\",\"\\\\iint\",\"\\\\iiint\",\"\\\\oint\"],data:{numArgs:0,handler:function(e){return{type:\"op\",limits:false,symbol:true,body:e}}}},{funcs:[\"\\\\coprod\",\"\\\\bigvee\",\"\\\\bigwedge\",\"\\\\biguplus\",\"\\\\bigcap\",\"\\\\bigcup\",\"\\\\intop\",\"\\\\prod\",\"\\\\sum\",\"\\\\bigotimes\",\"\\\\bigoplus\",\"\\\\bigodot\",\"\\\\bigsqcup\",\"\\\\smallint\"],data:{numArgs:0,handler:function(e){return{type:\"op\",limits:true,symbol:true,body:e}}}},{funcs:[\"\\\\dfrac\",\"\\\\frac\",\"\\\\tfrac\",\"\\\\dbinom\",\"\\\\binom\",\"\\\\tbinom\"],data:{numArgs:2,greediness:2,handler:function(e,t,i){var h;var a=null;var r=null;var l=\"auto\";switch(e){case\"\\\\dfrac\":case\"\\\\frac\":case\"\\\\tfrac\":h=true;break;case\"\\\\dbinom\":case\"\\\\binom\":case\"\\\\tbinom\":h=false;a=\"(\";r=\")\";break;default:throw new Error(\"Unrecognized genfrac command\")}switch(e){case\"\\\\dfrac\":case\"\\\\dbinom\":l=\"display\";break;case\"\\\\tfrac\":case\"\\\\tbinom\":l=\"text\";break}return{type:\"genfrac\",numer:t,denom:i,hasBarLine:h,leftDelim:a,rightDelim:r,size:l}}}},{funcs:[\"\\\\llap\",\"\\\\rlap\"],data:{numArgs:1,allowedInText:true,handler:function(e,t){return{type:e.slice(1),body:t}}}},{funcs:[\"\\\\bigl\",\"\\\\Bigl\",\"\\\\biggl\",\"\\\\Biggl\",\"\\\\bigr\",\"\\\\Bigr\",\"\\\\biggr\",\"\\\\Biggr\",\"\\\\bigm\",\"\\\\Bigm\",\"\\\\biggm\",\"\\\\Biggm\",\"\\\\big\",\"\\\\Big\",\"\\\\bigg\",\"\\\\Bigg\",\"\\\\left\",\"\\\\right\"],data:{numArgs:1,handler:function(e,t,i){if(!h.contains(s,t.value)){throw new a(\"Invalid delimiter: '\"+t.value+\"' after '\"+e+\"'\",this.lexer,i[1])}if(e===\"\\\\left\"||e===\"\\\\right\"){return{type:\"leftright\",value:t.value}}else{return{type:\"delimsizing\",size:l[e].size,delimType:l[e].type,value:t.value}}}}},{funcs:[\"\\\\tiny\",\"\\\\scriptsize\",\"\\\\footnotesize\",\"\\\\small\",\"\\\\normalsize\",\"\\\\large\",\"\\\\Large\",\"\\\\LARGE\",\"\\\\huge\",\"\\\\Huge\"],data:{numArgs:0}},{funcs:[\"\\\\displaystyle\",\"\\\\textstyle\",\"\\\\scriptstyle\",\"\\\\scriptscriptstyle\"],data:{numArgs:0}},{funcs:[\"\\\\mathrm\",\"\\\\mathit\",\"\\\\mathbf\",\"\\\\mathbb\",\"\\\\mathcal\",\"\\\\mathfrak\",\"\\\\mathscr\",\"\\\\mathsf\",\"\\\\mathtt\",\"\\\\Bbb\",\"\\\\bold\",\"\\\\frak\"],data:{numArgs:1,handler:function(e,t){if(e in p){e=p[e]}return{type:\"font\",font:e.slice(1),body:t}}}},{funcs:[\"\\\\acute\",\"\\\\grave\",\"\\\\ddot\",\"\\\\tilde\",\"\\\\bar\",\"\\\\breve\",\"\\\\check\",\"\\\\hat\",\"\\\\vec\",\"\\\\dot\"],data:{numArgs:1,handler:function(e,t){return{type:\"accent\",accent:e,base:t}}}},{funcs:[\"\\\\over\",\"\\\\choose\"],data:{numArgs:0,handler:function(e){var t;switch(e){case\"\\\\over\":t=\"\\\\frac\";break;case\"\\\\choose\":t=\"\\\\binom\";break;default:throw new Error(\"Unrecognized infix genfrac command\")}return{type:\"infix\",replaceWith:t}}}},{funcs:[\"\\\\\\\\\",\"\\\\cr\"],data:{numArgs:0,numOptionalArgs:1,argTypes:[\"size\"],handler:function(e,t){return{type:\"cr\",size:t}}}},{funcs:[\"\\\\begin\",\"\\\\end\"],data:{numArgs:1,argTypes:[\"text\"],handler:function(e,t,i){if(t.type!==\"ordgroup\"){throw new a(\"Invalid environment name\",this.lexer,i[1])}var h=\"\";for(var r=0;r<t.value.length;++r){h+=t.value[r].value}return{type:\"environment\",name:h,namepos:i[1]}}}}];var n=function(e,t){for(var i=0;i<e.length;i++){r[e[i]]=t}};for(var o=0;o<c.length;o++){n(c[o].funcs,c[o].data)}for(var g in r){if(r.hasOwnProperty(g)){var d=r[g];r[g]={numArgs:d.numArgs,argTypes:d.argTypes,greediness:d.greediness===undefined?1:d.greediness,allowedInText:d.allowedInText?d.allowedInText:false,numOptionalArgs:d.numOptionalArgs===undefined?0:d.numOptionalArgs,handler:d.handler}}}t.exports={funcs:r}},{\"./ParseError\":5,\"./utils\":23}],19:[function(e,t,i){var h=e(\"./utils\");function a(e,t){this.type=e;this.attributes={};this.children=t||[]}a.prototype.setAttribute=function(e,t){this.attributes[e]=t};a.prototype.toNode=function(){var e=document.createElementNS(\"http://www.w3.org/1998/Math/MathML\",this.type);for(var t in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,t)){e.setAttribute(t,this.attributes[t])}}for(var i=0;i<this.children.length;i++){e.appendChild(this.children[i].toNode())}return e};a.prototype.toMarkup=function(){var e=\"<\"+this.type;for(var t in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,t)){e+=\" \"+t+'=\"';e+=h.escape(this.attributes[t]);e+='\"'}}e+=\">\";for(var i=0;i<this.children.length;i++){e+=this.children[i].toMarkup()}e+=\"</\"+this.type+\">\";return e};function r(e){this.text=e}r.prototype.toNode=function(){return document.createTextNode(this.text)};r.prototype.toMarkup=function(){return h.escape(this.text)};t.exports={MathNode:a,TextNode:r}},{\"./utils\":23}],20:[function(e,t,i){function h(e,t,i){this.type=e;this.value=t;this.mode=i}function a(e,t,i){this.result=e;this.position=t}t.exports={ParseNode:h,ParseResult:a}},{}],21:[function(e,t,i){var h=e(\"./Parser\");var a=function(e,t){var i=new h(e,t);return i.parse()};t.exports=a},{\"./Parser\":6}],22:[function(e,t,i){var h={math:{\"\\\\equiv\":{font:\"main\",group:\"rel\",replace:\"\\u2261\"},\"\\\\prec\":{font:\"main\",group:\"rel\",replace:\"\\u227a\"},\"\\\\succ\":{font:\"main\",group:\"rel\",replace:\"\\u227b\"},\"\\\\sim\":{font:\"main\",group:\"rel\",replace:\"\\u223c\"},\"\\\\perp\":{font:\"main\",group:\"rel\",replace:\"\\u22a5\"},\"\\\\preceq\":{font:\"main\",group:\"rel\",replace:\"\\u2aaf\"},\"\\\\succeq\":{font:\"main\",group:\"rel\",replace:\"\\u2ab0\"},\"\\\\simeq\":{font:\"main\",group:\"rel\",replace:\"\\u2243\"},\"\\\\mid\":{font:\"main\",group:\"rel\",replace:\"\\u2223\"},\"\\\\ll\":{font:\"main\",group:\"rel\",replace:\"\\u226a\"},\"\\\\gg\":{font:\"main\",group:\"rel\",replace:\"\\u226b\"},\"\\\\asymp\":{font:\"main\",group:\"rel\",replace:\"\\u224d\"},\"\\\\parallel\":{font:\"main\",group:\"rel\",replace:\"\\u2225\"},\"\\\\bowtie\":{font:\"main\",group:\"rel\",replace:\"\\u22c8\"},\"\\\\smile\":{font:\"main\",group:\"rel\",replace:\"\\u2323\"},\"\\\\sqsubseteq\":{font:\"main\",group:\"rel\",replace:\"\\u2291\"},\"\\\\sqsupseteq\":{font:\"main\",group:\"rel\",replace:\"\\u2292\"},\"\\\\doteq\":{font:\"main\",group:\"rel\",replace:\"\\u2250\"},\"\\\\frown\":{font:\"main\",group:\"rel\",replace:\"\\u2322\"},\"\\\\ni\":{font:\"main\",group:\"rel\",replace:\"\\u220b\"},\"\\\\propto\":{font:\"main\",group:\"rel\",replace:\"\\u221d\"},\"\\\\vdash\":{font:\"main\",group:\"rel\",replace:\"\\u22a2\"},\"\\\\dashv\":{font:\"main\",group:\"rel\",replace:\"\\u22a3\"},\"\\\\owns\":{font:\"main\",group:\"rel\",replace:\"\\u220b\"},\"\\\\ldotp\":{font:\"main\",group:\"punct\",replace:\".\"},\"\\\\cdotp\":{font:\"main\",group:\"punct\",replace:\"\\u22c5\"},\"\\\\#\":{font:\"main\",group:\"textord\",replace:\"#\"},\"\\\\&\":{font:\"main\",group:\"textord\",replace:\"&\"},\"\\\\aleph\":{font:\"main\",group:\"textord\",replace:\"\\u2135\"},\"\\\\forall\":{font:\"main\",group:\"textord\",replace:\"\\u2200\"},\"\\\\hbar\":{font:\"main\",group:\"textord\",replace:\"\\u210f\"},\"\\\\exists\":{font:\"main\",group:\"textord\",replace:\"\\u2203\"},\"\\\\nabla\":{font:\"main\",group:\"textord\",replace:\"\\u2207\"},\"\\\\flat\":{font:\"main\",group:\"textord\",replace:\"\\u266d\"},\"\\\\ell\":{font:\"main\",group:\"textord\",replace:\"\\u2113\"},\"\\\\natural\":{font:\"main\",group:\"textord\",replace:\"\\u266e\"},\"\\\\clubsuit\":{font:\"main\",group:\"textord\",replace:\"\\u2663\"},\"\\\\wp\":{font:\"main\",group:\"textord\",replace:\"\\u2118\"},\"\\\\sharp\":{font:\"main\",group:\"textord\",replace:\"\\u266f\"},\"\\\\diamondsuit\":{font:\"main\",group:\"textord\",replace:\"\\u2662\"},\"\\\\Re\":{font:\"main\",group:\"textord\",replace:\"\\u211c\"},\"\\\\heartsuit\":{font:\"main\",group:\"textord\",replace:\"\\u2661\"},\"\\\\Im\":{font:\"main\",group:\"textord\",replace:\"\\u2111\"},\"\\\\spadesuit\":{font:\"main\",group:\"textord\",replace:\"\\u2660\"},\"\\\\dag\":{font:\"main\",group:\"textord\",replace:\"\\u2020\"},\"\\\\ddag\":{font:\"main\",group:\"textord\",replace:\"\\u2021\"},\"\\\\rmoustache\":{font:\"main\",group:\"close\",replace:\"\\u23b1\"},\"\\\\lmoustache\":{font:\"main\",group:\"open\",replace:\"\\u23b0\"},\"\\\\rgroup\":{font:\"main\",group:\"close\",replace:\"\\u27ef\"},\"\\\\lgroup\":{font:\"main\",group:\"open\",replace:\"\\u27ee\"},\"\\\\mp\":{font:\"main\",group:\"bin\",replace:\"\\u2213\"},\"\\\\ominus\":{font:\"main\",group:\"bin\",replace:\"\\u2296\"},\"\\\\uplus\":{font:\"main\",group:\"bin\",replace:\"\\u228e\"},\"\\\\sqcap\":{font:\"main\",group:\"bin\",replace:\"\\u2293\"},\"\\\\ast\":{font:\"main\",group:\"bin\",replace:\"\\u2217\"},\"\\\\sqcup\":{font:\"main\",group:\"bin\",replace:\"\\u2294\"},\"\\\\bigcirc\":{font:\"main\",group:\"bin\",replace:\"\\u25ef\"},\"\\\\bullet\":{font:\"main\",group:\"bin\",replace:\"\\u2219\"},\"\\\\ddagger\":{font:\"main\",group:\"bin\",replace:\"\\u2021\"},\"\\\\wr\":{font:\"main\",group:\"bin\",replace:\"\\u2240\"},\"\\\\amalg\":{font:\"main\",group:\"bin\",replace:\"\\u2a3f\"},\"\\\\longleftarrow\":{font:\"main\",group:\"rel\",replace:\"\\u27f5\"},\"\\\\Leftarrow\":{font:\"main\",group:\"rel\",replace:\"\\u21d0\"},\"\\\\Longleftarrow\":{font:\"main\",group:\"rel\",replace:\"\\u27f8\"},\"\\\\longrightarrow\":{font:\"main\",group:\"rel\",replace:\"\\u27f6\"},\"\\\\Rightarrow\":{font:\"main\",group:\"rel\",replace:\"\\u21d2\"},\"\\\\Longrightarrow\":{font:\"main\",group:\"rel\",replace:\"\\u27f9\"},\"\\\\leftrightarrow\":{font:\"main\",group:\"rel\",replace:\"\\u2194\"},\"\\\\longleftrightarrow\":{font:\"main\",group:\"rel\",replace:\"\\u27f7\"},\"\\\\Leftrightarrow\":{font:\"main\",group:\"rel\",replace:\"\\u21d4\"},\"\\\\Longleftrightarrow\":{font:\"main\",group:\"rel\",replace:\"\\u27fa\"},\"\\\\mapsto\":{font:\"main\",group:\"rel\",replace:\"\\u21a6\"},\"\\\\longmapsto\":{font:\"main\",group:\"rel\",replace:\"\\u27fc\"},\"\\\\nearrow\":{font:\"main\",group:\"rel\",replace:\"\\u2197\"},\"\\\\hookleftarrow\":{font:\"main\",group:\"rel\",replace:\"\\u21a9\"},\"\\\\hookrightarrow\":{font:\"main\",group:\"rel\",replace:\"\\u21aa\"},\"\\\\searrow\":{font:\"main\",group:\"rel\",replace:\"\\u2198\"},\"\\\\leftharpoonup\":{font:\"main\",group:\"rel\",replace:\"\\u21bc\"},\"\\\\rightharpoonup\":{font:\"main\",group:\"rel\",replace:\"\\u21c0\"},\"\\\\swarrow\":{font:\"main\",group:\"rel\",replace:\"\\u2199\"},\"\\\\leftharpoondown\":{font:\"main\",group:\"rel\",replace:\"\\u21bd\"},\"\\\\rightharpoondown\":{font:\"main\",group:\"rel\",replace:\"\\u21c1\"},\"\\\\nwarrow\":{font:\"main\",group:\"rel\",replace:\"\\u2196\"},\"\\\\rightleftharpoons\":{font:\"main\",group:\"rel\",replace:\"\\u21cc\"},\"\\\\nless\":{font:\"ams\",group:\"rel\",replace:\"\\u226e\"},\"\\\\nleqslant\":{font:\"ams\",group:\"rel\",replace:\"\\ue010\"},\"\\\\nleqq\":{font:\"ams\",group:\"rel\",replace:\"\\ue011\"},\"\\\\lneq\":{font:\"ams\",group:\"rel\",replace:\"\\u2a87\"},\"\\\\lneqq\":{font:\"ams\",group:\"rel\",replace:\"\\u2268\"},\"\\\\lvertneqq\":{font:\"ams\",group:\"rel\",replace:\"\\ue00c\"},\"\\\\lnsim\":{font:\"ams\",group:\"rel\",replace:\"\\u22e6\"},\"\\\\lnapprox\":{font:\"ams\",group:\"rel\",replace:\"\\u2a89\"},\"\\\\nprec\":{font:\"ams\",group:\"rel\",replace:\"\\u2280\"},\"\\\\npreceq\":{font:\"ams\",group:\"rel\",replace:\"\\u22e0\"},\"\\\\precnsim\":{font:\"ams\",group:\"rel\",replace:\"\\u22e8\"},\"\\\\precnapprox\":{font:\"ams\",group:\"rel\",replace:\"\\u2ab9\"},\"\\\\nsim\":{font:\"ams\",group:\"rel\",replace:\"\\u2241\"},\"\\\\nshortmid\":{font:\"ams\",group:\"rel\",replace:\"\\ue006\"},\"\\\\nmid\":{font:\"ams\",group:\"rel\",replace:\"\\u2224\"},\"\\\\nvdash\":{font:\"ams\",group:\"rel\",replace:\"\\u22ac\"},\"\\\\nvDash\":{font:\"ams\",group:\"rel\",replace:\"\\u22ad\"},\"\\\\ntriangleleft\":{font:\"ams\",group:\"rel\",replace:\"\\u22ea\"},\"\\\\ntrianglelefteq\":{font:\"ams\",group:\"rel\",replace:\"\\u22ec\"},\"\\\\subsetneq\":{font:\"ams\",group:\"rel\",replace:\"\\u228a\"},\"\\\\varsubsetneq\":{font:\"ams\",group:\"rel\",replace:\"\\ue01a\"},\"\\\\subsetneqq\":{font:\"ams\",group:\"rel\",replace:\"\\u2acb\"},\"\\\\varsubsetneqq\":{font:\"ams\",group:\"rel\",replace:\"\\ue017\"},\"\\\\ngtr\":{font:\"ams\",group:\"rel\",replace:\"\\u226f\"},\"\\\\ngeqslant\":{font:\"ams\",group:\"rel\",replace:\"\\ue00f\"},\"\\\\ngeqq\":{font:\"ams\",group:\"rel\",replace:\"\\ue00e\"},\"\\\\gneq\":{font:\"ams\",group:\"rel\",replace:\"\\u2a88\"},\"\\\\gneqq\":{font:\"ams\",group:\"rel\",replace:\"\\u2269\"},\"\\\\gvertneqq\":{font:\"ams\",group:\"rel\",replace:\"\\ue00d\"},\"\\\\gnsim\":{font:\"ams\",group:\"rel\",replace:\"\\u22e7\"},\"\\\\gnapprox\":{font:\"ams\",group:\"rel\",replace:\"\\u2a8a\"},\"\\\\nsucc\":{font:\"ams\",group:\"rel\",replace:\"\\u2281\"},\"\\\\nsucceq\":{font:\"ams\",group:\"rel\",replace:\"\\u22e1\"},\"\\\\succnsim\":{font:\"ams\",group:\"rel\",replace:\"\\u22e9\"},\"\\\\succnapprox\":{font:\"ams\",group:\"rel\",replace:\"\\u2aba\"},\"\\\\ncong\":{font:\"ams\",group:\"rel\",replace:\"\\u2246\"},\"\\\\nshortparallel\":{font:\"ams\",group:\"rel\",replace:\"\\ue007\"},\"\\\\nparallel\":{font:\"ams\",group:\"rel\",replace:\"\\u2226\"},\"\\\\nVDash\":{font:\"ams\",group:\"rel\",replace:\"\\u22af\"},\"\\\\ntriangleright\":{font:\"ams\",group:\"rel\",replace:\"\\u22eb\"},\"\\\\ntrianglerighteq\":{font:\"ams\",group:\"rel\",replace:\"\\u22ed\"},\"\\\\nsupseteqq\":{font:\"ams\",group:\"rel\",replace:\"\\ue018\"},\"\\\\supsetneq\":{font:\"ams\",group:\"rel\",replace:\"\\u228b\"},\"\\\\varsupsetneq\":{font:\"ams\",group:\"rel\",replace:\"\\ue01b\"},\"\\\\supsetneqq\":{font:\"ams\",group:\"rel\",replace:\"\\u2acc\"},\"\\\\varsupsetneqq\":{font:\"ams\",group:\"rel\",replace:\"\\ue019\"},\"\\\\nVdash\":{font:\"ams\",group:\"rel\",replace:\"\\u22ae\"},\"\\\\precneqq\":{font:\"ams\",group:\"rel\",replace:\"\\u2ab5\"},\"\\\\succneqq\":{font:\"ams\",group:\"rel\",replace:\"\\u2ab6\"},\"\\\\nsubseteqq\":{font:\"ams\",group:\"rel\",replace:\"\\ue016\"},\"\\\\unlhd\":{font:\"ams\",group:\"bin\",replace:\"\\u22b4\"},\"\\\\unrhd\":{font:\"ams\",group:\"bin\",replace:\"\\u22b5\"},\"\\\\nleftarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u219a\"},\"\\\\nrightarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u219b\"},\"\\\\nLeftarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21cd\"},\"\\\\nRightarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21cf\"},\"\\\\nleftrightarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21ae\"},\"\\\\nLeftrightarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21ce\"},\"\\\\vartriangle\":{font:\"ams\",group:\"rel\",replace:\"\\u25b3\"},\"\\\\hslash\":{font:\"ams\",group:\"textord\",replace:\"\\u210f\"},\"\\\\triangledown\":{font:\"ams\",group:\"textord\",replace:\"\\u25bd\"},\"\\\\lozenge\":{font:\"ams\",group:\"textord\",replace:\"\\u25ca\"},\"\\\\circledS\":{font:\"ams\",group:\"textord\",replace:\"\\u24c8\"},\"\\\\circledR\":{font:\"ams\",group:\"textord\",replace:\"\\xae\"},\"\\\\measuredangle\":{font:\"ams\",group:\"textord\",replace:\"\\u2221\"},\"\\\\nexists\":{font:\"ams\",group:\"textord\",replace:\"\\u2204\"},\"\\\\mho\":{font:\"ams\",group:\"textord\",replace:\"\\u2127\"},\"\\\\Finv\":{font:\"ams\",group:\"textord\",replace:\"\\u2132\"},\"\\\\Game\":{font:\"ams\",group:\"textord\",replace:\"\\u2141\"},\"\\\\Bbbk\":{font:\"ams\",group:\"textord\",replace:\"k\"},\"\\\\backprime\":{font:\"ams\",group:\"textord\",replace:\"\\u2035\"},\"\\\\blacktriangle\":{font:\"ams\",group:\"textord\",replace:\"\\u25b2\"},\"\\\\blacktriangledown\":{font:\"ams\",group:\"textord\",replace:\"\\u25bc\"},\"\\\\blacksquare\":{font:\"ams\",group:\"textord\",replace:\"\\u25a0\"},\"\\\\blacklozenge\":{font:\"ams\",group:\"textord\",replace:\"\\u29eb\"},\"\\\\bigstar\":{font:\"ams\",group:\"textord\",replace:\"\\u2605\"},\"\\\\sphericalangle\":{font:\"ams\",group:\"textord\",replace:\"\\u2222\"},\"\\\\complement\":{font:\"ams\",group:\"textord\",replace:\"\\u2201\"},\"\\\\eth\":{font:\"ams\",group:\"textord\",replace:\"\\xf0\"},\"\\\\diagup\":{font:\"ams\",group:\"textord\",replace:\"\\u2571\"},\"\\\\diagdown\":{font:\"ams\",group:\"textord\",replace:\"\\u2572\"},\"\\\\square\":{font:\"ams\",group:\"textord\",replace:\"\\u25a1\"},\"\\\\Box\":{font:\"ams\",group:\"textord\",replace:\"\\u25a1\"},\"\\\\Diamond\":{font:\"ams\",group:\"textord\",replace:\"\\u25ca\"},\"\\\\yen\":{font:\"ams\",group:\"textord\",replace:\"\\xa5\"},\"\\\\checkmark\":{font:\"ams\",group:\"textord\",replace:\"\\u2713\"},\"\\\\beth\":{font:\"ams\",group:\"textord\",replace:\"\\u2136\"},\"\\\\daleth\":{font:\"ams\",group:\"textord\",replace:\"\\u2138\"},\"\\\\gimel\":{font:\"ams\",group:\"textord\",replace:\"\\u2137\"},\"\\\\digamma\":{font:\"ams\",group:\"textord\",replace:\"\\u03dd\"},\"\\\\varkappa\":{font:\"ams\",group:\"textord\",replace:\"\\u03f0\"},\"\\\\ulcorner\":{font:\"ams\",group:\"open\",replace:\"\\u250c\"},\"\\\\urcorner\":{font:\"ams\",group:\"close\",replace:\"\\u2510\"},\"\\\\llcorner\":{font:\"ams\",group:\"open\",replace:\"\\u2514\"},\"\\\\lrcorner\":{font:\"ams\",group:\"close\",replace:\"\\u2518\"},\"\\\\leqq\":{font:\"ams\",group:\"rel\",replace:\"\\u2266\"},\"\\\\leqslant\":{font:\"ams\",group:\"rel\",replace:\"\\u2a7d\"},\"\\\\eqslantless\":{font:\"ams\",group:\"rel\",replace:\"\\u2a95\"},\"\\\\lesssim\":{font:\"ams\",group:\"rel\",replace:\"\\u2272\"},\"\\\\lessapprox\":{font:\"ams\",group:\"rel\",replace:\"\\u2a85\"},\"\\\\approxeq\":{font:\"ams\",group:\"rel\",replace:\"\\u224a\"},\"\\\\lessdot\":{font:\"ams\",group:\"bin\",replace:\"\\u22d6\"},\"\\\\lll\":{font:\"ams\",group:\"rel\",replace:\"\\u22d8\"},\"\\\\lessgtr\":{font:\"ams\",group:\"rel\",replace:\"\\u2276\"},\"\\\\lesseqgtr\":{font:\"ams\",group:\"rel\",replace:\"\\u22da\"},\"\\\\lesseqqgtr\":{font:\"ams\",group:\"rel\",replace:\"\\u2a8b\"},\"\\\\doteqdot\":{font:\"ams\",group:\"rel\",replace:\"\\u2251\"},\"\\\\risingdotseq\":{font:\"ams\",group:\"rel\",replace:\"\\u2253\"},\"\\\\fallingdotseq\":{font:\"ams\",group:\"rel\",replace:\"\\u2252\"},\"\\\\backsim\":{font:\"ams\",group:\"rel\",replace:\"\\u223d\"},\"\\\\backsimeq\":{font:\"ams\",group:\"rel\",replace:\"\\u22cd\"},\"\\\\subseteqq\":{font:\"ams\",group:\"rel\",replace:\"\\u2ac5\"},\"\\\\Subset\":{font:\"ams\",group:\"rel\",replace:\"\\u22d0\"},\"\\\\sqsubset\":{font:\"ams\",group:\"rel\",replace:\"\\u228f\"},\"\\\\preccurlyeq\":{font:\"ams\",group:\"rel\",replace:\"\\u227c\"},\"\\\\curlyeqprec\":{font:\"ams\",group:\"rel\",replace:\"\\u22de\"},\"\\\\precsim\":{font:\"ams\",group:\"rel\",replace:\"\\u227e\"},\"\\\\precapprox\":{font:\"ams\",group:\"rel\",replace:\"\\u2ab7\"},\"\\\\vartriangleleft\":{font:\"ams\",group:\"rel\",replace:\"\\u22b2\"},\"\\\\trianglelefteq\":{font:\"ams\",group:\"rel\",replace:\"\\u22b4\"},\"\\\\vDash\":{font:\"ams\",group:\"rel\",replace:\"\\u22a8\"},\"\\\\Vvdash\":{font:\"ams\",group:\"rel\",replace:\"\\u22aa\"},\"\\\\smallsmile\":{font:\"ams\",group:\"rel\",replace:\"\\u2323\"},\"\\\\smallfrown\":{font:\"ams\",group:\"rel\",replace:\"\\u2322\"},\"\\\\bumpeq\":{font:\"ams\",group:\"rel\",replace:\"\\u224f\"},\"\\\\Bumpeq\":{font:\"ams\",group:\"rel\",replace:\"\\u224e\"},\"\\\\geqq\":{font:\"ams\",group:\"rel\",replace:\"\\u2267\"},\"\\\\geqslant\":{font:\"ams\",group:\"rel\",replace:\"\\u2a7e\"},\"\\\\eqslantgtr\":{font:\"ams\",group:\"rel\",replace:\"\\u2a96\"},\"\\\\gtrsim\":{font:\"ams\",group:\"rel\",replace:\"\\u2273\"},\"\\\\gtrapprox\":{font:\"ams\",group:\"rel\",replace:\"\\u2a86\"},\"\\\\gtrdot\":{font:\"ams\",group:\"bin\",replace:\"\\u22d7\"},\"\\\\ggg\":{font:\"ams\",group:\"rel\",replace:\"\\u22d9\"},\"\\\\gtrless\":{font:\"ams\",group:\"rel\",replace:\"\\u2277\"},\"\\\\gtreqless\":{font:\"ams\",group:\"rel\",replace:\"\\u22db\"},\"\\\\gtreqqless\":{font:\"ams\",group:\"rel\",replace:\"\\u2a8c\"},\"\\\\eqcirc\":{font:\"ams\",group:\"rel\",replace:\"\\u2256\"},\"\\\\circeq\":{font:\"ams\",group:\"rel\",replace:\"\\u2257\"},\"\\\\triangleq\":{font:\"ams\",group:\"rel\",replace:\"\\u225c\"},\"\\\\thicksim\":{font:\"ams\",group:\"rel\",replace:\"\\u223c\"},\"\\\\thickapprox\":{font:\"ams\",group:\"rel\",replace:\"\\u2248\"},\"\\\\supseteqq\":{font:\"ams\",group:\"rel\",replace:\"\\u2ac6\"},\"\\\\Supset\":{font:\"ams\",group:\"rel\",replace:\"\\u22d1\"},\"\\\\sqsupset\":{font:\"ams\",group:\"rel\",replace:\"\\u2290\"},\"\\\\succcurlyeq\":{font:\"ams\",group:\"rel\",replace:\"\\u227d\"},\"\\\\curlyeqsucc\":{font:\"ams\",group:\"rel\",replace:\"\\u22df\"},\"\\\\succsim\":{font:\"ams\",group:\"rel\",replace:\"\\u227f\"},\"\\\\succapprox\":{font:\"ams\",group:\"rel\",replace:\"\\u2ab8\"},\"\\\\vartriangleright\":{font:\"ams\",group:\"rel\",replace:\"\\u22b3\"},\"\\\\trianglerighteq\":{font:\"ams\",group:\"rel\",replace:\"\\u22b5\"},\"\\\\Vdash\":{font:\"ams\",group:\"rel\",replace:\"\\u22a9\"},\"\\\\shortmid\":{font:\"ams\",group:\"rel\",replace:\"\\u2223\"},\"\\\\shortparallel\":{font:\"ams\",group:\"rel\",replace:\"\\u2225\"},\"\\\\between\":{font:\"ams\",group:\"rel\",replace:\"\\u226c\"},\"\\\\pitchfork\":{font:\"ams\",group:\"rel\",replace:\"\\u22d4\"},\"\\\\varpropto\":{font:\"ams\",group:\"rel\",replace:\"\\u221d\"},\"\\\\blacktriangleleft\":{font:\"ams\",group:\"rel\",replace:\"\\u25c0\"},\"\\\\therefore\":{font:\"ams\",group:\"rel\",replace:\"\\u2234\"},\"\\\\backepsilon\":{font:\"ams\",group:\"rel\",replace:\"\\u220d\"},\"\\\\blacktriangleright\":{font:\"ams\",group:\"rel\",replace:\"\\u25b6\"},\"\\\\because\":{font:\"ams\",group:\"rel\",replace:\"\\u2235\"},\"\\\\llless\":{font:\"ams\",group:\"rel\",replace:\"\\u22d8\"},\"\\\\gggtr\":{font:\"ams\",group:\"rel\",replace:\"\\u22d9\"},\"\\\\lhd\":{font:\"ams\",group:\"bin\",replace:\"\\u22b2\"},\"\\\\rhd\":{font:\"ams\",group:\"bin\",replace:\"\\u22b3\"},\"\\\\eqsim\":{font:\"ams\",group:\"rel\",replace:\"\\u2242\"},\"\\\\Join\":{font:\"main\",group:\"rel\",replace:\"\\u22c8\"},\"\\\\Doteq\":{font:\"ams\",group:\"rel\",replace:\"\\u2251\"},\"\\\\dotplus\":{font:\"ams\",group:\"bin\",replace:\"\\u2214\"},\"\\\\smallsetminus\":{font:\"ams\",group:\"bin\",replace:\"\\u2216\"},\"\\\\Cap\":{font:\"ams\",group:\"bin\",replace:\"\\u22d2\"},\"\\\\Cup\":{font:\"ams\",group:\"bin\",replace:\"\\u22d3\"},\"\\\\doublebarwedge\":{font:\"ams\",group:\"bin\",replace:\"\\u2a5e\"},\"\\\\boxminus\":{font:\"ams\",group:\"bin\",replace:\"\\u229f\"},\"\\\\boxplus\":{font:\"ams\",group:\"bin\",replace:\"\\u229e\"},\"\\\\divideontimes\":{font:\"ams\",group:\"bin\",replace:\"\\u22c7\"},\"\\\\ltimes\":{font:\"ams\",group:\"bin\",replace:\"\\u22c9\"},\"\\\\rtimes\":{font:\"ams\",group:\"bin\",replace:\"\\u22ca\"},\"\\\\leftthreetimes\":{font:\"ams\",group:\"bin\",replace:\"\\u22cb\"},\"\\\\rightthreetimes\":{font:\"ams\",group:\"bin\",replace:\"\\u22cc\"},\"\\\\curlywedge\":{font:\"ams\",group:\"bin\",replace:\"\\u22cf\"},\"\\\\curlyvee\":{font:\"ams\",group:\"bin\",replace:\"\\u22ce\"},\"\\\\circleddash\":{font:\"ams\",group:\"bin\",replace:\"\\u229d\"},\"\\\\circledast\":{font:\"ams\",group:\"bin\",replace:\"\\u229b\"},\"\\\\centerdot\":{font:\"ams\",group:\"bin\",replace:\"\\u22c5\"},\"\\\\intercal\":{font:\"ams\",group:\"bin\",replace:\"\\u22ba\"},\"\\\\doublecap\":{font:\"ams\",group:\"bin\",replace:\"\\u22d2\"},\"\\\\doublecup\":{font:\"ams\",group:\"bin\",replace:\"\\u22d3\"},\"\\\\boxtimes\":{font:\"ams\",group:\"bin\",replace:\"\\u22a0\"},\"\\\\dashrightarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21e2\"},\"\\\\dashleftarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21e0\"},\"\\\\leftleftarrows\":{font:\"ams\",group:\"rel\",replace:\"\\u21c7\"},\"\\\\leftrightarrows\":{font:\"ams\",group:\"rel\",replace:\"\\u21c6\"},\"\\\\Lleftarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21da\"},\"\\\\twoheadleftarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u219e\"},\"\\\\leftarrowtail\":{font:\"ams\",group:\"rel\",replace:\"\\u21a2\"},\"\\\\looparrowleft\":{font:\"ams\",group:\"rel\",replace:\"\\u21ab\"},\"\\\\leftrightharpoons\":{font:\"ams\",group:\"rel\",replace:\"\\u21cb\"},\"\\\\curvearrowleft\":{font:\"ams\",group:\"rel\",replace:\"\\u21b6\"},\"\\\\circlearrowleft\":{font:\"ams\",group:\"rel\",replace:\"\\u21ba\"},\"\\\\Lsh\":{font:\"ams\",group:\"rel\",replace:\"\\u21b0\"},\"\\\\upuparrows\":{font:\"ams\",group:\"rel\",replace:\"\\u21c8\"},\"\\\\upharpoonleft\":{font:\"ams\",group:\"rel\",replace:\"\\u21bf\"},\"\\\\downharpoonleft\":{font:\"ams\",group:\"rel\",replace:\"\\u21c3\"},\"\\\\multimap\":{font:\"ams\",group:\"rel\",replace:\"\\u22b8\"},\"\\\\leftrightsquigarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21ad\"},\"\\\\rightrightarrows\":{font:\"ams\",group:\"rel\",replace:\"\\u21c9\"},\"\\\\rightleftarrows\":{font:\"ams\",group:\"rel\",replace:\"\\u21c4\"},\"\\\\twoheadrightarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21a0\"},\"\\\\rightarrowtail\":{font:\"ams\",group:\"rel\",replace:\"\\u21a3\"},\"\\\\looparrowright\":{font:\"ams\",group:\"rel\",replace:\"\\u21ac\"},\"\\\\curvearrowright\":{font:\"ams\",group:\"rel\",replace:\"\\u21b7\"},\"\\\\circlearrowright\":{font:\"ams\",group:\"rel\",replace:\"\\u21bb\"},\"\\\\Rsh\":{font:\"ams\",group:\"rel\",replace:\"\\u21b1\"},\"\\\\downdownarrows\":{font:\"ams\",group:\"rel\",replace:\"\\u21ca\"},\"\\\\upharpoonright\":{font:\"ams\",group:\"rel\",replace:\"\\u21be\"},\"\\\\downharpoonright\":{font:\"ams\",group:\"rel\",replace:\"\\u21c2\"},\"\\\\rightsquigarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21dd\"},\"\\\\leadsto\":{font:\"ams\",group:\"rel\",replace:\"\\u21dd\"},\"\\\\Rrightarrow\":{font:\"ams\",group:\"rel\",replace:\"\\u21db\"},\"\\\\restriction\":{font:\"ams\",group:\"rel\",replace:\"\\u21be\"},\"`\":{font:\"main\",group:\"textord\",replace:\"\\u2018\"},\"\\\\$\":{font:\"main\",group:\"textord\",replace:\"$\"},\"\\\\%\":{font:\"main\",group:\"textord\",replace:\"%\"},\"\\\\_\":{font:\"main\",group:\"textord\",replace:\"_\"},\"\\\\angle\":{font:\"main\",group:\"textord\",replace:\"\\u2220\"},\"\\\\infty\":{font:\"main\",group:\"textord\",replace:\"\\u221e\"},\"\\\\prime\":{font:\"main\",group:\"textord\",replace:\"\\u2032\"},\"\\\\triangle\":{font:\"main\",group:\"textord\",replace:\"\\u25b3\"},\"\\\\Gamma\":{font:\"main\",group:\"textord\",replace:\"\\u0393\"},\"\\\\Delta\":{font:\"main\",group:\"textord\",replace:\"\\u0394\"},\"\\\\Theta\":{font:\"main\",group:\"textord\",replace:\"\\u0398\"},\"\\\\Lambda\":{font:\"main\",group:\"textord\",replace:\"\\u039b\"},\"\\\\Xi\":{font:\"main\",group:\"textord\",replace:\"\\u039e\"},\"\\\\Pi\":{font:\"main\",group:\"textord\",replace:\"\\u03a0\"},\"\\\\Sigma\":{font:\"main\",group:\"textord\",replace:\"\\u03a3\"},\"\\\\Upsilon\":{font:\"main\",\ngroup:\"textord\",replace:\"\\u03a5\"},\"\\\\Phi\":{font:\"main\",group:\"textord\",replace:\"\\u03a6\"},\"\\\\Psi\":{font:\"main\",group:\"textord\",replace:\"\\u03a8\"},\"\\\\Omega\":{font:\"main\",group:\"textord\",replace:\"\\u03a9\"},\"\\\\neg\":{font:\"main\",group:\"textord\",replace:\"\\xac\"},\"\\\\lnot\":{font:\"main\",group:\"textord\",replace:\"\\xac\"},\"\\\\top\":{font:\"main\",group:\"textord\",replace:\"\\u22a4\"},\"\\\\bot\":{font:\"main\",group:\"textord\",replace:\"\\u22a5\"},\"\\\\emptyset\":{font:\"main\",group:\"textord\",replace:\"\\u2205\"},\"\\\\varnothing\":{font:\"ams\",group:\"textord\",replace:\"\\u2205\"},\"\\\\alpha\":{font:\"main\",group:\"mathord\",replace:\"\\u03b1\"},\"\\\\beta\":{font:\"main\",group:\"mathord\",replace:\"\\u03b2\"},\"\\\\gamma\":{font:\"main\",group:\"mathord\",replace:\"\\u03b3\"},\"\\\\delta\":{font:\"main\",group:\"mathord\",replace:\"\\u03b4\"},\"\\\\epsilon\":{font:\"main\",group:\"mathord\",replace:\"\\u03f5\"},\"\\\\zeta\":{font:\"main\",group:\"mathord\",replace:\"\\u03b6\"},\"\\\\eta\":{font:\"main\",group:\"mathord\",replace:\"\\u03b7\"},\"\\\\theta\":{font:\"main\",group:\"mathord\",replace:\"\\u03b8\"},\"\\\\iota\":{font:\"main\",group:\"mathord\",replace:\"\\u03b9\"},\"\\\\kappa\":{font:\"main\",group:\"mathord\",replace:\"\\u03ba\"},\"\\\\lambda\":{font:\"main\",group:\"mathord\",replace:\"\\u03bb\"},\"\\\\mu\":{font:\"main\",group:\"mathord\",replace:\"\\u03bc\"},\"\\\\nu\":{font:\"main\",group:\"mathord\",replace:\"\\u03bd\"},\"\\\\xi\":{font:\"main\",group:\"mathord\",replace:\"\\u03be\"},\"\\\\omicron\":{font:\"main\",group:\"mathord\",replace:\"o\"},\"\\\\pi\":{font:\"main\",group:\"mathord\",replace:\"\\u03c0\"},\"\\\\rho\":{font:\"main\",group:\"mathord\",replace:\"\\u03c1\"},\"\\\\sigma\":{font:\"main\",group:\"mathord\",replace:\"\\u03c3\"},\"\\\\tau\":{font:\"main\",group:\"mathord\",replace:\"\\u03c4\"},\"\\\\upsilon\":{font:\"main\",group:\"mathord\",replace:\"\\u03c5\"},\"\\\\phi\":{font:\"main\",group:\"mathord\",replace:\"\\u03d5\"},\"\\\\chi\":{font:\"main\",group:\"mathord\",replace:\"\\u03c7\"},\"\\\\psi\":{font:\"main\",group:\"mathord\",replace:\"\\u03c8\"},\"\\\\omega\":{font:\"main\",group:\"mathord\",replace:\"\\u03c9\"},\"\\\\varepsilon\":{font:\"main\",group:\"mathord\",replace:\"\\u03b5\"},\"\\\\vartheta\":{font:\"main\",group:\"mathord\",replace:\"\\u03d1\"},\"\\\\varpi\":{font:\"main\",group:\"mathord\",replace:\"\\u03d6\"},\"\\\\varrho\":{font:\"main\",group:\"mathord\",replace:\"\\u03f1\"},\"\\\\varsigma\":{font:\"main\",group:\"mathord\",replace:\"\\u03c2\"},\"\\\\varphi\":{font:\"main\",group:\"mathord\",replace:\"\\u03c6\"},\"*\":{font:\"main\",group:\"bin\",replace:\"\\u2217\"},\"+\":{font:\"main\",group:\"bin\"},\"-\":{font:\"main\",group:\"bin\",replace:\"\\u2212\"},\"\\\\cdot\":{font:\"main\",group:\"bin\",replace:\"\\u22c5\"},\"\\\\circ\":{font:\"main\",group:\"bin\",replace:\"\\u2218\"},\"\\\\div\":{font:\"main\",group:\"bin\",replace:\"\\xf7\"},\"\\\\pm\":{font:\"main\",group:\"bin\",replace:\"\\xb1\"},\"\\\\times\":{font:\"main\",group:\"bin\",replace:\"\\xd7\"},\"\\\\cap\":{font:\"main\",group:\"bin\",replace:\"\\u2229\"},\"\\\\cup\":{font:\"main\",group:\"bin\",replace:\"\\u222a\"},\"\\\\setminus\":{font:\"main\",group:\"bin\",replace:\"\\u2216\"},\"\\\\land\":{font:\"main\",group:\"bin\",replace:\"\\u2227\"},\"\\\\lor\":{font:\"main\",group:\"bin\",replace:\"\\u2228\"},\"\\\\wedge\":{font:\"main\",group:\"bin\",replace:\"\\u2227\"},\"\\\\vee\":{font:\"main\",group:\"bin\",replace:\"\\u2228\"},\"\\\\surd\":{font:\"main\",group:\"textord\",replace:\"\\u221a\"},\"(\":{font:\"main\",group:\"open\"},\"[\":{font:\"main\",group:\"open\"},\"\\\\langle\":{font:\"main\",group:\"open\",replace:\"\\u27e8\"},\"\\\\lvert\":{font:\"main\",group:\"open\",replace:\"\\u2223\"},\"\\\\lVert\":{font:\"main\",group:\"open\",replace:\"\\u2225\"},\")\":{font:\"main\",group:\"close\"},\"]\":{font:\"main\",group:\"close\"},\"?\":{font:\"main\",group:\"close\"},\"!\":{font:\"main\",group:\"close\"},\"\\\\rangle\":{font:\"main\",group:\"close\",replace:\"\\u27e9\"},\"\\\\rvert\":{font:\"main\",group:\"close\",replace:\"\\u2223\"},\"\\\\rVert\":{font:\"main\",group:\"close\",replace:\"\\u2225\"},\"=\":{font:\"main\",group:\"rel\"},\"<\":{font:\"main\",group:\"rel\"},\">\":{font:\"main\",group:\"rel\"},\":\":{font:\"main\",group:\"rel\"},\"\\\\approx\":{font:\"main\",group:\"rel\",replace:\"\\u2248\"},\"\\\\cong\":{font:\"main\",group:\"rel\",replace:\"\\u2245\"},\"\\\\ge\":{font:\"main\",group:\"rel\",replace:\"\\u2265\"},\"\\\\geq\":{font:\"main\",group:\"rel\",replace:\"\\u2265\"},\"\\\\gets\":{font:\"main\",group:\"rel\",replace:\"\\u2190\"},\"\\\\in\":{font:\"main\",group:\"rel\",replace:\"\\u2208\"},\"\\\\notin\":{font:\"main\",group:\"rel\",replace:\"\\u2209\"},\"\\\\subset\":{font:\"main\",group:\"rel\",replace:\"\\u2282\"},\"\\\\supset\":{font:\"main\",group:\"rel\",replace:\"\\u2283\"},\"\\\\subseteq\":{font:\"main\",group:\"rel\",replace:\"\\u2286\"},\"\\\\supseteq\":{font:\"main\",group:\"rel\",replace:\"\\u2287\"},\"\\\\nsubseteq\":{font:\"ams\",group:\"rel\",replace:\"\\u2288\"},\"\\\\nsupseteq\":{font:\"ams\",group:\"rel\",replace:\"\\u2289\"},\"\\\\models\":{font:\"main\",group:\"rel\",replace:\"\\u22a8\"},\"\\\\leftarrow\":{font:\"main\",group:\"rel\",replace:\"\\u2190\"},\"\\\\le\":{font:\"main\",group:\"rel\",replace:\"\\u2264\"},\"\\\\leq\":{font:\"main\",group:\"rel\",replace:\"\\u2264\"},\"\\\\ne\":{font:\"main\",group:\"rel\",replace:\"\\u2260\"},\"\\\\neq\":{font:\"main\",group:\"rel\",replace:\"\\u2260\"},\"\\\\rightarrow\":{font:\"main\",group:\"rel\",replace:\"\\u2192\"},\"\\\\to\":{font:\"main\",group:\"rel\",replace:\"\\u2192\"},\"\\\\ngeq\":{font:\"ams\",group:\"rel\",replace:\"\\u2271\"},\"\\\\nleq\":{font:\"ams\",group:\"rel\",replace:\"\\u2270\"},\"\\\\!\":{font:\"main\",group:\"spacing\"},\"\\\\ \":{font:\"main\",group:\"spacing\",replace:\"\\xa0\"},\"~\":{font:\"main\",group:\"spacing\",replace:\"\\xa0\"},\"\\\\,\":{font:\"main\",group:\"spacing\"},\"\\\\:\":{font:\"main\",group:\"spacing\"},\"\\\\;\":{font:\"main\",group:\"spacing\"},\"\\\\enspace\":{font:\"main\",group:\"spacing\"},\"\\\\qquad\":{font:\"main\",group:\"spacing\"},\"\\\\quad\":{font:\"main\",group:\"spacing\"},\"\\\\space\":{font:\"main\",group:\"spacing\",replace:\"\\xa0\"},\",\":{font:\"main\",group:\"punct\"},\";\":{font:\"main\",group:\"punct\"},\"\\\\colon\":{font:\"main\",group:\"punct\",replace:\":\"},\"\\\\barwedge\":{font:\"ams\",group:\"bin\",replace:\"\\u22bc\"},\"\\\\veebar\":{font:\"ams\",group:\"bin\",replace:\"\\u22bb\"},\"\\\\odot\":{font:\"main\",group:\"bin\",replace:\"\\u2299\"},\"\\\\oplus\":{font:\"main\",group:\"bin\",replace:\"\\u2295\"},\"\\\\otimes\":{font:\"main\",group:\"bin\",replace:\"\\u2297\"},\"\\\\partial\":{font:\"main\",group:\"textord\",replace:\"\\u2202\"},\"\\\\oslash\":{font:\"main\",group:\"bin\",replace:\"\\u2298\"},\"\\\\circledcirc\":{font:\"ams\",group:\"bin\",replace:\"\\u229a\"},\"\\\\boxdot\":{font:\"ams\",group:\"bin\",replace:\"\\u22a1\"},\"\\\\bigtriangleup\":{font:\"main\",group:\"bin\",replace:\"\\u25b3\"},\"\\\\bigtriangledown\":{font:\"main\",group:\"bin\",replace:\"\\u25bd\"},\"\\\\dagger\":{font:\"main\",group:\"bin\",replace:\"\\u2020\"},\"\\\\diamond\":{font:\"main\",group:\"bin\",replace:\"\\u22c4\"},\"\\\\star\":{font:\"main\",group:\"bin\",replace:\"\\u22c6\"},\"\\\\triangleleft\":{font:\"main\",group:\"bin\",replace:\"\\u25c3\"},\"\\\\triangleright\":{font:\"main\",group:\"bin\",replace:\"\\u25b9\"},\"\\\\{\":{font:\"main\",group:\"open\",replace:\"{\"},\"\\\\}\":{font:\"main\",group:\"close\",replace:\"}\"},\"\\\\lbrace\":{font:\"main\",group:\"open\",replace:\"{\"},\"\\\\rbrace\":{font:\"main\",group:\"close\",replace:\"}\"},\"\\\\lbrack\":{font:\"main\",group:\"open\",replace:\"[\"},\"\\\\rbrack\":{font:\"main\",group:\"close\",replace:\"]\"},\"\\\\lfloor\":{font:\"main\",group:\"open\",replace:\"\\u230a\"},\"\\\\rfloor\":{font:\"main\",group:\"close\",replace:\"\\u230b\"},\"\\\\lceil\":{font:\"main\",group:\"open\",replace:\"\\u2308\"},\"\\\\rceil\":{font:\"main\",group:\"close\",replace:\"\\u2309\"},\"\\\\backslash\":{font:\"main\",group:\"textord\",replace:\"\\\\\"},\"|\":{font:\"main\",group:\"textord\",replace:\"\\u2223\"},\"\\\\vert\":{font:\"main\",group:\"textord\",replace:\"\\u2223\"},\"\\\\|\":{font:\"main\",group:\"textord\",replace:\"\\u2225\"},\"\\\\Vert\":{font:\"main\",group:\"textord\",replace:\"\\u2225\"},\"\\\\uparrow\":{font:\"main\",group:\"rel\",replace:\"\\u2191\"},\"\\\\Uparrow\":{font:\"main\",group:\"rel\",replace:\"\\u21d1\"},\"\\\\downarrow\":{font:\"main\",group:\"rel\",replace:\"\\u2193\"},\"\\\\Downarrow\":{font:\"main\",group:\"rel\",replace:\"\\u21d3\"},\"\\\\updownarrow\":{font:\"main\",group:\"rel\",replace:\"\\u2195\"},\"\\\\Updownarrow\":{font:\"main\",group:\"rel\",replace:\"\\u21d5\"},\"\\\\coprod\":{font:\"math\",group:\"op\",replace:\"\\u2210\"},\"\\\\bigvee\":{font:\"math\",group:\"op\",replace:\"\\u22c1\"},\"\\\\bigwedge\":{font:\"math\",group:\"op\",replace:\"\\u22c0\"},\"\\\\biguplus\":{font:\"math\",group:\"op\",replace:\"\\u2a04\"},\"\\\\bigcap\":{font:\"math\",group:\"op\",replace:\"\\u22c2\"},\"\\\\bigcup\":{font:\"math\",group:\"op\",replace:\"\\u22c3\"},\"\\\\int\":{font:\"math\",group:\"op\",replace:\"\\u222b\"},\"\\\\intop\":{font:\"math\",group:\"op\",replace:\"\\u222b\"},\"\\\\iint\":{font:\"math\",group:\"op\",replace:\"\\u222c\"},\"\\\\iiint\":{font:\"math\",group:\"op\",replace:\"\\u222d\"},\"\\\\prod\":{font:\"math\",group:\"op\",replace:\"\\u220f\"},\"\\\\sum\":{font:\"math\",group:\"op\",replace:\"\\u2211\"},\"\\\\bigotimes\":{font:\"math\",group:\"op\",replace:\"\\u2a02\"},\"\\\\bigoplus\":{font:\"math\",group:\"op\",replace:\"\\u2a01\"},\"\\\\bigodot\":{font:\"math\",group:\"op\",replace:\"\\u2a00\"},\"\\\\oint\":{font:\"math\",group:\"op\",replace:\"\\u222e\"},\"\\\\bigsqcup\":{font:\"math\",group:\"op\",replace:\"\\u2a06\"},\"\\\\smallint\":{font:\"math\",group:\"op\",replace:\"\\u222b\"},\"\\\\ldots\":{font:\"main\",group:\"inner\",replace:\"\\u2026\"},\"\\\\cdots\":{font:\"main\",group:\"inner\",replace:\"\\u22ef\"},\"\\\\ddots\":{font:\"main\",group:\"inner\",replace:\"\\u22f1\"},\"\\\\vdots\":{font:\"main\",group:\"textord\",replace:\"\\u22ee\"},\"\\\\acute\":{font:\"main\",group:\"accent\",replace:\"\\xb4\"},\"\\\\grave\":{font:\"main\",group:\"accent\",replace:\"`\"},\"\\\\ddot\":{font:\"main\",group:\"accent\",replace:\"\\xa8\"},\"\\\\tilde\":{font:\"main\",group:\"accent\",replace:\"~\"},\"\\\\bar\":{font:\"main\",group:\"accent\",replace:\"\\xaf\"},\"\\\\breve\":{font:\"main\",group:\"accent\",replace:\"\\u02d8\"},\"\\\\check\":{font:\"main\",group:\"accent\",replace:\"\\u02c7\"},\"\\\\hat\":{font:\"main\",group:\"accent\",replace:\"^\"},\"\\\\vec\":{font:\"main\",group:\"accent\",replace:\"\\u20d7\"},\"\\\\dot\":{font:\"main\",group:\"accent\",replace:\"\\u02d9\"},\"\\\\imath\":{font:\"main\",group:\"mathord\",replace:\"\\u0131\"},\"\\\\jmath\":{font:\"main\",group:\"mathord\",replace:\"\\u0237\"}},text:{\"\\\\ \":{font:\"main\",group:\"spacing\",replace:\"\\xa0\"},\" \":{font:\"main\",group:\"spacing\",replace:\"\\xa0\"},\"~\":{font:\"main\",group:\"spacing\",replace:\"\\xa0\"}}};var a='0123456789/@.\"';for(var r=0;r<a.length;r++){var l=a.charAt(r);h.math[l]={font:\"main\",group:\"textord\"}}var s=\"0123456789`!@*()-=+[]'\\\";:?/.,\";for(var r=0;r<s.length;r++){var l=s.charAt(r);h.text[l]={font:\"main\",group:\"textord\"}}var p=\"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\";for(var r=0;r<p.length;r++){var l=p.charAt(r);h.math[l]={font:\"main\",group:\"mathord\"};h.text[l]={font:\"main\",group:\"textord\"}}t.exports=h},{}],23:[function(e,t,i){var h=Array.prototype.indexOf;var a=function(e,t){if(e==null){return-1}if(h&&e.indexOf===h){return e.indexOf(t)}var i=0,a=e.length;for(;i<a;i++){if(e[i]===t){return i}}return-1};var r=function(e,t){return a(e,t)!==-1};var l=function(e,t){return e===undefined?t:e};var s=/([A-Z])/g;var p=function(e){return e.replace(s,\"-$1\").toLowerCase()};var c={\"&\":\"&amp;\",\">\":\"&gt;\",\"<\":\"&lt;\",'\"':\"&quot;\",\"'\":\"&#x27;\"};var n=/[&><\"']/g;function o(e){return c[e]}function g(e){return(\"\"+e).replace(n,o)}var d;if(typeof document!==\"undefined\"){var w=document.createElement(\"span\");if(\"textContent\"in w){d=function(e,t){e.textContent=t}}else{d=function(e,t){e.innerText=t}}}function u(e){d(e,\"\")}t.exports={contains:r,deflt:l,escape:g,hyphenate:p,indexOf:a,setTextContent:d,clearNode:u}},{}]},{},[1])(1)});\n";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "(function(e){if(typeof exports===\"object\"&&typeof module!==\"undefined\"){module.exports=e()}else if(typeof define===\"function\"&&define.amd){define([],e)}else{var t;if(typeof window!==\"undefined\"){t=window}else if(typeof global!==\"undefined\"){t=global}else if(typeof self!==\"undefined\"){t=self}else{t=this}t.renderMathInElement=e()}})(function(){var e,t,r;return function n(e,t,r){function a(o,l){if(!t[o]){if(!e[o]){var f=typeof require==\"function\"&&require;if(!l&&f)return f(o,!0);if(i)return i(o,!0);var d=new Error(\"Cannot find module '\"+o+\"'\");throw d.code=\"MODULE_NOT_FOUND\",d}var s=t[o]={exports:{}};e[o][0].call(s.exports,function(t){var r=e[o][1][t];return a(r?r:t)},s,s.exports,n,e,t,r)}return t[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e,t,r){var n=e(\"./splitAtDelimiters\");var a=function(e,t){var r=[{type:\"text\",data:e}];for(var a=0;a<t.length;a++){var i=t[a];r=n(r,i.left,i.right,i.display||false)}return r};var i=function(e,t){var r=a(e,t);var n=document.createDocumentFragment();for(var i=0;i<r.length;i++){if(r[i].type===\"text\"){n.appendChild(document.createTextNode(r[i].data))}else{var o=document.createElement(\"span\");var l=r[i].data;try{katex.render(l,o,{displayMode:r[i].display})}catch(f){if(!(f instanceof katex.ParseError)){throw f}console.error(\"KaTeX auto-render: Failed to parse `\"+r[i].data+\"` with \",f);n.appendChild(document.createTextNode(r[i].rawData));continue}n.appendChild(o)}}return n};var o=function(e,t,r){for(var n=0;n<e.childNodes.length;n++){var a=e.childNodes[n];if(a.nodeType===3){var l=i(a.textContent,t);n+=l.childNodes.length-1;e.replaceChild(l,a)}else if(a.nodeType===1){var f=r.indexOf(a.nodeName.toLowerCase())===-1;if(f){o(a,t,r)}}}};var l={delimiters:[{left:\"$$\",right:\"$$\",display:true},{left:\"\\\\[\",right:\"\\\\]\",display:true},{left:\"\\\\(\",right:\"\\\\)\",display:false}],ignoredTags:[\"script\",\"noscript\",\"style\",\"textarea\",\"pre\",\"code\"]};var f=function(e){var t,r;for(var n=1,a=arguments.length;n<a;n++){t=arguments[n];for(r in t){if(Object.prototype.hasOwnProperty.call(t,r)){e[r]=t[r]}}}return e};var d=function(e,t){if(!e){throw new Error(\"No element provided to render\")}t=f({},l,t);o(e,t.delimiters,t.ignoredTags)};t.exports=d},{\"./splitAtDelimiters\":2}],2:[function(e,t,r){var n=function(e,t,r){var n=r;var a=0;var i=e.length;while(n<t.length){var o=t[n];if(a<=0&&t.slice(n,n+i)===e){return n}else if(o===\"\\\\\"){n++}else if(o===\"{\"){a++}else if(o===\"}\"){a--}n++}return-1};var a=function(e,t,r,a){var i=[];for(var o=0;o<e.length;o++){if(e[o].type===\"text\"){var l=e[o].data;var f=true;var d=0;var s;s=l.indexOf(t);if(s!==-1){d=s;i.push({type:\"text\",data:l.slice(0,d)});f=false}while(true){if(f){s=l.indexOf(t,d);if(s===-1){break}i.push({type:\"text\",data:l.slice(d,s)});d=s}else{s=n(r,l,d+t.length);if(s===-1){break}i.push({type:\"math\",data:l.slice(d+t.length,s),rawData:l.slice(d,s+r.length),display:a});d=s+r.length}f=!f}i.push({type:\"text\",data:l.slice(d)})}else{i.push(e[o])}}return i};t.exports=a},{}]},{},[1])(1)});\n";

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{box-sizing:border-box}input,select,textarea,button{font:13px/1.4 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"}body{font:13px/1.4 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";color:#333;background-color:#fff}a{color:#4078c0;text-decoration:none}a:hover,a:active{text-decoration:underline}hr,.rule{height:0;margin:15px 0;overflow:hidden;background:transparent;border:0;border-bottom:1px solid #ddd}hr:before,.rule:before{display:table;content:\"\"}hr:after,.rule:after{display:table;clear:both;content:\"\"}h1,h2,h3,h4,h5,h6{margin-top:15px;margin-bottom:15px;line-height:1.1}h1{font-size:30px}h2{font-size:21px}h3{font-size:16px}h4{font-size:14px}h5{font-size:12px}h6{font-size:11px}small{font-size:90%}blockquote{margin:0}.lead{margin-bottom:30px;font-size:20px;font-weight:300;color:#555}.text-muted{color:#767676}.text-danger{color:#bd2c00}.text-emphasized{font-weight:bold;color:#333}.text-small{font-size:12px}ul,ol{padding:0;margin-top:0;margin-bottom:0}ol ol,ul ol{list-style-type:lower-roman}ul ul ol,ul ol ol,ol ul ol,ol ol ol{list-style-type:lower-alpha}dd{margin-left:0}tt,code{font-family:Consolas,\"Liberation Mono\",Menlo,Courier,monospace;font-size:12px}pre{margin-top:0;margin-bottom:0;font:12px Consolas,\"Liberation Mono\",Menlo,Courier,monospace}.container{width:980px;margin-right:auto;margin-left:auto}.container:before{display:table;content:\"\"}.container:after{display:table;clear:both;content:\"\"}.columns{margin-right:-10px;margin-left:-10px}.columns:before{display:table;content:\"\"}.columns:after{display:table;clear:both;content:\"\"}.column{float:left;padding-right:10px;padding-left:10px}.one-third{width:33.333333%}.two-thirds{width:66.666667%}.one-fourth{width:25%}.one-half{width:50%}.three-fourths{width:75%}.one-fifth{width:20%}.four-fifths{width:80%}.single-column{padding-right:10px;padding-left:10px}.table-column{display:table-cell;width:1%;padding-right:10px;padding-left:10px;vertical-align:top}fieldset{padding:0;margin:0;border:0}label{font-size:13px;font-weight:bold}.form-control,input[type=\"text\"],input[type=\"password\"],input[type=\"email\"],input[type=\"number\"],input[type=\"tel\"],input[type=\"url\"],select,textarea{min-height:34px;padding:7px 8px;font-size:13px;color:#333;vertical-align:middle;background-color:#fff;background-repeat:no-repeat;background-position:right 8px center;border:1px solid #ccc;border-radius:3px;outline:none;box-shadow:inset 0 1px 2px rgba(0,0,0,0.075)}.form-control.focus,.form-control:focus,input[type=\"text\"].focus,input[type=\"text\"]:focus,input[type=\"password\"].focus,input[type=\"password\"]:focus,input[type=\"email\"].focus,input[type=\"email\"]:focus,input[type=\"number\"].focus,input[type=\"number\"]:focus,input[type=\"tel\"].focus,input[type=\"tel\"]:focus,input[type=\"url\"].focus,input[type=\"url\"]:focus,select.focus,select:focus,textarea.focus,textarea:focus{border-color:#51a7e8;box-shadow:inset 0 1px 2px rgba(0,0,0,0.075),0 0 5px rgba(81,167,232,0.5)}select:not([multiple]){height:34px;vertical-align:middle}input.input-contrast,.input-contrast{background-color:#fafafa}input.input-contrast:focus,.input-contrast:focus{background-color:#fff}::-webkit-input-placeholder{color:#aaa}::-moz-placeholder{color:#aaa}:-ms-input-placeholder{color:#aaa}::placeholder{color:#aaa}input.input-mini{min-height:26px;padding-top:4px;padding-bottom:4px;font-size:12px}input.input-large{padding:6px 10px;font-size:16px}.input-block{display:block;width:100%}.input-monospace{font-family:Consolas,\"Liberation Mono\",Menlo,Courier,monospace}dl.form{margin:15px 0}dl.form input[type=\"text\"],dl.form input[type=\"password\"],dl.form input[type=\"email\"],dl.form input[type=\"url\"],dl.form select,dl.form textarea{background-color:#fafafa}dl.form input[type=\"text\"]:focus,dl.form input[type=\"password\"]:focus,dl.form input[type=\"email\"]:focus,dl.form input[type=\"url\"]:focus,dl.form select:focus,dl.form textarea:focus{background-color:#fff}dl.form>dt{margin:0 0 6px}dl.form>dt label{position:relative}dl.form.flattened>dt{float:left;margin:0;line-height:32px}dl.form.flattened>dd{line-height:32px}dl.form>dd input[type=\"text\"],dl.form>dd input[type=\"password\"],dl.form>dd input[type=\"email\"],dl.form>dd input[type=\"url\"]{width:440px;max-width:100%;margin-right:5px}dl.form>dd input.shorter{width:130px}dl.form>dd input.short{width:250px}dl.form>dd input.long{width:100%}dl.form>dd textarea{width:100%;height:200px;min-height:200px}dl.form>dd textarea.short{height:50px;min-height:50px}dl.form>dd h4{margin:4px 0 0}dl.form>dd h4.is-error{color:#bd2c00}dl.form>dd h4.is-success{color:#6cc644}dl.form>dd h4+p.note{margin-top:0}dl.form.required>dt>label:after{padding-left:5px;color:#9f1006;content:\"*\"}dl.form .success,dl.form .error,dl.form .indicator{display:none;font-size:12px;font-weight:bold}dl.form.loading{opacity:0.5}dl.form.loading .indicator{display:inline}dl.form.loading .spinner{display:inline-block;vertical-align:middle}dl.form.successful .success{display:inline;color:#390}dl.form.warn dd.warning,dl.form.warn dd.error,dl.form.errored dd.warning,dl.form.errored dd.error{display:inline-block;position:absolute;max-width:450px;z-index:10;margin:2px 0 0;padding:5px 8px;font-size:13px;font-weight:normal;border-radius:3px}dl.form.warn dd.warning:after,dl.form.warn dd.warning:before,dl.form.warn dd.error:after,dl.form.warn dd.error:before,dl.form.errored dd.warning:after,dl.form.errored dd.warning:before,dl.form.errored dd.error:after,dl.form.errored dd.error:before{bottom:100%;z-index:15;left:10px;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}dl.form.warn dd.warning:after,dl.form.warn dd.error:after,dl.form.errored dd.warning:after,dl.form.errored dd.error:after{border-width:5px}dl.form.warn dd.warning:before,dl.form.warn dd.error:before,dl.form.errored dd.warning:before,dl.form.errored dd.error:before{border-width:6px;margin-left:-1px}dl.form.warn dd.warning{color:#4e401e;background-color:#ffe5a7;border:1px solid #e7ce94}dl.form.warn dd.warning:after{border-bottom-color:#ffe5a7}dl.form.warn dd.warning:before{border-bottom-color:#cdb683}dl.form.errored>dt label{color:#bd2c00}dl.form.errored dd.error{color:#fff;background-color:#bf1515;border-color:#911;font-size:13px}dl.form.errored dd.error:after{border-bottom-color:#bf1515}dl.form.errored dd.error:before{border-bottom-color:#911}.note{min-height:17px;margin:4px 0 2px;font-size:12px;color:#767676}.note .spinner{margin-right:3px;vertical-align:middle}.form-checkbox{padding-left:20px;margin:15px 0;vertical-align:middle}.form-checkbox label em.highlight{position:relative;left:-4px;padding:2px 4px;font-style:normal;background:#fffbdc;border-radius:3px}.form-checkbox input[type=checkbox],.form-checkbox input[type=radio]{float:left;margin:2px 0 0 -20px;vertical-align:middle}.form-checkbox .note{display:block;margin:0;font-size:12px;font-weight:normal;color:#666}.hfields{margin:15px 0}.hfields:before{display:table;content:\"\"}.hfields:after{display:table;clear:both;content:\"\"}.hfields dl.form{float:left;margin:0 30px 0 0}.hfields dl.form>dt label{display:inline-block;margin:5px 0 0;color:#666}.hfields dl.form>dt img{position:relative;top:-2px}.hfields .btn{float:left;margin:28px 25px 0 -20px}.hfields select{margin-top:5px}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.input-group{display:table}.input-group input{position:relative;width:100%}.input-group input:focus{z-index:2}.input-group input[type=\"text\"]+.btn{margin-left:0}.input-group.inline{display:inline-table}.input-group input,.input-group-button{display:table-cell}.input-group-button{width:1%;vertical-align:middle}.input-group input:first-child,.input-group-button:first-child .btn{border-top-right-radius:0;border-bottom-right-radius:0}.input-group-button:first-child .btn{margin-right:-1px}.input-group input:last-child,.input-group-button:last-child .btn{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-button:last-child .btn{margin-left:-1px}.form-actions:before{display:table;content:\"\"}.form-actions:after{display:table;clear:both;content:\"\"}.form-actions .btn{float:right}.form-actions .btn+.btn{margin-right:5px}.form-warning{padding:8px 10px;margin:10px 0;font-size:14px;color:#333;background:#ffffe2;border:1px solid #e7e4c2;border-radius:4px}.form-warning p{margin:0;line-height:1.5}.form-warning strong{color:#000}.form-warning a{font-weight:bold}.status-indicator{font:normal normal 16px/1 \"octicons\";display:inline-block;text-decoration:none;-webkit-font-smoothing:antialiased;margin-left:5px}.status-indicator-success:before{color:#6cc644;content:\"\\f03a\"}.status-indicator-failed:before{color:#bd2c00;content:\"\\f02d\"}.select{display:inline-block;max-width:100%;padding:7px 24px 7px 8px;vertical-align:middle;background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC) no-repeat right 8px center;background-size:8px 10px;box-shadow:inset 0 -1px 2px rgba(0,0,0,0.075);-webkit-appearance:none;-moz-appearance:none;appearance:none;padding-right:8px \\9;background-image:none \\9}.select:focus{outline:none;border-color:#51a7e8;box-shadow:inset 0 1px 2px rgba(0,0,0,0.075),0 0 5px rgba(81,167,232,0.5)}.select::-ms-expand{opacity:0}.select-sm{padding-top:3px;padding-bottom:3px;font-size:12px}.select-sm:not([multiple]){height:26px;min-height:26px}.clearfix:before{display:table;content:\"\"}.clearfix:after{display:table;clear:both;content:\"\"}.right{float:right}.left{float:left}.centered{display:block;float:none;margin-left:auto;margin-right:auto}.text-right{text-align:right}.text-left{text-align:left}.text-center{text-align:center}.danger{color:#c00}.mute{color:#000}.text-diff-added{color:#55a532}.text-diff-deleted{color:#bd2c00}.text-open,.text-success{color:#6cc644}.text-closed{color:#bd2c00}.text-reverted{color:#bd2c00}.text-merged{color:#6e5494}.text-renamed{color:#fffa5d}.text-pending{color:#cea61b}.text-error,.text-failure{color:#bd2c00}.muted-link{color:#767676}.muted-link:hover{color:#4078c0;text-decoration:none}.hidden{display:none}.warning{padding:0.5em;margin-bottom:0.8em;font-weight:bold;background-color:#fffccc}.error_box{padding:1em;font-weight:bold;background-color:#ffebe8;border:1px solid #dd3c10}.flash{position:relative;padding:15px;font-size:14px;line-height:1.5;color:#246;background-color:#e2eef9;border:1px solid #bac6d3;border-radius:3px}.flash p:last-child{margin-bottom:0}.flash-messages{margin-bottom:20px}.flash-close{float:right;width:34px;height:44px;margin:-11px;color:inherit;line-height:40px;text-align:center;cursor:pointer;opacity:0.6;background:none;border:0;-webkit-appearance:none}.flash-close:hover{opacity:1}.flash-action{float:right;margin-top:-4px;margin-left:20px}.flash-warn{color:#4c4a42;background-color:#fff9ea;border-color:#dfd8c2}.flash-error{color:#911;background-color:#fcdede;border-color:#d2b2b2}.flash-full{margin-top:-1px;border-width:1px 0;border-radius:0}.flash-with-icon .container{padding-left:40px}.flash-with-icon .flash-icon{float:left;margin-top:3px;margin-left:-25px}.flash-content{margin-top:0;margin-bottom:0;line-height:1.5}.avatar{display:inline-block;overflow:hidden;line-height:1;vertical-align:middle;border-radius:3px}.avatar-small{border-radius:2px}.avatar-link{float:left;line-height:1}.avatar-group-item{display:inline-block;margin-bottom:3px}.avatar-parent-child{position:relative}.avatar-child{position:absolute;right:-15%;bottom:-9%;background-color:#fff;border-radius:2px;box-shadow:-2px -2px 0 rgba(255,255,255,0.8)}.blankslate{position:relative;padding:30px;text-align:center;background-color:#fafafa;border:1px solid #e5e5e5;border-radius:3px;box-shadow:inset 0 0 10px rgba(0,0,0,0.05)}.blankslate.clean-background{background:none;border:0;box-shadow:none}.blankslate.capped{border-radius:0 0 3px 3px}.blankslate.spacious{padding:100px 60px 120px}.blankslate.has-fixed-width{width:485px;margin:0 auto}.blankslate.large-format h3{margin:0.75em 0;font-size:20px}.blankslate.large-format p{font-size:16px}.blankslate.large-format p.has-fixed-width{width:540px;margin:0 auto;text-align:left}.blankslate.large-format .mega-octicon{width:40px;height:40px;font-size:40px;color:#aaa}.blankslate.large-format .octicon-inbox{font-size:48px;line-height:40px}.blankslate code{padding:2px 5px 3px;font-size:14px;background:#fff;border:1px solid #eee;border-radius:3px}.blankslate>.mega-octicon{color:#aaa}.blankslate .mega-octicon+.mega-octicon{margin-left:10px}.tabnav+.blankslate{margin-top:20px}.blankslate .context-loader.large-format-loader{padding-top:50px}.counter{display:inline-block;padding:2px 5px;font-size:11px;font-weight:bold;line-height:1;color:#666;background-color:#eee;border-radius:20px}.btn{position:relative;display:inline-block;padding:6px 12px;font-size:13px;font-weight:bold;line-height:20px;color:#333;white-space:nowrap;vertical-align:middle;cursor:pointer;background-color:#eee;background-image:linear-gradient(#fcfcfc, #eee);border:1px solid #d5d5d5;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none}.btn i{font-style:normal;font-weight:500;opacity:0.6}.btn .octicon{vertical-align:text-top}.btn .counter{text-shadow:none;background-color:#e5e5e5}.btn:focus{text-decoration:none;border-color:#51a7e8;outline:none;box-shadow:0 0 5px rgba(81,167,232,0.5)}.btn:focus:hover,.btn.selected:focus{border-color:#51a7e8}.btn:hover,.btn:active,.btn.zeroclipboard-is-hover,.btn.zeroclipboard-is-active{text-decoration:none;background-color:#ddd;background-image:linear-gradient(#eee, #ddd);border-color:#ccc}.btn:active,.btn.selected,.btn.zeroclipboard-is-active{background-color:#dcdcdc;background-image:none;border-color:#b5b5b5;box-shadow:inset 0 2px 4px rgba(0,0,0,0.15)}.btn.selected:hover{background-color:#cfcfcf}.btn:disabled,.btn:disabled:hover,.btn.disabled,.btn.disabled:hover{color:rgba(102,102,102,0.5);cursor:default;background-color:rgba(229,229,229,0.5);background-image:none;border-color:rgba(197,197,197,0.5);box-shadow:none}.btn-primary{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.15);background-color:#60b044;background-image:linear-gradient(#8add6d, #60b044);border-color:#5ca941}.btn-primary .counter{color:#60b044;background-color:#fff}.btn-primary:hover{color:#fff;background-color:#569e3d;background-image:linear-gradient(#79d858, #569e3d);border-color:#4a993e}.btn-primary:active,.btn-primary.selected{text-shadow:0 1px 0 rgba(0,0,0,0.15);background-color:#569e3d;background-image:none;border-color:#418737}.btn-primary.selected:hover{background-color:#4c8b36}.btn-primary:disabled,.btn-primary:disabled:hover,.btn-primary.disabled,.btn-primary.disabled:hover{color:#fefefe;background-color:#add39f;background-image:linear-gradient(#c3ecb4, #add39f);border-color:#b9dcac #b9dcac #a7c89b}.btn-danger{color:#900}.btn-danger:hover{color:#fff;background-color:#b33630;background-image:linear-gradient(#dc5f59, #b33630);border-color:#cd504a}.btn-danger:active,.btn-danger.selected{color:#fff;background-color:#b33630;background-image:none;border-color:#9f312c}.btn-danger.selected:hover{background-color:#9f302b}.btn-danger:disabled,.btn-danger:disabled:hover,.btn-danger.disabled,.btn-danger.disabled:hover{color:#cb7f7f;background-color:#efefef;background-image:linear-gradient(#fefefe, #efefef);border-color:#e1e1e1}.btn-danger:hover .counter,.btn-danger:active .counter,.btn-danger.selected .counter{color:#b33630;background-color:#fff}.btn-outline{color:#4078c0;background-color:#fff;background-image:none;border:1px solid #e5e5e5}.btn-outline .counter{background-color:#eee}.btn-outline:hover,.btn-outline:active,.btn-outline.selected,.btn-outline.zeroclipboard-is-hover,.btn-outline.zeroclipboard-is-active{color:#fff;background-color:#4078c0;background-image:none;border-color:#4078c0}.btn-outline:hover .counter,.btn-outline:active .counter,.btn-outline.selected .counter,.btn-outline.zeroclipboard-is-hover .counter,.btn-outline.zeroclipboard-is-active .counter{color:#4078c0;background-color:#fff}.btn-outline.selected:hover{background-color:#396cad}.btn-outline:disabled,.btn-outline:disabled:hover,.btn-outline.disabled,.btn-outline.disabled:hover{color:#767676;background-color:#fff;background-image:none;border-color:#e5e5e5}.btn-with-count{float:left;border-top-right-radius:0;border-bottom-right-radius:0}.btn-sm{padding:2px 10px}.hidden-text-expander{display:block}.hidden-text-expander.inline{position:relative;top:-1px;display:inline-block;margin-left:5px;line-height:0}.hidden-text-expander a{display:inline-block;height:12px;padding:0 5px;font-size:12px;font-weight:bold;line-height:6px;color:#555;text-decoration:none;vertical-align:middle;background:#ddd;border-radius:1px}.hidden-text-expander a:hover{text-decoration:none;background-color:#ccc}.hidden-text-expander a:active{color:#fff;background-color:#4183c4}.social-count{float:left;padding:2px 7px;font-size:11px;font-weight:bold;line-height:20px;color:#333;vertical-align:middle;background-color:#fff;border:1px solid #ddd;border-left:0;border-top-right-radius:3px;border-bottom-right-radius:3px}.social-count:hover,.social-count:active{text-decoration:none}.social-count:hover{color:#4078c0;cursor:pointer}.btn-block{display:block;width:100%;text-align:center}.btn-group{display:inline-block;vertical-align:middle}.btn-group:before{display:table;content:\"\"}.btn-group:after{display:table;clear:both;content:\"\"}.btn-group .btn{position:relative;float:left}.btn-group .btn:not(:first-child):not(:last-child){border-radius:0}.btn-group .btn:first-child:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group .btn:last-child:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .btn:hover,.btn-group .btn:active,.btn-group .btn.selected{z-index:2}.btn-group .btn:focus{z-index:3}.btn-group .btn+.btn{margin-left:-1px}.btn-group .btn+.button_to,.btn-group .button_to+.btn,.btn-group .button_to+.button_to{margin-left:-1px}.btn-group .button_to{float:left}.btn-group .button_to .btn{border-radius:0}.btn-group .button_to:first-child .btn{border-top-left-radius:3px;border-bottom-left-radius:3px}.btn-group .button_to:last-child .btn{border-top-right-radius:3px;border-bottom-right-radius:3px}.btn-group+.btn-group,.btn-group+.btn{margin-left:5px}.btn-link{display:inline-block;padding:0;font-size:inherit;color:#4078c0;white-space:nowrap;cursor:pointer;background-color:transparent;border:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none}.btn-link:hover,.btn-link:focus{text-decoration:underline}.btn-link:focus{outline:none}.menu{margin-bottom:15px;list-style:none;background-color:#fff;border:1px solid #d8d8d8;border-radius:3px}.menu-item{position:relative;display:block;padding:8px 10px;text-shadow:0 1px 0 #fff;border-bottom:1px solid #eee}.menu-item:first-child{border-top:0;border-top-right-radius:2px;border-top-left-radius:2px}.menu-item:first-child:before{border-top-left-radius:2px}.menu-item:last-child{border-bottom:0;border-bottom-right-radius:2px;border-bottom-left-radius:2px}.menu-item:last-child:before{border-bottom-left-radius:2px}.menu-item:hover{text-decoration:none;background-color:#f9f9f9}.menu-item.selected{font-weight:bold;color:#222;cursor:default;background-color:#fff}.menu-item.selected:before{position:absolute;top:0;left:0;bottom:0;width:2px;content:\"\";background-color:#d26911}.menu-item .octicon{margin-right:5px;width:16px;color:#333;text-align:center}.menu-item .counter{float:right;margin-left:5px}.menu-item .menu-warning{float:right;color:#d26911}.menu-item .avatar{float:left;margin-right:5px}.menu-item.alert .counter{color:#bd2c00}.menu-heading{display:block;padding:8px 10px;margin-top:0;margin-bottom:0;font-size:13px;font-weight:bold;line-height:20px;color:#555;background-color:#f7f7f7;border-bottom:1px solid #eee}.menu-heading:hover{text-decoration:none}.menu-heading:first-child{border-top-right-radius:2px;border-top-left-radius:2px}.menu-heading:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px;border-bottom:0}.tabnav{margin-top:0;margin-bottom:15px;border-bottom:1px solid #ddd}.tabnav .counter{margin-left:5px}.tabnav-tabs{margin-bottom:-1px}.tabnav-tab{display:inline-block;padding:8px 12px;font-size:14px;line-height:20px;color:#666;text-decoration:none;border:1px solid transparent;border-bottom:0}.tabnav-tab.selected{color:#333;background-color:#fff;border-color:#ddd;border-radius:3px 3px 0 0}.tabnav-tab:hover{text-decoration:none}.tabnav-extra{display:inline-block;padding-top:10px;margin-left:10px;font-size:12px;color:#666}.tabnav-extra>.octicon{margin-right:2px}a.tabnav-extra:hover{color:#4078c0;text-decoration:none}.tabnav-btn{margin-left:10px}.filter-list{list-style-type:none}.filter-list.small .filter-item{padding:4px 10px;margin:0 0 2px;font-size:12px}.filter-list.pjax-active .filter-item{color:#767676;background-color:transparent}.filter-list.pjax-active .filter-item.pjax-active{color:#fff;background-color:#4078c0}.filter-item{position:relative;display:block;padding:8px 10px;margin-bottom:5px;overflow:hidden;font-size:14px;color:#767676;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;border-radius:3px}.filter-item:hover{text-decoration:none;background-color:#eee}.filter-item.selected{color:#fff;background-color:#4078c0}.filter-item.selected .octicon-remove-close{float:right;opacity:0.8}.filter-item .count{float:right;font-weight:bold}.filter-item .bar{position:absolute;top:2px;right:0;bottom:2px;z-index:-1;display:inline-block;background-color:#f1f1f1}.state{display:inline-block;padding:4px 8px;font-weight:bold;line-height:20px;color:#fff;text-align:center;border-radius:3px;background-color:#999}.state-open,.state-proposed,.state-reopened{background-color:#6cc644}.state-merged{background-color:#6e5494}.state-closed{background-color:#bd2c00}.state-renamed{background-color:#fffa5d}.tooltipped{position:relative}.tooltipped:after{position:absolute;z-index:1000000;display:none;padding:5px 8px;font:normal normal 11px/1.5 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";color:#fff;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:rgba(0,0,0,0.8);border-radius:3px;-webkit-font-smoothing:subpixel-antialiased}.tooltipped:before{position:absolute;z-index:1000001;display:none;width:0;height:0;color:rgba(0,0,0,0.8);pointer-events:none;content:\"\";border:5px solid transparent}.tooltipped:hover:before,.tooltipped:hover:after,.tooltipped:active:before,.tooltipped:active:after,.tooltipped:focus:before,.tooltipped:focus:after{display:inline-block;text-decoration:none}.tooltipped-multiline:hover:after,.tooltipped-multiline:active:after,.tooltipped-multiline:focus:after{display:table-cell}.tooltipped-s:after,.tooltipped-se:after,.tooltipped-sw:after{top:100%;right:50%;margin-top:5px}.tooltipped-s:before,.tooltipped-se:before,.tooltipped-sw:before{top:auto;right:50%;bottom:-5px;margin-right:-5px;border-bottom-color:rgba(0,0,0,0.8)}.tooltipped-se:after{right:auto;left:50%;margin-left:-15px}.tooltipped-sw:after{margin-right:-15px}.tooltipped-n:after,.tooltipped-ne:after,.tooltipped-nw:after{right:50%;bottom:100%;margin-bottom:5px}.tooltipped-n:before,.tooltipped-ne:before,.tooltipped-nw:before{top:-5px;right:50%;bottom:auto;margin-right:-5px;border-top-color:rgba(0,0,0,0.8)}.tooltipped-ne:after{right:auto;left:50%;margin-left:-15px}.tooltipped-nw:after{margin-right:-15px}.tooltipped-s:after,.tooltipped-n:after{-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%)}.tooltipped-w:after{right:100%;bottom:50%;margin-right:5px;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%)}.tooltipped-w:before{top:50%;bottom:50%;left:-5px;margin-top:-5px;border-left-color:rgba(0,0,0,0.8)}.tooltipped-e:after{bottom:50%;left:100%;margin-left:5px;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%)}.tooltipped-e:before{top:50%;right:-5px;bottom:50%;margin-top:-5px;border-right-color:rgba(0,0,0,0.8)}.tooltipped-multiline:after{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:250px;word-break:break-word;word-wrap:normal;white-space:pre-line;border-collapse:separate}.tooltipped-multiline.tooltipped-s:after,.tooltipped-multiline.tooltipped-n:after{right:auto;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.tooltipped-multiline.tooltipped-w:after,.tooltipped-multiline.tooltipped-e:after{right:100%}@media screen and (min-width: 0 \\0){.tooltipped-multiline:after{width:250px}}.tooltipped-sticky:before,.tooltipped-sticky:after{display:inline-block}.tooltipped-sticky.tooltipped-multiline:after{display:table-cell}.flex-table{display:table}.flex-table-item{display:table-cell;width:1%;white-space:nowrap;vertical-align:middle}.flex-table-item-primary{width:99%}.css-truncate.css-truncate-target,.css-truncate .css-truncate-target{display:inline-block;max-width:125px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:top}.css-truncate.expandable.zeroclipboard-is-hover .css-truncate-target,.css-truncate.expandable.zeroclipboard-is-hover.css-truncate-target,.css-truncate.expandable:hover .css-truncate-target,.css-truncate.expandable:hover.css-truncate-target{max-width:10000px !important}\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var _module;
	_module = {};
	if (true) {
	  module.exports = _module;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\lib\props\store.ls.map


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var props;
	props = {
	  layout: {
	    id: 'content__layout__select',
	    options: [
	      {
	        value: 'Layout - Split'
	      }, {
	        value: 'Layout - Split VTab'
	      }, {
	        value: 'Layout - Combined'
	      }
	    ]
	  },
	  options: {
	    store_data_main: {
	      id: 'content__option__store__data__main',
	      config: 'store_data_main',
	      options: [
	        {
	          value: 'Static'
	        }, {
	          value: 'Browser (LocalStorage)'
	        }, {
	          value: 'Browser (IndexedDB)'
	        }, {
	          value: 'Server (AJAX)'
	        }, {
	          value: 'Server (DOM)'
	        }, {
	          value: 'Cloud (Firebase)'
	        }
	      ],
	      inputs: ['db_url', 'table']
	    },
	    store_repo_main: {
	      id: 'content__option__store__repo__main',
	      config: 'store_repo_main',
	      options: [
	        {
	          value: 'Static'
	        }, {
	          value: 'Browser (LocalStorage)'
	        }, {
	          value: 'Browser (IndexedDB)'
	        }, {
	          value: 'Server (AJAX)'
	        }, {
	          value: 'Server (DOM)'
	        }, {
	          value: 'Cloud (Firebase)'
	        }
	      ],
	      inputs: ['db_url', 'table']
	    },
	    store_data_app: {
	      id: 'content__option__store__data__app',
	      config: 'store_data_app',
	      options: [
	        {
	          value: 'Static'
	        }, {
	          value: 'Browser (LocalStorage)'
	        }, {
	          value: 'Browser (IndexedDB)'
	        }, {
	          value: 'Server (AJAX)'
	        }, {
	          value: 'Server (DOM)'
	        }, {
	          value: 'Cloud (Firebase)'
	        }
	      ],
	      inputs: ['db_url', 'table']
	    },
	    run_preprocessor_less: {
	      id: 'content__option__run__less',
	      title: 'Less'
	    },
	    run_preprocessor_sass: {
	      id: 'content__option__run__sass',
	      title: 'Sass'
	    },
	    run_preprocessor_styl: {
	      id: 'content__option__run__styl',
	      title: 'Stylus'
	    },
	    run_transpiler_babel: {
	      id: 'content__option__run__babel',
	      title: 'Babel'
	    },
	    run_transpiler_ts: {
	      id: 'content__option__run__ts',
	      title: 'TypeScript'
	    },
	    run_transpiler_cs: {
	      id: 'content__option__run__cs',
	      title: 'CoffeeScript'
	    },
	    run_database_sql: {
	      id: 'content__option__run__sql',
	      title: 'SQL'
	    },
	    run_database_mongo: {
	      id: 'content__option__run__mongo',
	      title: 'Mongo'
	    },
	    run_lang_php: {
	      id: 'content__option__run__php',
	      title: 'PHP'
	    },
	    run_lang_ruby: {
	      id: 'content__option__run__ruby',
	      title: 'Ruby'
	    },
	    run_lang_python: {
	      id: 'content__option__run__python',
	      title: 'Python'
	    },
	    run_music_abc: {
	      id: 'content__option__run__abc',
	      title: 'ABC'
	    }
	  }
	};
	if (true) {
	  module.exports = props;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\lib\props\boot.ls.map


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var props;
	props = {
	  editors: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__editor',
	        type: 'text/x-markdown',
	        ext: 'md',
	        onChange: 'inputOnEditorChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__editor',
	        type: 'text/html',
	        ext: 'html'
	      }
	    }
	  },
	  files: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__file',
	        options: [
	          {
	            value: 'index'
	          }, {
	            value: 'config'
	          }
	        ],
	        onChange: 'inputOnFileChange',
	        onCreate: 'inputOnFileCreate',
	        destroyable: 'inputDestroy'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__file',
	        options: [{
	          value: 'index'
	        }]
	      }
	    }
	  },
	  exts: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__ext',
	        options: [
	          {
	            value: 'txt'
	          }, {
	            value: 'html'
	          }, {
	            value: 'js'
	          }, {
	            value: 'css'
	          }, {
	            value: 'md'
	          }, {
	            value: '++.md'
	          }, {
	            value: 'jade'
	          }, {
	            value: 'less'
	          }, {
	            value: 'sass'
	          }, {
	            value: 'styl'
	          }, {
	            value: 'ls'
	          }, {
	            value: 'cs'
	          }, {
	            value: 'babel.js'
	          }, {
	            value: 'ts'
	          }, {
	            value: 'json'
	          }, {
	            value: 'yaml'
	          }, {
	            value: 'xml'
	          }, {
	            value: 'sql'
	          }, {
	            value: 'mongo.js'
	          }, {
	            value: 'php'
	          }, {
	            value: 'python'
	          }, {
	            value: 'ruby'
	          }, {
	            value: 'abc'
	          }, {
	            value: 'ashx'
	          }, {
	            value: 'java'
	          }, {
	            value: 'go'
	          }, {
	            value: 'rust'
	          }
	        ],
	        onChange: 'inputOnExtChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__ext',
	        options: [
	          {
	            value: 'txt'
	          }, {
	            value: 'html'
	          }, {
	            value: 'js'
	          }, {
	            value: 'css'
	          }, {
	            value: 'md'
	          }, {
	            value: '++.md'
	          }, {
	            value: 'jade'
	          }, {
	            value: 'less'
	          }, {
	            value: 'sass'
	          }, {
	            value: 'styl'
	          }, {
	            value: 'ls'
	          }, {
	            value: 'cs'
	          }, {
	            value: 'babel.js'
	          }, {
	            value: 'ts'
	          }, {
	            value: 'json'
	          }, {
	            value: 'yaml'
	          }, {
	            value: 'xml'
	          }, {
	            value: 'sql'
	          }, {
	            value: 'mongo.js'
	          }, {
	            value: 'php'
	          }, {
	            value: 'python'
	          }, {
	            value: 'ruby'
	          }, {
	            value: 'abc'
	          }, {
	            value: 'ashx'
	          }, {
	            value: 'java'
	          }, {
	            value: 'go'
	          }, {
	            value: 'rust'
	          }
	        ],
	        onChange: 'outputOnExtChange'
	      }
	    }
	  },
	  modes: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__mode',
	        options: [
	          {
	            value: 'text/plain'
	          }, {
	            value: 'text/html'
	          }, {
	            value: 'text/javascript'
	          }, {
	            value: 'text/css'
	          }, {
	            value: 'text/x-markdown'
	          }, {
	            value: 'text/x-jade'
	          }, {
	            value: 'text/x-less'
	          }, {
	            value: 'text/x-sass'
	          }, {
	            value: 'text/x-styl'
	          }, {
	            value: 'text/x-livescript'
	          }, {
	            value: 'text/x-coffeescript'
	          }, {
	            value: 'text/typescript'
	          }, {
	            value: 'text/jsx'
	          }, {
	            value: 'application/x-json'
	          }, {
	            value: 'text/x-yaml'
	          }, {
	            value: 'text/xml'
	          }, {
	            value: 'text/x-sql'
	          }, {
	            value: 'text/x-php'
	          }, {
	            value: 'text/x-ruby'
	          }, {
	            value: 'text/x-python'
	          }, {
	            value: 'text/x-abc'
	          }, {
	            value: 'text/x-csharp'
	          }, {
	            value: 'text/x-java'
	          }, {
	            value: 'text/x-go'
	          }, {
	            value: 'text/x-rust'
	          }
	        ],
	        onChange: 'inputOnModeChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__mode',
	        options: [
	          {
	            value: 'text/plain'
	          }, {
	            value: 'text/html'
	          }, {
	            value: 'text/javascript'
	          }, {
	            value: 'text/css'
	          }, {
	            value: 'text/x-markdown'
	          }, {
	            value: 'text/x-jade'
	          }, {
	            value: 'text/x-less'
	          }, {
	            value: 'text/x-sass'
	          }, {
	            value: 'text/x-styl'
	          }, {
	            value: 'text/x-livescript'
	          }, {
	            value: 'text/x-coffeescript'
	          }, {
	            value: 'text/typescript'
	          }, {
	            value: 'text/jsx'
	          }, {
	            value: 'application/x-json'
	          }, {
	            value: 'text/x-yaml'
	          }, {
	            value: 'text/xml'
	          }, {
	            value: 'text/x-sql'
	          }, {
	            value: 'text/x-php'
	          }, {
	            value: 'text/x-ruby'
	          }, {
	            value: 'text/x-python'
	          }, {
	            value: 'text/x-abc'
	          }, {
	            value: 'text/x-csharp'
	          }, {
	            value: 'text/x-java'
	          }, {
	            value: 'text/x-go'
	          }, {
	            value: 'text/x-rust'
	          }
	        ],
	        onChange: 'outputOnModeChange'
	      }
	    }
	  },
	  lint: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__lint',
	        onChange: 'inputOnLintChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__lint',
	        onChange: 'outputOnLintChange'
	      }
	    }
	  },
	  result: {
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__result',
	        options: [
	          {
	            value: 'frame'
	          }, {
	            value: 'editor'
	          }
	        ],
	        onChange: 'outputOnResultChange'
	      }
	    }
	  },
	  urlhash: {
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__urlhash',
	        options: [{
	          value: '#/'
	        }],
	        onChange: 'outputOnUrlhashChange',
	        onCreate: 'outputOnUrlhashCreate'
	      }
	    }
	  }
	};
	if (true) {
	  module.exports = props;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\lib\props\main.ls.map


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var props;
	props = {
	  value: {
	    id: 'content__value'
	  },
	  route: {
	    routes: {
	      '/id/:id': 'routeOnId',
	      '/tree/?((w|.)*)': 'routeOnTree',
	      '/data/create': 'routeOnDataCreate',
	      '/data/list': 'routeOnDataList',
	      '/data/destroy/:id': 'routeOnDataDestroy'
	    }
	  },
	  src: {
	    id: 'content__src',
	    options: [
	      {
	        value: 'main_data'
	      }, {
	        value: 'main_repo'
	      }, {
	        value: 'main_input'
	      }, {
	        value: 'app_data'
	      }
	    ],
	    onChange: 'srcOnChange'
	  },
	  sample: {
	    ids: ['content__sample__list', 'content__sample__tree'],
	    options: [
	      {
	        value: 'md'
	      }, {
	        value: 'html_css_js'
	      }, {
	        value: 'jade_css_ls'
	      }
	    ]
	  },
	  tree: {
	    'default': {
	      id: 'content__tree',
	      eventable: 'treeMainDataMakeEventable',
	      searchable: 'treeMainDataMakeSearchable',
	      refreshable: 'treeMainDataMakeRefreshable'
	    }
	  },
	  list: {
	    'default': {
	      id: 'content__list',
	      creatable: 'listMainDataMakeCreatable',
	      destroyable: 'listMainDataMakeDestroyable',
	      searchable: 'listMainDataMakeSearchable',
	      refreshable: 'listMainDataMakeRefreshable',
	      editable: 'listMainDataMakeEditable',
	      checkallable: 'listMainDataMakeCheckallable'
	    }
	  },
	  reports: {},
	  calendar: {}
	};
	if (true) {
	  module.exports = props;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\lib\props\admin.ls.map


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var props;
	props = {
	  formats: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__format',
	        options: [
	          {
	            value: 'editor'
	          }, {
	            value: 'json'
	          }, {
	            value: 'zip'
	          }
	        ]
	      }
	    },
	    admin: {
	      'default': {
	        context: 'datas',
	        entity: 'main',
	        id: 'content__admin__format',
	        options: [{
	          value: 'json'
	        }]
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__format',
	        options: [
	          {
	            value: 'editor'
	          }, {
	            value: 'frame'
	          }
	        ]
	      }
	    },
	    app: {
	      'default': {
	        context: 'datas',
	        entity: 'app',
	        id: 'content__app__format',
	        options: [
	          {
	            value: 'value'
	          }, {
	            value: 'table'
	          }, {
	            value: 'db'
	          }
	        ]
	      }
	    }
	  }
	};
	if (true) {
	  module.exports = props;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\lib\props\util.ls.map


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var app;
	app = {
	  app_front: {
	    id: 'content__app__front',
	    options: [
	      {
	        value: 'work_time'
	      }, {
	        value: 'work_job'
	      }, {
	        value: 'house_maintenance'
	      }
	    ]
	  },
	  app_value: {
	    id: 'content__app__value',
	    maxItems: 1,
	    valueField: 'value',
	    labelField: 'value',
	    sortField: 'value',
	    searchField: 'value',
	    options: []
	  }
	};
	if (true) {
	  module.exports = app;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\lib\props\app.ls.map


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var Stores;
	Stores = {
	  'static': __webpack_require__(19),
	  indexeddb: __webpack_require__(20),
	  ajax: __webpack_require__(22),
	  firebase: __webpack_require__(23)
	};
	if (true) {
	  module.exports = Stores;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\index\lib\index\stores.ls.map


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var Store;
	Store = function(o){
	  this.db_url = o.db_url || null;
	  this.table = o.table || null;
	  this.id = 0;
	  this.list = [];
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    var item;
	    if (!attrs.id) {
	      attrs.id = ++this.id;
	    } else {
	      attrs.id = parseInt(attrs.id);
	    }
	    this.list.push(attrs);
	    item = attrs;
	    if (cb) {
	      cb(item);
	    }
	  },
	  find: function(id, cb){
	    var item, idInt, i$, ref$, len$;
	    item = {};
	    idInt = parseInt(id);
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, ref$[i$]));
	    }
	    if (cb) {
	      cb(item);
	    }
	    function fn$(el){
	      if (el.id === idInt) {
	        item = el;
	      }
	    }
	  },
	  findAll: function(cb){
	    if (cb) {
	      cb(this.list);
	    }
	    this.list;
	  },
	  findByAttr: function(attr, value, cb){
	    var item, i$, ref$, len$;
	    item = {};
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, ref$[i$]));
	    }
	    if (cb) {
	      cb(item);
	    }
	    function fn$(el){
	      if (el[attr] === value) {
	        item = el;
	      }
	    }
	  },
	  update: function(id, attrs, cb){
	    var item, idInt, i$, ref$, len$;
	    item = {};
	    idInt = parseInt(id);
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    if (cb) {
	      cb(item);
	    }
	    function fn$(i, el){
	      var key;
	      if (el.id === idInt) {
	        for (key in attrs) {
	          if (key === 'id') {
	            this.list[i][key] = parseInt(attrs[key]);
	          } else {
	            this.list[i][key] = attrs[key];
	          }
	        }
	        item = this.list[i];
	      }
	    }
	  },
	  destroy: function(id, cb){
	    var item, index, idInt, i$, ref$, len$;
	    item = {};
	    index = -1;
	    idInt = parseInt(id);
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    if (index > -1) {
	      this.list.splice(index, 1);
	    }
	    id = idInt;
	    if (cb) {
	      cb(id);
	    }
	    function fn$(i, el){
	      if (el.id === idInt) {
	        index = i;
	        item = el;
	      }
	    }
	  },
	  importTable: function(table, cb){
	    var i$, len$, i, el;
	    this.id = 0;
	    this.list = [];
	    for (i$ = 0, len$ = table.length; i$ < len$; ++i$) {
	      i = i$;
	      el = table[i$];
	      if (!el.id) {
	        el.id = ++this.id;
	      } else {
	        ++this.id;
	        el.id = parseInt(el.id);
	      }
	      this.list.push(el);
	    }
	    if (cb) {
	      cb();
	    }
	  },
	  importDb: function(db, cb){
	    if (cb) {
	      cb();
	    }
	  },
	  groupByKey: function(key, cb){
	    var group, i$, ref$, len$;
	    group = {};
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    for (i$ in group) {
	      (fn1$.call(this, i$, group[i$]));
	    }
	    if (cb) {
	      cb(group);
	    }
	    function fn$(i, el){
	      group[el[key]] = {
	        count: 0
	      };
	    }
	    function fn1$(index, obj){
	      var i$, ref$, len$;
	      for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, ref$[i$]));
	      }
	      function fn$(i, el){
	        if (el[key] === index) {
	          group[index].count++;
	        }
	      }
	    }
	  },
	  autoload: function(component, checked){
	    var load;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      clearTimeout(component.delays.load);
	      component.loadByIdAuto();
	      component.delays.load = setTimeout(function(){
	        load();
	      }, 1000);
	    };
	    if (component.id && checked) {
	      load();
	    } else {
	      clearTimeout(component.delays.load);
	    }
	  }
	};
	if (true) {
	  module.exports = Store;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\store\static\js\store.ls.map


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var Store;
	__webpack_require__(21);
	Store = function(o){
	  this.db_url = window.db[o.db_url];
	  this.table = o.table;
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    this.db_url[this.table].add(attrs).then(function(id){
	      var item;
	      attrs.id = id;
	      item = attrs;
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  find: function(id, cb){
	    var idInt;
	    idInt = parseInt(id);
	    this.db_url[this.table].get(idInt, function(item){
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  findByAttr: function(attr, value, cb){
	    var idInt;
	    idInt = parseInt(id);
	    this.db_url[this.table].get(idInt, function(item){
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  findAll: function(cb){
	    var items;
	    items = [];
	    this.db_url[this.table].each(function(item){
	      items.push(item);
	    }).then(function(){
	      if (cb) {
	        cb(items);
	      }
	    });
	  },
	  update: function(id, attrs, cb){
	    var idInt;
	    idInt = parseInt(id);
	    attrs.id = idInt;
	    this.db_url[this.table].update(idInt, attrs).then(function(){
	      var item;
	      attrs.id = idInt;
	      item = attrs;
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  destroy: function(id, cb){
	    var idInt;
	    idInt = parseInt(id);
	    this.db_url[this.table]['delete'](idInt).then(function(){
	      var id;
	      id = idInt;
	      if (cb) {
	        cb(id);
	      }
	    });
	  },
	  importTable: function(table, cb){
	    var _this;
	    _this = this;
	    this.db_url.transaction('rw', this.table, function(){
	      return _this.db_url[_this.table].clear();
	    }).then(function(){
	      var i$, ref$, len$, i, el;
	      for (i$ = 0, len$ = (ref$ = table).length; i$ < len$; ++i$) {
	        i = i$;
	        el = ref$[i$];
	        _this.db_url[_this.table].put(el);
	      }
	    }).then(function(){
	      cb();
	    });
	  },
	  importDb: function(list, cb){},
	  groupByKey: function(key, cb){
	    var _this, group;
	    _this = this;
	    group = {};
	    this.db_url[this.table].orderBy(key).uniqueKeys().then(function(keys){
	      var i$, len$, results$ = [];
	      group[''] = {
	        count: 0
	      };
	      for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
	        results$.push((fn$.call(this, i$, keys[i$])));
	      }
	      return results$;
	      function fn$(index, key){
	        return group[key] = {
	          count: 0
	        };
	      }
	    }).then(function(){
	      return _this.db_url[_this.table].each(function(item){
	        group[item[key] || ''].count++;
	      });
	    }).then(function(){
	      cb(group);
	    });
	  },
	  autoload: function(component, checked){
	    var load;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      clearTimeout(component.delays.load);
	      component.loadByIdAuto();
	      component.delays.load = setTimeout(function(){
	        load();
	      }, 1000);
	    };
	    if (component.id && checked) {
	      load();
	    } else {
	      clearTimeout(component.delays.load);
	    }
	  }
	};
	if (true) {
	  module.exports = Store;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\store\browser\indexeddb-dexie\store.ls.map


/***/ },
/* 21 */
/***/ function(module, exports) {

	window.db = {
	  x_1: new Dexie('x_1'),
	  _schemas: {
	    x_1: {}
	  },
	  _table: {
	    x_1: {
	      data: {
	        1: '++id, title, tree, input_notes, date, labels, status, date_start, date_end',
	        2: '++id, title, tree, input_notes, output_index, date, labels, status, date_start, date_end'
	      },
	      repo: {
	        1: '++id, data_id, title, tree, input_notes, date, labels, status, date_start, date_end',
	        2: '++id, data_id, title, tree, input_notes, output_index, date, labels, status, date_start, date_end'
	      }
	    }
	  },
	  _version: function(db, version, schema){
	    window.db._schemas[db][version] = schema;
	  },
	  _init: function(db){
	    var version, ref$, schema;
	    for (version in ref$ = window.db._schemas[db]) {
	      schema = ref$[version];
	      window.db[db].version(version).stores(schema);
	    }
	    window.db[db].open();
	  }
	};
	window.db._version('x_1', 1, {
	  main: db._table.x_1.data[1],
	  main_repo: db._table.x_1.repo[1]
	});
	window.db._version('x_1', 2, {
	  main: db._table.x_1.data[1],
	  main_repo: db._table.x_1.repo[1],
	  work_job: '++id'
	});
	/*
	window.db._version 'x_1', 3, do
	  settings:        '++id, settings'
	  main:            db._table.x_1.data[1]
	  main_repo:       db._table.x_1.repo[1]
	  bible_prayer:    '++id,'
	  general_people:  '++id,'
	  work_time:       '++id,'
	  work_job:        '++id, name'
	  work_money:      '++id,'
	  health_medical:  '++id,'
	  health_schroth:  '++id,'
	  health_pathosis: '++id,'
	*/
	window.db._init('x_1');
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\store\browser\indexeddb-dexie\store-db.ls.map


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Store;
	Store = function(o){
	  this.db_url = o.db_url;
	  this.table = o.table || null;
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    $.post(this.db_url + '/create', attrs, function(item){
	      item = JSON.parse(item);
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  find: function(id, cb){
	    var idInt;
	    idInt = parseInt(id);
	    $.get(this.db_url + '/find/' + idInt, function(data){
	      if (cb) {
	        cb(JSON.parse(data));
	      }
	    });
	  },
	  findAll: function(cb){
	    $.get(this.db_url + '/list', function(data){
	      if (cb) {
	        cb(JSON.parse(data));
	      }
	    });
	  },
	  update: function(id, attrs, cb){
	    var idInt;
	    idInt = parseInt(id);
	    $.post(this.db_url + '/update', attrs, function(item){
	      if (cb) {
	        cb(JSON.parse(item));
	      }
	    });
	  },
	  destroy: function(id, cb){
	    var idInt;
	    idInt = parseInt(id);
	    return $.post(this.db_url + '/destroy', {
	      id: idInt
	    }, function(item){
	      if (cb) {
	        cb(JSON.parse(item));
	      }
	    });
	  },
	  groupByKey: function(key, cb){
	    this.findAll(function(data){
	      var group, i$, len$;
	      group = {};
	      for (i$ = 0, len$ = data.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, data[i$]));
	      }
	      for (i$ in group) {
	        (fn1$.call(this, i$, group[i$]));
	      }
	      if (cb) {
	        cb(group);
	      }
	      function fn$(i, el){
	        group[el[key]] = {
	          count: 0
	        };
	      }
	      function fn1$(index, obj){
	        var i$, ref$, len$;
	        for (i$ = 0, len$ = (ref$ = data).length; i$ < len$; ++i$) {
	          (fn$.call(this, i$, ref$[i$]));
	        }
	        function fn$(i, el){
	          if (el[key] === index) {
	            group[index].count++;
	          }
	        }
	      }
	    });
	  },
	  importTable: function(table, cb){
	    table = JSON.stringify(table);
	    $.post(this.db_url + '/import-table', {
	      table: table
	    }, function(){
	      if (cb) {
	        cb();
	      }
	    });
	  },
	  importDb: function(db, cb){
	    db = JSON.stringify(db);
	    $.post(this.db_url + '/import-db', {
	      db: db
	    }, function(){
	      if (cb) {
	        cb();
	      }
	    });
	  },
	  autoload: function(component, checked){
	    var load;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      clearTimeout(component.delays.load);
	      component.loadByIdAuto();
	      component.delays.load = setTimeout(function(){
	        load();
	      }, 1000);
	    };
	    if (component.id && checked) {
	      load();
	    } else {
	      clearTimeout(component.delays.load);
	    }
	  }
	};
	if (true) {
	  module.exports = Store;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\store\server\ajax-jquery\store.ls.map


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Store;
	Store = function(o){
	  this.db_url = new Firebase(o.db_url);
	  this.table = o.table;
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    var _this, id;
	    _this = this;
	    id = this.db_url.child(this.table).push(attrs, function(e){
	      var item;
	      attrs.id = id.key();
	      _this.db_url.child(_this.table).child(attrs.id).update(attrs);
	      item = attrs;
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  find: function(id, cb){
	    this.db_url.child(this.table).child(id).once('value', function(snapshot){
	      var item;
	      item = snapshot.val();
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  findAll: function(cb){
	    var _this;
	    _this = this;
	    this.db_url.once('value', function(snapshot){
	      var val, items;
	      val = snapshot.val();
	      items = $.map(val[_this.table], function(value, index){
	        value.id = index;
	        return [value];
	      });
	      if (cb) {
	        cb(items);
	      }
	    });
	  },
	  findByAttr: function(attr, value, cb){},
	  update: function(id, attrs, cb){
	    var item;
	    this.db_url.child(this.table).child(id).update(attrs);
	    attrs.id = id;
	    item = attrs;
	    if (cb) {
	      cb(item);
	    }
	  },
	  destroy: function(id, cb){
	    this.db_url.child(this.table).child(id).remove();
	    if (cb) {
	      cb(id);
	    }
	  },
	  importTable: function(table, cb){},
	  groupByKey: function(key, cb){},
	  autoload: function(component, checked){
	    var load, db_url, table;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      component.loadByIdAuto();
	    };
	    db_url = component.config.store_data_main.firebase.db_url;
	    table = component.config.store_data_main.firebase.table;
	    component.child = new Firebase(db_url + '/' + table + '/' + component.id.main);
	    if (component.id && checked) {
	      component.child.on('value', load);
	    } else {
	      component.child.off('value', load);
	    }
	  }
	};
	if (true) {
	  module.exports = Store;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\store\cloud\firebase\store.ls.map


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var templates;
	templates = {
	  layout: {
	    split: __webpack_require__(25),
	    split_vtab: __webpack_require__(26),
	    combined: __webpack_require__(27)
	  },
	  admin_inputs: {
	    list_data: __webpack_require__(28),
	    tree_data: __webpack_require__(29)
	  },
	  app: {
	    work_time: __webpack_require__(30),
	    work_job: __webpack_require__(31)
	  }
	};
	if (true) {
	  module.exports = templates;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\index\lib\index\templates-jade.ls.map


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = " <section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-code\"></i>&nbspX+1<small>0.61.0 (jQuery)</small></h1><ol class=\"breadcrumb\"><li><a href=\"#/\"><i class=\"fa fa-code\"></i><span id=\"undefined\">X+1</span></a></li><li><a href=\"#/\"><i class=\"fa fa-database\"></i><span id=\"header__data\">Static</span></a></li><li><a href=\"#/\"><i class=\"fa fa-table\"></i><span id=\"header__id\"></span></a></li><li><a href=\"#/\"><i class=\"fa fa-tree\"></i><span id=\"header__tree\"></span></a></li></ol></section><section class=\"content\"><div class=\"row\"><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__run__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutorun</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__save\" class=\"btn btn-success\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__save__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutosave</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__load\" class=\"btn btn-warning\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__load__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutoload</div><div class=\"col-xs-4 col-sm-3 col-md-4\"></div><div class=\"col-xs-8 col-sm-3 col-md-2\"><select id=\"content__layout__select\"></select></div></div><br><div id=\"content__layout\" class=\"row\"><div style=\"padding-right: 7px\" class=\"col-md-6\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__input__notes\" data-toggle=\"tab\"><i class=\"fa fa-file-text\"></i>&nbsp&nbsp Notes</a></li><li><a href=\"#tab__app\" data-toggle=\"tab\"><i class=\"fa fa-laptop\"></i>&nbsp&nbsp App</a></li></ul><div class=\"tab-content\"><div id=\"tab__input__notes\" class=\"tab-pane fade in active\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-8 col-sm-8 col-xs-12\"><select id=\"content__input__notes__file\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__input__notes__ext\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-12\"><button id=\"content__input__notes__file__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__notes__editor\"></textarea></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button type=\"button\" id=\"content__input__notes__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__notes__import\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__input__notes__format\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input type=\"checkbox\" id=\"content__input__notes__lint\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__input__notes__mode\"></select></div></div></div><div id=\"tab__app\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-6 col-sm-10 col-xs-10\"><select id=\"content__app__value\"></select></div><div class=\"col-md-4 col-sm-10 col-xs-10\"><select id=\"content__app__front\"></select></div><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div id=\"content__app\"></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__app__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__app__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-2 col-sm-4 col-xs-6\"><select id=\"content__app__format\"></select></div><div class=\"col-md-8 col-sm-6 col-xs-12\"></div></div></div></div></div></div><div style=\"padding-left: 7px\" class=\"col-md-6\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__admin\" data-toggle=\"tab\"><i class=\"fa fa-university\"></i>&nbsp&nbsp Admin</a></li><li><a href=\"#tab__output\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li><li><a href=\"#tab__option\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i>&nbsp&nbsp Options</a></li></ul><div class=\"tab-content\"><div id=\"tab__admin\" class=\"tab-pane fade in active\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-7 col-sm-7 col-xs-7\"><select id=\"content__value\"></select></div><div style=\"padding-left: 0\" class=\"col-md-3 col-sm-3 col-xs-3\"><select id=\"content__src\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2 col-sm-2 col-xs-12\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__tree\" data-toggle=\"tab\">Tree</a></li><li><a href=\"#tab__list\" data-toggle=\"tab\">List</a></li><li><a href=\"#tab__calendar\" data-toggle=\"tab\">Cal</a></li><li><a href=\"#tab__report\" data-toggle=\"tab\">Rep</a></li></ul></div><div class=\"col-sm-10 col-sm-10 col-xs-12\"><div class=\"tab-content\"><div id=\"tab__tree\" class=\"tab-pane fade in active\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__tree__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__tree__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__tree__inputs\" aria-expanded=\"true\" aria-controls=\"content__tree__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__tree__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__tree\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row\"><div id=\"content__tree__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12\"><div id=\"content__tree__holder\"><div id=\"content__tree\"></div></div></div></div></div><div id=\"tab__list\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__list__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__list__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__list__inputs\" aria-expanded=\"true\" aria-controls=\"content__list__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__list__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__list\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row table-responsive\"><div id=\"content__list__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__list__holder\"><table id=\"content__list\" class=\"table table-bordered table-hover\"></table></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0\" class=\"col-md-3 col-sm-3 col-xs-6\"><button id=\"content__admin__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__admin__import\" type=\"file\"></span>&nbsp&nbsp</div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__admin__format\"></select></div><div class=\"col-md-2 col-sm-2 col-xs-3\"></div><div class=\"col-md-4 col-sm-4 col-xs-9\"><button id=\"content__list__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div></div><div id=\"tab__report\" class=\"tab-pane fade in\">Report</div><div id=\"tab__calendar\" class=\"tab-pane fade in\">Calendar</div></div></div></div></div><div id=\"tab__output\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div id=\"content__output__index__button__holder\" class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__output__index__urlhash__button\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-hashtag\"></i></button></div><div id=\"content__output__index__select__holder\" class=\"col-md-8 col-sm-8 col-xs-11\"><select id=\"content__output__index__urlhash\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__output__index__ext\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__output__index__holder\"><iframe id=\"content__output__index__frame\"></iframe></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__output__index__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__output__index__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__output__index__result\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input id=\"content__output__index__lint\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__output__index__mode\"></select></div></div></div><div id=\"tab__option\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-12\"><button id=\"content__option__save\" type=\"button\" disabled class=\"btn btn-danger\"><i class=\"fa fa-refresh\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__option__store\" data-toggle=\"tab\">Store</a></li><li class=\"undefined\"><a href=\"#tab__option__run\" data-toggle=\"tab\">Run</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__option__store\" class=\"tab-pane fade in active\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th> </th><th style=\"min-width: 250px;\">Store</th><th style=\"min-width: 400px;\">DB / URL</th><th style=\"min-width: 200px;\">Table</th></tr><tr><td>Main (Data)</td><td><select id=\"content__option__store__data__main\"></select></td><td><input id=\"content__option__store__data__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>Main (Repo)</td><td><select id=\"content__option__store__repo__main\"></select></td><td><input id=\"content__option__store__repo__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__repo__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>App (Data)</td><td><select id=\"content__option__store__data__app\"></select></td><td><input id=\"content__option__store__data__app__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__app__table\" value=\"\" class=\"form-control\"></td></tr></tbody></table></div></div><div id=\"tab__option__run\" class=\"tab-pane fade in\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th>Vendor</th><th>Extension</th><th style=\"min-width: 600px;\">URL</th></tr><tr><td><input id=\"content__option__run__less\" type=\"checkbox\" class=\"content__icheck\"></td><td>Less</td><td id=\"content__option__run__less__ext\">less</td><td><input id=\"content__option__run__less__src\" value=\"../../vendors/preprocessor/less/less-2.7.1/less.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sass\" type=\"checkbox\" class=\"content__icheck\"></td><td>Sass</td><td id=\"content__option__run__sass__ext\">sass</td><td><input id=\"content__option__run__sass__src\" value=\"../../vendors/preprocessor/sass/sass-0.0.0-2015-03-22/sass.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__styl\" type=\"checkbox\" class=\"content__icheck\"></td><td>Stylus</td><td id=\"content__option__run__styl__ext\">styl</td><td><input id=\"content__option__run__styl__src\" value=\"../../vendors/preprocessor/stylus/stylus-0.54.5/stylus.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__babel\" type=\"checkbox\" class=\"content__icheck\"></td><td>Babel</td><td id=\"content__option__run__babel__ext\">babel.js</td><td><input id=\"content__option__run__babel__src\" value=\"../../vendors/transpiler/babel/babeljs.io-2016-03-01/babel.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ts\" type=\"checkbox\" class=\"content__icheck\"></td><td>TypeScript</td><td id=\"content__option__run__ts__ext\">ts</td><td><input id=\"content__option__run__ts__src\" value=\"../../vendors/transpiler/typescript/typescript-1.8.0/typescript.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__cs\" type=\"checkbox\" class=\"content__icheck\"></td><td>CoffeeScript</td><td id=\"content__option__run__cs__ext\">cs</td><td><input id=\"content__option__run__cs__src\" value=\"../../vendors/transpiler/coffeescript/coffeescript-1.10.0/coffee-script.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sql\" type=\"checkbox\" class=\"content__icheck\"></td><td>SQL</td><td id=\"content__option__run__sql__ext\">sql</td><td><input id=\"content__option__run__sql__src\" value=\"../../vendors/database/sql/sql-3.12.1/sql.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__mongo\" type=\"checkbox\" class=\"content__icheck\"></td><td>Mongo</td><td id=\"content__option__run__mongo__ext\">mongo.js</td><td><input id=\"content__option__run__mongo__src\" value=\"../../vendors/database/nedb/nedb-1.6.0/nedb.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__php\" type=\"checkbox\" class=\"content__icheck\"></td><td>PHP</td><td id=\"content__option__run__php__ext\">php</td><td><input id=\"content__option__run__php__src\" value=\"../../vendors/lang/php/uniter-2.8.1/uniter.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ruby\" type=\"checkbox\" class=\"content__icheck\"></td><td>Ruby</td><td id=\"content__option__run__ruby__ext\">ruby</td><td><input id=\"content__option__run__ruby__src\" value=\"../../vendors/lang/ruby/opal-0.8.1/opal.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__python\" type=\"checkbox\" class=\"content__icheck\"></td><td>Python</td><td id=\"content__option__run__python__ext\">python</td><td><input id=\"content__option__run__python__src\" value=\"../../vendors/lang/python/skulpt-0.10.1/skulpt.min+skulp-stdlib.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__abc\" type=\"checkbox\" class=\"content__icheck\"></td><td>ABC</td><td id=\"content__option__run__abc__ext\">abc</td><td><input id=\"content__option__run__abc__src\" value=\"../../vendors/music/abc/abc-2.1/abcjs_basic_2.1-min.js\" class=\"form-control\"></td></tr></tbody></table></div></div></div></div></div></div></div></div></div></div><br><br><br><br><br><br><br></section>";

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = " <section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-code\"></i>&nbspX+1<small>0.61.0 (jQuery)</small></h1><ol class=\"breadcrumb\"><li><a href=\"#/\"><i class=\"fa fa-code\"></i><span id=\"undefined\">X+1</span></a></li><li><a href=\"#/\"><i class=\"fa fa-database\"></i><span id=\"header__data\">Static</span></a></li><li><a href=\"#/\"><i class=\"fa fa-table\"></i><span id=\"header__id\"></span></a></li><li><a href=\"#/\"><i class=\"fa fa-tree\"></i><span id=\"header__tree\"></span></a></li></ol></section><section class=\"content\"><div class=\"row\"><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__run__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutorun</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__save\" class=\"btn btn-success\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__save__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutosave</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__load\" class=\"btn btn-warning\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__load__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutoload</div><div class=\"col-xs-4 col-sm-3 col-md-4\"></div><div class=\"col-xs-8 col-sm-3 col-md-2\"><select id=\"content__layout__select\"></select></div></div><br><div id=\"content__layout\" class=\"row\"><div class=\"col-sm-12\"><div style=\"padding-left:0;padding-right:0\" class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__input\" data-toggle=\"tab\">Input</a></li><li><a href=\"#tab__others\" data-toggle=\"tab\">Output + Others</a></li></ul></div><div style=\"padding-left:0;padding-right:0\" class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__input\" class=\"tab-pane active\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__input__notes\" data-toggle=\"tab\"><i class=\"fa fa-file-text\"></i>&nbsp&nbsp Notes</a></li><li><a href=\"#tab__app\" data-toggle=\"tab\"><i class=\"fa fa-laptop\"></i>&nbsp&nbsp App</a></li></ul><div class=\"tab-content\"><div id=\"tab__input__notes\" class=\"tab-pane fade in active\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-8 col-sm-8 col-xs-12\"><select id=\"content__input__notes__file\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__input__notes__ext\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-12\"><button id=\"content__input__notes__file__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__notes__editor\"></textarea></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button type=\"button\" id=\"content__input__notes__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__notes__import\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__input__notes__format\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input type=\"checkbox\" id=\"content__input__notes__lint\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__input__notes__mode\"></select></div></div></div><div id=\"tab__app\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-6 col-sm-10 col-xs-10\"><select id=\"content__app__value\"></select></div><div class=\"col-md-4 col-sm-10 col-xs-10\"><select id=\"content__app__front\"></select></div><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div id=\"content__app\"></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__app__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__app__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-2 col-sm-4 col-xs-6\"><select id=\"content__app__format\"></select></div><div class=\"col-md-8 col-sm-6 col-xs-12\"></div></div></div></div></div></div><div id=\"tab__others\" class=\"tab-pane\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__admin\" data-toggle=\"tab\"><i class=\"fa fa-university\"></i>&nbsp&nbsp Admin</a></li><li><a href=\"#tab__output\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li><li><a href=\"#tab__option\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i>&nbsp&nbsp Options</a></li></ul><div class=\"tab-content\"><div id=\"tab__admin\" class=\"tab-pane fade in active\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-7 col-sm-7 col-xs-7\"><select id=\"content__value\"></select></div><div style=\"padding-left: 0\" class=\"col-md-3 col-sm-3 col-xs-3\"><select id=\"content__src\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2 col-sm-2 col-xs-12\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__tree\" data-toggle=\"tab\">Tree</a></li><li><a href=\"#tab__list\" data-toggle=\"tab\">List</a></li><li><a href=\"#tab__calendar\" data-toggle=\"tab\">Cal</a></li><li><a href=\"#tab__report\" data-toggle=\"tab\">Rep</a></li></ul></div><div class=\"col-sm-10 col-sm-10 col-xs-12\"><div class=\"tab-content\"><div id=\"tab__tree\" class=\"tab-pane fade in active\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__tree__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__tree__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__tree__inputs\" aria-expanded=\"true\" aria-controls=\"content__tree__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__tree__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__tree\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row\"><div id=\"content__tree__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12\"><div id=\"content__tree__holder\"><div id=\"content__tree\"></div></div></div></div></div><div id=\"tab__list\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__list__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__list__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__list__inputs\" aria-expanded=\"true\" aria-controls=\"content__list__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__list__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__list\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row table-responsive\"><div id=\"content__list__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__list__holder\"><table id=\"content__list\" class=\"table table-bordered table-hover\"></table></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0\" class=\"col-md-3 col-sm-3 col-xs-6\"><button id=\"content__admin__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__admin__import\" type=\"file\"></span>&nbsp&nbsp</div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__admin__format\"></select></div><div class=\"col-md-2 col-sm-2 col-xs-3\"></div><div class=\"col-md-4 col-sm-4 col-xs-9\"><button id=\"content__list__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div></div><div id=\"tab__report\" class=\"tab-pane fade in\">Report</div><div id=\"tab__calendar\" class=\"tab-pane fade in\">Calendar</div></div></div></div></div><div id=\"tab__output\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div id=\"content__output__index__button__holder\" class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__output__index__urlhash__button\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-hashtag\"></i></button></div><div id=\"content__output__index__select__holder\" class=\"col-md-8 col-sm-8 col-xs-11\"><select id=\"content__output__index__urlhash\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__output__index__ext\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__output__index__holder\"><iframe id=\"content__output__index__frame\"></iframe></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__output__index__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__output__index__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__output__index__result\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input id=\"content__output__index__lint\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__output__index__mode\"></select></div></div></div><div id=\"tab__option\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-12\"><button id=\"content__option__save\" type=\"button\" disabled class=\"btn btn-danger\"><i class=\"fa fa-refresh\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__option__store\" data-toggle=\"tab\">Store</a></li><li class=\"undefined\"><a href=\"#tab__option__run\" data-toggle=\"tab\">Run</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__option__store\" class=\"tab-pane fade in active\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th> </th><th style=\"min-width: 250px;\">Store</th><th style=\"min-width: 400px;\">DB / URL</th><th style=\"min-width: 200px;\">Table</th></tr><tr><td>Main (Data)</td><td><select id=\"content__option__store__data__main\"></select></td><td><input id=\"content__option__store__data__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>Main (Repo)</td><td><select id=\"content__option__store__repo__main\"></select></td><td><input id=\"content__option__store__repo__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__repo__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>App (Data)</td><td><select id=\"content__option__store__data__app\"></select></td><td><input id=\"content__option__store__data__app__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__app__table\" value=\"\" class=\"form-control\"></td></tr></tbody></table></div></div><div id=\"tab__option__run\" class=\"tab-pane fade in\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th>Vendor</th><th>Extension</th><th style=\"min-width: 600px;\">URL</th></tr><tr><td><input id=\"content__option__run__less\" type=\"checkbox\" class=\"content__icheck\"></td><td>Less</td><td id=\"content__option__run__less__ext\">less</td><td><input id=\"content__option__run__less__src\" value=\"../../vendors/preprocessor/less/less-2.7.1/less.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sass\" type=\"checkbox\" class=\"content__icheck\"></td><td>Sass</td><td id=\"content__option__run__sass__ext\">sass</td><td><input id=\"content__option__run__sass__src\" value=\"../../vendors/preprocessor/sass/sass-0.0.0-2015-03-22/sass.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__styl\" type=\"checkbox\" class=\"content__icheck\"></td><td>Stylus</td><td id=\"content__option__run__styl__ext\">styl</td><td><input id=\"content__option__run__styl__src\" value=\"../../vendors/preprocessor/stylus/stylus-0.54.5/stylus.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__babel\" type=\"checkbox\" class=\"content__icheck\"></td><td>Babel</td><td id=\"content__option__run__babel__ext\">babel.js</td><td><input id=\"content__option__run__babel__src\" value=\"../../vendors/transpiler/babel/babeljs.io-2016-03-01/babel.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ts\" type=\"checkbox\" class=\"content__icheck\"></td><td>TypeScript</td><td id=\"content__option__run__ts__ext\">ts</td><td><input id=\"content__option__run__ts__src\" value=\"../../vendors/transpiler/typescript/typescript-1.8.0/typescript.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__cs\" type=\"checkbox\" class=\"content__icheck\"></td><td>CoffeeScript</td><td id=\"content__option__run__cs__ext\">cs</td><td><input id=\"content__option__run__cs__src\" value=\"../../vendors/transpiler/coffeescript/coffeescript-1.10.0/coffee-script.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sql\" type=\"checkbox\" class=\"content__icheck\"></td><td>SQL</td><td id=\"content__option__run__sql__ext\">sql</td><td><input id=\"content__option__run__sql__src\" value=\"../../vendors/database/sql/sql-3.12.1/sql.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__mongo\" type=\"checkbox\" class=\"content__icheck\"></td><td>Mongo</td><td id=\"content__option__run__mongo__ext\">mongo.js</td><td><input id=\"content__option__run__mongo__src\" value=\"../../vendors/database/nedb/nedb-1.6.0/nedb.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__php\" type=\"checkbox\" class=\"content__icheck\"></td><td>PHP</td><td id=\"content__option__run__php__ext\">php</td><td><input id=\"content__option__run__php__src\" value=\"../../vendors/lang/php/uniter-2.8.1/uniter.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ruby\" type=\"checkbox\" class=\"content__icheck\"></td><td>Ruby</td><td id=\"content__option__run__ruby__ext\">ruby</td><td><input id=\"content__option__run__ruby__src\" value=\"../../vendors/lang/ruby/opal-0.8.1/opal.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__python\" type=\"checkbox\" class=\"content__icheck\"></td><td>Python</td><td id=\"content__option__run__python__ext\">python</td><td><input id=\"content__option__run__python__src\" value=\"../../vendors/lang/python/skulpt-0.10.1/skulpt.min+skulp-stdlib.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__abc\" type=\"checkbox\" class=\"content__icheck\"></td><td>ABC</td><td id=\"content__option__run__abc__ext\">abc</td><td><input id=\"content__option__run__abc__src\" value=\"../../vendors/music/abc/abc-2.1/abcjs_basic_2.1-min.js\" class=\"form-control\"></td></tr></tbody></table></div></div></div></div></div></div></div></div></div></div></div></div></div><br><br><br><br><br><br><br></section>";

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = " <section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-code\"></i>&nbspX+1<small>0.61.0 (jQuery)</small></h1><ol class=\"breadcrumb\"><li><a href=\"#/\"><i class=\"fa fa-code\"></i><span id=\"undefined\">X+1</span></a></li><li><a href=\"#/\"><i class=\"fa fa-database\"></i><span id=\"header__data\">Static</span></a></li><li><a href=\"#/\"><i class=\"fa fa-table\"></i><span id=\"header__id\"></span></a></li><li><a href=\"#/\"><i class=\"fa fa-tree\"></i><span id=\"header__tree\"></span></a></li></ol></section><section class=\"content\"><div class=\"row\"><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__run__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutorun</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__save\" class=\"btn btn-success\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__save__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutosave</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__load\" class=\"btn btn-warning\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__load__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutoload</div><div class=\"col-xs-4 col-sm-3 col-md-4\"></div><div class=\"col-xs-8 col-sm-3 col-md-2\"><select id=\"content__layout__select\"></select></div></div><br><div id=\"content__layout\" class=\"row\"><div class=\"col-md-12\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__input__notes\" data-toggle=\"tab\"><i class=\"fa fa-file-text\"></i>&nbsp&nbsp Notes</a></li><li><a href=\"#tab__output\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li><li><a href=\"#tab__admin\" data-toggle=\"tab\"><i class=\"fa fa-university\"></i>&nbsp&nbsp Admin</a></li><li><a href=\"#tab__app\" data-toggle=\"tab\"><i class=\"fa fa-laptop\"></i>&nbsp&nbsp App</a></li><li><a href=\"#tab__option\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i>&nbsp&nbsp Options</a></li></ul><div class=\"tab-content\"><div id=\"tab__input__notes\" class=\"tab-pane fade in active\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-8 col-sm-8 col-xs-12\"><select id=\"content__input__notes__file\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__input__notes__ext\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-12\"><button id=\"content__input__notes__file__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__notes__editor\"></textarea></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button type=\"button\" id=\"content__input__notes__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__notes__import\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__input__notes__format\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input type=\"checkbox\" id=\"content__input__notes__lint\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__input__notes__mode\"></select></div></div></div><div id=\"tab__output\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div id=\"content__output__index__button__holder\" class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__output__index__urlhash__button\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-hashtag\"></i></button></div><div id=\"content__output__index__select__holder\" class=\"col-md-8 col-sm-8 col-xs-11\"><select id=\"content__output__index__urlhash\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__output__index__ext\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__output__index__holder\"><iframe id=\"content__output__index__frame\"></iframe></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__output__index__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__output__index__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__output__index__result\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input id=\"content__output__index__lint\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__output__index__mode\"></select></div></div></div><div id=\"tab__admin\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-7 col-sm-7 col-xs-7\"><select id=\"content__value\"></select></div><div style=\"padding-left: 0\" class=\"col-md-3 col-sm-3 col-xs-3\"><select id=\"content__src\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2 col-sm-2 col-xs-12\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__tree\" data-toggle=\"tab\">Tree</a></li><li><a href=\"#tab__list\" data-toggle=\"tab\">List</a></li><li><a href=\"#tab__calendar\" data-toggle=\"tab\">Cal</a></li><li><a href=\"#tab__report\" data-toggle=\"tab\">Rep</a></li></ul></div><div class=\"col-sm-10 col-sm-10 col-xs-12\"><div class=\"tab-content\"><div id=\"tab__tree\" class=\"tab-pane fade in active\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__tree__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__tree__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__tree__inputs\" aria-expanded=\"true\" aria-controls=\"content__tree__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__tree__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__tree\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row\"><div id=\"content__tree__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12\"><div id=\"content__tree__holder\"><div id=\"content__tree\"></div></div></div></div></div><div id=\"tab__list\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__list__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__list__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__list__inputs\" aria-expanded=\"true\" aria-controls=\"content__list__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__list__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__list\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row table-responsive\"><div id=\"content__list__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__list__holder\"><table id=\"content__list\" class=\"table table-bordered table-hover\"></table></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0\" class=\"col-md-3 col-sm-3 col-xs-6\"><button id=\"content__admin__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__admin__import\" type=\"file\"></span>&nbsp&nbsp</div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__admin__format\"></select></div><div class=\"col-md-2 col-sm-2 col-xs-3\"></div><div class=\"col-md-4 col-sm-4 col-xs-9\"><button id=\"content__list__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div></div><div id=\"tab__report\" class=\"tab-pane fade in\">Report</div><div id=\"tab__calendar\" class=\"tab-pane fade in\">Calendar</div></div></div></div></div><div id=\"tab__app\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-6 col-sm-10 col-xs-10\"><select id=\"content__app__value\"></select></div><div class=\"col-md-4 col-sm-10 col-xs-10\"><select id=\"content__app__front\"></select></div><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div id=\"content__app\"></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__app__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__app__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-2 col-sm-4 col-xs-6\"><select id=\"content__app__format\"></select></div><div class=\"col-md-8 col-sm-6 col-xs-12\"></div></div></div><div id=\"tab__option\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-12\"><button id=\"content__option__save\" type=\"button\" disabled class=\"btn btn-danger\"><i class=\"fa fa-refresh\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__option__store\" data-toggle=\"tab\">Store</a></li><li class=\"undefined\"><a href=\"#tab__option__run\" data-toggle=\"tab\">Run</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__option__store\" class=\"tab-pane fade in active\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th> </th><th style=\"min-width: 250px;\">Store</th><th style=\"min-width: 400px;\">DB / URL</th><th style=\"min-width: 200px;\">Table</th></tr><tr><td>Main (Data)</td><td><select id=\"content__option__store__data__main\"></select></td><td><input id=\"content__option__store__data__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>Main (Repo)</td><td><select id=\"content__option__store__repo__main\"></select></td><td><input id=\"content__option__store__repo__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__repo__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>App (Data)</td><td><select id=\"content__option__store__data__app\"></select></td><td><input id=\"content__option__store__data__app__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__app__table\" value=\"\" class=\"form-control\"></td></tr></tbody></table></div></div><div id=\"tab__option__run\" class=\"tab-pane fade in\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th>Vendor</th><th>Extension</th><th style=\"min-width: 600px;\">URL</th></tr><tr><td><input id=\"content__option__run__less\" type=\"checkbox\" class=\"content__icheck\"></td><td>Less</td><td id=\"content__option__run__less__ext\">less</td><td><input id=\"content__option__run__less__src\" value=\"../../vendors/preprocessor/less/less-2.7.1/less.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sass\" type=\"checkbox\" class=\"content__icheck\"></td><td>Sass</td><td id=\"content__option__run__sass__ext\">sass</td><td><input id=\"content__option__run__sass__src\" value=\"../../vendors/preprocessor/sass/sass-0.0.0-2015-03-22/sass.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__styl\" type=\"checkbox\" class=\"content__icheck\"></td><td>Stylus</td><td id=\"content__option__run__styl__ext\">styl</td><td><input id=\"content__option__run__styl__src\" value=\"../../vendors/preprocessor/stylus/stylus-0.54.5/stylus.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__babel\" type=\"checkbox\" class=\"content__icheck\"></td><td>Babel</td><td id=\"content__option__run__babel__ext\">babel.js</td><td><input id=\"content__option__run__babel__src\" value=\"../../vendors/transpiler/babel/babeljs.io-2016-03-01/babel.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ts\" type=\"checkbox\" class=\"content__icheck\"></td><td>TypeScript</td><td id=\"content__option__run__ts__ext\">ts</td><td><input id=\"content__option__run__ts__src\" value=\"../../vendors/transpiler/typescript/typescript-1.8.0/typescript.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__cs\" type=\"checkbox\" class=\"content__icheck\"></td><td>CoffeeScript</td><td id=\"content__option__run__cs__ext\">cs</td><td><input id=\"content__option__run__cs__src\" value=\"../../vendors/transpiler/coffeescript/coffeescript-1.10.0/coffee-script.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sql\" type=\"checkbox\" class=\"content__icheck\"></td><td>SQL</td><td id=\"content__option__run__sql__ext\">sql</td><td><input id=\"content__option__run__sql__src\" value=\"../../vendors/database/sql/sql-3.12.1/sql.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__mongo\" type=\"checkbox\" class=\"content__icheck\"></td><td>Mongo</td><td id=\"content__option__run__mongo__ext\">mongo.js</td><td><input id=\"content__option__run__mongo__src\" value=\"../../vendors/database/nedb/nedb-1.6.0/nedb.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__php\" type=\"checkbox\" class=\"content__icheck\"></td><td>PHP</td><td id=\"content__option__run__php__ext\">php</td><td><input id=\"content__option__run__php__src\" value=\"../../vendors/lang/php/uniter-2.8.1/uniter.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ruby\" type=\"checkbox\" class=\"content__icheck\"></td><td>Ruby</td><td id=\"content__option__run__ruby__ext\">ruby</td><td><input id=\"content__option__run__ruby__src\" value=\"../../vendors/lang/ruby/opal-0.8.1/opal.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__python\" type=\"checkbox\" class=\"content__icheck\"></td><td>Python</td><td id=\"content__option__run__python__ext\">python</td><td><input id=\"content__option__run__python__src\" value=\"../../vendors/lang/python/skulpt-0.10.1/skulpt.min+skulp-stdlib.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__abc\" type=\"checkbox\" class=\"content__icheck\"></td><td>ABC</td><td id=\"content__option__run__abc__ext\">abc</td><td><input id=\"content__option__run__abc__src\" value=\"../../vendors/music/abc/abc-2.1/abcjs_basic_2.1-min.js\" class=\"form-control\"></td></tr></tbody></table></div></div></div></div></div></div></div></div></div></div><br><br><br><br><br><br><br></section>";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "         <div class=\"row\"><div class=\"col-md-12\"><input id=\"content__list__inputs__title\" type=\"text\" placeholder=\"Title\" style=\"width: 100%;\" class=\"form-control\"></div></div><div class=\"row\"><div class=\"col-md-12\"><input id=\"content__list__inputs__tree\" type=\"text\" placeholder=\"Tree\" style=\"width: 100%;\" class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-8\"><input id=\"content__list__inputs__labels\" type=\"text\" placeholder=\"Labels\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-4\"><input id=\"content__list__inputs__status\" type=\"text\" placeholder=\"Status\" style=\"width: 100%;\" class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-4\"><input id=\"content__list__inputs__date\" type=\"text\" placeholder=\"Date (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-4\"><input id=\"content__list__inputs__date_start\" type=\"text\" placeholder=\"Date Start (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-4\"><input id=\"content__list__inputs__date_end\" type=\"text\" placeholder=\"Date Start (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"></div></div>";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<p>Time</p>";

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-sm-2 col-sm-2 col-xs-12\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__app__job__main\" data-toggle=\"tab\">Main</a></li><li><a href=\"#tab__app__job__more\" data-toggle=\"tab\">More</a></li></ul></div><div class=\"col-sm-10 col-sm-10 col-xs-12\"><div class=\"tab-content\"><div id=\"tab__app__job__main\" class=\"tab-pane fade in active\"><form id=\"form__app__job__main\" role=\"form\" class=\"form-horizontal\"><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label class=\"col-md-2 control-label\">ID</label><div class=\"col-md-10\"><input id=\"content__app__work_job__id\" disabled class=\"form-control\"></div></div></div><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" class=\"col-md-2 control-label\">Name</label><div class=\"col-md-10\"><input placeholder=\"\" type=\"text\" id=\"content__app__work_job__name\" class=\"form-control\"></div></div></div><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" class=\"col-md-2 control-label\">Title</label><div class=\"col-md-10\"><input placeholder=\"\" type=\"text\" id=\"content__app__work_job__title\" class=\"form-control\"></div></div></div><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" class=\"col-md-2 control-label\">Dates</label><div class=\"col-md-10\"><div style=\"padding: 0;\" class=\"col-md-4\"><input placeholder=\"Posted\" type=\"text\" id=\"content__app__work_job__date_posted\" class=\"form-control\"></div><div style=\"padding-right: 0;\" class=\"col-md-4\"><input placeholder=\"Applied\" type=\"text\" id=\"content__app__work_job__date_applied\" class=\"form-control\"></div><div style=\"padding-right: 0;\" class=\"col-md-4\"><input placeholder=\"Responded\" type=\"text\" id=\"content__app__work_job__date_responded\" class=\"form-control\"></div></div></div></div><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" class=\"col-md-2 control-label\">URL</label><div class=\"col-md-10\"><input placeholder=\"\" type=\"text\" id=\"content__app__work_job__url\" class=\"form-control\"></div></div></div><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" class=\"col-md-2 control-label\">Company</label><div class=\"col-md-10\"><input placeholder=\"\" type=\"text\" id=\"content__app__work_job__company\" class=\"form-control\"></div></div></div><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" class=\"col-md-2 control-label\">Location</label><div class=\"col-md-10\"><div style=\"padding: 0;\" class=\"col-md-6\"><input placeholder=\"City\" type=\"text\" id=\"content__app__work_job__city\" class=\"form-control\"></div><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"State\" type=\"text\" id=\"content__app__work_job__state\" class=\"form-control\"></div></div></div></div><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" class=\"col-md-2 control-label\">Map</label><div class=\"col-md-10\"><input placeholder=\"\" type=\"text\" id=\"content__app__work_job__map\" class=\"form-control\"></div></div></div><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" class=\"col-md-2 control-label\">Description</label><div class=\"col-md-10\"><textarea rows=\"20\" id=\"content__app__work_job__description\" class=\"form-control\"></textarea></div></div></div></form></div><div id=\"tab__app__job__more\" class=\"tab-pane fade in\"><form id=\"form__app__job__more\" role=\"form\" class=\"form-horizontal\"><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" class=\"col-md-2 control-label\">Cover Letter</label><div class=\"col-md-10\"><textarea rows=\"20\" id=\"content__app__work_job__cover_letter\" class=\"form-control\"></textarea></div></div></div><div class=\"row\"><div style=\"margin-right: 0;\" class=\"form-group\"><label data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" class=\"col-md-2 control-label\">Notes</label><div class=\"col-md-10\"><textarea rows=\"20\" id=\"content__app__work_job__notes\" class=\"form-control\"></textarea></div></div></div></form></div></div></div>";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(o){
	  this.Stores = o.Stores;
	  this.templates = o.templates;
	  this.samples = o.samples;
	  this.vendors = o.vendors;
	  this.props = o.props;
	  this.debug = o.debug || true;
	};
	Component.prototype = {
	  constructor: Component,
	  init: function(o){
	    if (this.debug) {
	      console.log('Init!');
	    }
	    __webpack_require__(33)(Component);
	    __webpack_require__(35)(Component);
	    __webpack_require__(39)(Component);
	    __webpack_require__(46)(Component);
	    __webpack_require__(83)(Component);
	    __webpack_require__(93)(Component);
	    __webpack_require__(105)(Component);
	    this.initLib();
	    this.initStore();
	    this.initBoot();
	    this.initMain();
	    this.initAdmin();
	    this.initUtil();
	    this.initApp();
	  },
	  make: function(o){}
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component.ls.map


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initLib = function(){
	    this.initLibJs();
	  };
	  o.initLibJs = function(){
	    var _this;
	    _this = this;
	    if (this.debug) {
	      console.log('Lib!');
	    }
	    __webpack_require__(34)(Component);
	    this.initConsole();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\lib.ls.map


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initConsole = function(){
	    this.initConsoleJs();
	  };
	  o.consoleLog = function(o){
	    this.consoleLogCn(o);
	  };
	  o.initConsoleJs = function(){
	    if (this.debug) {
	      console.log('Console!');
	    }
	  };
	  o.consoleLogCn = function(o){
	    if (this.debug) {
	      console.log(o.text);
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\lib\console.ls.map


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initStore = function(){
	    this.initStoreJs();
	  };
	  o.initStoreJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Store!'
	    });
	    __webpack_require__(36)(Component);
	    __webpack_require__(37)(Component);
	    __webpack_require__(38)(Component);
	    this.initSetting();
	    this.initDataMain();
	    this.initDataApp();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\store.ls.map


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initSetting = function(){
	    this.initSettingJs();
	  };
	  o.settingSet = function(o){
	    this.settingSetLg(o);
	  };
	  o.settingGet = function(o){
	    return this.settingGetLg(o);
	  };
	  o.initSettingJs = function(){
	    if (this.debug) {
	      console.log('Setting!');
	    }
	  };
	  o.settingSetLg = function(o){
	    var settings;
	    if (this.debug) {
	      console.log('Setting:Set');
	    }
	    settings = this.settingGet();
	    settings[o.setting] = o.props;
	    localStorage.setItem('settings_x_1', JSON.stringify(settings));
	  };
	  o.settingGetLg = function(o){
	    var settings;
	    if (this.debug) {
	      console.log('Setting:Get');
	    }
	    settings = localStorage.getItem('settings_x_1');
	    if (settings) {
	      return settings = JSON.parse(settings);
	    } else {
	      return {};
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\store\setting.ls.map


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initDataMain = function(){
	    this.initDataMainJs(o);
	  };
	  o.dataMainMake = function(o){
	    this.dataMainMakeJs(o);
	  };
	  o.dataMainCreate = function(o){
	    this.dataMainCreateMm(o);
	  };
	  o.dataMainUpdate = function(o){
	    this.dataMainUpdateJs(o);
	  };
	  o.dataMainFind = function(o){
	    this.dataMainFindJs(o);
	  };
	  o.dataMainFindAll = function(o){
	    this.dataMainFindAllJs(o);
	  };
	  o.dataMainDestroy = function(o){
	    this.dataMainDestroyJs(o);
	  };
	  o.dataMainImportTable = function(o){
	    this.dataMainImportTableJs(o);
	  };
	  o.initDataMainJs = function(){
	    if (this.debug) {
	      console.log('Data:Main!');
	    }
	  };
	  o.dataMainMakeJs = function(o){
	    var adapter, params;
	    if (this.debug) {
	      console.log('Data:Main:Make');
	    }
	    adapter = o.adapter || 'static';
	    params = o.params || {};
	    this.datas.main = new this.Stores[adapter](params);
	  };
	  o.dataMainCreateMm = function(o){
	    var attrs, sample, i$, ref$;
	    if (this.debug) {
	      console.log('Data:Main:Create');
	    }
	    attrs = o.attrs || {};
	    attrs.date = moment().format('DD/MM/YYYY');
	    sample = this.sampleGetValue();
	    for (i$ in ref$ = this.samples.main[sample]) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    this.datas.main.create(attrs, o.cb);
	    function fn$(i, el){
	      attrs[i] = el;
	    }
	  };
	  o.dataMainUpdateJs = function(o){
	    if (this.debug) {
	      console.log('Data:Main:Update');
	    }
	    this.datas.main.update(o.id, o.attrs, o.cb);
	  };
	  o.dataMainFindJs = function(o){
	    if (this.debug) {
	      console.log('Data:Main:Find');
	    }
	    this.datas.main.find(o.id, o.cb);
	  };
	  o.dataMainFindByAttrJs = function(o){
	    if (this.debug) {
	      console.log('Data:Main:Find:By:Attr');
	    }
	    this.datas.main.findByAttr(o.attr, o.value, o.cb);
	  };
	  o.dataMainFindAllJs = function(o){
	    if (this.debug) {
	      console.log('Data:Main:Find:All');
	    }
	    this.datas.main.findAll(o.cb);
	  };
	  o.dataMainDestroyJs = function(o){
	    if (this.debug) {
	      console.log('Data:Main:Destroy');
	    }
	    this.datas.main.destroy(o.id, o.cb);
	  };
	  o.dataMainImportTableJs = function(o){
	    if (this.debug) {
	      console.log('Data:Main:Import:Table');
	    }
	    this.datas.main.importTable(o.table, o.cb);
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\store\data\main.ls.map


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initDataApp = function(){
	    this.initDataAppJs(o);
	  };
	  o.dataAppMake = function(o){
	    this.dataAppMakeJs(o);
	  };
	  o.dataAppCreate = function(o){
	    this.dataAppCreateMm(o);
	  };
	  o.dataAppUpdate = function(o){
	    this.dataAppUpdateJs(o);
	  };
	  o.dataAppFind = function(o){
	    this.dataAppFindJs(o);
	  };
	  o.dataAppFindAll = function(o){
	    this.dataAppFindAllJs(o);
	  };
	  o.dataAppFindByAttr = function(o){
	    this.dataAppFindByAttrJs(o);
	  };
	  o.dataAppDestroy = function(o){
	    this.dataAppDestroyJs(o);
	  };
	  o.dataAppImport = function(o){
	    this.dataAppImportJs(o);
	  };
	  o.initDataAppJs = function(){
	    if (this.debug) {
	      console.log('Data:App!');
	    }
	  };
	  o.dataAppMakeJs = function(o){
	    var adapter, params;
	    if (this.debug) {
	      console.log('Data:App:Make');
	    }
	    adapter = o.adapter || 'static';
	    params = o.params || {};
	    this.datas.app[o.table] = new this.Stores[adapter](params);
	  };
	  o.dataAppCreateMm = function(o){
	    var attrs;
	    if (this.debug) {
	      console.log('Data:App:Create');
	    }
	    attrs = o.attrs || {};
	    attrs.date = moment().format('DD/MM/YYYY');
	    this.datas.app[o.table].create(attrs, o.cb || function(){});
	  };
	  o.dataAppUpdateJs = function(o){
	    if (this.debug) {
	      console.log('Data:App:Update');
	    }
	    this.datas.app[o.table].update(o.id, o.attrs, o.cb || function(){});
	  };
	  o.dataAppFindJs = function(o){
	    if (this.debug) {
	      console.log('Data:App:Find');
	    }
	    this.datas.app[o.table].find(o.id, o.cb || function(){});
	  };
	  o.dataAppFindAllJs = function(o){
	    if (this.debug) {
	      console.log('Data:App:Find:All');
	    }
	    this.datas.app[o.table].findAll(o.cb || function(){});
	  };
	  o.dataAppFindByAttrJs = function(o){
	    if (this.debug) {
	      console.log('Data:App:Find:By:Attr');
	    }
	    this.datas.app[o.table].findByAttr(o.attr, o.value, o.cb);
	  };
	  o.dataAppDestroyJs = function(o){
	    if (this.debug) {
	      console.log('Data:App:Destroy');
	    }
	    this.datas.app[o.table].destroy(o.id, o.cb || function(){});
	  };
	  o.dataAppImportJs = function(o){
	    if (this.debug) {
	      console.log('Data:App:Import');
	    }
	    this.datas.app[o.table]['import'](o.list, o.cb || function(){});
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\store\data\app.ls.map


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initBoot = function(){
	    this.initBootJs();
	  };
	  o.initBootJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Boot!'
	    });
	    __webpack_require__(40)(Component);
	    __webpack_require__(41)(Component);
	    __webpack_require__(42)(Component);
	    __webpack_require__(43)(Component);
	    this.initDefault();
	    this.initLayout();
	    this.initConfig();
	    this.initOption();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\boot.ls.map


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initDefault = function(){
	    this.initDefaultJs();
	  };
	  o.defaultMake = function(o){
	    this.defaultMakeJs(o);
	  };
	  o.defaultMakeBoot = function(o){
	    this.defaultMakeBootJs(o);
	  };
	  o.defaultMakeStore = function(o){
	    this.defaultMakeStoreJs(o);
	  };
	  o.defaultMakeMain = function(o){
	    this.defaultMakeMainJs(o);
	  };
	  o.defaultMakeAdmin = function(o){
	    this.defaultMakeAdminJs(o);
	  };
	  o.defaultMakeUtil = function(o){
	    this.defaultMakeUtilJs(o);
	  };
	  o.defaultMakeApp = function(o){
	    this.defaultMakeAppJs(o);
	  };
	  o.initDefaultJs = function(){
	    if (this.debug) {
	      console.log('Default!');
	    }
	  };
	  o.defaultMakeJs = function(o){
	    if (this.debug) {
	      console.log('Default:Make');
	    }
	    this.defaultMakeBoot();
	    this.defaultMakeStore();
	    this.defaultMakeMain();
	    this.defaultMakeAdmin();
	    this.defaultMakeUtil();
	    this.defaultMakeApp();
	  };
	  o.defaultMakeStoreJs = function(o){
	    if (this.debug) {
	      console.log('Default:Make:Store');
	    }
	    this.setting = {};
	    this.id = {
	      main: null,
	      app: null
	    };
	    this.tree = {
	      main: null
	    };
	    this.child = null;
	    this.datas = {
	      main: {},
	      app: {}
	    };
	    this.repos = {
	      main: {}
	    };
	  };
	  o.defaultMakeBootJs = function(o){
	    if (this.debug) {
	      console.log('Default:Make:Boot');
	    }
	    this.config = {
	      layout: 'split',
	      store_data_main: {
	        index: 'static',
	        'static': {
	          db_url: '',
	          table: ''
	        },
	        indexeddb: {
	          db_url: 'x_1',
	          table: 'main'
	        },
	        localstorage: {
	          db_url: '',
	          table: ''
	        },
	        dom: {
	          db_url: '',
	          table: ''
	        },
	        ajax: {
	          db_url: '',
	          table: ''
	        },
	        firebase: {
	          db_url: '',
	          table: ''
	        }
	      },
	      store_repo_main: {
	        index: 'static',
	        'static': {
	          db_url: '',
	          table: ''
	        },
	        indexeddb: {
	          db_url: 'x_1',
	          table: 'main_repo'
	        },
	        localstorage: {
	          db_url: '',
	          table: ''
	        },
	        dom: {
	          db_url: '',
	          table: ''
	        },
	        ajax: {
	          db_url: '',
	          table: ''
	        },
	        firebase: {
	          db_url: '',
	          table: ''
	        }
	      },
	      store_data_app: {
	        index: 'static',
	        'static': {
	          db_url: '',
	          table: ''
	        },
	        indexeddb: {
	          db_url: 'x_1',
	          table: ''
	        },
	        localstorage: {
	          db_url: '',
	          table: ''
	        },
	        dom: {
	          db_url: '',
	          table: ''
	        },
	        ajax: {
	          db_url: '',
	          table: ''
	        },
	        firebase: {
	          db_url: '',
	          table: ''
	        }
	      }
	    };
	    this.options = {
	      stores: {}
	    };
	  };
	  o.defaultMakeMainJs = function(o){
	    if (this.debug) {
	      console.log('Default:Make:Main');
	    }
	    this.editors = {
	      inputs: {
	        notes: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.files = {
	      inputs: {
	        notes: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.exts = {
	      inputs: {
	        notes: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.modes = {
	      inputs: {
	        notes: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.input = {
	      notes: 'index'
	    };
	    this.inputs = {
	      notes: JSON.parse(this.samples.main['md'].input_notes)
	    };
	    this.frames = {
	      outputs: {
	        index: {}
	      }
	    };
	    this.urlhashes = {
	      outputs: {
	        index: {}
	      }
	    };
	    this.results = {
	      outputs: {
	        index: {}
	      }
	    };
	    this.output = {
	      index: 'index'
	    };
	    this.outputs = {
	      index: {
	        'index': {}
	      }
	    };
	    this.delays = {
	      run: 0,
	      save: 0,
	      load: 0
	    };
	    this.debounces = {
	      inputs: {
	        notes: 0
	      }
	    };
	    this.runs = {};
	    this.scripts = {
	      'txt': true,
	      'html': true,
	      'js': true,
	      'css': true,
	      'md': true,
	      '++.md': true,
	      'jade': true,
	      'less': false,
	      'sass': false,
	      'styl': false,
	      'ls': true,
	      'babel.js': false,
	      'ts': false,
	      'cs': false,
	      'jsx': true,
	      'json': true,
	      'yaml': true,
	      'xml': true,
	      'sql': false,
	      'mongo.js': false,
	      'php': false,
	      'ruby': false,
	      'python': false,
	      'abc': false,
	      'ashx': true,
	      'java': true,
	      'go': true,
	      'rust': true
	    };
	    this.onloads = {};
	  };
	  o.defaultMakeAdminJs = function(o){
	    if (this.debug) {
	      console.log('Default:Make:Admin');
	    }
	    this.value = {};
	    this.router = {};
	    this.src = {};
	    this.sample = {};
	    this.tree = {};
	    this.list = {};
	    this.report = {};
	    this.calendar = {};
	    this.chart = {};
	  };
	  o.defaultMakeUtilJs = function(o){
	    if (this.debug) {
	      console.log('Default:Make:Util');
	    }
	    this.formats = {
	      inputs: {
	        notes: {}
	      },
	      admin: {
	        index: {}
	      },
	      outputs: {
	        index: {}
	      },
	      app: {
	        index: {}
	      }
	    };
	  };
	  o.defaultMakeAppJs = function(o){
	    if (this.debug) {
	      console.log('Default:Make:App');
	    }
	    this.app = {
	      index: '',
	      value: {},
	      front: {},
	      entity: {
	        work_job: {
	          table: 'work_job',
	          columns: ['name', 'title', 'date_posted', 'date_applied', 'date_responded', 'url', 'company', 'city', 'state', 'map', 'description', 'cover_letter', 'notes'],
	          container: {}
	        }
	      }
	    };
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\boot\default.ls.map


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initLayout = function(){
	    this.initLayoutJs();
	  };
	  o.layoutMakeContainer = function(o){
	    return this.layoutMakeContainerJqSzDr(o);
	  };
	  o.layoutSetValue = function(o){
	    this.layoutSetValueSz(o);
	  };
	  o.layoutGetValue = function(o){
	    return this.layoutGetValueSz(o);
	  };
	  o.layoutMatchAliasToTitle = function(o){
	    return this.layoutMatchAliasToTitleJs(o);
	  };
	  o.layoutMatchTitleToAlias = function(o){
	    return this.layoutMatchTitleToAliasJs(o);
	  };
	  o.initLayoutJs = function(){
	    if (this.debug) {
	      console.log('Layout!');
	    }
	  };
	  o.layoutMakeContainerJqSzDr = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('Layout:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          var layout;
	          layout = _this.layoutMatchTitleToAlias({
	            title: value
	          });
	          _this.configSet({
	            config: 'layout',
	            props: layout
	          });
	          if (_this.router.destroy) {
	            _this.router.destroy();
	          }
	          _this.init();
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.layoutSetValueSz = function(o){
	    if (this.debug) {
	      console.log('Layout:Set:Value');
	    }
	    this.layout.setValue(o.value, function(){});
	  };
	  o.layoutGetValueSz = function(o){
	    if (this.debug) {
	      console.log('Layout:Get:Value');
	    }
	    return this.layout.getValue();
	  };
	  o.layoutMatchAliasToTitleJs = function(o){
	    var aliases;
	    if (this.debug) {
	      console.log('Layout:Match:Alias:To:Title');
	    }
	    aliases = {
	      'split': 'Layout - Split',
	      'split_vtab': 'Layout - Split VTab',
	      'combined': 'Layout - Combined'
	    };
	    return aliases[o.alias];
	  };
	  o.layoutMatchTitleToAliasJs = function(o){
	    var titles;
	    if (this.debug) {
	      console.log('Layout:Match:Title:To:Alias');
	    }
	    titles = {
	      'Layout - Split': 'split',
	      'Layout - Split VTab': 'split_vtab',
	      'Layout - Combined': 'combined'
	    };
	    return titles[o.title];
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\boot\layout.ls.map


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initConfig = function(){
	    this.initConfigJs();
	  };
	  o.configSet = function(o){
	    this.configSetJs(o);
	  };
	  o.configGet = function(o){
	    return this.configGetJs(o);
	  };
	  o.configSave = function(o){
	    this.configSaveJs(o);
	  };
	  o.configLoad = function(o){
	    return this.configLoadJs(o);
	  };
	  o.configMakeDataMain = function(o){
	    this.configMakeDataMainJs(o);
	  };
	  o.configMakeRepoMain = function(o){
	    this.configMakeRepoMainJs(o);
	  };
	  o.configMakeDataApp = function(o){
	    this.configMakeDataAppJs(o);
	  };
	  o.configMakeLayout = function(o){
	    this.configMakeLayoutJq(o);
	  };
	  o.initConfigJs = function(){
	    if (this.debug) {
	      console.log('Config!');
	    }
	    this.defaultMake();
	    this.configLoad();
	    this.configSave();
	    this.configMakeDataMain();
	    this.configMakeLayout();
	    this.layout = this.layoutMakeContainer(this.props.boot.layout);
	    this.layoutSetValue({
	      value: this.layoutMatchAliasToTitle({
	        alias: this.config.layout
	      })
	    });
	  };
	  o.configSetJs = function(o){
	    var save;
	    if (this.debug) {
	      console.log('Config:Set');
	    }
	    save = o.save || true;
	    this.config[o.config] = o.props;
	    if (save) {
	      this.configSave();
	    }
	  };
	  o.configGetJs = function(o){
	    if (this.debug) {
	      console.log('Config:Get');
	    }
	    return this.config[o.config];
	  };
	  o.configSaveJs = function(o){
	    if (this.debug) {
	      console.log('Config:Save');
	    }
	    this.settingSet({
	      setting: 'config',
	      props: this.config
	    });
	  };
	  o.configLoadJs = function(o){
	    var settings;
	    if (this.debug) {
	      console.log('Config:Load');
	    }
	    settings = this.settingGet();
	    if (settings.config) {
	      this.config = settings.config;
	    }
	  };
	  o.configMakeDataMainJs = function(o){
	    var adapter, params;
	    if (this.debug) {
	      console.log('Config:Make:Data:Main');
	    }
	    adapter = this.config.store_data_main.index;
	    params = this.config.store_data_main[adapter];
	    this.dataMainMake({
	      adapter: adapter,
	      params: params
	    });
	  };
	  o.configMakeDataAppJs = function(o){
	    var adapter, db_url;
	    if (this.debug) {
	      console.log('Config:Make:Data:App');
	    }
	    adapter = this.config.store_data_app.index;
	    db_url = this.config.store_data_app[adapter].db_url;
	    this.dataAppMake({
	      table: o.table,
	      adapter: adapter,
	      params: {
	        db_url: db_url,
	        table: o.table
	      }
	    });
	  };
	  o.configMakeLayoutJq = function(o){
	    var layout, template;
	    if (this.debug) {
	      console.log('Config:Make:Layout');
	    }
	    layout = this.config.layout;
	    template = this.templates.layout[layout];
	    $('#app').html('');
	    $('#app').html(template);
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\boot\config.ls.map


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initOption = function(){
	    this.initOptionJs();
	  };
	  o.initOptionJs = function(){
	    if (this.debug) {
	      console.log('Option!');
	    }
	    __webpack_require__(44)(Component);
	    __webpack_require__(45)(Component);
	    this.initOptionStore();
	    this.initOptionRun();
	    this.optionStoreMake(this.props.boot.options.store_data_main);
	    this.optionStoreMake(this.props.boot.options.store_repo_main);
	    this.optionStoreMake(this.props.boot.options.store_data_app);
	    this.optionStoreSetDataHeader({
	      title: this.optionStoreMatchAliasToTitle({
	        alias: this.config.store_data_main.index
	      })
	    });
	    this.optionRunMakeLoadable(this.props.boot.options.run_preprocessor_less);
	    this.optionRunMakeLoadable(this.props.boot.options.run_preprocessor_sass);
	    this.optionRunMakeLoadable(this.props.boot.options.run_preprocessor_styl);
	    this.optionRunMakeLoadable(this.props.boot.options.run_transpiler_babel);
	    this.optionRunMakeLoadable(this.props.boot.options.run_transpiler_ts);
	    this.optionRunMakeLoadable(this.props.boot.options.run_transpiler_cs);
	    this.optionRunMakeLoadable(this.props.boot.options.run_database_sql);
	    this.optionRunMakeLoadable(this.props.boot.options.run_database_mongo);
	    this.optionRunMakeLoadable(this.props.boot.options.run_lang_php);
	    this.optionRunMakeLoadable(this.props.boot.options.run_lang_ruby);
	    this.optionRunMakeLoadable(this.props.boot.options.run_lang_python);
	    this.optionRunMakeLoadable(this.props.boot.options.run_music_abc);
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\boot\option.ls.map


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initOptionStore = function(){
	    this.initOptionStoreJs();
	  };
	  o.optionStoreMake = function(o){
	    this.optionStoreMakeJs(o);
	  };
	  o.optionStoreMakeContainer = function(o){
	    return this.optionStoreMakeContainerSz(o);
	  };
	  o.optionStoreMakeInputsAutoConfig = function(o){
	    this.optionStoreMakeInputsAutoConfigJq(o);
	  };
	  o.optionStoreConfigInputs = function(o){
	    this.optionStoreConfigInputsJq(o);
	  };
	  o.optionStoreSetValue = function(o){
	    this.optionStoreSetValueSz(o);
	  };
	  o.optionStoreGetValue = function(o){
	    return this.optionStoreGetValueSz(o);
	  };
	  o.optionStoreMatchAliasToTitle = function(o){
	    return this.optionStoreMatchAliasToTitleJs(o);
	  };
	  o.optionStoreMatchTitleToAlias = function(o){
	    return this.optionStoreMatchTitleToAliasJs(o);
	  };
	  o.optionStoreSetDataHeader = function(o){
	    this.optionStoreSetDataHeaderJq(o);
	  };
	  o.initOptionStoreJs = function(){
	    if (this.debug) {
	      console.log('Option:Store!');
	    }
	  };
	  o.optionStoreMakeJs = function(o){
	    if (this.debug) {
	      console.log('Option:Store:Make');
	    }
	    this.options[o.config] = this.optionStoreMakeContainer(o);
	    this.optionStoreMakeInputsAutoConfig(o);
	    this.optionStoreConfigInputs(o);
	    this.optionStoreSetValue({
	      config: o.config,
	      value: this.optionStoreMatchAliasToTitle({
	        alias: this.config[o.config].index
	      })
	    });
	  };
	  o.optionStoreMakeContainerSz = function(o){
	    var _this, configSz;
	    if (this.debug) {
	      console.log('Option:Store:Make:Container');
	    }
	    _this = this;
	    configSz = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          var adapter;
	          adapter = _this.optionStoreMatchTitleToAlias({
	            title: value
	          });
	          _this.config[o.config].index = adapter;
	          _this.configSet({
	            config: o.config,
	            props: _this.config[o.config]
	          });
	          _this.optionStoreConfigInputs(o);
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(configSz())[0].selectize;
	  };
	  o.optionStoreMakeInputsAutoConfigJq = function(o){
	    var _this, config, i$, ref$, len$;
	    if (this.debug) {
	      console.log('Option:Store:Make:Inputs:Auto:Config');
	    }
	    _this = this;
	    config = o.config;
	    for (i$ = 0, len$ = (ref$ = o.inputs).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(i, input){
	      var id;
	      id = o.id + '__' + input;
	      $('#' + id).on('change', function(){
	        var val, adapter;
	        val = $(this).val();
	        adapter = _this.config[o.config].index;
	        _this.config[o.config][adapter][input] = val;
	        _this.configSet({
	          config: o.config,
	          props: _this.config[o.config]
	        });
	      });
	    }
	  };
	  o.optionStoreConfigInputsJq = function(o){
	    var _this, adapter, i$, ref$, len$;
	    if (this.debug) {
	      console.log('Option:Store:Config:Inputs');
	    }
	    _this = this;
	    adapter = this.config[o.config].index;
	    for (i$ = 0, len$ = (ref$ = o.inputs).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(i, input){
	      var id, val;
	      id = o.id + '__' + input;
	      val = this.config[o.config][adapter][input];
	      $('#' + id).val(val);
	    }
	  };
	  o.optionStoreSetValueSz = function(o){
	    if (this.debug) {
	      console.log('Option:Store:Set:Value');
	    }
	    this.options[o.config].setValue(o.value, function(){});
	  };
	  o.optionStoreGetValueSz = function(o){
	    if (this.debug) {
	      console.log('Option:Store:Get:Value');
	    }
	    return this.options[o.config].getValue();
	  };
	  o.optionStoreMatchAliasToTitleJs = function(o){
	    var aliases;
	    if (this.debug) {
	      console.log('Option:Store:Match:Alias:To:Title');
	    }
	    aliases = {
	      'static': 'Static',
	      'indexeddb': 'Browser (IndexedDB)',
	      'localstorage': 'Browser (LocalStorage)',
	      'ajax': 'Server (AJAX)',
	      'dom': 'Server (DOM)',
	      'firebase': 'Cloud (Firebase)'
	    };
	    return aliases[o.alias];
	  };
	  o.optionStoreMatchTitleToAliasJs = function(o){
	    var titles;
	    if (this.debug) {
	      console.log('Option:Store:Match:Title:To:Alias', o);
	    }
	    titles = {
	      'Static': 'static',
	      'Browser (IndexedDB)': 'indexeddb',
	      'Browser (LocalStorage)': 'localstorage',
	      'Server (AJAX)': 'ajax',
	      'Server (DOM)': 'dom',
	      'Cloud (Firebase)': 'firebase'
	    };
	    return titles[o.title];
	  };
	  o.optionStoreSetDataHeaderJq = function(o){
	    if (this.debug) {
	      console.log('Option:Store:Set:Data:Header');
	    }
	    $('#header__data').html(o.title);
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\boot\option\store.ls.map


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initOptionRun = function(){
	    this.initOptionRunJs();
	  };
	  o.optionRunMakeLoadable = function(o){
	    this.optionRunMakeLoadableIcJq(o);
	  };
	  o.optionRunLoadScript = function(o){
	    this.optionRunLoadScriptDmJqIc(o);
	  };
	  o.initOptionRunJs = function(){
	    if (this.debug) {
	      console.log('Option:Run!');
	    }
	  };
	  o.optionRunMakeLoadableIcJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Option:Run:Make:Loadable');
	    }
	    _this = this;
	    $('#' + o.id).iCheck({
	      checkboxClass: 'icheckbox_minimal-red'
	    });
	    $('#' + o.id).on('ifChecked', function(){
	      var ext;
	      ext = $('#' + o.id + '__ext').html();
	      if (!_this.scripts[ext]) {
	        _this.optionRunLoadScript(o);
	      }
	    });
	  };
	  o.optionRunLoadScriptDmJqIc = function(o){
	    var _this, script, ext, src, e;
	    if (this.debug) {
	      console.log('Option:Run:Load:Script');
	    }
	    _this = this;
	    script = document.createElement('script');
	    ext = $('#' + o.id + '__ext').html();
	    src = $('#' + o.id + '__src').val();
	    script.src = src;
	    script.onload = function(){
	      console.log('Script loaded', o.title);
	      if (_this.onloads[ext]) {
	        _this.onloads[ext]();
	      }
	      _this.scripts[ext] = true;
	      $('#' + o.id).iCheck('check');
	      $('#' + o.id).iCheck('disable');
	      if (o.cb) {
	        o.cb();
	      }
	    };
	    try {
	      document.body.appendChild(script);
	    } catch (e$) {
	      e = e$;
	      console.log('Script error', e);
	      $('#' + o.id).iCheck('uncheck');
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\boot\option\run.ls.map


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initMain = function(){
	    this.initMainJs();
	  };
	  o.initMainJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Main!'
	    });
	    __webpack_require__(47)(Component);
	    __webpack_require__(48)(Component);
	    __webpack_require__(49)(Component);
	    __webpack_require__(50)(Component);
	    __webpack_require__(51)(Component);
	    __webpack_require__(52)(Component);
	    __webpack_require__(53)(Component);
	    __webpack_require__(54)(Component);
	    __webpack_require__(55)(Component);
	    __webpack_require__(56)(Component);
	    __webpack_require__(57)(Component);
	    __webpack_require__(79)(Component);
	    __webpack_require__(80)(Component);
	    __webpack_require__(81)(Component);
	    __webpack_require__(82)(Component);
	    this.initEditor();
	    this.initFile();
	    this.initExt();
	    this.initMode();
	    this.initResult();
	    this.initFrame();
	    this.initUrlhash();
	    this.initLint();
	    this.initInput();
	    this.initOutput();
	    this.initRun();
	    this.initSave();
	    this.initLoad();
	    this.initScript();
	    this.initInclude();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main.ls.map


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initEditor = function(){
	    this.initEditorJs();
	  };
	  o.editorMakeContainer = function(o){
	    return this.editorMakeContainerCmJq(o);
	  };
	  o.editorSetValue = function(o){
	    this.editorSetValueCm(o);
	  };
	  o.editorGetValue = function(o){
	    return this.editorGetValueCm(o);
	  };
	  o.editorSetProp = function(o){
	    this.editorSetPropCm(o);
	  };
	  o.editorGetProp = function(o){
	    return this.editorGetPropCm(o);
	  };
	  o.editorSetMode = function(o){
	    this.editorSetModeCm(o);
	  };
	  o.editorGetMode = function(o){
	    return this.editorGetModeCm(o);
	  };
	  o.editorToggleLint = function(o){
	    this.editorToggleLintJqCm(o);
	  };
	  o.initEditorJs = function(){
	    if (this.debug) {
	      console.log('Editor!');
	    }
	  };
	  o.editorMakeContainerCmJq = function(o){
	    var _this, editor;
	    if (this.debug) {
	      console.log('Editor:Make:Container');
	    }
	    _this = this;
	    editor = CodeMirror.fromTextArea(document.getElementById(o.id), {
	      mode: o.type || 'text/plain',
	      theme: 'blackboard',
	      gutters: ['CodeMirror-lint-markers'],
	      tabMode: 'indent',
	      lineNumbers: true,
	      indentUnit: 2,
	      lineWrapping: true,
	      lint: o.lint || false
	    });
	    if (o.onChange) {
	      editor.on('change', function(){
	        _this[o.onChange]({
	          context: o.context,
	          entity: o.entity
	        });
	      });
	    }
	    return editor;
	  };
	  o.editorSetValueCm = function(o){
	    if (this.debug) {
	      console.log('Editor:Set:Value');
	    }
	    this.editors[o.context][o.entity].setValue(o.value);
	  };
	  o.editorGetValueCm = function(o){
	    if (this.debug) {
	      console.log('Editor:Get:Value');
	    }
	    return this.editors[o.context][o.entity].getValue();
	  };
	  o.editorGetPropCm = function(o){
	    this.editors[o.context][o.entity].getOption(o.prop);
	    if (this.debug) {
	      return console.log('Editor:Get:Prop');
	    }
	  };
	  o.editorSetPropCm = function(o){
	    if (this.debug) {
	      console.log('Editor:Set:Prop');
	    }
	    return this.editors[o.context][o.entity].setOption(o.prop, o.value);
	  };
	  o.editorSetModeCm = function(o){
	    var modes, mode;
	    if (this.debug) {
	      console.log('Editor:Set:Mode');
	    }
	    modes = {
	      'txt': 'text/plain',
	      'html': 'text/html',
	      'js': 'text/javascript',
	      'css': 'text/css',
	      'md': 'text/x-markdown',
	      '++.md': 'text/x-markdown',
	      'jade': 'text/x-jade',
	      'less': 'text/x-less',
	      'sass': 'text/x-sass',
	      'styl': 'text/x-styl',
	      'ls': 'text/x-livescript',
	      'jsx': 'text/jsx',
	      'babel.js': 'text/javascript',
	      'ts': 'text/typescript',
	      'cs': 'text/x-coffeescript',
	      'json': 'application/x-json',
	      'yaml': 'text/x-yaml',
	      'xml': 'text/xml',
	      'sql': 'text/x-sql',
	      'mongo.js': 'text/javascript',
	      'php': 'text/x-php',
	      'ruby': 'text/x-ruby',
	      'python': 'text/x-python',
	      'abc': 'text/x-markdown',
	      'ashx': 'text/x-csharp',
	      'java': 'text/x-java',
	      'go': 'text/x-go',
	      'rust': 'text/x-rust'
	    };
	    mode = o.value || modes[o.ext];
	    this.editors[o.context][o.entity].setOption('mode', mode);
	  };
	  o.editorGetModeCm = function(o){
	    if (this.debug) {
	      console.log('Editor:Get:Mode');
	    }
	    return this.editors[o.context][o.entity].getOption('mode');
	  };
	  o.editorToggleLintJqCm = function(o){
	    var e;
	    if (this.debug) {
	      console.log('Editor:Toggle:Lint');
	    }
	    try {
	      this.editors[o.context][o.entity].setOption('lint', o.state);
	    } catch (e$) {
	      e = e$;
	      console.log('Lint error', e);
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\editor.ls.map


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initFile = function(){
	    this.initFileJs();
	  };
	  o.fileMakeContainer = function(o){
	    return this.fileMakeContainerSz(o);
	  };
	  o.fileMakeCreatable = function(o){
	    this.fileMakeCreatableJs(o);
	  };
	  o.fileMakeDestroyable = function(o){
	    this.fileMakeDestroyableJq(o);
	  };
	  o.fileSetValue = function(o){
	    this.fileSetValueSz(o);
	  };
	  o.fileGetValue = function(o){
	    return this.fileGetValueSz(o);
	  };
	  o.fileList = function(o){
	    return this.fileListSz(o);
	  };
	  o.fileCreate = function(o){
	    this.fileCreateSz(o);
	  };
	  o.fileDestroy = function(o){
	    this.fileDestroySz(o);
	  };
	  o.fileReset = function(o){
	    this.fileResetSz(o);
	  };
	  o.fileIsValid = function(o){
	    return this.fileIsValidJs(o);
	  };
	  o.fileDisable = function(o){
	    this.fileDisableSz(o);
	  };
	  o.fileEnable = function(o){
	    this.fileEnableSz(o);
	  };
	  o.initFileJs = function(){
	    var _this;
	    if (this.debug) {
	      console.log('File!');
	    }
	    _this = this;
	  };
	  o.fileIsValidJs = function(o){
	    if (this.debug) {
	      console.log('File:Is:Valid');
	    }
	    return true;
	  };
	  o.fileMakeContainerSz = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('File:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        },
	        create: function(value){
	          if (o.onCreate) {
	            return _this[o.onCreate]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        }
	      };
	    };
	    if (o.destroyable) {
	      this.fileMakeDestroyable({
	        context: o.context,
	        entity: o.entity,
	        id: o.id + '__destroy',
	        destroyable: o.destroyable
	      });
	    }
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.fileMakeDestroyableJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('File:Make:Destroyable');
	    }
	    _this = this;
	    $('#' + o.id).click(function(){
	      var file;
	      file = _this.fileGetValue({
	        context: o.context,
	        entity: o.entity
	      });
	      _this[o.destroyable]({
	        context: o.context,
	        entity: o.entity,
	        file: file
	      });
	    });
	  };
	  o.fileSetValueSz = function(o){
	    if (this.debug) {
	      console.log('File:Set:Value');
	    }
	    this.files[o.context][o.entity].setValue(o.value, function(){});
	  };
	  o.fileGetValueSz = function(o){
	    if (this.debug) {
	      console.log('File:Get:Value');
	    }
	    return this.files[o.context][o.entity].getValue();
	  };
	  o.fileListSz = function(o){
	    if (this.debug) {
	      console.log('File:List');
	    }
	    return this.files[o.context][o.entity].options;
	  };
	  o.fileCreateSz = function(o){
	    if (this.debug) {
	      console.log('File:Create');
	    }
	    this.files[o.context][o.entity].addOption({
	      value: o.value,
	      label: o.value
	    });
	  };
	  o.fileDestroySz = function(o){
	    var value;
	    if (this.debug) {
	      console.log('File:Destroy');
	    }
	    value = o.value || this.fileGetValue({
	      context: o.context,
	      entity: o.entity
	    });
	    if (value !== 'index') {
	      this.files[o.context][o.entity].removeOption(value);
	    } else {
	      if (this.debug) {
	        console.log('index cannot be deleted!');
	      }
	    }
	  };
	  o.fileResetSz = function(o){
	    if (this.debug) {
	      console.log('File:Reset');
	    }
	    this.files[o.context][o.entity].clearOptions();
	  };
	  o.fileEnableSz = function(o){
	    if (this.debug) {
	      console.log('File:Enable');
	    }
	    this.files[o.context][o.entity].enable();
	  };
	  o.fileDisableSz = function(o){
	    if (this.debug) {
	      console.log('File:Disable');
	    }
	    this.files[o.context][o.entity].disable();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\file.ls.map


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initExt = function(){
	    this.initExtJs();
	  };
	  o.extMakeContainer = function(o){
	    return this.extMakeContainerSz(o);
	  };
	  o.extSetValue = function(o){
	    this.extSetValueSz(o);
	  };
	  o.extGetValue = function(o){
	    return this.extGetValueSz(o);
	  };
	  o.extIsValid = function(o){
	    return this.extIsValidJs(o);
	  };
	  o.extEnable = function(o){
	    this.extEnableSz(o);
	  };
	  o.extDisable = function(o){
	    this.extDisableSz(o);
	  };
	  o.initExtJs = function(){
	    if (this.debug) {
	      console.log('Ext!');
	    }
	  };
	  o.extMakeContainerSz = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('Ext:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.extSetValueSz = function(o){
	    if (this.debug) {
	      console.log('Ext:Set:Value');
	    }
	    this.exts[o.context][o.entity].setValue(o.value, function(){});
	  };
	  o.extGetValueSz = function(o){
	    if (this.debug) {
	      console.log('Ext:Get:Value');
	    }
	    return this.exts[o.context][o.entity].getValue();
	  };
	  o.extIsValidJs = function(o){
	    var valid, exts;
	    if (this.debug) {
	      console.log('Ext:Is:Valid');
	    }
	    valid = true;
	    exts = ['txt', 'html', 'js', 'css', 'md', '++.md', 'jade', 'less', 'sass', 'styl', 'ls', 'jsx', 'babel.js', 'ts', 'cs', 'json', 'yaml', 'xml', 'sql', 'mongo.js', 'php', 'ruby', 'python', 'abc', 'ashx', 'java', 'go', 'rust'];
	    if (exts.indexOf(o.ext) === -1) {
	      valid = false;
	    }
	    return valid;
	  };
	  o.extEnableSz = function(o){
	    if (this.debug) {
	      console.log('Ext:Enable');
	    }
	    this.exts[o.context][o.entity].enable();
	  };
	  o.extDisableSz = function(o){
	    if (this.debug) {
	      console.log('Ext:Disable');
	    }
	    this.exts[o.context][o.entity].disable();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\ext.ls.map


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initMode = function(){
	    this.initModeJs();
	  };
	  o.modeMakeContainer = function(o){
	    return this.modeMakeContainerSz(o);
	  };
	  o.modeSetValue = function(o){
	    this.modeSetValueSz(o);
	  };
	  o.modeGetValue = function(o){
	    return this.modeGetValueSz(o);
	  };
	  o.modeGetFromExt = function(o){
	    return this.modeGetFromExtJs(o);
	  };
	  o.modeEnable = function(o){
	    this.modeEnableSz(o);
	  };
	  o.modeDisable = function(o){
	    this.modeDisableSz(o);
	  };
	  o.initModeJs = function(){
	    if (this.debug) {
	      console.log('Mode!');
	    }
	  };
	  o.modeMakeContainerSz = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('Mode:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.modeSetValueSz = function(o){
	    var value;
	    if (this.debug) {
	      console.log('Mode:Set:Value');
	    }
	    value = o.value || this.modeGetFromExt({
	      ext: o.ext
	    });
	    this.modes[o.context][o.entity].setValue(value, function(){});
	  };
	  o.modeGetValueSz = function(o){
	    if (this.debug) {
	      console.log('Mode:Get:Value');
	    }
	    return this.modes[o.context][o.entity].getValue();
	  };
	  o.modeGetFromExtJs = function(o){
	    var modes, mode;
	    if (this.debug) {
	      console.log('Mode:Get:From:Ext');
	    }
	    modes = {
	      'txt': 'text/plain',
	      'html': 'text/html',
	      'js': 'text/javascript',
	      'css': 'text/css',
	      'md': 'text/x-markdown',
	      '++.md': 'text/x-markdown',
	      'jade': 'text/x-jade',
	      'less': 'text/x-less',
	      'sass': 'text/x-sass',
	      'styl': 'text/x-styl',
	      'ls': 'text/x-livescript',
	      'jsx': 'text/jsx',
	      'babel.js': 'text/javascript',
	      'ts': 'text/typescript',
	      'cs': 'text/x-coffeescript',
	      'json': 'application/x-json',
	      'yaml': 'text/x-yaml',
	      'xml': 'text/xml',
	      'sql': 'text/x-sql',
	      'mongo.js': 'text/javascript',
	      'php': 'text/x-php',
	      'ruby': 'text/x-ruby',
	      'python': 'text/x-python',
	      'abc': 'text/x-markdown',
	      'ashx': 'text/x-csharp',
	      'java': 'text/x-java',
	      'go': 'text/x-go',
	      'rust': 'text/x-rust'
	    };
	    mode = modes[o.ext] || 'text/plain';
	    return mode;
	  };
	  o.modeEnableSz = function(o){
	    if (this.debug) {
	      console.log('Mode:Enable');
	    }
	    this.modes[o.context][o.entity].enable();
	  };
	  o.modeDisableSz = function(o){
	    if (this.debug) {
	      console.log('Mode:Disable');
	    }
	    this.modes[o.context][o.entity].disable();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\mode.ls.map


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initFrame = function(){
	    this.initFrameJs();
	  };
	  o.frameMakeContainer = function(o){
	    return this.frameMakeContainerJqDm(o);
	  };
	  o.frameWrite = function(o){
	    this.frameWriteDm(o);
	  };
	  o.frameWriteCustom = function(o){
	    this.frameWriteCustomJq(o);
	  };
	  o.frameBuildMarkup = function(o){
	    return this.frameBuildMarkupJs(o);
	  };
	  o.initFrameJs = function(){
	    if (this.debug) {
	      console.log('Frame!');
	    }
	  };
	  o.frameMakeContainerJqDm = function(o){
	    var iframeInit, iframe;
	    if (this.debug) {
	      console.log('Frame:Make:Container');
	    }
	    $('#content__output__index__frame').remove();
	    $('<iframe id="content__output__index__frame"></iframe>').appendTo('#content__output__index__holder');
	    iframeInit = document.getElementById('content__output__index__frame');
	    iframe = iframeInit.contentDocument || iframeInit.contentWindow.document;
	    return iframe;
	  };
	  o.frameWriteDm = function(o){
	    var _this, frame;
	    if (this.debug) {
	      console.log('Frame:Write');
	    }
	    _this = this;
	    frame = this.frameMakeContainer();
	    frame.open();
	    frame.write(o.write);
	    frame.close();
	  };
	  o.frameWriteCustomJq = function(o){
	    if (this.debug) {
	      console.log('Frame:Write:Custom');
	    }
	    $('#' + o.id).html(o.content);
	  };
	  o.frameBuildMarkupJs = function(o){
	    if (this.debug) {
	      console.log('Frame:Build:Markup');
	    }
	    return '<!DOCTYPE html><html><head><style>' + (o.style || '') + '</style></head><body>' + (o.content || '') + '<script>' + (o.script || '') + '<' + '/script>' + '</body></html>';
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\frame.ls.map


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initUrlhash = function(){
	    this.initUrlhashJs();
	  };
	  o.urlhashMakeContainer = function(o){
	    return this.urlhashMakeContainerSz(o);
	  };
	  o.urlhashSetValue = function(o){
	    this.urlhashSetValueSz(o);
	  };
	  o.urlhashGetValue = function(o){
	    return this.urlhashGetValueSz(o);
	  };
	  o.urlhashCreate = function(o){
	    return this.urlhashCreateSz(o);
	  };
	  o.initUrlhashJs = function(){
	    if (this.debug) {
	      console.log('Urlhash!');
	    }
	  };
	  o.urlhashMakeContainerSz = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('Urlhash:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        },
	        create: function(value){
	          if (o.onCreate) {
	            return _this[o.onCreate]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        }
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.urlhashSetValueSz = function(o){
	    if (this.debug) {
	      console.log('Urlhash:Set:Value');
	    }
	    this.urlhashes[o.context][o.entity].setValue(o.value, function(){});
	  };
	  o.urlhashGetValueSz = function(o){
	    if (this.debug) {
	      console.log('Urlhash:Get:Value');
	    }
	    return this.urlhashes[o.context][o.entity].getValue();
	  };
	  o.urlhashCreateSz = function(o){
	    if (this.debug) {
	      console.log('Urlhash:Create');
	    }
	    this.urlhashes[o.context][o.entity].addOption({
	      value: o.value,
	      label: o.value
	    });
	    this.urlhashes[o.context][o.entity].setValue(o.value, function(){});
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\urlhash.ls.map


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initResult = function(){
	    this.initResultJs();
	  };
	  o.resultMakeContainer = function(o){
	    return this.resultMakeContainerSz(o);
	  };
	  o.resultSetValue = function(o){
	    this.resultSetValueSz(o);
	  };
	  o.resultGetValue = function(o){
	    return this.resultGetValueSz(o);
	  };
	  o.initResultJs = function(){
	    if (this.debug) {
	      console.log('Result!');
	    }
	  };
	  o.resultMakeContainerSz = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('Result:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          value = _this[o.onChange]({
	            context: o.context,
	            entity: o.entity,
	            value: value
	          });
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.resultSetValueSz = function(o){
	    if (this.debug) {
	      console.log('Result:Set:Value');
	    }
	    this.results[o.context][o.entity].setValue(o.value, function(){});
	  };
	  o.resultGetValueSz = function(o){
	    if (this.debug) {
	      console.log('Result:Get:Value');
	    }
	    return this.results[o.context][o.entity].getValue();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\result.ls.map


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initLint = function(){
	    this.initLintJs();
	  };
	  o.lintMake = function(o){
	    return this.lintMakeJqIc(o);
	  };
	  o.lintSetValue = function(o){
	    this.lintSetValueIc(o);
	  };
	  o.lintGetValue = function(o){
	    return this.lintGetValueIc(o);
	  };
	  o.lintEnable = function(o){
	    this.lintEnableIc(o);
	  };
	  o.lintDisable = function(o){
	    this.lintDisableIc(o);
	  };
	  o.initLintJs = function(){
	    var _this;
	    if (this.debug) {
	      console.log('Lint!');
	    }
	    _this = this;
	    this.lintMake(this.props.main.lint.inputs.notes);
	    this.lintMake(this.props.main.lint.outputs.index);
	  };
	  o.lintMakeJqIc = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Lint:Make');
	    }
	    _this = this;
	    $('#' + o.id).iCheck({
	      checkboxClass: 'icheckbox_minimal'
	    });
	    $('#' + o.id).on('ifChanged', function(){
	      var checked;
	      checked = $('#' + o.id).prop('checked');
	      _this[o.onChange]({
	        context: o.context,
	        entity: o.entity,
	        value: checked
	      });
	    });
	  };
	  o.lintSetValueIc = function(o){
	    var ids, value;
	    if (this.debug) {
	      console.log('Lint:Set:Value');
	    }
	    ids = {
	      'outputs': 'output',
	      'inputs': 'input'
	    };
	    value = o.value === true ? 'check' : 'uncheck';
	    $('#content__' + ids[o.context] + '__' + o.entity + '__lint').iCheck(value);
	  };
	  o.lintGetValueIc = function(o){
	    var ids;
	    if (this.debug) {
	      console.log('Lint:Get:Value');
	    }
	    ids = {
	      'outputs': 'output',
	      'inputs': 'input'
	    };
	    return $('#content__' + ids[o.context] + '__' + o.entity + '__lint').prop('checked');
	  };
	  o.lintEnableIc = function(o){
	    var ids;
	    if (this.debug) {
	      console.log('Lint:Enable');
	    }
	    ids = {
	      'outputs': 'output',
	      'inputs': 'input'
	    };
	    $('#content__' + ids[o.context] + '__' + o.entity + '__lint').iCheck('enable');
	  };
	  o.lintDisableIc = function(o){
	    var ids;
	    if (this.debug) {
	      console.log('Lint:Disable');
	    }
	    ids = {
	      'outputs': 'output',
	      'inputs': 'input'
	    };
	    $('#content__' + ids[o.context] + '__' + o.entity + '__lint').iCheck('disable');
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\lint.ls.map


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initInput = function(){
	    this.initInputJs();
	  };
	  o.inputGet = function(o){
	    return this.inputGetJs(o);
	  };
	  o.inputGetExts = function(o){
	    return this.inputGetExtsJs(o);
	  };
	  o.inputSelect = function(o){
	    this.inputSelectJs(o);
	  };
	  o.inputCreate = function(o){
	    return this.inputCreateJs(o);
	  };
	  o.inputUpdate = function(o){
	    return this.inputUpdateJs(o);
	  };
	  o.inputDestroy = function(o){
	    return this.inputDestroyJs(o);
	  };
	  o.inputFind = function(o){
	    return this.inputFindJs(o);
	  };
	  o.inputFindAll = function(o){
	    return this.inputFindAllJs(o);
	  };
	  o.inputReset = function(o){
	    this.inputResetJs(o);
	  };
	  o.inputMakeContainer = function(o){
	    this.inputMakeContainerJs(o);
	  };
	  o.inputOnFileChange = function(o){
	    return this.inputOnFileChangeJs(o);
	  };
	  o.inputOnFileCreate = function(o){
	    return this.inputOnFileCreateJs(o);
	  };
	  o.inputOnExtChange = function(o){
	    return this.inputOnExtChangeJs(o);
	  };
	  o.inputOnModeChange = function(o){
	    return this.inputOnModeChangeJs(o);
	  };
	  o.inputOnEditorChange = function(o){
	    this.inputOnEditorChangeJs(o);
	  };
	  o.inputOnLintChange = function(o){
	    this.inputOnLintChangeJs(o);
	  };
	  o.inputRun = function(o){
	    this.inputRunJs(o);
	  };
	  o.inputSave = function(o){
	    this.inputSaveJs(o);
	  };
	  o.inputLoad = function(o){
	    this.inputLoadJs(o);
	  };
	  o.inputLoadFiles = function(o){
	    this.inputLoadFilesJs(o);
	  };
	  o.inputLoadAuto = function(o){
	    this.inputLoadAutoJs(o);
	  };
	  o.inputLoadFilesAuto = function(o){
	    this.inputLoadFilesAutoJs(o);
	  };
	  o.inputLoadOthersAuto = function(o){
	    this.inputLoadOthersAutoJs(o);
	  };
	  o.initInputJs = function(){
	    if (this.debug) {
	      console.log('Input!');
	    }
	    this.inputMakeContainer({
	      entity: 'notes',
	      editor: this.props.main.editors.inputs.notes,
	      file: this.props.main.files.inputs.notes,
	      ext: this.props.main.exts.inputs.notes,
	      mode: this.props.main.modes.inputs.notes
	    });
	    this.inputReset({
	      entity: 'notes'
	    });
	  };
	  o.inputGetJs = function(o){
	    var input;
	    if (this.debug) {
	      console.log('Input:Get');
	    }
	    input = this.inputs[o.entity][this.input[o.entity]];
	    return {
	      name: input.name,
	      src: input.src,
	      ext: input.ext,
	      mode: input.mode
	    };
	  };
	  o.inputGetExtsJs = function(o){
	    var _exts, exts, i$, ref$;
	    if (this.debug) {
	      console.log('Input:Find:All:Exts');
	    }
	    _exts = {};
	    exts = [];
	    for (i$ in ref$ = this.inputs[o.entity]) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    for (i$ in _exts) {
	      (fn1$.call(this, i$, _exts[i$]));
	    }
	    return exts;
	    function fn$(i, el){
	      _exts[el.ext] = '';
	    }
	    function fn1$(i, el){
	      exts.push(i);
	    }
	  };
	  o.inputSelectJs = function(o){
	    var file;
	    if (this.debug) {
	      console.log('Input:Select');
	    }
	    this.input[o.entity] = o.file;
	    file = this.inputs[o.entity][o.file];
	    this.fileSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: file.name
	    });
	    this.extSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: file.ext
	    });
	    this.modeSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: file.mode
	    });
	    this.editorSetMode({
	      context: 'inputs',
	      entity: o.entity,
	      value: file.mode
	    });
	    this.editorSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: file.src
	    });
	    this.lintSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: false
	    });
	  };
	  o.inputCreateJs = function(o){
	    if (this.debug) {
	      console.log('Input:Create');
	    }
	    this.inputs[o.entity][o.file] = {
	      name: o.file,
	      src: o.src || '\n\n',
	      ext: o.ext || '++.md',
	      mode: o.mode || 'text/x-markdown'
	    };
	    this.fileCreate({
	      context: 'inputs',
	      entity: o.entity,
	      value: o.file
	    });
	  };
	  o.inputUpdateJs = function(o){
	    var file, inputFile, mode;
	    if (this.debug) {
	      console.log('Input:Update');
	    }
	    file = o.file || this.fileGetValue({
	      entity: o.entity
	    });
	    inputFile = this.inputs[o.entity][file];
	    if (inputFile) {
	      if (o.name) {
	        inputFile.name = o.name || o.file;
	      }
	      if (o.src) {
	        inputFile.src = o.src;
	      }
	      if (o.ext) {
	        inputFile.ext = o.ext;
	        this.editorSetMode({
	          context: 'inputs',
	          entity: o.entity,
	          ext: o.ext
	        });
	        mode = this.editorGetMode({
	          context: 'inputs',
	          entity: o.entity
	        });
	        inputFile.mode = mode;
	        this.modeSetValue({
	          context: 'inputs',
	          entity: o.entity,
	          value: mode
	        });
	      }
	      if (o.mode) {
	        inputFile.mode = o.mode;
	        this.editorSetMode({
	          context: 'inputs',
	          entity: o.entity,
	          value: o.mode
	        });
	      }
	      this.inputSave();
	    }
	  };
	  o.inputDestroyJs = function(o){
	    if (this.debug) {
	      console.log('Input:Destroy');
	    }
	    if (o.file !== 'index') {
	      delete this.inputs[o.entity][o.file];
	      this.fileDestroy({
	        context: 'inputs',
	        entity: o.entity,
	        value: o.file
	      });
	      this.inputSelect({
	        entity: o.entity,
	        file: 'index'
	      });
	    } else {
	      if (this.debug) {
	        console.log('index cannot be deleted!');
	      }
	    }
	  };
	  o.inputFindJs = function(o){
	    if (this.debug) {
	      console.log('Input:Find');
	    }
	    return this.inputs[o.entity][o.file];
	  };
	  o.inputFindAllJs = function(o){
	    var inputs;
	    if (this.debug) {
	      console.log('Input:Find:All');
	    }
	    inputs = this.inputs[o.entity];
	    return inputs;
	  };
	  o.inputResetJs = function(o){
	    if (this.debug) {
	      console.log('Input:Reset');
	    }
	    this.input[o.entity] = 'index';
	    this.inputs[o.entity] = JSON.parse(this.samples.main['md'].input_notes);
	    this.inputSelect({
	      entity: o.entity,
	      file: 'index'
	    });
	  };
	  o.inputMakeContainerJs = function(o){
	    var context;
	    if (this.debug) {
	      console.log('Input:Make:Container');
	    }
	    context = 'inputs';
	    this.editors[context][o.entity] = this.editorMakeContainer(o.editor);
	    this.files[context][o.entity] = this.fileMakeContainer(o.file);
	    this.exts[context][o.entity] = this.extMakeContainer(o.ext);
	    this.modes[context][o.entity] = this.modeMakeContainer(o.mode);
	  };
	  o.inputOnFileChangeJs = function(o){
	    if (this.debug) {
	      console.log('Input:On:File:Change');
	    }
	    if (o.value !== '') {
	      this.inputSelect({
	        entity: o.entity,
	        file: o.value
	      });
	    } else {
	      o.value = 'index';
	    }
	    return o.value;
	  };
	  o.inputOnFileCreateJs = function(o){
	    if (this.debug) {
	      console.log('Input:On:File:Create');
	    }
	    this.inputCreate({
	      entity: o.entity,
	      file: o.value
	    });
	    return {
	      value: o.value,
	      label: o.value
	    };
	  };
	  o.inputOnExtChangeJs = function(o){
	    var file;
	    if (this.debug) {
	      console.log('Input:On:Ext:Change');
	    }
	    file = this.fileGetValue({
	      context: 'inputs',
	      entity: o.entity
	    });
	    if (o.value !== '') {
	      this.inputUpdate({
	        entity: o.entity,
	        file: file,
	        ext: o.value
	      });
	    } else {
	      o.value = '++.md';
	    }
	    return o.value;
	  };
	  o.inputOnModeChangeJs = function(o){
	    var file;
	    if (this.debug) {
	      console.log('Input:On:Mode:Change');
	    }
	    file = this.fileGetValue({
	      context: 'inputs',
	      entity: o.entity
	    });
	    if (o.value !== '') {
	      this.inputUpdate({
	        entity: o.entity,
	        file: file,
	        mode: o.value
	      });
	    } else {
	      o.value = 'text/x-markdown';
	    }
	    return o.value;
	  };
	  o.inputOnEditorChangeJs = function(o){
	    var _this, file, value;
	    if (this.debug) {
	      console.log('Input:On:Editor:Change');
	    }
	    _this = this;
	    file = this.fileGetValue({
	      context: 'inputs',
	      entity: o.entity
	    });
	    value = this.editorGetValue({
	      context: 'inputs',
	      entity: o.entity
	    });
	    this.inputUpdate({
	      entity: o.entity,
	      file: file,
	      src: value
	    });
	    this.inputSave({
	      entity: o.entity
	    });
	    this.inputRun({
	      entity: o.entity
	    });
	    this.debounces.inputs[o.entity] = true;
	    setTimeout(function(){
	      _this.debounces.inputs[o.entity] = false;
	    }, 2000);
	  };
	  o.inputOnLintChangeJs = function(o){
	    if (this.debug) {
	      console.log('Input:On:Lint:Change');
	    }
	    this.editorToggleLint({
	      context: 'inputs',
	      entity: o.entity,
	      state: o.value
	    });
	  };
	  o.inputSaveJs = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Input:Save');
	    }
	    _this = this;
	    if (this.saveIsAuto()) {
	      setTimeout(function(){
	        _this.saveById();
	      }, 300);
	    }
	  };
	  o.inputRunJs = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Input:Run');
	    }
	    _this = this;
	    if (this.runIsAuto()) {
	      setTimeout(function(){
	        _this.runFront({
	          entity: o.entity
	        });
	      }, 300);
	    }
	  };
	  o.inputLoadJs = function(o){
	    var i$, ref$;
	    if (this.debug) {
	      console.log('Input:Load');
	    }
	    for (i$ in ref$ = o.inputs) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(entity, files){
	      this.inputs[entity] = files;
	      this.inputLoadFiles({
	        entity: entity,
	        files: files
	      });
	      this.inputSelect({
	        entity: entity,
	        file: 'index'
	      });
	    }
	  };
	  o.inputLoadFilesJs = function(o){
	    var filesGlobal, filesLocal, i$;
	    if (this.debug) {
	      console.log('Input:Load:Files');
	    }
	    filesGlobal = o.files;
	    filesLocal = this.fileList({
	      context: 'inputs',
	      entity: o.entity
	    });
	    for (i$ in filesGlobal) {
	      (fn$.call(this, i$, filesGlobal[i$]));
	    }
	    for (i$ in filesLocal) {
	      (fn1$.call(this, i$, filesLocal[i$]));
	    }
	    function fn$(file, props){
	      this.fileCreate({
	        context: 'inputs',
	        entity: o.entity,
	        value: file
	      });
	    }
	    function fn1$(file, props){
	      if (!filesGlobal.hasOwnProperty(file)) {
	        this.fileDestroy({
	          context: 'inputs',
	          entity: o.entity,
	          value: file
	        });
	      }
	    }
	  };
	  o.inputLoadAutoJs = function(o){
	    var i$, ref$;
	    if (this.debug) {
	      console.log('Input:Load:Auto');
	    }
	    for (i$ in ref$ = o.inputs) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(entity, files){
	      this.inputs[entity] = files;
	      this.inputLoadFilesAuto({
	        entity: entity,
	        files: files
	      });
	      this.inputLoadOthersAuto({
	        entity: entity
	      });
	    }
	  };
	  o.inputLoadFilesAutoJs = function(o){
	    var filesGlobal, filesLocal, i$;
	    if (this.debug) {
	      console.log('Input:Load:Files:Auto');
	    }
	    filesGlobal = o.files;
	    filesLocal = this.fileList({
	      context: 'inputs',
	      entity: o.entity
	    });
	    for (i$ in filesGlobal) {
	      (fn$.call(this, i$, filesGlobal[i$]));
	    }
	    for (i$ in filesLocal) {
	      (fn1$.call(this, i$, filesLocal[i$]));
	    }
	    function fn$(file, props){
	      this.fileCreate({
	        context: 'inputs',
	        entity: o.entity,
	        value: file
	      });
	    }
	    function fn1$(file, props){
	      if (!filesGlobal.hasOwnProperty(file)) {
	        this.fileDestroy({
	          context: 'inputs',
	          entity: o.entity,
	          value: file
	        });
	        this.inputSelect({
	          entity: o.entity,
	          file: 'index'
	        });
	      }
	    }
	  };
	  o.inputLoadOthersAutoJs = function(o){
	    var i$, ref$;
	    if (this.debug) {
	      console.log('Input:Load:Editors:Auto');
	    }
	    for (i$ in ref$ = this.inputs) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(entity, props){
	      var input, input_src, input_ext, input_mode, editor_val, ext_val, mode_val;
	      input = this.input[entity];
	      input_src = this.inputs[entity][input].src;
	      input_ext = this.inputs[entity][input].ext;
	      input_mode = this.inputs[entity][input].mode;
	      editor_val = this.editorGetValue({
	        context: 'inputs',
	        entity: entity
	      });
	      ext_val = this.extGetValue({
	        context: 'inputs',
	        entity: entity
	      });
	      mode_val = this.modeGetValue({
	        context: 'inputs',
	        entity: entity
	      });
	      if (input_src !== editor_val) {
	        if (!this.debounces.inputs[o.entity]) {
	          this.editorSetValue({
	            context: 'inputs',
	            entity: entity,
	            value: input_src
	          });
	        }
	      }
	      if (input_ext !== ext_val) {
	        this.extSetValue({
	          context: 'inputs',
	          entity: entity,
	          value: input_ext
	        });
	        this.editorSetMode({
	          context: 'inputs',
	          entity: entity,
	          ext: input_ext
	        });
	      }
	      if (input_mode !== mode_val) {
	        this.modeSetValue({
	          context: 'inputs',
	          entity: entity,
	          value: input_mode
	        });
	      }
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\input.ls.map


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initOutput = function(){
	    this.initOutputJs();
	  };
	  o.outputRun = function(o){
	    this.outputRunJs(o);
	  };
	  o.outputRunFrame = function(o){
	    return this.outputRunFrameJs(o);
	  };
	  o.outputRunEditor = function(o){
	    this.outputRunEditorJs(o);
	  };
	  o.outputGetProps = function(o){
	    return this.outputGetPropsJs(o);
	  };
	  o.outputReset = function(o){
	    this.outputResetJs(o);
	  };
	  o.outputMakeContainerFrame = function(o){
	    this.outputMakeContainerFrameJs(o);
	  };
	  o.outputMakeContainerEditor = function(o){
	    this.outputMakeContainerEditorJs(o);
	  };
	  o.outputOnResultChange = function(o){
	    this.outputOnResultChangeJs(o);
	  };
	  o.outputOnUrlhashChange = function(o){
	    this.outputOnUrlhashChangeJs(o);
	  };
	  o.outputOnUrlhashCreate = function(o){
	    return this.outputOnUrlhashCreateJs(o);
	  };
	  o.outputOnExtChange = function(o){
	    this.outputOnExtChangeJs(o);
	  };
	  o.outputOnModeChange = function(o){
	    this.outputOnModeChangeJs(o);
	  };
	  o.outputOnLintChange = function(o){
	    this.outputOnLintChangeJs(o);
	  };
	  o.initOutputJs = function(){
	    var _this;
	    if (this.debug) {
	      console.log('Output!');
	    }
	    _this = this;
	    this.results.outputs.index = this.resultMakeContainer(this.props.main.result.outputs.index);
	    this.resultSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: 'frame'
	    });
	    this.exts.outputs.index = this.extMakeContainer(this.props.main.exts.outputs.index);
	    this.extSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: 'html'
	    });
	    this.modes.outputs.index = this.modeMakeContainer(this.props.main.modes.outputs.index);
	    this.modeSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: 'text/html'
	    });
	    this.outputMakeContainerFrame();
	  };
	  o.outputRunJs = function(o){
	    var _this, results;
	    if (this.debug) {
	      console.log('Output:Run');
	    }
	    _this = this;
	    results = {
	      frame: function(){
	        _this.outputRunFrame(o);
	      },
	      editor: function(){
	        _this.outputRunEditor(o);
	      }
	    };
	    results[o.result]();
	  };
	  o.outputRunFrameJs = function(o){
	    var _this, content;
	    if (this.debug) {
	      console.log('Output:Run:Frame');
	    }
	    _this = this;
	    content = o.src || this.frameBuildMarkup(o);
	    if (o.src) {
	      content = this.includeInline({
	        content: content,
	        tag: 'div'
	      });
	      content = this.includeInline({
	        content: content,
	        tag: 'style'
	      });
	      content = this.includeInline({
	        content: content,
	        tag: 'script'
	      });
	      content = this.includeInlineMultiple({
	        content: content,
	        tag: 'script'
	      });
	    }
	    if (o['export']) {
	      o['export']({
	        src: content
	      });
	    } else {
	      this.frameWrite({
	        write: content
	      });
	    }
	    document.getElementById('content__output__index__frame').contentWindow.onhashchange = function(){
	      var hashurl;
	      hashurl = this.window.location.hash;
	      _this.urlhashCreate({
	        context: 'outputs',
	        entity: 'index',
	        value: hashurl
	      });
	    };
	  };
	  o.outputRunEditorJs = function(o){
	    if (this.debug) {
	      console.log('Output:Run:Editor');
	    }
	    this.editorSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: o.src
	    });
	    this.extSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: o.ext
	    });
	    this.editorSetMode({
	      context: 'outputs',
	      entity: 'index',
	      ext: o.ext
	    });
	    this.modeSetValue({
	      context: 'outputs',
	      entity: 'index',
	      ext: o.ext
	    });
	  };
	  o.outputGetPropsJs = function(o){
	    var props;
	    if (this.debug) {
	      console.log('Output:Get:Props');
	    }
	    props = {
	      result: this.resultGetValue({
	        context: 'outputs',
	        entity: 'index'
	      }),
	      ext: this.extGetValue({
	        context: 'outputs',
	        entity: 'index'
	      })
	    };
	    return props;
	  };
	  o.outputResetJs = function(o){
	    if (this.debug) {
	      console.log('Output:Reset');
	    }
	    delete this.editors.outputs.index;
	    delete this.files.outputs.index;
	    delete this.frames.outputs.index;
	    delete this.urlhashes.outputs.index;
	  };
	  o.outputMakeContainerFrameJs = function(o){
	    if (this.debug) {
	      console.log('Output:Make:Container:Frame');
	    }
	    this.extSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: 'html'
	    });
	    this.extDisable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.modeSetValue({
	      context: 'outputs',
	      entity: 'index',
	      ext: 'html'
	    });
	    this.modeDisable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.lintSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: false
	    });
	    this.lintDisable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.frameWriteCustom({
	      id: 'content__output__index__button__holder',
	      content: '<button type="button" id="content__output__index__urlhash__button" class="btn btn-default"><i class="fa fa-hashtag"></i></button>'
	    });
	    this.frameWriteCustom({
	      id: 'content__output__index__select__holder',
	      content: '<select id="content__output__index__urlhash"></select>'
	    });
	    this.frameWriteCustom({
	      id: 'content__output__index__holder',
	      content: '<iframe id="content__output__index__frame"></iframe>'
	    });
	    this.outputReset();
	    this.urlhashes.outputs.index = this.urlhashMakeContainer({
	      context: 'outputs',
	      entity: 'index',
	      id: 'content__output__index__urlhash',
	      options: [{
	        value: '#/'
	      }],
	      onChange: 'outputOnUrlhashChange',
	      onCreate: 'outputOnUrlhashCreate'
	    });
	  };
	  o.outputMakeContainerEditorJs = function(o){
	    if (this.debug) {
	      console.log('Output:Make:Container:Editor');
	    }
	    this.extEnable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.modeEnable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.lintEnable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.frameWriteCustom({
	      id: 'content__output__index__button__holder',
	      content: '<button id="content__output__index__file__destroy" type="button" class="btn btn-danger disabled"><i class="fa fa-trash"></i></button>'
	    });
	    this.frameWriteCustom({
	      id: 'content__output__index__select__holder',
	      content: '<select id="content__output__index__file"></select>'
	    });
	    this.frameWriteCustom({
	      id: 'content__output__index__holder',
	      content: '<textarea id="content__output__index__editor"></textarea>'
	    });
	    this.outputReset();
	    this.editors.outputs.index = this.editorMakeContainer({
	      context: 'outputs',
	      entity: 'index',
	      id: 'content__output__index__editor',
	      type: 'text/html',
	      ext: 'html'
	    });
	    this.files.outputs.index = this.fileMakeContainer({
	      context: 'outputs',
	      entity: 'index',
	      id: 'content__output__index__file',
	      options: [{
	        value: 'index'
	      }]
	    });
	    this.fileSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: 'index'
	    });
	    this.fileDisable({
	      context: 'outputs',
	      entity: 'index'
	    });
	  };
	  o.outputOnResultChangeJs = function(o){
	    var _this, run;
	    if (this.debug) {
	      console.log('Output:On:Run:Change');
	    }
	    _this = this;
	    run = {
	      frame: function(){
	        _this.outputMakeContainerFrame();
	      },
	      editor: function(){
	        _this.outputMakeContainerEditor();
	      }
	    };
	    run[o.value]();
	  };
	  o.outputOnUrlhashChangeJs = function(o){
	    if (this.debug) {
	      console.log('Output:On:Urlhash:Change');
	    }
	    document.getElementById('content__output__index__frame').contentWindow.window.location.hash = o.value;
	  };
	  o.outputOnUrlhashCreateJs = function(o){
	    var woHashUrl;
	    if (this.debug) {
	      console.log('Output:On:Urlhash:Create');
	    }
	    woHashUrl = o.value.lastIndexOf('#/', 0 === 0);
	    if (woHashUrl) {
	      o.value = '#/';
	    }
	    return {
	      value: o.value,
	      label: o.value
	    };
	  };
	  o.outputOnExtChangeJs = function(o){
	    if (this.debug) {
	      console.log('Output:On:Ext:Change');
	    }
	    this.modeSetValue({
	      context: 'outputs',
	      entity: 'index',
	      ext: o.value
	    });
	    this.editorSetMode({
	      context: 'outputs',
	      entity: 'index',
	      ext: o.value
	    });
	    return o.value;
	  };
	  o.outputOnModeChangeJs = function(o){
	    if (this.debug) {
	      console.log('Output:On:Mode:Change');
	    }
	    this.editorSetMode({
	      context: 'outputs',
	      entity: 'index',
	      value: o.value
	    });
	    return o.value;
	  };
	  o.outputOnLintChangeJs = function(o){
	    if (this.debug) {
	      console.log('Output:On:Lint:Change');
	    }
	    this.editorToggleLint({
	      context: 'outputs',
	      entity: o.entity,
	      state: o.value
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\output.ls.map


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initRun = function(){
	    this.initRunJs();
	  };
	  o.initRunModules = function(){
	    this.initRunModulesJs();
	  };
	  o.initRunDefaults = function(){
	    this.initRunDefaultsJs();
	  };
	  o.initRunInputs = function(){
	    this.initRunInputsJqIc();
	  };
	  o.run = function(o){
	    return this.runJs(o);
	  };
	  o.runFront = function(o){
	    this.runFrontJs(o);
	  };
	  o.runConfig = function(o){
	    return this.runConfigJs(o);
	  };
	  o.runDisplay = function(o){
	    this.runDisplayJs(o);
	  };
	  o.runGetConfig = function(o){
	    return this.runGetConfigJs(o);
	  };
	  o.runConcatFiles = function(o){
	    return this.runConcatFilesJs(o);
	  };
	  o.runIsAuto = function(o){
	    return this.runIsAutoJq(o);
	  };
	  o.initRunJs = function(){
	    if (this.debug) {
	      console.log('Run!');
	    }
	    this.initRunModules();
	    this.initRunDefaults();
	    this.initRunInputs();
	  };
	  o.runJs = function(o){
	    var input, params;
	    if (this.debug) {
	      console.log('Run');
	    }
	    input = this.inputFind({
	      entity: o.entity || 'notes',
	      file: o.file || 'index'
	    });
	    params = {
	      type: o.type,
	      entity: o.entity || 'notes',
	      name: o.name || input.name,
	      src: o.src || input.src,
	      run: o.run || input.ext,
	      ext: o.ext || 'html',
	      'export': o['export'] || false
	    };
	    params = this.runConfig(params);
	    return this.runs[params.run](params);
	  };
	  o.runFrontJs = function(o){
	    var _this, entity, output, input, exts, isExtsLoaded, cb;
	    if (this.debug) {
	      console.log('Run:Front');
	    }
	    _this = this;
	    entity = o.entity || 'notes';
	    output = this.outputGetProps();
	    input = this.inputGet({
	      entity: entity
	    });
	    exts = this.inputGetExts({
	      entity: entity
	    });
	    isExtsLoaded = this.scriptIsExtsLoaded({
	      exts: exts
	    });
	    cb = function(){
	      var exts, isExtsLoaded, config, file;
	      exts = _this.inputGetExts({
	        entity: entity
	      });
	      isExtsLoaded = _this.scriptIsExtsLoaded({
	        exts: exts
	      });
	      if (isExtsLoaded) {
	        config = _this.runGetConfig({
	          entity: entity
	        });
	        file = null;
	        if (config.global && config.global.run) {
	          file = config.global.run;
	        }
	        if (config[input.name] && config[input.name].run) {
	          file = config[input.name].run;
	        }
	        _this.run({
	          type: o.type || output.result,
	          ext: o.ext || output.ext,
	          entity: entity,
	          file: file || input.name,
	          'export': o['export'] || false
	        });
	      }
	    };
	    if (!isExtsLoaded) {
	      this.scriptLoadExts({
	        exts: exts,
	        cb: cb
	      });
	    } else {
	      cb();
	    }
	  };
	  o.runConfigJs = function(o){
	    var config, main;
	    if (this.debug) {
	      console.log('Run:Config');
	    }
	    config = this.runGetConfig({
	      entity: o.entity
	    });
	    if (config.global) {
	      o.global = config.global;
	    }
	    if (config[o.name]) {
	      main = config[o.name];
	      if (main.prepends) {
	        o.src = this.runConcatFiles({
	          files: main.prepends
	        }) + o.src;
	      }
	      if (main.appends) {
	        o.src += '\r\n' + this.runConcatFiles({
	          files: main.appends
	        });
	      }
	    }
	    return o;
	  };
	  o.runDisplayJs = function(o){
	    if (this.debug) {
	      console.log('Run:Display');
	    }
	    o.result = o.type;
	    this.outputRun(o);
	  };
	  o.runGetConfigJs = function(o){
	    var params, config;
	    if (this.debug) {
	      console.log('Run:Get:Config');
	    }
	    params = {};
	    config = this.inputFind({
	      entity: o.entity || 'notes',
	      file: 'config'
	    });
	    if (config) {
	      params = JSON.parse(config.src);
	    }
	    return params;
	  };
	  o.runConcatFilesJs = function(o){
	    var str, i$, ref$, len$;
	    if (this.debug) {
	      console.log('Run:Get:Files');
	    }
	    str = '';
	    for (i$ = 0, len$ = (ref$ = o.files).length; i$ < len$; ++i$) {
	      (fn$.call(this, ref$[i$]));
	    }
	    return str;
	    function fn$(fileOutput){
	      var fileInput;
	      fileInput = this.inputFind({
	        entity: o.entity || 'notes',
	        file: fileOutput
	      });
	      str += fileInput.src + '\r\n';
	    }
	  };
	  o.runIsAutoJq = function(o){
	    if (this.debug) {
	      console.log('Run:Is:Auto');
	    }
	    return $('#content__run__auto').prop('checked');
	  };
	  o.initRunInputsJqIc = function(){
	    var _this;
	    if (this.debug) {
	      console.log('Run:Inputs!');
	    }
	    _this = this;
	    $('#content__run').click(function(){
	      _this.runFront({
	        entity: 'notes'
	      });
	    });
	    $('#content__run__auto').iCheck({
	      checkboxClass: 'icheckbox_minimal-blue'
	    });
	  };
	  o.initRunModulesJs = function(o){
	    if (this.debug) {
	      console.log('Run:Modules!');
	    }
	    __webpack_require__(58)(Component);
	    __webpack_require__(59)(Component);
	    __webpack_require__(60)(Component);
	    __webpack_require__(61)(Component);
	    __webpack_require__(62)(Component);
	    __webpack_require__(63)(Component);
	    __webpack_require__(64)(Component);
	    __webpack_require__(65)(Component);
	    __webpack_require__(66)(Component);
	    __webpack_require__(67)(Component);
	    __webpack_require__(68)(Component);
	    __webpack_require__(69)(Component);
	    __webpack_require__(70)(Component);
	    __webpack_require__(71)(Component);
	    __webpack_require__(72)(Component);
	    __webpack_require__(73)(Component);
	    __webpack_require__(74)(Component);
	    __webpack_require__(75)(Component);
	    __webpack_require__(76)(Component);
	    __webpack_require__(77)(Component);
	    __webpack_require__(78)(Component);
	  };
	  o.initRunDefaultsJs = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Run:Defaults!');
	    }
	    _this = this;
	    this.runs = {
	      'html': function(o){
	        return _this.runDefaultHtml(o);
	      },
	      'css': function(o){
	        return _this.runDefaultCss(o);
	      },
	      'js': function(o){
	        return _this.runDefaultJs(o);
	      },
	      'md': function(o){
	        return _this.runMarkdownMarked(o);
	      },
	      '++.md': function(o){
	        return _this.runMarkdownMarkedpp(o);
	      },
	      'jade': function(o){
	        return _this.runTemplateJade(o);
	      },
	      'less': function(o){
	        return _this.runPreprocessorLess(o);
	      },
	      'sass': function(o){
	        return _this.runPreprocessorSass(o);
	      },
	      'styl': function(o){
	        return _this.runPreprocessorStylus(o);
	      },
	      'ls': function(o){
	        return _this.runTranspilerLivescript(o);
	      },
	      'ts': function(o){
	        return _this.runTranspilerTypescript(o);
	      },
	      'babel.js': function(o){
	        return _this.runTranspilerBabel(o);
	      },
	      'cs': function(o){
	        return _this.runTranspilerCoffeescript(o);
	      },
	      'json': function(o){
	        return _this.runFormatJson(o);
	      },
	      'yaml': function(o){
	        return _this.runFormatYaml(o);
	      },
	      'xml': function(o){
	        return _this.runFormatXml(o);
	      },
	      'sql': function(o){
	        return _this.runDatabaseSql(o);
	      },
	      'mongo.js': function(o){
	        return _this.runDatabaseMongo(o);
	      },
	      'php': function(o){
	        return _this.runLangPhp(o);
	      },
	      'ruby': function(o){
	        return _this.runLangRuby(o);
	      },
	      'python': function(o){
	        return _this.runLangPython(o);
	      },
	      'abc': function(o){
	        return _this.runMusicAbc(o);
	      },
	      'ashx': function(o){},
	      'java': function(o){},
	      'go': function(o){},
	      'rust': function(o){}
	    };
	    this.onloads = {
	      'html': function(o){},
	      'css': function(o){},
	      'js': function(o){},
	      'md': function(o){},
	      '++.md': function(o){},
	      'jade': function(o){},
	      'less': function(o){
	        window.less.renderSync = function(src){
	          var css;
	          css = '';
	          this.render(src, {}, function(err, result){
	            css = result.css;
	          });
	          return css;
	        };
	      },
	      'sass': function(o){},
	      'styl': function(o){
	        var stylus;
	        stylus = window['require']('stylus');
	        stylus.renderSync = function(src){
	          var css;
	          css = '';
	          this.render(src, {}, function(err, result){
	            css = result;
	          });
	          return css;
	        };
	        window.stylus = stylus;
	      },
	      'ls': function(o){},
	      'ts': function(o){},
	      'jsx': function(o){},
	      'babel.js': function(o){},
	      'cs': function(o){},
	      'json': function(o){},
	      'yaml': function(o){},
	      'xml': function(o){},
	      'sql': function(o){},
	      'mongo.js': function(o){},
	      'php': function(o){},
	      'ruby': function(o){},
	      'python': function(o){},
	      'abc': function(o){},
	      'ashx': function(o){},
	      'java': function(o){},
	      'go': function(o){},
	      'rust': function(o){}
	    };
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run.ls.map


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runDefaultHtml = function(o){
	    return this.runDefaultHtmlJs(o);
	  };
	  o.runDefaultHtmlFrame = function(o){
	    this.runDefaultHtmlFrameJs(o);
	  };
	  o.runDefaultHtmlEditor = function(o){
	    this.runDefaultHtmlEditorJs(o);
	  };
	  o.runDefaultHtmlCompile = function(o){
	    return this.runDefaultHtmlCompileJs(o);
	  };
	  o.runDefaultHtmlJs = function(o){
	    var _this, types;
	    if (this.debug) {
	      console.log('Run:Default:Html');
	    }
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runDefaultHtmlFrame(o);
	      },
	      editor: function(){
	        _this.runDefaultHtmlEditor(o);
	      },
	      compile: function(){
	        return _this.runDefaultHtmlCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runDefaultHtmlFrameJs = function(o){
	    if (this.debug) {
	      console.log('Run:Default:Html:Frame');
	    }
	    o.src = this.runDefaultHtmlCompile(o);
	    this.runDisplay(o);
	  };
	  o.runDefaultHtmlEditorJs = function(o){
	    if (this.debug) {
	      console.log('Run:Default:Html:Editor');
	    }
	    o.src = this.runDefaultHtmlCompile(o);
	    o.ext = 'html';
	    this.runDisplay(o);
	  };
	  o.runDefaultHtmlCompileJs = function(o){
	    if (this.debug) {
	      console.log('Run:Default:Html:Compile');
	    }
	    return o.src;
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\default\html.ls.map


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runDefaultCss = function(o){
	    return this.runDefaultCssJs(o);
	  };
	  o.runDefaultCssFrame = function(o){
	    this.runDefaultCssFrameJs(o);
	  };
	  o.runDefaultCssEditor = function(o){
	    this.runDefaultCssEditorJs(o);
	  };
	  o.runDefaultCssCompile = function(o){
	    return this.runDefaultCssCompileJs(o);
	  };
	  o.runDefaultCssJs = function(o){
	    var _this, types;
	    if (this.debug) {
	      console.log('Run:Default:Css');
	    }
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runDefaultCssFrame(o);
	      },
	      editor: function(){
	        _this.runDefaultCssEditor(o);
	      },
	      compile: function(){
	        return _this.runDefaultCssCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runDefaultCssFrameJs = function(o){
	    if (this.debug) {
	      console.log('Run:Default:Css:Frame');
	    }
	    o.style = this.runDefaultCssCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  o.runDefaultCssEditorJs = function(o){
	    if (this.debug) {
	      console.log('Run:Default:Css:Editor');
	    }
	    o.src = this.runDefaultCssCompile(o);
	    o.ext = 'css';
	    this.runDisplay(o);
	  };
	  o.runDefaultCssCompileJs = function(o){
	    if (this.debug) {
	      console.log('Run:Default:Css:Compile');
	    }
	    return o.src;
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\default\css.ls.map


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runDefaultJs = function(o){
	    return this.runDefaultJsJs(o);
	  };
	  o.runDefaultJsFrame = function(o){
	    this.runDefaultJsFrameJs(o);
	  };
	  o.runDefaultJsEditor = function(o){
	    this.runDefaultJsEditorJs(o);
	  };
	  o.runDefaultJsCompile = function(o){
	    return this.runDefaultJsCompileJs(o);
	  };
	  o.runDefaultJsJs = function(o){
	    var _this, types;
	    if (this.debug) {
	      console.log('Run:Default:Js');
	    }
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runDefaultJsFrame(o);
	      },
	      editor: function(){
	        _this.runDefaultJsEditor(o);
	      },
	      compile: function(){
	        return _this.runDefaultJsCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runDefaultJsFrameJs = function(o){
	    if (this.debug) {
	      console.log('Run:Default:Js:Frame');
	    }
	    o.script = this.runDefaultJsCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  o.runDefaultJsEditorJs = function(o){
	    if (this.debug) {
	      console.log('Run:Default:Js:Editor');
	    }
	    o.src = this.runDefaultJsCompile(o);
	    o.ext = 'js';
	    this.runDisplay(o);
	  };
	  o.runDefaultJsCompileJs = function(o){
	    if (this.debug) {
	      console.log('Run:Default:Js:Compile');
	    }
	    return o.src;
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\default\js.ls.map


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runMarkdownMarked = function(o){
	    return this.runMarkdownMarkedJs(o);
	  };
	  o.runMarkdownMarkedFrame = function(o){
	    this.runMarkdownMarkedFrameMd(o);
	  };
	  o.runMarkdownMarkedEditor = function(o){
	    this.runMarkdownMarkedEditorMd(o);
	  };
	  o.runMarkdownMarkedCompile = function(o){
	    return this.runMarkdownMarkedCompileMd(o);
	  };
	  o.runMarkdownMarkedJs = function(o){
	    var _this, types;
	    if (this.debug) {
	      console.log('Run:Markdown:Marked');
	    }
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runMarkdownMarkedFrame(o);
	      },
	      editor: function(){
	        _this.runMarkdownMarkedEditor(o);
	      },
	      compile: function(){
	        return _this.runMarkdownMarkedCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runMarkdownMarkedFrameMd = function(o){
	    if (this.debug) {
	      console.log('Run:Markdown:Marked:Frame');
	    }
	    o.src = marked(o.src);
	    this.runDisplay(o);
	  };
	  o.runMarkdownMarkedEditorMd = function(o){
	    if (this.debug) {
	      console.log('Run:Markdown:Marked:Editor');
	    }
	    o.src = marked(o.src);
	    o.ext = 'html';
	    this.runDisplay(o);
	  };
	  o.runMarkdownMarkedCompileMd = function(o){
	    var src, stringify, prepend, append, config;
	    if (this.debug) {
	      console.log('Run:Markdown:Marked:Compile');
	    }
	    src = '';
	    stringify = false;
	    prepend = '';
	    append = '';
	    if (o.global.ext && (o.global.ext.md || o.global.ext['++.md'])) {
	      config = o.global.ext.md || o.global.ext['++.md'];
	      if (config.stringify) {
	        stringify = true;
	      }
	      if (config.prepend) {
	        prepend = config.prepend;
	      }
	      if (config.append) {
	        append = config.append;
	      }
	    }
	    src = marked(o.src);
	    if (stringify) {
	      src = JSON.stringify(src);
	    }
	    src = prepend + '[\'' + o.name + '\'] = ' + src + append;
	    return src;
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\markdown\marked.ls.map


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runMarkdownMarkedpp = function(o){
	    return this.runMarkdownMarkedppJs(o);
	  };
	  o.runMarkdownMarkedppFrame = function(o){
	    this.runMarkdownMarkedppFrameMd(o);
	  };
	  o.runMarkdownMarkedppEditor = function(o){
	    this.runMarkdownMarkedppEditorMd(o);
	  };
	  o.runMarkdownMarkedppCompile = function(o){
	    return this.runMarkdownMarkedppCompileMd(o);
	  };
	  o.runMarkdownMarkedppJs = function(o){
	    var _this, types;
	    if (this.debug) {
	      console.log('Run:Markdown:Markedpp');
	    }
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runMarkdownMarkedppFrame(o);
	      },
	      editor: function(){
	        _this.runMarkdownMarkedppEditor(o);
	      },
	      compile: function(){
	        return _this.runMarkdownMarkedppCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runMarkdownMarkedppFrameMd = function(o){
	    if (this.debug) {
	      console.log('Run:Markdown:Markedpp:Frame');
	    }
	    o.content = marked(o.src);
	    o.style = this.vendors.primer_css + '\n' + this.vendors.highlight_css + '\n' + this.vendors.katex_css + '\n' + 'body { font-size: 16px; }' + 'li { margin-left: 20px;}';
	    o.script = this.vendors.highlight_js + '\n' + 'setTimeout(function(){var _code, i$, len$, j, i;_code = document.getElementsByTagName("pre");for (i$ = 0, len$ = _code.length; i$ < len$; ++i$) {j = i$;i = _code[i$];hljs.highlightBlock(i);}}, 0);' + this.vendors.katex_js + '\n' + this.vendors.katex_auto_js + '\n' + ';renderMathInElement(document.body);' + '\n';
	    o.src = false;
	    this.runDisplay(o);
	  };
	  o.runMarkdownMarkedppEditorMd = function(o){
	    if (this.debug) {
	      console.log('Run:Markdown:Markedpp:Editor');
	    }
	    o.src = marked(o.src);
	    o.ext = 'html';
	    this.runDisplay(o);
	  };
	  o.runMarkdownMarkedppCompileMd = function(o){
	    var src, stringify, prepend, append, config;
	    if (this.debug) {
	      console.log('Run:Markdown:Markedpp:Compile');
	    }
	    src = '';
	    stringify = false;
	    prepend = '';
	    append = '';
	    if (o.global && o.global.ext && (o.global.ext.md || o.global.ext['++.md'])) {
	      config = o.global.ext.md || o.global.ext['++.md'];
	      if (config.stringify) {
	        stringify = true;
	      }
	      if (config.prepend) {
	        prepend = config.prepend;
	      }
	      if (config.append) {
	        append = config.append;
	      }
	    }
	    src = marked(o.src);
	    if (stringify) {
	      src = JSON.stringify(src);
	    }
	    src = prepend + '[\'' + o.name + '\'] = ' + src + append;
	    return src;
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\markdown\marked++.ls.map


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runTemplateJade = function(o){
	    return this.runTemplateJadeJs(o);
	  };
	  o.runTemplateJadeFrame = function(o){
	    this.runTemplateJadeFrameJs(o);
	  };
	  o.runTemplateJadeEditor = function(o){
	    this.runTemplateJadeEditorJs(o);
	  };
	  o.runTemplateJadeCompile = function(o){
	    return this.runTemplateJadeCompileJd(o);
	  };
	  o.runTemplateJadeJs = function(o){
	    var _this, types;
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runTemplateJadeFrame(o);
	      },
	      editor: function(){
	        _this.runTemplateJadeEditor(o);
	      },
	      compile: function(){
	        return _this.runTemplateJadeCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runTemplateJadeFrameJs = function(o){
	    if (this.debug) {
	      console.log('Run:Template:Jade:Frame');
	    }
	    o.src = this.runTemplateJadeCompile(o);
	    this.runDisplay(o);
	  };
	  o.runTemplateJadeEditorJs = function(o){
	    if (this.debug) {
	      console.log('Run:Template:Jade:Editor');
	    }
	    o.src = this.runTemplateJadeCompile(o);
	    this.runDisplay(o);
	  };
	  o.runTemplateJadeCompileJd = function(o){
	    if (this.debug) {
	      console.log('Run:Template:Jade:Compile');
	    }
	    return jade.render(o.src, {
	      pretty: true
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\template\jade.ls.map


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runPreprocessorLess = function(o){
	    return this.runPreprocessorLessJs(o);
	  };
	  o.runPreprocessorLessFrame = function(o){
	    this.runPreprocessorLessFrameJs(o);
	  };
	  o.runPreprocessorLessEditor = function(o){
	    this.runPreprocessorLessEditorJs(o);
	  };
	  o.runPreprocessorLessCompile = function(o){
	    return this.runPreprocessorLessCompileLe(o);
	  };
	  o.runPreprocessorLessJs = function(o){
	    var _this, types;
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runPreprocessorLessFrame(o);
	      },
	      editor: function(){
	        _this.runPreprocessorLessEditor(o);
	      },
	      compile: function(){
	        return _this.runPreprocessorLessCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runPreprocessorLessFrameJs = function(o){
	    if (this.debug) {
	      console.log('Run:Preprocessor:Less:Frame');
	    }
	    o.src = this.runPreprocessorLessCompile(o);
	    this.runDisplay(o);
	  };
	  o.runPreprocessorLessEditorJs = function(o){
	    if (this.debug) {
	      console.log('Run:Preprocessor:Less:Editor');
	    }
	    o.src = this.runPreprocessorLessCompile(o);
	    this.runDisplay(o);
	  };
	  o.runPreprocessorLessCompileLe = function(o){
	    if (this.debug) {
	      console.log('Run:Preprocessor:Less:Compile');
	    }
	    return less.renderSync(o.src);
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\preprocessor\less.ls.map


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runPreprocessorSass = function(o){
	    return this.runPreprocessorSassJs(o);
	  };
	  o.runPreprocessorSassFrame = function(o){
	    this.runPreprocessorSassFrameJs(o);
	  };
	  o.runPreprocessorSassEditor = function(o){
	    this.runPreprocessorSassEditorJs(o);
	  };
	  o.runPreprocessorSassCompile = function(o){
	    return this.runPreprocessorSassCompileSa(o);
	  };
	  o.runPreprocessorSassJs = function(o){
	    var _this, types;
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runPreprocessorSassFrame(o);
	      },
	      editor: function(){
	        _this.runPreprocessorSassEditor(o);
	      },
	      compile: function(){
	        return _this.runPreprocessorSassCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runPreprocessorSassFrameJs = function(o){
	    if (this.debug) {
	      console.log('Run:Preprocessor:Sass:Frame');
	    }
	    o.src = this.runPreprocessorSassCompile(o);
	    this.runDisplay(o);
	  };
	  o.runPreprocessorSassEditorJs = function(o){
	    if (this.debug) {
	      console.log('Run:Preprocessor:Sass:Editor');
	    }
	    o.src = this.runPreprocessorSassCompile(o);
	    this.runDisplay(o);
	  };
	  o.runPreprocessorSassCompileSa = function(o){
	    if (this.debug) {
	      console.log('Run:Preprocessor:Sass:Compile');
	    }
	    return Sass.compile(o.src);
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\preprocessor\sass.ls.map


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runPreprocessorStylus = function(o){
	    return this.runPreprocessorStylusJs(o);
	  };
	  o.runPreprocessorStylusFrame = function(o){
	    this.runPreprocessorStylusFrameJs(o);
	  };
	  o.runPreprocessorStylusEditor = function(o){
	    this.runPreprocessorStylusEditorJs(o);
	  };
	  o.runPreprocessorStylusCompile = function(o){
	    return this.runPreprocessorStylusCompileSy(o);
	  };
	  o.runPreprocessorStylusJs = function(o){
	    var _this, types;
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runPreprocessorStylusFrame(o);
	      },
	      editor: function(){
	        _this.runPreprocessorStylusEditor(o);
	      },
	      compile: function(){
	        return _this.runPreprocessorStylusCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runPreprocessorStylusFrameJs = function(o){
	    if (this.debug) {
	      console.log('Run:Preprocessor:Stylus:Frame');
	    }
	    o.src = this.runPreprocessorStylusCompile(o);
	    this.runDisplay(o);
	  };
	  o.runPreprocessorStylusEditorJs = function(o){
	    if (this.debug) {
	      console.log('Run:Preprocessor:Stylus:Editor');
	    }
	    o.src = this.runPreprocessorStylusCompile(o);
	    this.runDisplay(o);
	  };
	  o.runPreprocessorStylusCompileSy = function(o){
	    if (this.debug) {
	      console.log('Run:Preprocessor:Stylus:Compile');
	    }
	    return stylus(o.src).render();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\preprocessor\stylus.ls.map


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runTranspilerLivescript = function(o){
	    return this.runTranspilerLivescriptJs(o);
	  };
	  o.runTranspilerLivescriptFrame = function(o){
	    this.runTranspilerLivescriptFrameJs(o);
	  };
	  o.runTranspilerLivescriptEditor = function(o){
	    this.runTranspilerLivescriptEditorJs(o);
	  };
	  o.runTranspilerLivescriptCompile = function(o){
	    return this.runTranspilerLivescriptCompileLs(o);
	  };
	  o.runTranspilerLivescriptJs = function(o){
	    var _this, types;
	    if (this.debug) {
	      console.log('Run:Transpiler:Livescript');
	    }
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runTranspilerLivescriptFrame(o);
	      },
	      editor: function(){
	        _this.runTranspilerLivescriptEditor(o);
	      },
	      compile: function(){
	        return _this.runTranspilerLivescriptCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runTranspilerLivescriptFrameJs = function(o){
	    if (this.debug) {
	      console.log('Run:Transpiler:Livescript:Frame');
	    }
	    o.script = this.runTranspilerLivescriptCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  o.runTranspilerLivescriptEditorJs = function(o){
	    if (this.debug) {
	      console.log('Run:Transpiler:Livescript:Editor');
	    }
	    o.src = this.runTranspilerLivescriptCompile(o);
	    o.ext = 'js';
	    this.runDisplay(o);
	  };
	  o.runTranspilerLivescriptCompileLs = function(o){
	    if (this.debug) {
	      console.log('Run:Transpiler:Livescript:Compile');
	    }
	    return LiveScript.compile(o.src, {
	      bare: true
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\transpiler\livescript.ls.map


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runTranspilerTypescript = function(o){
	    return this.runTranspilerTypescriptJs(o);
	  };
	  o.runTranspilerTypescriptFrame = function(o){
	    this.runTranspilerTypescriptFrameJs(o);
	  };
	  o.runTranspilerTypescriptEditor = function(o){
	    this.runTranspilerTypescriptEditorJs(o);
	  };
	  o.runTranspilerTypescriptCompile = function(o){
	    return this.runTranspilerTypescriptCompileTs(o);
	  };
	  o.runTranspilerTypescriptJs = function(o){
	    var _this, types;
	    if (this.debug) {
	      console.log('Run:Transpiler:Typescript');
	    }
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runTranspilerTypescriptFrame(o);
	      },
	      editor: function(){
	        _this.runTranspilerTypescriptEditor(o);
	      },
	      compile: function(){
	        return _this.runTranspilerTypescriptCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runTranspilerTypescriptFrameJs = function(o){
	    if (this.debug) {
	      console.log('Run:Transpiler:Typescript:Frame');
	    }
	    o.script = this.runTranspilerTypescriptCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  o.runTranspilerTypescriptEditorJs = function(o){
	    if (this.debug) {
	      console.log('Run:Transpiler:Typescript:Editor');
	    }
	    o.src = this.runTranspilerTypescriptCompile(o);
	    o.ext = 'js';
	    this.runDisplay(o);
	  };
	  o.runTranspilerTypescriptCompileTs = function(o){
	    if (this.debug) {
	      console.log('Run:Transpiler:Typescript:Compile');
	    }
	    return ts.transpile(o.src, {
	      jsx: ts.JsxEmit.React,
	      module: ts.ModuleKind.CommonJS
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\transpiler\typescript.ls.map


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.runTranspilerBabel = function(o){
	    return this.runTranspilerBabelJs(o);
	  };
	  o.runTranspilerBabelFrame = function(o){
	    this.runTranspilerBabelFrameJs(o);
	  };
	  o.runTranspilerBabelEditor = function(o){
	    this.runTranspilerBabelEditorJs(o);
	  };
	  o.runTranspilerBabelCompile = function(o){
	    return this.runTranspilerBabelCompileBb(o);
	  };
	  o.runTranspilerBabelJs = function(o){
	    var _this, types;
	    if (this.debug) {
	      console.log('Run:Transpiler:Babel:Frame');
	    }
	    _this = this;
	    types = {
	      frame: function(){
	        _this.runTranspilerBabelFrame(o);
	      },
	      editor: function(){
	        _this.runTranspilerBabelEditor(o);
	      },
	      compile: function(){
	        return _this.runTranspilerBabelCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  o.runTranspilerBabelFrameJs = function(o){
	    if (this.debug) {
	      console.log('Run:Transpiler:Babel:Frame');
	    }
	    o.script = this.runTranspilerBabelCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  o.runTranspilerBabelEditorJs = function(o){
	    if (this.debug) {
	      console.log('Run:Transpiler:Babel:Editor');
	    }
	    o.src = this.runTranspilerBabelCompile(o);
	    o.ext = 'js';
	    this.runDisplay(o);
	  };
	  o.runTranspilerBabelCompileBb = function(o){
	    if (this.debug) {
	      console.log('Run:Transpiler:Babel:Compile');
	    }
	    return babel.transform(o.src, {
	      stage: 2,
	      loose: 'all'
	    }).code;
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\transpiler\babel.ls.map


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\transpiler\coffeescript.ls.map


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\format\json.ls.map


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\format\yaml.ls.map


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\format\xml.ls.map


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\database\sql.ls.map


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\database\mongo.ls.map


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\lang\php.ls.map


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\lang\ruby.ls.map


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\run\lang\python.ls.map


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initSave = function(){
	    this.initSaveJqIc();
	  };
	  o.saveById = function(o){
	    return this.saveByIdJs(o);
	  };
	  o.saveIsAuto = function(o){
	    return this.saveIsAutoJq(o);
	  };
	  o.saveSetValue = function(o){
	    this.saveSetValueIc(o);
	  };
	  o.saveGetValue = function(o){
	    return this.saveGetValueIc(o);
	  };
	  o.saveEnable = function(o){
	    this.saveEnableIc(o);
	  };
	  o.saveDisable = function(o){
	    this.saveDisableIc(o);
	  };
	  o.initSaveJqIc = function(){
	    var _this;
	    if (this.debug) {
	      console.log('Save!');
	    }
	    _this = this;
	    $('#content__save').click(function(){
	      _this.saveById();
	    });
	    $('#content__save__auto').iCheck({
	      checkboxClass: 'icheckbox_minimal-green'
	    });
	    $('#content__save__auto').iCheck('check');
	  };
	  o.saveByIdJs = function(o){
	    var props;
	    if (this.debug) {
	      console.log('Save:By:Id');
	    }
	    if (this.id.main) {
	      props = {
	        id: this.id.main,
	        attrs: {
	          input_notes: JSON.stringify(this.inputFindAll({
	            entity: 'notes'
	          }))
	        }
	      };
	      return this.dataMainUpdate(props);
	    }
	  };
	  o.saveIsAutoJq = function(o){
	    if (this.debug) {
	      console.log('Save:Is:Auto');
	    }
	    return $('#content__save__auto').prop('checked');
	  };
	  o.saveSetValueIc = function(o){
	    var value;
	    if (this.debug) {
	      console.log('Save:Set:Value');
	    }
	    value = o.value === true ? 'check' : 'uncheck';
	    $('#content__save__auto').iCheck(value);
	  };
	  o.saveGetValueIc = function(o){
	    if (this.debug) {
	      console.log('Save:Get:Value');
	    }
	    return $('#content__save__auto').prop('checked');
	  };
	  o.saveEnableIc = function(o){
	    if (this.debug) {
	      console.log('Save:Enable');
	    }
	    $('#content__save__auto').iCheck('enable');
	  };
	  o.saveDisableIc = function(o){
	    if (this.debug) {
	      console.log('Save:Disable');
	    }
	    $('#content__save__auto').iCheck('disable');
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\save.ls.map


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initLoad = function(){
	    this.initLoadJqIc();
	  };
	  o.loadById = function(o){
	    this.loadByIdJs(o);
	  };
	  o.loadByIdAuto = function(o){
	    this.loadByIdAutoJs(o);
	  };
	  o.loadReset = function(o){
	    this.loadResetJs(o);
	  };
	  o.loadIsAuto = function(o){
	    return this.loadIsAutoJq(o);
	  };
	  o.loadSetValue = function(o){
	    this.loadSetValueIc(o);
	  };
	  o.loadGetValue = function(o){
	    return this.loadGetValueIc(o);
	  };
	  o.loadEnable = function(o){
	    this.loadEnableIc(o);
	  };
	  o.loadDisable = function(o){
	    this.loadDisableIc(o);
	  };
	  o.initLoadJqIc = function(){
	    var _this;
	    if (this.debug) {
	      console.log('Load!');
	    }
	    _this = this;
	    $('#content__load').click(function(){
	      _this.loadById();
	    });
	    $('#content__load__auto').iCheck({
	      checkboxClass: 'icheckbox_minimal-orange'
	    });
	    $('#content__load__auto').on('ifChanged', function(){
	      var checked;
	      checked = $('#content__load__auto').prop('checked');
	      _this.datas.main.autoload(_this, checked);
	    });
	  };
	  o.loadByIdJs = function(o){
	    var _this, props;
	    if (this.debug) {
	      console.log('Load:By:Id');
	    }
	    _this = this;
	    if (this.id.main) {
	      props = {
	        id: this.id.main,
	        cb: function(attrs){
	          var inputs;
	          inputs = {
	            notes: JSON.parse(attrs.input_notes)
	          };
	          _this.inputLoad({
	            inputs: inputs
	          });
	        }
	      };
	      return this.dataMainFind(props);
	    }
	  };
	  o.loadByIdAutoJs = function(o){
	    var _this, props;
	    if (this.debug) {
	      console.log('Load:By:Id:Auto');
	    }
	    _this = this;
	    if (this.id.main) {
	      props = {
	        id: this.id.main,
	        cb: function(attrs){
	          var inputs;
	          inputs = {
	            notes: JSON.parse(attrs.input_notes)
	          };
	          _this.inputLoadAuto({
	            inputs: inputs
	          });
	        }
	      };
	      this.dataMainFind(props);
	    }
	  };
	  o.loadResetJs = function(o){
	    if (this.debug) {
	      console.log('Load:Reset');
	    }
	    this.inputReset({
	      entity: 'notes'
	    });
	  };
	  o.loadIsAutoJq = function(o){
	    if (this.debug) {
	      console.log('Load:Is:Auto');
	    }
	    return $('#content__load__auto').prop('checked');
	  };
	  o.loadSetValueIc = function(o){
	    var value;
	    if (this.debug) {
	      console.log('Load:Set:Value');
	    }
	    value = o.value === true ? 'check' : 'uncheck';
	    $('#content__load__auto').iCheck(value);
	  };
	  o.loadGetValueIc = function(o){
	    if (this.debug) {
	      console.log('Load:Get:Value');
	    }
	    return $('#content__load__auto').prop('checked');
	  };
	  o.loadEnableIc = function(o){
	    if (this.debug) {
	      console.log('Load:Enable');
	    }
	    $('#content__load__auto').iCheck('enable');
	  };
	  o.loadDisableIc = function(o){
	    if (this.debug) {
	      console.log('Load:Disable');
	    }
	    $('#content__load__auto').iCheck('disable');
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\load.ls.map


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initScript = function(){
	    this.initScriptJs();
	  };
	  o.scriptIsExtsLoaded = function(o){
	    return this.scriptIsExtsLoadedJs(o);
	  };
	  o.scriptLoadExts = function(o){
	    this.scriptLoadExtsJs(o);
	  };
	  o.scriptGetIdFromExt = function(o){
	    return this.scriptGetIdFromExtJs(o);
	  };
	  o.initScriptJs = function(){
	    if (this.debug) {
	      console.log('Script!');
	    }
	  };
	  o.scriptIsExtsLoadedJs = function(o){
	    var all, i$, ref$, len$;
	    if (this.debug) {
	      console.log('Script:Is:Exts:Loaded');
	    }
	    all = true;
	    for (i$ = 0, len$ = (ref$ = o.exts).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    return all;
	    function fn$(i, el){
	      if (!this.scripts[el]) {
	        all = false;
	      }
	    }
	  };
	  o.scriptLoadExtsJs = function(o){
	    var i$, ref$, len$;
	    if (this.debug) {
	      console.log('Script:Load:Exts');
	    }
	    for (i$ = 0, len$ = (ref$ = o.exts).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(i, el){
	      var id;
	      if (!this.scripts[el]) {
	        id = this.scriptGetIdFromExt({
	          ext: el
	        });
	        this.optionRunLoadScript({
	          id: id,
	          cb: o.cb
	        });
	      }
	    }
	  };
	  o.scriptGetIdFromExtJs = function(o){
	    var ids, id;
	    if (this.debug) {
	      console.log('Script:Get:Id:From:Ext');
	    }
	    ids = {
	      'md': 'md',
	      '++.md': 'md',
	      'remark.md': 'md',
	      'jade': 'jade',
	      'less': 'less',
	      'sass': 'sass',
	      'styl': 'styl',
	      'ls': 'ls',
	      'jsx': 'jsx',
	      'babel.js': 'babel',
	      'ts': 'ts',
	      'cs': 'cs',
	      'json': 'json',
	      'yaml': 'yaml',
	      'xml': 'xml',
	      'sql': 'sql',
	      'mongo.js': 'mongo',
	      'abc': 'abc'
	    };
	    id = 'content__option__run__' + ids[o.ext];
	    return id;
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\script.ls.map


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initInclude = function(){
	    this.initIncludeJs();
	  };
	  o.includeInline = function(o){
	    return this.includeInlineDmDpXz(o);
	  };
	  o.includeInlineMultiple = function(o){
	    return this.includeInlineMultipleDmDpXzJn(o);
	  };
	  o.initIncludeJs = function(){
	    if (this.debug) {
	      console.log('Include!');
	    }
	  };
	  o.includeInlineDmDpXz = function(o){
	    var dom, includes, i$, len$, content;
	    if (this.debug) {
	      console.log('Include:Inline');
	    }
	    dom = new DOMParser().parseFromString(o.content, 'text/html');
	    includes = dom.querySelectorAll(o.tag + '[data-include]');
	    for (i$ = 0, len$ = includes.length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, includes[i$]));
	    }
	    content = entities.decodeHTML(new XMLSerializer().serializeToString(dom));
	    return content;
	    function fn$(i, el){
	      var attrs, name, content;
	      attrs = el.attributes;
	      name = attrs['data-include'].nodeValue;
	      content = this.run({
	        file: name,
	        type: 'compile',
	        ext: o.ext || null
	      });
	      el.innerHTML = content;
	    }
	  };
	  o.includeInlineMultipleDmDpXzJn = function(o){
	    var dom, includes, i$, len$, content;
	    if (this.debug) {
	      console.log('Include:Inline:Multiple');
	    }
	    dom = new DOMParser().parseFromString(o.content, 'text/html');
	    includes = dom.querySelectorAll(o.tag + '[data-includes]');
	    for (i$ = 0, len$ = includes.length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, includes[i$]));
	    }
	    content = entities.decodeHTML(new XMLSerializer().serializeToString(dom));
	    return content;
	    function fn$(i, el){
	      var attrs, names, last, content;
	      attrs = el.attributes;
	      names = attrs['data-includes'].nodeValue.replace(/\'/g, "\"");
	      '\'';
	      names = JSON.parse(names);
	      last = names[names.length - 1];
	      content = this.runConcatFiles({
	        files: names
	      });
	      content = this.run({
	        src: content,
	        type: 'compile',
	        file: last
	      });
	      el.innerHTML = content;
	    }
	  };
	  o.includeInlineJs = function(o){};
	  o.includeInlineMultipleJs = function(o){};
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\main\include.ls.map


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initAdmin = function(){
	    this.initAdminJs();
	  };
	  o.initAdminJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Admin!'
	    });
	    __webpack_require__(84)(Component);
	    __webpack_require__(86)(Component);
	    __webpack_require__(87)(Component);
	    __webpack_require__(88)(Component);
	    __webpack_require__(89)(Component);
	    __webpack_require__(91)(Component);
	    this.initValue();
	    this.initRoute();
	    this.initSrc();
	    this.initSample();
	    this.initTree();
	    this.initList();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\admin.ls.map


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initValue = function(){
	    this.initValueJs();
	  };
	  o.initValueJs = function(){
	    if (this.debug) {
	      console.log('Value!');
	    }
	    __webpack_require__(85)(Component);
	    this.value = this.valueMainDataMakeContainer();
	    this.valueMainDataMakeRefreshable();
	    this.valueMainDataMakeDestroyable();
	    this.valueMainDataRefresh();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\admin\value.ls.map


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initValue = function(){
	    this.initValueJs();
	  };
	  o.valueMainDataMakeContainer = function(o){
	    return this.valueMainDataMakeContainerSz(o);
	  };
	  o.valueMainDataMakeRefreshable = function(o){
	    this.valueMainDataMakeRefreshableJq(o);
	  };
	  o.valueMainDataMakeDestroyable = function(o){
	    this.valueMainDataMakeDestroyableJq(o);
	  };
	  o.valueMainDataMakeCreatable = function(o){
	    this.valueMainDataMakeCreatableJq(o);
	  };
	  o.valueMainDataOnChange = function(o){
	    this.valueMainDataOnChangeJs(o);
	  };
	  o.valueMainDataOnCreate = function(o){
	    return this.valueMainDataOnCreateJs(o);
	  };
	  o.valueMainDataReset = function(o){
	    this.valueMainDataResetSzJq(o);
	  };
	  o.valueMainDataRefresh = function(o){
	    this.valueMainDataRefreshSz(o);
	  };
	  o.valueMainDataCreate = function(o){
	    this.valueMainDataCreateSz(o);
	  };
	  o.valueMainDataDestroy = function(o){
	    this.valueMainDataDestroySz(o);
	  };
	  o.valueMainDataSetValue = function(o){
	    this.valueMainDataSetValueSz(o);
	  };
	  o.valueMainDataGetValue = function(o){
	    return this.valueMainDataGetValueSz(o);
	  };
	  o.valueMainDataSetHeaders = function(o){
	    this.valueMainDataSetHeadersJq(o);
	  };
	  o.valueMainDataRenderValue = function(o){
	    return this.valueMainDataRenderValueJs(o);
	  };
	  o.valueMainDataRenderOption = function(o){
	    return this.valueMainDataRenderOptionJs(o);
	  };
	  o.initValueMainDataJs = function(){
	    if (this.debug) {
	      console.log('Value:Main:Data!');
	    }
	  };
	  o.valueMainDataMakeContainerSz = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('Value:Main:Data:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        valueField: 'id',
	        labelField: 'tree',
	        sortField: 'tree',
	        searchField: ['tree'],
	        options: [],
	        sortDirection: 'desc',
	        maxItems: 1,
	        onChange: function(value){
	          _this.valueMainDataOnChange({
	            value: value
	          });
	        },
	        create: function(value){
	          return _this.valueMainDataOnCreate({
	            value: value
	          });
	        },
	        render: {
	          item: function(item, escape){
	            return _this.valueMainDataRenderValue({
	              item: item
	            });
	          },
	          option: function(item, escape){
	            return _this.valueMainDataRenderOption({
	              item: item
	            });
	          }
	        }
	      };
	    };
	    return $('#content__value').selectize(config())[0].selectize;
	  };
	  o.valueMainDataMakeRefreshableJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Value:Main:Data:Make:Refreshable');
	    }
	    _this = this;
	    $('#content__value__refresh').click(function(){
	      var cb;
	      cb = function(){};
	      _this.valueMainDataRefresh({
	        cb: cb
	      });
	    });
	  };
	  o.valueMainDataMakeDestroyableJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Value:Main:Data:Make:Destroyable');
	    }
	    _this = this;
	    $('#content__value__destroy').click(function(){
	      var value;
	      value = _this.valueMainDataGetValue();
	      _this.valueMainDataDestroy({
	        value: value
	      });
	    });
	  };
	  o.valueMainDataOnChangeJs = function(o){
	    if (this.debug) {
	      console.log('Value:Main:Data:On:Change');
	    }
	    if (o.value !== '') {
	      this.routeSetById({
	        id: o.value
	      });
	    }
	  };
	  o.valueMainDataOnCreateJs = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('Value:Main:Data:On:Create');
	    }
	    _this = this;
	    cb = function(attrs){
	      _this.valueMainDataCreate({
	        option: {
	          id: attrs.id,
	          tree: attrs.tree
	        }
	      });
	      _this.valueMainDataSetValue({
	        value: attrs.id
	      });
	      _this.valueMainDataOnChange({
	        value: attrs.id
	      });
	    };
	    this.dataMainCreate({
	      attrs: {
	        tree: o.value
	      },
	      cb: cb
	    });
	    return null;
	  };
	  o.valueMainDataResetSzJq = function(o){
	    if (this.debug) {
	      console.log('Value:Main:Data:Reset');
	    }
	    this.value.destroy();
	    this.value = null;
	  };
	  o.valueMainDataRefreshSz = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('Value:Main:Data:Refresh');
	    }
	    _this = this;
	    this.value.clearOptions();
	    cb = function(list){
	      var i$, len$, i, el, option;
	      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	        i = i$;
	        el = list[i$];
	        option = {
	          id: el.id,
	          tree: el.tree || ''
	        };
	        _this.valueMainDataCreate({
	          option: option
	        });
	      }
	    };
	    this.dataMainFindAll({
	      cb: cb
	    });
	  };
	  o.valueMainDataCreateSz = function(o){
	    if (this.debug) {
	      console.log('Value:Main:Data:Create');
	    }
	    this.value.addOption(o.option);
	  };
	  o.valueMainDataDestroySz = function(o){
	    if (this.debug) {
	      console.log('Value:Main:Data:Destroy');
	    }
	    this.value.removeOption(o.value);
	    this.dataMainDestroy({
	      id: o.value
	    });
	  };
	  o.valueMainDataSetValueSz = function(o){
	    if (this.debug) {
	      console.log('Value:Main:Data:Set:Value');
	    }
	    this.value.setValue(o.value, function(){});
	  };
	  o.valueMainDataGetValueSz = function(o){
	    if (this.debug) {
	      console.log('Value:Main:Data:Get:Value');
	    }
	    return this.value.getValue();
	  };
	  o.valueMainDataRenderValueJs = function(o){
	    if (this.debug) {
	      console.log('Value:Main:Data:Render:Value');
	    }
	    return '<div>' + '<span>' + (o.item.tree || '') + '</span> ' + '</div>';
	  };
	  o.valueMainDataRenderOptionJs = function(o){
	    if (this.debug) {
	      console.log('Value:Main:Data:Render:Option');
	    }
	    return '<div>' + '<span>' + (o.item.tree || '') + '</span> ' + '</div>';
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\admin\value\main\data.ls.map


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initRoute = function(){
	    this.initRouteJs();
	  };
	  o.routeMake = function(o){
	    this.routeMakeDr(o);
	  };
	  o.routeSet = function(o){
	    this.routeSetDr(o);
	  };
	  o.routeSetById = function(o){
	    this.routeSetByIdDr(o);
	  };
	  o.routeSetHeaders = function(o){
	    this.routeSetHeadersJq(o);
	  };
	  o.routeClear = function(o){
	    this.routeClearDr(o);
	  };
	  o.routeOnId = function(o){
	    this.routeOnIdJs(o);
	  };
	  o.routeOnTree = function(o){
	    this.routeOnTreeJs(o);
	  };
	  o.routeOnDataCreate = function(o){
	    this.routeOnDataCreateJs(o);
	  };
	  o.routeOnDataList = function(o){
	    this.routeOnDataListJs(o);
	  };
	  o.routeOnDataDestroy = function(o){
	    this.routeOnDataDestroyJs(o);
	  };
	  o.routeOnTree = function(o){
	    this.routeOnTreeJs(o);
	  };
	  o.initRouteJs = function(){
	    if (this.debug) {
	      console.log('Route!');
	    }
	    this.routeMake();
	  };
	  o.routeMakeDr = function(o){
	    var _this, routes;
	    if (this.debug) {
	      console.log('Route:Make');
	    }
	    _this = this;
	    routes = {
	      '/id/:id': function(id){
	        _this.routeOnId({
	          id: id
	        });
	      },
	      '/tree/?((w|.)*)': function(tree){
	        _this.routeOnTree({
	          tree: tree
	        });
	      }
	    };
	    this.router = Router(routes);
	    this.router.init();
	  };
	  o.routeSetDr = function(o){
	    if (this.debug) {
	      console.log('Route:Set');
	    }
	    this.router.setRoute(o.route + '');
	  };
	  o.routeSetByIdDr = function(o){
	    if (this.debug) {
	      console.log('Route:Set:By:Id');
	    }
	    this.router.setRoute('id/' + o.id);
	  };
	  o.routeSetHeadersJq = function(o){
	    if (this.debug) {
	      console.log('Route:Set:Headers');
	    }
	    $('#header__id').html(this.id.main);
	    $('#header__tree').html(this.tree.main);
	  };
	  o.routeClearDr = function(o){
	    if (this.debug) {
	      console.log('Route:Clear');
	    }
	    this.id.main = null;
	    this.loadReset();
	    this.router.setRoute('');
	  };
	  o.routeOnIdJs = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('Route:On:Id');
	    }
	    _this = this;
	    cb = function(attrs){
	      var e;
	      if (attrs.id) {
	        _this.id.main = attrs.id;
	        _this.tree.main = attrs.tree || '';
	        _this.routeSetHeaders();
	        _this.loadReset();
	        _this.loadById();
	        try {
	          _this.valueMainDataSetValue({
	            value: attrs.id
	          });
	        } catch (e$) {
	          e = e$;
	          console.log('Value:Main:Data error', e);
	        }
	      }
	    };
	    this.child = null;
	    this.loadSetValue({
	      value: false
	    });
	    this.dataMainFind({
	      id: o.id,
	      cb: cb
	    });
	  };
	  o.routeOnTreeJs = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('Route:On:Tree');
	    }
	    _this = this;
	    cb = function(attrs){
	      if (attrs.tree) {
	        _this.id.main = attrs.id;
	        _this.tree.main = attrs.tree || '';
	        _this.routeSetHeaders();
	        _this.loadReset();
	        _this.loadById();
	      }
	    };
	    this.dataMainFindByAttr({
	      attr: 'tree',
	      value: o.tree,
	      cb: cb
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\admin\route.ls.map


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initSrc = function(){
	    this.initSrcJs();
	  };
	  o.srcMakeContainer = function(o){
	    return this.srcMakeContainerSz(o);
	  };
	  o.srcSetValue = function(o){
	    this.srcSetValueSz(o);
	  };
	  o.srcGetValue = function(o){
	    return this.srcGetValueSz(o);
	  };
	  o.initSrcJs = function(){
	    if (this.debug) {
	      console.log('Src!');
	    }
	    this.src = this.srcMakeContainer(this.props.admin.src);
	    this.srcSetValue({
	      value: this.props.admin.src.options[0].value
	    });
	  };
	  o.srcMakeContainerSz = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('Src:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){},
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.srcSetValueSz = function(o){
	    if (this.debug) {
	      console.log('Src:Set:Value');
	    }
	    this.src.setValue(o.value, function(){});
	  };
	  o.srcGetValueSz = function(o){
	    if (this.debug) {
	      console.log('Src:Get:Value');
	    }
	    return this.src.getValue();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\admin\src.ls.map


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initSample = function(){
	    this.initSampleJs();
	  };
	  o.sampleMakeContainer = function(o){
	    return this.sampleMakeContainerSz(o);
	  };
	  o.sampleSetValue = function(o){
	    this.sampleSetValueSz(o);
	  };
	  o.sampleGetValue = function(o){
	    return this.sampleGetValueSz(o);
	  };
	  o.initSampleJs = function(){
	    var list, tree;
	    if (this.debug) {
	      console.log('Sample!');
	    }
	    list = {
	      id: this.props.admin.sample.ids[0],
	      options: this.props.admin.sample.options
	    };
	    tree = {
	      id: this.props.admin.sample.ids[1],
	      options: this.props.admin.sample.options
	    };
	    this.sample.list = this.sampleMakeContainer(list);
	    this.sample.tree = this.sampleMakeContainer(tree);
	    this.sampleSetValue({
	      value: 'md'
	    });
	  };
	  o.sampleMakeContainerSz = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('Sample:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          _this.sampleSetValue({
	            value: value
	          });
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.sampleSetValueSz = function(o){
	    if (this.debug) {
	      console.log('Sample:Set:Value');
	    }
	    this.sample.list.setValue(o.value, function(){});
	    this.sample.tree.setValue(o.value, function(){});
	  };
	  o.sampleGetValueSz = function(o){
	    if (this.debug) {
	      console.log('Sample:Get:Value');
	    }
	    return this.sample.list.getValue();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\admin\sample.ls.map


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initTree = function(){
	    this.initTreeJs();
	  };
	  o.initTreeJs = function(){
	    if (this.debug) {
	      console.log('Tree!');
	    }
	    __webpack_require__(90)(Component);
	    this.treeMainDataMakeContainer(this.props.admin.tree['default']);
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\admin\tree.ls.map


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.treeMainDataMakeContainer = function(o){
	    this.treeMainDataMakeContainerJt(o);
	  };
	  o.treeMainDataMakeEventable = function(o){
	    this.treeMainDataMakeEventableJqJt(o);
	  };
	  o.treeMainDataMakeSearchable = function(o){
	    this.treeMainDataMakeSearchableJq(o);
	  };
	  o.treeMainDataMakeRefreshable = function(o){
	    this.treeMainDataMakeRefreshableJq(o);
	  };
	  o.treeMainDataRefresh = function(o){
	    this.treeMainDataRefreshJq(o);
	  };
	  o.treeMainDataGetMenuFunc = function(o){
	    return this.treeMainDataGetMenuFuncJqJt(o);
	  };
	  o.treeMainDataMakeContainerJt = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('Tree:Main:Data:Make:Container');
	    }
	    _this = this;
	    config = {
	      core: {
	        check_callback: true,
	        strings: {
	          'New node': 'new_node'
	        }
	      },
	      plugins: ['search', 'contextmenu', 'sort'],
	      contextmenu: {
	        items: this.treeMainDataGetMenuFunc()
	      }
	    };
	    $('#content__tree').jstree(config);
	    if (o.eventable) {
	      _this[o.eventable](o);
	    }
	    if (o.searchable) {
	      _this[o.searchable](o);
	    }
	    if (o.refreshable) {
	      _this[o.refreshable](o);
	    }
	    return this.treeMainDataRefresh();
	  };
	  o.treeMainDataMakeEventableJqJt = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Tree:Main:Data:Make:Eventable');
	    }
	    _this = this;
	    $('#content__tree').on('select_node.jstree', function(e, elem){
	      var id, cb;
	      id = elem.node.li_attr.data_id;
	      cb = function(item){
	        $('#content__tree__node__id').val(item.id || '');
	        $('#content__tree__node__date').val(item.date || '');
	        $('#content__tree__node__labels').val(item.labels || '');
	        $('#content__tree__node__status').val(item.status || '');
	        $('#content__tree__node__title').val(item.title || '');
	        $('#content__tree__node__tree').val(item.tree || '');
	        $('#content__tree__node__date_start').val(item.date_start || '');
	        $('#content__tree__node__date_end').val(item.date_end || '');
	      };
	      _this.dataMainFind({
	        id: id,
	        cb: cb
	      });
	      return _this.routeSetById({
	        id: id
	      });
	    });
	    return $('#content__tree').on('rename_node.jstree', function(e, elem){
	      var tree, parent_id, new_id, id, data_id, data, attrs, cb;
	      tree = $('#content__tree').jstree(true);
	      parent_id = elem.node.parent;
	      new_id = elem.text;
	      id = parent_id + '/' + new_id;
	      data_id = elem.node.li_attr.data_id;
	      data = parent_id === '#'
	        ? new_id
	        : parent_id.substr(14, parent_id.length) + '/' + new_id;
	      if (elem.node.data === null) {
	        tree.set_id(elem.node, id);
	        elem.node.data = data;
	        attrs = {
	          tree: data
	        };
	        cb = function(id){
	          elem.node.li_attr.data_id = id;
	          _this.treeMainDataRefresh();
	        };
	        return _this.dataMainCreate({
	          attrs: attrs,
	          cb: cb
	        });
	      } else {
	        attrs = {
	          tree: data
	        };
	        cb = function(){
	          var children_parent_old, i$, ref$, len$;
	          children_parent_old = elem.node.data;
	          for (i$ = 0, len$ = (ref$ = elem.node.children_d).length; i$ < len$; ++i$) {
	            (fn$.call(this, i$, ref$[i$]));
	          }
	          _this.treeMainDataRefresh();
	          function fn$(i, el){
	            var child, child_id, child_data, attrs;
	            child = tree.get_node('#' + el);
	            child_id = child.li_attr.data_id;
	            child_data = child.data;
	            attrs = {
	              tree: child_data.replace(children_parent_old, data)
	            };
	            _this.dataMainUpdate({
	              id: child_id,
	              attrs: attrs,
	              cb: function(){}
	            });
	          }
	        };
	        return _this.dataMainUpdate({
	          id: data_id,
	          attrs: attrs,
	          cb: cb
	        });
	      }
	    });
	  };
	  o.treeMainDataMakeSearchableJq = function(o){
	    var searchTimeout;
	    if (this.debug) {
	      console.log('Tree:Main:Data:Make:Searchable');
	    }
	    searchTimeout = false;
	    return $('#content__tree__search__tree').keyup(function(){
	      if (searchTimeout) {
	        clearTimeout(searchTimeout);
	      }
	      searchTimeout = setTimeout(function(){
	        $('#content__tree').jstree(true).search($('#content__tree__search__tree').val());
	      }, 250);
	    });
	  };
	  o.treeMainDataMakeRefreshableJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Tree:Main:Data:Make:Refreshable');
	    }
	    _this = this;
	    return $('#content__tree__refresh').click(function(){
	      _this.treeMainDataRefresh();
	    });
	  };
	  o.treeMainDataRefreshJq = function(o){
	    var cb;
	    if (this.debug) {
	      console.log('Tree:Main:Data:Refresh');
	    }
	    $('#content__tree').jstree('deselect_all');
	    cb = function(data){
	      var _data, i$, len$;
	      _data = [];
	      for (i$ = 0, len$ = data.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, data[i$]));
	      }
	      $('#content__tree').jstree(true).settings.core.data = _data;
	      $('#content__tree').jstree(true).refresh();
	      function fn$(i, item){
	        var _item, _text_index;
	        _item = {};
	        if (item.tree) {
	          _text_index = item.tree.lastIndexOf('/');
	          _item.id = 'content__tree_' + item.tree;
	          _item.data = item.tree;
	          _item.text = _text_index > 0
	            ? item.tree.substr(_text_index + 1, item.tree.length)
	            : item.tree;
	          _item.li_attr = {
	            data_id: item.id
	          };
	          _item.parent = _text_index > 0 ? 'content__tree_' + item.tree.substr(0, _text_index) : '#';
	          _data.push(_item);
	        }
	      }
	    };
	    this.dataMainFindAll({
	      cb: cb
	    });
	  };
	  o.treeMainDataGetMenuFuncJqJt = function(o){
	    var _this, menu;
	    if (this.debug) {
	      console.log('Tree:Main:Data:Get:Menu:Func');
	    }
	    _this = this;
	    menu = function(node){
	      var tree, items;
	      tree = $('#content__tree').jstree(true);
	      return items = {
	        create: {
	          separator_before: false,
	          separator_after: false,
	          label: 'Create Child',
	          action: function(obj){
	            var _node;
	            _node = tree.create_node(node);
	            return tree.edit(_node);
	          }
	        },
	        sibling: {
	          separator_before: false,
	          separator_after: false,
	          label: 'Create Sibling',
	          action: function(obj){
	            var _node;
	            _node = tree.create_node(node.parent, {});
	            return tree.edit(_node);
	          }
	        },
	        rename: {
	          separator_before: false,
	          separator_after: false,
	          label: 'Rename',
	          action: function(obj){
	            return tree.edit(node);
	          }
	        },
	        remove: {
	          separator_before: false,
	          separator_after: false,
	          label: 'Remove',
	          action: function(obj){
	            var children, i$, ref$, len$;
	            children = [];
	            children.push(node.li_attr.data_id);
	            for (i$ = 0, len$ = (ref$ = node.children_d).length; i$ < len$; ++i$) {
	              (fn$.call(this, i$, ref$[i$]));
	            }
	            for (i$ = 0, len$ = children.length; i$ < len$; ++i$) {
	              (fn1$.call(this, i$, children[i$]));
	            }
	            return tree.delete_node(node);
	            function fn$(i, el){
	              var child, child_id;
	              child = tree.get_node('#' + el);
	              child_id = child.li_attr.data_id;
	              children.push(child_id);
	            }
	            function fn1$(i, el){
	              var cb;
	              if (i === children.length - 1) {
	                cb = function(){
	                  _this.treeMainDataRefresh();
	                };
	              } else {
	                cb = function(){};
	              }
	              _this.dataMainDestroy({
	                id: el,
	                cb: cb
	              });
	            }
	          }
	        }
	      };
	    };
	    return menu;
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\admin\tree\main\data.ls.map


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initList = function(){
	    this.initListJs();
	  };
	  o.initListJs = function(){
	    if (this.debug) {
	      console.log('List!');
	    }
	    __webpack_require__(92)(Component);
	    this.listMainDataMakeContainer(this.props.admin.list['default']);
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\admin\list.ls.map


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.listMainDataMakeContainer = function(o){
	    this.listMainDataMakeContainerDt(o);
	  };
	  o.listMainDataMakeHolder = function(o){
	    this.listMainDataMakeHolderJq(o);
	  };
	  o.listMainDataFormatRows = function(o){
	    return this.listMainDataFormatRowsJs(o);
	  };
	  o.listMainDataFormatRow = function(o){
	    return this.listMainDataFormatRowJs(o);
	  };
	  o.listMainDataGetColumns = function(o){
	    return this.listMainDataGetColumnsJs(o);
	  };
	  o.listMainDataClearInputs = function(o){
	    this.listMainDataClearInputsJq(o);
	  };
	  o.listMainDataRefresh = function(o){
	    this.listMainDataRefreshJs(o);
	  };
	  o.listMainDataMakeCreatable = function(o){
	    this.listMainDataMakeCreatableJqMm(o);
	  };
	  o.listMainDataMakeDestroyable = function(o){
	    this.listMainDataMakeDestroyableJq(o);
	  };
	  o.listMainDataMakeSearchable = function(o){
	    this.listMainDataMakeSearchableJq(o);
	  };
	  o.listMainDataMakeRefreshable = function(o){
	    this.listMainDataMakeRefreshableJq(o);
	  };
	  o.listMainDataMakeEditable = function(o){
	    this.listMainDataMakeEditableJq(o);
	  };
	  o.listMainDataMakeCheckallable = function(o){
	    this.listMainDataMakeCheckallableJq(o);
	  };
	  o.listMainDataMakeContainerDt = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('List:Main:Data:Make:Container');
	    }
	    _this = this;
	    cb = function(list){
	      var table;
	      table = {
	        data: _this.listMainDataFormatRows({
	          list: list
	        }),
	        columns: _this.listMainDataGetColumns(),
	        order: [[1, 'desc']]
	      };
	      _this.list = $('#' + o.id).DataTable(table);
	    };
	    if (o.creatable) {
	      _this[o.creatable](o);
	    }
	    if (o.destroyable) {
	      _this[o.destroyable](o);
	    }
	    if (o.searchable) {
	      _this[o.searchable](o);
	    }
	    if (o.refreshable) {
	      _this[o.refreshable](o);
	    }
	    if (o.editable) {
	      _this[o.editable](o);
	    }
	    if (o.checkallable) {
	      _this[o.checkallable](o);
	    }
	    this.dataMainFindAll({
	      cb: cb
	    });
	  };
	  o.listMainDataMakeHolderJq = function(o){
	    $('#content__list_wrapper').html('<table id="content__list" class="table table-bordered table-hover"></table>');
	  };
	  o.listMainDataFormatRowsJs = function(o){
	    var rows, i$, ref$, len$;
	    if (this.debug) {
	      console.log('List:Main:Data:Format:Rows');
	    }
	    rows = [];
	    for (i$ = 0, len$ = (ref$ = o.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    return rows;
	    function fn$(i, item){
	      var row;
	      row = [
	        '<input type="checkbox" data-id="' + item.id + '">', '<a onclick="app.component.routeSetById({id: \'' + item.id + '\'})">' + item.id + '</a>', this.listMainDataFormatRow({
	          id: item.id,
	          val: item.title || '',
	          attr: 'title'
	        }), this.listMainDataFormatRow({
	          id: item.id,
	          val: item.tree || '',
	          attr: 'tree'
	        }), this.listMainDataFormatRow({
	          id: item.id,
	          val: item.labels || '',
	          attr: 'labels'
	        }), this.listMainDataFormatRow({
	          id: item.id,
	          val: item.status || '',
	          attr: 'status'
	        }), this.listMainDataFormatRow({
	          id: item.id,
	          val: item.date || '',
	          attr: 'date'
	        }), this.listMainDataFormatRow({
	          id: item.id,
	          val: item.date_start || '',
	          attr: 'date_start'
	        }), this.listMainDataFormatRow({
	          id: item.id,
	          val: item.date_end || '',
	          attr: 'date_end'
	        })
	      ];
	      rows.push(row);
	    }
	  };
	  o.listMainDataFormatRowJs = function(o){
	    if (this.debug) {
	      console.log('List:Main:Data:Format:Row');
	    }
	    return '<span data-id="' + o.id + '" data-attr="' + o.attr + '">' + o.val + '</span>';
	  };
	  o.listMainDataGetColumnsJs = function(o){
	    var columns;
	    if (this.debug) {
	      console.log('List:Main:Data:Get:Columns');
	    }
	    columns = [
	      {
	        title: '<input type="checkbox">',
	        width: '5%',
	        'orderable': false
	      }, {
	        title: '#',
	        width: '5%'
	      }, {
	        title: 'Title',
	        width: '20%'
	      }, {
	        title: 'Tree',
	        width: '10%'
	      }, {
	        title: 'Labels',
	        width: '10%'
	      }, {
	        title: 'Status',
	        width: '5%'
	      }, {
	        title: 'Date',
	        width: '5%'
	      }, {
	        title: 'Date Start',
	        width: '5%'
	      }, {
	        title: 'Date End',
	        width: '5%'
	      }
	    ];
	    return columns;
	  };
	  o.listMainDataClearInputsJq = function(o){
	    if (this.debug) {
	      console.log('List:Main:Data:Clear:Inputs');
	    }
	    $('#content__list input[type="text"]').each(function(){
	      $(this).val('');
	    });
	  };
	  o.listMainDataRefreshJs = function(o){
	    if (this.debug) {
	      console.log('List:Refresh');
	    }
	    this.listMainDataClearInputs(o);
	    this.listMainDataMakeHolder(o);
	    this.listMainDataMakeContainer({
	      id: 'content__list',
	      name: 'index',
	      editable: 'listMainDataMakeEditable',
	      checkallable: 'listMainDataMakeCheckallable'
	    });
	  };
	  o.listMainDataMakeCreatableJqMm = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('List:Main:Data:Make:Creatable');
	    }
	    _this = this;
	    $('#content__list__create').click(function(){
	      var attrs, cb;
	      attrs = {
	        date: moment().format('DD/MM/YYYY')
	      };
	      cb = function(){
	        _this.listMainDataRefresh();
	      };
	      _this.dataMainCreate({
	        attrs: attrs,
	        cb: cb
	      });
	    });
	  };
	  o.listMainDataMakeDestroyableJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('List:Main:Data:Make:Destroyable');
	    }
	    _this = this;
	    $('#content__list__destroy').click(function(){
	      var ids, i$, len$;
	      ids = [];
	      $('#content__list tbody tr input:checked').each(function(key, val){
	        var id;
	        id = $(this).attr('data-id');
	        ids.push(id);
	      });
	      for (i$ = 0, len$ = ids.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, ids[i$]));
	      }
	      function fn$(i, el){
	        var cb;
	        console.log('A', i, ids.length);
	        if (i === ids.length - 1) {
	          cb = function(){
	            _this.routeClear();
	            _this.listMainDataRefresh();
	          };
	        } else {
	          cb = function(){};
	        }
	        _this.dataMainDestroy({
	          id: el,
	          cb: cb
	        });
	      }
	    });
	  };
	  o.listMainDataMakeEditableJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('List:Main:Data:Make:Editable');
	    }
	    _this = this;
	    $('#content__list').on('click', 'tbody tr :not(:first-child):not(:nth-child(2))', function(e){
	      var td, val, id, attr;
	      td = $(this);
	      val = td.find('span').html();
	      id = td.find('span').attr('data-id');
	      attr = td.find('span').attr('data-attr');
	      $(td).find('span').editable({
	        type: 'textarea',
	        success: function(response, val){
	          var attrs, cb;
	          attrs = {};
	          attrs[attr] = val;
	          cb = function(){
	            _this.listMainDataRefresh();
	          };
	          _this.dataMainUpdate({
	            id: id,
	            attrs: attrs,
	            cb: cb
	          });
	        }
	      });
	    });
	  };
	  o.listMainDataMakeCheckallableJq = function(o){
	    if (this.debug) {
	      console.log('List:Main:Data:Make:Checkallable');
	    }
	    $('#content__list').on('change', 'thead tr th input[type="checkbox"]:first-child', function(){
	      if ($(this).is(':checked')) {
	        $('#content__list tbody tr input:first-child').each(function(){
	          $(this).prop('checked', true);
	        });
	      } else {
	        $('#content__list tbody tr input:first-child').each(function(){
	          $(this).prop('checked', false);
	        });
	      }
	    });
	  };
	  o.listMainDataMakeRefreshableJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('List:Main:Data:Make:Refreshable');
	    }
	    _this = this;
	    $('#content__list__refresh').click(function(){
	      _this.listMainDataRefresh();
	    });
	  };
	  o.listMainDataMakeSearchableJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('List:Main:Data:Make:Searchable');
	    }
	    _this = this;
	    $('#content__list__inputs').html('');
	    $('#content__list__inputs').html('<br>' + this.templates.admin_inputs.list_data);
	    $('#content__list__inputs__title').on('keyup', function(){
	      _this.lists.index.column(2).search(this.value, {
	        regex: true
	      }).draw();
	    });
	    $('#content__list__inputs__tree').on('keyup', function(){
	      _this.lists.index.column(3).search(this.value, {
	        regex: true
	      }).draw();
	    });
	    $('#content__list__inputs__labels').on('keyup', function(){
	      _this.lists.index.column(4).search(this.value, {
	        regex: true
	      }).draw();
	    });
	    $('#content__list__inputs__status').on('keyup', function(){
	      _this.lists.index.column(5).search(this.value, {
	        regex: true
	      }).draw();
	    });
	    $('#content__list__inputs__date').on('keyup', function(){
	      _this.lists.index.column(6).search(this.value, {
	        regex: true
	      }).draw();
	    });
	    $('#content__list__inputs__date_start').on('keyup', function(){
	      _this.lists.index.column(7).search(this.value, {
	        regex: true
	      }).draw();
	    });
	    $('#content__list__inputs__date_end').on('keyup', function(){
	      _this.lists.index.column(8).search(this.value, {
	        regex: true
	      }).draw();
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\admin\list\main\data.ls.map


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initUtil = function(){
	    this.initUtilJs();
	  };
	  o.initUtilJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Util!'
	    });
	    __webpack_require__(94)(Component);
	    __webpack_require__(95)(Component);
	    __webpack_require__(100)(Component);
	    this.initFormat();
	    this.initExport();
	    this.initImport();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util.ls.map


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initFormat = function(){
	    this.initFormatJs();
	  };
	  o.formatMakeContainer = function(o){
	    return this.formatMakeContainerSz(o);
	  };
	  o.formatSetValue = function(o){
	    this.formatSetValueSz(o);
	  };
	  o.formatGetValue = function(o){
	    return this.formatGetValueSz(o);
	  };
	  o.initFormatJs = function(){
	    if (this.debug) {
	      console.log('Format!');
	    }
	    this.formats.inputs.notes = this.formatMakeContainer(this.props.util.formats.inputs.notes);
	    this.formatSetValue({
	      context: 'inputs',
	      entity: 'notes',
	      value: this.props.util.formats.inputs.notes.options[1].value
	    });
	    this.formats.admin.index = this.formatMakeContainer(this.props.util.formats.admin['default']);
	    this.formatSetValue({
	      context: 'admin',
	      entity: 'index',
	      value: this.props.util.formats.admin['default'].options[0].value
	    });
	    /*
	    @formats.outputs.index = @formatMakeContainer @props.util.formats.outputs.index
	    @formatSetValue do
	      context: 'outputs', entity: 'index', value: @props.util.formats.outputs.index.options.1.value
	    */
	    this.formats.app.index = this.formatMakeContainer(this.props.util.formats.app['default']);
	    this.formatSetValue({
	      context: 'app',
	      entity: 'index',
	      value: this.props.util.formats.app['default'].options[1].value
	    });
	  };
	  o.formatMakeContainerSz = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('Format:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){},
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.formatSetValueSz = function(o){
	    if (this.debug) {
	      console.log('Format:Set:Value');
	    }
	    this.formats[o.context][o.entity].setValue(o.value, function(){});
	  };
	  o.formatGetValueSz = function(o){
	    if (this.debug) {
	      console.log('Format:Get:Value');
	    }
	    return this.formats[o.context][o.entity].getValue();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\format.ls.map


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initExport = function(){
	    this.initExportJs();
	  };
	  o['export'] = function(o){
	    this.exportJs(o);
	  };
	  o.exportMakeMainInput = function(o){
	    this.exportMakeMainInputJq(o);
	  };
	  o.exportMakeMainOutput = function(o){
	    this.exportMakeMainOutputJq(o);
	  };
	  o.exportMakeAdmin = function(o){
	    this.exportMakeAdminJq(o);
	  };
	  o.exportMakeApp = function(o){
	    this.exportMakeAppJq(o);
	  };
	  o.initExportJs = function(){
	    var _this;
	    if (this.debug) {
	      console.log('Export!');
	    }
	    _this = this;
	    __webpack_require__(96)(Component);
	    __webpack_require__(97)(Component);
	    __webpack_require__(98)(Component);
	    __webpack_require__(99)(Component);
	    this.exportMakeMainInput({
	      entity: 'notes'
	    });
	    this.exportMakeMainOutput();
	    this.exportMakeAdmin();
	    this.exportMakeApp();
	  };
	  o.exportJs = function(o){
	    var blob, date, name;
	    if (this.debug) {
	      console.log('Export');
	    }
	    blob = new Blob([o.blob]);
	    date = moment().format('MMM[]Do-h[]mm[]a');
	    name = o.name + '-' + date + '.' + o.ext;
	    saveAs(blob, 'x+1-' + name);
	  };
	  o.exportMakeMainInputJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Export:Make:Main:Input');
	    }
	    _this = this;
	    $('#content__input__' + o.entity + '__export').click(function(){
	      var format, exporter;
	      format = _this.formatGetValue({
	        context: 'inputs',
	        entity: o.entity
	      });
	      exporter = {
	        editor: function(){
	          _this.exportMainInputEditor(o);
	        },
	        json: function(){
	          _this.exportMainInputJson(o);
	        },
	        zip: function(){
	          _this.exportMainInputZip(o);
	        }
	      };
	      exporter[format]();
	    });
	  };
	  o.exportMakeMainOutputJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Export:Make:Main:Output');
	    }
	    _this = this;
	    $('#content__output__index__export').click(function(){
	      var format, exporter;
	      format = _this.resultGetValue({
	        context: 'outputs',
	        entity: 'index'
	      });
	      exporter = {
	        frame: function(){
	          _this.exportMainOutputFrame(o);
	        },
	        editor: function(){
	          _this.exportMainOutputEditor(o);
	        },
	        json: function(){
	          _this.exportMainOutputJson(o);
	        },
	        zip: function(){
	          _this.exportMainOutputZip(o);
	        }
	      };
	      exporter[format]();
	    });
	  };
	  o.exportMakeAdminJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Export:Make:Admin');
	    }
	    _this = this;
	    $('#content__admin__export').click(function(){
	      var src, format, exporter;
	      src = 'main_data';
	      format = _this.formatGetValue({
	        context: 'admin',
	        entity: 'index'
	      });
	      exporter = {
	        main_data: {
	          json: function(){
	            _this.exportMainDataJson(o);
	          },
	          zip: function(){
	            _this.exportMainDataZip(o);
	          }
	        }
	      };
	      exporter[src][format]();
	    });
	  };
	  o.exportMakeAppJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Export:Make:App');
	    }
	    _this = this;
	    $('#content__app__export').click(function(){
	      var format, entity, table, exporter;
	      format = _this.formatGetValue({
	        context: 'app',
	        entity: 'index'
	      });
	      entity = _this.appFrontGetValue();
	      table = _this.app.entity[entity].table;
	      exporter = {
	        value: function(o){
	          _this.exportAppDataValue(o);
	        },
	        table: function(o){
	          _this.exportAppDataTable(o);
	        },
	        db: function(o){
	          _this.exportAppDataDb(o);
	        }
	      };
	      exporter[format]({
	        table: table
	      });
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\export.ls.map


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.exportMainDataJson = function(o){
	    this.exportMainDataJsonJs(o);
	  };
	  o.exportMainDataZip = function(o){
	    this.exportMainDataZipJs(o);
	  };
	  o.exportMainDataJsonJs = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('Export:Main:Data:Json');
	    }
	    _this = this;
	    cb = function(list){
	      var blob;
	      blob = JSON.stringify(list, null, 2);
	      _this['export']({
	        blob: blob,
	        name: 'main-data',
	        ext: 'json'
	      });
	    };
	    this.dataMainFindAll({
	      cb: cb
	    });
	  };
	  o.exportMainDataZipJs = function(o){
	    var _this, zip, cb;
	    if (this.debug) {
	      console.log('Export:Main:Data:Zip');
	    }
	    _this = this;
	    zip = new JSZip();
	    cb = function(list){
	      var i$, len$, blob;
	      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, list[i$]));
	      }
	      blob = zip.generate({
	        type: 'blob'
	      });
	      _this['export']({
	        blob: blob,
	        name: 'main-data',
	        ext: 'zip'
	      });
	      function fn$(i, el){
	        var i$, ref$;
	        for (i$ in ref$ = JSON.parse(el['input_' + o.entity])) {
	          (fn$.call(this, i$, ref$[i$]));
	        }
	        function fn$(j, file){
	          zip.file(el.id + '/' + file.name + '.' + file.ext, file.src);
	        }
	      }
	    };
	    this.dataMainFindAll({
	      cb: cb
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\export\main\data.ls.map


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.exportMainInputEditor = function(o){
	    this.exportMainInputEditorJs(o);
	  };
	  o.exportMainInputJson = function(o){
	    this.exportMainInputJsonJs(o);
	  };
	  o.exportMainInputZip = function(o){
	    this.exportMainInputZipJs(o);
	  };
	  o.exportMainInputEditorJs = function(o){
	    var file;
	    if (this.debug) {
	      console.log('Export:Main:Input:Editor');
	    }
	    file = this.inputGet({
	      entity: o.entity
	    });
	    this['export']({
	      blob: file.src,
	      name: file.name,
	      ext: file.ext
	    });
	  };
	  o.exportMainInputJsonJs = function(o){
	    var blob;
	    if (this.debug) {
	      console.log('Export:Main:Input:Json');
	    }
	    blob = JSON.stringify(this.inputFindAll({
	      entity: o.entity
	    }), null, 2);
	    this['export']({
	      blob: blob,
	      name: 'main-input-notes',
	      ext: 'json'
	    });
	  };
	  o.exportMainInputZipJs = function(o){
	    var zip, i$, ref$, blob;
	    if (this.debug) {
	      console.log('Export:Main:Input:Zip');
	    }
	    zip = new JSZip();
	    for (i$ in ref$ = this.inputFindAll({
	      entity: o.entity
	    })) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    blob = zip.generate({
	      type: 'blob'
	    });
	    this['export']({
	      blob: blob,
	      name: 'input-notes',
	      ext: 'zip'
	    });
	    function fn$(i, file){
	      zip.file(file.name + '.' + file.ext, file.src);
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\export\main\input.ls.map


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.exportMainOutputFrame = function(o){
	    this.exportMainOutputFrameJs(o);
	  };
	  o.exportMainOutputEditor = function(o){
	    this.exportMainOutputEditorJs(o);
	  };
	  o.exportMainOutputJson = function(o){
	    this.exportMainOutputJsonJs(o);
	  };
	  o.exportMainOutputZip = function(o){
	    this.exportMainOutputZipJs(o);
	  };
	  o.exportMainOutputFrameJs = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('Export:Main:Output:Frame');
	    }
	    _this = this;
	    cb = function(o){
	      _this['export']({
	        blob: o.src,
	        name: 'frame',
	        ext: 'html'
	      });
	    };
	    this.runFront({
	      entity: 'notes',
	      'export': cb
	    });
	  };
	  o.exportMainOutputEditorJs = function(o){
	    var file;
	    if (this.debug) {
	      console.log('Export:Main:Output:Editor');
	    }
	    file = this.outputGet({
	      entity: o.entity
	    });
	    this['export']({
	      blob: file.src,
	      name: file.name,
	      ext: file.ext
	    });
	  };
	  o.exportMainOutputJsonJs = function(o){
	    if (this.debug) {
	      console.log('Export:Main:Output:Json');
	    }
	    /*
	    blob = JSON.stringify (@outputFindAll entity: o.entity), null, 2
	    @export blob: blob, name: 'main-output-notes', ext: 'json'
	    */
	  };
	  o.exportMainOutputZipJs = function(o){
	    if (this.debug) {
	      console.log('Export:Main:Output:Zip');
	    }
	    /*
	    zip = new JSZip!
	    for let i, file of @outputFindAll entity: o.entity
	      zip.file file.name + '.' + file.ext, file.src
	    blob = zip.generate type: 'blob'
	    @export blob: blob, name: 'output-notes', ext: 'zip'
	    */
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\export\main\output.ls.map


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.exportAppDataValue = function(o){
	    this.exportAppDataValueJs(o);
	  };
	  o.exportAppDataTable = function(o){
	    this.exportAppDataTableJs(o);
	  };
	  o.exportAppDataDb = function(o){
	    this.exportAppDataDbJs(o);
	  };
	  o.exportAppDataValueJs = function(o){
	    if (this.debug) {
	      console.log('Export:App:Data:Value');
	    }
	  };
	  o.exportAppDataTableJs = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('Export:App:Data:Json');
	    }
	    _this = this;
	    cb = function(list){
	      var blob;
	      blob = JSON.stringify(list, null, 2);
	      _this['export']({
	        blob: blob,
	        name: 'app-data-' + o.table,
	        ext: 'json'
	      });
	    };
	    this.dataAppFindAll({
	      table: o.table,
	      cb: cb
	    });
	  };
	  o.exportAppDataDbJs = function(o){
	    if (this.debug) {
	      console.log('Export:App:Data:Db');
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\export\app\data.ls.map


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initImport = function(){
	    this.initImportJs();
	  };
	  o['import'] = function(o){
	    this.importJs(o);
	  };
	  o.importMakeMainInput = function(o){
	    this.importMakeMainInputJq(o);
	  };
	  o.importMakeMainOutput = function(o){
	    this.importMakeMainOutputJq(o);
	  };
	  o.importMakeAdmin = function(o){
	    this.importMakeAdminJq(o);
	  };
	  o.importMakeApp = function(o){
	    this.importMakeAppJq(o);
	  };
	  o.initImportJs = function(){
	    var _this;
	    if (this.debug) {
	      console.log('Import!');
	    }
	    _this = this;
	    __webpack_require__(101)(Component);
	    __webpack_require__(102)(Component);
	    __webpack_require__(103)(Component);
	    __webpack_require__(104)(Component);
	    this.importMakeMainInput({
	      entity: 'notes'
	    });
	    this.importMakeMainOutput();
	    this.importMakeAdmin();
	    this.importMakeApp();
	  };
	  o.importMakeMainInputJq = function(o){
	    var _this, read_as;
	    if (this.debug) {
	      console.log('Import:Make:Main:Input');
	    }
	    _this = this;
	    read_as = {
	      editor: 'readAsText',
	      json: 'readAsText',
	      zip: 'readAsArrayBuffer'
	    };
	    $('#content__input__' + o.entity + '__import').change(function(){
	      var format, importer, reader;
	      format = _this.formatGetValue({
	        context: 'inputs',
	        entity: o.entity
	      });
	      importer = {
	        editor: function(o){
	          _this.importMainInputEditor(o);
	        },
	        json: function(o){
	          _this.importMainInputJson(o);
	        },
	        zip: function(o){
	          _this.importMainInputZip(o);
	        }
	      };
	      reader = new FileReader();
	      reader[read_as[format]](this.files[0]);
	      reader.onload = function(e){
	        var file;
	        file = e.target.result;
	        importer[format]({
	          file: file,
	          entity: o.entity
	        });
	      };
	    });
	  };
	  o.importMakeMainOutputJq = function(o){
	    var _this, read_as;
	    if (this.debug) {
	      console.log('Import:Make:Main:Output');
	    }
	    _this = this;
	    read_as = {
	      frame: 'readAsText',
	      editor: 'readAsText',
	      json: 'readAsText',
	      zip: 'readAsArrayBuffer'
	    };
	    $('#content__output__index__import').change(function(){
	      var format, importer, reader;
	      format = _this.resultGetValue({
	        context: 'outputs',
	        entity: 'index'
	      });
	      importer = {
	        frame: function(o){
	          _this.importMainOutputFrame(o);
	        },
	        editor: function(o){
	          _this.importMainOutputEditor(o);
	        },
	        json: function(o){
	          _this.importMainOutputJson(o);
	        },
	        zip: function(o){
	          _this.importMainOutputZip(o);
	        }
	      };
	      reader = new FileReader();
	      reader[read_as[format]](this.files[0]);
	      reader.onload = function(e){
	        var file;
	        file = e.target.result;
	        importer[format]({
	          file: file,
	          entity: 'index'
	        });
	      };
	    });
	  };
	  o.importMakeAdminJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Import:Make:Admin');
	    }
	    _this = this;
	    $('#content__admin__import').change(function(){
	      var src, format, importer, reader;
	      src = 'main_data';
	      format = _this.formatGetValue({
	        context: 'admin',
	        entity: 'index'
	      });
	      importer = {
	        main_data: {
	          json: function(o){
	            _this.importMainDataJson(o);
	          }
	        }
	      };
	      reader = new FileReader();
	      reader.readAsText(this.files[0]);
	      reader.onload = function(e){
	        var file;
	        file = e.target.result;
	        importer[src][format]({
	          file: file
	        });
	      };
	    });
	  };
	  o.importMakeAppJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('Import:Make:App');
	    }
	    _this = this;
	    $('#content__app__import').change(function(){
	      var format, entity, table, importer, reader;
	      format = _this.formatGetValue({
	        context: 'app',
	        entity: 'index'
	      });
	      entity = _this.appFrontGetValue();
	      table = _this.app.entity[entity].table;
	      importer = {
	        value: function(o){
	          _this.importAppDataValue(o);
	        },
	        table: function(o){
	          _this.importAppDataTable(o);
	        },
	        db: function(o){
	          _this.importAppDataDb(o);
	        }
	      };
	      reader = new FileReader();
	      reader.readAsText(this.files[0]);
	      reader.onload = function(e){
	        var file;
	        file = e.target.result;
	        importer[format]({
	          table: table,
	          file: file
	        });
	      };
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\import.ls.map


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.importMainDataJson = function(o){
	    this.importMainDataJsonJs(o);
	  };
	  o.importMainDataJsonJs = function(o){
	    var _this, table, cb;
	    if (this.debug) {
	      console.log('Import:Main:Data:Json');
	    }
	    _this = this;
	    table = JSON.parse(o.file);
	    cb = function(){
	      _this.listMainDataRefresh();
	    };
	    this.dataMainImportTable({
	      table: table,
	      cb: cb
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\import\main\data.ls.map


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.importMainInputEditor = function(o){
	    this.importMainInputEditorJs(o);
	  };
	  o.importMainInputJson = function(o){
	    this.importMainInputJsonJs(o);
	  };
	  o.importMainInputZip = function(o){
	    this.importMainInputZipJs(o);
	  };
	  o.importMainInputEditorJs = function(o){
	    if (this.debug) {
	      console.log('Import:Main:Input:Editor');
	    }
	    this.editorSetValue({
	      context: 'inputs',
	      entity: 'notes',
	      value: o.file
	    });
	  };
	  o.importMainInputJsonJs = function(o){
	    var inputs;
	    if (this.debug) {
	      console.log('Import:Main:Input:Json');
	    }
	    inputs = {
	      notes: JSON.parse(o.file)
	    };
	    this.inputLoad({
	      inputs: inputs
	    });
	  };
	  o.importMainInputZipJs = function(o){
	    var _this, zip, inputs;
	    if (this.debug) {
	      console.log('Import:Main:Input:Zip');
	    }
	    _this = this;
	    zip = new JSZip(o.file);
	    inputs = {
	      notes: {}
	    };
	    $.each(zip.files, function(index, zipEntry){
	      var dot, name, src, ext;
	      dot = index.indexOf('.');
	      name = index.substring(0, dot);
	      src = zipEntry.asText();
	      ext = index.substring(dot + 1, index.length);
	      if (!_this.extIsValid({
	        ext: ext
	      })) {
	        ext = '++.md';
	      }
	      if (name !== '') {
	        inputs.notes[name] = {
	          name: name,
	          src: src,
	          ext: ext,
	          mode: _this.modeGetFromExt({
	            ext: ext
	          }) || 'text/x-markdown'
	        };
	      }
	    });
	    if (!inputs.notes.index) {
	      inputs.notes.index = {
	        name: 'index',
	        src: '\n\n',
	        ext: '++.md',
	        mode: 'text/x-markdown'
	      };
	    }
	    this.inputLoad({
	      inputs: inputs
	    });
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\import\main\input.ls.map


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.importMainOutputEditor = function(o){
	    this.importMainOutputEditorJs(o);
	  };
	  o.importMainOutputFrame = function(o){
	    this.importMainOutputFrameJs(o);
	  };
	  o.importMainOutputJson = function(o){
	    this.importMainOutputJsonJs(o);
	  };
	  o.importMainOutputZip = function(o){
	    this.importMainOutputZipJs(o);
	  };
	  o.importMainOutputFrameJs = function(o){
	    if (this.debug) {
	      console.log('Import:Main:Output:Editor');
	    }
	    this.frameWrite({
	      write: o.file
	    });
	  };
	  o.importMainOutputEditorJs = function(o){
	    if (this.debug) {
	      console.log('Import:Main:Output:Editor');
	    }
	    this.editorSetValue({
	      context: 'Outputs',
	      entity: 'notes',
	      value: o.file
	    });
	  };
	  o.importMainOutputJsonJs = function(o){
	    if (this.debug) {
	      console.log('Import:Main:Output:Json');
	    }
	  };
	  o.importMainOutputZipJs = function(o){
	    if (this.debug) {
	      console.log('Import:Main:Output:Zip');
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\import\main\output.ls.map


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.importAppDataValue = function(o){
	    this.importAppDataValueJs(o);
	  };
	  o.importAppDataTable = function(o){
	    this.importAppDataTableJs(o);
	  };
	  o.importAppDataDb = function(o){
	    this.importAppDataDbJs(o);
	  };
	  o.importAppDataValueJs = function(o){
	    if (this.debug) {
	      console.log('Import:App:Data:Value');
	    }
	  };
	  o.importAppDataTableJs = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('Import:App:Data:Table');
	    }
	    _this = this;
	    cb = function(){
	      _this.appValueRefresh();
	    };
	    this.dataAppImport({
	      table: o.table,
	      list: JSON.parse(o.file),
	      cb: cb
	    });
	  };
	  o.importAppDataDbJs = function(o){
	    if (this.debug) {
	      console.log('Import:App:Data:Db');
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\util\import\app\data.ls.map


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initApp = function(){
	    this.initAppJs();
	  };
	  o.initAppJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'App!'
	    });
	    __webpack_require__(106)(Component);
	    __webpack_require__(107)(Component);
	    __webpack_require__(108)(Component);
	    this.initAppWorkJob();
	    this.initAppFront();
	    this.initAppValue();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\app.ls.map


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initAppWorkJob = function(){
	    this.initAppWorkJobJs();
	  };
	  o.appWorkJobValueMake = function(o){
	    this.appWorkJobValueMakeJs(o);
	  };
	  o.appWorkJobValueMakeInputAutoUpdatable = function(o){
	    this.appWorkJobValueMakeInputAutoUpdatableJs(o);
	  };
	  o.appWorkJobValueRefresh = function(o){
	    this.appWorkJobValueRefreshJs(o);
	  };
	  o.appWorkJobValueClearInputs = function(o){
	    this.appWorkJobValueClearInputsJq(o);
	  };
	  o.appWorkJobValueCreate = function(o){
	    this.appWorkJobValueCreateJs(o);
	  };
	  o.appWorkJobValueUpdate = function(o){
	    this.appWorkJobValueUpdateJs(o);
	  };
	  o.appWorkJobValueDestroy = function(o){
	    this.appWorkJobValueDestroyJs(o);
	  };
	  o.appWorkJobValueOnChange = function(o){
	    this.appWorkJobValueOnChangeJs(o);
	  };
	  o.appWorkJobValueOnCreate = function(o){
	    return this.appWorkJobValueOnCreateJs(o);
	  };
	  o.appWorkJobValueRenderValue = function(o){
	    return this.appWorkJobValueRenderValueJs(o);
	  };
	  o.appWorkJobValueRenderOption = function(o){
	    return this.appWorkJobValueRenderOptionJs(o);
	  };
	  o.initAppWorkJobJs = function(){
	    if (this.debug) {
	      console.log('App:Work:Job!');
	    }
	    this.configMakeDataApp({
	      table: 'work_job'
	    });
	  };
	  o.appWorkJobValueMakeJs = function(o){
	    var _this, i$, ref$, len$;
	    if (this.debug) {
	      console.log('App:Work:Job:Value:Make');
	    }
	    _this = this;
	    this.app.value = this.appValueMakeContainer({
	      onChange: 'appWorkJobValue' + 'OnChange',
	      onCreate: 'appWorkJobValue' + 'OnCreate'
	    });
	    this.app.refresh = function(){
	      _this['appWorkJobValue' + 'Refresh']();
	    };
	    this.app.destroy = function(o){
	      _this['appWorkJobValue' + 'Destroy']({
	        id: o.id
	      });
	    };
	    for (i$ = 0, len$ = (ref$ = this.app.entity.work.job.columns).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    this.app.refresh();
	    function fn$(i, el){
	      this.appWorkJobValueMakeInputAutoUpdatable({
	        column: el
	      });
	    }
	  };
	  o.appWorkJobValueMakeInputAutoUpdatableJs = function(o){
	    if (this.debug) {
	      console.log('App:Work:Job:Value:Make:Input:Auto:Updatable');
	    }
	    this.appValueMakeAutoUpdatable({
	      type: 'input',
	      id: o.id || 'content__app__work_job__' + o.column,
	      table: 'work_job',
	      column: o.column
	    });
	  };
	  o.appWorkJobValueRefreshJs = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('App:Work:Job:Value:Refresh');
	    }
	    _this = this;
	    this['appWorkJobValue' + 'ClearInputs']();
	    cb = function(list){
	      var i$, len$, i, el, option;
	      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	        i = i$;
	        el = list[i$];
	        option = {
	          id: el.id,
	          name: el.name
	        };
	        _this.appValueCreate({
	          option: option
	        });
	      }
	    };
	    this.dataAppFindAll({
	      table: 'work_job',
	      cb: cb
	    });
	  };
	  o.appWorkJobValueClearInputsJq = function(o){
	    if (this.debug) {
	      console.log('App:Work:Job:Value:Clear:Inputs');
	    }
	    $('#content__app input, #content__app textarea').each(function(){
	      $(this).val('');
	    });
	  };
	  o.appWorkJobValueCreateJs = function(o){
	    if (this.debug) {
	      console.log('App:Work:Job:Value:Create');
	    }
	  };
	  o.appWorkJobValueDestroyJs = function(o){
	    if (this.debug) {
	      console.log('App:Work:Job:Value:Destroy');
	    }
	    this.dataAppDestroy({
	      table: 'work_job',
	      id: o.id
	    });
	  };
	  o.appWorkJobValueOnChangeJs = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('App:Work:Job:Value:On:Change');
	    }
	    _this = this;
	    this['appWorkJobValue' + 'ClearInputs']();
	    cb = function(attrs){
	      var i$, ref$, len$;
	      $('#content__app__' + 'work_job' + '__id').val(attrs.id);
	      for (i$ = 0, len$ = (ref$ = _this.app.entity.work.job.columns).length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, ref$[i$]));
	      }
	      function fn$(i, el){
	        $('#content__app__' + 'work_job' + '__' + el).val(attrs[el]);
	      }
	    };
	    this.dataAppFind({
	      table: 'work_job',
	      id: o.value,
	      cb: cb
	    });
	  };
	  o.appWorkJobValueOnCreateJs = function(o){
	    var _this, cb;
	    if (this.debug) {
	      console.log('App:Work:Job:Value:On:Create');
	    }
	    _this = this;
	    cb = function(attrs){
	      _this.appValueCreate({
	        option: {
	          id: attrs.id,
	          name: attrs.name
	        }
	      });
	      _this.appValueSetValue({
	        value: attrs.id
	      });
	      _this['appWorkJobValue' + 'OnChange']({
	        value: attrs.id
	      });
	    };
	    this.dataAppCreate({
	      table: 'work_job',
	      attrs: {
	        name: o.value
	      },
	      cb: cb
	    });
	    return null;
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\app\work\job.ls.map


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initAppFront = function(){
	    this.initAppFrontJs();
	  };
	  o.appFrontMakeContainer = function(o){
	    return this.appFrontMakeContainerSzJq(o);
	  };
	  o.appFrontSetValue = function(o){
	    this.appFrontSetValueSz(o);
	  };
	  o.appFrontGetValue = function(o){
	    return this.appFrontGetValueSz(o);
	  };
	  o.initAppFrontJs = function(){
	    if (this.debug) {
	      console.log('App:Front!');
	    }
	    this.app.front = this.appFrontMakeContainer(this.props.app.app_front);
	  };
	  o.appFrontMakeContainerSzJq = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('App:Front:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          _this.app.index = value;
	          $('#content__app').html(_this.templates.app[value]);
	          _this.appValueMake();
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.appFrontSetValueSz = function(o){
	    if (this.debug) {
	      console.log('App:Front:Set:Value');
	    }
	    this.app.index = o.value;
	    this.app.front.setValue(o.value, function(){});
	  };
	  o.appFrontGetValueSz = function(o){
	    if (this.debug) {
	      console.log('App:Front:Get:Value');
	    }
	    return this.app.front.getValue();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\app\front.ls.map


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initAppValue = function(){
	    this.initAppValueJs();
	  };
	  o.appValueMake = function(o){
	    return this.appValueMakeJs(o);
	  };
	  o.appValueMakeContainer = function(o){
	    return this.appValueMakeContainerSz(o);
	  };
	  o.appValueMakeRefreshable = function(o){
	    this.appValueMakeRefreshableJq(o);
	  };
	  o.appValueMakeDestroyable = function(o){
	    this.appValueMakeDestroyableJq(o);
	  };
	  o.appValueMakeCreatable = function(o){
	    this.appValueMakeCreatableJq(o);
	  };
	  o.appValueMakeAutoUpdatable = function(o){
	    this.appValueMakeAutoUpdatableJq(o);
	  };
	  o.appValueReset = function(o){
	    this.appValueResetSzJq(o);
	  };
	  o.appValueRefresh = function(o){
	    this.appValueRefreshSz(o);
	  };
	  o.appValueClearInputs = function(o){
	    this.appValueClearInputsJq(o);
	  };
	  o.appValueCreate = function(o){
	    this.appValueCreateSz(o);
	  };
	  o.appValueDestroy = function(o){
	    this.appValueDestroySz(o);
	  };
	  o.appValueOnChange = function(o){
	    this.appValueOnChangeJs(o);
	  };
	  o.appValueOnCreate = function(o){
	    return this.appValueOnCreateJs(o);
	  };
	  o.appValueSetValue = function(o){
	    this.appValueSetValueSz(o);
	  };
	  o.appValueGetValue = function(o){
	    return this.appValueGetValueSz(o);
	  };
	  o.appValueRenderValue = function(o){
	    return this.appValueRenderValueJs(o);
	  };
	  o.appValueRenderOption = function(o){
	    return this.appValueRenderOptionJs(o);
	  };
	  o.initAppValueJs = function(){
	    if (this.debug) {
	      console.log('App:Value!');
	    }
	    this.app.value = this.appValueMakeContainer(this.props.app.app_value);
	    this.appValueMakeRefreshable();
	    this.appValueMakeDestroyable();
	  };
	  o.appValueMakeJs = function(o){
	    var entity, table, container, columns, i$, len$;
	    if (this.debug) {
	      console.log('App:Value:Make');
	    }
	    entity = this.app.index || this.appFrontGetValue();
	    table = this.app.entity[entity].table;
	    container = this.app.entity[entity].container;
	    columns = this.app.entity[entity].columns;
	    this.appValueReset();
	    this.app.value = this.appValueMakeContainer(container);
	    for (i$ = 0, len$ = columns.length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, columns[i$]));
	    }
	    return this.appValueRefresh();
	    function fn$(i, el){
	      this.appValueMakeAutoUpdatable({
	        type: 'input',
	        id: 'content__app__' + entity + '__' + el,
	        table: table,
	        column: el
	      });
	    }
	  };
	  o.appValueMakeContainerSz = function(o){
	    var _this, config;
	    if (this.debug) {
	      console.log('App:Value:Make:Container');
	    }
	    _this = this;
	    config = function(){
	      return {
	        valueField: o.valueField || 'id',
	        labelField: o.labelField || 'name',
	        sortField: o.sortField || 'id',
	        searchField: o.searchField || ['id', 'name'],
	        options: o.options || [],
	        sortDirection: o.sortDirection || 'desc',
	        maxItems: 1,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              value: value
	            });
	          } else {
	            _this.appValueOnChange({
	              value: value
	            });
	          }
	        },
	        create: function(value){
	          if (o.onCreate) {
	            return _this[o.onCreate]({
	              value: value
	            });
	          } else {
	            return _this.appValueOnCreate({
	              value: value
	            });
	          }
	        },
	        render: {
	          item: function(item, escape){
	            if (o.render && o.render.value) {
	              return _this[o.render.value]({
	                item: item
	              });
	            } else {
	              return _this.appValueRenderValue({
	                item: item
	              });
	            }
	          },
	          option: function(item, escape){
	            if (o.render && o.render.option) {
	              return _this[o.render.option]({
	                item: item
	              });
	            } else {
	              return _this.appValueRenderOption({
	                item: item
	              });
	            }
	          }
	        }
	      };
	    };
	    return $('#content__app__value').selectize(config())[0].selectize;
	  };
	  o.appValueMakeRefreshableJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('App:Value:Make:Refreshable');
	    }
	    _this = this;
	    $('#content__app__value__refresh').click(function(){
	      var cb;
	      cb = function(){
	        _this.app.refresh();
	      };
	      _this.appValueRefresh({
	        cb: cb
	      });
	    });
	  };
	  o.appValueMakeDestroyableJq = function(o){
	    var _this;
	    if (this.debug) {
	      console.log('App:Value:Make:Destroyable');
	    }
	    _this = this;
	    $('#content__app__value__destroy').click(function(){
	      var value;
	      value = _this.appValueGetValue();
	      _this.appValueDestroy({
	        value: value
	      });
	    });
	  };
	  o.appValueMakeAutoUpdatableJq = function(o){
	    var _this, types, attrs, type;
	    if (this.debug) {
	      console.log('App:Value:Make:Auto:Updatable');
	    }
	    _this = this;
	    types = {
	      input: 'val',
	      editor: 'getValue'
	    };
	    attrs = {};
	    type = types[o.type];
	    $('#' + o.id).change(function(){
	      var val, id;
	      val = $(this)[type]();
	      id = _this.appValueGetValue();
	      attrs[o.column] = val;
	      _this.dataAppUpdate({
	        table: o.table,
	        id: id,
	        attrs: attrs
	      });
	    });
	  };
	  o.appValueResetSzJq = function(o){
	    if (this.debug) {
	      console.log('App:Value:Reset');
	    }
	    if (this.app.value.destroy) {
	      this.app.value.destroy();
	    }
	    this.app.value = null;
	  };
	  o.appValueRefreshSz = function(o){
	    var _this, entity, table, cb;
	    if (this.debug) {
	      console.log('App:Value:Refresh');
	    }
	    _this = this;
	    this.app.value.clearOptions();
	    this.appValueClearInputs();
	    entity = this.app.index || this.appFrontGetValue();
	    table = this.app.entity[entity].table;
	    cb = function(list){
	      var i$, len$, i, el, option;
	      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	        i = i$;
	        el = list[i$];
	        option = {
	          id: el.id,
	          name: el.name
	        };
	        _this.appValueCreate({
	          option: option
	        });
	      }
	    };
	    this.dataAppFindAll({
	      table: table,
	      cb: cb
	    });
	  };
	  o.appValueClearInputsJq = function(o){
	    if (this.debug) {
	      console.log('App:Value:Clear:Inputs');
	    }
	    $('#content__app input, #content__app textarea, #content__app select').each(function(){
	      $(this).val('');
	    });
	  };
	  o.appValueCreateSz = function(o){
	    if (this.debug) {
	      console.log('App:Value:Create');
	    }
	    this.app.value.addOption(o.option);
	  };
	  o.appValueDestroySz = function(o){
	    var entity, table;
	    if (this.debug) {
	      console.log('App:Value:Destroy');
	    }
	    this.app.value.removeOption(o.value);
	    entity = this.app.index || this.appFrontGetValue();
	    table = this.app.entity[entity].table;
	    this.dataAppDestroy({
	      table: table,
	      id: o.value
	    });
	  };
	  o.appValueOnChangeJs = function(o){
	    var _this, entity, table, cb;
	    if (this.debug) {
	      console.log('App:Value:On:Change');
	    }
	    _this = this;
	    entity = this.app.index || this.appFrontGetValue();
	    table = this.app.entity[entity].table;
	    this.appValueClearInputs();
	    cb = function(attrs){
	      var i$, ref$, len$;
	      $('#content__app__' + entity + '__id').val(attrs.id);
	      for (i$ = 0, len$ = (ref$ = _this.app.entity[entity].columns).length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, ref$[i$]));
	      }
	      function fn$(i, el){
	        $('#content__app__' + entity + '__' + el).val(attrs[el]);
	      }
	    };
	    this.dataAppFind({
	      table: table,
	      id: o.value,
	      cb: cb
	    });
	  };
	  o.appValueOnCreateJs = function(o){
	    var _this, entity, table, cb;
	    if (this.debug) {
	      console.log('App:Value:On:Create');
	    }
	    _this = this;
	    entity = this.app.index || this.appFrontGetValue();
	    table = this.app.entity[entity].table;
	    cb = function(attrs){
	      _this.appValueCreate({
	        option: {
	          id: attrs.id,
	          name: attrs.name
	        }
	      });
	      _this.appValueSetValue({
	        value: attrs.id
	      });
	      _this.appValueOnChange({
	        value: attrs.id
	      });
	    };
	    this.dataAppCreate({
	      table: table,
	      attrs: {
	        name: o.value
	      },
	      cb: cb
	    });
	    return null;
	  };
	  o.appValueSetValueSz = function(o){
	    if (this.debug) {
	      console.log('App:Value:Set:Value');
	    }
	    this.app.value.setValue(o.value, function(){});
	  };
	  o.appValueGetValueSz = function(o){
	    if (this.debug) {
	      console.log('App:Value:Get:Value');
	    }
	    return this.app.value.getValue();
	  };
	  o.appValueGetTableJs = function(o){
	    var entity, table;
	    if (this.debug) {
	      console.log('App:Value:Get:Table');
	    }
	    entity = this.app.index || this.appFrontGetValue();
	    table = this.app.entity[entity].table;
	    return table;
	  };
	  o.appValueRenderValueJs = function(o){
	    if (this.debug) {
	      console.log('App:Work:Job:Value:Render:Value');
	    }
	    return '<div>' + '<span>' + o.item.id + ' :</span> ' + '<span>' + o.item.name + '</span> ' + '</div>';
	  };
	  o.appValueRenderOptionJs = function(o){
	    if (this.debug) {
	      console.log('App:Work:Job:Value:Render:Option');
	    }
	    return '<div>' + '<span>' + o.item.id + ' :</span> ' + '<span>' + o.item.name + '</span> ' + '</div>';
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\x+1\v0\component\jquery\component\app\value.ls.map


/***/ }
/******/ ]);