const reverseWords = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === " ") {
      let j = i;
      while (str[j] !== " " && str[j] !== undefined) {
        newStr += str[j];
        j--;
      }
      newStr += " ";
    } else if (i + 1 === str.length) {
      let j = i;
      while (str[j] !== " " && str[j] !== undefined) {
        newStr += str[j];
        j--;
      }
    }
  }
  console.log(newStr);
  return newStr;
};

reverseWords("a few words");
