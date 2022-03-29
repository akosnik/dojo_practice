// if we can climb one or two steps of a staircase at a time, how many different ways can we climb n amount of stairs

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// assumptions

var climbStairs = function (n) {
  memo = {};
  return helper(n);
};

var helper = function (n) {
  if (n < 1) {
    return n == 0 ? 1 : 0;
  }
  if (memo[n] == null) {
    memo[n] = helper(n - 1) + helper(n - 2);
  }
  return memo[n];
};

console.log(climbStairs(5));
