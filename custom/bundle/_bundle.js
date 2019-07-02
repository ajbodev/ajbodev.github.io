


////////////////////////////////////////////////////////////////////////////////

__$require = function(modules) {
  var _modules = modules || {1:[function(require,module,exports){},{}]};
  require = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})(_modules,{},[]);
};
if (typeof __require === 'function') {
  for (var _module in __require) {
    var o = {};
    o[_module] = [__require[_module], {}];
    __$require(o);
  }
  __require = null;
}
__require = function(name, func) {
  var o = {};
  o[name] = [func, {}];
  __$require(o);
};
__$require();

////////////////////////////////////////////////////////////////////////////////

__script = function(script, options) {
  options = options || {};
  if (typeof __root === 'undefined')  __root  = '';
  if (typeof __cache === 'undefined') __cache = undefined;

  var _root   = '';
  if ((script.substring(0,7) !== 'http://') && (script.substring(0,8) !== 'https://')) {
    //_root     = options.root  || (__root  || __script.root);
    _root     = options.root  || (__root + __script.root);
  }
  var _cache  = (options.cache || (__cache || __script.cache)) ? '' : ('?' + Math.random());

  if (!__script.scripts[script]) {
    document.write(
      '<script src="' + _root + script + _cache +
      '" onload="__script.onload(\'' + _root + script + '\') ' + 
      '" onerror="__script.onerror(\'' + _root + script + '\') ' + 
      '"></' + 'script>'
    );
  }
};
__script.scripts = {};
__script.root    = '';
__script.cache   = true;
__script.onerror = function(script) {
  __script.scripts[script] = false;
};
__script.onload  = function(script) {
  __script.scripts[script] = true;
};

////////////////////////////////////////////////////////////////////////////////

__style = function(style, options) {
  options = options || {};
  if (typeof __root === 'undefined')  __root  = '';
  if (typeof __cache === 'undefined') __cache = undefined;

  var _root   = '';
  if ((style.substring(0,7) !== 'http://') && (style.substring(0,8) !== 'https://')) {
    //_root     = options.root  || (__root  || __style.root);
    _root     = options.root  || (__root + __style.root);
  }
  var _cache  = (options.cache || (__cache || __style.cache)) ? '' : ('?' + Math.random());

  if (!__style.styles[style]) {
    document.write(
      '<link href="' + _root + style + _cache +
      '" onload="__style.onload(\'' + _root + style + '\') ' + 
      '" onerror="__style.onerror(\'' + _root + style + '\') ' + 
      '" rel="stylesheet">'
    );
  }
};
__style.styles  = {};
__style.root    = '';
__style.cache   = true;
__style.onerror = function(style) {
  __style.styles[style] = false;
};
__style.onload  = function(style) {
  __style.styles[style] = true;
};
__link = __style;

__c = function(f, o, texts) {
  var text = f.toString()
    .replace(/^[^\/]+\/\*!?/, '')
    .replace(/\*\/[^\/]+$/, '');
  texts    = texts || true;
    
  if (o)     text = __c.supplant(text, o);
  if (texts) __c.text(text);

  return text;
};
__c.texts = {};
__c.delimiter = {start: '(@~|', end: '|~@)'};
__c.text = function(text, start, end, texts) {
  start = start || __c.delimiter.start;
  end   = end   || __c.delimiter.end;
  texts = texts || true;
  var index_start   = text.indexOf(start);
  var index_end     = text.indexOf(end);
  if ((index_start>-1) && (index_end>-1)) {
    var name        = text.substring(index_start+start.length, index_end);
    if (texts) __c.texts[name] = text;
    return name;
  }
  return null;
};
__c.supplant = function (text, o) {
  return text.replace(/{([^{}]*)}/g,
    function (a, b) {
      var r = o[b];
      return typeof r === 'string' || typeof r === 'number' ? r : a;
    }
  );
};
__c.t = function(t) {
  var text = t[0];
  
  var f = function(texts) {
    texts = texts !== false ? true : false;
    if (texts) __c.text(text);
    return text;
  }
  f.text = text;

  return f;
};

////////////////////////////////////////////////////////////////////////////////

__boot = function() {
  // ?
  /**
   * https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
   * __root = url.searchParams.get('root');
   * theme, (refactor to window[]), ..
   */
  var url = new URL(window.location.href);
  
  //var _root  = url.searchParams.get('root'); // ~ local, ..
  var _index = url.searchParams.get('index');
  var _env   = url.searchParams.get('env');
  var _local = url.searchParams.get('local');
  var _cache = url.searchParams.get('cache');
  var _tests = url.searchParams.get('tests');
  var _prod  = url.searchParams.get('prod');
  
  if (typeof __root === undefined) __root = '';
  __index = _index ? _index : undefined;
  __env   = _env   ? _env   : undefined;
  __local = _local ? _local : undefined;
  __cache = _cache ? _cache : undefined;
  __tests = _tests ? _tests : undefined;
  __prod  = _prod  ? _prod  : undefined;

  if (__index === 'tests' && !url.searchParams.get('random')) document.location += '&random=false';
  // ?
};
__boot();

////////////////////////////////////////////////////////////////////////////////


