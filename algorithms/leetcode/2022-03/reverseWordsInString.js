// Restate problem
// there is a string of words. keep the order of the words but reverse the spelling of each word

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"

// Assumptions
// This could be done by splitting the sentence by spaces into an array and using reverse on each element of that array before rejoining with spaces
// if we do this one without built in functions it still makes sense to make a helper function for reversing

// One issue is we need to track the start and end index of each word in order to reverse it
// the start index of a word is preceded by a space (except the first word)
// the end index of a word is followed by a space (except for last word)
// if we only reverse a word when we find a space we will not reverse the last word
// we can call the reverse helper once more after we finish looking through the array in that case

const reverseWords = (str) => {
  let output = "";
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      output += reversedWord(str, start, i - 1);
      output += " ";
      start = i + 1;
    }
  }
  return (output += reversedWord(str, start, str.length - 1));
  // console.log(output);
};

const reversedWord = (str, start, end) => {
  let output = "";
  for (let i = end; i >= start; i--) {
    output += str[i];
  }

  return output;
};

reverseWords("This is my string");

// If we used built in functions it might look like this
// const reverseWords = (str) => {
//   str = str.split(" ");
//   for (let i = 0; i < str.length; i++) {
//     str[i] = str[i].split("").reverse().join("");
//   }
//   return str.join(" ");
// };
// console.log(reverseWords("This is my string"));
