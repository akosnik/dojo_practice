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

// console.log(coinChange([186, 419, 83, 408], 6249));

const coinChange = (coins, amount) => {
  // dp[i] represents the least amount of coins that can make the value equals to the i
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 5)); //1
console.log(coinChange([1, 2, 5], 4)); //2
console.log(coinChange([1, 2, 5], 25)); //5
