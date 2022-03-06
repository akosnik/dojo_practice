const reverseString = (arr) => {
  let [i, j] = [0, arr.length - 1];
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  console.log(arr);
};
reverseString(["s", "t", "r", "i", "n", "g"]);
