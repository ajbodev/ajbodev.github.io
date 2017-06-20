
__require('app/content', function(require, module, exports) {

  var content = {};

  for (var i in __c.texts) {
    content[i] = marked(__c.texts[i]);
  }

  module.exports = content;
  
});
