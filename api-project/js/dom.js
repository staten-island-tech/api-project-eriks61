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

const url = "https://pokeapi.co/api/v2/pokemon/";

async function getData(url){
    try{
        const response = await fetch (url);
        if (response.status !=200){
            throw new Error (response.statusText);
        }
        const data = await response.json();
        function createGallery(arr){
            arr.forEach((data) => {
             DOMSelectors.gallery.insertAdjacentHTML("afterbegin", 
             `<div class="card">
             <h2 class ="name">${data.name}</h2>
             <h3 class ="type">${data.type}</h3>
             `
             
             
             );
        
             }
            )   
            };
        }
    }

async function getPokeInfo() {
  const ditto = await getData(`ground`);
  console.log("Pokemon Info", ditto);
}

getPokeInfo();

DOMSelectors.grass.addEventListener("click", async () => {
  const grass = await getData(`grass`);
  createGallery("Pokemon Info", grass);
});

DOMSelectors.fire.addEventListener("click", async () => {
  const fire = await getData(`fire`);
  createGallery("Pokemon Info", fire);
});

DOMSelectors.water.addEventListener("click", async () => {
  const water = await getData(`water`);
  createGallery("Pokemon Info", water);
});

DOMSelectors.ground.addEventListener("click", async () => {
  const ground = await getData(`ground`);
  createGallery("Pokemon Info", ground);
});

DOMSelectors.rock.addEventListener("click", async () => {
  const rock = await getData(`rock`);
  createGallery("Pokemon Info", rock);
});

DOMSelectors.ghost.addEventListener("click", async () => {
  const ghost = await getData(`ghost`);
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
