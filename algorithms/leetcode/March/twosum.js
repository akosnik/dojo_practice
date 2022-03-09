function twoSum(arr, target) {
  return [0, 1];
}

// RESTATE AND CLARIFY PROBLEM

// [2,7,11,15] target = 9, output  [0,1]
1;
// [3,2,4] target = 6, output [1,2]
2;
// [3,3] target = 6

// find two numbers in array that add to target
// mark their indeces

// use examples to walk through how they got the answer
// figure out what it can and can't be
// restate goal in own words
// setup function based on parameters and output

// APPROACH THE LOGIC
//  - gets easier the more algos you do the more patters you see
// look for assumptions
// when you find a possible solution, try and think of a second way of doing it

// nested for loops because
// i need to track 2 different numbers
// they change their values at different times

// would sliding window work?
// probably not it doesn't allow us to see all possibilities especially in larger arrays

// Pseudo-code
// DESCRIBE PATTERNS IN HOW YOU SOLVE THE EXAMPLES

// look at the first value of the array,
// grab the second value as a different variable and add them together

// if they are equal to the target
// return the indeces of the two numbers YOURE DONE
// if they are not equal to the target
// move the second value forward to the third
// add the two numbers again and if I get to the end of the array then I move the number at the beginning index forward to index 1
// and the second number at the end of the array goes to what ever index follows the first number
// outside loop if i don't find any answer return -1;
