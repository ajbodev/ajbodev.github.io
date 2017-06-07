
__require('app/config', function(require, module, exports) {

var config = {
  home: {
    tech_1:       {content: 'more'},
    tech_2:       {content: 'file'},
  },
  content: {
    'more': {
      title:      'More!',
      tags:       ['database', 'php', 'more'],
      date:       '09/02/2017',
      template:   'Post', //comments: true,
      start:      50,
    },
    'file': {
      title:      'File',
      tags:       ['javascript', 'php', 'external'],
      date:       '07/03/2017',
      template:   'Post', //comments: true,
    },
    'some': {
      title:      'Some',
      tags:       ['javascript', 'some'],
      date:       '08/08/2017',
      template:   'Post', //comments: true,
    },
  },
  tag: {
    'javascript': { title: 'JavaScript', content: 'tag/javascript' },
    'php':        { title: 'PHP',        content: false },
  },
}

module.exports = config;

});
