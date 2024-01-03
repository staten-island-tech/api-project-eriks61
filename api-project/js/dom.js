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

DOMSelectors.grass.addEventListener("click", async () => {
  const grass = await getData(`type/grass`);
  createGallery("Pokemon Info", grass);
});

DOMSelectors.fire.addEventListener("click", async () => {
  const fire = await getData(`type/fire`);
  createGallery("Pokemon Info", fire);
});

DOMSelectors.water.addEventListener("click", async () => {
  const water = await getData(`type/water`);
  createGallery("Pokemon Info", water);
});

DOMSelectors.ground.addEventListener("click", async () => {
  const ground = await getData(`type/ground`);
  createGallery("Pokemon Info", ground);
});

DOMSelectors.rock.addEventListener("click", async () => {
  const rock = await getData(`type/rock`);
  createGallery("Pokemon Info", rock);
});

DOMSelectors.ghost.addEventListener("click", async () => {
  const ghost = await getData(`type/ghost`);
  console.log("Pokemon Info", ghost);
});


DOMSelectors.themeSwitch.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("cool")
    ? "warm"
    : "cool";
  document.body.classList.toggle("cool");
  document.body.classList.toggle("warm");
  setTheme(currentTheme);
});
