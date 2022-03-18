//return true if array contains duplicate values
//
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// assumptions we can do this without nested loops
// we can check current number against dictionary of seen values
// there may be a faster data set for this other than dictionary

var containsDuplicate = function (nums) {
  seenValues = {};
  for (let i = 0; i < nums.length; i++) {
    if (seenValues.hasOwnProperty(nums[i]) === false) {
      seenValues[nums[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
