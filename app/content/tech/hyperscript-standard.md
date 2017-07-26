
;__c(function(){/*!

# HyperScript Standard

## String

**h/string.js**
```javascript
var H = function() {
  var _this = this;
  var h    = this.h;
  h.render = this.render;
  return h;
};
var HPrototype = {
  h: function(element, props, content) {
    var _this = this;
    var unclosed = [
      'input', 'img', 'br',
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
          'html':      'html',
        }
        if (prop in matcher) {
          if (matcher[prop]) {
            if (prop === 'html') {
              
            } else {
              start += ' ' + matcher[prop];
              start += ('="' + _prop + '"');
            }
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
for (var i in HPrototype) H.prototype[i] = HPrototype[i];
```

## DOM

**h/dom.js**
```javascript
var H = function() {
  var _this = this;
  var h    = this.h;
  h.render = this.render;
  return h;
};
var HPrototype = {
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
          if (typeof elem === 'string') {
            fragment.appendChild(document.createTextNode(elem));
          } else {
            fragment.appendChild(elem);
          }
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
for (var i in HPrototype) H.prototype[i] = HPrototype[i];
```

## jQuery

**h/jquery.js**
```javascript
var H = function() {
  var _this = this;
  var h    = this.h;
  h.render = this.render;
  return h;
};
var HPrototype = {
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
for (var i in HPrototype) H.prototype[i] = HPrototype[i];
```

## React

**h/react.js**
```javascript
var H = function() {
  var _this = this;
  var h    = this.h;
  h.render = this.render;
  return h;
};
var HPrototype = {
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
for (var i in HPrototype) H.prototype[i] = HPrototype[i];
```

[//]: # (@~|tech/hyperscript-standard|~@)

*/});
