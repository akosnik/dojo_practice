function isPalindrome(head) {
  let runner = head;
  let arr = [];

  while (runner != null) {
    arr.push(runner.val);
    runner = runner.next;
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}
