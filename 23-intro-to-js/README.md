//const, let and var
//callback, and built in array functions
//recursive and it's practical uses

### Goals for Module 3
- Learn how to learn a new programming languages
- Learn how to problem solve, break things down, and work incrementally (debugging)
- Learn how to be resourceful

### JavaScript History
- Created by Brendan Eich in 1995
- Wanted to turn the web into something like a desktop application (SPA)
- Not related to JAVA (JS was first code named Mocha, then LiveScript)
- So vast...

### Intro to Javascript
- HTML -skeleton/structure
- CSS - skin/styling/appearance
- JS - behavior, input and outputs, user interactions  
- Set up index.html, script.js, chrome console
- script tag at the bottom of the .html file?

### Learning a New Programming language
- How to Debug (console.log(), alert(), debugger)
- Documentation [MDN]((https://developer.mozilla.org/en-US/))

### Difference between Ruby and JS
- JS is more syntactically strict (explicitlty declare var, let, const) (return) if(someExpression) name(param1, param2, ...)
- JS does stuff unbeknowst to us
- Tries to be helpful (type coercion) == vs ===
- Everything is an object



### Datatypes
- What types and how many?

Primitive
- string
  - concatenation and interpolation ``
- number
  - all fall into one broad type
  - beware of floating point calculations
- boolean
  - all data has a truthy or falsey value
- symbols
  - used in small use cases where you need a unique identifier
- undefined
  - no data... yet....
- null
  - the explicit absence of data

Objects
- objects uses {}
  - differences in . vs [] notation
- arrays
  - also can be treated like objects, can have key values pairs, can have undefined indexes
- functions



- Pass by value vs pass by reference


//primitive data types are pass by value
//num is a number data type
// function timesTwo(num){
//   return num * 2
// }
// var a = 3
// var b = timesTwo(a)




//object data types are pass by reference
//obj is a obj data type {num : 3}
// function timesTwo(obj){
//   obj.num = obj.num * 2
//   return obj
// }
// const objA = {num: 3}
// var objB = timesTwo(objA)

//const CANNOT re-assign the value,
//but you can change the data

### Announcements
- FSP (Flatiron Student Presents) partners annouced this afternoon
- Like a blog but with a partner and as a 7-8min presentation on a technical topic of your choice (See read me on Learn.co)
- Mon Dec 10th or Tue Dec 11th
- Check Ins are through out your Calendar

- More Labs! Under JavaScript Foundations, labs should definitely be completed in order














- Syntactically more strict
- Type coercion
  - less likely to throw errors
  - argument number is loose
  - object referencing comes back undefined
- Everything is an Object! or a primitive type
