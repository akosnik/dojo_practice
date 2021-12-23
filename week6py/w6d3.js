// generateAllPossibleCoinChange
// one parameter - the amount of cents to generate change for
// the output is an array of objects in the following format:
// {quarters: Q, dimes: D, nickels: N, pennies: P}
// where Q, D, N and P represent a number of coins that add together to form the given amount
// an amount of 25 should give us the following array:
// [
//  {quarters: 1, dimes: 0, nickels: 0, pennies: 0},
//  {quarters: 0, dimes: 2, nickels: 1, pennies: 0},
//  {quarters: 0, dimes: 1, nickels: 3, pennies: 0},
//  {quarters: 0, dimes: 1, nickels: 2, pennies: 5}
// ...
//  {quarters: 0, dimes: 0, nickels: 1, pennies: 20}
//  {quarters: 0, dimes: 0, nickels: 0, pennies: 25}
// ]

function generateAllPossibleCoinChange(amount, output = [], partial = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }) {
    if (amount == 0) {
        return output.push(partial)
    }
    if (amount >= 25) {
        partialCopy = Object.assign({}, partial)
        partialCopy['quarters'] += 1
        amount -= 25
        return generateAllPossibleCoinChange(amount, output, partialCopy)
    }
    if (amount >= 10) {
        partialCopy = Object.assign({}, partial)
        partialCopy['dimes'] += 1
        amount -= 10
        return generateAllPossibleCoinChange(amount, output, partialCopy)
    }
    if (amount >= 5) {
        partialCopy = Object.assign({}, partial)
        partialCopy['nickels'] += 1
        amount -= 5
        return generateAllPossibleCoinChange(amount, output, partialCopy)
    }
    if (amount >= 1) {
        partialCopy = Object.assign({}, partial)
        partialCopy['pennies'] += 1
        amount -= 1
        return generateAllPossibleCoinChange(amount, output, partialCopy)
    }


    return output
}

console.log(generateAllPossibleCoinChange(27));
