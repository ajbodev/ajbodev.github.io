


////////////////////////////////////////////////////////////////////////////////

__main = function() {//!

$('script[type="text/markdown"][data-id]').each((i, el) => {
  let id = $(el).data('id');
  __c.texts[id] = $(el).html();
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

$('#app').html(`<textarea id='source'>

class: center, middle

${__c.texts['index']}
  
</textarea>`);

var slideshow = remark.create();

};//!

////////////////////////////////////////////////////////////////////////////////

__scripts = function() {
  __script('https://remarkjs.com/downloads/remark-latest.min.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js');
  //__script('<..>');
  //__require('<vendor>', (r, m, e) => { m.exports = <Vendor>; });
};

////////////////////////////////////////////////////////////////////////////////

__styles = function() {
  //__style('styles.css');
  //__style('<..>');
};

////////////////////////////////////////////////////////////////////////////////

function __require(n, f) { __require[n] = f };
document.write(`<script src='https://ajbodev.github.io/custom/bundle/_bundle.js'></\script>`);
__=()=>['styles','scripts','main'].map(el=>document.write(`<script>__${el}();</\script>`));

////////////////////////////////////////////////////////////////////////////////


