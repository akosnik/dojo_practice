// First thought
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target - nums[j] == nums[i]) {
        return [i, j];
      }
    }
  }
  return null;
};

// Optimize using map
