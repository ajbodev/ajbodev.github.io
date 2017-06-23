
__require('app/config', function(require, module, exports) {

var config = {
  home: {
    tech_1:       {content: 'react-plain-es5'},
    tech_2:       {content: 'php-arrays-as-pseudo-classes'},
    news:         {content: 'news-06-2017'},
    more_1:       {content: 'lessons-in-building-enterprise-software-part-1'},
    more_2:       {content: 'on-the-web-part-1'},
  },
  tag: {
    'javascript': { title: 'JavaScript', content: 'tag/javascript' },
    'php':        { title: 'PHP',        content: false },
  },
  content: {
    'react-plain-es5': {
      title:      'React.js in Plain ES5',
      tags:       ['javascript', 'react'],
      template:   'Post', 
      //date:       '08/08/2017', //comments: true,
    },
    'php-arrays-as-pseudo-classes': {
      title:      'PHP Arrays as Pseudo Classes',
      tags:       ['php'],
      template:   'Post', 
      len:        120,
      //date:       '08/08/2017', //comments: true,
    },
    'news-06-2017': {
      title:      'June 2017',
      tags:       ['news'],
      template:   'Post', len: 500,
      //date:       '08/08/2017', //comments: true,
    },
    'lessons-in-building-enterprise-software-part-1': {
      title:      'Lessons in Building an Enterprise Software',
      tags:       ['web'],
      template:   'Post', 
      //date:       '08/08/2017', //comments: true,
    },
    'on-the-web-part-1': {
      title:      'On The Web',
      tags:       ['web'],
      template:   'Post', 
      //date:       '08/08/2017', //comments: true,
    },
  },
}

module.exports = config;

});
