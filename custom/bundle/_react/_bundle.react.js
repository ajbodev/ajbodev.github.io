


////////////////////////////////////////////////////////////////////////////////

__script('https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.development.js');
__script('https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.development.js');
__script('https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.js');
__script('https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.3.0/redux-thunk.js');
__script('https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.0.1/react-router-dom.js');
__script('https://cdnjs.cloudflare.com/ajax/libs/react-redux/7.1.0/react-redux.js');
__script('https://cdnjs.cloudflare.com/ajax/libs/reselect/4.0.0/reselect.js');
__script('https://cdnjs.cloudflare.com/ajax/libs/recompose/0.26.0/Recompose.js');
__script('https://ajbodev.github.io/custom/vendor/jsxtransformer/0.13.3/jsxtransformer.js');
__script('https://ajbodev.github.io/custom/bundle/_react/_bundle.react.global.js');

__require('react',            (r, m, e) => { m.exports = React;          });
__require('react-dom',        (r, m, e) => { m.exports = ReactDOM;       });
__require('redux',            (r, m, e) => { m.exports = Redux;          });
__require('redux-thunk',      (r, m, e) => { m.exports = ReduxThunk;     });
__require('react-router-dom', (r, m, e) => { m.exports = ReactRouterDOM; });
__require('react-redux',      (r, m, e) => { m.exports = ReactRedux;     });
__require('reselect',         (r, m, e) => { m.exports = Reselect;       });
__require('recompose',        (r, m, e) => { m.exports = Recompose;      });
__require('jsxtransformer',   (r, m, e) => { m.exports = JSXTransformer; });

React.__spread = Object.assign;
h              = React.createElement;
jsx            = (t) => JSXTransformer.transform(t[0]).code;

////////////////////////////////////////////////////////////////////////////////


