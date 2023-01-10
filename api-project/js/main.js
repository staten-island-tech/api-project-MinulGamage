// API (Application Programming Interface) - if you want to get data
// from the internet programmatically, it's likely that you will have
// to deal with an API.

// Below is an entry point to an api that generates random quotes.
// APIs are usually accessible with a HTML/website link.
// (If you open this in a browser, you will get raw object data.)
const apiEntry = "https://api.quotable.io/random";

// fetch is a function (that you've seen previously) that can retrieve
// data from an api entry point.
console.log(fetch(apiEntry));

// fetch() returns a "response", which we must convert into a object json format
fetch(apiEntry)
  .then((response) => response.json()) // use the `.json()` method
  .then((data) => console.log(data)); // `.json()` is also async, chain another `.then()` to log the object

// let's turn this to an async/await function
async function fetchData(apiEntry) {
  try {
    const response = await fetch(apiEntry);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
fetchData(apiEntry);

// paired with DOM selectors, you can display dynamic data onto your HTML!
const apiResponseDOM = document.getElementById("api-response");
const putQuoteInHTML = async () => {
  // defining an async arrow function
  const quote = await fetchData(apiEntry);
  apiResponseDOM.innerHTML = `Quote: ${quote.content}`;
};
putQuoteInHTML();
