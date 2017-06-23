
;__c(function(){/*!

# React.js in Plain ES5

If you're a web developer, and you've been living under the sun these past few years, you most certainly have heard of [React.js](https://facebook.github.io/react/), a javascript framework from Facebook. Sitting at roughly ~70k stars (<iframe class='github' src='https://ghbtns.com/github-btn.html?user=facebook&repo=react&type=star&count=true' frameborder='0' scrolling='0'></iframe>), it is currently the [fourth](https://github.com/search?q=stars:%3E1&s=stars&type=Repositories) most starred Github project, and certainly looks to be the most popular javascript framework right now. [Google trends](https://trends.google.com/trends/explore?q=react%20js) have "react js" as a search term increasing over time, and with [hundreds of companies](https://github.com/facebook/react/wiki/sites-using-react) using it in production, job searches have increasingly been looking for React.js as an experience. 

Competing javascript frameworks, [Vue.js](https://vuejs.org/) in particular, have a lot of catch-up to do before dethroning React. At the rate React continues to grow, along with reasons I might blog in the future, I doubt any of them will. For now, React is the top dog of javascript frameworks, sitting in the throne kinda like what jQuery did almost a decade ago.

Why you want to use React.js, or any js framework, to build your website or webapp - the reasons for doing that is a topic on its own. Right now, assuming you want to build using React, we're interested in whether you can do it in plain old ES5, and what reasons would you have for doing this.

We know React runs in ES5 because Babel converts ES6, JSX to ES5, and almost all React projects use Babel. That's merely pedantry. The interesting part for me is just ***React.js in Plain ES5*** - without any Babel, ES6, JSX, any build step whatsoever. 

(Note that you can look at the generated source from Babel (by default ES5), and manipulate it and say you're doing *React.js in Plain ES5*. Doing that is unpleasant, and not the one we're interested in.)

I hope developers who are reading this and want to use React don't get the wrong idea - I strongly believe React should almost always be done in the 'standard way' (ES6, JSX, build tools like webpack, state management like Redux). So why bother with all of these ES5 nonsense? I find ***React in plain ES5*** interesting still for the following reasons:

**1) It lowers the barrier of entry to React by eliminating the build step**

..

**2) It shows an understanding of how JavaScript fundamentally works, in and beyond the context of React**

..

**3) It allows you to use React in non-standard scenarios**

..

---

Good reasons. Now where's the code?

Let's start with the official Facebook React getting started guide, and convert it to ES5.

https://facebook.github.io/react/docs/hello-world.html

```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

This is pretty simple enough ..

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

[//]: # (@~|react-plain-es5|~@)

*/});
