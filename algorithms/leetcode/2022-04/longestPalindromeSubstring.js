// Restate
// what is the longest string of characters that form a palindrome?

// Example

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

// Assumptions
// It will be hard to reduce complexity below O(n^2)
//

var longestPalindrome = function (s) {
  // s.split("");
  output = "";
  // "i" will mark the center of our palindrome
  // We will check if a character is the center of the longest palindrome
  for (let i = 0; i < s.length; i++) {
    // l will check the left bound of the palindrome
    l = i;
    // if the center has repeating characters,
    // we will not need to check them as possible centers
    while (s[i] == s[i + 1]) {
      i++;
    }
    // r will check the right bound of the palindrome
    r = i;
    // move l and r outward while they are equal
    while (s[l - 1] != null && s[l - 1] == s[r + 1]) {
      l--;
      r++;
    }
    // the distance between l and r + 1 is the palindrome length
    if (output.length < r - l + 1) {
      // maxLen = r - l + 1;
      output = s.slice(l, r + 1);
    }
  }
  console.log(output);
  return output;
};

longestPalindrome("ababcbaa");
