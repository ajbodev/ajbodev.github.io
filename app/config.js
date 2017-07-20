
__require('app/config', function(require, module, exports) {

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
    */
    'tech/engineering-mid-level': {
      title: 'Engineering Mid Level', template: 'Post', len: 120,
      tags:  [ 'server', 'frontend', 'store' ], 
    },
    'tech/engineering-mid-level/frontend': {
      title: 'Engineering Mid Level - The Frontend Layer', template: 'Post',
      tags:  [ 
        'frontend', 'javascript',
        'knockout', 'react', 'vue', 'angular', 'jquery', 'ember',
        'angularx', 'riot', 'mithril'
      ], 
    },
    'tech/engineering-mid-level/servers': {
      title: 'Engineering Mid Level - The Server Layer', template: 'Post',
      tags:  [ 
        'server', 
        'flask', 'rails', 'laravel', 'express', 'aspnet-core', 'spring-boot'
      ], 
    },
    'tech/engineering-mid-level/store': {
      title: 'Engineering Mid Level - The Store Layer', template: 'Post',
      tags:  [ 
        'store', 'indexeddb', 'http', 'firebase'
      ], 
    },
    // News
    'news/2017': {
      title: 'News (2017)', template: 'Post', len: 500,
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
    'javascript': { title: 'JavaScript', content: 'tag/lang/javascript' },
    'php':        { title: 'PHP',        content: false },
  },
}

module.exports = config;

});
