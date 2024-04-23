let marks = [20, 30, 40, 50, 60];
console.log(marks.length);

let cities = ["delhi", "mumbai", "patna", "kolkata"];

for (let city in cities) {
  console.log(cities[city].toUpperCase());
}

// Assignment method -1
let items = [250, 399, 595, 334, 709];

for (let idx in items) {
  console.log(`value of item at index ${idx} is ${items[idx]}`);
  let offer = items[idx] / 10;
  items[idx] = items[idx] - offer;
  console.log(`discounted price is ${items[idx]}`);
}

//Method-2
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  let value = items[i] - offer;
  console.log(value);
}

// Assignment
let companies = [
  "Bloomerang",
  "Microsoft",
  "uber",
  "google",
  "uber",
  "ibm",
  "netflix",
];

console.log(companies.shift());
console.log(companies.splice(2, 1, "ola"));
console.log(companies.push("Amazon"));

output - ["Microsoft", "google", "ola", "ibm", "netflix", "Amazon"];
