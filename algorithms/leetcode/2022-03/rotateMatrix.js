// restate problem
// reassign matrix values 90 degrees to the right of where they started in the matrix
// the top left value will then be the top right value

// example
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// clarification
// the matrix is square
// length of matrix side is at least 1
// no null values in matrix

// assumptions
// If i am to do this in place, I will need to temp swap values
// this will likely be a chain or for values being swapped
// if we start in the upper left, then our first pass takes care of all corner values
// our second pass would address 1 step from the corner along the edge
// we need a variable to track how far along an edge we are
// another variable that allows us to step in a layer and traverse an inner square

function rotateMatrix(matrix) {
  for (let depth = 0; depth < matrix.length / 2; depth++) {
    for (let offset = 0; offset < matrix.length - 1 - 2 * depth; offset++) {
      temp = matrix[depth][depth + offset]; //temp = upper left
      matrix[depth][depth + offset] = matrix[end - depth - offset][depth]; //up left = bot left
      matrix[end - depth - offset][depth] =
        matrix[end - depth][end - depth - offset]; //bot left = bot right
      matrix[end - depth][end - depth - offset] =
        matrix[depth + offset][end - depth]; //bot right = top right
      matrix[depth + offset][end - depth] = temp; //top right = up left
    }
  }
  // console.log(matrix);
}

rotateMatrix([
  [1, 2],
  [3, 4],
]);

rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

rotateMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);

rotateMatrix([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);
