
__require('app/entity/jobs', function(require, module, exports) {

var Entity = require('app/entity/lib/entity');

/** #e51e */
var _Entity = function(node) {
  var _this = this;
  Entity.call(this, node);
};
var prototype = {
  configure: function() {
    var _this = this;
    
    var config = {
      title: 'Jobs',
      stores: { main: 'jobs', },
      joins:  { },
      attrs:  [
        { attr: 'hash', title: 'Hash', 
          list: false, 
          filter: false, 
          form: {},
        },
        { attr: 'record_status', title: 'Record Status', 
          list: {}, 
          filter: {}, 
          form: {},
        },
        { attr: 'date_posted', title: 'Date Posted', 
          list: {
            type: 'date', dateFormat: 'YYYY-MM-DD', correctFormat: true,
            datePickerConfig: { firstDay: 0,  showWeekNumber: true, numberOfMonths: 2, }
          }, 
          filter: {}, 
          form: { type: 'date' },
        },
        { attr: 'calc_days_since_date_posted', title: 'Since', 
          list: { width: 50 }, 
          filter: {}, 
          form: {},
        },
        { attr: 'url', title: 'URL', 
          list: {
            width: 50,
            renderer: function (instance, td, row, col, prop, value, cellProperties) {
              return _this.config.customUrl(td, value);
            },
          },
          filter: false, 
          form: {},
        },
        { attr: 'tags', title: 'Tags', 
          list: { 
            renderer: function (instance, td, row, col, prop, value, cellProperties) {
              return _this.config.customTags(td, value);
            },
            width:250 
          }, 
          filter: {}, 
          form: { type: 'multiple:selectize' },
        },
        { attr: 'position', title: 'Position', 
          list: { width: 200 }, 
          filter: {}, 
          form: {},
        },
        { attr: 'date_applied', title: 'Date Applied', 
          list: {
            type: 'date', dateFormat: 'YYYY-MM-DD', correctFormat: true,
            datePickerConfig: { firstDay: 0,  showWeekNumber: true, numberOfMonths: 2, }
          }, 
          filter: {}, 
          form: { type: 'date' },
        },
        { attr: 'date_responded', title: 'Date Respond', 
          list: {
            type: 'date', dateFormat: 'YYYY-MM-DD', correctFormat: true,
            datePickerConfig: { firstDay: 0,  showWeekNumber: true, numberOfMonths: 2, }
          }, 
          filter: {}, 
          form: { type: 'date' },
        },
        { attr: 'date_offered', title: 'Date Offered', 
          list: {
            type: 'date', dateFormat: 'YYYY-MM-DD', correctFormat: true,
            datePickerConfig: { firstDay: 0,  showWeekNumber: true, numberOfMonths: 2, }
          }, 
          filter: {}, 
          form: { type: 'date' },
        },
        { attr: 'description', title: 'Description', 
          list: {
            width: 100,
            renderer: function (instance, td, row, col, prop, value, cellProperties) {
              return _this.config.customDescription(td, value);
            },
          },
          filter: false, 
          form: { type: 'editor:codemirror' },
        },
        { attr: 'company', title: 'Company', 
          list: { 
            width:200,
            renderer: function (instance, td, row, col, prop, value, cellProperties) {
              return _this.config.customCompany(td, value);
            },
          }, 
          filter: {}, 
          form: {},
        },
        { attr: 'cover_letter', title: 'Cover Letter', 
          list: {
            width: 100,
            renderer: function (instance, td, row, col, prop, value, cellProperties) {
              return _this.config.customDescription(td, value);
            },
          },
          filter: false, 
          form: { type: 'editor:codemirror' },
        },
        { attr: 'comments', title: 'Comments', 
          list: false, 
          filter: false, 
          form: { type: 'editor:codemirror' },
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
      calc: 'customCalcData',
      customCalcData: function(data) {
        for (var i=0; i<data.length; i++) {
          if (data[i]['date_posted']) {
            data[i]['calc_days_since_date_posted'] = 
              Math.round(
                moment.utc(moment.now())
                .diff(moment(data[i]['date_posted'], 'YYYY-MM-DD'))
                .valueOf()/86400000
              );
          }
        }
        return data;
      },
      customTags: function(td, value) {
        var fragment = document.createDocumentFragment();
        if (value) {
          var tags  = value.split('|');
          if (tags) {
            for (var i=0; i<tags.length; i++) {
              var span = document.createElement('span');
              span.className = 'content__tag';
              span.innerHTML = tags[i];
              fragment.appendChild(span);
            }
          }
        } else {
          var span = document.createElement('span');
          span.className = 'content__tag';
          fragment.appendChild(span);
        }
        Handsontable.Dom.empty(td);
        td.appendChild(fragment);
        return td;
      },
      customUrl: function(td, value) {
        var _this = this;
        Handsontable.Dom.empty(td);
        if (value) td.innerHTML = 'http..';
        return td;
      },
      customDescription: function(td, value) {
        var _this = this;
        Handsontable.Dom.empty(td);
        if (value) td.innerHTML = '..';
        return td;
      },
      customCompany: function(td, value) {
        var _this = this;
        Handsontable.Dom.empty(td);
        if (value) td.innerHTML = value.split('~')[0]
        return td;
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
