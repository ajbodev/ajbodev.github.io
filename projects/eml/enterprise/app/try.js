
__require('app/try', function(require, module, exports) {

__require('app/lib/store/axios', function(r,m,e) { m.exports = require('app/lib/store/static');});

__require('app/root', function(r,m,e) { m.exports = '';});

var Entity = require('app/entity/names');
var entity = new Entity();

// fixtures
entity.stores.main.create({ 
  name: 23, video: 'https://www.youtube.com/embed/XGSy3_Czz8k', tags: 'bbb|qweqwe',
  selectize_multiple: 'trtr|45678', selectize_gallery: 'asd|place~http://lorempixel.com/400/200/',
})
entity.stores.main.create({ 
  name: 34337711, tags: 'asdasd|bbb',
})

// fixtures
entity.stores.category.create({ category: 'AA' })
entity.stores.category.create({ category: 'BBB' })
entity.stores.category.create({ category: 'CCCC' })

window.entity = entity;

entity.init();

});
