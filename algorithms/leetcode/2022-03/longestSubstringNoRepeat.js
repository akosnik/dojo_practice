// Restate problem
// given a string, which continuous part goes longest without a repeat character

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

//Example 4:

// Input: s = "acacaaabc"
// Output: 3
// Explanation: The answer is "abc" with a length of 3

// Assumptions
// We can do this in one pass if we mark what characters we've visited in a visitedDictionary
// this dictionary uses the char as a key and the value is the index of it's most recent occurance
// it takes some memory but lets us finish in one loop easily.
// if we find a repeat, we need to reset dictionary values to null, we only care about most recent repeat
// We need to ignore any duplicates that began before our most recent duplicate or abccba would break the logic
// When we finish the loop,

// Pseudo
// look at each char of our string
// if it does not exist in the dictionary yet, add the char as value and index as key
// if it does exist, subtract the current index from the stored index (previous occurance) that is the length of the nonrepeating substring
//   use a maxSubstring to save the value if it is larger than previous maxSub value

var lengthOfLongestSubstring = function (s) {
  visited = {};
  maxSubLen = 0;

  front = 0;
  for (let back = 0; back < s.length; back++) {
    let prevIdx = visited[s[back]];
    if (prevIdx >= front) {
      front = prevIdx + 1;
    }
    visited[s[back]] = back;
    maxSubLen = Math.max(maxSubLen, back - front + 1);
  }

  console.log(maxSubLen);
  return maxSubLen;
};

lengthOfLongestSubstring("abcabcbb"); //3
lengthOfLongestSubstring("bbbbb"); //1
lengthOfLongestSubstring("pwwkew"); //3
lengthOfLongestSubstring("acacaaabc"); //3
