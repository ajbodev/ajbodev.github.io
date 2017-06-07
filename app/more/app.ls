
# @params  o:{ templates:{}, contents:{}, config:config:{} }
# @vendors
#   jquery, director, window, nprogress, highlight
# @methods
#   makeRoutes, render, renderCategory, renderContent,
#   animateContent, highlightContent, progressStart, progressEnd

App   = (o) !->
  @templates = o.templates
  @contents  = o.contents
  @config    = o.config
  @router    = {}
App:: = 
  constructor: App
  init: !->
    _this = @
    @makeRoutes!
    # Home
    @render cb: !-> _this.renderHome!
  
  makeRoutes: !->
    _this = @
    routes = 
      '/contents/?((\w|.)*)': (content) !-> 
        _this.render cb: !-> _this.renderContent content: content
      '/home': !-> 
        _this.render cb: !-> _this.renderHome!
      '/tags/?((\w|.)*)': (tag) !-> 
        _this.render cb: !-> _this.renderTags tag: tag
      '/dates/?((\w|.)*)': (date) !-> 
        _this.render cb: (!-> _this.renderDates date: date)
    @router = Router routes
    @router.init!
    
  # @params  o:{ ?cb:F }
  render: (o) !->
    _this = @
    @progressStart!
    @animateContent!
    o.cb! if o.cb
    @highlightContent!
    @renderMath!
    @progressEnd!
    
  renderHome: (o) !->
    _this = @
    len   = 300
    $('#content').html @templates['templates/home']
    for let i, el of @config.home
      @renderContent do
        sel:    '#content__' + i
        content: el.content
        len:     (el.len || len)
    
  # @params  o:{ content:S, sel:S, ?len:N, start:N }
  renderContent: (o) !->
    _this = @
    sel     = o.sel || '#content'
    src     = @contents['contents/' + o.content]
    config  = @config.contents[o.content] || {}
    if o.len
      start  = o.start || 0
      src   := src.substring start, o.len
      src   += ' <a href="#/contents/' + o.content + '">.. (more)</a>'
    if config.template
      config.sel = sel
      config.src = src
      @['renderTemplate' + config.template] config
    else
      $(sel).html src
    
  # @params  o:{ content:S, src:S, template:S, title:S, date:S, tags:[S], ?comments:B, ?sel:S, ?len:N  }
  renderTemplatePost: (o) !->
    _this = @
    sel   = o.sel || '#content'
    $(sel).html @templates['templates/post']
    $(sel + ' .content__src').html o.src
    if o.title
      $(sel + ' .content__title').html o.title
      $(sel + ' .content__src h1').remove!
    if o.date
      _date = o.date
      if (o.date.length == 10)
        day    = o.date.substring(0,2)
        month  = moment(o.date.substring(3,5), 'MM').format('MMMM')
        yr     = o.date.substring(6,10)
        _date := month.substring(0,3) + ' ' + day + ', ' + yr
      $(sel + ' .content__date').attr 'href', '#/dates/' + o.date
      $(sel + ' .content__date').html _date
    if o.tags
      tags  = []
      for let el, i in o.tags
        tag = [
          '<a class="post-category post-category-design"'
          'href="#/tags/' + el + '">' 
          el + '</a>'
        ].join ''
        tags.push tag
      $(sel + ' .content__tags').html(tags.join '')
    if (o.comments && (o.sel == '#content'))
      iframe  = 'more/_disqus.html#/contents/' + content
      $('.content__comments').html do
        '<iframe src="' + iframe + '"></iframe>'
    
  # @params  tag:S
  renderTags: (o) !->
    _this = @
    if o.tag
      len  = 300
      html = [
        '<h1 class="content-subhead">TAG - ' + o.tag + '</h1>'
        '<div class="posts">'
        '<h1>Tag</h1>'
        '<a class="post-category post-category-design"'
        'href="#/tags/' + o.tag + '">' 
        o.tag + '</a>'
      ].join ''
      contents = {}
      $('#content').html html
      list  = '<ul>'
      html  = ''
      for let i, el of @config.contents
        if (el.tags.indexOf(o.tag) >= 0)
          html        += '<div id="content__tag__' + i + '"></div>'
          list        += '<li><a href="#/contents/' + i + '">'
          title        = el.title || i
          list        += title + '</a></li>'
          contents[i]  = el
      html += '</div>'
      list += '</ul>'
      $('#content').append(list + html)
      for let i, el of contents
        sel   = '#content__tag__' + i
        @renderContent do
          sel:     sel
          content: i
          len:     len
        $(sel).prepend '<h1 class="content-subhead"></h1>'
    else
      tags_list = []
      tags_uniq = []
      tags      = []
      for let i, el of @config.contents
        tags_list.push el.tags if el.tags
      tags_uniq = _.uniq([].concat.apply [], tags_list).sort!
      for let el, i in tags_uniq
        tag = [
          '<a class="post-category post-category-design"'
          'href="#/tags/' + el + '">' 
          el + '</a>'
        ].join ''
        tags.push tag
      $('#content').html(
        '<h1 class="content-subhead">TAGS</h1><h1>Tags</h1>' + 
        tags.join ''
      )
    
  # @params  date:S
  renderDates: (o) !->
    _this = @
    if o.date
      #
      _date = o.date
      if (o.date.length == 10)
        day    = o.date.substring(0,2)
        month  = moment(o.date.substring(3,5), 'MM').format('MMMM')
        yr     = o.date.substring(6,10)
        _date := month.substring(0,3) + ' ' + day + ', ' + yr
      else if (o.date.length == 7)
        month  = moment(o.date.substring(0,2), 'MM').format('MMMM')
        yr     = o.date.substring(3,7)
        _date := month.substring(0,3) + ' ' + yr
      #
      len  = 300
      html = [
        '<h1 class="content-subhead">DATE - ' + _date + '</h1>'
        '<h1>Date</h1>'
        '<div class="post-meta">'
        '<a class="content__date" href="#/dates/' + o.date + '">' 
        _date + '</a></div>'
      ].join ''
      contents = {}
      for let i, el of @config.contents
        if (el.date && (el.date.indexOf(o.date) >= 0))
          html        += '<div id="content__date__' + i + '"></div>'
          contents[i]  = el
      html += '</div>'
      $('#content').html html
      for let i, el of contents
        sel   = '#content__date__' + i
        @renderContent do
          sel:     sel
          content: i
          len:     len
        $(sel).prepend '<h1 class="content-subhead"></h1>'
    else
      dates_list  = []
      dates_uniq  = []
      dates       = []
      html        = '<h1 class="content-subhead">DATES</h1>'
      html       += '<ul>'
      for let i, el of @config.contents
        dates_list.push el.date if el.date
      dates_uniq = _.uniq([].concat.apply [], dates_list).sort!
      for let el, i in dates_uniq
        _date = el
        if (el.length == 10)
          day    = el.substring(0,2)
          month  = moment(el.substring(3,5), 'MM').format('MMMM')
          yr     = el.substring(6,10)
          _date := month.substring(0,3) + ' ' + day + ', ' + yr
        html     += '<li class="post-meta"><a href="#/dates/' + el + '">'
        html     += _date + '</a></li>'
      html       += '<ul>'
      $('#content').html html
    
  animateContent: (o) !->
    _this = @
    $ '#content' .addClass 'fadeIn animated'
    setTimeout (!-> $ '#content' .removeClass 'fadeIn animated'), 300
    window.scrollTo 0, 0
  
  highlightContent: (o) !->
    _this = @
    setTimeout !->
      codes = document.querySelectorAll 'pre'
      for let el, i in codes
        hljs.highlightBlock el
    , 0
  
  renderMath: (o) !->
    _this = @
    renderMathInElement(document.body)
  
  progressStart: (o) !->
    _this = @
    NProgress.start!
  
  progressEnd: (o) !->
    _this = @
    NProgress.done!
    
  action: (o) !->
    _this = @

#module.exports = app
