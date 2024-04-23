let a = 5;
let b = 6;
let condi = a > b;
let condi2 = a === b;
console.log(condi);
console.log(condi2);

let age1 = 17;
if (age1 >= 18) {
  console.log("eligible");
} else {
  console.log("not eligible");
}

let age2 = 27;
let check = age2 >= 18 ? "eligible" : "not eligible";
console.log(check);

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "blue") {
  color = "pink";
} else {
  color = "default_color";
}
console.log("Color:", color);

//!------------------------------------------

let num = prompt("enter a number");
if (num % 5 == 0) {
  console.log("multiple");
} else {
  console.log("not a multiple");
}
let checkMultiple = num % 5 == 0 ? "multiple" : "not a multiple";
console.log(checkMultiple);

//!------------------------------------------

// strings and arrays

let n = "ayush";

for (let i of n) {
  console.log(i);
}

let student = {
  name: "ayush",
  age: 23,
  cgpa: 8,
  isPass: true,
};

for (let i in student) {
  console.log(i); // this normally returns key not the value
  console.log(i + ": " + student[i]); // this returns the value
}

//!------------------------------------------
// Q1
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//  Q2
let gm = 25;
let um = prompt("Guess the number");
while (gm != um) {
  console.log("Wrong guess, try again");
  um = prompt("Guess again");
}
console.log("Congratulations! You guessed the correct number.");
