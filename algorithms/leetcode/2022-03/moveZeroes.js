// Restate problem
// sort all zeroes in an array to the end.
// keep the order the same otherwise

// Clarify
// array may or may not have zeroes
// This must be done in place

// Assumptions
// We can overwrite the front of the array without losing important values
// 0s cannot overwrite any part of the array in until we have checked all values
// This problem will be done in two parts
// 1. look at all values of the array and overwrite non-0 values to the front and count how many 0s were found
// 2. fill in the back of the array with 0s for however many we found

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

const moveZeroes = (arr) => {
  let front = 0;
  let zeroes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[front] = arr[i];
      front++;
    } else {
      zeroes++;
    }
  }
  console.log(arr);

  for (let i = front; i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log(arr);
};

moveZeroes([0, 0, 0, 0, 1, 2, 3, 4, 5]);
