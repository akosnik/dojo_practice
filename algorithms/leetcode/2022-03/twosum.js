// RESTATE AND CLARIFY PROBLEM

// [2,7,11,15] target = 9, output  [0,1]

// [3,2,4] target = 6, output [1,2]

// [3,3] target = 6, outpus [0,1]

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

// Restate
// In an array of numbers, find the indeces of the only two values that add up to a target sum

// Assumptions
// We can easily do this in n^2 time
// If we memoize the compliments we need to find, we can do it in n time
// We can quickly get the needed index by saving it as a value in a dictionary or hashmap under the key compliment

var twoSum = function (nums, target) {
  // this dictionary tracks an index as a value and the compliment needed to match this index as the key
  compsDict = {};
  for (let i = 0; i < nums.length; i++) {
    if (compsDict[nums[i]] != null) {
      console.log([compsDict[nums[i]], i]);
      return [compsDict[nums[i]], i];
    } else {
      // nums[i] + compliment = target
      compsDict[target - nums[i]] = i;
    }
  }
  return [];
};

twoSum([2, 7, 11, 15], 9);
twoSum([2, 7, 11, 15], 26);
twoSum([3, 2, 4], 6);
