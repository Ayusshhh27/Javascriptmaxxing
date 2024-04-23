let obj = {
  item: "eraser",
  price: 20,
};

// Example of template literals
let output = `The item is ${obj.item} and its price is ${obj.price}`;
console.log(output);

//Assignment - Construct a username using string interpolation

let ui = prompt("Enter your fullname");
let un = `@${ui}${ui.length}`;
console.log(un);
