const bad = 5;

// in the example, this function is an api call
const isBadVersion = (num) => {
  if (num >= bad) return true;
};

const findFirstBad = (n) => {
  let first = 1;
  let last = n;
  let mid = first + Math.floor((last - first) / 2);
  let firstBad = n;

  while (first <= last) {
    mid = first + Math.floor((last - first) / 2);
    if (isBadVersion(mid)) {
      firstBad = mid;
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return firstBad;
};

console.log(findFirstBad(10));
