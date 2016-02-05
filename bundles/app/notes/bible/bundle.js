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

	var props, data, tmpl, component;
	__webpack_require__(1);
	props = __webpack_require__(2);
	data = new (__webpack_require__(3))(window.db.notes, 'bible');
	tmpl = {
	  'default': __webpack_require__(4),
	  alt: __webpack_require__(5)
	};
	component = new (__webpack_require__(6))(props, data, tmpl);
	window.app = {
	  component: component
	};
	$('#app').html(tmpl['default']);
	component.init();
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\app\index\jquery+indexeddb\notes\bible\index.ls.map


/***/ },
/* 1 */
/***/ function(module, exports) {

	window.db = {
	  notes: new Dexie('notes'),
	  _init: function(db){
	    var version, ref$, schema;
	    for (version in ref$ = window.db._schemas[db]) {
	      schema = ref$[version];
	      window.db[db].version(version).stores(schema);
	    }
	    window.db[db].open();
	  },
	  _schemas: {
	    notes: {}
	  },
	  _version: function(db, version, schema){
	    window.db._schemas[db][version] = schema;
	  },
	  _table: {
	    rcx: {
	      1: '++id, title, tree, notes, date, labels, status, date_start, date_end',
	      2: ''
	    }
	  }
	};
	window.db._version('notes', 1, {
	  bible: db._table['rcx'][1],
	  health: db._table['rcx'][1],
	  general: db._table['rcx'][1],
	  web: db._table['rcx'][1],
	  signal: db._table['rcx'][1]
	});
	window.db._init('notes');
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\app\data\indexeddb\notes\db.ls.map


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var props;
	props = {
	  editors: {
	    notes: {
	      id: 'content__editors__notes'
	    }
	  },
	  lists: {
	    main: {
	      id: 'content__list',
	      name: 'main'
	    }
	  },
	  router: {
	    id: {
	      pattern: '/id/:id'
	    },
	    tree: {
	      pattern: '/tree/?((w|.)*)'
	    }
	  }
	};
	if (true) {
	  module.exports = props;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\app\lib\props.ls.map


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Data;
	Data = function(db, table){
	  this.db = db;
	  this.table = table;
	};
	Data.prototype = {
	  constructor: Data,
	  create: function(attrs, cb){
	    this.db[this.table].add(attrs).then(function(id){
	      cb(id);
	    });
	  },
	  createAll: function(data, cb){},
	  find: function(id, cb){
	    this.db[this.table].get(id, function(item){
	      cb(item);
	    });
	  },
	  findAll: function(cb){
	    var list;
	    list = [];
	    this.db[this.table].each(function(item){
	      list.push(item);
	    }).then(function(){
	      cb(list);
	    });
	  },
	  update: function(id, attrs, cb){
	    this.db[this.table].update(id, attrs).then(function(){
	      cb(id);
	    });
	  },
	  updateAll: function(data, cb){},
	  destroy: function(id, cb){
	    var item, index, i$, ref$, len$;
	    item = {};
	    index = -1;
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    if (index > -1) {
	      this.list.splice(index, 1);
	    }
	    if (cb) {
	      cb(item);
	    }
	    item;
	    function fn$(i, el){
	      if (el.id === id) {
	        index = i;
	        item = el;
	      }
	    }
	  },
	  destroyAll: function(ids, cb){}
	};
	if (true) {
	  module.exports = Data;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\app\data\indexeddb\notes\data.ls.map


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = " <section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-file-text-o\"></i>&nbspNotes (Bible)<small>0.1.0</small></h1><ol class=\"breadcrumb\"><li><a href=\"#/\"><i class=\"fa fa-file-text-o\"></i>Notes</a></li><li><a href=\"#/\"><i class=\"fa fa-book\"></i>Bible</a></li></ol></section><section id=\"\" class=\"content\"><div class=\"row\"><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__editors__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__editors__run__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAuto</div><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__editors__save\" class=\"btn btn-success\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__editors__save__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAuto</div><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__editors__load\" class=\"btn btn-warning\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__editors__load__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAuto</div><div class=\"col-xs-12 col-sm-3 col-md-6\"><span style=\"float: right;\">Alternative Layout&nbsp&nbsp<input id=\"content__layout__alt\" type=\"checkbox\" style=\"float: right;\"></span></div></div><br><div id=\"content__layout\" class=\"row\"><div style=\"padding-right: 7px\" class=\"col-md-6\"><div class=\"nav-tabs-custom\"><ul id=\"tab__menu__editors\" class=\"nav nav-tabs\"><li style=\"\" class=\"active\"><a id=\"tab__menu__main__notes\" href=\"#tab__notes\" data-toggle=\"tab\"><i class=\"fa fa-file-text\"></i>&nbsp&nbsp Notes</a></li><li style=\"\"><a id=\"tab__menu__editors__output1\" href=\"#tab__output1\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li></ul><div class=\"tab-content\"><div id=\"tab__notes\" class=\"tab-pane fade in active\"><textarea id=\"content__editors__notes\"></textarea><br><button type=\"button\" id=\"content__undefined__notes__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__undefined__notes__import\"></span>&nbsp&nbsp</div><div id=\"tab__output1\" class=\"tab-pane fade in undefined\"><div id=\"content__output1__iframe__holder\" class=\"tab-pane fade in undefined\"><iframe id=\"content__output1__iframe\"></iframe></div><br><button type=\"button\" id=\"content__output1__iframe__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<button type=\"button\" id=\"content__output1__iframe__urlhash__button\" class=\"btn\"><i class=\"fa fa-hashtag\"></i></button>&nbsp&nbsp<input type=\"text\" id=\"content__output1__iframe__urlhash__input\" style=\"display: inline-block; width: 80%; color: #333 !important; background-color: white !important;\" class=\"form-control\"></div></div></div></div><div style=\"padding-left: 7px\" class=\"col-md-6\"><div class=\"nav-tabs-custom\"><ul id=\"tab__menu__main\" class=\"nav nav-tabs\"><li style=\"\" class=\"active\"><a id=\"tab__menu__main__calendar\" href=\"#tab__calendar\" data-toggle=\"tab\"><i class=\"fa fa-calendar\"></i>&nbsp&nbsp Calendar</a></li><li style=\"\"><a id=\"tab__menu__main__tree\" href=\"#tab__tree\" data-toggle=\"tab\"><i class=\"fa fa-sitemap\"></i>&nbsp&nbsp Tree</a></li><li style=\"\"><a id=\"tab__menu__main__list\" href=\"#tab__list\" data-toggle=\"tab\"><i class=\"fa fa-list\"></i>&nbsp&nbsp List</a></li><li style=\"\"><a id=\"tab__menu__main__reports\" href=\"#tab__reports\" data-toggle=\"tab\"><i class=\"fa fa-bar-chart\"></i>&nbsp&nbsp Report(s)</a></li><li style=\"\"><a id=\"tab__menu__editors__output2\" href=\"#tab__output2\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li></ul><div class=\"tab-content\"><div id=\"tab__calendar\" class=\"tab-pane fade in active\"><div class=\"row\"><div class=\"col-md-12\"><div id=\"tab__calendar\" class=\"tab-pane fade in\"><button id=\"content__calendar__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button><div id=\"content__calendar\"></div></div></div></div></div><div id=\"tab__tree\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-6\"><button id=\"content__tree__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-6\"></div></div><div class=\"row\"><div class=\"col-md-6\"><h3>Tree Search</h3><div class=\"row\"><div class=\"col-md-12\"><input type=\"text\" placeholder=\"Tree\" id=\"content__tree__search__tree\" style=\"width:100%;\" class=\"form-control\"></div></div><div class=\"row\"><div class=\"col-md-12\"><input placeholder=\"Title\" style=\"width:100%;\" id=\"content__tree__search__title\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"ID (#)\" style=\"width:100%;\" id=\"content__tree__search__id\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Date (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__search__date\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Date Start (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__search__date_start\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Date End (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__search__date_end\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Status\" style=\"width:100%;\" id=\"content__tree__search__status\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Labels\" style=\"width:100%;\" id=\"content__tree__search__labels\" disabled class=\"form-control\"></div></div><br></div><div class=\"col-md-6\"><h3>Tree Node</h3><div class=\"row\"><div class=\"col-md-12\"><input type=\"text\" placeholder=\"Tree\" id=\"content__tree__node__tree\" style=\"width:100%;\" class=\"form-control\"></div></div><div class=\"row\"><div class=\"col-md-12\"><input placeholder=\"Title\" style=\"width:100%;\" id=\"content__tree__node__title\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"ID (#)\" style=\"width:100%;\" id=\"content__tree__node__id\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Date (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__node__date\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Date Start (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__node__date_start\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Date End (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__node__date_end\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Status\" style=\"width:100%;\" id=\"content__tree__node__status\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Labels\" style=\"width:100%;\" id=\"content__tree__node__labels\" disabled class=\"form-control\"></div></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div id=\"content__tree__holder\"><div id=\"content__tree\"></div></div></div></div></div><div id=\"tab__list\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-12\"><button id=\"content__list__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__list__add\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button><button id=\"content__list__delete\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row table-responsive\"><div style=\"padding: 0;\" class=\"col-md-12\"><h3>List</h3></div><div style=\"padding: 0;\" class=\"col-md-12\"><input id=\"content__list__title\" type=\"text\" placeholder=\"Title\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-12\"><input id=\"content__list__tree\" type=\"text\" placeholder=\"Tree\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-8\"><input id=\"content__list__labels\" type=\"text\" placeholder=\"Labels\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-4\"><input id=\"content__list__status\" type=\"text\" placeholder=\"Status\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-4\"><input id=\"content__list__date\" type=\"text\" placeholder=\"Date (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-4\"><input id=\"content__list__date_start\" type=\"text\" placeholder=\"Date Start (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-4\"><input id=\"content__list__date_end\" type=\"text\" placeholder=\"Date Start (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12\"><div id=\"content__list__responsive\"><table id=\"content__list\" class=\"table table-bordered table-hover\"></table></div></div></div><br><div class=\"row\"><div class=\"col-md-12\"><button id=\"content__list__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__list__import\" type=\"file\"></span></div></div></div><div id=\"tab__reports\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-12\"><button id=\"content__reports__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button></div></div><br><div class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__report__date\" data-toggle=\"tab\">Notes by Date</a></li><li><a href=\"#tab__report__status\" data-toggle=\"tab\">Notes by Status</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__report__date\" class=\"tab-pane fade in active\"><div class=\"row\"><div style=\"padding-bottom: 20px\" class=\"col-md-12\"><h3>Notes by Date</h3><input type=\"text\" placeholder=\"DD/MM/YYYY (Date)\" id=\"content__reports__date__date\" class=\"form-control\"></div><div class=\"col-md-12\"><div style=\"height: 300px;\" class=\"table-responsive\"><div id=\"content__charts__date\"></div></div><div style=\"padding-top: 10px\" class=\"table-responsive\"><table id=\"content__reports__date\" class=\"table-bordered table-condensed\"></table></div></div></div></div><div id=\"tab__report__status\" class=\"tab-pane fade in\"><div class=\"row\"><div style=\"padding-bottom: 20px\" class=\"col-md-12\"><h3>Notes by Status</h3><input type=\"text\" placeholder=\"(Status)\" id=\"content__reports__status__status\" class=\"form-control\"></div><div class=\"col-md-12\"><div style=\"height: 300px;\" class=\"table-responsive\"><div id=\"content__charts__status\"></div></div><div style=\"padding-top: 10px\" class=\"table-responsive\"><table id=\"content__reports__status\" class=\"table-bordered table-condensed\"></table></div></div></div></div></div></div></div></div><div id=\"tab__output2\" class=\"tab-pane fade in undefined\"><div id=\"content__output2__iframe__holder\" class=\"tab-pane fade in undefined\"><iframe id=\"content__output2__iframe\"></iframe></div><br><button type=\"button\" id=\"content__output2__iframe__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<button type=\"button\" id=\"content__output2__iframe__urlhash__button\" class=\"btn\"><i class=\"fa fa-hashtag\"></i></button>&nbsp&nbsp<input type=\"text\" id=\"content__output2__iframe__urlhash__input\" style=\"display: inline-block; width: 80%; color: #333 !important; background-color: white !important;\" class=\"form-control\"></div></div></div></div></div></section>";

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = " <section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-file-text-o\"></i>&nbspNotes (Bible)<small>0.1.0</small></h1><ol class=\"breadcrumb\"><li><a href=\"#/\"><i class=\"fa fa-file-text-o\"></i>Notes</a></li><li><a href=\"#/\"><i class=\"fa fa-book\"></i>Bible</a></li></ol></section><section id=\"\" class=\"content\"><div class=\"row\"><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__editors__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__editors__run__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAuto</div><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__editors__save\" class=\"btn btn-success\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__editors__save__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAuto</div><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__editors__load\" class=\"btn btn-warning\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__editors__load__auto\" type=\"checkbox\" class=\"content__icheck\">&nbsp&nbspAuto</div><div class=\"col-xs-12 col-sm-3 col-md-6\"><span style=\"float: right;\">Alternative Layout&nbsp&nbsp<input id=\"content__layout__alt\" type=\"checkbox\" style=\"float: right;\"></span></div></div><br><div id=\"content__layout\" class=\"row\"><div class=\"col-sm-12\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__editors\" data-toggle=\"tab\">Editors</a></li><li><a href=\"#tab__main\" data-toggle=\"tab\">Main</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__editors\" class=\"tab-pane active\"><div class=\"nav-tabs-custom\"><ul id=\"tab__menu__editors\" class=\"nav nav-tabs\"><li style=\"\" class=\"active\"><a id=\"tab__menu__main__notes\" href=\"#tab__notes\" data-toggle=\"tab\"><i class=\"fa fa-file-text\"></i>&nbsp&nbsp Notes</a></li><li style=\"\"><a id=\"tab__menu__editors__output1\" href=\"#tab__output1\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li></ul><div class=\"tab-content\"><div id=\"tab__notes\" class=\"tab-pane fade in active\"><textarea id=\"content__editors__notes\"></textarea><br><button type=\"button\" id=\"content__undefined__notes__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__undefined__notes__import\"></span>&nbsp&nbsp</div><div id=\"tab__output1\" class=\"tab-pane fade in undefined\"><div id=\"content__output1__iframe__holder\" class=\"tab-pane fade in undefined\"><iframe id=\"content__output1__iframe\"></iframe></div><br><button type=\"button\" id=\"content__output1__iframe__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<button type=\"button\" id=\"content__output1__iframe__urlhash__button\" class=\"btn\"><i class=\"fa fa-hashtag\"></i></button>&nbsp&nbsp<input type=\"text\" id=\"content__output1__iframe__urlhash__input\" style=\"display: inline-block; width: 80%; color: #333 !important; background-color: white !important;\" class=\"form-control\"></div></div></div></div><div id=\"tab__main\" class=\"tab-pane\"><div class=\"nav-tabs-custom\"><ul id=\"tab__menu__main\" class=\"nav nav-tabs\"><li style=\"\" class=\"active\"><a id=\"tab__menu__main__calendar\" href=\"#tab__calendar\" data-toggle=\"tab\"><i class=\"fa fa-calendar\"></i>&nbsp&nbsp Calendar</a></li><li style=\"\"><a id=\"tab__menu__main__tree\" href=\"#tab__tree\" data-toggle=\"tab\"><i class=\"fa fa-sitemap\"></i>&nbsp&nbsp Tree</a></li><li style=\"\"><a id=\"tab__menu__main__list\" href=\"#tab__list\" data-toggle=\"tab\"><i class=\"fa fa-list\"></i>&nbsp&nbsp List</a></li><li style=\"\"><a id=\"tab__menu__main__reports\" href=\"#tab__reports\" data-toggle=\"tab\"><i class=\"fa fa-bar-chart\"></i>&nbsp&nbsp Report(s)</a></li><li style=\"\"><a id=\"tab__menu__editors__output2\" href=\"#tab__output2\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li></ul><div class=\"tab-content\"><div id=\"tab__calendar\" class=\"tab-pane fade in active\"><div class=\"row\"><div class=\"col-md-12\"><div id=\"tab__calendar\" class=\"tab-pane fade in\"><button id=\"content__calendar__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button><div id=\"content__calendar\"></div></div></div></div></div><div id=\"tab__tree\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-6\"><button id=\"content__tree__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-6\"></div></div><div class=\"row\"><div class=\"col-md-6\"><h3>Tree Search</h3><div class=\"row\"><div class=\"col-md-12\"><input type=\"text\" placeholder=\"Tree\" id=\"content__tree__search__tree\" style=\"width:100%;\" class=\"form-control\"></div></div><div class=\"row\"><div class=\"col-md-12\"><input placeholder=\"Title\" style=\"width:100%;\" id=\"content__tree__search__title\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"ID (#)\" style=\"width:100%;\" id=\"content__tree__search__id\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Date (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__search__date\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Date Start (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__search__date_start\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Date End (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__search__date_end\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Status\" style=\"width:100%;\" id=\"content__tree__search__status\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Labels\" style=\"width:100%;\" id=\"content__tree__search__labels\" disabled class=\"form-control\"></div></div><br></div><div class=\"col-md-6\"><h3>Tree Node</h3><div class=\"row\"><div class=\"col-md-12\"><input type=\"text\" placeholder=\"Tree\" id=\"content__tree__node__tree\" style=\"width:100%;\" class=\"form-control\"></div></div><div class=\"row\"><div class=\"col-md-12\"><input placeholder=\"Title\" style=\"width:100%;\" id=\"content__tree__node__title\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"ID (#)\" style=\"width:100%;\" id=\"content__tree__node__id\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Date (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__node__date\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Date Start (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__node__date_start\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Date End (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__node__date_end\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Status\" style=\"width:100%;\" id=\"content__tree__node__status\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Labels\" style=\"width:100%;\" id=\"content__tree__node__labels\" disabled class=\"form-control\"></div></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div id=\"content__tree__holder\"><div id=\"content__tree\"></div></div></div></div></div><div id=\"tab__list\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-12\"><button id=\"content__list__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__list__add\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button><button id=\"content__list__delete\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row table-responsive\"><div style=\"padding: 0;\" class=\"col-md-12\"><h3>List</h3></div><div style=\"padding: 0;\" class=\"col-md-12\"><input id=\"content__list__title\" type=\"text\" placeholder=\"Title\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-12\"><input id=\"content__list__tree\" type=\"text\" placeholder=\"Tree\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-8\"><input id=\"content__list__labels\" type=\"text\" placeholder=\"Labels\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-4\"><input id=\"content__list__status\" type=\"text\" placeholder=\"Status\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-4\"><input id=\"content__list__date\" type=\"text\" placeholder=\"Date (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-4\"><input id=\"content__list__date_start\" type=\"text\" placeholder=\"Date Start (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-4\"><input id=\"content__list__date_end\" type=\"text\" placeholder=\"Date Start (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12\"><div id=\"content__list__responsive\"><table id=\"content__list\" class=\"table table-bordered table-hover\"></table></div></div></div><br><div class=\"row\"><div class=\"col-md-12\"><button id=\"content__list__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__list__import\" type=\"file\"></span></div></div></div><div id=\"tab__reports\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-12\"><button id=\"content__reports__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button></div></div><br><div class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__report__date\" data-toggle=\"tab\">Notes by Date</a></li><li><a href=\"#tab__report__status\" data-toggle=\"tab\">Notes by Status</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__report__date\" class=\"tab-pane fade in active\"><div class=\"row\"><div style=\"padding-bottom: 20px\" class=\"col-md-12\"><h3>Notes by Date</h3><input type=\"text\" placeholder=\"DD/MM/YYYY (Date)\" id=\"content__reports__date__date\" class=\"form-control\"></div><div class=\"col-md-12\"><div style=\"height: 300px;\" class=\"table-responsive\"><div id=\"content__charts__date\"></div></div><div style=\"padding-top: 10px\" class=\"table-responsive\"><table id=\"content__reports__date\" class=\"table-bordered table-condensed\"></table></div></div></div></div><div id=\"tab__report__status\" class=\"tab-pane fade in\"><div class=\"row\"><div style=\"padding-bottom: 20px\" class=\"col-md-12\"><h3>Notes by Status</h3><input type=\"text\" placeholder=\"(Status)\" id=\"content__reports__status__status\" class=\"form-control\"></div><div class=\"col-md-12\"><div style=\"height: 300px;\" class=\"table-responsive\"><div id=\"content__charts__status\"></div></div><div style=\"padding-top: 10px\" class=\"table-responsive\"><table id=\"content__reports__status\" class=\"table-bordered table-condensed\"></table></div></div></div></div></div></div></div></div><div id=\"tab__output2\" class=\"tab-pane fade in undefined\"><div id=\"content__output2__iframe__holder\" class=\"tab-pane fade in undefined\"><iframe id=\"content__output2__iframe\"></iframe></div><br><button type=\"button\" id=\"content__output2__iframe__export\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<button type=\"button\" id=\"content__output2__iframe__urlhash__button\" class=\"btn\"><i class=\"fa fa-hashtag\"></i></button>&nbsp&nbsp<input type=\"text\" id=\"content__output2__iframe__urlhash__input\" style=\"display: inline-block; width: 80%; color: #333 !important; background-color: white !important;\" class=\"form-control\"></div></div></div></div></div></div></div></div></section>";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(props, data, tmpl){
	  this.props = props;
	  this.data = data;
	  this.tmpl = tmpl;
	  this.id = null;
	  this.editors = {};
	  this.lists = {};
	  this.router = {};
	};
	Component.prototype = {
	  constructor: Component,
	  init: function(){
	    var _this;
	    _this = this;
	    this.editors.notes = this.editorCreate(this.props.editors.notes);
	    this.listCreate(this.props.lists.main);
	    this.routeCreate(this.props.router);
	    $('#content__editors__save').click(function(){
	      _this.editorSaveId();
	    });
	  },
	  editorCreate: function(o){
	    return this.editorCreateCdm(o);
	  },
	  editorLoadId: function(){
	    this.editorLoadIdCdm();
	  },
	  editorSaveId: function(){
	    this.editorSaveIdCdm();
	  },
	  listCreate: function(o){
	    this.listCreateDtb(o);
	  },
	  listGetData: function(data){
	    return this.listGetDataDtb(data);
	  },
	  listGetColumns: function(){
	    return this.listGetColumnsDtb();
	  },
	  routeCreate: function(o){
	    this.routeCreateDir(o);
	  },
	  routeSetId: function(id){
	    this.routeSetIdDir(id);
	  },
	  editorCreateCdm: function(o){
	    return CodeMirror.fromTextArea(document.getElementById(o.id), {
	      mode: o.mode || 'text/plain',
	      theme: 'blackboard',
	      gutters: ['CodeMirror-lint-markers'],
	      tabMode: 'indent',
	      lineNumbers: true,
	      indentUnit: 2,
	      lineWrapping: true,
	      lint: o.lint || false
	    });
	  },
	  editorLoadIdCdm: function(){
	    var _this, id, cb;
	    _this = this;
	    id = this.id;
	    cb = function(data){
	      _this.editors.notes.setValue(data.notes || '');
	    };
	    this.data.find(parseInt(id), cb);
	  },
	  editorSaveIdCdm: function(){
	    var _this, id, attrs, cb;
	    _this = this;
	    id = this.id;
	    attrs = {
	      notes: this.editors.notes.getValue()
	    };
	    cb = function(id){
	      console.log('Update', id);
	    };
	    this.data.update(parseInt(id), attrs, cb);
	  },
	  listCreateDtb: function(o){
	    var _this, cb;
	    _this = this;
	    cb = function(data){
	      var table;
	      table = {
	        data: _this.listGetData(data),
	        columns: _this.listGetColumns(),
	        order: [[1, 'desc']]
	      };
	      _this.lists['main'] = $('#content__list').DataTable(table);
	    };
	    return this.data.findAll(cb);
	  },
	  listGetDataDtb: function(data){
	    var _data;
	    _data = [];
	    data.map(function(item){
	      var _item;
	      _item = function(val, attr){
	        return '<span data-id="' + item.id + '" data-attr="' + attr + '">' + val + '</span>' || '';
	      };
	      _data.push(['<input type="checkbox" data-id="' + item.id + '">', '<a onclick="app.component.routeSetId(' + item.id + ')">' + item.id + '</a>', _item(item.title || '', 'title'), _item(item.tree || '', 'tree'), _item(item.labels || '', 'labels'), _item(item.status || '', 'status'), _item(item.date || '', 'date'), _item(item.date_start || '', 'date_start'), _item(item.date_end || '', 'date_end')]);
	    });
	    return _data;
	  },
	  listGetColumnsDtb: function(){
	    var columns;
	    columns = [
	      {
	        title: '<input type="checkbox">',
	        width: '5%',
	        'orderable': false
	      }, {
	        title: '#',
	        width: '5%'
	      }, {
	        title: 'Title',
	        width: '20%'
	      }, {
	        title: 'Tree',
	        width: '10%'
	      }, {
	        title: 'Labels',
	        width: '10%'
	      }, {
	        title: 'Status',
	        width: '5%'
	      }, {
	        title: 'Date',
	        width: '5%'
	      }, {
	        title: 'Date Start',
	        width: '5%'
	      }, {
	        title: 'Date End',
	        width: '5%'
	      }
	    ];
	    return columns;
	  },
	  routeCreateDir: function(o){
	    var _this, routes;
	    _this = this;
	    routes = {};
	    routes['/id/:id'] = function(id){
	      _this.id = id;
	      _this.editorLoadId();
	    };
	    this.router = Router(routes);
	    this.router.init();
	  },
	  routeSetIdDir: function(id){
	    return this.router.setRoute('id/' + id);
	  }
	};
	if (true) {
	  module.exports = Component;
	}
	//# sourceMappingURL=e:\app\node_modules\livescript-loader\index.js!e:\app\src\app\component\jquery\notes\component.ls.map


/***/ }
/******/ ]);