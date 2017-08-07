
__require('app/entity/lib/entity/configure', function(require, module, exports) {

/** #e51e */
var Configure = function(prop) {
};
var prototype = {
  getConfigAttr: function(attr) {
    var _this = this;
    var index  = _.findIndex(this.config.attrs, { attr: attr });
    var config = this.config.attrs[index];
    return config;
  },
  getConfigInputUpdate: function(attr) {
    var _this = this;
    var index  = _.findIndex(this.config.inputs.update, { attr: attr });
    var config = this.config.inputs.update[index];
    return config;
  },
  configureLists: function(list, attrs, type) {
    var _this = this;
    type      = type || 'handsontable';
    switch(type) {
      case 'handsontable':
        this.configureListsHandonstable(list, attrs);
        break;
      default:
        this.configureListsHandonstable(list, attrs);
        break;
    }
  },
  configureListsHandonstable: function(list, attrs) {
    var _this = this;
    attrs = _this.config[attrs] || _this.config.attrs;
    var beforeChange = null;
    var afterChange  = null;
    var contextMenu  = null;
    var _config = {
      columns:         [ { data: 'id', editor: false, readOnly: true } ], 
      colHeaders:      [ 'ID' ], 
      colWidths:       [ 50 ],
    };
    for (var i=0; i < attrs.length; i++) {
      var _column  = attrs[i].list || {};
      var __column = {};
      var notallow = ['width', 'onChange'];
      for (var j in _column) {
        if (notallow.indexOf(j) === -1) {
          __column[j] = _column[j];
        }
      }
      __column.data = attrs[i].attr;
      if (attrs[i].list !== false) {
        _config.columns.push(__column);
        _config.colHeaders.push((attrs[i].title || attrs[i].attr));
        _config.colWidths.push((_column.width   || 100));
      }
    }
    var config = {
      data:               [],
      rowHeaders:         true, 
      colHeaders:         true,
      preventOverflow:    false,
      columnSorting:      true,
      sortIndicator:      true,
      manualColumnResize: true,
      manualRowResize:    true,
      columns:            _config.columns,
      colHeaders:         _config.colHeaders,
      colWidths:          _config.colWidths,
      beforeChange: beforeChange || function(changes, source) {
        // ? inefficient
        for (var i=0; i<changes.length; i++) {
          var config = _this.getConfigAttr(changes[i][1]);
          if (config.list && config.list.onChange) {
            config.list.onChange(changes[i], source);
          }
        }
        // ?
      },
      afterChange: afterChange || function(changes, source) {
        var ids  = []
        var data = [];
        if ((source === 'edit') || (source === 'CopyPaste.paste')) {
          var _data = {};
          for (var i=0; i<changes.length; i++) {
            var row   = changes[i][0]
            if (!_data[row]) _data[row] = {};
            var attr = changes[i][1];
            var val  = changes[i][3];
            _data[row][attr] = val
          }
          for (var i in _data) {
            var id = _this.lists.main.getDataAtCell(i,0);
            if (id) {
              _this.updateData(id, _data[i])
            } else {
              //_this.createData(_data[i])
            }
            //setTimeout(function(){_this.refresh()}, 1000)
          }
        } 
      },
      contextMenu: contextMenu || {
        callback: function(key, options) {
          var getIds = function() {
            var selected = _this.lists.main.getSelectedRange();
            var from     = selected.from.row
            var to       = selected.to.row
            var min      = from < to ? from : to;
            var max      = from > to ? from : to;
            var ids      = [];
            for (var i = min; i <= max; i++) {
              ids.push(_this.lists.main.getDataAtCell(i,0))
            }
            return ids;
          }

          switch (key) {
            case 'create':
              _this.launchCreate();
              break;
            case 'update':
              var ids = getIds();
              if (ids.length === 1) {
                var selected = _this.lists.main.getSelected();
                var index = selected[0];
                var id = _this.lists.main.getDataAtCell(index,0);
                _this.launchUpdate(id)
              } else {
                _this.notify('Select only 1 row', 'error'); // alert
              }
              break;
            case 'duplicate':
              var ids = getIds();
              _this.launchDuplicate(ids);
              break;
            case 'destroy':
              var ids = getIds();
              _this.launchDestroy(ids);
              break;
            case 'clipboard':
              var ids = getIds();
              _this.launchClipboard(ids);
              break;
            case 'export':
              var ids = getIds();
              _this.launchExport(ids);
              break;
            case 'import':
              var ids = getIds();
              _this.launchImport(ids);
              break;
            case 'email':
              break;
            case 'pdf':
              break;
            default:
              break;
          }
        },
        items:{
          'create':    { name: 'Create',    },
          'update':    { name: 'Update',    },
          'duplicate': { name: 'Duplicate', },
          'destroy':   { name: 'Destroy',   },
          'clipboard': { name: 'Clipboard', },
          'export':    { name: 'Export',    },
          'import':    { name: 'Import',    },
          /*
          'custom':    { name: 'Custom',    }, 
          'image':     { name: 'Image',     },
          'email':     { name: 'Email',     },
          'pdf':       { name: 'PDF',       },
          */
        },
      }
    }
    _this.config.lists.main = config;
    return config;
  },
  configureListColumns: function() {
    var _this = this;
  },
  configureListFilters: function(list, attrs) {
    var _this = this;
    attrs = attrs || _this.config.attrs;
    for (var i=0; i < attrs.length; i++) {
      var config = attrs[i].filter || {};
      var filter = {
        column: attrs[i].attr,
        config: {
          title:  (attrs[i].title  || attrs[i].attr),
        }
      }
      if (attrs[i].filter !== false) _this.config.filters.main.push(filter);
    }
  },
  configureForms: function() {
    var _this = this;
  },
  configureFormInputs: function(form, attrs) {
    var _this = this;
    attrs = attrs || _this.config.attrs;
    for (var i=0; i < attrs.length; i++) {
      var config = attrs[i].form || {};
      var input  = {
        column: attrs[i].attr,
        config: {
          title:  (attrs[i].title  || attrs[i].attr),
          type:   (config.type     || null),
          props:  (config.props    || null),
          custom: (config.custom   || null),
          //store:  (config.store    || null),
        }
      }
      if (attrs[i].form !== false) _this.config.inputs[form].push(input);
    }
  },
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) Configure.prototype[i] = prototype[i];

module.exports = Configure;

});
