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

	__webpack_require__(1);
	__webpack_require__(2);
	db._init('app');
	app.html.time = {
	  time: __webpack_require__(3)
	};
	app.data.time = {};
	__webpack_require__(4);
	app.component.time = {};
	__webpack_require__(5);
	$('#app').html(app.html.time.time);
	app.component.time.time.init();
	//# sourceMappingURL=e:\__\app-19-3-2\node_modules\livescript-loader\index.js!e:\__\app-19-3-2\src\time\index\index.ls.map


/***/ },
/* 1 */
/***/ function(module, exports) {

	window.db = {
	  app: new Dexie('_app'),
	  _init: function(db){
	    var version, ref$, schema;
	    for (version in ref$ = window.db._schemas[db]) {
	      schema = ref$[version];
	      window.db[db].version(version).stores(schema);
	    }
	    window.db[db].open();
	  },
	  _schemas: {
	    app: {}
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
	//# sourceMappingURL=e:\__\app-19-3-2\node_modules\livescript-loader\index.js!e:\__\app-19-3-2\src\_app\data-indexeddb-dexie\_db.ls.map


/***/ },
/* 2 */
/***/ function(module, exports) {

	db._version('app', 2, {
	  time: '++id, ministry, message, date, time_in, time_out, computed_hours, labels, tree',
	  schroth: '++id, type, date, reps'
	});
	db._version('app', 1, {
	  time: '++id, ministry, message, date, time_in, time_out, computed_hours, labels, tree'
	});
	//# sourceMappingURL=e:\__\app-19-3-2\node_modules\livescript-loader\index.js!e:\__\app-19-3-2\src\_app\data-indexeddb-dexie\_app-v1-10.ls.map


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "      <section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-clock-o\"></i>&nbspTime<small>0.1.0</small></h1><ol class=\"breadcrumb\"><li><a href=\"#/\"><i class=\"fa fa-clock-o\"></i>Time</a></li></ol></section><section id=\"\" class=\"content\"><div id=\"content__layout\" class=\"row\"><div style=\"padding-right: 7px\" class=\"col-md-4\"><div class=\"nav-tabs-custom\"><ul id=\"tab__menu__editors\" class=\"nav nav-tabs\"><li style=\"margin-right: 0\" class=\"active pull-right\"><a id=\"tab__menu__editors__time\" href=\"#tab__time\" data-toggle=\"tab\"><i class=\"fa fa-clock-o\"></i>&nbsp&nbsp Time</a></li></ul><div class=\"tab-content\"><div id=\"tab__time\" class=\"tab-pane fade in active\"><form id=\"content__clock\" role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><div class=\"col-md-4\"><input id=\"content__time__button\" type=\"button\" value=\"Time-in\" class=\"btn pull-right btn-primary\"></div><div class=\"col-md-8\"><div style=\"padding: 0;\" class=\"col-sm-10\"><input id=\"content__time__clock\" type=\"text\" value=\"07:30:00 PM\" disabled style=\"width: 110px;font-weight: bold;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-sm-2\"><button id=\"content__time__last\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button></div></div></div><div class=\"form-group\"><div class=\"col-md-4\"><label class=\"pull-right\">Ministry</label></div><div class=\"col-md-8\"><select id=\"content__time__ministry\" style=\"width: 100%;\" class=\"form-control\"><option value=\"Bible\">Bible</option><option value=\"Health\">Health</option><option value=\"General\">General</option><option value=\"Web\" selected>Web</option><option value=\"Signal\">Signal</option></select></div></div><div class=\"form-group\"><div class=\"col-md-4\"><label class=\"pull-right\">Message</label></div><div class=\"col-md-8\"><textarea id=\"content__time__message\" style=\"width: 100%; height: 200px;\" class=\"form-control\"></textarea></div></div></form></div></div></div></div><div style=\"padding-left: 7px\" class=\"col-md-8\"><div class=\"nav-tabs-custom\"><ul id=\"tab__menu__main\" class=\"nav nav-tabs\"><li style=\"\" class=\"active\"><a id=\"tab__menu__main__reports\" href=\"#tab__reports\" data-toggle=\"tab\"><i class=\"fa fa-bar-chart\"></i>&nbsp&nbsp Report(s)</a></li><li style=\"\"><a id=\"tab__menu__main__list\" href=\"#tab__list\" data-toggle=\"tab\"><i class=\"fa fa-list\"></i>&nbsp&nbsp List</a></li><li style=\"\"><a id=\"tab__menu__main__calendar\" href=\"#tab__calendar\" data-toggle=\"tab\"><i class=\"fa fa-calendar\"></i>&nbsp&nbsp Calendar</a></li><li style=\"\"><a id=\"tab__menu__main__tree\" href=\"#tab__tree\" data-toggle=\"tab\"><i class=\"fa fa-sitemap\"></i>&nbsp&nbsp Tree</a></li></ul><div class=\"tab-content\"><div id=\"tab__reports\" class=\"tab-pane fade in active\"><div class=\"row\"><div class=\"col-md-12\"><button id=\"content__reports__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button></div></div><br><div class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__report__date\" data-toggle=\"tab\">Time by Date</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__report__date\" class=\"tab-pane fade in active\"><div class=\"row\"><div style=\"padding-bottom: 20px\" class=\"col-md-12\"><h3>Time by Date</h3><input type=\"text\" placeholder=\"DD/MM/YYYY (Date)\" id=\"content__reports__date__date\" class=\"form-control\"></div><div class=\"col-md-12\"><div style=\"height: 300px;\" class=\"table-responsive\"><div id=\"content__charts__date\"></div></div><div style=\"padding-top: 10px\" class=\"table-responsive\"><table id=\"content__reports__date\" class=\"table-bordered table-condensed\"></table></div></div></div></div></div></div></div></div><div id=\"tab__list\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-12\"><button id=\"content__list__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button>&nbsp&nbsp<button id=\"content__list__add\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button><button id=\"content__list__delete\" type=\"button\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div style=\"margin-left: 0; margin-right: 0\" class=\"row table-responsive\"><div style=\"padding: 0;\" class=\"col-md-12\"><h3>List</h3></div><div style=\"padding: 0;\" class=\"col-md-6\"><input id=\"content__list__ministry\" type=\"text\" placeholder=\"Ministry\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-6\"><input id=\"content__list__tree\" type=\"text\" placeholder=\"Tree\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-6\"><input id=\"content__list__date\" type=\"text\" placeholder=\"Date (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 0;\" class=\"col-md-6\"><input id=\"content__list__labels\" type=\"text\" placeholder=\"Labels\" style=\"width: 100%;\" class=\"form-control\"></div><div style=\"padding: 10px 0 0 0;\" class=\"col-md-12\"><div id=\"content__list__responsive\"><table id=\"content__list\" class=\"table table-bordered table-hover\"></table></div></div></div><br><div class=\"row\"><div class=\"col-md-12\"><button id=\"content__list__export\" type=\"button\" class=\"btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__list__import\" type=\"file\"></span></div></div></div><div id=\"tab__calendar\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-12\"><div id=\"tab__calendar\" class=\"tab-pane fade in\"><button id=\"content__calendar__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button><div id=\"content__calendar\"></div></div></div></div></div><div id=\"tab__tree\" class=\"tab-pane fade in\"><div class=\"row\"><div class=\"col-md-6\"><button id=\"content__tree__refresh\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"col-md-6\"></div></div><div class=\"row\"><div class=\"col-md-6\"><h3>Tree Search</h3><div class=\"row\"><div class=\"col-md-12\"><input type=\"text\" placeholder=\"Tree\" id=\"content__tree__search__tree\" style=\"width:100%;\" class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Ministry\" style=\"width:100%;\" id=\"content__tree__search__title\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Labels\" style=\"width:100%;\" id=\"content__tree__search__labels\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"ID (#)\" style=\"width:100%;\" id=\"content__tree__search__id\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Date (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__search__date\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Time In\" style=\"width:100%;\" id=\"content__tree__search__time_in\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Time Out\" style=\"width:100%;\" id=\"content__tree__search__time_out\" disabled class=\"form-control\"></div></div><br><div id=\"content__tree__holder\"><div id=\"content__tree\"></div></div></div><div class=\"col-md-6\"><h3>Tree Node</h3><div class=\"row\"><div class=\"col-md-12\"><input type=\"text\" placeholder=\"Tree\" id=\"content__tree__node__tree\" style=\"width:100%;\" class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Ministry\" style=\"width:100%;\" id=\"content__tree__node__title\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Labels\" style=\"width:100%;\" id=\"content__tree__node__labels\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"ID (#)\" style=\"width:100%;\" id=\"content__tree__node__id\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Date (DD/MM/YYYY)\" style=\"width:100%;\" id=\"content__tree__node__date\" disabled class=\"form-control\"></div></div><div class=\"row\"><div style=\"padding-right: 0;\" class=\"col-md-6\"><input placeholder=\"Time In\" style=\"width:100%;\" id=\"content__tree__node__time_in\" disabled class=\"form-control\"></div><div style=\"padding-left: 0;\" class=\"col-md-6\"><input placeholder=\"Time Out\" style=\"width:100%;\" id=\"content__tree__node__time_out\" disabled class=\"form-control\"></div></div></div></div></div></div></div></div></div></section>";

/***/ },
/* 4 */
/***/ function(module, exports) {

	app.data.time.time = function(){
	  var o;
	  o = {};
	  o.db = window.db.app;
	  o.time = function(cb){
	    o.db.time.toCollection().last().then(function(item){
	      return cb(item);
	    })['catch'](function(){
	      cb({
	        type: 'Time-Out'
	      });
	    });
	  };
	  o.report = function(key, cb){
	    var _data;
	    _data = {};
	    o.db.time.orderBy(key).uniqueKeys().then(function(keys){
	      var i$, len$, results$ = [];
	      _data[''] = {
	        sum_bible: 0,
	        sum_health: 0,
	        sum_web: 0,
	        sum_signal: 0
	      };
	      for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
	        results$.push((fn$.call(this, i$, keys[i$])));
	      }
	      return results$;
	      function fn$(index, key){
	        return _data[key] = {
	          sum_bible: 0,
	          sum_health: 0,
	          sum_web: 0,
	          sum_signal: 0
	        };
	      }
	    }).then(function(){
	      return o.db.time.each(function(item){
	        _data[item[key] || '']['sum_' + (item.ministry.toLowerCase() || 'web')] += parseFloat(item.computed_hours || 0);
	      });
	    }).then(function(){
	      console.log(_data);
	      cb(_data);
	    });
	  };
	  o.list = function(cb){
	    var _data;
	    _data = [];
	    o.db.time.each(function(item){
	      _data.push(item);
	    }).then(function(){
	      cb(_data);
	    });
	  };
	  o.add = function(data, cb){
	    o.db.time.add(data).then(function(id){
	      cb(id);
	    });
	  };
	  o.edit = function(id, cb){
	    o.db.time.get(id, function(item){
	      cb(item);
	    });
	  };
	  o.update = function(id, data, cb){
	    o.db.time.update(id, data).then(function(){
	      cb();
	    });
	  };
	  o.remove = function(id, cb){
	    o.db.time['delete'](id).then(function(){
	      cb();
	    });
	  };
	  o['import'] = function(data, cb){
	    o.db.transaction('rw', 'app', function(){
	      var i$, ref$, len$, i, el, results$ = [];
	      for (i$ = 0, len$ = (ref$ = data).length; i$ < len$; ++i$) {
	        i = i$;
	        el = ref$[i$];
	        results$.push(o.db.time.put(el));
	      }
	      return results$;
	    }).then(function(){
	      cb();
	    });
	  };
	  return o;
	}();
	//# sourceMappingURL=e:\__\app-19-3-2\node_modules\livescript-loader\index.js!e:\__\app-19-3-2\src\time\data-indexeddb-dexie\data.ls.map


/***/ },
/* 5 */
/***/ function(module, exports) {

	app.component.time.time = function(){
	  var o;
	  o = {};
	  o.data = {};
	  o.router = {};
	  o.id = null;
	  o.editors = {};
	  o.delays = {};
	  o.exports = {};
	  o.trees = {};
	  o.lists = {};
	  o.reports = {};
	  o.charts = {};
	  o.calendars = {};
	  o.helpers = {};
	  o.filters = {};
	  o.refresh = {};
	  o.computed_hours = 0;
	  o.type = 'Time-In';
	  o.clockTimeout = '';
	  o.init = function(){
	    console.log('Time!');
	    o.data = app.data.time.time;
	    $('#content__time__button').click(function(){
	      o.time();
	    });
	    $('#content__time__last').click(function(){
	      o.last();
	    });
	    o.last();
	    o.tree();
	    o.helpers.tree.edit();
	    o.helpers.tree.events();
	    o.filters.trees();
	    $('#content__tree__refresh').click(function(){
	      o.refresh.tree();
	    });
	    o.list();
	    $('#content__list__add').click(function(){
	      o.helpers.list.add();
	    });
	    $('#content__list__delete').click(function(){
	      o.helpers.list.remove();
	    });
	    $('#content__list__export').click(function(){
	      o.helpers.list['export']();
	    });
	    o.helpers.list['import']();
	    o.helpers.list.update();
	    o.helpers.list.checkall();
	    o.filters.lists();
	    $('#content__list__refresh').click(function(){
	      o.refresh.list();
	    });
	    o.calendar();
	    o.report({
	      name: 'Date',
	      key: 'date',
	      chart: 'line',
	      helper: 'date'
	    });
	    o.filters.reports();
	    $('#content__reports__refresh').click(function(){
	      o.refresh.reports();
	    });
	  };
	  o.time = function(){
	    var _data, _cb;
	    _data = {
	      ministry: $('#content__time__ministry').val(),
	      message: $('#content__time__message').val(),
	      date: moment().format('DD/MM/YYYY'),
	      time_in: moment().format(),
	      computed_hours: o.computed_hours || 0
	    };
	    _cb = function(last){
	      var _cb_2, _id, _update;
	      _cb_2 = function(){
	        o.last();
	        o.refresh.list();
	        o.refresh.reports();
	      };
	      if (last.time_out) {
	        o.data.add(_data, _cb_2);
	      } else {
	        _id = last.id;
	        _update = {
	          time_out: _data.time_in,
	          computed_hours: o.computed_hours
	        };
	        o.data.update(_id, _update, _cb_2);
	      }
	    };
	    o.data.time(_cb);
	  };
	  o.last = function(){
	    var _cb;
	    _cb = function(last){
	      if (last.time_out) {
	        $('#content__time__button').removeClass('btn-danger').addClass('btn-primary').val('Time-In');
	        clearTimeout(o.clockTimeout);
	        o.clock('Time-In', '');
	        $('#content__time__ministry').val('Web');
	        $('#content__time__message').val('');
	        $('#content__time__ministry').attr('disabled', false);
	        $('#content__time__message').attr('disabled', false);
	      } else {
	        $('#content__time__button').removeClass('btn-primary').addClass('btn-danger').val('Time-Out');
	        clearTimeout(o.clockTimeout);
	        o.clock('Time-Out', last.time_in);
	        $('#content__time__ministry').val(last.ministry);
	        $('#content__time__message').val(last.message);
	        $('#content__time__ministry').attr('disabled', true);
	        $('#content__time__message').attr('disabled', true);
	      }
	    };
	    o.data.time(_cb);
	  };
	  o.clock = function(type, datetime){
	    var _time, _last, _now, _diff;
	    if (type === 'Time-In') {
	      _time = moment().format('hh:mm:ss A');
	      $('#content__time__clock').val(_time);
	      o.type = 'Time-In';
	      o.computed_hours = 0;
	      o.clockTimeout = setTimeout(function(){
	        o.clock('Time-In', '');
	      }, 500);
	    } else {
	      _last = moment.duration(datetime, 'milliseconds');
	      _now = moment.duration(moment().format(), 'milliseconds');
	      _diff = (_now._milliseconds - _last._milliseconds) / 3600000;
	      if (_diff < 0) {
	        _diff += 24;
	      }
	      $('#content__time__clock').val((_diff + '').substring(0, 6));
	      o.type = 'Time-Out';
	      o.computed_hours = parseFloat(_diff.toFixed(4));
	      o.clockTimeout = setTimeout(function(){
	        o.clock('Time-Out', datetime);
	      }, 500);
	    }
	  };
	  o.tree = function(){
	    $('#content__tree').jstree({
	      core: {
	        check_callback: true,
	        strings: {
	          'New node': 'new_node'
	        }
	      },
	      plugins: ['search', 'contextmenu'],
	      contextmenu: {
	        items: o.helpers.tree.actions
	      }
	    });
	    o.refresh.tree();
	  };
	  o.list = function(){
	    var _cb;
	    _cb = function(data){
	      o.lists.list = $('#content__list').DataTable({
	        data: o.helpers.list.data(data),
	        columns: o.helpers.list.columns,
	        order: [[1, 'desc']]
	      });
	    };
	    o.data.list(_cb);
	  };
	  o.calendar = function(){
	    var _cb;
	    $('#content__calendar__refresh').click(function(){
	      o.refresh.calendar();
	    });
	    _cb = function(data){
	      var _color, _data;
	      _color = {
	        0: '#A8A8A8',
	        1: '#dd4b39',
	        2: '#00a65a'
	      };
	      _data = [];
	      data.forEach(function(item, i){
	        var _item;
	        _item = {};
	        _item.title = item.id;
	        _item.tooltip = item.title;
	        _item.id = item.id;
	        _item.start = moment(item.date, 'DD/MM/YYYY').format('YYYY-MM-DD');
	        _item.color = _color[0];
	        _data.push(_item);
	      });
	      $('#content__calendar').fullCalendar({
	        events: _data,
	        eventRender: function(calEvent, element){
	          element.attr('data-toggle', 'tooltip');
	          element.attr('data-placement', 'top');
	          element.attr('data-original-title', calEvent.tooltip);
	        },
	        eventClick: function(calEvent, jsEvent, view){
	          o.route.id(calEvent.id);
	        }
	      });
	    };
	    o.data.list(_cb);
	  };
	  o.report = function(_o){
	    var _key, _cb;
	    _key = _o.key;
	    _cb = function(data){
	      o.reports[_key] = $('#content__reports__' + _key).DataTable({
	        data: o.helpers.report(data),
	        columns: [
	          {
	            title: _o.name,
	            width: '20%'
	          }, {
	            title: 'Bible (red)',
	            width: '20%'
	          }, {
	            title: 'Health (pink)',
	            width: '20%'
	          }, {
	            title: 'Web (yellow)',
	            width: '20%'
	          }, {
	            title: 'Signal (maroon)',
	            width: '20%'
	          }
	        ],
	        order: [[0, 'desc']]
	      });
	      o.chart[_o.chart]({
	        key: _o.key,
	        data: o.helpers.chart[_o.helper](data)
	      });
	    };
	    o.data.report(_key, _cb);
	  };
	  o.chart = {
	    line: function(_o){
	      new Chartist.Line('#content__charts__' + _o.key, _o.data, {
	        low: 0,
	        showArea: true,
	        width: '600px',
	        height: '200px'
	      }, [
	        [
	          '(max-width: 600px)', {
	            width: '400px'
	          }
	        ], [
	          '(max-width: 300px)', {
	            width: '200px'
	          }
	        ]
	      ]);
	    },
	    bar: function(_o){
	      new Chartist.Bar('#content__charts__' + _o.key, _o.data, {
	        width: '600px',
	        height: '200px'
	      }, [
	        [
	          '(max-width: 600px)', {
	            width: '400px'
	          }
	        ], [
	          '(max-width: 300px)', {
	            width: '200px'
	          }
	        ]
	      ]);
	    }
	  };
	  o.helpers = {
	    tree: {
	      edit: function(){
	        $('#content__tree').on('select_node.jstree', function(e, data){
	          var _id, _cb;
	          _id = data.node.li_attr.data_id;
	          _cb = function(item){
	            $('#content__tree__node__id').val(item.id || '');
	            $('#content__tree__node__date').val(item.date || '');
	            $('#content__tree__node__labels').val(item.labels || '');
	            $('#content__tree__node__ministry').val(item.ministry || '');
	            $('#content__tree__node__tree').val(item.tree || '');
	            $('#content__tree__node__time_in').val(item.time_in || '');
	            $('#content__tree__node__time_out').val(item.time_out || '');
	          };
	          o.data.edit(parseInt(_id), _cb);
	          return o.route.id(_id);
	        });
	      },
	      actions: function(node){
	        var tree, _o;
	        tree = $('#content__tree').jstree(true);
	        _o = {
	          create: {
	            separator_before: false,
	            separator_after: false,
	            label: 'Create',
	            action: function(obj){
	              var _node;
	              _node = tree.create_node(node);
	              return tree.edit(_node);
	            }
	          },
	          rename: {
	            separator_before: false,
	            separator_after: false,
	            label: 'Rename',
	            action: function(obj){
	              return tree.edit(node);
	            }
	          },
	          remove: {
	            separator_before: false,
	            separator_after: false,
	            label: 'Remove',
	            action: function(obj){
	              var _children, i$, ref$, len$;
	              _children = [];
	              _children.push(node.li_attr.data_id);
	              for (i$ = 0, len$ = (ref$ = node.children_d).length; i$ < len$; ++i$) {
	                (fn$.call(this, i$, ref$[i$]));
	              }
	              for (i$ = 0, len$ = _children.length; i$ < len$; ++i$) {
	                (fn1$.call(this, i$, _children[i$]));
	              }
	              return tree.delete_node(node);
	              function fn$(i, el){
	                var _child, _child_id;
	                _child = tree.get_node('#' + el);
	                _child_id = _child.li_attr.data_id;
	                _children.push(_child_id);
	              }
	              function fn1$(i, el){
	                o.data.remove(parseInt(el), function(){
	                  o.refresh.tree();
	                });
	              }
	            }
	          },
	          sibling: {
	            separator_before: false,
	            separator_after: false,
	            label: 'Create Sibling',
	            action: function(obj){
	              var _node;
	              _node = tree.create_node(node.parent, {});
	              return tree.edit(_node);
	            }
	          }
	        };
	        return _o;
	      },
	      events: function(){
	        $('#content__tree').on('rename_node.jstree', function(e, data){
	          var tree, _parent_id, _new_id, _id, _data_id, _tree, _data, _cb, _update;
	          tree = $('#content__tree').jstree(true);
	          _parent_id = data.node.parent;
	          _new_id = data.text;
	          _id = _parent_id + '/' + _new_id;
	          _data_id = data.node.li_attr.data_id;
	          _tree = _parent_id === '#'
	            ? _new_id
	            : _parent_id.substr(14, _parent_id.length) + '/' + _new_id;
	          if (data.node.data === null) {
	            tree.set_id(data.node, _id);
	            data.node.data = _tree;
	            _data = {
	              date: moment().format('DD/MM/YYYY'),
	              tree: _tree
	            };
	            _cb = function(id){
	              data.node.li_attr.data_id = id;
	              o.refresh.all('tree');
	            };
	            return o.data.add(_data, _cb);
	          } else {
	            _update = function(){
	              var _children_parent_old, i$, ref$, len$;
	              _children_parent_old = data.node.data;
	              for (i$ = 0, len$ = (ref$ = data.node.children_d).length; i$ < len$; ++i$) {
	                (fn$.call(this, i$, ref$[i$]));
	              }
	              function fn$(i, el){
	                var _child, _child_id, _child_data, _item;
	                _child = tree.get_node('#' + el);
	                _child_id = _child.li_attr.data_id;
	                _child_data = _child.data;
	                _item = {
	                  tree: _child_data.replace(_children_parent_old, _tree)
	                };
	                o.data.update(parseInt(_child_id), _item, function(){
	                  o.refresh.tree();
	                });
	              }
	            };
	            _data = {
	              tree: _tree
	            };
	            _cb = function(){
	              _update();
	              o.refresh.tree();
	            };
	            return o.data.update(parseInt(_data_id), _data, _cb);
	          }
	        });
	      }
	    },
	    chart: {
	      date: function(data){
	        var _chart, _labels, _series_bible, _series_health, _series_web, _series_signal, i$, _min, _max, i, _date, _sum_bible, _sum_health, _sum_web, _sum_signal;
	        _chart = {
	          labels: [],
	          series: []
	        };
	        _labels = [];
	        _series_bible = [];
	        _series_health = [];
	        _series_web = [];
	        _series_signal = [];
	        for (i$ in data) {
	          (fn$.call(this, i$, data[i$]));
	        }
	        _min = _labels.reduce(function(a, b){
	          if (moment(a, 'DD/MM/YYYY').diff(moment(b, 'DD/MM/YYYY')) < 0) {
	            return a;
	          } else {
	            return b;
	          }
	        });
	        _max = _labels.reduce(function(a, b){
	          if (moment(a, 'DD/MM/YYYY').diff(moment(b, 'DD/MM/YYYY')) > 0) {
	            return a;
	          } else {
	            return b;
	          }
	        });
	        i = moment(_min, 'DD/MM/YYYY');
	        while (i.isBefore(moment(_max, 'DD/MM/YYYY').add(1, 'days'))) {
	          _date = i.format('DD/MM/YYYY');
	          _sum_bible = data[_date] ? data[_date].sum_bible : 0;
	          _sum_health = data[_date] ? data[_date].sum_health : 0;
	          _sum_web = data[_date] ? data[_date].sum_web : 0;
	          _sum_signal = data[_date] ? data[_date].sum_signal : 0;
	          _chart.labels.push(_date);
	          _series_bible.push(_sum_bible);
	          _series_health.push(_sum_health);
	          _series_web.push(_sum_web);
	          _series_signal.push(_sum_signal);
	          i.add(1, 'days');
	          console.log(_sum_bible, _sum_health, _sum_web, _sum_signal);
	        }
	        _chart.series.push(_series_bible);
	        _chart.series.push(_series_health);
	        _chart.series.push(_series_web);
	        _chart.series.push(_series_signal);
	        return _chart;
	        function fn$(i, obj){
	          if (i !== '') {
	            _labels.push(i);
	          }
	        }
	      }
	    },
	    report: function(data){
	      var _data, i$;
	      _data = [];
	      for (i$ in data) {
	        (fn$.call(this, i$, data[i$]));
	      }
	      return _data;
	      function fn$(key, attr){
	        _data.push([key, parseFloat(attr.sum_bible.toFixed(4)), parseFloat(attr.sum_health.toFixed(4)), parseFloat(attr.sum_web.toFixed(4)), parseFloat(attr.sum_signal.toFixed(4))]);
	      }
	    },
	    list: {
	      data: function(data){
	        var _data;
	        _data = [];
	        data.map(function(item){
	          var _item;
	          _item = function(val, attr){
	            return '<span data-id="' + item.id + '" data-attr="' + attr + '">' + val + '</span>' || '';
	          };
	          _data.push(['<input type="checkbox" data-id="' + item.id + '">', _item(item.id || '', 'id'), _item(item.ministry || '', 'ministry'), _item(item.message || '', 'message'), _item(item.date || '', 'date'), _item(item.time_in || '', 'time_in'), _item(item.time_out || '', 'time_out'), _item(item.computed_hours || '', 'computed_hours'), _item(item.labels || '', 'labels'), _item(item.tree || '', 'tree')]);
	        });
	        return _data;
	      },
	      columns: [
	        {
	          title: '<input type="checkbox">',
	          width: '5%',
	          'orderable': false
	        }, {
	          title: '#',
	          width: '5%'
	        }, {
	          title: 'Ministry',
	          width: '5%'
	        }, {
	          title: 'Message',
	          width: '15%'
	        }, {
	          title: 'Date',
	          width: '5%'
	        }, {
	          title: 'Time In',
	          width: '5%'
	        }, {
	          title: 'Time Out',
	          width: '5%'
	        }, {
	          title: 'Computed Hours',
	          width: '5%'
	        }, {
	          title: 'Labels',
	          width: '10%'
	        }, {
	          title: 'Tree',
	          width: '10%'
	        }
	      ],
	      add: function(){
	        var _data, _cb;
	        _data = {
	          date: moment().format('DD/MM/YYYY'),
	          time_in: moment().format(),
	          ministry: 'Web'
	        };
	        _cb = function(){
	          o.refresh.all();
	        };
	        o.data.add(_data, _cb);
	      },
	      update: function(){
	        $('#content__list').on('click', 'tbody tr :not(:first-child):not(:nth-child(2))', function(e){
	          var _td, _val, _id, _attr, _cb;
	          _td = $(this);
	          _val = _td.find('span').html();
	          _id = parseInt(_td.find('span').attr('data-id'));
	          _attr = _td.find('span').attr('data-attr');
	          _cb = function(){
	            o.refresh.all('list');
	          };
	          $(_td).find('span').editable({
	            type: 'textarea',
	            success: function(response, val){
	              var _data;
	              o.helpers.list.update();
	              o.helpers.list.checkall();
	              _data = {};
	              _data[_attr] = val;
	              o.data.update(_id, _data, _cb);
	            }
	          });
	        });
	      },
	      remove: function(){
	        $('#content__list tbody tr input:checked').each(function(key, val){
	          var _id, _cb;
	          _id = $(this).attr('data-id');
	          _cb = function(){
	            o.refresh.all();
	          };
	          o.data.remove(parseInt(_id), _cb);
	        });
	      },
	      checkall: function(){
	        $('#content__list').on('change', 'thead tr th input[type="checkbox"]:first-child', function(){
	          if ($(this).is(':checked')) {
	            $('#content__list tbody tr input:first-child').each(function(){
	              $(this).prop('checked', true);
	            });
	          } else {
	            $('#content__list tbody tr input:first-child').each(function(){
	              $(this).prop('checked', false);
	            });
	          }
	        });
	      },
	      'export': function(){
	        var _cb;
	        _cb = function(data){
	          var blob, date;
	          blob = new Blob([JSON.stringify(data, null, 2)], {
	            type: 'application/json;charset=utf-8'
	          });
	          date = moment().format('MMM[]Do-h[]mm[]a');
	          saveAs(blob, 'time-' + date + '.json');
	        };
	        o.data.list(_cb);
	      },
	      'import': function(){
	        $('#content__list__import').on('change', function(){
	          var reader;
	          reader = new FileReader();
	          reader.readAsText(this.files[0]);
	          reader.onload = function(e){
	            var _data, _cb;
	            _data = JSON.parse(e.target.result);
	            _cb = function(){
	              o.refresh.all();
	            };
	            o.data['import'](_data, _cb);
	          };
	        });
	      }
	    }
	  };
	  o.filters = {
	    trees: function(){
	      var searchTimeout;
	      searchTimeout = false;
	      $('#content__tree__search__tree').keyup(function(){
	        if (searchTimeout) {
	          clearTimeout(searchTimeout);
	        }
	        searchTimeout = setTimeout(function(){
	          $('#content__tree').jstree(true).search($('#content__tree__search__tree').val());
	        }, 250);
	      });
	    },
	    reports: function(){
	      $('#content__reports__date__date').on('keyup', function(){
	        var _filtered;
	        o.reports.date.column(0).search(this.value, {
	          regex: true
	        }).draw();
	        _filtered = {};
	        o.reports.date.rows({
	          search: 'applied'
	        }).data().each(function(row, index){
	          console.log(row);
	          _filtered[row[0]] = {
	            sum_bible: row[1],
	            sum_health: row[2],
	            sum_web: row[3],
	            sum_signal: row[4]
	          };
	        });
	        o.chart.line({
	          key: 'date',
	          data: o.helpers.chart.date(_filtered)
	        });
	      });
	    },
	    lists: function(){
	      $('#content__list__ministry').on('keyup', function(){
	        o.lists.list.column(2).search(this.value, {
	          regex: true
	        }).draw();
	      });
	      $('#content__list__message').on('keyup', function(){
	        o.lists.list.column(3).search(this.value, {
	          regex: true
	        }).draw();
	      });
	      $('#content__list__date').on('keyup', function(){
	        o.lists.list.column(4).search(this.value, {
	          regex: true
	        }).draw();
	      });
	      $('#content__list__labels').on('keyup', function(){
	        o.lists.list.column(8).search(this.value, {
	          regex: true
	        }).draw();
	      });
	      $('#content__list__tree').on('keyup', function(){
	        o.lists.list.column(9).search(this.value, {
	          regex: true
	        }).draw();
	      });
	    }
	  };
	  o.refresh = {
	    tree: function(){
	      var _cb;
	      $('#tab__tree input[type="text"], #tab__tree input[disabled!="disabled"],#tab__tree textarea,#tab__tree select').each(function(){
	        $(this).val('');
	      });
	      _cb = function(data){
	        var _data, i$, len$;
	        _data = [];
	        for (i$ = 0, len$ = data.length; i$ < len$; ++i$) {
	          (fn$.call(this, i$, data[i$]));
	        }
	        $('#content__tree').jstree(true).settings.core.data = _data;
	        $('#content__tree').jstree(true).refresh();
	        function fn$(i, item){
	          var _item, _text_index;
	          _item = {};
	          if (item.tree) {
	            _text_index = item.tree.lastIndexOf('/');
	            _item.id = 'content__tree_' + item.tree;
	            _item.data = item.tree;
	            _item.text = _text_index > 0
	              ? item.tree.substr(_text_index + 1, item.tree.length)
	              : item.tree;
	            _item.li_attr = {
	              data_id: item.id
	            };
	            _item.parent = _text_index > 0 ? 'content__tree_' + item.tree.substr(0, _text_index) : '#';
	            _data.push(_item);
	          }
	        }
	      };
	      o.data.list(_cb);
	    },
	    calendar: function(){
	      $('#tab__calendar').html('<button id="content__calendar__refresh" type="button" class="btn btn-primary"><i class="fa fa-refresh"></i></button><div id="content__calendar"></div>');
	      o.calendar();
	      setTimeout(function(){
	        $('button.fc-today-button.fc-button.fc-state-default.fc-corner-left.fc-corner-right').click();
	      }, 200);
	    },
	    reports: function(){
	      var i$, ref$;
	      $('#tab__reports input[type="text"]').each(function(){
	        $(this).val('');
	      });
	      for (i$ in ref$ = o.reports) {
	        (fn$.call(this, i$, ref$[i$]));
	      }
	      o.report({
	        name: 'Date',
	        key: 'date',
	        chart: 'line',
	        helper: 'date'
	      });
	      function fn$(i, j){
	        $('#content__reports__' + i + '_wrapper').html('<table id="content__reports__' + i + '" class="table table-bordered table-hover"></table>');
	      }
	    },
	    list: function(){
	      $('#tab__list input[type="text"]').each(function(){
	        $(this).val('');
	      });
	      $('#content__list_wrapper').html('<table id="content__list" class="table table-bordered table-hover"></table>');
	      o.list();
	      o.helpers.list.update();
	      o.helpers.list.checkall();
	    },
	    all: function(except){
	      var _refresh, i$, len$;
	      _refresh = ['tree', 'calendar', 'reports', 'list'];
	      for (i$ = 0, len$ = _refresh.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, _refresh[i$]));
	      }
	      function fn$(i, el){
	        if (el !== (except || '')) {
	          o.refresh[el]();
	        }
	      }
	    }
	  };
	  return o;
	}();
	//# sourceMappingURL=e:\__\app-19-3-2\node_modules\livescript-loader\index.js!e:\__\app-19-3-2\src\time\component-jquery\component.ls.map


/***/ }
/******/ ]);