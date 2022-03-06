// Original
const rotate = (arr, k) => {
  if (arr.length <= 1) {
    return arr;
  }
  let left = 0;
  let right = arr.length - 1;
  k = k % arr.length;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  for (let i = 0; i < k / 2; i++) {
    [arr[i], arr[k - i - 1]] = [arr[k - i - 1], arr[i]];
  }

  for (let j = 0; j < (arr.length - k) / 2; j++) {
    console.log("k+j", k + j);
    console.log("len-1-j", arr.length - 1 - j);

    [arr[k + j], arr[arr.length - 1 - j]] = [
      arr[arr.length - 1 - j],
      arr[k + j],
    ];
    console.log("arr", arr);
  }
};

let arr1 = [1, 2, 3, 4, 5, 6, 7];
rotate(arr1, 3);

//Refactor out the reverse logic used 3 times
