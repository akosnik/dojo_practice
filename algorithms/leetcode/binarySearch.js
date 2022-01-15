const part = (target, arr, f, b) => {
  if (b - f < 0) return -1;
  let p = Math.floor(f + (b - f) / 2);

  if (arr[p] === target) {
    return p;
  } else if (arr[p] < target) {
    return part(target, arr, p + 1, b);
  } else if (arr[p] > target) {
    return part(target, arr, f, p - 1);
  }
  return -1;
};

const binarySearch = (target, arr) => {
  if (arr.length < 1) {
    return -1;
  }
  return part(target, arr, 0, arr.length - 1);
};

console.log(binarySearch(5, [5]));
console.log(binarySearch(5, [0, 2, 3, 5, 6, 7]));

console.log(binarySearch(2, [5]));
console.log(binarySearch(2, []));
