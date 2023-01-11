const apiEntry = "https://www.breakingbadapi.com/api/";

console.log(fetch(apiEntry));

// fetch() returns a "response", which we must convert into a object json format
fetch(apiEntry)
  .then((response) => response.json()) // use the `.json()` method
  .then((data) => console.log(data)); // `.json()` is also async, chain another `.then()` to log the object

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
const putcharacterInHTML = async () => {
  // defining an async arrow function
  const character = await fetchData(apiEntry);
  apiResponseDOM.innerHTML = `character: ${quote.content}`;
};
putcharacterInHTML();

export { apiEntry };
