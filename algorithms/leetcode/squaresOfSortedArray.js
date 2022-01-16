// given [-3,-1, 0, 2, 4, 6] return sorted squares
// wrong [9, 1, 0, 4, 16, 36]
// return [0, 1, 4, 9, 16, 36]

const squareSort = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let pos = end;
  let sqArray = [];
  while (start <= end) {
    if (arr[start] ** 2 > arr[end] ** 2) {
      sqArray[pos] = arr[start] ** 2;
      start++;
    } else {
      sqArray[pos] = arr[end] ** 2;
      end--;
    }
    pos--;
  }
  return sqArray;
};

console.log(squareSort([-3, -1, 0, 2, 4, 6]));
console.log(squareSort([-3]));
