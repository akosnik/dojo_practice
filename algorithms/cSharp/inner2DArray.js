// Matrix Search
// Given a 2-dimensional array and a smaller 2-dimensional array, return the location of the first match found, or [-1,-1] if no match is found
// Ex: given:
// [ [12,1,4,19],
//   [3,4,11,17],
//   [18,72,2,10],
//   [9,15,32,16]]
// and
// [ [11,17]
//   [2,10]]
// Return [1,2] (this is the location where the inner matrix begins)

// setup:
function matrixSearch(matrix, search) {
  // search is our inner matrix
  // search[0][0] is 11
  let resultIndex = [];
  //outer loop
  for (let i = 0; i < matrix.length; i++) {
    //increasing i goes down
    //inner loop
    for (let j = 0; j < matrix[i].length; j++) {
      //increasing j goes to the right
      // console.log(matrix[i][j]);
      if (matrix[i][j] == search[0][0]) {
        //18
        if (innerSearch(matrix, search, i, j)) {
          console.log([i, j]);

          return [i, j];
        }
        // start inner function that loops through the search array,
        // and references the original array
        // from the position that we found the first value
      }
    } //inner loop end
  } //outer loop end
  console.log([-1, -1]);

  return [-1, -1];
}

let matrix1 = [
  [12, 1, 4, 19], //< matrix[0][0] through matrix[0][3]
  [3, 4, 11, 17],
  [18, 72, 2, 10],
  [9, 15, 32, 16], // matrix[3][0] through matrix[3][3]
];

function innerSearch(matrix, search, iOrig, jOrig) {
  for (let i = 0; i < search.length; i++) {
    for (let j = 0; j < search[i].length; j++) {
      if (matrix[iOrig + i][jOrig + j] != search[i][j]) {
        return false;
      }
    }
  }
  return true;
}

let innerMatrix1 = [
  [11, 17],
  [2, 10],
];
matrixSearch(matrix1, innerMatrix1); //[-1,-1]

console.log("Inner", innerMatrix1[0].length);
