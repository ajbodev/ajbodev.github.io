
__require('app/content', function(require, module, exports) {

  var content = {};

  for (var i in __c.texts) {
    // replace ";__c(function(){/*!", "*/});" to ""
    content[i] = marked(__c.texts[i]);
  }

  module.exports = content;
  
});
