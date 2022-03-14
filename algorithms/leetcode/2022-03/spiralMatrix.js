// restate
// given a matrix, return all the values in a clockwise spiral pattern.

// we may need a switch case to traverse the 4 directions
// the length that we travel changes each pass
// traveling to the right makes the upward path shorter
// down makes right shorter
// left makes down shorter
// up makes left shorter
// we don't need to keep track of length if we track where we have visited and recognize outside the array is null
// if we set visited values to null we could choose to turn if the next value is null

var spiralOrder = function (matrix) {
  next = "right";
  i = 0;
  j = 0;
  output = [];
  while (matrix[i] && matrix[i][j] != null) {
    output.push(matrix[i][j]);
    matrix[i][j] = null;
    if (next == "right") {
      if (matrix[i][j + 1] != null) {
        j++;
      } else {
        i++;
        next = "down";
      }
    } else if (next == "down") {
      if (matrix[i + 1] != null && matrix[i + 1][j] != null) {
        i++;
      } else {
        j--;
        next = "left";
      }
    } else if (next == "left") {
      if (matrix[i][j - 1] != null) {
        j--;
      } else {
        i--;
        next = "up";
      }
    } else if (next == "up") {
      if (matrix[i - 1] != null && matrix[i - 1][j] != null) {
        i--;
      } else {
        j++;
        next = "right";
      }
    }
  }
  console.log(output);
  return output;
};

spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// [1,2,3,6,9,8,7,4,5]
spiralOrder([[1]]);
// [1]
spiralOrder([
  [2, 5],
  [8, 4],
  [0, -1],
]);
//[2,5,4,-1,0,8]
spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
