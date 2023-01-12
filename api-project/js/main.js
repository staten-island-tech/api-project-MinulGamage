import { DOMSelectors } from "./DOM";
import "../styles/style.css";

const api = "https://www.breakingbadapi.com/api/characters/";

console.log(fetch(api));

// fetch() returns a "response", which we must convert into a object json format
fetch(api)
  .then((response) => response.json()) // use the `.json()` method
  .then((data) => console.log(data)); // `.json()` is also async, chain another `.then()` to log the object

async function fetchData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
fetchData(api);

// paired with DOM selectors, you can display dynamic data onto your HTML!
const apiResponseDOM = document.getElementById("api-response");
const putcharacterInHTML = async () => {
  // defining an async arrow function
  const character = await fetchData(api);
  apiResponseDOM.innerHTML = `character:`;
};
putcharacterInHTML();

export { api };
