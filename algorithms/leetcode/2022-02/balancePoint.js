
const balancePoint = (arr) => {

  // starting position in array
  let i = 0;              //1
  let rSum = 0;
  let lSum = arr[0]
  
  for (let i =1; i < arr.length; i++) { 
    rSum += arr[i];
  }

  for (let j = 1; j < arr.length; j++) { 
    // each time we loop through and transfer a number from right to left sum, we need to check if right and left are equal.
    if (lSum === rSum) {
      return true;
    } else {
      lSum = lSum + arr[j] 
      rSum = rSum - arr[j]
    }
  }
  return false;
}

console.log(balancePoint([1,2,1,2])); // T
console.log(balancePoint([1,2,1])); // F

