let hexadec = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,'a':10,'b':11,'c':12,'d':13,'e':14,'f':15}

const hexadecToDec = (num, base) => {
  let output = 0;
  let baseLength = Object.keys(base).length
  let reverse = num.split('').reverse()
  for (let i = 0; i < reverse.length; i++) {
    output += baseLength**i * base[reverse[i]]
  }  
  console.log('hexadec', num, '=', output);
  return output;
}

hexadecToDec('a4', hexadec)
hexadecToDec('ccc', hexadec)

let base2 = {0:0, 1:1}
hexadecToDec('101', base2)