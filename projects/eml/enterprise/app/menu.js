
__require('app/menu', function(require, module, exports) {

var H    = require('app/lib/h/react');
var root = require('app/root');

var h = new H();

/** #e51e */
var Menu = function() {
  var _this = this;
};
var prototype = {
  render: function() {
    var submenu = function(name, fa, items) {
      fa = fa || 'th'
      var template = 
      h('li', {'class': 'treeview'},
        h('a', {'href': '#'},
          h('i', {'class': 'fa fa-'+fa}),
          h('span', {}, name),
          h('i', {'class': 'fa fa-angle-left pull-right'})
        ),
        h('ul', {'class': 'treeview-menu'}, (items || ''))
      );
      return template;
    };
    var submenu_item = function(name, href, fa) {
      fa = fa || 'table'
      var template = 
      h('li', {'class': 'treeview'},
        h('a', {'href': href},
          h('i', {'class': 'fa fa-'+fa}),
          h('span', {html: true}, name),
        )
      );
      return template;
    };
    var menu = function() {
      var gallery = function(href) {
        return '#/gallery/' + href + '';
      };
      var template = 
      h('ul', {'class': 'sidebar-menu'}, 
        /*
        submenu('Dashboard', 'th', [
          submenu_item('Main',    '#/dashboard', 'table'),
        ]),
        */
        submenu('Entity', 'th', [
          submenu_item('Features', '#/entity/features'),
        ]),
      );
      return template;
    }
    h.render(menu(), document.getElementById('sidebar-menu'));
  },
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) Menu.prototype[i] = prototype[i];

module.exports = Menu;

});
