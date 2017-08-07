
__require('app/entity/lib/entity/data', function(require, module, exports) {

var Store     = require('app/lib/store/axios');
var root      = require('app/root');

/** #e51e */
var Data = function() {
};
var prototype = {
  makeData: function() {
    var _this = this;
    var stores = this.config.stores
    for (var i in stores) {
      if (typeof stores[i] === 'string') {
        var url = root + '/data';
        var options = {
          'create':  url + '/create/'  + stores[i],
          'update':  url + '/update/'  + stores[i],
          'destroy': url + '/destroy/' + stores[i],
          'list':    url + '/list/'    + stores[i],
          'find':    url + '/find/'    + stores[i],
        };
        this.stores[i] = new Store('', options);
      } else {
        this.stores[i] = new Store('', stores[i].options);
      }
    }
  },
  getData: function() {
    var _this = this;
    var data  = this.copyData();
    for (var j in this.config.joins) {
      data = this.joinData.apply(this, Object.values(this.config.joins[j]))
    }
    data      = this.calcData(data);
    return data;
  },
  copyData: function(name) {
    var _this = this;
    var _name = name || 'main'
    var attrs = _.map(_.uniqBy(this.config.attrs, 'attr'), function(item) { return item.attr})
    var data  = [];
    if (this.data[_name]) data = _.sortBy(this.data[_name].slice(), 'id');
    var _data = [];
    for (var i=0; i<data.length; i++) {
      _data[i] = {};
      if (_name === 'main') {
        for (var j=0; j<attrs.length; j++) _data[i][attrs[j]] = null;
      }
      for (var j in data[i])             _data[i][j] = data[i][j];
    }
    return _data;
  },
  joinData: function(main_table, join_table, main_column, join_column, prefix) { 
    var _this = this;
    var main_table  = this.copyData(main_table);
    var join_table  = this.copyData(join_table);
    var _join_table = _.map(join_table, function(item) { 
      var _item = {};
      for (var i in item) _item[prefix+i] = item[i];
      return _item; 
    })
    var joined = _.map(main_table, function(item){
      return _.assign(item, _.find(_join_table, [prefix + join_column, item[main_column]]));
    });
    return joined;
  },
  calcData: function(data) {
    var _this = this;
    if (this.config.calc) {
      return this.config[this.config.calc](data);
    } else {
      return data;
    }
  },
  filterData: function(data, filters) {
    var _this = this;
    var filtered = [];
    var _filters = {};
    for (var filter in filters) {
      if (!(filters[filter].length === 1 && filters[filter][0] === '')) {
        _filters[filter] = filters[filter]
      }
    }

    var filterer = function(column, s) {
      var inside = false;

      return inside;
    }

    for (var i=0; i<data.length; i++) {
      var inside = true;
      for (var filter in _filters) {
        // ?
        // filterer(data[i][filter], filters[filter])
        var _data = (data[i][filter] + '').split('|');
        for (var j=0; j<_data.length; j++) {
          if ((filters[filter].indexOf(_data[j] + '') === -1)
            || (_data[j] === '')) {
            inside = false;
          } else {
            inside = true;
            break;
          }
        }
        // ?
        /* // OLD
        if ((filters[filter].indexOf(data[i][filter] + '') === -1)
          || (data[i][filter] === '')) {
          inside = false;
        }
        */
      }
      if (inside) filtered.push(data[i]);
    }
    return filtered;
  },
  findData: function(id, cb) {
    var _this = this;
    var _cb = function() {
      _this.stores.main.find(id, cb)
    }
    this.handle('find', {}, _cb);
  },
  listData: function(cb) {
    var _this = this;
    var _cb = function() {
      var ctr = 0;
      var stores = _this.config.stores;
      for (var i in stores) {
        var list = function(index) {
          _this.stores[index].list('', function(data) {
            ctr++;
            _this.data[index] = data
            if (cb && (ctr === Object.keys(stores).length)) {
              cb(_this.data.main);
            } 
          });
        }
        list(i)
      }
    }
    this.handle('list', {}, _cb);
  },
  createData: function(attrs, cb) {
    var _this = this;
    var _cb = function() {
      _this.stores.main.create(attrs, cb);
    }
    this.handle('create', attrs, _cb);
  },
  updateData: function(id, attrs, cb) {
    var _this = this;
    var _cb = function() {
      _this.stores.main.update(id, attrs, cb)
    }
    this.handle('update', attrs, _cb);
  },
  destroyData: function(id, cb) {
    var _this = this;
    var _cb = function() {
      _this.stores.main.destroy(id, cb)
    }
    this.handle('destroy', {}, _cb);
  },
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) Data.prototype[i] = prototype[i];

module.exports = Data;

});
