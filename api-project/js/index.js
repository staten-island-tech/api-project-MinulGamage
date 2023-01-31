import { DOMSelectors } from "./DOM";
import "../styles/style.css";

const data = ["https://valorant-api.com/v1/agents"];

const filterAPI = data
  .filter((data) => data.displayName === `${DOMSelectors.input}`)
  .forEach((data) => {
    console.log(data.displayName);
  });

/* const agent = document.querySelector("#displayName");
const AgentSearch = `${api}${agent}`;
console.log(AgentSearch); */

// fetch() returns a "response", which we must convert into a object json format
fetch(data)
  .then((response) => response.json())
  .then((data) => console.log(data));

async function fetchData(api) {
  try {
    const response = await fetch(data);
    const api = await response.json();
    console.log(api);
    return api;
  } catch (error) {
    const apiResponseDOM = document.getElementById("api-response");
    apiResponseDOM.innerHTML = `<h2>Error has occured. Make sure spelling is correct.</h2>`;
    console.error(error);
  }
}
fetchData(data);

DOMSelectors.button.addEventListener("click", function (event) {
  const apiResponseDOM = document.getElementById("api-response");
  const putcharacterInHTML = async () => {
    const character = await fetchData(data);
    apiResponseDOM.innerHTML = ` <div class="card-info" id="card">
  <h2 class="AgentName"> Agent: ${data.displayName} </h2>
  <img src="${data.bustPortrait}" alt="Image of Valorant Agent">
  <q class="Description"> Description: ${data.description}</q>
  </div>`;
  };
  putcharacterInHTML();
  event.preventDefault();
});
