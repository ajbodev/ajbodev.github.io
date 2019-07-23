


////////////////////////////////////////////////////////////////////////////////

__main = function() {
  __main.pre();
  __main.render();
};
__main.pre = function() {
  for (el in __c.texts) __c.texts[el] = marked(__c.texts[el]);
  $('script[type="text/markdown"][data-id]').each((i, el) => {
    let id = $(el).data('id');
    __c.texts[id] = marked($(el).html());
  });
  for (el in __c.texts) {
    __c.texts[el] = __c.texts[el].replace(/(\{\~\|)/g, '{{{').replace(/(\|\~\})/g, '}}}');
  }
  for (i in __c.texts) {
    let _texts_i = {};
    for (j in __c.texts) {
      let _texts_j = {};
      if (i === j) continue;
      for (k in __c.texts) {
        if ([i, j].indexOf(k) !== -1) continue;
        _texts_j[k] = __c.supplant(__c.texts[k], __c.texts);
      }
      _texts_i[j] = __c.supplant(__c.texts[j], _texts_j);
    }
    __c.texts[i] = __c.supplant(__c.texts[i], _texts_i);
  }
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
};

////////////////////////////////////////////////////////////////////////////////

__scripts = function() {
  //__script('https://ajbodev.bitbucket.io/custom/bundle/_react/_bundle.react.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/marked/0.7.0/marked.min.js');
  //__script('<..>');
  //__require('<vendor>', (r, m, e) => { m.exports = <Vendor>; });
};

////////////////////////////////////////////////////////////////////////////////

__styles = function() {
  __style('https://cdnjs.cloudflare.com/ajax/libs/Primer/11.0.0/build.css');
  //__style('styles.css');
  //__style('<..>');
};

////////////////////////////////////////////////////////////////////////////////

function __require(n, f) { __require[n] = f };
document.write(`<script src='https://ajbodev.github.io/custom/bundle/_bundle.js'></\script>`);
__=()=>['styles','scripts','main'].map(el=>document.write(`<script>__${el}();</\script>`));

////////////////////////////////////////////////////////////////////////////////


