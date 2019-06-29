


////////////////////////////////////////////////////////////////////////////////

React.__spread = Object.assign;
h              = React.createElement;
//jsx            = (t) => JSXTransformer.transform(t[0]).code;

jsx = function(t) {
  var _t = t[0];
  if (jsx.class_replace) _t = t[0].replace(/class=/g, 'className=');
  return JSXTransformer.transform(_t).code;
}
jsx.class_replace = true;

////////////////////////////////////////////////////////////////////////////////


