
;__c(function(){/*!

# React.js in Plain ES5

If you're a web developer, and you've been living under the sun these past few years, you most certainly have heard of [React.js](https://facebook.github.io/react/), a javascript framework from Facebook. Sitting at roughly ~70k stars (<iframe class='github' src='https://ghbtns.com/github-btn.html?user=facebook&repo=react&type=star&count=true' frameborder='0' scrolling='0'></iframe>), it is the [fourth](https://github.com/search?q=stars:%3E1&s=stars&type=Repositories) most starred Github project currently, and looks to be the most popular javascript framework right now. [Google trends](https://trends.google.com/trends/explore?q=react%20js) have "react js" as a search term increasing over time, and with [hundreds of companies](https://github.com/facebook/react/wiki/sites-using-react) using it in production, job searches have increasingly been looking for React as an experience. 

Competing javascript frameworks, [Vue](https://vuejs.org/) in particular, have a lot of catch-up to do before dethroning React. At the rate React continues to grow ([React Fiber](http://isfiberreadyyet.com/) is coming soon; React in mobile via [React Native](https://facebook.github.io/react-native/) is getting there), as well as good reasons I might write about, I doubt any of them will. For now, React is the top dog of javascript frameworks, similar to what jQuery was almost a decade ago.

Why you might want to use React or any js framework to build your website or webapp - the reasons for doing that is a topic on its own. Assuming you want to do so, we're interested in whether we can do it in plain old JavaScript [ES5](https://es5.github.io/), and what reasons would you have for doing this.

As you probably know, most modern JavaScript codebases, like React, are increasingly using the latest JavaScript standard  beyond ES5 - in particular ES6, including the native import/export-based module system. Thanks to [Babel](https://babeljs.io/) and friends (webpack, gulp, polyfills), we dont have to wait for browsers to implement the the latest standard - we can run them right now via a combination of transpilation, bundling, polyfilling. The generated output code is usually targeted to ES5, which most browsers run, including all the way to IE8 (with polyfills).

So in a sense, React IS already in ES5 with the help of tooling. But the source language is NOT in plain ES5, as we also see in most of the examples and tutorials online. And since most browsers do not natively support some important parts of ES6 and other syntax (like JSX, which wont be native anytime soon if ever, as well as the hotly debated import/export module system), we need to use this heavy tooling of transpilers, bundlers, and whatnot BEFORE we can even say 'Hello World'!

***React.js in Plain ES5*** - without any Babel, ES6, JSX, any build step whatsoever - that's what we want.

Note that you can look at the generated source from Babel (by default ES5), and manipulate it and say you're doing *React.js in Plain ES5*. Manipulating generated code is unpleasant, and not the one we're interested in.

**Important**: to developers who are reading this and want to use React, please don't get the wrong idea - I strongly believe React should almost always be done the 'standard way' - ES6, JSX, build tools like webpack, state management like Redux. 

So why bother with all of these ES5 nonsense? I find ***React in plain ES5*** interesting for the following reasons:

**1) It lowers the barrier of entry to React by eliminating the build step**

There was a time creating web pages meant just opening up a browser along with a text editor. That's it, you're good to go. The commandline was hardly needed.

Those days are gone. The web grew, and so has the nature of tools to deal with it. You CAN'T be without the commandline as a web developer - git, bash, npm, webpack, gulp, etc are now considered fundamental.

We don't go back to the past, but it is still possible to develop without any build step - we will see that below. Doing so makes it easier to start with React by just grabbing some CDN scripts, then hacking away.

**2) It shows an understanding of how JavaScript fundamentally works, in and beyond the context of React**

Understanding well the fundamentals of your technology - that's always good. With React, having a good understanding of JavaScript concepts (how to use 'call'; what 'new' does; scope vs context; inheritance via prototypes) will allow you to break out of the React (or [insert framework here]) blackbox.

React is here to stay, and so is JavaScript. If React ever fades in importance (like jQuery?), another JavaScript framework (or web assembly?) will take it's place, and your understanding of fundamental JS concepts will carry over.

**3) It allows you to use React in non-standard scenarios**

In my former job as a web dev for a multinational gas company, I wanted to use React as a template layer. Unfortunately, my access to the codebase was limited - I cannot use FTP to sync Webpack for React and JSX. Still, I wanted to use React. That's when I learned React in plain ES5. My access was limited to a CMS (Joomla), so I had to enter the frontend code entirely there.

We don't always get to dictate the development environment handed to us. When the decisions are made, and limitations are there, having greater knowledge of the underlying tech can often yield surprisingly acceptable workarounds. My knowledge of React ES5 allowed me to use React in a non-standard manner, without any build step.

---

Good reasons. Enough rambling, we need some code!

Let's start with the official Facebook React getting started guide, the 'Hello World', and convert it to ES5.

https://facebook.github.io/react/docs/hello-world.html

```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```



..

---

Where it gets interesting is in the components ..

https://facebook.github.io/react/docs/components-and-props.html

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

```

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

[//]: # (@~|tech/react-plain-es5|~@)

*/});
