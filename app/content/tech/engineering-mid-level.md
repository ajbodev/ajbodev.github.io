
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

Finally, issues on technology are given remarks.

First, a preference for 'Open Source' ..

Second, a 'Decoupled Backend' ..

Third, 'Test Suites with Continuous Integration' ..

Fourth, 'Automated Deployment' ..

Fifth, 'Usable, Responsive Interface' ..

Lastly, 'MVVM Frontend' ..

[//]: # (@~|tech/engineering-mid-level|~@)

*/});
