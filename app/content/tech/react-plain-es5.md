
;__c(function(){/*!

# React.js in Plain ES5

If you're a web developer, and you've been living under the sun these past few years, you most certainly have heard of [React.js](https://facebook.github.io/react/), a javascript framework from Facebook. Sitting at roughly ~70k stars (<iframe class='github' src='https://ghbtns.com/github-btn.html?user=facebook&repo=react&type=star&count=true' frameborder='0' scrolling='0'></iframe>), it is the [fourth](https://github.com/search?q=stars:%3E1&s=stars&type=Repositories) most starred Github project currently, and looks to be the most popular javascript framework right now. [Google trends](https://trends.google.com/trends/explore?q=react%20js) have "react js" as a search term increasing over time, and with [hundreds of companies](https://github.com/facebook/react/wiki/sites-using-react) using it in production, job searches have increasingly been looking for React as an experience. 

Competing javascript frameworks, [Vue](https://vuejs.org/) in particular, have a lot of catch-up to do before dethroning React. At the rate React continues to grow ([React Fiber](http://isfiberreadyyet.com/) is coming soon; React in mobile via [React Native](https://facebook.github.io/react-native/) is getting there), as well as good reasons I might write about, I doubt any of them will. For now, React is the top dog of javascript frameworks, similar to what jQuery was almost a decade ago.

Why you might want to use React or any js framework to build your website or webapp - the reasons for doing that is a topic on its own. Assuming you want to do so, we're interested in whether we can do it in plain old JavaScript [ES5](https://es5.github.io/), and what reasons would you have for doing this.

React, like most modern JavaScript codebases, uses the latest JavaScript standard features beyond ES5 - in particular ES6, including the native import/export-based module system. Thanks to [Babel](https://babeljs.io/) and friends (webpack, gulp, polyfills), we dont have to wait for browsers to implement the the latest standard - we can run them right now via a combination of transpilation, bundling, polyfilling. The generated output code is usually targeted to ES5, which most browsers run, including all the way to IE8 (with polyfills).

In a sense, React IS already ES5, with the help of tooling. But the source language, which uses classes and JSX, is NOT plain ES5, as we also see in most of the examples and tutorials online. And since most browsers do not natively support some important parts of ES6 and other syntax (like JSX, which wont be native anytime soon if ever, as well as the hotly debated import/export module system), we need to use this heavy tooling of transpilers, bundlers, and whatnot BEFORE we can even say 'Hello World'!

***React.js in Plain ES5*** - without any Babel, ES6, JSX, any build step whatsoever - that's what we're interested in.

**Note**: you can look at the generated source from Babel (by default ES5), and manipulate it and say you're doing *React.js in Plain ES5*. Manipulating generated code is unpleasant, and not the one we're interested in.

**Important**: to developers who are reading this and want to use React, please don't get the wrong idea - I strongly believe React should almost always be done the 'standard way' - ES6, JSX, build tools like webpack, state management like Redux. So why bother with all of these ES5 nonsense? 

I find ***React.js in plain ES5*** interesting for the following reasons:

**1) It lowers the barrier of entry to React by eliminating the build step**

There was a time creating web pages meant just opening up a browser along with a text editor. That's it, you're good to go. The commandline was hardly needed.

Those days are gone. The web grew, and so has the nature of tools to deal with it. You CAN'T be without the commandline as a web developer - git, bash, npm, webpack, gulp, etc are now considered fundamental.

We don't go back to the past, but it is still possible to develop without any build step - we will see that below. Doing so makes it easier to start with React by just grabbing some CDN scripts, then hacking away.

**2) It shows an understanding of how JavaScript fundamentally works, in and beyond the context of React**

Understanding well the fundamentals of your technology - that's always good. With React, having a good understanding of JavaScript concepts (how to use 'call'; what 'new' does; what is 'this'; scope vs context; inheritance via prototypes) will allow you to break out of the React (or [insert framework here]) blackbox.

React is here to stay, and so is JavaScript. If React ever fades in importance, like with jQuery, another JavaScript framework will take it's place, and your understanding of fundamental JS concepts will carry over.

**3) It allows you to use React in non-standard scenarios**

In my former job as a web dev for a multinational gas company, I wanted to use React as a template layer. Unfortunately, my access to the codebase was limited - I cannot use FTP to sync Webpack for React and JSX. Still, I wanted to use React. That's when I learned React in plain ES5. My access was limited to a CMS (Joomla), so I had to enter the frontend code entirely there.

We don't always get to dictate the development environment handed to us. When the decisions are made, and limitations are there, having greater knowledge of the underlying tech can often yield surprisingly acceptable workarounds. My knowledge of React ES5 allowed me to use React in a non-standard manner, without any build step.

---

Good reasons. Enough rambling, we need some code!

Let's start with the official Facebook React getting started guide, the 'Hello World', and convert it to ES5.

https://facebook.github.io/react/docs/hello-world.html


**Code 1**
```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

You obviously can't run this natively in your browser because of the JSX, so we transpile it (e.g. [Babel repl](https://babeljs.io/repl/)):

**Code 2**
```
ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello, world!'
), document.getElementById('root'));
```

We can point [React.createElement](https://facebook.github.io/react/docs/react-api.html#createelement) to a more ergonomic variable, say 'h' (for html, or [hyperscript](https://github.com/hyperhype/hyperscript)), and safely replace the null in the middle with an empty object {} (this stands for attributes). The variable 'h', being so fundamental to the entire application templating, is fine being global (just like how 'window' and 'document' are).

**Code 3**
```
h = React.createElement;
ReactDOM.render(
  h('h1', {}, 'Hello, world!'), 
  document.getElementById('root')
);
```

Assuming you have a dom element with id 'root', Code 1, 2, and 3 should work all the same. 

Note: the variables 'React' and 'ReactDOM' are available in context via a build system (webpack, browserify) or via a cdn (cdnjs, unpkg)

```
// via Build system inside your JavaScript
var React = require('react');
var ReactDOM = require('react-dom');
```

or

```
<!-- via CDN inside your HTML -->
<!-- Exposes global 'React' and 'ReactDOM' -->
<script src='https://unpkg.com/react@latest/dist/react.min.js'></script>
<script src='https://unpkg.com/react-dom@latest/dist/react-dom.min.js'></script>
```

Continuing, we see that Code 1 and 3 aren't so far different looking.

```
// Code 1
<h1>Hello, world!</h1>

// Code 2
h('h1', {}, 'Hello, world!')
```

One can argue that the empty object in Code 2 feels unnecessary, but a counterpoint is that its blankness is a marker for the element not having any HTML attributes.

---

Real application templating involves *arbitrary nesting*, just like with regular HTML. Let's continue with a more real example:

**Code 4**
```
ReactDOM.render(
  <div>
    <form>
      <input type='text'>
    </form>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>,
  document.getElementById('root')
);
```

The equivalent for plain ES5 using 'h':

**Code 5**
```
h = React.createElement;
ReactDOM.render(
  h('div', {},
    h('form', {},
      h('input', {type: 'text'})
    ),
    h('ul', {},
      h('li', {}, 'Item 1'),
      h('li', {}, 'Item 2'),
      h('li', {}, 'Item 3')
    )
  ),
  document.getElementById('root')
);
```

The 'ul' list can be looped:

**Code 6**
```
ReactDOM.render(
  <div>
    <form>
      <input type='text'/>
    </form>
    <ul>
      {[1, 2, 3].map(function(el, i){
        return <li key={i}>{el}</li>;
      })}
    </ul>
  </div>,
  document.getElementById('root')
);
```

**Code 7**
```
h = React.createElement;
ReactDOM.render(
  h('div', {},
    h('form', {},
      h('input', {type: 'text'})
    ),
    h('ul', {},
      [1, 2, 3].map(function(el, i){
        return h('li', {key: i}, el);
      })
    )
  ),
  document.getElementById('root')
);
```

Note that in Code 7, we went from passing 3 argument parameters for h('ul', {}, ...) in Code 5, to passing 1 parameter (an array with 3 values). This is perfectly valid.

We can transform both Code 6 and 7 to hold the entire template inside variables.

```
// JSX
var template = 
  <div>
    <form>
      <input type='text'/>
    </form>
    <ul>
      {[1, 2, 3].map(function(el, i){
        return <li key={i}>{el}</li>;
      })}
    </ul>
  </div>
ReactDOM.render(template, document.getElementById('root'));

// ES5 via h
h = React.createElement;
var template = 
  h('div', {},
    h('form', {},
      h('input', {type: 'text'})
    ),
    h('ul', {},
      [1, 2, 3].map(function(el, i){
        return h('li', {key: i}, el);
      })
    )
  );
ReactDOM.render(template, document.getElementById('root'));
```

The potential downside to this approach is that the 'template' is immediately evaluated (but not necessarily 'mounted'). The obvious solution is to store it in a function. React has a twist on this:

```
// JSX
var template = function(props) {
  return <div>
    <form>
      <input type='text'/>
    </form>
    <ul>
      {[1, 2, 3].map(function(el, i){
        return <li key={i}>{el}</li>;
      })}
    </ul>
  </div>;
}
ReactDOM.render(<template/>, document.getElementById('root'));

// ES5 via h
h = React.createElement;
var template = function(props) {
  return h('div', {},
    h('form', {},
      h('input', {type: 'text'})
    ),
    h('ul', {},
      [1, 2, 3].map(function(el, i){
        return h('li', {key: i}, el);
      })
    )
  );
}
ReactDOM.render(h(template), document.getElementById('root'));
```

Notice these two:

```
// JSX
ReactDOM.render(<template/>, document.getElementById('root'));

// ES5 via h
ReactDOM.render(h(template), document.getElementById('root'));
```

Our template now becomes like a native HTML element itself! We know it's composed of several HTML elements. Also, using the JSX/HTML syntax of <[element]></[element]> is merely equivalent to h([element]). These are rudimentary ideas on how to extend HTML using a 'component-like' mechanism.

The proposed standard approach for doing this natively (without JavaScript) is called Web Components. And yes, like JSX and some ES6 niceties, Web Components will take years, if not decades, to be fully implemented by every browser. React takes the approach that bringing Web Components now is doable inside JavaScript itself. Others take a more HTML-centric approach when it comes to the templating part of Web Components - Angular (1, 2, 4, ..), Vue, Knockout, Polymer.

What we did above is a rudimentary form of web components - let's call them functional (React) components because they use functions. React though is mostly done using class-based components. Doing classes for React components using ES5 is a good exercise in JavaScript fundamental concepts.

---

Converting the example above to ES6 + JSX:

**Code 8**
```
class template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <form>
        <input type='text'/>
      </form>
      <ul>
        {[1, 2, 3].map(function(el, i){
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </div>;
  }
}
ReactDOM.render(<template/>, document.getElementById('root'));
```

You can try and convert this using the [Babel REPL online](https://babeljs.io/repl/) - you won't like what you see. Thankfully, computers running that code dont care so long as it's correct. But for humans who want to use React class-based components by using only ES5, there is a better way, via the fundamental JS concepts of .call, new, this, and prototypes.

ES6 classes are just syntactic sugar for JavaScript prototypes. The perceived value of this 'sugar' is obviously high enough to be standardized.

So a class:

```
class template {
  render() {

  }
}
new template();
```

is just equivalent to the standard JavaScript prototypal OO:

```
function template() {

}
template.prototype.render = function() {}
new template();
```

Let's add inheritance, and call the parent's constructor:

```
// ES6
class template extends templateParent {
  constructor(props) {
    super(props)
  }
  render() {

  }
}
new template();

// ES5
function template(props) {
  templateParent.call(this, props);
}
template.prototype.render = function() {}
new template();
```

Applying the above patterns for React:

**Code 9**
```
h = React.createElement;
function template(props) {
  React.Component.call(this, props);
}
template.prototype.render = function() {
  return h('div', {},
    h('form', {},
      h('input', {type: 'text'})
    ),
    h('ul', {},
      [1, 2, 3].map(function(el, i){
        return h('li', {key: i}, el);
      })
    )
  );
}
ReactDOM.render(h(template), document.getElementById('root'));
```

Code 8 and 9 are equivalent, and thus we've completely used React in E55!


[//]: # (@~|tech/react-plain-es5|~@)

*/});
