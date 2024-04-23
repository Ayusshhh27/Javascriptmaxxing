// //function - block of code that perform a specific task

// function sum(x, y) {
//   sum = x + y;
//   console.log("yo");
//   return s;
// }

// let val = sum(3, 4);
// console.log(val);

// //Arrow function

// const arrowsum = (x, y) => {
//   console.log(x + y);
// };

// const printhello = () => {
//   console.log("hello");
// };

// printhello();

// //Assignment
// function vowels(input) {
//   let count = 0;
//   const vowels = "aeiouAEIOU";
//   for (const c of input) {
//     if (vowels.includes(c)) {
//       count++;
//     }
//   }
//   return count;
// }

// const count = vowels("Ayush");
// console.log(count);

// // for each Loop

// let cities = ["patna", "ara", "gaya"];

// cities.forEach((val, idx, cities) => {
//   console.log(val.toUpperCase(), idx, cities);
// });

// // A higher-order function is a function that either accepts other functions as arguments or returns a function as its result.

// // Example of a higher-order function

// function higherOrderFunction(func) {
//   // Inside this function, we can execute the function passed as an argument
//   func();
// }

// // Example of a function that will be passed as an argument to the higher-order function
// function sayHello() {
//   console.log("Hello, world!");
// }

// // Passing the sayHello function as an argument to the higher-order function
// higherOrderFunction(sayHello);

// // Assignment-2 print sqrt of each element in array

// // Method-1: Using forEach without extra methods
// let num = [2, 4, 6, 8, 10];

// num.forEach((value) => {
//   console.log(value * value);
// });

// // Method-2: Using forEach with an extra method
// let cals = (value) => {
//   console.log(value * value);
// };

// num.forEach(cals);

// // Method-3: Using for...of loop
// let arr = [1, 2, 3, 4, 5];

// for (Element of arr) {
//   console.log(Element * Element);
// }

// // use of Map method in JS

// let nums = [1, 2, 3, 4, 5];
// let ans = nums.map((val) => {
//   return val * val;
// });

// console.log(ans);
// output - [1, 4, 9, 16, 25]; // new array

// // use of filter method in JS

// let arrs = [2, 4, 5, 6, 7];
// let ans2 = arrs.filter((val) => {
//   return val % 2 == 0;
// });

// console.log(ans2);
// output - [2, 4, 6]; // new array

// // use of reduce method in JS

// let grp = [6, 9, 3, 7, 7];

// const ans3 = grp.reduce((prevval, currentval) => {
//   return prevval + currentval;
// });

// console.log(ans3);
// output - 32;

// // Assignment

// let ass = [75, 49, 59, 33, 90, 95];

// let o = ass.filter((value) => {
//   return value > 90;
// });
// console.log(o);

// // Assignment

// let n = prompt("enter a number less than 10");
// let arr1 = [];
// for (let i = 1; i <= n; i++) {
//   arr1[i - 1] = i;
// }
// console.log(arr1);

// let s = arr1.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log(s);

// let p = arr1.reduce((res, curr) => {
//   return res * curr;
// });

// console.log(p);

// ---------------------------------------------------------------------

// Function definitions

function addition(x, y) {
  let sum = x + y;
  console.log("yo");
  return sum;
}

let result = addition(3, 4);
console.log(result);

// Arrow functions

const arrowAddition = (x, y) => {
  console.log(x + y);
};

const printGreeting = () => {
  console.log("hello");
};

printGreeting();

// Count vowels in a string

function countVowels(input) {
  let count = 0;
  const vowelString = "aeiouAEIOU";
  for (const character of input) {
    if (vowelString.includes(character)) {
      count++;
    }
  }
  return count;
}

const vowelsCount = countVowels("Ayush");
console.log(vowelsCount);

// forEach Loop

let citiesArray = ["patna", "ara", "gaya"];

citiesArray.forEach((value, index, array) => {
  console.log(value.toUpperCase(), index, array);
});

// Higher-order function

function higherOrderFunction(callbackFunc) {
  callbackFunc();
}

function greet() {
  console.log("Hello, world!");
}

higherOrderFunction(greet);

// Square each element in an array

// Method-1: Using forEach without extra methods
let numbersArray = [2, 4, 6, 8, 10];

numbersArray.forEach((value) => {
  console.log(value * value);
});

// Method-2: Using forEach with an extra method

let calculateSquare = (value) => {
  console.log(value * value);
};

numbersArray.forEach(calculateSquare);

// Method-3: Using for...of loop

let numberArray = [1, 2, 3, 4, 5];

for (let element of numberArray) {
  console.log(element * element);
}

// Use of map method in JS

let originalNumbers = [1, 2, 3, 4, 5];
let squaredNumbers = originalNumbers.map((value) => {
  return value * value;
});
console.log(squaredNumbers);

// Use of filter method in JS

let numbersArray2 = [2, 4, 5, 6, 7];
let filteredNumbers = numbersArray2.filter((value) => {
  return value % 2 == 0;
});
console.log(filteredNumbers);

// Use of reduce method in JS

let numbersToReduce = [6, 9, 3, 7, 7];
const reducedResult = numbersToReduce.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});
console.log(reducedResult);

// Assignment: Filter numbers greater than 90

let numbersAssignment = [75, 49, 59, 33, 90, 95];
let filteredOutput = numbersAssignment.filter((value) => {
  return value > 90;
});
console.log(filteredOutput);

// Assignment: Generate an array based on user input and calculate sum and product

let userInput = prompt("Enter a number less than 10");
let generatedArray = [];
for (let i = 1; i <= userInput; i++) {
  generatedArray[i - 1] = i;
}
console.log(generatedArray);

let sumOfGeneratedArray = generatedArray.reduce((prev, curr) => {
  return prev + curr;
});
console.log(sumOfGeneratedArray);

let productOfGeneratedArray = generatedArray.reduce((res, curr) => {
  return res * curr;
});
console.log(productOfGeneratedArray);
