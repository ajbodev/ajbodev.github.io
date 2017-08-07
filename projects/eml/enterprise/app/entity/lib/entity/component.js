
__require('app/entity/lib/entity/component', function(require, module, exports) {

/** #e51e */
var Component = function() {
};
var prototype = {
  mount: function(node) {
    var _this = this;
    this.render(node);
    this.make();
    this.refresh();this.refresh();
  },
  unmount: function() {
    var _this = this;
    this.unrender();
  },
  handle: function(action, params, cb) {
    var _this = this;
    if (this.config.handle) this.config.handle(action, params, cb);
    else cb();
  },
  notify: function(message, type) {
    $('.notifyjs-corner').html('')
    $.notify(message, {autoHideDelay: 2000, className: type, position: 'top center'});
  },
  dispatch: function() {
    var _this = this;
  },
  refresh: function() {
    var _this = this;
    var list  = 'main';
    this.resetForms();
    this.listData(function(data) {
      _this.setList(list);
      _this.setListColumns(list);
      _this.setListFilters(list);
      _this.setFormInputs();
      _this.setPivot();
      _this.hooks.refresh();
      _this.notify('Refresh', 'success')
    });
  },
  make: function() {
    var _this = this;
    var k     = this.k;
    this.makeRefreshable();
    this.makeCreatable();
    this.makeUpdatable();
    this.makeDuplicatable();
    this.makeDestroyable();
    this.makeClipboardable();
    this.makeExportable();
    this.makeImportable();
  },
  makeRefreshable: function() {
    var _this = this;
    var k     = this.k;
    this.bind(k('#content__refresh'), 'click', function(){
      _this.refresh();
    })
  },
  makeCreatable: function() {
    var _this = this;
    var k     = this.k;
    this.bind(k('.content__create'), 'click', function(){
      if (_this.validateForm('create')) {
        var inputs = _this.config.inputs.create;
        var attrs  = {};
        for (var i=0; i<inputs.length; i++) {
          var column    = inputs[i].column;
          attrs[column] = _this.getFormInputValue('create', column);
        }
        _this.createData(attrs, function(data) {
          _this.refresh();
        });
      }
    })
  },
  makeUpdatable: function() {
    var _this = this;
    var k     = this.k;
    this.bind(k('.content__update'), 'click', function(){
      if (_this.validateForm('update')) {
        var id     = _this.getFormInputValue('update', 'id');
        var inputs = _this.config.inputs.update;
        var attrs  = {};
        for (var i=0; i<inputs.length; i++) {
          var column    = inputs[i].column;
          attrs[column] = _this.getFormInputValue('update', column);
        }
        _this.updateData(id, attrs, function(data) {
          _this.refresh();
        });
      }
    })
  },
  makeDuplicatable: function() {
    var _this = this;
    var k     = this.k;
    this.bind(k('.content__duplicate'), 'click', function(){
      if (_this.validateForm('duplicate')) {
        var copy  = parseInt(_this.getFormInputValue('duplicate', 'copy'));
        var ids   = _this.getFormInputValue('duplicate', 'ids');
        var _ids  = ids.split(', ')
        var data  = _this.getData();
        var ctr   = 0;
        var _data = [];
        for (var i=0; i<data.length; i++) {
          if (_ids.indexOf(data[i].id+'') > -1) {
            delete data[i].id;
            if (_this.config.forms.duplicatable) {
              for (var j in data[i]) {
                if (_this.config.forms.duplicatable.indexOf(j) === -1) {
                  delete data[i][j];
                }
              }
            }
            for (var j=0; j<copy; j++) {
              var cb    = function() {}
              if ((ctr === _ids.length-1) && (j === copy-1)) {
                cb = function() { _this.refresh(); }
              }
              var _attrs = {};
              for (var k in data[i]) _attrs[k] = data[i][k];
              _this.createData(_attrs, cb);
            }
            ctr++;
          }
        }
      }
    })
  },
  makeDestroyable: function() {
    var _this = this;
    var k     = this.k;
    this.bind(k('.content__destroy'), 'click', function(){
      var ids   = _this.getFormInputValue('destroy', 'ids');
      var _ids  = ids.split(', ')
      for (var i=0; i<_ids.length; i++) {
        var cb = function() {}
        if (i === _ids.length-1) cb = function() { _this.refresh(); }
        _this.destroyData(_ids[i], cb);
      }
    })
  },
  makeClipboardable: function() {
    var _this = this;
    var k     = this.k;
    var clipboard = new Clipboard(k('.content__clipboard'));
    clipboard.on('success', function(e) {
        _this.resetForm('clipboard')
        e.clearSelection();
    });
    clipboard.on('error', function(e) {
        console.log(e)
    });
  },
  makeExportable: function() {
    var _this = this;
    var k = this.k;
    this.bind(k('.content__export'), 'click', function(){
      if (_this.validateForm('export')) {
        var format = _this.getFormInputValue('export', 'format');
        var ids    = _this.getFormInputValue('export', 'ids');
        var _ids   = ids.split(', ')
        var data   = _this.getData().filter(function(el,i){
          return (_ids.indexOf(el.id + '') > -1);
        })
        var _data  = '';
        var _type  = '';
        var _ext   = '';
        switch (format) {
          case 'json':
            _data = JSON.stringify(data)
            _type = 'application/json';
            _ext  = '.json'
            break;
          case 'csv':
            for (var i=0; i<data.length; i++) {
              var header = i === 0 ? true : false;
              var row = Papa.unparse([data[i]], {
                quotes:    false,  quoteChar: '"',
                delimiter: ',',   header:    header, 
              })
              row = row.replace(/\n/g, '\\n')
              if (i === 0) row = row.replace(/\\n/, '')
              _data += row + '\n';
            }
            _type = 'text/csv';
            _ext  = '.csv'
            break;
        }
        var blob  = new Blob([_data], {  type: _type + ';charset=utf-8' });
        var name  = _this.config.title.toLowerCase().split(' ').join('-') + '_' + 
          moment().format('YYYY-MM-DD-Hmma') + _ext
        saveAs(blob, name);
        _this.resetForm('export')
      }
    })
  },
  makeImportable: function() {
    var _this = this;
    var k = this.k;
    this.bind(k('.content__import'), 'click', function(){
      if (_this.validateForm('import')) {
        _this.temp.import.map(function(el, i) { 
          _this.createData(el, function() {
            if (i === _this.temp.import.length -1) _this.refresh()
          })
        })
      }
    })

    document.getElementById(k('content__form__import__file'))
    .addEventListener('change', function(e) {
      var file = e.target.files[0]; 
      if (file) {
        var r = new FileReader();
        r.onload = function(e) { 
          var data    = e.target.result;
          var _data   = [];
          var format  = _this.getFormInputValue('import', 'format');
          switch (format) {
            case 'json':
              _data = JSON.parse(data)
              _this.setFormInputValue('import', 'count', _data.length)
              _this.temp.import = _data.map(function(el, i) { 
                delete el.id; 
                return el;
              })

              break;
            case 'csv':
              /* 
              _data   = data.split('\n')
              _header = _data[0]
              for (var i=1; i<_data.length; i++) {
                var __data = (_header + '\n' + _data[i])
                var result = Papa.parse(__data, {
                  delimiter: ',', header: false
                }).data
                console.log(result, __data)
              }
              //_data.map(function(el, i) { delete el.id; })
              */
              break;
          }
        }
        r.readAsText(file);
      }
    }, false);
  },
  /**
   * Action
   * 
   * @vendors 
   * @param   {String} param - Parameter
   * @return  {String} param - Parameter
   */
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) Component.prototype[i] = prototype[i];

module.exports = Component;

});
