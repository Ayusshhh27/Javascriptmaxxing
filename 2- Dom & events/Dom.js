let head = document.getElementById("heading-1");
console.dir(head);

let head2 = document.getElementsByClassName("heading-2");
//returns HTML collection
console.dir(head2);

let para = document.getElementsByTagName("p");
console.dir(para);

//!Query Selector

let q1 = document.querySelector("#heading-1");
console.dir(q1);

//! Using innerHTML
let q2 = document.querySelector(".heading-2").innerHTML;
console.log(q2);

// Output: Are <em>you</em> ready?

//! Using innerText
let q3 = document.querySelector(".heading-2").innerText;
console.log(q3);
// Output: Are you ready?

// QuerySelector All --- returns Nodelist

let q4 = document.querySelectorAll("p");
console.dir(q4);

// Assignment-1

document.querySelector("h3").append(" from Apna College");
let textContent = document.querySelector("h3").textContent;
console.log(textContent);

// Assignment-3

let acc = document.querySelectorAll(".box");

let idx = 0;
for (let div of acc) {
  div.innerHTML = `content number ${idx}`;
  idx++;
  console.log(div.innerText);
}
acc[0].innerHTML = "hello this is div 1";
acc[1].innerHTML = "hello this is div 2";
acc[2].innerHTML = "hello this is div 3";

//! get Attributes

let a = document.querySelectorAll("div");
let id = a[3].getAttribute("id");
console.log(id);

const ans = document.querySelectorAll("p");
console.log(ans[2].getAttribute("class"));

//! set Attribute

let paragraph = document.querySelector("p");
// Set the "class" attribute of the <p> element to "lmao"
paragraph.setAttribute("class", "lmao");

//! styling

let yo = document.querySelectorAll("#sock")[0];
yo.style.backgroundColor = "white";
yo.style.fontSize = "20px";

//! new element

let btn1 = document.createElement("button");
btn1.innerText = "click me 1";

let btn2 = document.createElement("button");
btn2.innerText = "click me 2";

let btn3 = document.createElement("button");
btn3.innerText = "click me 3";

let btn4 = document.createElement("button");
btn4.innerText = "click me 4";

//! Performing DOM manipulation on the div element at index 3
let div = document.querySelectorAll("div")[3];
div.append(btn1);
div.prepend(btn2);
div.before(btn3);
div.after(btn4);

// Select the <div> element with the ID "sock"
let divElement = document.getElementById("sock");

// Modify the innerHTML property to remove the text "hello there"
divElement.innerHTML = divElement.innerHTML.replace("hello there", "");
