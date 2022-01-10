function quickSort(arr, front, back) {
  if (front >= back) {
    return;
  }

  pivot = arr[Math.floor((front + back) / 2)];
  console.log(pivot);

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
  pivotIndex = arr.indexOf(pivot);

  quickSort(arr, front, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, back);
  return arr;
}

arr = [0, 5, 7, 9, 6, 8, 4, 1, 3, 2];

console.log(quickSort(arr, 0, arr.length - 1));
