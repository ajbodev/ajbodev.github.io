
;__c(function(){/*!

# React.js in Plain ES5

If you're a web developer, and you've been living under the sun this past few years, you most certainly have heard of [React.js](https://facebook.github.io/react/), a javascript framework from Facebook. Sitting at roughly ~70k stars (<iframe class='github' src='https://ghbtns.com/github-btn.html?user=facebook&repo=react&type=star&count=true' frameborder='0' scrolling='0'></iframe>), it is currently the [fourth](https://github.com/search?q=stars:%3E1&s=stars&type=Repositories) most starred project in all of Github, and certainly looks to be the most popular javascript framework right now. [Google trends](https://trends.google.com/trends/explore?q=react%20js) have "react js" as a search term increasing over time, and with [hundreds of companies](https://github.com/facebook/react/wiki/sites-using-react) using it in production, job searches have increasingly been looking for React.js as an experience. Competing javascript frameworks, Vue.js in particular, have a lot of catch-up to do before dethroning React. It's safe to say that for now, all signs point to React.js as the top dog of javascript frameworks, taking the throne in a somewhat like manner as jQuery did almost a decade ago.

Why you would want React.js, or any javascript framework, to build your website or webapp on - that's an interesting blog on its own. Right now, assuming you want to build using React, we're interested in what the blog's title says: ***React.js in Plain ES5***. We all know *pedantically* that React runs in ES5 because Babel does ES6, JSX, etc to ES5, and most react tutorials use Babel to convert ES6 + JSX. *Pedantics*. The interesting part for me is still ***React.js in Plain ES5*** - without any 'need' for Babel, ES6, JSX (which is just sugar anyways for React.createElement). Pedantically, you can look at the generated source from Babel (which by default is ES5), and manipulate it and say you're doing *React.js in Plain ES5*. You should be able to tell that that experience should be less than pleasant, and not the one we're interested in.

Why do I find 'React in plain ES5' interesting, and not just stick to React's default ES6+JSX approach? Several reasons:

**1) It greatly lowers the barrier to starting with React by eliminating build**

..

**2) It shows an understanding of how JavaScript fundamentally works**

..

**3) Allows you to use React in non-standard scenarios**

..

Good reasons. Now where's the code?

Let's start with the official Facebook React getting started guide

<!--
* reasons
  * lower barrier
  * increase fundamental understanding of javascript
  * allows you to use React in non-standard scenarios
-->

<!--

<iframe src='https://ghbtns.com/github-btn.html?user=facebook&repo=react&type=star&count=true' 
  frameborder='0' scrolling='0' width='170px' height='20px'></iframe>
* [Top] React.js is now the top javascript framework for webapp
   * sitting at 68K stars
   * people who are using it https://github.com/facebook/react/wiki/sites-using-react
* [Start] Starting with react .. jsx, es6 classes, ..
* [Plain] Contrary to top google searches on react, you can simply start just by 
  grabbing the cdn of react and react dom, then using plain es5 onwards - no jsx, no classes.
  This requires an understanding of how javascript (and react work)
  * Start with
    * react component -> call and prototype
    * jsx -> h = React.createElement;
* [Why] why might you want to do this?
  * Some use cases might be contrived, but in my last major project, I was in charge
    of a joomla website that needed lots of custom coding. Contrary to some popular belief,
    cmss still can need a lot of help when dealing with highly granulazed requirements.
  * I decided to use react for templating and binding certain actions to data, but I can't have
    a very good workflow in the absence of an ftp - I was not given this privilege - merely using 
    whatever file editor the joomla has.
-->

```javascript

h = React.createElement;

var _module = function(name) {
  React.Component.call(this, name);
  this.state = {input: ''};
  this.boot();
}
var prototype = {
  boot: function() {
  },
  render: function() {
    var _this = this;
    var template = h('div', {}, 'HAHA',
      h('ul', {},
        h('li', {}, 'More')
      ),
      h('form', {},
        h('input', {onChange: function(e){_this.handleChange(e)}, value: this.state.input }),
        h('button', {onClick: function(e){_this.handleClear(e)}, type: 'button'}, 'Clear')
      )
    )
    return template;
  },
  handleChange: function(e) {
    this.setState({ input: e.target.value})
  },
  handleClear: function() {
    console.log(this.state)
    this.setState({ input: '' })
  },
};
for (var i in prototype)                 _module.prototype[i] = prototype[i];
for (var i in React.Component.prototype) _module.prototype[i] = React.Component.prototype[i];

ReactDOM.render(h(_module), document.getElementById('content'))

```

[//]: # (@~|react-plain-es5|~@)

*/});
