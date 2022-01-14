function quickSort(arr, front, back) {
  if (front >= back) {
    return;
  }

  let pivot = arr[Math.floor((front + back) / 2)];

  let i = front;
  let j = back;
  while (i < j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let pivotIndex = arr.indexOf(pivot);

  quickSort(arr, front, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, back);
  return arr;
}

// let arr = [0, 5, 7, 9, 6, 8, 4, 1, 3, 2];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

let arr2 = [2, 38, 20, 39, 99];
quickSort(arr2, 0, arr2.length - 1);
console.log(arr2);
