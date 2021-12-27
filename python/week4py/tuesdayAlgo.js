// parensValid(str) - takes in one argument, a string. returns true if the
// parentheses in the string are valid and false otherwise.
// "a(z)g" - true
// ")sadf(" - false
// what's valid?
// - no more opening than closing parens and vice versa

// for every (open there has to be a close)


function parensValid(str) {
    count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(")
            ++count;
        else if (str[i] === ")") {
            --count;
        }
        if (count < 0) {
            return false
        }
    }
    return count === 0;
}

console.log(parensValid("hello!") === true);
console.log(parensValid("a(z)g") === true);
console.log(parensValid("12;(d-[)](qwg)a") === true);
console.log(parensValid(")sadf(") === false);
console.log(parensValid("addToFront(7, [1, 6, 2, 9']") === false);
console.log(parensValid("(()())(()()()))") === false);


