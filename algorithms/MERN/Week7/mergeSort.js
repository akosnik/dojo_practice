// use arr.slice()
// once we have array at lowest level they are sorted
// we can combine sorted arrays by comparing first values and popping smallest val into new array

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, mid);
  let arr2 = arr.slice(mid);

  console.log(arr1);
  console.log(arr2);

  mergeSort(arr1);
  mergeSort(arr2);

  return merge(arr1, arr2);
};

const merge = (arr1, arr2) => {
  let i1 = 0;
  let i2 = 0;
};

mergeSort([0, 5, 7, 4, 2]);
