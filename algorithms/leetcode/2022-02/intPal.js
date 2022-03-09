function posIntToArr(num) {
  if (num < 0) {
    return [];
  }
  let i = 0;
  arr = [];
  while (num / 10 > 0) {
    digit = num % 10;
    arr.push(digit);
    num = (num - digit) / 10;
  }
  return arr;
}

console.log(posIntToArr(103013531664983));

function isPalindrome(num) {
  if (num < 0) {
    return false;
  }
  arr = posIntToArr(num);
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// MORE OPTIMIZED from leetcode.com

function isPal(num) {
  if (num < 0 || (num % 10 == 0 && num != 0)) {
    return false;
  }

  let reverse = 0;
  while (num > reverse) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return num == reverse || num == Math.floor(reverse / 10);
}

console.log(isPal());
