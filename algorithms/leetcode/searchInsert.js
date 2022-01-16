const searchInsert = (nums, target) => {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    let mid = first + Math.floor((last - first) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) {
      first = mid + 1;
    } else if (nums[mid] > target) last = mid - 1;
  }
  return first;
};

console.log(searchInsert([1, 3, 5, 9], 4));
