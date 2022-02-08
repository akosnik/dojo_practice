// Binary Search
// Given a sorted array and a value, return whether the array contains that value.
// Do not sequentially iterate through the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted.

// Ex: Given [1,3,4,6,8,10] and 3, return true
// Ex: Given [2,6,8,10,14,16] and 12, return false

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (end - start < 1) {
    return arr[end] === target;
  }

  let midIdx = Math.floor((end + start) / 2);

  if (target < arr[midIdx]) {
    return binarySearch(arr, target, start, midIdx - 1);
  } else if (arr[midIdx] < target) {
    return binarySearch(arr, target, midIdx + 1, end);
  } else if (arr[midIdx] === target) {
    return true;
  }
};
console.log(binarySearch([1, 3, 4, 6, 8, 10], 5)); //false
console.log(binarySearch([1, 3, 4, 6, 8, 10], 3)); //true
