
__require('app/lib/h/react', function(require, module, exports) {

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
    var h = React.createElement;
    for (var prop in props) {
      var matcher = {
        '_this': false,
        'k':     false,
        'class': 'className',
        'for':   'htmlFor',
        'html':  'dangerouslySetInnerHTML',
      }
      if (prop in matcher) {
        if (matcher[prop]) {
          if (prop === 'html') {
            props['dangerouslySetInnerHTML'] = {__html: content};
            delete props[prop];
            return h.apply(h, [element, props]);
          } else {
            props[matcher[prop]] = props[prop];
          }
          delete props[prop];
        }
      } 
    }
    return h.apply(h, arguments);
  },
  render: function(element, node) {
    var _this = this;
    if (typeof element === 'string') {
      node.innerHTML = element;
    } else {
      var h = React.createElement;
      ReactDOM.render(h(function(){return element}), node);
    }
  },
};
for (var i in prototype)     H.prototype[i] = prototype[i];

module.exports = H;

});
