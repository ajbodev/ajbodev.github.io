
/*
     <div id="container">
       <div id="search">
         <div class="search__button fl">
           <input id="search__button" type="button" value="Search" onclick="app.search()"/>
         </div><span>
           <input id="search__user" type="text" placeholder="Bible search" onkeypress="app.autosuggestUser()" class="typeahead"/>
           <div id="search__actual">
             <input type="text" style="visibility: hidden;" class="typeahead"/>
           </div>
           <!--input(id='search__text', type='text')--></span>
       </div>
       <div id="books" class="fl ovf"></div>
       <div id="chapters" class="fl ovf"></div>
       <div id="verses" class="ovf"></div>
     </div>
*/

var app, router;
 app = function(){
   var o;
   o = {};
   o.init = function(){
     o.renderBooks();
     o.initAutosuggest();
   };
   o.renderBooks = function(){
     var list, i$, ref$, len$;
     list = '<ul>';
     for (i$ = 0, len$ = (ref$ = o.booknames).length; i$ < len$; ++i$) {
       (fn$.call(this, i$, ref$[i$]));
     }
     list += '</ul>';
     $('#books').html(list);
     function fn$(i, el){
       var book;
       book = i + 1;
       list += '<a href="#/' + book + '">';
       list += '<li id="book-' + book + '" data-book="' + o._booknames[i] + '">' + el + '</li>';
       list += '</a>';
     }
   };
   o.renderChapters = function(book){
     var list, length, i$;
     list = '<ul>';
     length = Bible[book].length - 1;
     for (i$ = 1; i$ <= length; ++i$) {
       (fn$.call(this, i$));
     }
     $('#chapters').html(list);
     function fn$(i){
       var chapter;
       chapter = i;
       list += '<a href="#/' + book + '/' + chapter + '">';
       list += '<li id="chapter-' + chapter + '">' + chapter + '</li>';
       list += '</a>';
     }
   };
   o.renderVerses = function(book, chapter){
     var list, length, i$;
     list = '<ul>';
     length = Bible[book][chapter].length - 1;
     for (i$ = 1; i$ <= length; ++i$) {
       (fn$.call(this, i$));
     }
     list += '</ul>';
     $('#verses').html(list);
     function fn$(i){
       var bookname, verse;
       bookname = o.booknames[book - 1];
       verse = Bible[book][chapter][i];
       list += '<li><b>' + bookname + ' ' + chapter + ':' + i + '</b> ' + verse + '</li>';
     }
   };
   o.initAutosuggest = function(){
     $('#search__actual .typeahead').typeahead({
       hint: true,
       highlight: true,
       minLength: 1
     }, {
       name: 'BibleWords',
       source: substringMatcher(BibleWords),
       limit: 10
     }).on('typeahead:selected', function(obj, select){
       o.autosuggestUserConcat(select);
     });
   };
   o.autosuggestUser = function(){
     setTimeout(function(){
       var _input, _inputs, _typeahead;
       _input = $('#search__user').val();
       _inputs = _input.split(' ');
       _typeahead = _inputs[_inputs.length - 1];
       $('#search__actual .typeahead').typeahead('val', _typeahead);
       $('#search__actual .typeahead').typeahead('open');
     }, 100);
   };
   o.autosuggestUserConcat = function(select){
     var _input, _inputs;
     _input = $('#search__user').val();
     _inputs = _input.split(' ');
     _inputs[_inputs.length - 1] = select;
     _input = $('#search__user').val(_inputs.join(' '));
   };
   o.search = function(){
     var search;
     search = $('#search__user').val();
     if (search.charAt(0) === '@') {
       router.setRoute('/search-advanced/' + search.substr(1));
     } else {
       router.setRoute('/search/' + search);
     }
   };
   o.regex = function(search){
     var result, rgx, ch, book, chapter, verse, _rgx, _verse, _item;
     result = [];
     result.push('<ul>');
     rgx = new RegExp(search, 'gi');
     ch = [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1, 22];
     book = 1;
     while (book <= 66) {
       chapter = 1;
       while (chapter <= ch[book - 1]) {
         verse = 1;
         while (verse <= Bible[book][chapter].length) {
           _rgx = rgx.exec(Bible[book][chapter][verse]);
           if (_rgx) {
             _verse = Bible[book][chapter][verse];
             _item = '<li><b>' + o.booknames[book - 1] + ' ' + chapter + ':' + verse + '</b>  ' + Bible[book][chapter][verse] + '</li>';
             result.push(_item);
           }
           verse++;
         }
         chapter++;
       }
       book++;
     }
     result.push('</ul>');
     return result.join('');
   };
   o.searchBasic = function(search){
     var searches, _search, i$, len$, result;
     searches = search.split(' ');
     _search = '';
     for (i$ = 0, len$ = searches.length; i$ < len$; ++i$) {
       (fn$.call(this, i$, searches[i$]));
     }
     result = o.regex(_search);
     $('#verses').html(result);
     function fn$(i, el){
       _search += '(?=.* ' + el + '?( |.|,))';
     }
   };
   o.searchAdvanced = function(search){
     var result;
     result = o.regex(search);
     $('#verses').html(result);
   };
   o.highlight = function(div, id){
     $('#' + div + 's li').removeClass('highlight-' + div);
     $('#' + div + '-' + id).addClass('highlight-' + div);
   };
   o.scrollTop = function(div){
     $('#' + div).scrollTop(0);
   };
   o.booknames = ['Gen', 'Exo', 'Lev', 'Num', 'Deu', 'Jos', 'Jdg', 'Rut', '1Sa', '2Sa', '1Ki', '2Ki', '1Ch', '2Ch', 'Ezr', 'Neh', 'Est', 'Job', 'Psa', 'Pro', 'Ecc', 'Son', 'Isa', 'Jer', 'Lam', 'Eze', 'Dan', 'Hos', 'Joe', 'Amo', 'Oba', 'Jon', 'Mic', 'Nah', 'Hab', 'Zep', 'Hag', 'Zec', 'Mal', 'Mat', 'Mar', 'Luk', 'Joh', 'Act', 'Rom', '1Co', '2Co', 'Gal', 'Eph', 'Phi', 'Col', '1Th', '2Th', '1Ti', '2Ti', 'Tit', 'Phm', 'Heb', 'Jam', '1Pe', '2Pe', '1Jo', '2Jo', '3Jo', 'Jud', 'Rev'];
   o._booknames = ['esis', 'dus', 'iticus', 'bers', 'teronomy', 'hua', 'ges', 'h', 'muel', 'muel', 'ngs', 'ngs', 'ronicles', 'ronicles', 'a', 'emiah', 'her', '', 'lm', 'verbs', 'lesiastes', 'g of Solomon', 'iah', 'emiah', 'entations', 'kiel', 'iel', 'ea', 'l', 's', 'diah', 'ah', 'ah', 'um', 'akkuk', 'haniah', 'gai', 'hariah', 'achi', 'thew', 'k', 'e', 'n', 's', 'ans', 'rinthians', 'rinthians', 'atians', 'esians', 'lippians', 'ossians', 'essalonians', 'essalonians', 'mothy', 'mothy', 'us', 'lemon', 'rews', 'es', 'ter', 'ter', 'hn', 'hn', 'hn', 'e', 'elation'];
   o.animate = function(div){
     $('#' + div).addClass('fadeIn animated');
     setTimeout(function(){
       $('#' + div).removeClass('fadeIn');
     }, 1000);
   };
   return o;
 }();
 app.init();
 router = Router({
   '/([0-9]*)': function(book){
     app.renderChapters(book);
     app.scrollTop('chapters');
     app.highlight('book', book);
   },
   '/([0-9]*)/([0-9]*)': function(book, chapter){
     app.renderVerses(book, chapter);
     app.scrollTop('verses');
     app.highlight('chapter', chapter);
   },
   '/search-advanced/?((w|.)*)': function(search){
     var _search;
     _search = search.replace(/\+/g, ' ');
     app.searchAdvanced(_search);
     app.highlight('book', -1);
     app.highlight('chapter', -1);
   },
   '/search/?((w|.)*)': function(search){
     app.searchBasic(search);
     app.highlight('book', -1);
     app.highlight('chapter', -1);
   }
 });
 router.init();