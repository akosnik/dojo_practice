// restate problem
// Given a string, if the parentheses configuration is valid return true.

// Clarify
// string will have at least one character
// only (){}[] will be used

// assumptions
// because only paren are used, if the string is odd in length, it is invalid
// an open paren may only be followed by another open paren or the matching close paren
// a close paren may be followed by any paren
// stack logic may apply here, the most recent open paren must be the first closed
// we may need an array or recursive function to apply stack logic
// we may assign paren values to save time

var isValid = function (s) {
  if (s.length % 2 != 0) {
    return false;
  }
  s = s.split("");
  const parenMatch = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let openers = [];
  for (let i = 0; i < s.length; i++) {
    if (parenMatch[s[i]]) {
      openers.push(s[i]);
    } else {
      neededCloser = parenMatch[openers.pop()];
      if (s[i] != neededCloser) {
        return false;
      }
    }
  }
  return openers.length == 0;
};
console.log(isValid("[[{()}"));
