
;__c(function(){/*!

# Store Layer


## Static

**store/static.js**
```javascript
var Store = function() {
  var _this = this;
  this.id   = 0;
  this.data = [];
  this.boot();
};
var StorePrototype = {
  boot: function() {
    var _this = this;
  },
  list: function(where, cb) {
    var _this = this;
    var _data = this.data.slice();
    var data  = [];
    for (var i=0; i<_data.length; i++) {
      data[i] = {};
      for (var j in _data[i]) {
        data[i][j] = _data[i][j];
      }
    }
    if (typeof where === 'object') {
      if (cb) cb(this._query(where));
    } else {
      if (cb) cb(data);
    }
  },
  find: function(where, cb) {
    var _this = this;
    if (!(typeof where === 'object')) {
      where = {id: parseInt(where)};
    }
    if (cb) cb(this._query(where)[0]);
  },
  create: function(attrs, cb) {
    var _this = this;
    attrs.id = ++this.id;
    this.data.push(attrs);
    if (cb) cb(attrs)
  },
  update: function(where, attrs, cb) {
    var _this = this;
    var _data = [];
    if (!(typeof where === 'object')) {
      where = {id: parseInt(where)};
    }
    _data = this._query(where);
    for (var i=0; i<_data.length; i++) {
      for (var j in attrs) {
        _data[i][j] = attrs[j]
      }
    }
    if (cb) cb(_data)
  },
  destroy: function(where, cb) {
    var _this = this;
    var _data = [];
    if (!(typeof where === 'object')) {
      where = {id: parseInt(where)};
    }
    _data = this._query(where);
    for (var i=0; i<_data.length; i++) {
      for (var j=0; j<this.data.length; j++) {
        if (_data[i].id === this.data[j].id) {
          this.data.splice(j, 1);
          break;
        }
      }
    }
    if (cb) cb(_data)
  },
  import: function(data, cb) {
    var _this = this;
  },
  clear: function(cb) {
    var _this = this;
  },
  _query: function(where) {
    var _this = this;
    var _data = [];
    if (typeof where === 'object') {
      for (var i=0; i<this.data.length; i++) {
        var inside = true;
        for (var j in where) {
          if (
            (!this.data[i][j]) ||
            (this.data[i][j] && (this.data[i][j] !== where[j]))
          ) {
            inside = false;
          }
        }
        if (inside) _data.push(this.data[i]);
      }
    }
    return _data;
  },
  action: function(action) {
    var _this = this;
    return param;
  },
};
for (var i in StorePrototype) Store.prototype[i] = StorePrototype[i];
```

## HTTP (Axios)

**store/axios.js**
```javascript
var Store = function(src, options) {
  var _this = this;
  this.src     = src     || '';
  this.options = options || {};
  this.boot();
};
var StorePrototype = {
  boot: function() {
    // 
  },
  list: function(where, cb) {
    var _this = this;
    var url = this._buildRoute('list');
    if (typeof where === 'object') {
      url += this._buildWhere(where);
    }
    this._get(url, cb);
  },
  find: function(where, cb) {
    var _this = this;
    var url = this._buildRoute('find');
    if (typeof where === 'object') {
      url += this._buildWhere(where);
      this._get(url, cb);
    } else {
      this._get(url + '/' + where, cb);
    }
  },
  create: function(attrs, cb) {
    var _this = this;
    var url = this._buildRoute('create');
    this._post(url, attrs, cb);
  },
  update: function(where, attrs, cb) {
    var _this = this;
    var url = this._buildRoute('update');
    if (typeof where === 'object') {
      url += this._buildWhere(where);
      this._post(url, attrs, cb);
    } else {
      this._post(url + '/' + where, attrs, cb);
    }
  },
  destroy: function(where, cb) {
    var _this = this;
    var url = this._buildRoute('destroy');
    if (typeof where === 'object') {
      url += this._buildWhere(where);
      this._post(url, {}, cb);
    } else {
      this._post(url + '/' + where, {}, cb);
    }
  },
  _buildRoute: function(action) {
    var _this = this;
    var url = this.options[action] || (this.src + '/' + action);
    return url;
  },
  _buildWhere: function(where) {
    var _this = this;
    if ((typeof where === 'object') && (Object.keys(where).length !== 0)) {
      var _where = '?';
      for (var i in where) {
        _where += '&' + i + '=' + where[i];
      }
      return _where;
    }
    return '';
  },
  _get: function(url, cb) {
    var _this = this;
    axios.get(url)
    .then(function(response) {
      if (cb) cb(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
  },
  _post: function(url, attrs, cb) {
    var _this = this;
    var data = this._urlify(attrs);
    axios.post(url, data)
    .then(function(response) {
      if (cb) cb(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
  },
  _urlify: function(attrs) {
    var _this = this;
    var data = Object.keys(attrs).map(function(key) {
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(attrs[key]);
    }).join('&');
    return data;
  },
  action: function(param) {
    var _this = this;
    return param;
  }
};
for (var i in StorePrototype) Store.prototype[i] = StorePrototype[i];
```

## Firebase

**store/firebase.js**
```javascript
var Store = function(name, config) {
  var _this = this;
  this.name   = name;
  this.config = config;
  this.boot();
};
var StorePrototype = {
  boot: function() {
    var _this = this;
    firebase.initializeApp(this.config);
    this.db = firebase.database();
  },
  find: function(where, cb) {
    var _this = this;
    this.db.ref(this.name + '/' + where).once('value')
    .then(function(snap) {
      var item = snap.val();
      item.id  = snap.key;
      if (cb) cb(item);
    })
    .catch(function(e) {
      console.log(e)
      if (cb) cb(false);
    });
  },
  list: function(where, cb) {
    var _this = this;
    this.db.ref(this.name).once('value')
    .then(function(snap) {
      var items  = [];
      var _items = snap.val();
      for (var i in _items) {
        _items[i].id = i;
        items.push(_items[i]);
      }
      if (cb) cb(items);
    })
    .catch(function(e) {
      console.log(e)
      if (cb) cb(false);
    });
  },
  create: function(attrs, cb) {
    var _this = this;
    this.db.ref(this.name).push(attrs)
    .then(function(snap) {
      attrs.id = snap.key;
      if (cb) cb(attrs);
    })
    .catch(function(e) {
      console.log(e)
      if (cb) cb(false);
    });
  },
  update: function(where, attrs, cb) {
    var _this = this;
    this.db.ref(this.name + '/' + where).update(attrs)
    .then(function(snap) {
      attrs.id = where;
      if (cb) cb(attrs);
    })
    .catch(function(e) {
      console.log(e)
      if (cb) cb(false);
    });
  },
  destroy: function(where, cb) {
    var _this = this;
    this.db.ref(this.name + '/' + where).remove()
    .then(function(snap) {
      if (cb) cb(where);
    })
    .catch(function(e) {
      console.log(e)
      if (cb) cb(false);
    });
  },
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in StorePrototype) Store.prototype[i] = StorePrototype[i];
```

## IndexedDB (Dexie)

**store/dexie.js**
```javascript
var Store = function(name, options) {
  var _this = this;
  this.name    = name             || '';
  this.options = {
    db:          options.db       || {}, 
    versions:    options.versions || {}, 
    upgrade:     options.upgrade  || {},
  };
  this.db      = {};
  this.data    = {};
  this.boot();
};
var StorePrototype = {
  boot: function() {
    var _this = this;
    window.db_dexie = new Dexie(this.options.db);
    for (var version in this.options.versions) {
      window.db_dexie.version(version).stores(this.options.versions[version])
      .upgrade(this.options.upgrade[version] || function(t) {});
    }
    window.db_dexie.open().catch(function(e) {
      console.log(e);
    });
    this.db   = window.db_dexie;
    this.data = this.db[this.name];
  },
  list: function(where, cb) {
    var _this = this;
    var items = [];
    this.data.each(function(item){
      items.push(item)
    })
    .then(function(){
      if (cb) cb(items)
    })
    .catch(function(e) {
      console.log(e);
      if (cb) cb(false);
    });
  },
  find: function(where, cb) {
    var _this = this;
    this.data.get(parseInt(where))
    .then(function(item){
      if (cb) cb(item)
    })
    .catch(function(e) {
      console.log(e);
      if (cb) cb(false);
    });
  },
  create: function(attrs, cb) {
    var _this = this;
    this.data.add(attrs)
    .then(function(id) {
      attrs.id = id;
      if (cb) cb(attrs);
    })
    .catch(function(e) {
      console.log(e);
      if (cb) cb(false);
    });
  },
  update: function(where, attrs, cb) {
    var _this = this;
    this.data.update(parseInt(where), attrs)
    .then(function() {
      if (cb) cb(attrs);
    })
    .catch(function(e) {
      console.log(e);
      if (cb) cb(false);
    });
  },
  destroy: function(where, cb) {
    var _this = this;
    this.data.delete(parseInt(where))
    .then(function() {
      if (cb) cb(where);
    })
    .catch(function(e) {
      console.log(e);
      if (cb) cb(false);
    });
  },
  import: function(data, cb) {
    var _this = this;
  },
  clear: function(cb) {
    var _this = this;
  },
  action: function(action) {
    var _this = this;
    return param;
  },
};
for (var i in StorePrototype) Store.prototype[i] = StorePrototype[i];
```

[//]: # (@~|tech/store-layer|~@)

*/});
