function strEncode(str) {
  let count = 1;
  let output = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      // if it's the first letter / first position
      output = str[i]; // add it to the output = a
    } else if (str[i] === str[i - 1]) {
      count++;
    } else if (str[i] !== str[i - 1]) {
      ab;
      output += count; //a1
      count = 1; // reset count
      output += str[i]; // output a1b
    }
  }
  output += count; // output
  return output;
}

console.log(strEncode("aaaabcccddddd")); //a4b1c3d5
console.log(strEncode("abcccddeeeee")); //a1b1c3d2e5
console.log(strEncode("a")); //a1b1c3d2e5

// aabbbbbb;
//loop through and look at each letter
// check edge casees like first or last position and handle them
// check the preceding one if they match
//     if they match notate/count the match,
//     if not match then add the count to outputStr
//          add count in
//          reset count
//          add new letter to output
// exit loop, add remaining count in
// count = 5;
// output = a2b5;
