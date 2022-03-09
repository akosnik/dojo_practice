// RESTATE PROBLEM
// find the index of a number, or where it should be

// CLARIFY
// array is sorted low to high
// values are unique
// O(log n) complexity
// no empty array will be given
// values and target can be negative

// EXAMPLES
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = -1
// Output: 0

// ASSUMPTIONS
// when we look at a value, if it is equal to our target we immediately return
// When we look at a value, if it is smaller than our target we rerun the function with all values after our current index
// We cannot use a for loop and get O(Log n) runtime complexity
// We should use binary search
// The target being less than or greater than all values may be hard to account for without special cases
// The binary search base case is when our array size is 1
// at that point if the value < target return index +1
// Otherwise the value >= target so return current index

// PSEUDO CODE

// BASE CASE

// Find the middle index of our array
// Check if the value there == target
// If so return that index
// if the value is < target
// call a recursive function using right half of current array
// else call a recursive function using left half of current array

var searchInsert = function (nums, target, start = 0, end = nums.length - 1) {
  if (start == end) {
    if (target <= nums[start]) {
      // console.log(start);
      return start;
    } else {
      // console.log(start + 1);
      return start + 1;
    }
  }
  let midIdx = Math.ceil((start + end) / 2);
  if (target == nums[midIdx]) {
    // console.log(midIdx);
    return midIdx;
  } else if (target < nums[midIdx]) {
    return searchInsert(nums, target, start, midIdx - 1);
  } else {
    return searchInsert(nums, target, midIdx, end);
  }
};

searchInsert([5, 10, 15, 20, 25], 5); // 0
searchInsert([5, 10, 15, 20, 25], 25); // 4
searchInsert([5, 10, 15, 20, 25], -5); // 0
searchInsert([5, 10, 15, 20, 25], 30); // 5
searchInsert([5, 10, 15, 20, 25], 7); // 1
searchInsert([5, 10, 15, 20, 25, 30], 7); // 1
