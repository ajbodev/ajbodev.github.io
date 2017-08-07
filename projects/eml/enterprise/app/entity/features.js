
__require('app/entity/features', function(require, module, exports) {

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
      title: 'Features',
      stores: { main: 'features', },
      joins:  { },
      attrs:  [
        { attr: 'title', title: 'Title', 
          list: {
            width: 300,
          }, 
          filter: {}, form: {},
        },
        { attr: 'description', title: 'Description', 
          list: false,
          filter: false, form: { type:'editor:codemirror' },
        },
        { attr: 'client', title: 'Client', 
          filter: {}, form: {},
          list: { 
            width: 200,
            type: 'dropdown', source: [
              'Client A', 'Client B', 'Client C',
            ] 
          },
        },
        { attr: 'client_priority', title: 'Client Priority', 
          list: {}, filter: {}, form: {},
        },
        { attr: 'target_date', title: 'Target Date', 
          filter: {}, form: {},
          list: {
            type: 'date', dateFormat: 'YYYY-MM-DD', correctFormat: true,
            datePickerConfig: { firstDay: 0,  showWeekNumber: true, numberOfMonths: 2, }
          }, 
        },
        { attr: 'product_area', title: 'Product Area', 
          filter: {}, form: {},
          list: { 
            width: 200,
            type: 'dropdown', source: [
              'Policies', 'Billing', 'Claims', 'Reports',
            ] 
          },
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
