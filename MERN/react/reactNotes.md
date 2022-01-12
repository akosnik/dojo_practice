# REACT

## What is React?

> "JS library for building user intercaces" -https://reactjs.org

- Controls not just the look and feel but also the interactivity.
- It is good for single page applications.
- Works well with a variety of technologies for http requests, routing, styling etc.
- Can utilize JS's built in DOM manipulation.
- Widely used and highly rated among users.

## Using React

React uses objects called components. You can create components with React.createElement and pass it three things.

- Type
  - ex: "h1"
- Props
  - Short for properties
- Children
  - could be a descriptive tag
  - or a nested component

It also needs to know when to render the components onto the screen.

ReactDOM.render()

### JSX

JS Syntax Extension allows us to type more readable components.
Instead of

```js
React.createElement("h1", null, "Hello World");
```

we can type

```js
<h1>Hello world</h1>
```

This is translated with the help of Babel into plain javascript.
JSX makes our components more readable and easier to type.

#### Heads Up

There are a few rules to watch out for. Because keywords like class and for exist in JS and HTML, there can be confusion. The HTML version is changed to avoid keyword/name colissions.

- class is className
- for is htmlFor
- [more differeneces](https://reactjs.org/docs/dom-elements.html)
