const romanNum = (str) => {
  let rNums = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 }
  
  let sum = 0;    
  for (let i = 0; i < str.length; i++) {
    if ( rNums[str[i]] < rNums[str[i+1]] ) {
      sum -= rNums[str[i]] 
    } else {
      sum += rNums[str[i]]
    }
  }
  console.log(sum);
  return sum    
}


romanNum('CMXLIX')