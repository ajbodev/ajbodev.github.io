


////////////////////////////////////////////////////////////////////////////////

__main = function() {//!

const React     = require('react');
const ReactDOM  = require('react-dom');
const { 
  Route, 
  HashRouter }  = require('react-router-dom');

const Layout    = require('@/layout');

function App() {
  return eval(jsx`
    <Layout>
      <Route path='/*' component={_Component} />
    </Layout>
  `);
}

function _Component(props) {
  let _component = props.match.params[0];
  if (_component === '') _component = 'index';
  let Component;
  try {
    Component = require(`@/${_component}`);
  } catch(e) {
    Component = () => eval(jsx`<div></div>`);
  }
  return eval(jsx`<Component/>`);
}

ReactDOM.render(
  eval(jsx`
    <HashRouter>
      <App/>
    </HashRouter>
  `),
  document.getElementById('app')
);

};//!

////////////////////////////////////////////////////////////////////////////////

__scripts = function() {
  __script('https://ajbodev.bitbucket.io/custom/bundle/_react/_bundle.react.js');
  //__script('<..>');
  //__require('<vendor>', (r, m, e) => { m.exports = <Vendor>; });
};

////////////////////////////////////////////////////////////////////////////////

__styles = function() {
  //__style('styles.css');
  //__style('<..>');
};

////////////////////////////////////////////////////////////////////////////////

document.write(`<script src='https://ajbodev.github.io/custom/bundle/_bundle.js'></\script>`);
__=()=>['styles','scripts','main'].map(el=>document.write(`<script>__${el}();</\script>`));

////////////////////////////////////////////////////////////////////////////////


