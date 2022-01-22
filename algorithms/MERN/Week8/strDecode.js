const strDecode = (str) => {
  let letr = "";
  let num;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      // if we're in here, we know it's not a number
      letr = str[i];
    } else {
      let j = 0;
      while (j < str[i]) {
        result += letr;
        j++;
      }
    }
  }
  console.log(result);
  return result;
};

strDecode("s1t2r3i5n2g1");

// input str = 'a5 do stuff b3'
// str letr= a
// int num = 5

// loop through length of string and look at each character.
// Is it letter or number

// OUTER FOR LOOP counts the i's

// if it's a letter, and the next one's a number
//   then letr = str[i]

// if it's a number and the next one's a letter {

//   then num = str[i] // str[i] is our current character

//   INNER loop using the same value
//     set the length of the loop to be the number
//     loop x times
//     result += letter
// }

// END OF OUTER FOR LOOP

// return result; //aaaaa
// console.log("2" > 0);

str = "abcdefghijklmnopqrstuvwxyz";
str2 = "0123456789";

const isNumber = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0) {
      console.log("T", str[i]);
    } else {
      console.log("F", str[i]);
    }
  }
};

isNumber(str);
isNumber(str2);
