// restate
// find the largest sum of continuous numbers in an array

// Examples

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Input: nums = [1]
// Output: 1

// Input: nums = [5,4,-1,7,8]
// Output: 23

// Assumptions
// If all numbers are positive, return entire array
// when we find a negative number we need to reevaluate the array
// we can perform this

var maxSubArray = function (nums) {
  maxSum = nums[0];
  sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (maxSum < sum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  console.log(maxSum);
  return maxSum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //6
maxSubArray([-5, -4]);
