function deduplicateSortedArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] == arr[i + 1]) {
      leftShift(arr, i);
    }
  }
}

function leftShift(arr, index) {
  for (i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length -= 1;
  return arr.length;
}

// Things to consider:
// There are lots of ways of solving this problem - if your group has multiple passionate people, you may get bogged down in deciding which solution to pursue. There's merit in trying to find the best course of action before beginning a task, but overthinking and overplanning is a risk. Remember that a good, working solution that runs and is demonstratable is better than a perfect solution that exists only in your head.

let test_a = [0, 1, 1, 1, 2, 5, 5, 8, 9, 9, 10, 12, 12, 12];
deduplicateSortedArray(test_a);
// leftShift(test_a, 0)
console.log(test_a); // returns [0, 1, 2, 5, 8, 9, 10, 12]
