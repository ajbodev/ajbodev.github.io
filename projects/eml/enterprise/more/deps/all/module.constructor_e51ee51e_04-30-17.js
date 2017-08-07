
__require('app/[lib]', function(require, module, exports) {

/**
 * Lib
 * 
 * @version ~04/30/17 #e51e
 * @since   ~04/30/17 #e51e
 * @author  Omar Job Abesamis <ojawebdev@gmail.com>
 * @see     
 *  
 * @module  {function} Lib app/[lib]
 * @vendors 
 * @param   {object} lib - Library
 * @param   {string} prop - Property
 * @return  {object} new require(module) {
 *   lib, prop, 
 *   boot, 
 *   action
 * }
 */
var Lib = function(lib, prop) {
  this.lib  = lib  || {};
  this.prop = prop || '';
  this.boot();
}

Lib.prototype = {
  constructor: Lib,
  boot: function() {
    var _this = this;
  },
  /**
   * Action
   * 
   * @vendors 
   * @param   {String} param - Parameter
   * @return  {String} param - Parameter
   */
  action: function(param) {
    var _this = this;
    return param;
  }
}

module.exports = Lib;

});
