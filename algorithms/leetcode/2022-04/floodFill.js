//Restate
// given a grid of numbers, change the color of a given cell. Whenever you change the color of a cell, change any cardinal cells that share the same value.

// Example
// Input: image =
// [[0,0,0],
//  [0,0,0]],
// sr = 0, sc = 0, newColor = 2
// Output:
// [[2,2,2],
//  [2,2,2]]

// Input: image =
// [[1,1,1],
//  [1,1,0],
//  [1,0,1]], sr = 1, sc = 1, newColor = 2
// Output:
// [[2,2,2],
//  [2,2,0],
//  [2,0,1]]

// Assumptions
// the flood fill will be done recursively
// we do not need to track which cells have been worked on
// we need to track the original cell's original color
// a cell that has been worked on will no longer be the same
//  as the original cell's original color

var floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) return image;
  floodFillHelper(image, sr, sc, image[sr][sc], newColor);
  console.log(image);
  return image;
};

var floodFillHelper = function (image, i, j, originalColor, newColor) {
  if (
    i < 0 ||
    j < 0 ||
    i >= image.length ||
    j >= image[0].length ||
    image[i][j] != originalColor
  )
    return;

  image[i][j] = newColor;

  floodFillHelper(image, i - 1, j, originalColor, newColor);
  floodFillHelper(image, i + 1, j, originalColor, newColor);
  floodFillHelper(image, i, j - 1, originalColor, newColor);
  floodFillHelper(image, i, j + 1, originalColor, newColor);
};

// floodFill(
//   (image = [
//     [0, 0, 0],
//     [0, 0, 0],
//   ]),
//   (sr = 0),
//   (sc = 0),
//   (newColor = 2)
// );

// floodFill(
//   (image = [
//     [1, 1, 1],
//     [1, 1, 0],
//     [1, 0, 1],
//   ]),
//   (sr = 1),
//   (sc = 1),
//   (newColor = 2)
// );

floodFill(
  [
    [0, 0, 0],
    [0, 1, 0],
  ],
  1,
  1,
  1
);
