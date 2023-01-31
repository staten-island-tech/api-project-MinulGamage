import { DOMSelectors } from "./DOM";
import "../styles/style.css";

const data = "https://valorant-api.com/v1/agents";

console.log(data.displayName);
/* const agent = document.querySelector("#displayName");
const AgentSearch = `${api}${agent}`;
console.log(AgentSearch); */

// fetch() returns a "response", which we must convert into a object json format
fetch(data)
  .then((response) => response.json())
  .then((data) => console.log(data));

/* data
  .filter((data) => data.displayName === `${DOMSelectors.input}`)
  .forEach((data) => {
    console.log(data.displayName);
  }); */

async function fetchData(data) {
  try {
    const response = await fetch(data);
    const api = await response.json();
    console.log(api.message);
    const filterAPI = Object.values(data)
      .filter((data) => data.displayName === `${DOMSelectors.input}`)
      .forEach((data) => {
        console.log(data.displayName);
      });
    return filterAPI;
  } catch (error) {
    const apiResponseDOM = document.getElementById("api-response");
    apiResponseDOM.innerHTML = `<h2>Error has occured. Make sure spelling is correct.</h2>`;
    console.log(error);
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
