const partition = (arr, start = 0, end = arr.length - 1) => {
  // let pivotIdx = start + Math.floor(Math.random() * (end - start + 1));
  let pivotIdx = start;

  let pivot = arr[pivotIdx];
  console.log("pivot", pivot);
  console.log("arr[0]", arr[start]);

  [arr[pivotIdx], arr[start]] = [arr[start], arr[pivotIdx]];
  console.log("swap pivot", arr);

  pivotIdx = 0;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIdx++;
      [arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
    }
  }
  [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]];
  console.log("final", arr);
  return pivotIdx;
};

// const quickSort = (arr, start = 0, end = arr.length - 1) => {
//   if (start <= end) {
//     let pivotIdx = partition(arr, start, end);
//     quickSort(arr, start, pivotIdx - 1);
//     quickSort(arr, pivotIdx + 1, end);
//   }
//   return arr;
// };

console.log(quickSort([4, 6, 0, 5, 3, 2, 1]));
