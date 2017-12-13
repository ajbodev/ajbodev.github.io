
__require('~/config', function(require, module, exports) {

var config = {
  home: {
    tech_1:       { content: 'tech/react-plain-es5' },
    //tech_2:       { content: 'tech/php-arrays-classes' },
    tech_3:       { content: 'tech/engineering-mid-level' },
    news:         { content: 'news/2017' },
    /*
    more_1:       { content: 'blog/lessons-enterprise/part-1' },
    more_2:       { content: 'blog/on-the-web/part-1' },
    more_3:       { content: 'more/javascript-auto-piano' },
    */
  },
  content: {
    // Technology
    'tech/react-plain-es5': {
      title: 'React.js in Plain ES5', template: 'Post', 
      tags:  ['javascript', 'react', 'frontend'], 
    },
    /*
    'tech/php-arrays-classes': {
      title: 'PHP Arrays as Classes', template: 'Post', len: 120,
      tags:  ['php'], 
    },
    'tech/hyperscript-standard': {
      title: 'Towards a HyperScript Standard', template: 'Post', len: 120,
      tags:  ['frontend', 'javascript', 'html'], 
    },
    */
    'tech/engineering-mid-level': {
      title: 'Engineering Mid Level', template: 'Post', len: 250,
      tags:  [ 'server', 'frontend', 'data' ], 
    },
    'tech/engineering-mid-level/frontend': {
      title: 'Engineering Mid Level - The Frontend Layer', template: 'Post',
      tags:  [ 
        'frontend', 'javascript',
        'knockout', 'react', 'vue', 'angular-1', 'jquery', 'ember',
        'angular-4', 'riot', 'mithril'
      ], 
    },
    'tech/engineering-mid-level/servers': {
      title: 'Engineering Mid Level - The Server Layer', template: 'Post',
      tags:  [ 
        'server', 
        'flask', 'rails', 'laravel', 'express', 'aspnet-core', 'spring-boot'
      ], 
    },
    // News
    'news/2017': {
      title: 'News (2017)', template: 'Post', len: 1000,
      tags:  ['news'], 
    },
    /*
    // Blog
    'blog/lessons-enterprise/part-1': {
      title: 'Lessons in Building Enterprise Software', template: 'Post', 
      tags:  ['web'], 
    },
    'blog/on-the-web/part-1': { 
      title: 'On The Web', template: 'Post' ,
      tags:  ['web'], 
    },
    // More
    'more/europe': { 
      title: 'Travelling Europe', template: 'Post',
      tags:  ['misc'], 
    },
    'more/javascript-auto-piano': { 
      title: 'JavaScript Auto Piano', template: 'Post',
      tags:  ['javascript'], 
    },
    // CS
    'cs/2017/06/24': { 
      title: 'Algorithms', template: 'Post',
      tags:  ['javascript'], 
    },
    */
    /*
    'template': { 
      title: 'Template', 
      tags:  ['web'], template: 'Post', //date: '31/01/2017', comments: true,
    },
    */
  },
  tag: {
    // Lang
    'javascript':  { content: 'tag/lang/javascript', title: 'JavaScript' },
    'php':         { content: 'tag/lang/php' },
    'csharp':      { content: 'tag/lang/csharp' },
    'python':      { content: 'tag/lang/python' },
    'ruby':        { content: 'tag/lang/ruby' },
    'java':        { content: 'tag/lang/java' },
    // Frontend
    'frontend':    { content: 'tag/frontend/frontend' },
    'knockout':    { content: 'tag/frontend/knockout' },
    'react':       { content: 'tag/frontend/react' },
    'vue':         { content: 'tag/frontend/vue' },
    'angular-1':   { content: 'tag/frontend/angular-1' },
    'ember':       { content: 'tag/frontend/ember' },
    'angular-4':   { content: 'tag/frontend/angular-4' },
    'angular':     { content: 'tag/frontend/angular-1' },
    'riot':        { content: 'tag/frontend/riot' },
    'mithril':     { content: 'tag/frontend/mithril' },
    'jquery':      { content: 'tag/frontend/jquery' },
    // Servers
    'servers':     { content: 'tag/servers/servers' },
    'flask':       { content: 'tag/servers/flask' },
    'rails':       { content: 'tag/servers/rails' },
    'laravel':     { content: 'tag/servers/laravel' },
    'aspnet-core': { content: 'tag/servers/aspnet-core' },
    'aspnet':      { content: 'tag/servers/aspnet-core' },
    'express':     { content: 'tag/servers/express' },
    'spring-boot': { content: 'tag/servers/spring-boot' },
    'spring':      { content: 'tag/servers/spring-boot' },
    // Database
    'database':    { content: 'tag/db/db' },
    'mysql':       { content: 'tag/db/mysql' },
    'postgres':    { content: 'tag/db/postgres' },
    'mongodb':     { content: 'tag/db/mongodb' },
    'sqlite':      { content: 'tag/db/sqlite' },
    // Others
  },
}

module.exports = config;

});
