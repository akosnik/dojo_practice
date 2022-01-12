function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let maxI = 0;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[maxI] < arr[j]) {
        maxI = j;
      }
    }
    [arr[maxI], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[maxI]];
  }
  return arr;
}

arr1 = [5, 3, 6, 2, 4, 1];
console.log(selectionSort(arr1));
