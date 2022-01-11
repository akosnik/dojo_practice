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

## Useful Functions

Using these functions aligns with the 4 guiding rules of functional programming.

### Spread, Concat, Slice

```js
const arr = Object.freeze([0, 1, 2]);
// makes your obj immutable

const arr2 = [...arr, 3];
// ...arr is a spread function
// it copies the entirity of arr into the definition of arr2
console.log(arr2); // [0,1,2,3] now

const arr3 = arr2.concat([4, 5]);
// concat works similarly
console.log(arr3); // [0,1,2,3,4,5]

const arr4 = arr3.slice(1);
// slice will return an array starting at the given index (1).
console.log(arr4); // [1,2,3,4,5]

const arr5 = [...arr4.slice(0, 2), ...arr4.slice(3)];
//  After the starting index (0), you can give an ending index (2) (non-inclusive ending).
// Notice how spread is used to combine two arrays returned by slicing
console.log(arr5); // [1,2,4,5]
```

### Sort

Sorting can be tricky with numbers

```js
const food = ["apple", "carrot", "bread"];
console.log(food.sort()); // ['apple', 'bread', 'carrot']
// It works as expected with strings

const arr = [100, 10, 2, 40, 11];
arr.sort();
// ¿¿¡¡
console.log(arr); // [10, 100, 11, 2, 3, 40]
// !!??
// This happens because sort treats the numbers like strings

arr.sort(function (a, b) {
  return a - b;
});
// alternatively: arr.sort((a, b) => a - b);
console.log(arr); // [2, 10, 11, 40, 100]
// You can supply a function to change how .sort() works though
```

### Map and Filter

```js
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map((item) => `<li>${item}</li>`);
// Map takes looks at each item in the grocery array and applies the given function to each one
// The function in this case turns each item in the array into an HTML list item.
console.log(groceryList); // ['<li>pearl onions</li>', '<li>cremini mushrooms</li>', '<li>thyme</li>']

const arr = [0, 1, 2, 3];
const arrDoubled = arr.map((item) => item * 2);
// The callback function could be whatever you need
console.log(arrDoubled); // [0, 2, 4, 6]

const arr2 = [0, 1, 2, 3, 4, 5, 6];
const evens = arr2.filter((num) => num % 2 === 0);
// Filter uses a similar approach
// Instead of changing values, it selects values for a new array
// Here, if the array item is divisible by 2 with no remainder, it gets added to the new array.
console.log(evens); // [0, 2, 4, 6]
// The callback function can be anything that returns true or false
```
