// what is the maximum sum of numbers in an array where no two values can be adjacent. Also, the last index is considered adjacent to the first.

// Example
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Input: nums = [1,2,3]
// Output: 3

// We can use the same logic as when we solved Robber 1
// run that algorithm twice, once ignoring the existance of the last index
// second time ignoring the existance of the first house
// take the max of the two attempts

var rob = function (nums) {
  let score = [];
  let maxScore = 0;
  if (nums.length > 0) {
    score[0] = nums[0];
    maxScore = score[0];
  }
  if (nums.length > 1) {
    score[1] = nums[1];
    maxScore = Math.max(score[1], score[0]);
  }
  if (nums.length > 2) {
    score[2] = nums[0] + nums[2];
    maxScore = Math.max(score[2], score[1]);
  }

  for (let i = 3; i < nums.length; i++) {
    score[i] = nums[i] + Math.max(score[i - 2], score[i - 3]);
    if (score[i] > maxScore) {
      maxScore = score[i];
    }
  }
  return maxScore;
};

var rob2 = function (nums) {
  nums1 = nums.slice(0, nums.length - 1);
  nums2 = nums.slice(1, nums.length);
  return Math.max(rob(nums1), rob(nums2));
};

console.log(rob2([1, 3, 2, 6, 5, 3]));
