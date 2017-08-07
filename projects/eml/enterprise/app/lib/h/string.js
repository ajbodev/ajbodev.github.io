
__require('app/lib/h/string', function(require, module, exports) {

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
    var unclosed = [
      'input', 'img' 
    ];
    var html  = [];
    var start = '<' + element + '';
    var end   = '';
    if (unclosed.indexOf(element) === -1) {
      end = '</' + element + '>';
    }
    for (var prop in props) {
      var _prop = props[prop];
      if (typeof(props[prop]) === 'function') {
        props[prop.toLowerCase()] = props[prop];
        prop = prop.toLowerCase();
        var bind_this = props['k'] || props['_this'];
        var bind  = ';window._this = window._this || {};';
        bind     += ';var _this = window._this[\'' + bind_this + '\'];';
        var func  = props[prop].toString();
        _prop     = '(function(e) {' + bind;
        _prop    += '(' + func + ')(e)';
        _prop    += '})(this)';
      }
      if (props[prop]) {
        var matcher = {
          '_this':     false,
          'k':         false,
          'className': 'class',
          'htmlFor':   'for',
        }
        if (prop in matcher) {
          if (matcher[prop]) {
            start += ' ' + matcher[prop];
            start += ('="' + _prop + '"')
          }
        } else {
          start += ' ' + prop;
          start += ('="' + _prop + '"')
        }
      }
    }
    start += '>';
    html.push(start);
    for (var i=2; i<arguments.length; i++) {
      if (arguments[i] instanceof Array) {
        for (var j=0; j<arguments[i].length; j++) {
          html.push(arguments[i][j]);
        }
      } else {
        html.push(arguments[i]);
      }
    }
    html.push(end);
    return html.join('');
  },
  render: function(element, node) {
    var _this = this;
    node.innerHTML = element;
  },
};
for (var i in prototype)     H.prototype[i] = prototype[i];

module.exports = H;

});
