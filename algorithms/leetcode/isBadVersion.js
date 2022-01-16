const bad = 5;

const isBadVersion = (num) {
  if (num >= bad) return true;
}

const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return (n) => {
    let first = 1;
    let last = n;
    let mid = first + Math.floor((last-first) / 2);
    let firstBad = n;

    while (first <= last) {
      mid = first + Math.floor((last-first) / 2);
      if (isBadVersion(mid)) {
        firstBad = mid;
        last = mid - 1;
      } else {
        first = mid + 1;
      }
    }
    return firstBad;
  };
};

