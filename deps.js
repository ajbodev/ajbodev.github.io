
/**
 * Dependencies
 * 
 * @version ~06/19/17
 * @since   ~04/30/17
 * @author  Omar Job Abesamis <ojawebdev@gmail.com>
 * @see     Browserify (13.1.0)
 * @see     http://javascript.crockford.com/remedial.html
 * @see     https://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
 */

var _require = function(modules) {
  var _modules = modules || {1:[function(require,module,exports){},{}]};
  require = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})(_modules,{},[]);
}
var __require = function(name, func) {
  var o = {}
  o[name] = [func, {}];
  _require(o);
}
_require();

var __c = function(f, o) {
  var text = f.toString()
    .replace(/^[^\/]+\/\*!?/, '')
    .replace(/\*\/[^\/]+$/, '');
    
  if (o) text = __c.supplant(text, o);
  __c.text(text);

  return text;
}
__c.texts = {};
__c.delimiter = {start: '(@~`', end: '`~@)'}
__c.text = function(text, start, end) {
  start = start || __c.delimiter.start;
  end   = end   || __c.delimiter.end;
  var index_start   = text.indexOf(start);
  var index_end     = text.indexOf(end);
  if ((index_start>-1) && (index_end>-1)) {
    var name        = text.substring(index_start+4, index_end);
    __c.texts[name] = text;
  }
}
__c.supplant = function (text, o) {
  return text.replace(/{([^{}]*)}/g,
    function (a, b) {
      var r = o[b];
      return typeof r === 'string' || typeof r === 'number' ? r : a;
    }
  );
};
