
__require('app/[module]', function(require, module, exports) {

/**
 * Lib
 * 
 * @version ~04/30/17 #e51e
 * @since   ~04/30/17 #e51e
 * @author  Omar Job Abesamis <ojawebdev@gmail.com>
 * @see     
 *  
 * @module  {function} _Module app/[module]
 * @vendors 
 * @param   {string} prop - Property
 * @return  {object} new require(module) {
 *   lib, prop, 
 *   boot, 
 *   action
 * }
 */
var _Module = function(prop) {
  var _this = this;
  this.prop = prop || '';
  this.boot();
};
var prototype = {
  /** Boot */
  boot: function() {
    var _this = this;
  },
  /** Init */
  init: function() {
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
  },
};
for (var i in prototype) _Module.prototype[i] = prototype[i];

module.exports = _Module;

});
