// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Roman Nums are usually written largest to smallest left to right.

// Assumptions
// If we have a value that is less than the next value, it is subtractive.
// otherwise we can convert all the letters to their decimal values and add them together
// splitting the string into an array helps it run faster

const romanToInt = (str) => {
  romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (romanValues[strArr[i]] < romanValues[strArr[i + 1]]) {
      sum -= romanValues[strArr[i]];
    } else {
      sum += romanValues[strArr[i]];
    }
  }
  // console.log(sum);
  return sum;
};

romanToInt("IV"); // 4
romanToInt("VIII"); // 8
romanToInt("MCMXCIV"); //1994
