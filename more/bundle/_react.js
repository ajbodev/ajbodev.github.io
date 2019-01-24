
__require('react',            (r, m, e) => { m.exports = React;          });
__require('react-dom',        (r, m, e) => { m.exports = ReactDOM;       });
__require('redux',            (r, m, e) => { m.exports = Redux;          });
__require('redux-thunk',      (r, m, e) => { m.exports = ReduxThunk;     });
__require('react-router-dom', (r, m, e) => { m.exports = ReactRouterDOM; });
__require('react-redux',      (r, m, e) => { m.exports = ReactRedux;     });
__require('reselect',         (r, m, e) => { m.exports = Reselect;       });

__scripts_react = function() {
  __script('https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0/umd/react.development.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0/umd/react-dom.development.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.min.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.3.0/redux-thunk.min.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/4.3.1/react-router-dom.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/react-redux/6.0.0/react-redux.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/reselect/4.0.0/reselect.min.js');
  __script('https://unpkg.com/react@0.13.3/dist/JSXTransformer.js');
}
