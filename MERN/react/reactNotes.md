# REACT

## What is React?

> "JS library for building user intercaces" -https://reactjs.org

- Controls not just the look and feel but also the interactivity.
- It is good for single page applications.
- Works well with a variety of technologies for http requests, routing, styling etc.
- Can utilize JS's built in DOM manipulation.
- Widely used and highly rated among users.

## Using React

### Components

React uses objects called components. You can create components with React.createElement and pass it three things (JSX does this in a nicer way).

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

### Class Components

Class components are the blueprints to making a specific type of component over and over again. The following code highlights the necessary parts:

- Capitalized name
  - SomeClassComponent
- extends React.Component
  - imported at top
- implements render() method
  - this example returns a JSX component

```js
import React, { Component } from "react";

class SomeClassComponent extends Component {
  render() {
    return <div>This is our first class component.</div>;
  }
}

export default SomeClassComponent;
```

### Props

> Short for properties

This empty object is passed to component by default. Data flows downward in React. A parent component is able to pass its props down to its children and so on.

```js
class Header extends React.Component {
  render() {
    return (
      // alternative 1: you can destructure props
      // const {firstName, lastName} = this.props;
      <div>
        // By inheriting from React.Component all we need is the "this" keyword
        in front of props.
        <h1>
          My name is {this.props.firstName} {this.props.lastName}
          /* alternative 1: Following the alternative 1 above: this line would be
          written differently. {this.props.firstName} would just be {firstName} and
          similarly for the next prop. */
        </h1>
      </div>
    );
  }
}
```

### State

State works similarly to props, but props are static and state can be changed over time. State is initialized in the constructor, possibly with props. It can also pass down info to children like props.

To give state the ability to change dynamically, they will need some sort of event to trigger a change. onClick, onChange, etc. You use a setState function in order to change

```js
import React, { Component } from "react";

class LightSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "On",
    };
  }

  flipSwitch = () => {
    if (this.state.position === "On") {
      this.setState({ position: "Off" });
    } else {
      this.setState({ position: "On" });
    }
  };

  render() {
    return (
      <fieldset>
        <p>The light is currently {this.state.position}</p>
        <button onClick={this.flipSwitch}>Flip Switch</button>
      </fieldset>
    );
  }
}

export default LightSwitch;
```

## Lifecycle Methods

Components go through a lifecycle from creation, mounting, unmounting, to destruction. The background functions that deal with this are called lifecycle methods.

### Mounting

This is when React creates and inserts the component into the DOM.

- constructor()
  - set initial values for state and props
  - occurs before mounting
- render()
  - process html content
- componentDidMount()
  - immediately follows render
  - now you can use network requests, subscriptions, timers, or target DOM tree

### Updating

This stage runs when we update our state/props

- shouldComponentUpdate(nextProps, nextState)
  - used to optimize performance

The final stage, React unmounts components and removes them from DOM

- componentWillUnmount()
  - a good place to cancel subscriptions, network requests, or clear timers

## Styling

Use CSS modules with React. This allows us to encapsulate our styling and apply it only when appropriate. It also allows us to dynamicaly change the stylign and use pseudo-classes.

If we styled a button in our CSS module, we import the module as styles and apply the class name as { styles.btn }.

```js
// MyButtonComponent.js
import React, { Component } from "react";
import styles from "./MyButtonComponent.module.css";

class MyButton extends Component {
  render() {
    return <button className={styles.btn}>{props.children}</button>;
  }
}

export default MyButton;
```
