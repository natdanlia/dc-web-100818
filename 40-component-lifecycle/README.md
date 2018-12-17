# React Component Lifecycle

## Hooks
- For class components that extend React.Component

## Available Methods
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- https://reactjs.org/docs/react-component.html

## Task Lister
- Walk through

## Lifecycle Methods only for class components

### Creation
- `componentDidMount()`
 - fetch
 - add extra event listeners
 - set up timers
 - things that require the DOM

#### Setting Initial State using Props

### Update
- `render()`
 - has a return value
 - don't update state here
- `componentDidUpdate()`
 - fetch maybe?

### Deletion
 - `componentWillUnmount()`
  - called right before element is removed from DOM
  - clean up things from componentDidMount

#### Where to put fetch?
- ComponentDidMount
- ComponentDidUpdate
- Event handlers

### Less used methods
- `shouldComponentUpdate()`
- `getDerivedStateFromProps()`
- `getSnapshotBeforeUpdate()`

### Deprecated Methods
- `componentWillMount()`
- `componentWillReceiveProps()`
- `componentWillUpdate()`

## Lab Announcements (Hogwarts)
- will be building this out almost from scratch (review Props lecture)
- very ambiguous, but that's the point
- let imgUrl = require(`../hog-imgs/${fileName}.jpg`)
- don't need Lifecycle Methods for this Lab
- If/when you are done with Hogwarts, check the priority board for next labs
