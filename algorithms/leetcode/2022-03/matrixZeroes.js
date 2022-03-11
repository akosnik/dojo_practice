// restate
// given a matrix mn, if a zero exists in a row or column, set all values in that row or column to zero

// Example https://leetcode.com/problems/set-matrix-zeroes/

// Example 1
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// It would be problematic to try to find zeroes and write zeroes in the same pass
// This can be acheived by running through the matrix twice,
//    once to memo what columns and rows have 0s in them
//    on the second pass, overwrite with a zero if the current row or column exists inside the memo
// the memo could be something like r[true, false, true] c[true, false, false]

var setZeroes = function (matrix) {
  let r = [];
  let c = [];
  for (let m = 0; m < matrix.length; m++) {
    for (let n = 0; n < matrix[m].length; n++) {
      if (matrix[m][n] == 0) {
        r[n] = true;
        c[m] = true;
      }
    }
  }
  for (let m = 0; m < matrix.length; m++) {
    for (let n = 0; n < matrix[m].length; n++) {
      if (r[n] || c[m]) {
        matrix[m][n] = 0;
      }
    }
  }
};

// optimize
// you can save memory by using the outer rim of the array as your storage instead of a new variable
