const binaryToDec = (str) => {
  let newStr = str.split('');
  newStr.reverse();
  let result = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '1') {
      result = result + 2**i 
    }
  }
  console.log(result);
  return result
}

binaryToDec('111'); // output 7


// in: 1 out: 1
// in: 3 out: 11
// in: 6 out: 110

//  1    1    0
//           2^0

// input 1 1 0
//reverse String, your index will match your power of 2
// reverse  0    1    1    0    1
// power   2^0, 2^1, 2^2, 2^3  2^4
// multiply the 1 or 0 by the power
//         0*2^0
//             1*2^1
//                  1*2^2
//                      0*2^3
//                             1*2^4

// add these together as you go along
//          0  + 2  + 4  + 0  +  16  =  22