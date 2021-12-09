// bookIndex(input) -> input is an array of integers, in order
// those integers represent pages in a book where a certain term is found
// output is a string representing a listing of those pages in a book's index
// an input of: [58, 104, 105, 106, 192, 194, 195, 196]
// leads to an output of: "58, 104-106, 192, 194-196"
// input: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 17, 18]
// output: "1-5, 8-12, 15, 17-18"

// suggestion: break this into two parts, or maybe even two
// functions - get your array of integers and turn it into an array
// of strings, then turn that array of strings into a single string
// [58, 104, 105, 106, 192, 194, 195, 196]
// ["58", "104-106", "192", "194-196"]
// "58, 104-106, 192, 194-196"
// also a suggestion: remember that you can modify your for loop iterator
// during your loop! you can add to or subtract from i at any point
// also also: remember that loops can go within loops - while in for,
// for in for, while in while, etc.
// [2, 4, 5]
// 4    is equal     5 - 1

function bookIndex(arr) {
    output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] - 1) {
            start = arr[i].toString()
            while (arr[i] == arr[i + 1] - 1) {
                i++                                                 // if it is, move on until we find one that isn't
            }
            end = arr[i].toString()                   // where we left off is the last continuous number
            output.push(start + '-' + end)           // add it to string and push the 1-9 string into array
        } else {
            output.push(arr[i].toString());         // this handles non continuous numbers and pushes them into array
        }
    }
    return output;
}

console.log(bookIndex([1, 3, 4, 5, 7]));
console.log(bookIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 20]));



