
__require('app/entity/[entity]', function(require, module, exports) {

var Entity = require('app/entity/lib/entity');
var H      = require('app/entity/lib/entity/lib/h');
var root   = require('app/root');

var h      = new H();

/** #e51e */
var _Entity = function(node) {
  var _this = this;
  Entity.call(this, node);
};
var prototype = {
  configure: function() {
    var _this = this;
    var k     = this.k;
    
    var config = {
      title: '[_Entity]',
      stores: { main: '[entity]', },
      joins:  { },
      attrs:  [
        { attr: 'hash', title: 'Hash', 
          list: {}, filter: {}, form: {},
        },
        { attr: 'name', title: 'Name', 
          list: { width:300 }, filter: {}, form: {},
        },
        { attr: 'tags', title: 'Tags', 
          list: { width:150 }, filter: {}, form: {},
        },
        { attr: 'description', title: 'Description', 
          list: { width:300 }, filter: false, form: {},
        },
        { attr: 'comments', title: 'Comments', 
          list: false, filter: false, form: { type: 'editor:codemirror' },
        },
      ],
      forms:  {
        creatable:    true, updatable:     true,
        duplicatable: [ 'name', ], 
        destroyable:  true, clipboardable: true, 
        exportable:   true, importable:    true,
      },
      inputs:  { create:[], update:[], },
      lists:   { main: {} },
      columns: { main:{} },
      //
      calc: 'customCalcData',
      customCalcData: function(data) {
        for (var i=0; i<data.length; i++) {
          data[i]['calc'] = i*2;
        }
        return data;
      },
      handle: function(action, params, cb) {
        if (action === 'create') {
          params.uuid = _this.utilUuid();
        }
        cb();
      },
      customAction: function(param) { return param; },
    };
    for (var i in config) this.config[i] = config[i];
    
    this.configureLists('main');
    //this.configureListColumns();
    this.configureListFilters('main');
    //this.configureForms();
    this.configureFormInputs('create');
    this.configureFormInputs('update');

  },
};
for (var i in Entity.prototype) _Entity.prototype[i] = Entity.prototype[i];
for (var i in prototype)        _Entity.prototype[i] = prototype[i];

module.exports = _Entity;

});
