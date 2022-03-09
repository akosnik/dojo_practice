// RESTATE PROBLEM
// from the front, how many letters do the words have in the same order

// Clarify
// given array of strings with at least 1 value
// value may be ""

// Assumptions
// It can work no matter what word we choose to compare to since they all need to have the same letters
// we should choose the shortest word to compare to
// Shortest word length is longest possible string
// the longest prefix exists as a substring of the shortest word
// we should compare letters starting at front - this assumption may be wrong
// as soon as there is no match we are finished and can take the current count as the answer
// If we loop through every letter in the shortest string and do not mismatch, we can return the shortest word or equivalent as output;

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Example 3:
// Input: strs = ["","word"]
// Output: ""
// Explanation: The shortest word has a length of 0. The longest common prefix cannot be greater than that

// PSEUDO CODE
// Use a for loop and a minIdx variable to store index of shortest length word in string array
// For each letter in the shortest word, compare it to the same index letter in each other word.
// If there is a mismatch, return the current output
// If all words share the same letter, add that letter to the output
// If we manage to loop through each letter of the shortest word, return the output we built;

var longestCommonPrefix = function (strs) {
  let minIdx = 0;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < strs[minIdx].length) {
      minIdx = i;
    }
  }
  for (let letter = 0; letter < strs[minIdx].length; letter++) {
    for (let word = 0; word < strs.length; word++) {
      if (strs[minIdx][letter] != strs[word][letter]) {
        return strs[minIdx].substr(0, letter);
      }
    }
  }
  return strs[minIdx];
};
