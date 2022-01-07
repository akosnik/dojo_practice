// 1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); // output is the first entry in the cars array Tesla
console.log(otherRandomCar); // output is the second entry in the cars array Mercedes

// 2
const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
// console.log(name); // no output, there is no variable called name defined.
console.log(otherName); // prints the name of the object assigned to variable employee

// 3
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password); // prints 12345
console.log(hashedPassword); // undefined, person doesn't have a password key

// 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second); //false, first is set to the second entry 2, and second the fourth 5 they are not equal
console.log(first == third); //true, third is set to ninth entry 2 so they are equal

// 5
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); //prints 'value' the value of the key 'key'
console.log(secondKey); //prints the array defined under the key 'secondKey'
console.log(secondKey[0]); //prints the first value of the secondKey array 1
console.log(willThisWork); //willThisWork is set to the second value of the secondKey array 5
