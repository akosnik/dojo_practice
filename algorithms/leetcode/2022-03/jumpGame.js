// Restate
// Start at the beginning of an array, you can move forward an amount of indexes up to the current value. If it is possible to reach the last index this way, return true.

// Example

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Assumptions
// It is possible to reach the end from any string of values that aren't 0
// There must be a value that precedes a 0, greater than their difference in indexes.

// var canJump = function (nums) {
//   dp = Array(nums.length).fill(false);
//   dp[0] = true;

//   for (let i = 0; i < nums.length; i++) {
//     if (dp[i] === true) {
//       for (let j = 1; j <= nums[i]; j++) {
//         dp[i + j] = true;
//       }
//     }
//   }
//   return dp[nums.length - 1] == true;
// };

// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([2, 0, 1, 0, 1]));
// Very slow and bad  memory solution

// We don't need to save subsolution answers or test every index
// We just need to track the max index acheivable from the beginning
// if we end up with a max index equal to the current index, we cannot travel any farther
// if our max index is at least the last index we are done

var canJump = function (nums) {
  if (nums.length == 1) return true;
  let maxIdx = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxIdx = Math.max(maxIdx, i + nums[i]);
    if (maxIdx <= i) return false;
    if (maxIdx >= nums.length - 1) return true;
  }
  return false;
};

console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([2, 0, 1, 0, 1]));
