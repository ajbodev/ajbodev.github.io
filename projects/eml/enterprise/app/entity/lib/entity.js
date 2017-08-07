
__require('app/entity/lib/entity', function(require, module, exports) {

var Store     = require('app/entity/lib/entity/lib/store');
var State     = require('app/entity/lib/entity/lib/state');
var H         = require('app/entity/lib/entity/lib/h');
var Key       = require('app/entity/lib/entity/lib/key');

var Configure = require('app/entity/lib/entity/configure');
var Data      = require('app/entity/lib/entity/data');
var Component = require('app/entity/lib/entity/component');
var Template  = require('app/entity/lib/entity/template');
var Style     = require('app/entity/lib/entity/style');
var Util      = require('app/entity/lib/entity/util');

/**
 * Lib
 * 
 * @version ~05/22/17 #e51e
 * @since   ~04/30/17 #e51e
 * @author  Omar Job Abesamis <ojawebdev@gmail.com>
 * @see     
 *  
 * @module  {function} Entity app/entity/lib/entity
 * @vendors 
 * @param   {string} node - DOM Node
 * @return  {object} new require(module) {
 *   node, nodes, 
 *   config, 
 *   stores, data, lists, filters
 *   pivots, forms, inputs, temp,
 *   {Configure}
 *   {Data}
 *   {Temlate}
 *   {Component}
 *   {Util}
 *   action
 * }
 */
var Entity = function(node) {
  var _this = this;
  this.node      = node || document.getElementById('content');
  this.nodes     = {};
  this.key       = null;
  this.config    = {
    title:         '', 
    stores:        {}, 
    joins:         {},
    attrs:         {},
    lists:         { main:{}, }, 
    columns:       { main:{}, }, // ? onChange
    forms:         { 
      creatable:true, updatable:true,
      duplicatable:true, destroyable:true, clipboardable:true,
      exportable:true, importable:true,
    },
    filters:       { main:[], },
    inputs:        { create:[], update:[], },
    pivot:         {},
  };
  this.styles    = {};
  //this.custom  = function() {}; // callbacks, ..
  this.state     = {};
  this.stores    = { main: {}, };
  this.data      = { main: [], };
  this.lists     = { main: {}, };
  //this.columns = { main: {}, };
  this.filters   = { main: {}, };
  this.forms     = {
    create:{}, update:{}, duplicate:{}, destroy:{},
    clipboard:{}, export:{}, import:{}, 
  };
  this.inputs    = {
    create:{}, update:{}, duplicate:{}, destroy:{},
    clipboard:{}, export:{}, import:{}, 
  };
  this.pivots    = {};
  this.templates = {
    layout: null,   main: null,
    tab_menu: null, tab_items:null, 
  };
  this.hooks     = {
    refresh:   function(){},
    init_post: function(){},
  }
  this.temp      = { import: {}, };
  this.boot();
}
var prototype = {
  boot: function() {
    var _this = this;
  },
  init: function() {
    var _this = this;
    var key  = new Key();
    this.key = key.generate();
    this.k   = key.k.bind(this); // window k ~
    this.configure();
    this.makeData();
    this.makeStyles();
    this.mount();
    this.hooks.init_post();
  },
  uninit: function() {
    var _this = this;
    this.unmount();
  },
  k: function(sel) {
    var _this = this;
  },
  action: function(param) {
    var _this = this, k = this.k;
    return param;
  },
};
for (var i in Configure.prototype) Entity.prototype[i] = Configure.prototype[i];
for (var i in Data.prototype)      Entity.prototype[i] = Data.prototype[i];
for (var i in Component.prototype) Entity.prototype[i] = Component.prototype[i];
for (var i in Template.prototype)  Entity.prototype[i] = Template.prototype[i];
for (var i in Style.prototype)     Entity.prototype[i] = Style.prototype[i];
for (var i in Util.prototype)      Entity.prototype[i] = Util.prototype[i];
for (var i in prototype)           Entity.prototype[i] = prototype[i];

module.exports = Entity;

});
