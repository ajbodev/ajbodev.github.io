
__require('app/user', function(require, module, exports) {

var H    = require('app/lib/h/string');
var root = require('app/root');

var h = new H();

/** #452f ~04/27/17 ~04/27/17 */
var _module = {
  //module: require('app/module'),
  //prop: '',
  init: function() {
  },
  renderLogin: function(param) {
    var form_attrs = {
      'action': root + '/user/login',
      'method': 'POST',
    }
    var template = 
    h('div', {'class': 'login-box'},
      h('div', {'class': 'login-logo'},
        '<a href="#/"><b>Personal</b></a>'
      ),
      h('div', {'class': 'login-box-body'},
        h('p', {'class': 'login-box-msg'}, 'Log in'),
        h('form', form_attrs,
          h('div', {'class': 'form-group has-feedback'},
            h('input', {'name': 'user', 'type': 'text', 'class': 'form-control', 'placeholder': 'User'}),
            h('span', {'class': 'glyphicon glyphicon-envelope form-control-feedback'})
          ),
          h('div', {'class': 'form-group has-feedback'},
            h('input', {'name': 'pass', 'type': 'password', 'class': 'form-control', 'placeholder': 'Password'}),
            h('span', {'class': 'glyphicon glyphicon-lock form-control-feedback'})
          ),
          h('div', {'class': 'row'},
            h('div', {'class': 'col-xs-4'}),
            h('div', {'class': 'col-xs-4'},
              h('input', {'type': 'submit', 'class':'btn btn-primary btn-block btn-flat', 'value': 'Login'})
            ),
            h('div', {'class': 'col-xs-4'})
          )
        )
      )
    );
    $('body').addClass('login-page')
    $('#content').html(template)
  },
  renderLogout: function(param) {
    var form_attrs = {
      'action': root + '/user/logout',
      'method': 'POST',
    }
    var template = 
    h('div', {'class': 'login-box'},
      h('div', {'class': 'login-logo'},
        '<a href="#/"><b>Personal</b></a>'
      ),
      h('div', {'class': 'login-box-body'},
        h('p', {'class': 'login-box-msg'}, 'Log out'),
        h('form', form_attrs,
          h('div', {'class': 'row'},
            h('div', {'class': 'col-xs-4'}),
            h('div', {'class': 'col-xs-4'},
              h('input', {'type': 'submit', 'class':'btn btn-primary btn-block btn-flat', 'value': 'Logout'})
            ),
            h('div', {'class': 'col-xs-4'})
          )
        )
      )
    );
    $('body').addClass('login-page')
    $('#content').html(template)
  },
  action: function(param) {
    // 
  }
}

module.exports = _module;

});
