
__require('app/lib/h/jquery', function(require, module, exports) {

/** #e51e */
var H = function() {
  var _this = this;
  var h    = this.h;
  h.render = this.render;
  return h;
};
var prototype = {
  h: function(element, props, content) {
    var _this = this;
    var component = $('<' + element + '>');
    for (var prop in props) {
      if (typeof(props[prop]) === 'function') {
        var _prop = prop.toLowerCase();
        if (_prop.substring(0,2) === 'on') {
          component.on(_prop.substr(2), props[prop])
        }
      } else {
        var matcher = {
          '_this':     false,
          'k':         false,
          'className': 'class',
          'htmlFor':   'for',
          'html':      'html',
        }
        if (prop in matcher) {
          if (matcher[prop]) {
            if (prop === 'html') {
              return component.html(content);
            } else {
              component.attr(matcher[prop], props[prop]);
            }
          }
        } else {
          component.attr(prop, props[prop]);
        }
      }
    }
    for (var i=2; i<arguments.length; i++) {
      if (arguments[i] instanceof Array) {
        arguments[i].forEach(function(elem) {
          component.append(elem);
        })
      } else if (typeof arguments[i] === 'object') {
        component.append(arguments[i]);
      } else {
        component.append(arguments[i]);
      }
    }
    return component;
  },
  render: function(element, node) {
    var _this = this;
    if (typeof element === 'string') {
      node.innerHTML = element;
    } else {
      $(node).html(element);
    }
  },
};
for (var i in prototype)     H.prototype[i] = prototype[i];

module.exports = H;

});
