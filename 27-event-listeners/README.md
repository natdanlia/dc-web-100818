# Event Listeners

## Asynchronous vs Synchronous?

## Review the Execution Stack, Event Queue, Event Loop
- example: setTimeout(function(){console.log("hello one second later")}, 1000)
- example: setTimeout(function(){console.log("hello right away")}, 0)
- events are asynchronous

## .addEventListener on a DOM node
- takes in a string for the name of the event, and a callback function to be invoked when the event happens
- If the function object is a callback passed into .addEventListener, that function has an optional argument of the event itself

## Example of Events
- click
- keydown
- keyup
- DOMContentLoaded

## When to add an event Listener
- on load of page?
- on creation of element?

## Practice
- When click of email -> send an email X
- When click of submit -> add new instructor X
- When click of row -> view profile X

## Some events have default behavior
- event.preventDefault()

## Event bubbling vs. capturing, and propagation
- event.target: the innermost node that triggers the event
- event.currentTarget: the node that is attached to the event listener
- by default, event are fired during the bubbling phase
- event.stopPropagation()




## Lab Announcements
- code is getting pushed up now, videos will eventually
- Ann is slacking them out now
