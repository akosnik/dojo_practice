# Functional Programming

This method is used along side front end js libraries like vue and react.

## Instead of OOP

In OOP, classes tie the data and functions together.
Functional programming seperates them.

## Functions Should

- transparent
  - same inputs return same results
- pure
  - parameters are not changed
  - copies or new variables are made
- avoid side effects
  - no API call
  - no writing to file-systems or databases
  - no printing to console
- never return void
  - if you do, you probably violated an earlier rule

## Functions Can

They can be treated like any variable. Here the function is passed in as an argument.

> **Callback Function:** Passing a function into another function

```js
const exampleFunction = function (message) {
  console.log(message);
};

function parentFunction(callback) {
  callback("information from the parent function");
}

parentFunction(exampleFunction);
```
