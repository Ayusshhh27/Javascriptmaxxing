const student = {
  fullname: "Ayush Chandra",
  marks: 94.4,
  printmarks: function () {
    console.log("marks =", this.marks);
  },
};

// Prototype in JavaScript:
// JavaScript objects have a special property called prototype.

const employee = {
  calctax() {
    console.log("tax is 30%");
    return "Tax calculation done";
  },
};

const ayush = {
  salary: 50000,
};
const aman = {
  salary: 50000,
};
const ayan = {
  salary: 50000,
};
const ayat = {
  salary: 50000,
};

ayush.__proto__ = employee;
aman.__proto__ = employee;
ayan.__proto__ = employee;
ayat.__proto__ = employee;

// Adding calctax method to the existing aman object

const aman = {
  salary: 50000,
  calctax: function () {
    console.log("tax is 10%");
  },
};
//!Another way to write

aman.calctax = function () {
  console.log("tax is 10%");
};

// Now, if you call calctax on aman
aman.calctax(); // Output: tax is 10%

//---------------------------------------------------------------

//Concept of Classes

class audi {
  stop() {
    console.log("stop");
  }
  start() {
    console.log("start");
  }
}

let v1 = new audi();

//! inheritance and Use of "super" keyword in javascript
//The `super` keyword in JavaScript is used to access and call methods or constructors of a parent class within a subclass, allowing for the invocation of parent class functionality within the subclass.

class Parent {
  work() {
    console.log("going to work");
  }
}

class Child extends Parent {
  work() {
    super.work();
    console.log("I will work someday too");
  }
}

const childObj = new Child();
childObj.work();

//* Constructor is a special method that is automatically called when an object of a class is created. Its primary purpose is to initialize the newly created object with initial values

class Person {
  constructor(name, age) {
    this.name = name; 
    this.age = age; 
  }
}

// Creating an instance of the Person class
let person1 = new Person("John", 30);
