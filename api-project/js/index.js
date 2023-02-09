import { DOMSelectors } from "./DOM";
import "../styles/style.css";

let url = "https://valorant-api.com/v1/agents";

DOMSelectors.button.addEventListener("click", function (event) {
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
  };

  const apiResponseDOM = document.getElementById("api-response");
async function datafetch2() {
await fetchData();
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
  fetch
  datafetch2();
  event.preventDefault();
});
