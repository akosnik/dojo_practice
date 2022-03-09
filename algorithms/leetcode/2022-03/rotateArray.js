// Restate the problem
// given an array, shift all values to the right by a certain number
// values that go past the array size get sent to the front of the array

// Clarify problem
// smallest array size is 1
// amount to shift can be much larget than array size

// Work through examples - try and solve the problem in more than one way
// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// in:  [1,2,3,4,5,6,7,8,9], 8
// out: [2,3,4,5,6,7,8,9,1]

// Assumptions
// The number of shifts should be reduced to a number below the array length
// To do this in place, we need to swap numbers
// We can not always swap them using the same logic
// It might help to think of the array as 2 arrays one size k and the other arr.length-k
// if we reverse the entire array, we can reverse each sub section another time

const rotate = (arr, k) => {
  k = k % arr.length;
  // console.log("k", k);
  // reverse the array
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  // swap the first section of the array
  for (let i = 0; i < k / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[k - 1 - i];
    arr[k - 1 - i] = temp;
  }
  // swap the second section of the array
  for (let i = 0; i < (arr.length - k) / 2; i++) {
    let temp = arr[k + i];
    arr[k + i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  // console.log(arr);
};

rotate([1, 2, 3, 4, 5, 6], 27);
