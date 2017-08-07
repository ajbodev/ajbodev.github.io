
__require('app/entity/lib/entity/template', function(require, module, exports) {

var H      = require('app/entity/lib/entity/lib/h');

var Layout = require('app/entity/lib/entity/template/layout');
var List   = require('app/entity/lib/entity/template/list');
var Form   = require('app/entity/lib/entity/template/form');
var Pivot  = require('app/entity/lib/entity/template/pivot');

var h      = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  render: function(node) {
    var _this = this;
    var k     = this.k;
    this.node = node || this.node;
    this.renderLayout();
    this.renderLists();
    this.renderListFilters();
    this.renderForms();
    this.renderPivot();
    this.contextualize();
  },
  unrender: function() {
    var _this = this;
    var k     = this.k;
    // ?
    $(this.node).html('');
    // ?
  },
  /** using the new jquery h, we might not need this anymore .. */
  bind: function(sel, event, cb, delegate) {
    var _this = this;
    var k     = this.k;
    var _event = event || 'click';
    if (!delegate) {
      $(sel).on(_event, function() {
        cb();
      });
    } else {
      $('body').on(_event, sel, function() {
        cb();
      });
    }
  },
  unbind: function() {
    var _this = this;
    var k     = this.k;
  },
  contextualize: function(param) {
    var _this = this;
    var k     = this.k;
    $(k('#content__modal__create__button')).click(function() {
      $(k('#content__modal__create')).modal('show')
    })
    $(k('.content__modal__close')).click(function() {
      _this.resetForms();
    })
    // on close modal
    $(k('#content__modal__create') + ', ' +
      k('#content__modal__update') + ', ' + 
      k('#content__modal__duplicate') + ', ' + 
      k('#content__modal__destroy') + ', ' + 
      k('#content__modal__clipboard') + ', ' + 
      k('#content__modal__export') + ', ' + 
      k('#content__modal__import')).on('hidden.bs.modal', function () {
      _this.resetForms();
    })
    //
    //$(k('#content__list__filters')).collapse('toggle');
    $(k('#content__list__filters')).attr('class', 'collapse');
    $(k('#content__main')).css('overflow-x', 'scroll');
    $(k('#content__main')).attr('class', 'table-responsive');
  },
  action: function(param) {
    var _this = this;
    var k     = this.k;
    return param;
  },
};
for (var i in prototype)        Template.prototype[i] = prototype[i];
for (var i in Layout.prototype) Template.prototype[i] = Layout.prototype[i]
for (var i in List.prototype)   Template.prototype[i] = List.prototype[i]
for (var i in Form.prototype)   Template.prototype[i] = Form.prototype[i]
for (var i in Pivot.prototype)  Template.prototype[i] = Pivot.prototype[i]

module.exports = Template;

});
