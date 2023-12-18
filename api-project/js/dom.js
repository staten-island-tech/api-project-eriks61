const DOMSelectors = {
  grass: document.getElementById("btn1"),
  fire: document.getElementById("btn2"),
  water: document.getElementById("btn3"),
  ground: document.getElementById("btn4"),
  rock: document.getElementById("btn5"),
  ghost: document.getElementById("btn6"),
  gallery: document.getElementById("card-container"),
  themeSwitch: document.getElementById("btn7"),
};

const url = "https://pokeapi.co/api/v2/";

async function getData(endpoint) {
  try {
    const response = await fetch(url + endpoint);
    const result = await response.json();
    console.log(result);
  } catch (error) {}
}

async function getPokeInfo() {
  const ditto = await getData(`type/ground`);
  console.log("Pokemon Info", ditto);
}

getPokeInfo();

function createGallery(arr) {
  DOMSelectors.gallery.innerHTML = "";
  arr.forEach((data) => {
    DOMSelectors.gallery.insertAdjacentElement(
      "beforeend",
      `div class="card">
<h2 class="name">${data.name}`
    );
  });
}

DOMSelectors.themeSwitch.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("cool")
    ? "warm"
    : "cool";
  document.body.classList.toggle("cool");
  document.body.classList.toggle("warm");
  setTheme(currentTheme);
});
