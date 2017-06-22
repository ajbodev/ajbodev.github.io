
;__c(function(){/*!

# PHP Arrays as Pseudo Classes

The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scr e industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scr e industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scr

<!--

* variable scope
* php closures
* array references ..
* rudimentary DI : include file .. virtualized module
* php function name vs decl
* $_this

---

https://www.reddit.com/r/PHP/comments/129u20/a_closer_look_into_php_arrays_what_you_dont_see/

PHP arrays aren't really arrays - they're hashmaps with array-like properties that we term as "arrays" for the sake of simplification. This is the crux of the matter.
What you should take from the article is that PHP arrays are excessively expensive when compared to regular arrays in other languages. There are times when all you need is a basic ordered list (which is much, much simpler than what they're doing), and not every other thing that makes php arrays unique. This is why most languages differentiate between hashmaps and arrays.

Indeed, I agree completely. Even OrderedDict in Python doesn't compare. I've grown quite fond of PHP arrays over the years and I often find they solve so many problems without requiring me to write some 12 different user-land implementations every time I want to solve unique cases for handling compound structures.
PHP arrays just work great for so many things out of the box.

https://www.reddit.com/r/PHP/comments/3qekc8/cs_array_or/

https://www.reddit.com/r/PHP/comments/ne6qy/how_big_are_php_arrays_and_values_really_hint_big/

I will not disagree that there is potential for improvement here. 144 bytes per element really is much and I am not going to deny that one can use less.
Your concrete comparison though compares two very different things. JavaScript has two distinct notations for continuous arrays [] and objects {}. PHP does not. PHP arrays are basically arrays, dictionaries and linked lists combined into one structure. (By the way, I would have preferred distinct structures in PHP too, but well, that's the way it is.)

One of the reason I like programming in PHP is because the array is so versatile.

---

https://www.reddit.com/r/PHP/comments/29eope/stop_abusing_arrays_in_php/

Just because a tool is powerful, flexible and simple doesn't preclude it from abuse. Getting the job done doesn't imply engineering best practices. Often times, for the flexibility gained, important things like maintainability and testability are sacrificed. Not to mention you lose the power of encapsulation (arrays have no way of expressing behavior) and polymorphism (arrays are of type array) which is essential for quality OOP. Don't get me wrong, when used in the right context arrays are a perfectly valid tool, especially in PHP. The examples highlighted in the OP's article are commonly found in PHP and it's a shame. It makes the community look like amateurs. This is especially a shame for the folks in the symfony/laravel/hhvm communities working hard to make the community a better place.

-->

[//]: # (@~|php-arrays-as-pseudo-classes|~@)

*/});
