const searchBtn = document.querySelector("#search-btn");
const titleInput = document.querySelector("#input-title");
const yearInput = document.querySelector("#input-year");
const result = document.querySelector("#result");

searchBtn.addEventListener("click", loadApi);

titleInput.addEventListener("keypress", resultByEnter);
yearInput.addEventListener("keypress", resultByEnter);

function loadApi() {
  moveOrigin();
  fetch(
    "https://www.omdbapi.com/?apikey=167eb644&t=" +
      titleInput.value +
      "&y=" +
      yearInput.value
  )
    .then((response) => response.json())
    .then((data) => showResult(data));
}

function showResult(data) {
  const resultTitle = (document.querySelector("#result-title").innerHTML =
    "Title: " + data.Title);
  const resultYear = (document.querySelector("#result-year").innerHTML =
    "Year: " + data.Year);
  const resultActors = (document.querySelector("#result-actors").innerHTML =
    "Actors: " + data.Actors);
  const resultGenre = (document.querySelector("#result-genre").innerHTML =
    "Genre: " + data.Genre);
  const resultProduction = (document.querySelector(
    "#result-production"
  ).innerHTML = "Production: " + data.Production);
  const resultDirector = (document.querySelector("#result-director").innerHTML =
    "Director: " + data.Director);
  const resultCountry = (document.querySelector("#result-country").innerHTML =
    "Country: " + data.Country);
  const resultAwards = (document.querySelector("#result-awards").innerHTML =
    "Awards: " + data.Awards);
  const resultPlot = (document.querySelector("#result-plot").innerHTML =
    "Plot: " + data.Plot);
  moveUp();
}

function moveUp() {
  result.style.transition = "all 9s";
  result.style.transform = "translateY(0%)";
}

function moveOrigin() {
  result.style.transition = "all 0s";
  result.style.transform = "translateY(100%)";
}

function resultByEnter(e) {
  if (e.key === "Enter") {
    loadApi();
  }
}
