

function rotateString(str, distance) {
    let new_str = ''

    distance = distance % str.length

    for (let i = 0; i < str.length; i++) {
        new_str += str[(str.length - distance + i) % str.length]
    }
    return new_str
}

// console.log(rotateString("Hello World", 3))
console.log(rotateString("abcdefg", -1));
console.log(rotateString("abcdefg", -2));
console.log(rotateString("abcdefg", -3));
console.log(rotateString("abcdefg", -4));
console.log(rotateString("abcdefg", -5));
console.log(rotateString("abcdefg", -8));
console.log(rotateString("Hello-World", 0));


function isRotation(str, compare) {
    if (str.length != compare.length) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (str == compare)
    }
}


isRotation("abcde", "bcdea")

