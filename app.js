
__require('app', function(require, module, exports) {

var H       = require('app/lib/h/react');
var config  = require('app/config');

var h       = new H();

var App = function() {
  var _this = this;
  this.config  = config;
  this.content = {};
  this.router  = {};
  this.boot();
};
var prototype = {
  boot: function() {
    var _this = this;
    // ?
    window.__r = '../../../';
    // ?
  },
  init: function() {
    var _this = this;
    this.makeContent();
    this.renderLayout();
    this.makeRoutes();
    if (!window.location.hash) window.location.hash = '#/home';
  },
  makeRoutes: function() {
    var _this = this;
    var routes = {
      '/content/?((\w|.)*)': function(content) {
        _this._render(function() { _this.renderContent(content); });
      },
      '/home': function() {
        _this._render(function() { _this.renderHome(); });
      },
      '/tag/?((\w|.)*)': function(tag) {
        _this._render(function() { _this.renderTag(tag); });
      },
      '/date/?((\w|.)*)': function(date) {
        _this._render(function() { _this.renderDate(date); });
      },
      '/words/?((\w|.)*)': function(words) {
        _this._render(function() { _this.loadContent('../../../words/'+words); });
      },
    }
    this.router = Router(routes);
    this.router.init();
  },
  makeContent: function() {
    var _this = this;
    for (var i in __c.texts) {
      // replace ";__c(function(){/*!", "*/});" to ""
      this.content[i] = marked(__c.texts[i]);
    }
  },
  route: function(route) {
    var _this = this;
    this.router.setRoute(route);
  },
  _render: function(cb) {
    var _this = this;
    $('#content').html('');
    this.progressStart();
    this.animateContent();
    if (cb) cb();
    this.renderCode();
    this.renderMath();
    this.progressEnd();
  },
  renderLayout: function() {
    var _this = this;
    var tag = function(title, href) {
      var template = 
      h('ul', {'class': 'nav-list'},
        h('li', {'class': 'nav-item'},
          h('a', {'class': 'pure-button', 'href': href}, title)
        )
      )
      return template;
    }
    var template = 
    h('div', {'id': 'layout', 'class': 'pure-g'},
      h('div', {'id': 'sidebar', 'class': 'sidebar pure-u-1 pure-u-md-1-4'},
        h('div', {'id': 'sidebar__header', 'class': 'header'},
          h('h1', {'class': 'brand-title'}, 'OJ Abesamis'),
          h('h2', {'class': 'brand-tagline'}, 'Web Developer'),
          h('nav', {'class': 'nav'},
            tag('Home',  '#/home'),
            tag('Tags',  '#/tag'),
            tag('About', '#/content/about')
          ),
        )
      ),
      h('div', {'id': 'content', 'class': 'content pure-u-1 pure-u-md-3-4'})
    );
    h.render(template, document.getElementById('app'))
  },
  renderHome: function() {
    var _this = this;
    var config   = this.config.home || {};
    var template = 
    h('div', {},
      h('div', {'class': 'posts'},
        h('h1', {'class': 'content-subhead'}, 'Tech'),
        h('div', {'id': 'content__tech_1'}),
        h('div', {'id': 'content__tech_2'}),
        h('div', {'id': 'content__tech_3'})
      ),
      h('br'),
      h('div', {'class': 'posts'},
        h('h1', {'class': 'content-subhead'}, 'News'),
        h('div', {'id': 'content__news'}),
      ),
      h('br'),
      /*
      h('div', {'class': 'posts'},
        h('h1', {'class': 'content-subhead'}, 'More'),
        h('div', {'id': 'content__more_1'}),
        h('div', {'id': 'content__more_2'}),
        h('div', {'id': 'content__more_3'}),
        h('div', {'id': 'content__more_4'}),
        h('div', {'id': 'content__more_5'})
      ),
      */
    )
    h.render(template, document.getElementById('content'));
    //
    for (var i in config) {
      var _config = this.config.content[config[i].content] || {}
      this.renderContent(
        config[i].content, 
        '#content__' + i,
        _config.len   || 300,
        _config.start || 0
      )
    }
  },
  loadContent: function(content, sel, len, start) {
    var _this = this;
    var script = document.createElement('script');
    script.onload = function() {
      _this.content[content] = marked(__c.texts[content]);
      _this.renderContent(content, sel, len, start);
      _this.renderCode();
      _this.renderMath();
    };
    script.src = 'app/content/' + content + '.md';
    document.getElementsByTagName('head')[0].appendChild(script);
  },
  renderContent: function(content, sel, len, start) {
    var _this = this;
    sel = sel || '#content';
    if (this.content[content]) {
      var text   = this.content[content] || '';
      var config = this.config.content[content] || {};
      if (config.template) {
        this['renderTemplate' + config.template](content, sel, len, start);
      } else {
        if (len) {
          start  = start || 0
          text   = text.substring(start, len);
          text  += ' <a href="#/content/' + content + '">.. (read more)</a>'
        }
        $(sel).html(text);
      }
    } else {
      this.loadContent(content, sel, len, start);
    }
  },
  renderTemplatePost: function(content, sel, len, start) {
    var _this = this;
    var text    = this.content[content] || '';
    var config  = this.config.content[content] || {};
    var title   = config.title || content;
    sel         = sel   || '#content';
    if (len) {
      start     = start || 0;
      text      = text.substring(start, len);
      text     += ' <a href="#/content/' + content + '">.. (read more)</a>';
    }
    var tags    = function() {
      var template  = h('div', {'class': 'content__tags'});
      var tags_list = [];
      if (config.tags) {
        var _tags = config.tags;
        for (var i=0; i<_tags.length; i++) {
          var tag = h('a', {
            'class': 'post-category post-category-design', 
            'href': '#/tag/' + _tags[i],
          }, _tags[i]);
          if ((i >= 7) && (i%7 === 0)) tags_list.push([h('br'), h('br')]);
          tags_list.push(tag);
        }
        template  = h('div', {'class': 'content__tags'}, tags_list);
      }
      return template;
    };
    var date    = function() {
      var template = h('a', {'class': 'content__date'});
      if (config.date) {
        var _date  = config.date;
        var day    = _date.substring(0,2);
        var month  = moment(_date.substring(3,5), 'MM').format('MMMM');
        var year   = _date.substring(6,10);
        var format = month.substring(0,3) + ' ' + day + ', ' + year
        template   = h('a', {'class': 'content__date', 'href': '#/date/' + _date}, format);
      }
      return template;
    };
    var template = 
    h('div', {},
      h('section', {'class': 'post'},
        h('header', {'class': 'post-header'},
          h('h2', {'class': 'content__title post-title'}, title),
          h('p', {'class': 'post-meta'},
            date(),
            h('span', {html: true}, '&nbsp;'),
          ),
          tags()
        ),
        h('div', {'class': 'post-description'},
          h('p', {'class': 'content__src', html: true}, text)
        ),
      ),
      h('div', {'class': 'content__comments'})
    );
    h.render(template, document.querySelector(sel));
    //
    if (title) $('.content__src h1').remove();
  },
  renderTag: function(tag) {
    var _this = this;
    var config = this.config.content;
    var template = h('div', {});
    if (tag) {
      var contents  = _.keys(_.pickBy(config, function(v, k) { return (v.tags.indexOf(tag) > -1)}));
      var _contents = { index:[], summary:[], };
      for (var i=0; i<contents.length; i++) {
        var _index = 
        h('li', {}, 
          h('a', {'href': '#/content/' + contents[i]}, config[contents[i]].title)
        );
        var id = ('content__tag__' + contents[i]).replace(/\//g, '_');
        var _summary = h('div', {'id': id});
        _contents.index.push(_index);
        _contents.summary.push(_summary);
      }
      var title = this.config.tag[tag] ? (this.config.tag[tag].title) : tag;
      template = 
      h('div', {},
        h('h1', {'class': 'content-subhead'}, 'TAG - ' + tag),
        h('h1', {id: 'content__tag__title'}, title),
        h('div', {id: 'content__tag__content'}),
        h('a', {
          'class': 'post-category post-category-design',
          'href': '#/tag/' + tag,
        }, tag),
        h('ul', {}, _contents.index),
        _contents.summary,
      );
      h.render(template, document.getElementById('content'));
      for (var i=0; i<contents.length; i++) {
        var id = ('#content__tag__' + contents[i]).replace(/\//g, '_');
        this.renderContent(
          contents[i],
          id,
          config[contents[i]].len   || 300,
          config[contents[i]].start || 0
        );
        $(id).prepend('<h1 class="content-subhead"></h1>');
      }
      if (this.config.tag[tag] && this.config.tag[tag].content) {
        var name = this.config.tag[tag].content;
        this.renderContent(name, '#content__tag__content');
        $('#content__tag__title').html('');
      }
    } else {
      var tags = function() {
        var _tags  = _.uniq(_.flatten(_.map(config, 'tags'))).sort();
        var template = [];
        for (var i=0; i<_tags.length; i++) {
          var _tag = h('a', {
            'class': 'post-category post-category-design',
            'href': '#/tag/' + _tags[i],
          }, _tags[i])
          if ((i >= 7) && (i%7 === 0)) template.push([h('br'), h('br')]);
          template.push(_tag);
        }
        return template;
      }
      template = 
      h('div', {},
        h('h1', {'class': 'content-subhead'}, 'TAGS'),
        h('h1', {}, 'Tags'),
        tags()
      )
      h.render(template, document.getElementById('content'));
    }
  },
  renderDate: function(date) {
    var _this = this;
  },
  renderCode: function() {
    var _this = this;
    setTimeout(function() {
      var codes = document.querySelectorAll('pre')
      for (var i=0; i<codes.length; i++) {
        hljs.highlightBlock(codes[i])
      }
    }, 0)
  },
  renderMath: function() {
    var _this = this;
    renderMathInElement(document.body);
  },
  animateContent: function() {
    var _this = this;
    $('#content').addClass('fadeIn animated');
    setTimeout(function() {
      $('#content').removeClass('fadeIn animated');
    }, 300)
    window.scrollTo(0, 0);
  },
  progressStart: function() {
    var _this = this;
    NProgress.start();
  },
  progressEnd: function() {
    var _this = this;
    NProgress.done();
  },
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) App.prototype[i] = prototype[i];

module.exports = App;

});
