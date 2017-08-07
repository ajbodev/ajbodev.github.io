
__require('app/lib/h/dom', function(require, module, exports) {

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
    var component = document.createElement(element)
    for (var prop in props) {
      if (typeof(props[prop]) === 'function') {
        component[prop.toLowerCase()] = props[prop];
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
              component.innerHTML = content;
              return component;
            } else {
              component.setAttribute(matcher[prop], props[prop]); 
            }
          }
        } else {
          component.setAttribute(prop, props[prop]); 
        }
      }
    }
    for (var i=2; i<arguments.length; i++) {
      if (arguments[i] instanceof Array) {
        var fragment = document.createDocumentFragment();
        arguments[i].forEach(function(elem) {
          fragment.appendChild(elem);
        })
        component.appendChild(fragment);
      } else if (typeof arguments[i] === 'object') {
        component.appendChild(arguments[i]);
      } else {
        var text = document.createTextNode(arguments[i])
        component.appendChild(text);
      }
    }
    return component;
  },
  render: function(element, node) {
    var _this = this;
    if (typeof element === 'string') {
      node.innerHTML = element;
    } else {
      node.appendChild(element);
    }
  },
};
for (var i in prototype)     H.prototype[i] = prototype[i];

module.exports = H;

});
