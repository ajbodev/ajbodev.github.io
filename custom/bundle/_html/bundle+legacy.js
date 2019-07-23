


////////////////////////////////////////////////////////////////////////////////

__main = function() {//!
__main.pre();
__main.render();
};//!
__main.pre = function() {
  $(window).on('hashchange', (e) => location.reload());
  
  $('script[type="text/markdown"][data-id]').each((i, el) => {
    let id = $(el).data('id');
    let _html = $(el).html();
    let _items = _html
      .split('\n')
      .filter(el => el.charAt(0) === '*')
      .map(el => el = el.substring(2))
      .map(el => el.split('|'))
      .map(el => el.map(j => j = j.trim()))
      .map(el => {
        //__console.log(el)
        let item = {}
        item.title       = el[0];
        item.description = el[1];
        if (el[2].indexOf('youtube') === -1) item.image = el[2];
        else                                 item.video = el[2];
        return item;
      });
    //__console.log(_items);
    __data[id] = _items;
  });
};
__main.render = function() {
  let id = location.hash.replace('#/', '');

  let _data = __data['index'];

  if (id && __data[id]) {
    //__console.log('!', id);
    _data = __data[id];
  }

  __legacy(_data);
};

__data['index'] = [
  {
    title: 'title',
    description: 'NICE',
    image: 'https://via.placeholder.com/350x150',
  },
  {
    title: 'HM',
    description: 'HM',
    image: 'https://via.placeholder.com/250x150',
  },
  {
    title: 'YOU',
    video: 'https://www.youtube.com/watch?v=qSqVVswa420',
    description: 'YOU',
  },
];

////////////////////////////////////////////////////////////////////////////////

__legacy = function(data) {//!
  var app = {
  gallery: {},
  select:  {},
  init: function() {
    var _this = this;
    this.renderLayout();
    this.makeConsole();
    this.configure();
    //__console.log(APP_MEDIA_INIT);
    APP_MEDIA_INIT = data;
    this.makeGallery();
    this.makeSelect();
  },
  renderLayout: function() {
    var _this = this;
    $('body').addClass('home page');
    $('#app').html(`
      <section class='cover cover-10 imagebg image--light'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-10 col-md-offset-1 col-sm-12'>
              <iframe id='iframe__select' style='min-height: 25px !important;'></iframe>
            </div>
          </div>
          <div class='row'>
            <div class='col-md-10 col-md-offset-1 col-sm-12'>
              <div class='center-block' id='demo'></div>
            </div>
          </div>
          <div class='row' style='position: relative; top: 50px; color: black !important;'>
            <div class='col-md-10 col-md-offset-1 col-sm-12'>
              <div class='center-block' id='text'></div>
            </div>
          </div>
        </div>
      </section>
    `);
  },
  configure: function() {
    var _this = this;
    /*
    if (location.hash) {
      var media = location.hash.replace(/(\#|\#\/)/g, '');
      APP_MEDIA_INIT = this.helperGallery(media);
    } else {
      APP_MEDIA_INIT = APP_MEDIA_SAMPLE;
    }
    */
    APP_MEDIA_INIT = APP_MEDIA_SAMPLE;
  },
  makeGallery: function() {
    var _this = this;
    !function(e, t, a, i) {
      var n = ["49457c24829dd2d9fd2bf45063c57c6d", 
      "409d946df99b409a14f15e7079f7de87", "free", "free", "aa59542f7458476af514a9eb7de9a593", "a2199af742f1e5dea7e8c3f30665eb1a"],
          o = e.G = {
              init: function(e, t, a) {
                  o.load(e), o.run(e, t, a)
              },
              load: function(e) {
                  var i = "https://premium.galleria.io/theme/",
                      o = t.extend(n[e], {
                          name: ["ruza", "evlewt", "neercslluf", "cissalc", "oilof", "lminim"][e].split("").reverse().join("")
                      }),
                      r = n[e].split("").reverse().join("");
                    
                  "eerf" === r ? i = ("https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/" + o.name 
                    + "/galleria." + o.name + ".min.js") : (i += o.name + "/1/js?key=" + r);
                  
                  //a.loadTheme(i)
                  //a.loadTheme('theme/galleria.twelve.min.js')
                  //a.loadTheme('https://premium.galleria.io/theme/twelve/1/js?key=78ed7f9707e51f41a904b99fd649d904') // works!
                  //- OJ
              },
              run: function(e, t, i) {
                  t = t || "#demo", i = i || function() {}, a.run(t, {
                      responsive: !0,
                      height: .5,
                      dataSource: APP_MEDIA_INIT || APP_MEDIA_SAMPLE,
                      maxVideoSize: 1300,
                      extend: function(e) {
                          i.call(this, e)
                      },
                  })
              }
          };
      t(".galleria-variant").click(function() {
          t(".galleria-container").toggleClass(t(this).data("variation")), t(this).toggleClass("btn--dark"), (t("body")
          .hasClass("miniml") || t("body").hasClass("folio")) && (t("body.preview .demo-bg")
          .toggleClass("bg--dark"), t(this).hasClass("btn--dark") ? t(".demo-modal #gallery")
          .css("background-color", "#232323") : t(".demo-modal #gallery").css("background-color", "#F4F4F4"))
      })
      Galleria.ready(function() {
          _this.gallery = this;
          this.bind('thumbnail', function(e) {
              var title = e.galleriaData.title;
              title     = title.length > 25 ? title.substring(0, 24) + '..' : title;
              e.thumbTarget.alt = e.thumbTarget.title = e.galleriaData.description;

              var _$parent = $(e.thumbTarget).parent();
              var _$img    = $(e.thumbTarget);
              _$img.wrap('<div class="app__thumb__wrap"></div');

              _$parent.css('height', '85.5px');
              _$parent.css('background-color', '#fff');
              _$parent.append('<div class="app__thumb__title">' + title + '</div');
          });
          this.bind('image', function(e) {
            //let _img = e.currentTarget.childNodes[0].childNodes[0].childNodes[1].childNodes[2];
            //__console.log(_img);
            //$(_img).on('click', () => alert(2));
            
            var index = e.index;
            var item  = APP_MEDIA_INIT.filter(function(el, i) { return i === index; })[0];
            /*
            var name  = item.title + '[' + item.description + ']';
            // ?
            if (__c.texts[name]) {
              $('#text').html(marked(__c.texts[name]));
            } else {
              $('#text').html('');
            }
            */
            let _content = $(`script[type="text/markdown"][data-content="${item.title}"]`).html();
            //__console.log(_content);
            if (_content) $('#text').html(marked(_content));
            else          $('#text').html('');
            //$('#text').html(`asldkjaslkajlk`);
            // ?
            _this.select.setValue(index, true);
          })
      });
    }(window, jQuery, Galleria);
    __frontend();
  },
  makeConsole: function() {
    var i = document.createElement('iframe');
    i.style.display = 'none';
    document.body.appendChild(i);
    window.__console = i.contentWindow.console;
    //i.parentNode.removeChild(i);
  },
  makeSelect: function() {
    var _this = this;
    var select = {};
    var iframe = $('#iframe__select');
    var config = {
      options: this.helperSelect(),
      onChange: function(value) {
        //__console.log(value)
      },
    }
    iframe.contents().find('body').html(__c(function(){/*!
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.default.min.css">
      <select id="select"></select>
    */}));
    this.select = select = iframe.contents().find('#select').selectize(config)[0].selectize;
    iframe.contents().find('#select').on('change', function() {
      var val = $(this).val();
      if (val !== '') _this.gallery.show(val);
      //__console.log(val);
      //_this.gallery.show(val)
    });
  },
  helperGallery: function(media) {
    var _this = this;
    var arr  = [];
    var list = [];
    //__console.log(media)
    arr = 
      __c.texts[media].split('\n')
      .filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});

    for (var i=0; i<arr.length; i++) {
      if ( /* ?? */
        (
          (arr[i].indexOf('title [description]~http') === -1) || 
          (arr[i].length !== 25)
        ) &&
        (arr[i].charAt(0) !== '~')
      ) {
        var arr_item  = arr[i].split('~');
        var list_item = {};
        // title, description
        if ((arr_item[0].indexOf('[') > -1) && (arr_item[0].indexOf(']') > -1)) {
          list_item.title       = arr_item[0].substring(0, (arr_item[0].indexOf('[')));
          list_item.description = arr_item[0].substring(arr_item[0].indexOf('[')+1, arr_item[0].length-1);
        } else {
          list_item.title       = arr_item[0] || '';
          list_item.description = arr_item[0] || '';
        }

        if (arr_item[1].indexOf('www.youtube.com') > -1) {
          list_item.video = arr_item[1];
        } else if (
          (arr_item[1].indexOf('gfycat.com') > -1)
        ) {
          list_item.iframe = arr_item[1];
          list_item.thumb  = 'images/placeholder.png';
        } else {
          var _arr_item_1 = arr_item[1];
          list_item.thumb = list_item.image = list_item.big = _arr_item_1;
        }
        
        //list_item.layer = '<p>adasdasd</p>'
        
        list.push(list_item);
      }
    }
    return list;
  },
  helperSelect: function() {
    var _this = this;
    var list = [];
    for (var i=0; i<APP_MEDIA_INIT.length; i++) {
      var val  = APP_MEDIA_INIT[i].title + '[' + APP_MEDIA_INIT[i].description + ']';
      var item = { value: i, text: val };
      list.push(item);
    }
    return list;
  },
}

app.init();
};//!

////////////////////////////////////////////////////////////////////////////////

__require('@/App', function(require, module, exports) {//!

function App() {
  return eval(jsx`
    <div>
      App!
    </div>
  `);
}

module.exports = App;

});//!

////////////////////////////////////////////////////////////////////////////////

__scripts = function() {
  //__script('https://ajbodev.bitbucket.io/custom/bundle/_react/_bundle.react.js');
  __script.root = 'https://books-8x3w.bitbucket.io/more/gallery/';
  __script('legacy/more/jquery-1.12.4.min.js');
  __script('legacy/more/selectize.min.js');
  __script('legacy/more/galleria.js');
  __script('legacy/more/galleria.twelve.min.js');
  __script('legacy/more/marked.min.js');
  __script('legacy/more/libs.js');
  __script('legacy/more/main.js');
  __script('legacy/more/frontpage.js');
  //__script('<..>');
  //__require('<vendor>', (r, m, e) => { m.exports = <Vendor>; });
};

////////////////////////////////////////////////////////////////////////////////

__styles = function() {
  //__style('styles.css');
  __style.root = 'https://books-8x3w.bitbucket.io/more/gallery/';
  __style('legacy/more/galleria.twelve.min.css');
  __style('legacy/more/bootstrap.css');
  __style('legacy/more/selectize.default.min.css');
  __style('legacy/more/main.css');
  __style('legacy/more/css.css');
  //__style('<..>');
};

////////////////////////////////////////////////////////////////////////////////

function __data() {};
function __require(n, f) { __require[n] = f };
document.write(`<script src='https://ajbodev.github.io/custom/bundle/_bundle.js'></\script>`);
__=()=>['styles','scripts','main'].map(el=>document.write(`<script>__${el}();</\script>`));

////////////////////////////////////////////////////////////////////////////////


