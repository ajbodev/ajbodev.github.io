


////////////////////////////////////////////////////////////////////////////////

__main = function() {
  __main.pre();
  __main.render();
};
__main.pre = function() {
  $('script[type="text/markdown"][data-id]').each((i, el) => {
    let id = $(el).data('id');
    __c.texts[id] = marked($(el).html());
  });
  $('#app').replaceWith($('script[type="text/html"][data-layout]').html());
  $(window).on('hashchange', (e) => __main.render());
  /*
  $('body').on('click', 'a[href]', function() {
    //e.preventDefault();
    let id = $(this).attr('href').replace('#/', '');
    console.log(id);
  });
  */
};
__main.render = function() {
  let id = location.hash.replace('#/', '');

  if (__c.texts[id] && (id !== 'layout')) {
    $('#app').html(__c.texts[id]);
  } else if (id === '') { 
    $('#app').html(__c.texts['index']);
  } else {
    $('#app').html('');
  };
  
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
};

////////////////////////////////////////////////////////////////////////////////

__scripts = function() {
  //__script('https://ajbodev.bitbucket.io/custom/bundle/_react/_bundle.react.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/marked/0.7.0/marked.min.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/highlight.min.js');
  //__script('<..>');
  //__require('<vendor>', (r, m, e) => { m.exports = <Vendor>; });
};

////////////////////////////////////////////////////////////////////////////////

__styles = function() {
  __style('https://cdnjs.cloudflare.com/ajax/libs/Primer/11.0.0/build.css');
  __style('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/default.min.css');
  //__style('styles.css');
  //__style('<..>');
};

////////////////////////////////////////////////////////////////////////////////

function __require(n, f) { __require[n] = f };
document.write(`<script src='https://ajbodev.github.io/custom/bundle/_bundle.js'></\script>`);
__=()=>['styles','scripts','main'].map(el=>document.write(`<script>__${el}();</\script>`));

////////////////////////////////////////////////////////////////////////////////


