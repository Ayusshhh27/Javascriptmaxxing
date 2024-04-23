//The Fetch API is a modern JavaScript interface for fetching resources (like JSON, images, or other data) across the network

//Method-1 async await

const url = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");

const getFacts = async () => {
  try {
    console.log("getting data...");
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data[0].text);
    factpara.innerText = data[0].text;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

getFacts();

//Method-2 Promise Chaining (same code)

const url2 = "https://cat-fact.herokuapp.com/facts";
const factpara2 = document.querySelector("#fact");

const getFacts2 = () => {
  console.log("getting data...");
  fetch(url2)
    .then((response2) => {
      console.log(response2);
      return response2.json();
    })
    .then((data2) => {
      console.log(data2[1].text);
      factpara2.innerText = data2[1].text;
    })
    .catch((error) => {
      console.error("there was an error", error);
    });
};
getFacts2();

//Interesting fact - If i keep both methods, the second one overrides the first one. so on the html page we see what is fetched by Promise chaining
