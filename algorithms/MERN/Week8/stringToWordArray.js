function strToWordArr(str) {
  let result = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (str[i] === " ") {
      // if we have a space, we probably finished a word

      if (word != "") {
        // we know we have a new word if this isn't empty
        result.push(word);
        word = "";
      }
    } else {
      word += str[i]; // if character is not a space, we add it to current word
    }
  }
  return result;
}

// console.log(strToWordArr("Welcome to week 2!")); //["Welcome", "to", "week", "two!"]
console.log(strToWordArr("      Hi my name is   "));
