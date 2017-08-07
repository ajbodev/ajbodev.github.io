
__require('app/entity/days', function(require, module, exports) {

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
    var url   = root + '/data';

    var config = {
      title: 'Days',
      stores: { 
        main: {
          options: {
            'create':  url + '/create/days',
            'update':  url + '/update/days',
            'destroy': url + '/destroy/days',
            'list':    url + '/list/days/?&year=2017',
            'find':    url + '/find/days',
          },
        },
      },
      joins:  { },
      attrs:  [
        { attr: 'hash', title: 'Hash', 
          list: {}, filter: {}, form: {},
        },
        { attr: 'record_status', title: 'Record Status',
          list: { type: 'dropdown', source: [
              'FINISHED', 'ONGOING', 'UPCOMING', 'SUNDAY', 'SICK',
            ] 
          },
        },
        { attr: 'day', title: 'Day', 
          list: { width: 70, }, filter: {}, form: {},
        },
        { attr: 'story', title: 'Story', 
          list:   false,
          filter: false, 
          form: { 
            type: 'editor:codemirror',
            custom: {
              onChange: function(form, column) {
                if ((form === 'update') && !_this.config.isStoryLocked) {
                  _this.config.isStoryLocked = true;
                  setTimeout(function() {
                    var id    = _this.getFormInputValue(form, 'id');
                    var story = _this.getFormInputValue(form, 'story');
                    _this.updateData(id, {story: story}, function() {
                      //_this.notify('Update gallery','success')
                    });
                    _this.config.isStoryLocked = false;
                  }, 500)
                }
              },
              height: 757,
            },
          },
        },
        { attr: 'works', title: 'Works', 
          list: { 
            onChange: function(changes, source) {
              var config = _this.config.lists.main.columns;
              var row    = changes[0];
              var column = _.findIndex(config, {data: 'works_total_hours'});
              var value  = changes[3];
              try {
                var tags  = value.split('|');
                if (tags) {
                  var total = 0;
                  for (var i=0; i<tags.length; i++) {
                    var work  = tags[i].split('~');
                    var times = work[1].split('-');
                    var hours = 
                      moment.utc(moment(times[1],'hh:mm')
                      .diff(moment(times[0],'hh:mm')))
                      .valueOf()/3600000;
                    total += Math.round(hours*100)/100;
                  }
                  _this.lists.main.setDataAtCell(row, column, total);
                  return;
                }
              } catch(e) {
                //console.log(e);
              }
              _this.lists.main.setDataAtCell(row, column, 0);
            },
            renderer: function (instance, td, row, col, prop, value, cellProperties) {
              return _this.config.customWorks(td, value);
            },
            width:300,
          }, filter: {}, form: { type: 'multiple:selectize' },
        },
        { attr: 'works_total_hours', title: 'Σ Works', 
          list: { 
            width: 80, editor: false, readOnly: true,
          },
          filter: {}, form: {},
        },
        { attr: 'calc_works_total_hours', title: 'Σ Σ Works',
          list: {
            width: 80, editor: false, readOnly: true,
          },
          filter: false, form: false, 
        },
        { attr: 'statement', title: 'Statement', 
          list: { 
            width:200,
          }, filter: false, form: {},
        },
        { attr: 'health', title: 'Health', 
          list: { 
            renderer: function (instance, td, row, col, prop, value, cellProperties) {
              return _this.config.customTags(td, value);
            },
            width:200
          }, filter: {}, form: { type: 'multiple:selectize' },
        },
        { attr: 'events', title: 'Events', 
          list: { 
            renderer: function (instance, td, row, col, prop, value, cellProperties) {
              return _this.config.customTags(td, value);
            },
            width:200
          }, filter: {}, form: { type: 'multiple:selectize' },
        },
        { attr: 'comments', title: 'Comments', 
          list: false, filter: false, form: false, //{ type: 'editor:codemirror' },
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
      isStoryLocked:  false,
      customCalcData: function(data) {
        var running_hours = 0;
        for (var i=0; i<data.length; i++) {
          running_hours += parseFloat(data[i]['works_total_hours'] || 0);
          data[i]['calc_works_total_hours'] = Math.round(running_hours*100)/100;
        }
        return data;
      },
      customWorks: function(td, value) {
        var fragment = document.createDocumentFragment();
        try {
          var tags  = value.split('|');
          if (tags) {
            for (var i=0; i<tags.length; i++) {
              var work  = tags[i].split('~');
              var times = work[1].split('-');
              var hours = 
                moment.utc(moment(times[1],'hh:mm')
                .diff(moment(times[0],'hh:mm')))
                .valueOf()/3600000;
              hours = Math.round(hours*100)/100;
              var span = document.createElement('span');
              span.className = 'content__tag';
              span.innerHTML = work[0] + '~' + hours + 'h';
              fragment.appendChild(span);
            }
          }
        } catch(e) {
          var span = document.createElement('span');
          span.className = 'content__tag';
          fragment.appendChild(span);
        }
        Handsontable.Dom.empty(td);
        td.appendChild(fragment);
        return td;
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
    
    // ?
    this.hooks.refresh = function() {
      _this.filters.main.record_status.setValue(['ONGOING','UPCOMING']);
    }
    this.hooks.init_post = function() {
      // ? calendar
      $(k('#content__calendar')).fullCalendar({

      })
      // ?
    }
    // calendar
    this.templates.tab_menu = function() {
      var template = [
        h('li', {'class': 'active'}, 
          h('a', {'href': k('#content__main__tab'), 'data-toggle': 'tab'}, 'Main')
        ),
        h('li', {'class': ''}, 
          h('a', {'href': k('#content__reports__tab'), 'data-toggle': 'tab'}, 'Reports')
        ),
        h('li', {'class': ''}, 
          h('a', {'href': k('#content__calendar__tab'), 'data-toggle': 'tab'}, 'Calendar')
        ),
      ]
      return template;
    }
    this.templates.tab_items = function() {
      var template = [
        h('div', {'id': k('content__main__tab'), 'class': 'tab-pane fade in active'},
          h('div', {'id': k('content__main__list')}),
          h('div', {'id': k('content__main__form__create')}),
          h('div', {'id': k('content__main__form__update')}),
          h('div', {'id': k('content__main__form__duplicate')}),
          h('div', {'id': k('content__main__form__destroy')}),
          h('div', {'id': k('content__main__form__clipboard')}),
          h('div', {'id': k('content__main__form__export')}),
          h('div', {'id': k('content__main__form__import')})
        ),
        h('div', {'id': k('content__reports__tab'), 'class': 'tab-pane fade in'},
          h('div', {'id': k('content__reports__pivot')})
        ),
        h('div', {'id': k('content__calendar__tab'), 'class': 'tab-pane fade in'},
          h('div', {'id': k('content__calendar')})
        ),
      ]
      return template;
    }
    // ?
  },
};
for (var i in Entity.prototype) _Entity.prototype[i] = Entity.prototype[i];
for (var i in prototype)        _Entity.prototype[i] = prototype[i];

module.exports = _Entity;

});
