
var content    = function(f) {
  var text = f.toString()
    .replace(/^[^\/]+\/\*!?/, '')
    .replace(/\*\/[^\/]+$/, '');

  var index_start = text.indexOf('(@~`');
  var index_end   = text.indexOf('`~@)');
  var name        = text.substring(index_start+4, index_end);

  content.texts[name] = marked(text);
}
content.texts  = {};
var __c = content;

__require('app/content', function(require, module, exports) {
  module.exports = content.texts
});
