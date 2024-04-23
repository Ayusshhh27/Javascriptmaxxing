//!Node event
let b = document.querySelector("#btn1");
let cl = 0;
b.onclick = () => {
  cl++;
  console.log(`button was clicked ${cl === 1 ? "1 time" : cl + " times"}`);
};

//?Same using node event for the div box
let box = document.querySelector("div");
box.onmouseover = (evt) => {
  console.log(evt.type); //using event listener we can know what kind of event was this
  console.log("mouse hovered on box1");
};

//!Doing same work using addeventListener

const tbr = () => {
  console.log("mouse hovered on box2");
};
let box2 = document.querySelectorAll("div")[1];
box2.addEventListener("click", tbr);

//!removing the eventlistener of box2 "click"

box2.removeEventListener("click", tbr);

// Assigment

let a = document.querySelector("#modes");
let curmode = "light";
let blah = document.querySelector("body");

let c = () => {
  if (curmode === "light") {
    curmode = "dark";
    blah.style.backgroundColor = "black";
    document.querySelector("p").style.color = "White";
  } else {
    curmode = "light";
    blah.style.backgroundColor = "white";
    document.querySelector("p").style.color = "black";
  }
  console.log(`mode changed to ${curmode}`);
};

// Add event listener
a.addEventListener("click", c);
