
;__c(function(){/*!

# Engineering Mid Level

Looking at jobs available via StackOverflow, I came across this [gem](https://stackoverflow.com/jobs/109401/full-stack-software-engineer-britecore). What's special about it? There are lots of 'fullstack software engineering' job postings everywhere - but this is the only I've come across so far that gave you a 'guaranteed interview' if you complete a [special project](https://github.com/IntuitiveWebSolutions/EngineeringMidLevel). I'm not really sure if it's guaranteed, but the idea of having candidates prove themselves with a project - I think that's a fine example of hands-on meritocracy. And that's a good thing, because merit should be the most important consideration in doing software right. 

The way this problem wants merit to show - hands-on dirty coding - this reminds of my CS college days, when MEs (machine exercises) were regularly given after a lecture, and solving them felt great. Sometimes we compete on who can solve the fastest, or in the least amount of code. And sometimes they were too hard and had to be taken home - we had to bang our head on the problem until we eureka'd, then submit the next day. 

[This particular problem](https://github.com/IntuitiveWebSolutions/EngineeringMidLevel) - it's an ME alright, an Enterprise-style ME.

---

According to the [README](https://github.com/IntuitiveWebSolutions/EngineeringMidLevel), they use this project for 'hiring mid-level Engineers', to test 'potential team members on their technical skills'. The project is to build a 'Feature Request App .. that allows the user to create "feature requests"'. 

The schema for this features entity is then shown with the following attributes/columns: 'Title', 'Description', 'Client', 'Client Priority', 'Target Date', 'Product Area'. Each one of these is described, and seems fairly straightforward, until you get to 'Client Priority'. It has this reasonable but tricky requirement: **'Client Priority numbers should not repeat for the given client, so if a priority is set on a new feature as "1", then all other feature requests for that client should be reordered'**. Not impossible by any stretch, but not trivial either. I imagine several ways of solving this, with various tradeoffs. We'll get to that later.

The tech stack requirement is then mentioned: Ubuntu, Python (2.7/3.5), Flask, Sql-Alchemy, Knockout. The choice for frontend framework (Knockout) surprised me. Having done mostly React (and jQuery before that), the thought of going back to frameworks that existed before the thriving of ideas on virtual dom, web componentization, functional programming, ES6, and other JavaScript and web advances - it seemed like a step back. When I actually used Knockout (3.4.2), I was pleasantly surprised - it has incorporated *some* modern ideas (like web componentization), and the peppering of 'data-bind' in the HTML and 'ko.observable' in JavaScript isn't as bad as I thought it would be. We'll get more on this later.

The guidelines then mention hosting your project, dealing with ambiguities 'in your own creative way', and that since there is 'no perfect project', interpretations matter. I agree, especially on the necessity of interpretations. While the MEs I've dealt in college have a cookie cutter nature, I'm hardpressed to find any of my professional work (both job and play) where I didn't have to search or innovate in some way to deal with problems. You can say our entire schtick as webdevs is really just completing clients' ambiguous wishlists with actual working, *living* code.

---

Finally, issues on technology are given remarks.

**First, a preference for 'Open Source'.** To say that open source is good is almost tautological nowadays. But it wasn't that long ago that open source had connotations of being of poor quality and difficult to sustain. Behemoths like Microsoft, SAP, Oracle were the kings of this era. Then, several things happened - the rise of the web, the creation and spread of git beyond Linux, and then Github providing a centralization of git repositories. From this emerged a gamification of software quality (stars, forks, watches, pull requests, bug fixes, tags, followers, ..), turning open source into a superior model. Open source won.

**Second, a 'Decoupled Backend'.** Decoupling in general is a powerful programming practice. In the web, visiting a database-driven website usually results in the server dynamically generating a page. Every 'visit' to another page reloads the browser. While this is the default experience, many perceive this non-reactivity to be subpar. Thus, market forces resulted in browser evolution. Now, every standards browser can make additional 'visits' to a server without reloading the page. This lead to single-page apps. 'Visiting' or 'requesting' became less a role of the backend, and more a responsibility of the frontend, via JavaScript and browser APIs. A resulting interface evolved to allow the frontend to talk with any backend so long as both follow it. REST API became that dominant interface. The backend got abstracted, or 'decoupled'.

**Third, 'Test Suites with Continuous Integration'**. Having built large JavaScript apps, I can say that modularization is fundamental to making the entire thing understandable. Having an intuitive sense for modularization is important. Even better if you can provably demonstrate that your modules or units accomplish what they are. This is where automated testing comes in, particularly unit tests. In addition to verifying correctness, unit tests expose the software design, illuminating the structure and architecture in a more formal manner than intuition alone. Add this to the practice of continuous integration, by having every commit result in tests being run automatically, and you have a tight feedback loop. With this, issues should be more quickly pinpointed, resulting in higher quality software.

**Fourth, 'Automated Deployment'**. Continuous integration (CI) is almost always practiced with automated testing. Once all the tests pass, the new system can be automatically made live (deployed). The CI software that does all this can be self-hosted in your own machine or network (Jenkins), or a third party (Travis). The CI software is given high privilege access (usually SSH) to deploy to the application hosting. There can be many details to this, like the CI doing a rebuild of the dependencies, configuring based on environment, maybe even a redundant rerun of tests in the live server. Having containerization helps remove some concerns from environment mismatches. I admit these arent the most exciting parts of software development, but they're absolutely necessary for the product and the resulting experience of the users, especially in scale.

**Fifth, 'Usable, Responsive Interface'**. With lots of open source UI frameworks available (Bootstrap, Foundation), there is no excuse anymore for having a bad UI. And it should also 'work' well on different devices - this is also handled by those UI frameworks. Being primarily a developer, these UI frameworks (Bootstrap and AdminLTE in particular) have been of massive help in my professional and personal projects.

**Lastly, 'MVVM Frontend'**. More power, more responsibility. The frontend became more complex as a result of people making greater use of its increased capability. This increase in complexity necessitated better patterns for application organization. Thus came to the web patterns like MVC, MVVM, Flux, web componentization. Some prioritize different values more than others (traditional splitting of responsibilities in MVC; unidirectional data flow for flux; single file components for web componentization), but core to all of them is a principled separation of concerns (not necessarily of technology). It's entirely possible to build apps without explicit patterns, but you run the risk of accidental complexity emerging from that choice. Patterns generally pay off, especially as the app grows and scales. It comes at the cost of some upfront complexity, but the tradeoff is usually worth it.

---

<!--
* My solution ..
  * Different servers.
-->

[//]: # (@~|tech/engineering-mid-level|~@)


*/});

