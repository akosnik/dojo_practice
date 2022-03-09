// Restate the problem
// given and array of characters, reverse the order of the array

// Clarify
// min arr length is 1
// must be done in place with O(1) memory

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Assumptions
// temp swap to change place of characters
// we will need as many iterations as the array length divided by two

var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  // console.log(s);
};

reverseString(["1", "2", "3", "4"]);
