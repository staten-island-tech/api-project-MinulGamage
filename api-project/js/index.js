import { DOMSelectors } from "./DOM";
import "../styles/style.css";

let url = "https://valorant-api.com/v1/agents";

fetch(url)
  .then((response) => response.json())
  .then((url) => console.log(url));

DOMSelectors.button.addEventListener("click", function (event) {
  const fetchData = async function datafetch() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      let array = Object.values(data);
      const filteredArray = array.filter(
        (item) => item.displayName === `${DOMSelectors.input.value}`
      );
      return filteredArray;
    } catch (error) {
      console.error(error);
    }
  };

  const apiResponseDOM = document.getElementById("api-response");
  const putCharacterInHTML = async function datafetch2() {
    const newArray = await fetchData();
    if (newArray.length) {
      const character = newArray[0];
      apiResponseDOM.innerHTML = ` <div class="card-info" id="card">
        <h2 class="AgentName"> Agent: ${character.displayName} </h2>
        <img src="${character.bustPortrait}" alt="Image of Valorant Agent">
        <q class="Description"> Description: ${character.description}</q>
      </div>`;
    } else {
      apiResponseDOM.innerHTML = `<div class="card-info" id="card"> 
      <h2 class="Error"> No character found. Make sure to check spelling </h2>
      </div>`;
    }
  };
  putCharacterInHTML();
  event.preventDefault();
});
