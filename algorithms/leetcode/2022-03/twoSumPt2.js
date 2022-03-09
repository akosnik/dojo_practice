// Restate problem
// Find two numbers in an array that add up to a target value
// Return an array of the indices increased by one

// Clarify
// minimum array size to look thorugh is 2
// array is sorted in non-decreasing order
// there is exactly one answer
// same element can't be used twice

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Assumptions
// If the smallest number and largest number are too large for the target, the largest number has no possible matches
// if the smallest number and largest number are too small for the target, the smallest number has no possible matches
// We can work from the outside in using this logic

const twoSum = (arr, target) => {
  let front = 0;
  let back = arr.length - 1;
  while (front < back) {
    if (arr[front] + arr[back] == target) {
      return [front + 1, back + 1];
    } else if (arr[front] + arr[back] > target) {
      back--;
    } else {
      front++;
    }
  }
};
