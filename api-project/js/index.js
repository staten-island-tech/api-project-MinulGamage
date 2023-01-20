import { DOMSelectors } from "./DOM";
import "../styles/style.css";

const api = "https://valorant-api.com/v1/agents";
console.log(fetch(api));

const agent = document.querySelector("#displayName");
const AgentSearch = `${api}${agent}`;
console.log(AgentSearch);

// fetch() returns a "response", which we must convert into a object json format
fetch(api)
  .then((response) => response.json())
  .then((data) => console.log(data));

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

DOMSelectors.button.addEventListener("click", function (event) {
  const apiResponseDOM = document.getElementById("api-response");
  const putcharacterInHTML = async () => {
    const character = await fetchData(api);
    apiResponseDOM.innerHTML = ` <div class="card-info" id="card">
  <h2 class="AgentName"> Agent: ${api.displayName} </h2>
  <img src="${api.bustPortrait}" alt="Image of Valorant Agent">
  <q class="Description"> Description: ${api.description}</q>
  </div>`;
  };
  putcharacterInHTML();
  event.preventDefault();
});
