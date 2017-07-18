
__require('app/config', function(require, module, exports) {

var config = {
  home: {
    tech_1:       { content: 'tech/react-plain-es5' },
    tech_2:       { content: 'tech/php-arrays-classes' },
    tech_3:       { content: 'tech/engineering-mid-level' },
    news:         { content: 'news/2017/06' },
    more_1:       { content: 'blog/lessons-enterprise/part-1' },
    more_2:       { content: 'blog/on-the-web/part-1' },
    more_3:       { content: 'more/javascript-auto-piano' },
  },
  tag: {
    'javascript': { title: 'JavaScript', content: 'tag/lang/javascript' },
    'php':        { title: 'PHP',        content: false },
  },
  content: {
    // Technology
    'tech/react-plain-es5': {
      title: 'React.js in Plain ES5',
      tags:  ['javascript', 'react'], template: 'Post', 
    },
    'tech/php-arrays-classes': {
      title: 'PHP Arrays as Pseudo Classes',
      tags:  ['php'], template: 'Post', len: 120,
    },
    // News
    'news/2017/06': {
      title: 'News', // June 2017
      tags:  ['news'], template: 'Post', len: 500,
    },
    // Blog
    'blog/lessons-enterprise/part-1': {
      title: 'Lessons in Building Enterprise Software',
      tags:  ['web'], template: 'Post', 
    },
    'blog/on-the-web/part-1': { 
      title: 'On The Web', 
      tags:  ['web'], template: 'Post' 
    },
    // More
    'more/europe': { 
      title: 'Travelling Europe', 
      tags:  ['misc'], template: 'Post',
    },
    'more/javascript-auto-piano': { 
      title: 'JavaScript Auto Piano', 
      tags:  ['javascript'], template: 'Post',
    },
    // CS
    'cs/2017/06/24': { 
      title: 'Algorithms', 
      tags:  ['javascript'], template: 'Post',
    },
    /*
    'template': { 
      title: 'Template', 
      tags:  ['web'], template: 'Post', //date: '31/01/2017', comments: true,
    },
    */
  },
}

module.exports = config;

});
