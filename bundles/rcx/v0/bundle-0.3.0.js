/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var index, Component, component;
	index = __webpack_require__(1);
	Component = __webpack_require__(20);
	component = new Component(index);
	window.app = {
	  component: component
	};
	component.debug = window._meta['rcx'].debug;
	component.init();
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\index\jquery\index.ls.map


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var lib, index;
	window._meta = __webpack_require__(2);
	lib = __webpack_require__(3);
	index = {
	  Stores: __webpack_require__(8),
	  templates: __webpack_require__(16),
	  samples: lib.samples,
	  props: lib.props,
	  debug: window._meta['x+1'].debug
	};
	if (true) {
	  module.exports = index;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\index\lib\index.ls.map


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"x+1": {
			"version": "0.68.0",
			"debug": true,
			"dir": "../../"
		},
		"rcx": {
			"version": "0.3.0",
			"debug": true,
			"dir": "../../"
		},
		"modern-hrm": {
			"version": "0.1.0",
			"debug": true,
			"dir": "../../"
		}
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var lib;
	lib = {
	  props: {
	    _title: 'rcx',
	    boot: __webpack_require__(4),
	    main: __webpack_require__(5),
	    admin: __webpack_require__(6),
	    util: __webpack_require__(7)
	  }
	};
	if (true) {
	  module.exports = lib;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\index\lib\index\lib.ls.map


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var props;
	props = {
	  layout: {
	    id: 'content__layout__select',
	    options: [
	      {
	        value: 'Layout - Split'
	      }, {
	        value: 'Layout - Split VTab'
	      }, {
	        value: 'Layout - Combined'
	      }
	    ]
	  },
	  options: {
	    store_data_main: {
	      id: 'content__option__store__data__main',
	      config: 'store_data_main',
	      options: [
	        {
	          value: 'Static'
	        }, {
	          value: 'Browser (LocalStorage)'
	        }, {
	          value: 'Browser (IndexedDB)'
	        }, {
	          value: 'Server (AJAX)'
	        }, {
	          value: 'Server (DOM)'
	        }, {
	          value: 'Cloud (Firebase)'
	        }
	      ],
	      inputs: ['db_url', 'table']
	    },
	    store_repo_main: {
	      id: 'content__option__store__repo__main',
	      config: 'store_repo_main',
	      options: [
	        {
	          value: 'Static'
	        }, {
	          value: 'Browser (LocalStorage)'
	        }, {
	          value: 'Browser (IndexedDB)'
	        }, {
	          value: 'Server (AJAX)'
	        }, {
	          value: 'Server (DOM)'
	        }, {
	          value: 'Cloud (Firebase)'
	        }
	      ],
	      inputs: ['db_url', 'table']
	    },
	    store_data_app: {
	      id: 'content__option__store__data__app',
	      config: 'store_data_app',
	      options: [
	        {
	          value: 'Static'
	        }, {
	          value: 'Browser (LocalStorage)'
	        }, {
	          value: 'Browser (IndexedDB)'
	        }, {
	          value: 'Server (AJAX)'
	        }, {
	          value: 'Server (DOM)'
	        }, {
	          value: 'Cloud (Firebase)'
	        }
	      ],
	      inputs: ['db_url', 'table']
	    },
	    run_preprocessor_less: {
	      id: 'content__option__run__less',
	      title: 'Less'
	    },
	    run_preprocessor_sass: {
	      id: 'content__option__run__sass',
	      title: 'Sass'
	    },
	    run_preprocessor_styl: {
	      id: 'content__option__run__styl',
	      title: 'Stylus'
	    },
	    run_transpiler_babel: {
	      id: 'content__option__run__babel',
	      title: 'Babel'
	    },
	    run_transpiler_ts: {
	      id: 'content__option__run__ts',
	      title: 'TypeScript'
	    },
	    run_transpiler_cs: {
	      id: 'content__option__run__cs',
	      title: 'CoffeeScript'
	    },
	    run_database_sql: {
	      id: 'content__option__run__sql',
	      title: 'SQL'
	    },
	    run_database_mongo: {
	      id: 'content__option__run__mongo',
	      title: 'Mongo'
	    },
	    run_lang_php: {
	      id: 'content__option__run__php',
	      title: 'PHP'
	    },
	    run_lang_ruby: {
	      id: 'content__option__run__ruby',
	      title: 'Ruby'
	    },
	    run_lang_python: {
	      id: 'content__option__run__python',
	      title: 'Python'
	    },
	    run_music_abc: {
	      id: 'content__option__run__abc',
	      title: 'ABC'
	    }
	  }
	};
	if (true) {
	  module.exports = props;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\lib\props\boot.ls.map


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var props;
	props = {
	  editors: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__editor',
	        type: 'text/x-markdown',
	        ext: 'md',
	        onChange: 'inputOnEditorChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__editor',
	        type: 'text/html',
	        ext: 'html'
	      }
	    }
	  },
	  files: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__file',
	        options: [
	          {
	            value: 'index'
	          }, {
	            value: 'config'
	          }
	        ],
	        onChange: 'inputOnFileChange',
	        onCreate: 'inputOnFileCreate',
	        destroyable: 'inputDestroy'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__file',
	        options: [{
	          value: 'index'
	        }]
	      }
	    }
	  },
	  exts: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__ext',
	        options: [
	          {
	            value: 'txt'
	          }, {
	            value: 'html'
	          }, {
	            value: 'js'
	          }, {
	            value: 'css'
	          }, {
	            value: 'md'
	          }, {
	            value: '++.md'
	          }, {
	            value: 'remark.md'
	          }, {
	            value: 'jade'
	          }, {
	            value: 'less'
	          }, {
	            value: 'sass'
	          }, {
	            value: 'styl'
	          }, {
	            value: 'ls'
	          }, {
	            value: 'cs'
	          }, {
	            value: 'babel.js'
	          }, {
	            value: 'ts'
	          }, {
	            value: 'json'
	          }, {
	            value: 'yaml'
	          }, {
	            value: 'xml'
	          }, {
	            value: 'sql'
	          }, {
	            value: 'mongo.js'
	          }, {
	            value: 'php'
	          }, {
	            value: 'py'
	          }, {
	            value: 'rb'
	          }, {
	            value: 'abc'
	          }, {
	            value: 'ashx'
	          }, {
	            value: 'java'
	          }, {
	            value: 'go'
	          }, {
	            value: 'rust'
	          }
	        ],
	        onChange: 'inputOnExtChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__ext',
	        options: [
	          {
	            value: 'txt'
	          }, {
	            value: 'html'
	          }, {
	            value: 'js'
	          }, {
	            value: 'css'
	          }, {
	            value: 'md'
	          }, {
	            value: '++.md'
	          }, {
	            value: 'remark.md'
	          }, {
	            value: 'jade'
	          }, {
	            value: 'less'
	          }, {
	            value: 'sass'
	          }, {
	            value: 'styl'
	          }, {
	            value: 'ls'
	          }, {
	            value: 'cs'
	          }, {
	            value: 'babel.js'
	          }, {
	            value: 'ts'
	          }, {
	            value: 'json'
	          }, {
	            value: 'yaml'
	          }, {
	            value: 'xml'
	          }, {
	            value: 'sql'
	          }, {
	            value: 'mongo.js'
	          }, {
	            value: 'php'
	          }, {
	            value: 'py'
	          }, {
	            value: 'rb'
	          }, {
	            value: 'abc'
	          }, {
	            value: 'ashx'
	          }, {
	            value: 'java'
	          }, {
	            value: 'go'
	          }, {
	            value: 'rust'
	          }
	        ],
	        onChange: 'outputOnExtChange'
	      }
	    }
	  },
	  modes: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__mode',
	        options: [
	          {
	            value: 'text/plain'
	          }, {
	            value: 'text/html'
	          }, {
	            value: 'text/javascript'
	          }, {
	            value: 'text/css'
	          }, {
	            value: 'text/x-markdown'
	          }, {
	            value: 'text/x-jade'
	          }, {
	            value: 'text/x-less'
	          }, {
	            value: 'text/x-sass'
	          }, {
	            value: 'text/x-styl'
	          }, {
	            value: 'text/x-livescript'
	          }, {
	            value: 'text/x-coffeescript'
	          }, {
	            value: 'text/typescript'
	          }, {
	            value: 'text/jsx'
	          }, {
	            value: 'application/x-json'
	          }, {
	            value: 'text/x-yaml'
	          }, {
	            value: 'text/xml'
	          }, {
	            value: 'text/x-sql'
	          }, {
	            value: 'text/x-php'
	          }, {
	            value: 'text/x-ruby'
	          }, {
	            value: 'text/x-python'
	          }, {
	            value: 'text/x-abc'
	          }, {
	            value: 'text/x-csharp'
	          }, {
	            value: 'text/x-java'
	          }, {
	            value: 'text/x-go'
	          }, {
	            value: 'text/x-rust'
	          }
	        ],
	        onChange: 'inputOnModeChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__mode',
	        options: [
	          {
	            value: 'text/plain'
	          }, {
	            value: 'text/html'
	          }, {
	            value: 'text/javascript'
	          }, {
	            value: 'text/css'
	          }, {
	            value: 'text/x-markdown'
	          }, {
	            value: 'text/x-jade'
	          }, {
	            value: 'text/x-less'
	          }, {
	            value: 'text/x-sass'
	          }, {
	            value: 'text/x-styl'
	          }, {
	            value: 'text/x-livescript'
	          }, {
	            value: 'text/x-coffeescript'
	          }, {
	            value: 'text/typescript'
	          }, {
	            value: 'text/jsx'
	          }, {
	            value: 'application/x-json'
	          }, {
	            value: 'text/x-yaml'
	          }, {
	            value: 'text/xml'
	          }, {
	            value: 'text/x-sql'
	          }, {
	            value: 'text/x-php'
	          }, {
	            value: 'text/x-ruby'
	          }, {
	            value: 'text/x-python'
	          }, {
	            value: 'text/x-abc'
	          }, {
	            value: 'text/x-csharp'
	          }, {
	            value: 'text/x-java'
	          }, {
	            value: 'text/x-go'
	          }, {
	            value: 'text/x-rust'
	          }
	        ],
	        onChange: 'outputOnModeChange'
	      }
	    }
	  },
	  lint: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__lint',
	        onChange: 'inputOnLintChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__lint',
	        onChange: 'outputOnLintChange'
	      }
	    }
	  },
	  result: {
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__result',
	        options: [
	          {
	            value: 'frame'
	          }, {
	            value: 'editor'
	          }
	        ],
	        onChange: 'outputOnResultChange'
	      }
	    }
	  },
	  urlhash: {
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__urlhash',
	        options: [{
	          value: '#/'
	        }],
	        onChange: 'outputOnUrlhashChange',
	        onCreate: 'outputOnUrlhashCreate'
	      }
	    }
	  }
	};
	if (true) {
	  module.exports = props;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\lib\props\main.ls.map


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var props;
	props = {
	  value: {
	    id: 'content__value'
	  },
	  route: {
	    routes: {
	      '/id/:id': 'routeOnId',
	      '/tree/?((w|.)*)': 'routeOnTree',
	      '/data/create': 'routeOnDataCreate',
	      '/data/list': 'routeOnDataList',
	      '/data/destroy/:id': 'routeOnDataDestroy'
	    }
	  },
	  src: {
	    id: 'content__src',
	    options: [
	      {
	        value: 'main_data'
	      }, {
	        value: 'main_repo'
	      }, {
	        value: 'main_input'
	      }, {
	        value: 'app_data'
	      }
	    ],
	    onChange: 'srcOnChange'
	  },
	  sample: {
	    ids: ['content__sample__list', 'content__sample__tree'],
	    options: [
	      {
	        value: 'md'
	      }, {
	        value: 'html_css_js'
	      }, {
	        value: 'jade_css_ls'
	      }
	    ]
	  },
	  tree: {
	    'default': {
	      id: 'content__tree',
	      eventable: 'treeMainDataMakeEventable',
	      searchable: 'treeMainDataMakeSearchable',
	      refreshable: 'treeMainDataMakeRefreshable'
	    }
	  },
	  list: {
	    'default': {
	      id: 'content__list',
	      creatable: 'listMainDataMakeCreatable',
	      destroyable: 'listMainDataMakeDestroyable',
	      searchable: 'listMainDataMakeSearchable',
	      refreshable: 'listMainDataMakeRefreshable',
	      editable: 'listMainDataMakeEditable',
	      checkallable: 'listMainDataMakeCheckallable'
	    }
	  },
	  reports: {},
	  calendar: {}
	};
	if (true) {
	  module.exports = props;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\lib\props\admin.ls.map


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var props;
	props = {
	  formats: {
	    inputs: {
	      notes: {
	        context: 'inputs',
	        entity: 'notes',
	        id: 'content__input__notes__format',
	        options: [
	          {
	            value: 'editor'
	          }, {
	            value: 'json'
	          }, {
	            value: 'zip'
	          }
	        ]
	      }
	    },
	    admin: {
	      'default': {
	        context: 'datas',
	        entity: 'main',
	        id: 'content__admin__format',
	        options: [{
	          value: 'json'
	        }]
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__format',
	        options: [
	          {
	            value: 'editor'
	          }, {
	            value: 'frame'
	          }
	        ]
	      }
	    },
	    app: {
	      'default': {
	        context: 'datas',
	        entity: 'app',
	        id: 'content__app__format',
	        options: [
	          {
	            value: 'value'
	          }, {
	            value: 'table'
	          }, {
	            value: 'db'
	          }
	        ]
	      }
	    }
	  }
	};
	if (true) {
	  module.exports = props;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\lib\props\util.ls.map


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Stores;
	Stores = {
	  'static': __webpack_require__(9),
	  indexeddb: __webpack_require__(10),
	  localstorage: __webpack_require__(12),
	  ajax: __webpack_require__(14),
	  firebase: __webpack_require__(15)
	};
	if (true) {
	  module.exports = Stores;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\index\lib\index\stores.ls.map


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Store;
	Store = function(o){
	  this.db_url = o.db_url || null;
	  this.table = o.table || null;
	  this.id = 0;
	  this.list = [];
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    var item;
	    if (!attrs.id) {
	      attrs.id = ++this.id;
	    } else {
	      attrs.id = parseInt(attrs.id);
	    }
	    this.list.push(attrs);
	    item = attrs;
	    if (cb) {
	      cb(item);
	    }
	  },
	  find: function(id, cb){
	    var item, idInt, i$, ref$, len$;
	    item = {};
	    idInt = parseInt(id);
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, ref$[i$]));
	    }
	    if (cb) {
	      cb(item);
	    }
	    function fn$(el){
	      if (el.id === idInt) {
	        item = el;
	      }
	    }
	  },
	  findAll: function(cb){
	    if (cb) {
	      cb(this.list);
	    }
	    this.list;
	  },
	  findByAttr: function(attr, value, cb){
	    var item, i$, ref$, len$;
	    item = {};
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, ref$[i$]));
	    }
	    if (cb) {
	      cb(item);
	    }
	    function fn$(el){
	      if (el[attr] === value) {
	        item = el;
	      }
	    }
	  },
	  update: function(id, attrs, cb){
	    var item, idInt, i$, ref$, len$;
	    item = {};
	    idInt = parseInt(id);
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    if (cb) {
	      cb(item);
	    }
	    function fn$(i, el){
	      var key;
	      if (el.id === idInt) {
	        for (key in attrs) {
	          if (key === 'id') {
	            this.list[i][key] = parseInt(attrs[key]);
	          } else {
	            this.list[i][key] = attrs[key];
	          }
	        }
	        item = this.list[i];
	      }
	    }
	  },
	  destroy: function(id, cb){
	    var item, index, idInt, i$, ref$, len$;
	    item = {};
	    index = -1;
	    idInt = parseInt(id);
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    if (index > -1) {
	      this.list.splice(index, 1);
	    }
	    id = idInt;
	    if (cb) {
	      cb(id);
	    }
	    function fn$(i, el){
	      if (el.id === idInt) {
	        index = i;
	        item = el;
	      }
	    }
	  },
	  importTable: function(table, list, cb){
	    var i$, len$, i, el;
	    this.id = 0;
	    this.list = [];
	    for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	      i = i$;
	      el = list[i$];
	      if (!el.id) {
	        el.id = ++this.id;
	      } else {
	        ++this.id;
	        el.id = parseInt(el.id);
	      }
	      this.list.push(el);
	    }
	    if (cb) {
	      cb();
	    }
	  },
	  importDb: function(db, cb){
	    if (cb) {
	      cb();
	    }
	  },
	  groupByKey: function(key, cb){
	    var group, i$, ref$, len$;
	    group = {};
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    for (i$ in group) {
	      (fn1$.call(this, i$, group[i$]));
	    }
	    if (cb) {
	      cb(group);
	    }
	    function fn$(i, el){
	      group[el[key]] = {
	        count: 0
	      };
	    }
	    function fn1$(index, obj){
	      var i$, ref$, len$;
	      for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, ref$[i$]));
	      }
	      function fn$(i, el){
	        if (el[key] === index) {
	          group[index].count++;
	        }
	      }
	    }
	  },
	  autoload: function(component, checked){
	    var load;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      clearTimeout(component.delays.load);
	      component.loadByIdAuto();
	      component.delays.load = setTimeout(function(){
	        load();
	      }, 1000);
	    };
	    if (component.id && checked) {
	      load();
	    } else {
	      clearTimeout(component.delays.load);
	    }
	  }
	};
	if (true) {
	  module.exports = Store;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\store\static\js\store.ls.map


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Store;
	__webpack_require__(11);
	Store = function(o){
	  this.db_url = window.db_dexie[o.db_url];
	  this.table = o.table;
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    this.db_url[this.table].add(attrs).then(function(id){
	      var item;
	      attrs.id = id;
	      item = attrs;
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  find: function(id, cb){
	    var idInt;
	    idInt = parseInt(id);
	    this.db_url[this.table].get(idInt, function(item){
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  findByAttr: function(attr, value, cb){
	    var idInt;
	    idInt = parseInt(id);
	    this.db_url[this.table].get(idInt, function(item){
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  findAll: function(cb){
	    var items;
	    items = [];
	    this.db_url[this.table].each(function(item){
	      items.push(item);
	    }).then(function(){
	      if (cb) {
	        cb(items);
	      }
	    });
	  },
	  update: function(id, attrs, cb){
	    var idInt;
	    idInt = parseInt(id);
	    attrs.id = idInt;
	    this.db_url[this.table].update(idInt, attrs).then(function(){
	      var item;
	      attrs.id = idInt;
	      item = attrs;
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  destroy: function(id, cb){
	    var idInt;
	    idInt = parseInt(id);
	    this.db_url[this.table]['delete'](idInt).then(function(){
	      var id;
	      id = idInt;
	      if (cb) {
	        cb(id);
	      }
	    });
	  },
	  importTable: function(table, list, cb){
	    var _this;
	    _this = this;
	    this.db_url.transaction('rw', this.table, function(){
	      return _this.db_url[_this.table].clear();
	    }).then(function(){
	      var i$, ref$, len$, i, el;
	      for (i$ = 0, len$ = (ref$ = list).length; i$ < len$; ++i$) {
	        i = i$;
	        el = ref$[i$];
	        _this.db_url[_this.table].put(el);
	      }
	    }).then(function(){
	      cb();
	    });
	  },
	  importDb: function(lists, cb){},
	  groupByKey: function(key, cb){
	    var _this, group;
	    _this = this;
	    group = {};
	    this.db_url[this.table].orderBy(key).uniqueKeys().then(function(keys){
	      var i$, len$, results$ = [];
	      group[''] = {
	        count: 0
	      };
	      for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
	        results$.push((fn$.call(this, i$, keys[i$])));
	      }
	      return results$;
	      function fn$(index, key){
	        return group[key] = {
	          count: 0
	        };
	      }
	    }).then(function(){
	      return _this.db_url[_this.table].each(function(item){
	        group[item[key] || ''].count++;
	      });
	    }).then(function(){
	      cb(group);
	    });
	  },
	  autoload: function(component, checked){
	    var load;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      clearTimeout(component.delays.load);
	      component.loadByIdAuto();
	      component.delays.load = setTimeout(function(){
	        load();
	      }, 1000);
	    };
	    if (component.id && checked) {
	      load();
	    } else {
	      clearTimeout(component.delays.load);
	    }
	  }
	};
	if (true) {
	  module.exports = Store;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\store\browser\indexeddb-dexie\store.ls.map


/***/ },
/* 11 */
/***/ function(module, exports) {

	window.db_dexie = {
	  rcx: new Dexie('rcx'),
	  _schemas: {
	    rcx: {}
	  },
	  _table: {
	    rcx: {}
	  },
	  _version: function(db, version, schema){
	    window.db_dexie._schemas[db][version] = schema;
	  },
	  _init: function(db){
	    var version, ref$, schema;
	    for (version in ref$ = window.db_dexie._schemas[db]) {
	      schema = ref$[version];
	      window.db_dexie[db].version(version).stores(schema);
	    }
	    window.db_dexie[db].open();
	  }
	};
	window.db_dexie._version('rcx', 1, {
	  data: '++id, name'
	});
	window.db_dexie._init('rcx');
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\store\browser\indexeddb-dexie\store-db.ls.map


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var Store;
	__webpack_require__(13);
	Store = function(o){
	  this.db_url = window.db_lowdb;
	  this.table = o.table;
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    var item;
	    item = _.insert(this.db_url(this.table).value(), attrs);
	    this.db_url.write();
	    if (cb) {
	      cb(item);
	    }
	  },
	  find: function(id, cb){
	    var item;
	    item = _.getById(this.db_url(this.table).value(), id);
	    if (cb) {
	      cb(item);
	    }
	  },
	  findByAttr: function(attr, value, cb){
	    var idInt;
	    idInt = parseInt(id);
	    this.db_url[this.table].get(idInt, function(item){
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  findAll: function(cb){
	    var items;
	    items = [];
	    items = this.db_url(this.table).value();
	    if (cb) {
	      cb(items);
	    }
	  },
	  update: function(id, attrs, cb){
	    var item;
	    item = _.updateById(this.db_url(this.table).value(), id, attrs);
	    this.db_url.write();
	    if (cb) {
	      cb(item);
	    }
	  },
	  destroy: function(id, cb){
	    var item;
	    item = _.removeById(this.db_url(this.table).value(), id);
	    this.db_url.write();
	    if (cb) {
	      cb(item.id);
	    }
	  },
	  importTable: function(table, list, cb){
	    this.db_url.object[this.table] = list;
	    this.db_url.write();
	    if (cb) {
	      cb();
	    }
	  },
	  importDb: function(lists, cb){
	    var i$;
	    this.db_url.object = {};
	    for (i$ in lists) {
	      (fn$.call(this, i$, lists[i$]));
	    }
	    this.db_url.write();
	    if (cb) {
	      cb();
	    }
	    function fn$(i, el){
	      this.db_url.object[i] = el;
	    }
	  },
	  exportDb: function(cb){
	    var lists;
	    lists = this.db_url.object;
	    if (cb) {
	      cb(lists);
	    }
	  },
	  groupByKey: function(key, cb){
	    var _this, group;
	    _this = this;
	    group = {};
	    this.db_url[this.table].orderBy(key).uniqueKeys().then(function(keys){
	      var i$, len$, results$ = [];
	      group[''] = {
	        count: 0
	      };
	      for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
	        results$.push((fn$.call(this, i$, keys[i$])));
	      }
	      return results$;
	      function fn$(index, key){
	        return group[key] = {
	          count: 0
	        };
	      }
	    }).then(function(){
	      return _this.db_url[_this.table].each(function(item){
	        group[item[key] || ''].count++;
	      });
	    }).then(function(){
	      cb(group);
	    });
	  },
	  autoload: function(component, checked){
	    var load;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      clearTimeout(component.delays.load);
	      component.loadByIdAuto();
	      component.delays.load = setTimeout(function(){
	        load();
	      }, 1000);
	    };
	    if (component.id && checked) {
	      load();
	    } else {
	      clearTimeout(component.delays.load);
	    }
	  }
	};
	if (true) {
	  module.exports = Store;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\store\browser\localstorage-lowdb\store.ls.map


/***/ },
/* 13 */
/***/ function(module, exports) {

	window.db_lowdb = low('rcx', {
	  storage: low.localStorage
	});
	window.db_lowdb._.mixin(window._);
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\store\browser\localstorage-lowdb\store-db.ls.map


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var Store;
	Store = function(o){
	  this.db_url = o.db_url;
	  this.table = o.table || null;
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    $.post(this.db_url + '/create', attrs, function(item){
	      if (cb) {
	        cb(JSON.parse(item));
	      }
	    });
	  },
	  find: function(id, cb){
	    $.get(this.db_url + '/find/' + id, function(data){
	      if (cb) {
	        cb(JSON.parse(data));
	      }
	    });
	  },
	  findAll: function(cb){
	    $.get(this.db_url + '/find-all/', function(data){
	      if (cb) {
	        cb(JSON.parse(data));
	      }
	    });
	  },
	  update: function(id, attrs, cb){
	    attrs.id = id;
	    $.post(this.db_url + '/update', attrs, function(item){
	      if (cb) {
	        cb(JSON.parse(item));
	      }
	    });
	  },
	  destroy: function(id, cb){
	    return $.post(this.db_url + '/destroy', {
	      id: id
	    }, function(item){
	      if (cb) {
	        cb(JSON.parse(item));
	      }
	    });
	  },
	  groupByKey: function(key, cb){
	    this.findAll(function(data){
	      var group, i$, len$;
	      group = {};
	      for (i$ = 0, len$ = data.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, data[i$]));
	      }
	      for (i$ in group) {
	        (fn1$.call(this, i$, group[i$]));
	      }
	      if (cb) {
	        cb(group);
	      }
	      function fn$(i, el){
	        group[el[key]] = {
	          count: 0
	        };
	      }
	      function fn1$(index, obj){
	        var i$, ref$, len$;
	        for (i$ = 0, len$ = (ref$ = data).length; i$ < len$; ++i$) {
	          (fn$.call(this, i$, ref$[i$]));
	        }
	        function fn$(i, el){
	          if (el[key] === index) {
	            group[index].count++;
	          }
	        }
	      }
	    });
	  },
	  importTable: function(table, cb){
	    table = JSON.stringify(table);
	    $.post(this.db_url + '/import-table', {
	      table: table
	    }, function(){
	      if (cb) {
	        cb();
	      }
	    });
	  },
	  importDb: function(db, cb){
	    db = JSON.stringify(db);
	    $.post(this.db_url + '/import-db', {
	      db: db
	    }, function(){
	      if (cb) {
	        cb();
	      }
	    });
	  },
	  autoload: function(component, checked){
	    var load;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      clearTimeout(component.delays.load);
	      component.loadByIdAuto();
	      component.delays.load = setTimeout(function(){
	        load();
	      }, 1000);
	    };
	    if (component.id && checked) {
	      load();
	    } else {
	      clearTimeout(component.delays.load);
	    }
	  }
	};
	if (true) {
	  module.exports = Store;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\store\server\ajax-jquery\store.ls.map


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var Store;
	Store = function(o){
	  this.db_url = new Firebase(o.db_url);
	  this.table = o.table;
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    var _this, id;
	    _this = this;
	    id = this.db_url.child(this.table).push(attrs, function(e){
	      var item;
	      attrs.id = id.key();
	      _this.db_url.child(_this.table).child(attrs.id).update(attrs);
	      item = attrs;
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  find: function(id, cb){
	    this.db_url.child(this.table).child(id).once('value', function(snapshot){
	      var item;
	      item = snapshot.val();
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  findAll: function(cb){
	    var _this;
	    _this = this;
	    this.db_url.once('value', function(snapshot){
	      var val, items;
	      val = snapshot.val();
	      items = $.map(val[_this.table], function(value, index){
	        value.id = index;
	        return [value];
	      });
	      if (cb) {
	        cb(items);
	      }
	    });
	  },
	  findByAttr: function(attr, value, cb){},
	  update: function(id, attrs, cb){
	    var item;
	    this.db_url.child(this.table).child(id).update(attrs);
	    attrs.id = id;
	    item = attrs;
	    if (cb) {
	      cb(item);
	    }
	  },
	  destroy: function(id, cb){
	    this.db_url.child(this.table).child(id).remove();
	    if (cb) {
	      cb(id);
	    }
	  },
	  importTable: function(table, cb){},
	  groupByKey: function(key, cb){},
	  autoload: function(component, checked){
	    var load, db_url, table;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      component.loadByIdAuto();
	    };
	    db_url = component.config.store_data_main.firebase.db_url;
	    table = component.config.store_data_main.firebase.table;
	    component.child = new Firebase(db_url + '/' + table + '/' + component.id.main);
	    if (component.id && checked) {
	      component.child.on('value', load);
	    } else {
	      component.child.off('value', load);
	    }
	  }
	};
	if (true) {
	  module.exports = Store;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\store\cloud\firebase\store.ls.map


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var templates;
	templates = {
	  layout: {
	    split: __webpack_require__(17),
	    split_vtab: __webpack_require__(18),
	    combined: __webpack_require__(19)
	  }
	};
	if (true) {
	  module.exports = templates;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\index\lib\index\templates-jade.ls.map


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = " <section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-code\"></i>&nbspX+1<small>0.68.0 (jQuery)</small></h1><ol class=\"breadcrumb\"><li><a href=\"#/\"><i class=\"fa fa-code\"></i><span id=\"undefined\">X+1</span></a></li><li><a href=\"#/\"><i class=\"fa fa-database\"></i><span id=\"header__data\">Static</span></a></li><li><a href=\"#/\"><i class=\"fa fa-table\"></i><span id=\"header__id\"></span></a></li><li><a href=\"#/\"><i class=\"fa fa-tree\"></i><span id=\"header__tree\"></span></a></li></ol></section><section class=\"content\"><div class=\"row\"><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__run__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutorun</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__save\" class=\"btn btn-success\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__save__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutosave</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__load\" class=\"btn btn-warning\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__load__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutoload</div><div class=\"col-xs-4 col-sm-3 col-md-4\"></div><div class=\"col-xs-8 col-sm-3 col-md-2\"><select id=\"content__layout__select\"></select></div></div><br><div id=\"content__layout\" class=\"row\"><div style=\"padding-right: 7px\" class=\"col-md-6\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__input__notes\" data-toggle=\"tab\"><i class=\"fa fa-file-text\"></i>&nbsp&nbsp Notes</a></li><li><a href=\"#tab__app\" data-toggle=\"tab\"><i class=\"fa fa-laptop\"></i>&nbsp&nbsp App</a></li><li><a href=\"#tab__sheet\" data-toggle=\"tab\"><i class=\"fa fa-file-excel-o\"></i>&nbsp&nbsp Sheets</a></li></ul><div class=\"tab-content\"><div id=\"tab__input__notes\" class=\"tab-pane fade in active\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-8 col-sm-8 col-xs-12\"><select id=\"content__input__notes__file\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__input__notes__ext\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-12\"><button id=\"content__input__notes__file__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__notes__editor\"></textarea></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button type=\"button\" id=\"content__input__notes__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__notes__import\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__input__notes__format\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input type=\"checkbox\" id=\"content__input__notes__lint\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__input__notes__mode\"></select></div></div></div><div id=\"tab__app\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-6 col-sm-10 col-xs-10\"><select id=\"content__app__value\"></select></div><div class=\"col-md-4 col-sm-10 col-xs-10\"><select id=\"content__app__front\"></select></div><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div id=\"content__app\"></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__app__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__app__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-2 col-sm-4 col-xs-6\"><select id=\"content__app__format\"></select></div><div class=\"col-md-8 col-sm-6 col-xs-12\"></div></div></div><div id=\"tab__sheet\" class=\"tab-pane fade in\"></div></div></div></div><div style=\"padding-left: 7px\" class=\"col-md-6\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__admin\" data-toggle=\"tab\"><i class=\"fa fa-university\"></i>&nbsp&nbsp Admin</a></li><li><a href=\"#tab__output\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li><li><a href=\"#tab__option\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i>&nbsp&nbsp Options</a></li></ul><div class=\"tab-content\"><div id=\"tab__admin\" class=\"tab-pane fade in active\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-7 col-sm-7 col-xs-7\"><select id=\"content__value\"></select></div><div style=\"padding-left: 0\" class=\"col-md-3 col-sm-3 col-xs-3\"><select id=\"content__src\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2 col-sm-2 col-xs-12\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__tree\" data-toggle=\"tab\">Tree</a></li><li><a href=\"#tab__list\" data-toggle=\"tab\">List</a></li><li><a href=\"#tab__calendar\" data-toggle=\"tab\">Cal</a></li><li><a href=\"#tab__report\" data-toggle=\"tab\">Rep</a></li></ul></div><div class=\"col-sm-10 col-sm-10 col-xs-12\"><div class=\"tab-content\"><div id=\"tab__tree\" class=\"tab-pane fade in active\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__tree__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__tree__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__tree__inputs\" aria-expanded=\"true\" aria-controls=\"content__tree__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__tree__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__tree\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row\"><div id=\"content__tree__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12\"><div id=\"content__tree__holder\"><div id=\"content__tree\"></div></div></div></div></div><div id=\"tab__list\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__list__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__list__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__list__inputs\" aria-expanded=\"true\" aria-controls=\"content__list__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__list__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__list\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row table-responsive\"><div id=\"content__list__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__list__holder\"><table id=\"content__list\" class=\"table table-bordered table-hover\"></table></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0\" class=\"col-md-3 col-sm-3 col-xs-6\"><button id=\"content__admin__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__admin__import\" type=\"file\"></span>&nbsp&nbsp</div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__admin__format\"></select></div><div class=\"col-md-2 col-sm-2 col-xs-3\"></div><div class=\"col-md-4 col-sm-4 col-xs-9\"><button id=\"content__list__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div></div><div id=\"tab__report\" class=\"tab-pane fade in\">Report</div><div id=\"tab__calendar\" class=\"tab-pane fade in\">Calendar</div></div></div></div></div><div id=\"tab__output\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div id=\"content__output__index__button__holder\" class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__output__index__urlhash__button\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-hashtag\"></i></button></div><div id=\"content__output__index__select__holder\" class=\"col-md-8 col-sm-8 col-xs-11\"><select id=\"content__output__index__urlhash\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__output__index__ext\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__output__index__holder\"><iframe id=\"content__output__index__frame\"></iframe></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__output__index__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__output__index__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__output__index__result\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input id=\"content__output__index__lint\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__output__index__mode\"></select></div></div></div><div id=\"tab__option\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-12\"><button id=\"content__option__save\" type=\"button\" disabled class=\"btn btn-danger\"><i class=\"fa fa-refresh\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__option__store\" data-toggle=\"tab\">Store</a></li><li class=\"undefined\"><a href=\"#tab__option__run\" data-toggle=\"tab\">Run</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__option__store\" class=\"tab-pane fade in active\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th> </th><th style=\"min-width: 250px;\">Store</th><th style=\"min-width: 400px;\">DB / URL</th><th style=\"min-width: 200px;\">Table</th></tr><tr><td>Main (Data)</td><td><select id=\"content__option__store__data__main\"></select></td><td><input id=\"content__option__store__data__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>Main (Repo)</td><td><select id=\"content__option__store__repo__main\"></select></td><td><input id=\"content__option__store__repo__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__repo__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>App (Data)</td><td><select id=\"content__option__store__data__app\"></select></td><td><input id=\"content__option__store__data__app__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__app__table\" value=\"\" class=\"form-control\"></td></tr></tbody></table></div></div><div id=\"tab__option__run\" class=\"tab-pane fade in\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th>Vendor</th><th>Extension</th><th style=\"min-width: 600px;\">URL</th></tr><tr><td><input id=\"content__option__run__less\" type=\"checkbox\" class=\"content__icheck\"></td><td>Less</td><td id=\"content__option__run__less__ext\">less</td><td><input id=\"content__option__run__less__src\" value=\"../../vendors/preprocessor/less/less-2.7.1/less.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sass\" type=\"checkbox\" class=\"content__icheck\"></td><td>Sass</td><td id=\"content__option__run__sass__ext\">sass</td><td><input id=\"content__option__run__sass__src\" value=\"../../vendors/preprocessor/sass/sass-0.0.0-2015-03-22/sass.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__styl\" type=\"checkbox\" class=\"content__icheck\"></td><td>Stylus</td><td id=\"content__option__run__styl__ext\">styl</td><td><input id=\"content__option__run__styl__src\" value=\"../../vendors/preprocessor/stylus/stylus-0.54.5/stylus.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__babel\" type=\"checkbox\" class=\"content__icheck\"></td><td>Babel</td><td id=\"content__option__run__babel__ext\">babel.js</td><td><input id=\"content__option__run__babel__src\" value=\"../../vendors/transpiler/babel/babeljs.io-2016-03-01/babel.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ts\" type=\"checkbox\" class=\"content__icheck\"></td><td>TypeScript</td><td id=\"content__option__run__ts__ext\">ts</td><td><input id=\"content__option__run__ts__src\" value=\"../../vendors/transpiler/typescript/typescript-1.8.0/typescript.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__cs\" type=\"checkbox\" class=\"content__icheck\"></td><td>CoffeeScript</td><td id=\"content__option__run__cs__ext\">cs</td><td><input id=\"content__option__run__cs__src\" value=\"../../vendors/transpiler/coffeescript/coffeescript-1.10.0/coffee-script.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sql\" type=\"checkbox\" class=\"content__icheck\"></td><td>SQL</td><td id=\"content__option__run__sql__ext\">sql</td><td><input id=\"content__option__run__sql__src\" value=\"../../vendors/database/sql/sql-3.12.1/sql.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__mongo\" type=\"checkbox\" class=\"content__icheck\"></td><td>Mongo</td><td id=\"content__option__run__mongo__ext\">mongo.js</td><td><input id=\"content__option__run__mongo__src\" value=\"../../vendors/database/nedb/nedb-1.6.0/nedb.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__php\" type=\"checkbox\" class=\"content__icheck\"></td><td>PHP</td><td id=\"content__option__run__php__ext\">php</td><td><input id=\"content__option__run__php__src\" value=\"../../vendors/lang/php/uniter-2.8.1/uniter.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ruby\" type=\"checkbox\" class=\"content__icheck\"></td><td>Ruby</td><td id=\"content__option__run__ruby__ext\">ruby</td><td><input id=\"content__option__run__ruby__src\" value=\"../../vendors/lang/ruby/opal-0.8.1/opal.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__python\" type=\"checkbox\" class=\"content__icheck\"></td><td>Python</td><td id=\"content__option__run__python__ext\">python</td><td><input id=\"content__option__run__python__src\" value=\"../../vendors/lang/python/skulpt-0.10.1/skulpt.min+skulp-stdlib.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__abc\" type=\"checkbox\" class=\"content__icheck\"></td><td>ABC</td><td id=\"content__option__run__abc__ext\">abc</td><td><input id=\"content__option__run__abc__src\" value=\"../../vendors/music/abc/abc-2.1/abcjs_basic_2.1-min.js\" class=\"form-control\"></td></tr></tbody></table></div></div></div></div></div></div></div></div></div></div><br><br><br><br><br><br><br></section>";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = " <section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-code\"></i>&nbspX+1<small>0.68.0 (jQuery)</small></h1><ol class=\"breadcrumb\"><li><a href=\"#/\"><i class=\"fa fa-code\"></i><span id=\"undefined\">X+1</span></a></li><li><a href=\"#/\"><i class=\"fa fa-database\"></i><span id=\"header__data\">Static</span></a></li><li><a href=\"#/\"><i class=\"fa fa-table\"></i><span id=\"header__id\"></span></a></li><li><a href=\"#/\"><i class=\"fa fa-tree\"></i><span id=\"header__tree\"></span></a></li></ol></section><section class=\"content\"><div class=\"row\"><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__run__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutorun</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__save\" class=\"btn btn-success\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__save__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutosave</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__load\" class=\"btn btn-warning\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__load__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutoload</div><div class=\"col-xs-4 col-sm-3 col-md-4\"></div><div class=\"col-xs-8 col-sm-3 col-md-2\"><select id=\"content__layout__select\"></select></div></div><br><div id=\"content__layout\" class=\"row\"><div class=\"col-sm-12\"><div style=\"padding-left:0;padding-right:0\" class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__input\" data-toggle=\"tab\">Input</a></li><li><a href=\"#tab__others\" data-toggle=\"tab\">Output + Others</a></li></ul></div><div style=\"padding-left:0;padding-right:0\" class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__input\" class=\"tab-pane active\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__input__notes\" data-toggle=\"tab\"><i class=\"fa fa-file-text\"></i>&nbsp&nbsp Notes</a></li><li><a href=\"#tab__app\" data-toggle=\"tab\"><i class=\"fa fa-laptop\"></i>&nbsp&nbsp App</a></li><li><a href=\"#tab__sheet\" data-toggle=\"tab\"><i class=\"fa fa-file-excel-o\"></i>&nbsp&nbsp Sheets</a></li></ul><div class=\"tab-content\"><div id=\"tab__input__notes\" class=\"tab-pane fade in active\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-8 col-sm-8 col-xs-12\"><select id=\"content__input__notes__file\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__input__notes__ext\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-12\"><button id=\"content__input__notes__file__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__notes__editor\"></textarea></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button type=\"button\" id=\"content__input__notes__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__notes__import\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__input__notes__format\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input type=\"checkbox\" id=\"content__input__notes__lint\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__input__notes__mode\"></select></div></div></div><div id=\"tab__app\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-6 col-sm-10 col-xs-10\"><select id=\"content__app__value\"></select></div><div class=\"col-md-4 col-sm-10 col-xs-10\"><select id=\"content__app__front\"></select></div><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div id=\"content__app\"></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__app__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__app__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-2 col-sm-4 col-xs-6\"><select id=\"content__app__format\"></select></div><div class=\"col-md-8 col-sm-6 col-xs-12\"></div></div></div><div id=\"tab__sheet\" class=\"tab-pane fade in\"></div></div></div></div><div id=\"tab__others\" class=\"tab-pane\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__admin\" data-toggle=\"tab\"><i class=\"fa fa-university\"></i>&nbsp&nbsp Admin</a></li><li><a href=\"#tab__output\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li><li><a href=\"#tab__option\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i>&nbsp&nbsp Options</a></li></ul><div class=\"tab-content\"><div id=\"tab__admin\" class=\"tab-pane fade in active\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-7 col-sm-7 col-xs-7\"><select id=\"content__value\"></select></div><div style=\"padding-left: 0\" class=\"col-md-3 col-sm-3 col-xs-3\"><select id=\"content__src\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2 col-sm-2 col-xs-12\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__tree\" data-toggle=\"tab\">Tree</a></li><li><a href=\"#tab__list\" data-toggle=\"tab\">List</a></li><li><a href=\"#tab__calendar\" data-toggle=\"tab\">Cal</a></li><li><a href=\"#tab__report\" data-toggle=\"tab\">Rep</a></li></ul></div><div class=\"col-sm-10 col-sm-10 col-xs-12\"><div class=\"tab-content\"><div id=\"tab__tree\" class=\"tab-pane fade in active\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__tree__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__tree__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__tree__inputs\" aria-expanded=\"true\" aria-controls=\"content__tree__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__tree__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__tree\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row\"><div id=\"content__tree__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12\"><div id=\"content__tree__holder\"><div id=\"content__tree\"></div></div></div></div></div><div id=\"tab__list\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__list__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__list__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__list__inputs\" aria-expanded=\"true\" aria-controls=\"content__list__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__list__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__list\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row table-responsive\"><div id=\"content__list__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__list__holder\"><table id=\"content__list\" class=\"table table-bordered table-hover\"></table></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0\" class=\"col-md-3 col-sm-3 col-xs-6\"><button id=\"content__admin__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__admin__import\" type=\"file\"></span>&nbsp&nbsp</div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__admin__format\"></select></div><div class=\"col-md-2 col-sm-2 col-xs-3\"></div><div class=\"col-md-4 col-sm-4 col-xs-9\"><button id=\"content__list__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div></div><div id=\"tab__report\" class=\"tab-pane fade in\">Report</div><div id=\"tab__calendar\" class=\"tab-pane fade in\">Calendar</div></div></div></div></div><div id=\"tab__output\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div id=\"content__output__index__button__holder\" class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__output__index__urlhash__button\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-hashtag\"></i></button></div><div id=\"content__output__index__select__holder\" class=\"col-md-8 col-sm-8 col-xs-11\"><select id=\"content__output__index__urlhash\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__output__index__ext\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__output__index__holder\"><iframe id=\"content__output__index__frame\"></iframe></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__output__index__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__output__index__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__output__index__result\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input id=\"content__output__index__lint\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__output__index__mode\"></select></div></div></div><div id=\"tab__option\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-12\"><button id=\"content__option__save\" type=\"button\" disabled class=\"btn btn-danger\"><i class=\"fa fa-refresh\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__option__store\" data-toggle=\"tab\">Store</a></li><li class=\"undefined\"><a href=\"#tab__option__run\" data-toggle=\"tab\">Run</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__option__store\" class=\"tab-pane fade in active\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th> </th><th style=\"min-width: 250px;\">Store</th><th style=\"min-width: 400px;\">DB / URL</th><th style=\"min-width: 200px;\">Table</th></tr><tr><td>Main (Data)</td><td><select id=\"content__option__store__data__main\"></select></td><td><input id=\"content__option__store__data__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>Main (Repo)</td><td><select id=\"content__option__store__repo__main\"></select></td><td><input id=\"content__option__store__repo__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__repo__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>App (Data)</td><td><select id=\"content__option__store__data__app\"></select></td><td><input id=\"content__option__store__data__app__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__app__table\" value=\"\" class=\"form-control\"></td></tr></tbody></table></div></div><div id=\"tab__option__run\" class=\"tab-pane fade in\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th>Vendor</th><th>Extension</th><th style=\"min-width: 600px;\">URL</th></tr><tr><td><input id=\"content__option__run__less\" type=\"checkbox\" class=\"content__icheck\"></td><td>Less</td><td id=\"content__option__run__less__ext\">less</td><td><input id=\"content__option__run__less__src\" value=\"../../vendors/preprocessor/less/less-2.7.1/less.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sass\" type=\"checkbox\" class=\"content__icheck\"></td><td>Sass</td><td id=\"content__option__run__sass__ext\">sass</td><td><input id=\"content__option__run__sass__src\" value=\"../../vendors/preprocessor/sass/sass-0.0.0-2015-03-22/sass.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__styl\" type=\"checkbox\" class=\"content__icheck\"></td><td>Stylus</td><td id=\"content__option__run__styl__ext\">styl</td><td><input id=\"content__option__run__styl__src\" value=\"../../vendors/preprocessor/stylus/stylus-0.54.5/stylus.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__babel\" type=\"checkbox\" class=\"content__icheck\"></td><td>Babel</td><td id=\"content__option__run__babel__ext\">babel.js</td><td><input id=\"content__option__run__babel__src\" value=\"../../vendors/transpiler/babel/babeljs.io-2016-03-01/babel.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ts\" type=\"checkbox\" class=\"content__icheck\"></td><td>TypeScript</td><td id=\"content__option__run__ts__ext\">ts</td><td><input id=\"content__option__run__ts__src\" value=\"../../vendors/transpiler/typescript/typescript-1.8.0/typescript.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__cs\" type=\"checkbox\" class=\"content__icheck\"></td><td>CoffeeScript</td><td id=\"content__option__run__cs__ext\">cs</td><td><input id=\"content__option__run__cs__src\" value=\"../../vendors/transpiler/coffeescript/coffeescript-1.10.0/coffee-script.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sql\" type=\"checkbox\" class=\"content__icheck\"></td><td>SQL</td><td id=\"content__option__run__sql__ext\">sql</td><td><input id=\"content__option__run__sql__src\" value=\"../../vendors/database/sql/sql-3.12.1/sql.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__mongo\" type=\"checkbox\" class=\"content__icheck\"></td><td>Mongo</td><td id=\"content__option__run__mongo__ext\">mongo.js</td><td><input id=\"content__option__run__mongo__src\" value=\"../../vendors/database/nedb/nedb-1.6.0/nedb.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__php\" type=\"checkbox\" class=\"content__icheck\"></td><td>PHP</td><td id=\"content__option__run__php__ext\">php</td><td><input id=\"content__option__run__php__src\" value=\"../../vendors/lang/php/uniter-2.8.1/uniter.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ruby\" type=\"checkbox\" class=\"content__icheck\"></td><td>Ruby</td><td id=\"content__option__run__ruby__ext\">ruby</td><td><input id=\"content__option__run__ruby__src\" value=\"../../vendors/lang/ruby/opal-0.8.1/opal.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__python\" type=\"checkbox\" class=\"content__icheck\"></td><td>Python</td><td id=\"content__option__run__python__ext\">python</td><td><input id=\"content__option__run__python__src\" value=\"../../vendors/lang/python/skulpt-0.10.1/skulpt.min+skulp-stdlib.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__abc\" type=\"checkbox\" class=\"content__icheck\"></td><td>ABC</td><td id=\"content__option__run__abc__ext\">abc</td><td><input id=\"content__option__run__abc__src\" value=\"../../vendors/music/abc/abc-2.1/abcjs_basic_2.1-min.js\" class=\"form-control\"></td></tr></tbody></table></div></div></div></div></div></div></div></div></div></div></div></div></div><br><br><br><br><br><br><br></section>";

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = " <section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-code\"></i>&nbspX+1<small>0.68.0 (jQuery)</small></h1><ol class=\"breadcrumb\"><li><a href=\"#/\"><i class=\"fa fa-code\"></i><span id=\"undefined\">X+1</span></a></li><li><a href=\"#/\"><i class=\"fa fa-database\"></i><span id=\"header__data\">Static</span></a></li><li><a href=\"#/\"><i class=\"fa fa-table\"></i><span id=\"header__id\"></span></a></li><li><a href=\"#/\"><i class=\"fa fa-tree\"></i><span id=\"header__tree\"></span></a></li></ol></section><section class=\"content\"><div class=\"row\"><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__run__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutorun</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__save\" class=\"btn btn-success\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__save__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutosave</div><div class=\"col-xs-4 col-sm-2 col-md-2\"><button id=\"content__load\" class=\"btn btn-warning\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__load__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAutoload</div><div class=\"col-xs-4 col-sm-3 col-md-4\"></div><div class=\"col-xs-8 col-sm-3 col-md-2\"><select id=\"content__layout__select\"></select></div></div><br><div id=\"content__layout\" class=\"row\"><div class=\"col-md-12\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__input__notes\" data-toggle=\"tab\"><i class=\"fa fa-file-text\"></i>&nbsp&nbsp Notes</a></li><li><a href=\"#tab__output\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li><li><a href=\"#tab__admin\" data-toggle=\"tab\"><i class=\"fa fa-university\"></i>&nbsp&nbsp Admin</a></li><li><a href=\"#tab__app\" data-toggle=\"tab\"><i class=\"fa fa-laptop\"></i>&nbsp&nbsp App</a></li><li><a href=\"#tab__sheet\" data-toggle=\"tab\"><i class=\"fa fa-file-excel-o\"></i>&nbsp&nbsp Sheets</a></li><li><a href=\"#tab__option\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i>&nbsp&nbsp Options</a></li></ul><div class=\"tab-content\"><div id=\"tab__input__notes\" class=\"tab-pane fade in active\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-8 col-sm-8 col-xs-12\"><select id=\"content__input__notes__file\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__input__notes__ext\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-12\"><button id=\"content__input__notes__file__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__notes__editor\"></textarea></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button type=\"button\" id=\"content__input__notes__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__notes__import\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__input__notes__format\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input type=\"checkbox\" id=\"content__input__notes__lint\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__input__notes__mode\"></select></div></div></div><div id=\"tab__output\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div id=\"content__output__index__button__holder\" class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__output__index__urlhash__button\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-hashtag\"></i></button></div><div id=\"content__output__index__select__holder\" class=\"col-md-8 col-sm-8 col-xs-11\"><select id=\"content__output__index__urlhash\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-12\"><select id=\"content__output__index__ext\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__output__index__holder\"><iframe id=\"content__output__index__frame\"></iframe></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__output__index__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__output__index__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__output__index__result\"></select></div><div class=\"col-md-3 col-sm-3 col-xs-3\"><input id=\"content__output__index__lint\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspLint</div><div class=\"col-md-4 col-sm-4 col-xs-9\"><select id=\"content__output__index__mode\"></select></div></div></div><div id=\"tab__admin\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-7 col-sm-7 col-xs-7\"><select id=\"content__value\"></select></div><div style=\"padding-left: 0\" class=\"col-md-3 col-sm-3 col-xs-3\"><select id=\"content__src\"></select></div><div class=\"col-md-1 col-sm-1 col-xs-1\"><button id=\"content__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2 col-sm-2 col-xs-12\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__tree\" data-toggle=\"tab\">Tree</a></li><li><a href=\"#tab__list\" data-toggle=\"tab\">List</a></li><li><a href=\"#tab__calendar\" data-toggle=\"tab\">Cal</a></li><li><a href=\"#tab__report\" data-toggle=\"tab\">Rep</a></li></ul></div><div class=\"col-sm-10 col-sm-10 col-xs-12\"><div class=\"tab-content\"><div id=\"tab__tree\" class=\"tab-pane fade in active\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__tree__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__tree__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__tree__inputs\" aria-expanded=\"true\" aria-controls=\"content__tree__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__tree__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__tree\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row\"><div id=\"content__tree__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12\"><div id=\"content__tree__holder\"><div id=\"content__tree\"></div></div></div></div></div><div id=\"tab__list\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-4 col-sm-4 col-xs-4\"><button id=\"content__list__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__list__inputs__toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#content__list__inputs\" aria-expanded=\"true\" aria-controls=\"content__list__inputs\" class=\"btn btn\"><i class=\"fa fa-search\"></i></button>&nbsp&nbsp<button id=\"content__list__create\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div><div class=\"col-md-8 col-sm-8 col-xs-8\"><select id=\"content__sample__list\"></select></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row table-responsive\"><div id=\"content__list__inputs\" style=\"padding: 0;\" class=\"col-md-12 col-sm-12 col-xs-12 collapse in\"><br></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__list__holder\"><table id=\"content__list\" class=\"table table-bordered table-hover\"></table></div></div></div><br><div class=\"row\"><div style=\"padding-right: 0\" class=\"col-md-3 col-sm-3 col-xs-6\"><button id=\"content__admin__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__admin__import\" type=\"file\"></span>&nbsp&nbsp</div><div style=\"padding-left: 0;\" class=\"col-md-3 col-sm-3 col-xs-6\"><select id=\"content__admin__format\"></select></div><div class=\"col-md-2 col-sm-2 col-xs-3\"></div><div class=\"col-md-4 col-sm-4 col-xs-9\"><button id=\"content__list__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div></div><div id=\"tab__report\" class=\"tab-pane fade in\">Report</div><div id=\"tab__calendar\" class=\"tab-pane fade in\">Calendar</div></div></div></div></div><div id=\"tab__app\" class=\"tab-pane fade in\"><div style=\"margin-bottom: 5px;\" class=\"row\"><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-6 col-sm-10 col-xs-10\"><select id=\"content__app__value\"></select></div><div class=\"col-md-4 col-sm-10 col-xs-10\"><select id=\"content__app__front\"></select></div><div class=\"col-md-1 col-sm-2 col-xs-2\"><button id=\"content__app__value__destroy\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div id=\"content__app\"></div></div><br><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-2 col-sm-2 col-xs-6\"><button id=\"content__app__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__app__import\" type=\"file\"></span></div><div style=\"padding-left: 0;\" class=\"col-md-2 col-sm-4 col-xs-6\"><select id=\"content__app__format\"></select></div><div class=\"col-md-8 col-sm-6 col-xs-12\"></div></div></div><div id=\"tab__sheet\" class=\"tab-pane fade in\"></div><div id=\"tab__option\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-12\"><button id=\"content__option__save\" type=\"button\" disabled class=\"btn btn-danger\"><i class=\"fa fa-refresh\"></i></button></div></div><div class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__option__store\" data-toggle=\"tab\">Store</a></li><li class=\"undefined\"><a href=\"#tab__option__run\" data-toggle=\"tab\">Run</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__option__store\" class=\"tab-pane fade in active\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th> </th><th style=\"min-width: 250px;\">Store</th><th style=\"min-width: 400px;\">DB / URL</th><th style=\"min-width: 200px;\">Table</th></tr><tr><td>Main (Data)</td><td><select id=\"content__option__store__data__main\"></select></td><td><input id=\"content__option__store__data__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>Main (Repo)</td><td><select id=\"content__option__store__repo__main\"></select></td><td><input id=\"content__option__store__repo__main__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__repo__main__table\" value=\"\" class=\"form-control\"></td></tr><tr><td>App (Data)</td><td><select id=\"content__option__store__data__app\"></select></td><td><input id=\"content__option__store__data__app__db_url\" value=\"\" class=\"form-control\"></td><td><input id=\"content__option__store__data__app__table\" value=\"\" class=\"form-control\"></td></tr></tbody></table></div></div><div id=\"tab__option__run\" class=\"tab-pane fade in\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th>Vendor</th><th>Extension</th><th style=\"min-width: 600px;\">URL</th></tr><tr><td><input id=\"content__option__run__less\" type=\"checkbox\" class=\"content__icheck\"></td><td>Less</td><td id=\"content__option__run__less__ext\">less</td><td><input id=\"content__option__run__less__src\" value=\"undefinedvendors/preprocessor/less/less-2.7.1/less.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sass\" type=\"checkbox\" class=\"content__icheck\"></td><td>Sass</td><td id=\"content__option__run__sass__ext\">sass</td><td><input id=\"content__option__run__sass__src\" value=\"undefinedvendors/preprocessor/sass/sass-0.0.0-2015-03-22/sass.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__styl\" type=\"checkbox\" class=\"content__icheck\"></td><td>Stylus</td><td id=\"content__option__run__styl__ext\">styl</td><td><input id=\"content__option__run__styl__src\" value=\"undefinedvendors/preprocessor/stylus/stylus-0.54.5/stylus.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__babel\" type=\"checkbox\" class=\"content__icheck\"></td><td>Babel</td><td id=\"content__option__run__babel__ext\">babel.js</td><td><input id=\"content__option__run__babel__src\" value=\"undefinedvendors/transpiler/babel/babeljs.io-2016-03-01/babel.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ts\" type=\"checkbox\" class=\"content__icheck\"></td><td>TypeScript</td><td id=\"content__option__run__ts__ext\">ts</td><td><input id=\"content__option__run__ts__src\" value=\"undefinedvendors/transpiler/typescript/typescript-1.8.0/typescript.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__cs\" type=\"checkbox\" class=\"content__icheck\"></td><td>CoffeeScript</td><td id=\"content__option__run__cs__ext\">cs</td><td><input id=\"content__option__run__cs__src\" value=\"undefinedvendors/transpiler/coffeescript/coffeescript-1.10.0/coffee-script.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__sql\" type=\"checkbox\" class=\"content__icheck\"></td><td>SQL</td><td id=\"content__option__run__sql__ext\">sql</td><td><input id=\"content__option__run__sql__src\" value=\"undefinedvendors/database/sql/sql-3.12.1/sql.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__mongo\" type=\"checkbox\" class=\"content__icheck\"></td><td>Mongo</td><td id=\"content__option__run__mongo__ext\">mongo.js</td><td><input id=\"content__option__run__mongo__src\" value=\"undefinedvendors/database/nedb/nedb-1.6.0/nedb.min.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__php\" type=\"checkbox\" class=\"content__icheck\"></td><td>PHP</td><td id=\"content__option__run__php__ext\">php</td><td><input id=\"content__option__run__php__src\" value=\"undefinedvendors/lang/php/uniter-2.8.1/uniter.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__ruby\" type=\"checkbox\" class=\"content__icheck\"></td><td>Ruby</td><td id=\"content__option__run__ruby__ext\">ruby</td><td><input id=\"content__option__run__ruby__src\" value=\"undefinedvendors/lang/ruby/opal-0.8.1/opal.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__python\" type=\"checkbox\" class=\"content__icheck\"></td><td>Python</td><td id=\"content__option__run__python__ext\">python</td><td><input id=\"content__option__run__python__src\" value=\"undefinedvendors/lang/python/skulpt-0.10.1/skulpt.min+skulp-stdlib.js\" class=\"form-control\"></td></tr><tr><td><input id=\"content__option__run__abc\" type=\"checkbox\" class=\"content__icheck\"></td><td>ABC</td><td id=\"content__option__run__abc__ext\">abc</td><td><input id=\"content__option__run__abc__src\" value=\"undefinedvendors/music/abc/abc-2.1/abcjs_basic_2.1-min.js\" class=\"form-control\"></td></tr></tbody></table></div></div></div></div></div></div></div></div></div></div><br><br><br><br><br><br><br></section>";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(o){
	  this.Stores = o.Stores;
	  this.templates = o.templates;
	  this.samples = o.samples || {};
	  this.props = o.props;
	  this.debug = o.debug || true;
	};
	Component.prototype = {
	  constructor: Component,
	  init: function(o){
	    if (this.debug) {
	      console.log('Init!');
	    }
	    __webpack_require__(21)(Component);
	    __webpack_require__(23)(Component);
	    __webpack_require__(26)(Component);
	    this.initLib();
	    this.initStore();
	    this.initBoot();
	  }
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\component\jquery\component.ls.map


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initLib = function(){
	    this.initLibJs();
	  };
	  o.initLibJs = function(){
	    var _this;
	    _this = this;
	    if (this.debug) {
	      console.log('Lib!');
	    }
	    __webpack_require__(22)(Component);
	    this.initConsole();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\component\jquery\component\lib.ls.map


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initConsole = function(){
	    this.initConsoleJs();
	  };
	  o.consoleLog = function(o){
	    this.consoleLogCn(o);
	  };
	  o.initConsoleJs = function(){
	    if (this.debug) {
	      console.log('Console!');
	    }
	  };
	  o.consoleLogCn = function(o){
	    if (this.debug) {
	      console.log(o.text);
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\component\jquery\component\lib\console.ls.map


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initStore = function(){
	    this.initStoreJs();
	  };
	  o.initStoreJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Store!'
	    });
	    __webpack_require__(24)(Component);
	    __webpack_require__(25)(Component);
	    this.initSetting();
	    this.initData();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\component\jquery\component\store.ls.map


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initSetting = function(){
	    this.initSettingJs();
	  };
	  o.settingSet = function(o){
	    this.settingSetLg(o);
	  };
	  o.settingGet = function(o){
	    return this.settingGetLg(o);
	  };
	  o.initSettingJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Setting!'
	    });
	  };
	  o.settingSetLg = function(o){
	    var _this, settings;
	    _this = this;
	    this.consoleLog({
	      text: 'Setting:Set'
	    });
	    settings = this.settingGet();
	    settings[o.setting] = o.props;
	    localStorage.setItem(this.setting, JSON.stringify(settings));
	  };
	  o.settingGetLg = function(o){
	    var _this, settings;
	    _this = this;
	    this.consoleLog({
	      text: 'Setting:Get'
	    });
	    settings = localStorage.getItem(this.setting);
	    if (settings) {
	      return settings = JSON.parse(settings);
	    } else {
	      return {};
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\component\jquery\component\store\setting.ls.map


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initData = function(){
	    this.initDataJs(o);
	  };
	  o.dataMake = function(o){
	    this.dataMakeJs(o);
	  };
	  o.dataCreate = function(o){
	    this.dataCreateMm(o);
	  };
	  o.dataUpdate = function(o){
	    this.dataUpdateJs(o);
	  };
	  o.dataFind = function(o){
	    this.dataFindJs(o);
	  };
	  o.dataFindAll = function(o){
	    this.dataFindAllJs(o);
	  };
	  o.dataDestroy = function(o){
	    this.dataDestroyJs(o);
	  };
	  o.dataImportTable = function(o){
	    this.dataImportTableJs(o);
	  };
	  o.initDataJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Data!'
	    });
	  };
	  o.dataMakeJs = function(o){
	    var _this, adapter, params;
	    _this = this;
	    this.consoleLog({
	      text: 'Data:Make'
	    });
	    adapter = o.adapter || 'static';
	    params = o.params || {};
	    this.data = new this.Stores[adapter](params);
	  };
	  o.dataCreateMm = function(o){
	    var _this, attrs, sample, i$, ref$;
	    _this = this;
	    this.consoleLog({
	      text: 'Data:Create'
	    });
	    attrs = o.attrs || {};
	    attrs.date = moment().format('DD/MM/YYYY');
	    sample = this.sampleGetValue();
	    for (i$ in ref$ = this.samples.main[sample]) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    this.data.create(attrs, o.cb || function(){});
	    function fn$(i, el){
	      attrs[i] = el;
	    }
	  };
	  o.dataUpdateJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Data:Update'
	    });
	    this.data.update(o.id, o.attrs, o.cb || function(){});
	  };
	  o.dataFindJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Data:Find'
	    });
	    this.data.find(o.id, o.cb || function(){});
	  };
	  o.dataFindByAttrJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Data:Find:By:Attr'
	    });
	    this.data.findByAttr(o.attr, o.value, o.cb || function(){});
	  };
	  o.dataFindAllJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Data:Find:All'
	    });
	    this.data.findAll(o.cb || function(){});
	  };
	  o.dataDestroyJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Data:Destroy'
	    });
	    this.data.destroy(o.id, o.cb || function(){});
	  };
	  o.dataImportTableJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Data:Import:Table'
	    });
	    this.data.importTable('main', o.list, o.cb || function(){});
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\component\jquery\component\store\data.ls.map


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initBoot = function(){
	    this.initBootJs();
	  };
	  o.initBootJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Boot!'
	    });
	    __webpack_require__(27)(Component);
	    __webpack_require__(28)(Component);
	    __webpack_require__(29)(Component);
	    this.initDefault();
	    this.initLayout();
	    this.initConfig();
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\component\jquery\component\boot.ls.map


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initDefault = function(){
	    this.initDefaultJs();
	  };
	  o.defaultMake = function(o){
	    this.defaultMakeJs(o);
	  };
	  o.defaultMakeBoot = function(o){
	    this.defaultMakeBootJs(o);
	  };
	  o.defaultMakeStore = function(o){
	    this.defaultMakeStoreJs(o);
	  };
	  o.defaultMakeMain = function(o){
	    this.defaultMakeMainJs(o);
	  };
	  o.defaultMakeAdmin = function(o){
	    this.defaultMakeAdminJs(o);
	  };
	  o.defaultMakeUtil = function(o){
	    this.defaultMakeUtilJs(o);
	  };
	  o.initDefaultJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Default!'
	    });
	  };
	  o.defaultMakeJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Default:Make'
	    });
	    this.defaultMakeBoot();
	    this.defaultMakeStore();
	    this.defaultMakeMain();
	    this.defaultMakeAdmin();
	    this.defaultMakeUtil();
	  };
	  o.defaultMakeStoreJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Default:Make:Store'
	    });
	    this.setting = 'settings_rcx';
	    this.id = {
	      main: null,
	      app: null
	    };
	    this.tree = {
	      main: null
	    };
	    this.child = null;
	    this.data = {};
	    this.repo = {};
	  };
	  o.defaultMakeBootJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Default:Make:Boot'
	    });
	    this.config = {
	      layout: 'split',
	      store_data: {
	        index: 'static',
	        'static': {
	          db_url: '',
	          table: ''
	        },
	        indexeddb: {
	          db_url: 'rcx',
	          table: 'data'
	        },
	        localstorage: {
	          db_url: '',
	          table: ''
	        },
	        dom: {
	          db_url: '',
	          table: ''
	        },
	        ajax: {
	          db_url: '',
	          table: ''
	        },
	        firebase: {
	          db_url: '',
	          table: ''
	        }
	      },
	      store_repo: {
	        index: 'static',
	        'static': {
	          db_url: '',
	          table: ''
	        },
	        indexeddb: {
	          db_url: 'rcx',
	          table: 'repo'
	        },
	        localstorage: {
	          db_url: '',
	          table: ''
	        },
	        dom: {
	          db_url: '',
	          table: ''
	        },
	        ajax: {
	          db_url: '',
	          table: ''
	        },
	        firebase: {
	          db_url: '',
	          table: ''
	        }
	      }
	    };
	    this.options = {
	      stores: {}
	    };
	  };
	  o.defaultMakeMainJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Default:Make:Main'
	    });
	    this.editors = {
	      inputs: {
	        notes: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.files = {
	      inputs: {
	        notes: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.exts = {
	      inputs: {
	        notes: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.modes = {
	      inputs: {
	        notes: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.input = {
	      notes: 'index'
	    };
	    this.inputs = {
	      notes: {}
	    };
	    this.frames = {
	      outputs: {
	        index: {}
	      }
	    };
	    this.urlhashes = {
	      outputs: {
	        index: {}
	      }
	    };
	    this.results = {
	      outputs: {
	        index: {}
	      }
	    };
	    this.output = {
	      index: 'index'
	    };
	    this.outputs = {
	      index: {
	        'index': {}
	      }
	    };
	    this.delays = {
	      run: 0,
	      save: 0,
	      load: 0
	    };
	    this.debounces = {
	      inputs: {
	        notes: 0
	      }
	    };
	    this.runs = {};
	    this.scripts = {
	      'txt': true,
	      'html': true,
	      'js': true,
	      'css': true,
	      'md': true,
	      '++.md': true,
	      'remark.md': true,
	      'jade': true,
	      'less': false,
	      'sass': false,
	      'styl': false,
	      'ls': true,
	      'babel.js': false,
	      'ts': false,
	      'cs': false,
	      'json': true,
	      'yaml': true,
	      'xml': true,
	      'sql': false,
	      'mongo.js': false,
	      'php': false,
	      'rb': false,
	      'py': false,
	      'abc': false,
	      'ashx': true,
	      'java': true,
	      'go': true,
	      'rust': true
	    };
	    this.onloads = {};
	  };
	  o.defaultMakeAdminJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Default:Make:Admin'
	    });
	    this.value = {};
	    this.router = {};
	    this.src = {};
	    this.sample = {};
	    this.tree = {};
	    this.list = {};
	    this.report = {};
	    this.calendar = {};
	    this.chart = {};
	  };
	  o.defaultMakeUtilJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Default:Make:Util'
	    });
	    this.formats = {
	      inputs: {
	        notes: {}
	      },
	      admin: {
	        index: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\component\jquery\component\boot\default.ls.map


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initLayout = function(){
	    this.initLayoutJs();
	  };
	  o.layoutMakeContainer = function(o){
	    return this.layoutMakeContainerJqSzDr(o);
	  };
	  o.layoutSetValue = function(o){
	    this.layoutSetValueSz(o);
	  };
	  o.layoutGetValue = function(o){
	    return this.layoutGetValueSz(o);
	  };
	  o.layoutMatchAliasToTitle = function(o){
	    return this.layoutMatchAliasToTitleJs(o);
	  };
	  o.layoutMatchTitleToAlias = function(o){
	    return this.layoutMatchTitleToAliasJs(o);
	  };
	  o.initLayoutJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Layout!'
	    });
	  };
	  o.layoutMakeContainerJqSzDr = function(o){
	    var _this, config;
	    _this = this;
	    this.consoleLog({
	      text: 'Layout:Make:Container'
	    });
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          var layout;
	          layout = _this.layoutMatchTitleToAlias({
	            title: value
	          });
	          _this.configSet({
	            config: 'layout',
	            props: layout
	          });
	          if (_this.router.destroy) {
	            _this.router.destroy();
	          }
	          _this.init();
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  o.layoutSetValueSz = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Layout:Set:Value'
	    });
	    this.layout.setValue(o.value, function(){});
	  };
	  o.layoutGetValueSz = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Layout:Get:Value'
	    });
	    return this.layout.getValue();
	  };
	  o.layoutMatchAliasToTitleJs = function(o){
	    var _this, aliases;
	    _this = this;
	    this.consoleLog({
	      text: 'Layout:Match:Alias:To:Title'
	    });
	    aliases = {
	      'split': 'Layout - Split',
	      'split_vtab': 'Layout - Split VTab',
	      'combined': 'Layout - Combined'
	    };
	    return aliases[o.alias];
	  };
	  o.layoutMatchTitleToAliasJs = function(o){
	    var _this, titles;
	    _this = this;
	    this.consoleLog({
	      text: 'Layout:Match:Title:To:Alias'
	    });
	    titles = {
	      'Layout - Split': 'split',
	      'Layout - Split VTab': 'split_vtab',
	      'Layout - Combined': 'combined'
	    };
	    return titles[o.title];
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\component\jquery\component\boot\layout.ls.map


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(Component){
	  var o;
	  o = Component.prototype;
	  o.initConfig = function(){
	    this.initConfigJs();
	  };
	  o.configSet = function(o){
	    this.configSetJs(o);
	  };
	  o.configGet = function(o){
	    return this.configGetJs(o);
	  };
	  o.configSave = function(o){
	    this.configSaveJs(o);
	  };
	  o.configLoad = function(o){
	    return this.configLoadJs(o);
	  };
	  o.configMakeData = function(o){
	    this.configMakeDataJs(o);
	  };
	  o.configMakeRepo = function(o){
	    this.configMakeRepoJs(o);
	  };
	  o.configMakeLayout = function(o){
	    this.configMakeLayoutJq(o);
	  };
	  o.configGetDataIfStatic = function(o){
	    this.configGetDataIfStaticJqDm(o);
	  };
	  o.initConfigJs = function(){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Config!'
	    });
	    this.defaultMake();
	    this.configLoad();
	    this.configSave();
	    this.configMakeData();
	    this.configGetDataIfStatic();
	  };
	  o.configSetJs = function(o){
	    var _this, save;
	    _this = this;
	    this.consoleLog({
	      text: 'Config:Set'
	    });
	    save = o.save || true;
	    this.config[o.config] = o.props;
	    if (save) {
	      this.configSave();
	    }
	  };
	  o.configGetJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Config:Get'
	    });
	    return this.config[o.config];
	  };
	  o.configSaveJs = function(o){
	    var _this;
	    _this = this;
	    this.consoleLog({
	      text: 'Config:Save'
	    });
	    this.settingSet({
	      setting: 'config',
	      props: this.config
	    });
	  };
	  o.configLoadJs = function(o){
	    var _this, settings;
	    _this = this;
	    this.consoleLog({
	      text: 'Config:Load'
	    });
	    settings = this.settingGet();
	    if (settings.config) {
	      this.config = settings.config;
	    }
	  };
	  o.configMakeDataJs = function(o){
	    var _this, config, adapter, params;
	    _this = this;
	    this.consoleLog({
	      text: 'Config:Make:Data'
	    });
	    config = this.config.store_data;
	    adapter = config.index;
	    params = config[adapter];
	    this.dataMake({
	      adapter: adapter,
	      params: params
	    });
	  };
	  o.configMakeLayoutJq = function(o){
	    var _this, layout, template;
	    _this = this;
	    this.consoleLog({
	      text: 'Config:Make:Layout'
	    });
	    layout = this.config.layout;
	    template = this.templates.layout[layout];
	    $('#app').html('');
	    $('#app').html(template);
	  };
	  o.configGetDataIfStaticJqDm = function(o){
	    var _this, config, url, script, e;
	    _this = this;
	    this.consoleLog({
	      text: 'Config:Get:Data:If:Static'
	    });
	    config = this.config.store_data;
	    if (config.index === 'static' && config['static'].db_url !== '') {
	      url = config['static'].db_url;
	      try {
	        script = document.createElement('script');
	        script.src = url;
	        document.body.appendChild(script);
	      } catch (e$) {
	        e = e$;
	        console.log(e);
	      }
	    }
	  };
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\rcx\v0\component\jquery\component\boot\config.ls.map


/***/ }
/******/ ]);