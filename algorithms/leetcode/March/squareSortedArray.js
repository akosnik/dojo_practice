// Restate the problem;
// We have a sorted array with negative and positive numbers.
// If we simply square each value in place the result may not be sorted.
// Square the numbers while ensuring the final array is sorted, try to do it in O(n) runtime complexity.

// Work through examples
//Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Clarify the problem
// There may be duplicate values
// we will not be given an empty array
// sort in non-decreasing order

// Assumptions
// We may not be able to work in place effectively so try building a new array
// the largest squared value will come from the first negative number or the last positive number
// the smallest value would be 0, or the first positive or the last negative number

const sortedSquares = (arr) => {
  start = 0;
  end = arr.length - 1;
  output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[start] ** 2 < arr[end] ** 2) {
      output[i] = arr[end] ** 2;
      end--;
    } else {
      output[i] = arr[start] ** 2;
      start++;
    }
  }
  return output;
};
