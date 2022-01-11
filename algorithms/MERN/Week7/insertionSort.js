function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}

arr = [5, 10, 3, 7, 8, 6];
insertSort(arr);
console.log(arr);
