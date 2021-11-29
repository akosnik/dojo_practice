// Use the acronym function below to return the acronyms, or capitalized first letters, of each word in a sentence

// Example: acronym("free all rodents that like evil kittens") would return the string "FARTLEK"
// NOTE: A Fartlek is a period of fast running intermixed with periods of slower running - you're welcome(:
// TIP: A string can be treated like an array of letters.  For example "car" could be used as ["c", "a", "r"]

// console.log(acronym("free all rodents that like evil kittens"));
// console.log(acronym("never obey older babies sarcastically"));

function acronym(string) {                              //  Define function, give it a string
    new_string = string[0].toUpperCase();               //  define a new string and add the first letter to it
    for (let i = 0; i < string.length; i++) {           //  iterate through the string like you would an array
        if (string[i] == ' ') {                         //  check for a space, knowing i will add the next letter in
            new_string += string[i + 1].toUpperCase();  //  add the letters that follow a space to my new string
        }
    }
    console.log(new_string);
}

acronym("free all rodents that like evil kittens");

// Use the reverseString function below to take in a string and reverse the order of each character in that string


// // ** Don't use the built-in reverse() method! ** That is cheating (: and you don't want to cheat!

// function reverseString(str) {
//     // your code here
// }

// console.log(reverseString("creature"))
// console.log(reverseString("really?"))
// console.log(reverseString("yo banana boy"))
// console.log(reverseString("borrow or rob"))


function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);

}

reverseString("yo banana boy");
reverseString("borrow or rob")