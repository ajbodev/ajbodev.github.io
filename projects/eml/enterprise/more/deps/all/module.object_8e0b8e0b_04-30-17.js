
__require('app/[module]', function(require, module, exports) {

/**
 * Module
 * 
 * @version ~04/30/17 #8e0b
 * @since   ~04/30/17 #8e0b
 * @author  Omar Job Abesamis <ojawebdev@gmail.com>
 * @see     
 * 
 * @module  {object} _module app/[module]
 * @vendors 
 * @return  {object} require(module) {
 *   module, prop, 
 *   init, 
 *   action
 * }
 */
var _module = {
  //module: require('app/module'),
  //prop: '',
  init: function() {
    var _this = this;
  },
  /**
   * Action
   * 
   * @vendors 
   * @param   {string} param - Parameter
   * @return  {string} param - Parameter
   */
  action: function(param) { 
    var _this = this;
    return param;
  },
}

module.exports = _module;

});
