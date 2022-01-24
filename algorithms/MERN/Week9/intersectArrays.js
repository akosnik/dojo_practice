//l get the values arr[i] and arr[j] to match up using if statements and loops. While loops? For loops?

// if we do have a match, check if the next value is the same, if so increase count
// do this for i and j, when it is no longer the same value, take the smaller count into our result array

const instersectArrays = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (arr1[i] && arr2[j]) {
    // once either array is outside of array range we stop looping there will be nore more dupes
    if (arr1[i] < arr2[j]) {
      // which value
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  return result;
};

instersectArrays([1, 2, 2, 2], [2, 2, 3]);
instersectArrays([1, 2, 2, 2, 4, 5], [2, 2, 3, 5, 7, 8, 9, 10]);
