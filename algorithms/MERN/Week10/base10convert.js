const base10convert = (num, base) => {
  
  let output = ''
  while(num > 0) {
    let quo = Math.floor(num/base.length)
    let rem = num%base.length
    // console.log('quo', quo, 'rem', rem)
    output = (base[rem]) + output;
    num = quo
  }
  console.log(output);
}

let hexdec = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
base10convert(30, hexdec) // 1e

let bi = [0,1]
base10convert(4, bi) // 100

let sept = [0,1,2,3,4,5,6]
base10convert(22, sept) // 31

// 138C HEX TO DEC 5004
// 16^0 * C = 1 * 12    = 12
// 16^1 * 8 = 16 * 8    = 128
// 16^2 * 3 = 256 * 3   = 768
// 16^3 * 1 = 4096 * 1  = 4096

// 1002 DEC TO DEC 1002
// 10^0 * 2 = 2
// 10^1 * 0
// 10^2 * 0
// 10^3 * 1 = 1000

// 100010 BI TO DEC 34
// 2^0 * 0
// 2^1 * 1 = 2
// 2^2 * 0
// 2^3 * 0
// 2^4 * 0
// 2^5 * 1 = 32
