
__require('app/config', function(require, module, exports) {

var config = {
  home: {
    tech_1:       { content: 'tech_react-plain-es5' },
    tech_2:       { content: 'tech_php-arrays-as-pseudo-classes' },
    news:         { content: 'news_2017_06' },
    more_1:       { content: 'blog_lessons-in-building-enterprise-software_part-1' },
    more_2:       { content: 'blog_on-the-web_part-1' },
    more_3:       { content: 'more_javascript-auto-piano' },
    more_4:       { content: 'more_europe' },
    more_4:       { content: 'cs_2017_06_24' },
  },
  tag: {
    'javascript': { title: 'JavaScript', content: 'tag_javascript' },
    'php':        { title: 'PHP',        content: false },
  },
  content: {
    'tech_react-plain-es5': {
      title: 'React.js in Plain ES5',
      tags:  ['javascript', 'react'], template: 'Post', 
    },
    'tech_php-arrays-as-pseudo-classes': {
      title: 'PHP Arrays as Pseudo Classes',
      tags:  ['php'], template: 'Post', len: 120,
    },
    'news_2017_06': {
      title: 'News', // June 2017
      tags:  ['news'], template: 'Post', len: 500,
    },
    'blog_lessons-in-building-enterprise-software_part-1': {
      title: 'Lessons in Building Enterprise Software',
      tags:  ['web'], template: 'Post', 
    },
    'blog_on-the-web_part-1': { 
      title: 'On The Web', 
      tags:  ['web'], template: 'Post' 
    },
    'more_europe': { 
      title: 'Travelling Europe', 
      tags:  ['misc'], template: 'Post',
    },
    'more_javascript-auto-piano': { 
      title: 'JavaScript Auto Piano', 
      tags:  ['javascript'], template: 'Post',
    },
    'cs_2017_06_24': { 
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
