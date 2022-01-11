let maxProfit = function (prices) {
  let currentMin = 10000;
  let maxProf = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < currentMin) {
      currentMin = prices[i];
    } else if (prices[i] - currentMin > maxProf) {
      maxProf = prices[i] - currentMin;
    }
  }
  return maxProf;
};
