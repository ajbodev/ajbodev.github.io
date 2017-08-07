
__require('app', function(require, module, exports) {

var H    = require('app/lib/h/react');
var root = require('app/root');
var Menu = require('app/menu');

var h = new H();

/** #e51e */
var App = function(options) {
  var _this = this;
  this.entity   = {};
  //this.fixtures = (options || {}).fixtures || {};
  this.menu     = new Menu();
  this.boot();
};
var prototype = {
  boot: function() {
    var _this = this;
  },
  init: function() {
    var _this = this;
    this.renderLayout();
    this.renderMenu();
    this.makeRoutes();
  },
  renderLayout: function() {
    var img    = 'http://ajbodev.github.io/projects/eml/enterprise/media/person.png';
    var header = 
      h('header', {'class': 'main-header'}, 
        h('a', {'class': 'logo'}, 
          h('span', {'class': 'logo-mini', 'href': '#'}, 
            h('b', {}, 'ADM')
          ),
          h('span', {'class': 'logo-lg', 'href': '#'}, 
            h('b', {}, 'Admin')
          )
        ), 
        h('nav', {'class': 'navbar navbar-static-top', 'role': 'navigation'}, 
          h('a', {'class': 'sidebar-toggle', 'href': '#', 'data-toggle': 'offcanvas', 'role': 'button'}, 
            h('span', {'class': 'sr-only'}, 'Toggle Navigation'),
            h('span', {'class': 'icon-bar'}),
            h('span', {'class': 'icon-bar'}),
            h('span', {'class': 'icon-bar'})
          ),
          h('div', {'class': 'navbar-custom-menu'}, 
            h('ul', {'class': 'nav navbar-nav'},
              h('li', {'class': 'dropdown user user-menu'},
                h('a', {'class': 'dropdown-toggle', 'href': '#', 'data-toggle': 'dropdown', 'aria-expanded': 'false'},
                  h('img', {'class': 'user-image', 'src': img, 'alt': 'User Image'}),
                  h('span', {'id': 'module__user__name_1', 'class': 'hidden-xs'}, 'Admin')
                ),
                h('ul', {'class': 'dropdown-menu'},
                  h('li', {'class': 'user-header'},
                    h('img', {'class': 'img-circle', 'src': img, 'alt': 'User Image'}),
                    h('p', {'id': 'module__user__name_2'}, 'Admin')
                  ),
                  h('li', {'class': 'user-footer'},
                    h('div', {'class': 'pull-left'},
                      h('a', {'class': 'btn btn-default btn-flat'}, 'Profile')
                    ),
                    h('div', {'class': 'pull-right'},
                      h('form', {'method': 'POST', 'action': root + '/user/logout'},
                        h('button', {'class': 'btn btn-default btn-flat', 'type': 'submit'}, 'Sign out')
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );

    var sidebar = 
    h('aside', {'class': 'main-sidebar'},
      h('aside', {'class': 'main-sidebar'}, 
        h('section', {'class': 'sidebar'}, 
          h('div', {'class': 'user-panel'}, 
            h('div', {'class': 'pull-left image'}, 
              h('img', {'class': 'img-circle', 'src': img, 'alt': 'User Image'})
            ),
            h('div', {'class': 'pull-left info'}, 
              h('p', {'id': 'module__user__name_3'}, 'Admin'),
              h('a', {'href': '#'}, 
                h('i', {'id': 'module__user__connection', 'class': 'fa fa-circle text-success'}),
                'Online'
              )
            )
          ),
          h('div', {'id': 'sidebar-menu'})
        )
      )
    );

    var content = 
    h('div', {'id':'content', 'class': 'content-wrapper'}
    );

    //
    $('body').attr('class','skin-black sidebar-mini')
    $('body').attr('style','height: auto;')
    $('#content').attr('class','wrapper')
    //

    h.render(
      h('div', {}, header, sidebar, content), 
      document.getElementById('app')
    );
  },
  renderMenu: function() {
    var _this = this;
    this.menu.render();
  },
  _render: function(cb) {
    var _this = this;
    $('#content').html('');
    this.progressStart();
    this.animateContent();
    if (cb) cb();
    this.progressEnd();
  },
  makeRoutes: function() {
    var _this = this;
    var routes = {
      '/entity/?((\w|.)*)': function(entity) {
        _this._render(function() { _this.mountEntity(entity); })
      },
      '/gallery/?((\w|.)*)': function(gallery) {
        _this._render(function() { _this.renderGallery(gallery); })
      },
      '/galledb/?((\w|.)*)': function(gallery) {
        _this._render(function() { _this.renderGalleryDb(gallery); })
      },
    }
    this.router = Router(routes);
    this.router.init();
  },
  mountEntity: function(entity) {
    var _this = this;
    if (this.entity.uninit) this.entity.uninit();
    this.entity = new (require('app/entity/' + entity));
    this.entity.init();
    // ?

    // ?
  },
  animateContent: function() {
    var _this = this;
    $('#content').addClass('fadeIn animated');
    setTimeout(function() {
      $('#content').removeClass('fadeIn animated');
    }, 300)
    window.scrollTo(0, 0);
  },
  progressStart: function() {
    var _this = this;
    NProgress.start();
  },
  progressEnd: function() {
    var _this = this;
    NProgress.done();
  },
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) App.prototype[i] = prototype[i];

module.exports = App;

});
