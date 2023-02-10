import { DOMSelectors } from "./DOM";
import "../styles/style.css";

let url = "https://valorant-api.com/v1/agents";
/* DOMSelectors.button.addEventListener("click", function (event) {
 async function datafetch(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      let array = Object.values(data);
      const filteredArray = array.filter(
        (url) => url.displayName === `${DOMSelectors.input.value}`
      );
      console.log(array)
      return filteredArray;
    } catch (error) {
      console.error(error);
    }
    datafetch(url);
  }; */

DOMSelectors.button.addEventListener("click", function (event) {
  async function datafetch(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();
      let array = Object.values(data);
      const filteredArray = array.filter((url) =>
        url.displayName.includes(`${DOMSelectors.input.value}`)
      );
      filteredArray.forEach((array) => {
        console.log(filteredArray.displayName);
      });
      console.log(array);

      DOMSelectors.apiResponseDOM.innerHTML = ` <div class="card-info" id="card">
        <h2 class="AgentName"> Agent: ${character.displayName} </h2>
        <img src="${character.bustPortrait}" alt="Image of Valorant Agent">
        <q class="Description"> Description: ${character.description}</q>
      </div>`;
    } catch (error) {
      DOMSelectors.apiResponseDOM.innerHTML = `<div class="card-info" id="card"> 
      <h2 class="Error"> No character found. Make sure to check spelling </h2>
      </div>`;
    }
  }
  datafetch(url);
  event.preventDefault();
});
