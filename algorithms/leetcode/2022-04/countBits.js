// restate problem
// how many 1s are in the binary representation of 4? create an array that maps the indeces to the bit count.

// example
// map up to index 5 or n = 5
// intermediary step:
//  0  1   2   3    4    5
// [0, 1, 10, 11, 100, 101]
// output: [0, 1, 1, 2, 1, 2]

var countBits = function (n) {
  if (n == 0) return [0];
  let output = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    var num = i - Math.pow(2, Math.floor(Math.log2(i)));
    console.log("i:num", i, num);
    output[i] = 1 + output[num];
  }
  console.log(output);
  return output;
};

countBits(11);

// this is more complex than needed
// Simplified
// output[i] = output[i/2] + i % 2
