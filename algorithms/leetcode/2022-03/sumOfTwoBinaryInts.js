// sum two numbers without using + or -

// assumptions
// this is under the binary section in leet code
// if we convert the numbers to binary, we can use logical statements to add
// we need to iterate through each binary number and apply logic
// carry over number to next iteration
//

// 2 + 3
// 10 + 11
// 0 and 1 as the first digit, return 1
// 1 and 1 and second digit return 0 with carry 1
// carry 1 and 0 and 0 as third digit returns 1
// output is binary 101 or 5 and no mathematical operator

var getSum = function (a, b) {
  a = a.toString(2).split("").reverse();
  b = b.toString(2);
  c = "0";
  i = 0;
  while (a[i] || b[i] || c != "0") {}
};

var xor = function (x, y) {
  return a === b ? "0" : "1";
};

var and = function (x, y) {
  return a === "1" && b === "1";
};
