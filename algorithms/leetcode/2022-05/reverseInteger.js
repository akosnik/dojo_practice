// restate
// reverse the order of an integer, accounting for negative numbers and number too large for 32-bits

// Examples

// Input: x = 123
// Output: 321

// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21

// assumptions
// to keep the number in 32-bit range, we will filter right before returning answer.
// doesn't seem like binary would help in this manipulation
// absolute value may account for negatives
// there may be some multiplication that can reverse integers

// PseudoCode
// absolute value, convert to string, read string backwards, convert to int, apply negative, check if it's within bounds, return value

// function reverse(num) {
//   absVal = Math.abs(num);

//   absVal = absVal.toString();
//   reversed = "";
//   for (let i = absVal.length - 1; i >= 0; i--) {
//     reversed += absVal[i];
//   }
//   // apply negative value if it exists
//   reversed = parseInt(reversed);

//   if (num < 0) {
//     reversed = reversed * -1;
//   }

//   if (reversed < (-2) ** 31 || reversed > 2 ** 31 - 1) {
//     return 0;
//   }
//   return reversed;
// }

// console.log(reverse(-53));

// This approach deals with strings which is slower than mathematically reading the function backwards

function reverse(num) {
  let sign = num < 0 ? -1 : 1;
  num = Math.abs(num);
  let reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  reversed *= sign;
  if (reversed < (-2) ** 31 || reversed > 2 ** 31 - 1) {
    return 0;
  }
  return reversed;
}
