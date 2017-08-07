
__require('app/entity/lib/entity/template/list', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderLists: function(node) {
    var _this = this;
    var k     = this.k;
    this.renderList();
  },
  renderList: function(list, node) {
    var _this = this;
    var k     = this.k;
    node = node || document.getElementById(k('content__list'));
    list = list || 'main';
    this.lists[list] = new Handsontable(node, this.config.lists[list]);
  },
  renderListFilters: function(list, node) {
    var _this = this;
    var k     = this.k;
    list = list || 'main';
    node = node || document.getElementById(k('content__list__filters'));
    var filters  = _this.config.filters[list];
    var _filters = [];
    var filter   = function(column, title) {
      return template = 
      h('div', {}, title,
        h('input', {'id': k('content__list__filters__'+column), 'type': 'text', 'placeholder': title }),
        h('br')
      );
    };
    for (var i=0; i<filters.length; i++) {
      var config = filters[i].config;
      var title  = config.title || column
      var column = filters[i].column;
      _filters.push(filter(column, title));
    }
    h.render(h('div', {}, _filters), node);
    for (var i=0; i<filters.length; i++) {
      this.renderListFilter(list, filters[i].column, filters[i].config);
    }
  },
  renderListFilter: function(list, column, config) {
    var _this = this;
    var k     = this.k;
    list        = list || 'main';
    var options = {
      options: [],
      plugins: ['remove_button'],
      delimiter: '|',
      onChange: function(val) {
        _this.filterList(list);
      },
    };
    this.filters[list][column] = $(k('#content__list__filters__'+column)).selectize(options)[0].selectize;
  },
  setList: function(list, data) {
    var _this = this;
    var k     = this.k;
    data = data || this.getData();
    this.lists[list].updateSettings({ data: data });
  },
  setListColumns: function(list) {
    var _this = this;
    var k     = this.k;
    list      = list || 'main';
    var config = this.config.attrs;

    for (var attr in config) {
      if (config[attr].store && (config[attr].store.column === attr)) {
        var table   = config[attr].store.table; // {table:column}
        var data    = this.copyData(table);
        var columns = this.config.lists[list].columns;
        var source  = _.map(data, attr)
        var index   = _.findIndex(columns, { data: attr });
        columns[index].source = source
      }
    }
    this.lists[list].updateSettings(config);
  },
  setListColumnValue: function(list) {
    var _this = this;
    var k     = this.k;
  },
  setListFilters: function(list) {
    var _this = this;
    var k     = this.k;
    list      = list || 'main';
    for (var filter in this.filters[list]) {
      this.setListFilter(list, filter);
    }
  },
  setListFilter: function(list, column) {
    var _this = this;
    var k     = this.k;
    list       = list || 'main';
    var filter = this.filters[list][column];
    var data = _.union.apply({}, (
      _.chain(this.getData()).map(column).uniq().value()
      .map(function(el){ if (el && el.split) return el.split('|')}))
    ).map(function(el){ return {value: el, text: el} });

    filter.clearOptions();
    filter.addOption(data);
  },
  filterList: function(list) {
    var _this = this;
    var k     = this.k;
    list          = list || 'main';
    var filters   = {};
    var data      = this.getData();
    var filtered  = [];
    var all_blank = true;
    for (var filter in this.filters[list]) {
      filters[filter] = this.filters[list][filter].getValue().split('|');
      if (filters[filter].indexOf('') === -1) {
        all_blank = false
      }
    }
    if (all_blank) {
      filtered = data;
    } else {
      filtered = this.filterData(data, filters); 
    }
    filtered = this.calcData(filtered);
    this.setList(list, filtered);
  },
  action: function(param) {
    var _this = this;
    var k     = this.k;
    return param;
  },
};
for (var i in prototype) Template.prototype[i] = prototype[i];

module.exports = Template;

});
