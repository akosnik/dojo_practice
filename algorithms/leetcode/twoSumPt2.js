// This solution works with complexity O(N^2) because of the potential for repeating values
// attempting to replace inner while loop with binary search for O(N*logN)

// const twoSum = (arr, trgt) => {
//   // potential < trgt - arr[i] means no match from this point to end of array, i++ and try again
//   let i = 0;
//   while (arr[i] <= trgt / 2) {
//     let j = i + 1;
//     while (arr[j] <= trgt - arr[i]) {
//       console.log("i:", i, "j:", j);
//       if (arr[j] === trgt - arr[i]) {
//         return [i, j];
//       }
//       j++;
//     }
//     i++;
//   }
//   console.log("no match");
// };

// twoSum([0, 2, 4, 5, 11, 14, 16, 18, 21, 36], 37);

const twoSum2 = (arr, trgt) => {
  let i = 0;
  let end = arr.length;

  while (arr[i] <= trgt / 2) {
    let start = i + 1;
    let trgtDif = trgt - arr[i];
    let compliment = binarySearch(arr, trgtDif, start, end);
    if (compliment) {
      console.log("i", i, "comp", compliment);
      return [i, compliment];
    }
    i++;
  }
  console.log("no match");
};

const binarySearch = (arr, trgtDif, start, end) => {
  if (start === end) {
    if (arr[start] === trgtDif) {
      return start;
    } else {
      return;
    }
  }
  mid = start + Math.floor((end - start) / 2);
  if (arr[mid] < trgtDif) {
    return binarySearch(arr, trgtDif, mid + 1, end);
  } else {
    return binarySearch(arr, trgtDif, start, mid);
  }
};

twoSum2(
  [
    2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  ],
  9
);
