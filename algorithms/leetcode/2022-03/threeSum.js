// Restate problem

// From an array, list all unique sets of three numbers which add up to 0.

// Examples

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Assumptions
// This is similar to 2 sum problem which used memoization to perform in o(n) time complexity
// Sorting the array, n*log(n) complexity, may help with speed in larger arrays
// We can treat each value like the target in two sum problem
// we add each valid set of numbers into output array
// We get duplicate data sets if we don't sort the array and skip repeat target values

var threeSum = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  // a + b + c = 0
  if (nums.length < 3) return [];
  output = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] == nums[i - 1]) {
      continue;
    }
    a = nums[i];
    compDict = {};
    for (let j = i + 1; j < nums.length; j++) {
      if (compDict[nums[j]] > 1) {
        continue;
      } else if (compDict[nums[j]] == 1) {
        // b = 0 - a - c
        console.log([a, -a - nums[j], nums[j]]);
        output.push([a, -a - nums[j], nums[j]]);
        compDict[nums[j]] += 1;
      } else {
        compDict[-1 * a - nums[j]] = 1;
      }
    }
  }
  return output;
};

// threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([0, 0, 0, 0]);

// this needs to be optimized using a better skipping method in the inner loop
// the inner loop can also be optimized since it is sorted
