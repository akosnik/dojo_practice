// Restate
// using a list of coin values, what is the fewest coins you would need to add up to a certain value.

// examples

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Input: coins = [2], amount = 3
// Output: -1 if impossible

// Input: coins = [1], amount = 0
// Output: 0

// var coinChange = function (coins, amount) {
//   seen = {};
//   min = 0;
//   coins.sort((a, b) => a - b);
//   result = helper(coins, amount);
//   if (result > amount) {
//     return -1;
//   }
//   return result;
// };

// var helper = function (coins, amount) {
//   if (amount == 0) return 0;
//   if (amount < Math.min(...coins)) return amount + 1;
//   min = amount;
//   if (seen[amount] != null) {
//     return seen[amount];
//   }
//   for (let i = coins.length - 1; i >= 0; i--) {
//     result = helper(coins, amount - coins[i]);
//     seen[amount] = Math.min(result, seen[amount]);
//   }
//   return seen[amount] + 1;
// };

// console.log(coinChange([1, 2, 5], 5)); //1
// console.log(coinChange([1, 2, 5], 4)); //2
// console.log(coinChange([1, 2, 5], 25)); //5

// console.log(coinChange([4], 0)); //0
// console.log(coinChange([4], 3)); //-1

// console.log(coinChange([186, 419, 83, 408], 6249)); Wrong output

// subtracting the largest coin value does not always result in least amount of coins
// need to test all paths and save shortest route

var coinChange = function (coins, amount) {
  // subSolutions array tracks subAmounts as index and steps as value
  // If we want to solve for sub amount 0, it requires 0 steps to acheive
  // Impossible subAmounts are represented by an infinite amount of steps
  subSolutions = Array(amount + 1).fill(Infinity);
  subSolutions[0] = 0;

  // subtract each coin from the current subAmount
  // the difference is a subAmount one step away from the current Amount
  // save the smaller value between the previous steps + 1 or the current steps value
  for (let subAmount = 1; subAmount < subSolutions.length; subAmount++) {
    for (var coin of coins) {
      if (subAmount - coin >= 0) {
        subSolutions[subAmount] = Math.min(
          subSolutions[subAmount],
          subSolutions[subAmount - coin] + 1
        );
      }
    }
  }
  // using the subsolution of the final amount, return the amount of steps
  // if the solution is impossible, return -1
  if (subSolutions[amount] > amount) return -1;
  return subSolutions[amount];
};

console.log(coinChange([1, 4, 5], 13));
console.log(coinChange([1, 4, 5], 0));
console.log(coinChange([4, 5], 3));
