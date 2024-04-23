//^ CALLBACKS - PROMISES - ASYNC-AWAIT

// function hello() {
//   console.log("hello");
// }
// setTimeout(hello, 2000);

//^Async nature of JS - The code logs "one", "two", "three", "four", "five", and "six" sequentially. After 4 seconds, it logs "hello". This demonstrates the asynchronous nature of JavaScript, where certain operations (like `setTimeout`) are executed asynchronously, allowing other code to continue running in the meantime.//

// Using arrow function

// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");

// setTimeout(() => {
//   console.log("hello");
// }, 4000);

// console.log("five");
// console.log("six");

//~Callbacks are functions passed as arguments to other functions. They are a fundamental concept in JavaScript, especially in asynchronous programming.//

// function farewell(name) {
//   console.log("Goodbye, " + name + "!");
// }

// function greeting(name, callback) {
//   console.log("Hello, " + name + "!");
//   callback(name);
// }
// greeting("Alice", farewell);

//~Callback hell - Callback hell occurs when you have lots of nested functions inside each other, especially in asynchronous JavaScript code, making it hard to understand and manage.

// asyncFunction1(() => {
//   console.log("hello");
// });
// asyncFunction2(() => {
//   console.log("hello2");
// });
// asyncFunction3(() => {
//   console.log("hello3");
// });

// asyncFunction1(function (result1) {
//   asyncFunction2(result1, function (result2) {
//     asyncFunction3(result2, function (result3) {
//       // and so on...
//     });
//   });
// });

//~Promises in JS - Promises in JavaScript are a way to handle asynchronous operations. They represent the eventual completion or failure of an asynchronous task and allow you to write cleaner and more maintainable code by chaining methods for handling success and failure.

// // // Function to simulate fetching data from an API
// function fetchData() {
//   // Simulate asynchronous operation using setTimeout
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = {
//         name: "John",
//         age: 30,
//       };
//       resolve(data); // Resolve with fetched data
//       // reject(data); // uncomment resolve first
//     }, 2000);
//   });
// }

// //Using the fetchData function
// console.log("Fetching data...");
// fetchData()
//   .then((data) => {
//     console.log("Data fetched successfully:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

//& Promise Chaining - Technique used in JavaScript to handle a sequence of asynchronous operations in a more organized and readable manner. It involves chaining multiple .then() or .catch() methods onto a promise to perform subsequent asynchronous tasks or handle error

// // Function to simulate fetching user data from an API
// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: userId, name: "John Doe" });
//     }, 2000);
//   });
// }

// // Function to simulate fetching user posts from an API
// function fetchUserPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, userId: userId, title: "Post 1" },
//         { id: 2, userId: userId, title: "Post 2" },
//       ]);
//     }, 1500);
//   });
// }

// // Fetch user data and then fetch user posts
// fetchUserData(123)
//   .then((userData) => fetchUserPosts(userData.id))
//   .then((userPosts) => console.log("User posts:", userPosts))
//   .catch((error) => console.error("Error:", error));

//-----------------------------------------------------------------

//^Doing the same program in "Callback" vs "Promise Chaining" vs "Async-await"//

// Simulated function to fetch user data from an API using callbacks
function fetchUserData(userId, callback) {
  setTimeout(() => {
    const userData = { id: userId, name: "John Doe" };
    callback(userData);
  }, 2000);
}

// Example of using callbacks to fetch user data
console.log("Fetching user data...");
fetchUserData(123, (userData) => {
  console.log("User data (Callback):", userData);
});

// Simulated function to fetch user data from an API using promises
function fetchUserDataPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: userId, name: "John Doe" };
      resolve(userData);
    }, 2000);
  });
}

// Example of using promise chaining to fetch user data
console.log("Fetching user data...");
fetchUserDataPromise(123)
  .then((userData) => {
    console.log("User data (Promise Chaining):", userData);
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });

// Simulated function to fetch user data from an API using async/await
function fetchUserDataAsync(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: userId, name: "John Doe" };
      resolve(userData);
    }, 2000);
  });
}

// Example of using async/await to fetch user data
async function fetchUser() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserDataAsync(123);
    console.log("User data (Async/Await):", userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

fetchUser();

//& IIFE - Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately. It's a way to create a separate scope for variables and functions, preventing them from affecting the global scope.

//Demonstration using above async-await Example

(async function () {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserDataAsync(123);
    console.log("User data (Async/Await):", userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
})();
