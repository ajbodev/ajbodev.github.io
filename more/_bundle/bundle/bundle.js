


////////////////////////////////////////////////////////////////////////////////

__main = function() {//!

const React    = require('react');
const ReactDOM = require('react-dom');

const App      = require('@/App');

ReactDOM.render(
  eval(jsx`
    <App/>
  `),
  document.getElementById('app')
);

};//!

////////////////////////////////////////////////////////////////////////////////

/*
__require('@/<module>', function(require, module, exports) {//!

function _Module() {
  return eval(jsx`
    <div>
      _Module!
    </div>
  `);
}

module.exports = _Module;

});//!
*/

////////////////////////////////////////////////////////////////////////////////

__scripts = function() {
  __script('https://ajbodev.bitbucket.io/custom/bundle/_react/_bundle.react.js');
  //__script('<..>');
  //__require('<vendor>', (r, m, e) => { m.exports = <Vendor>; });
  
  __script('App/App.js');
};

////////////////////////////////////////////////////////////////////////////////

__styles = function() {
  __style('styles.css');
  //__style('<..>');
};

////////////////////////////////////////////////////////////////////////////////

function __require(n, f) { __require[n] = f };
document.write(`<script src='https://ajbodev.github.io/custom/bundle/_bundle.js'></script>`);

////////////////////////////////////////////////////////////////////////////////


