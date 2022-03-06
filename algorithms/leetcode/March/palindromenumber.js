function palindromeNumber(x) {
  // return true or false
  let arr = x.toString();
  for (let i = 0; i < arr.length / 2; i++) {
    // I'm not sure arr.length/2 works but we'll see
    if (arr[i] != arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindromeNumber(1562651));

// pseudocode

// when I need to check if something is a palindrome things I know

// the first number needs to be the same as the last number

// the second number needs to be the same as the second to last number

// one loop that compares beginning to end

// when i get to end of loop, beginning moves forward and end move backward

// if at any point beginning is not equal to end, it is not a palindrome return false

// otherwise I can continue until they get to the middle.

// AFTER THOUGHTS
// Do i need to acount for arrays that are even in length vs odd?
