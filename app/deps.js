
/**
 * Dependencies
 * 
 * @version ~05/11/17 #2aa0
 * @since   ~04/30/17 #2aa0
 * @author  Omar Job Abesamis <ojawebdev@gmail.com>
 * @see     Browserify (13.1.0)
 */

var _require = function(modules) {
  var _modules = modules || {1:[function(require,module,exports){},{}]};
  require = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})(_modules,{},[]);
}
_require();

var __require = function(name, func) {
  var o = {}
  o[name] = [func, {}];
  _require(o);
}

/** 
 * Polyfills : Function.bind, Object.create, Object.assign, Object.keys, Object.values, .. 
 * 
 * @see     http://javascript.crockford.com/prototypal.html
 * @see     https://gist.github.com/Daniel-Hug/5682738
 */
