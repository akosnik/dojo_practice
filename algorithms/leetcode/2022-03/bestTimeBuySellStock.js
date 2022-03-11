// Restate problem
// Find the maximum difference between two values in an array.The smaller value must come before the larger

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Assumptions
// as we go left to right we can always use a value bigger than any previous value for our difference
// we cannot always use smaller values in our final answer because they may not be followed by sufficiently large values ex:2,5,1,3
// if we take a new minimum value, we cannot use it with previous maximum values

// Pseudo code
// set up a buy, sell and profit variable
// loop through the array,
// if you find a value greater than your sell value, save it as the sell value
//     if the difference between sell and buy value are greater than the previous profit value, save new profit value
// if current value is less than buy value, reset sell and buy value to current value
// return profit after loop

let maxProfit = function (prices) {
  let buy = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let current = prices[i];
    if (current - buy > maxProfit) {
      maxProfit = current - buy;
    } else if (current < buy) {
      buy = current;
    }
  }
  console.log(maxProfit);

  return maxProfit;
};

maxProfit([2, 5, 1, 3, 0]); //3
maxProfit([5, 4, 3, 2, 0]); //0
maxProfit([7, 1, 5, 3, 6, 4]); //5
