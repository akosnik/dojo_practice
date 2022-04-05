// What set of non consecutive values returns the highest sum

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// assumptions
// one pass l to r
// first three are pre determined
// 4th, 5th, etc... chooses between 2 scores ago, or 3 scores ago for current score
// max score updates if current score is greater

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

console.log(rob([1, 3, 5, 5, 1]));
console.log(rob([1]));
