const sortedSquares = (nums) => {
  var newArr = [];
  for (let i = 0; i < nums.length; i++) {
    newArr.push(nums[i] * nums[i]);
  }
  return mergeSort(newArr);
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  else {
    console.log(arr);
    let mid = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, mid);
    let rightHalf = arr.slice(mid);

    left = mergeSort(leftHalf);
    right = mergeSort(rightHalf);
    console.log("left " + leftHalf, "right " + rightHalf);
    return merge(left, right);
  }
};

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      result.push(arr2[j]);
      i++;
      j++;
    }
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  console.log(result);
  return result;
}

// console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-4, -1, 0]));
