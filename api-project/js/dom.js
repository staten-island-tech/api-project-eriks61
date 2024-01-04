const DOMSelectors = {
  grass: document.getElementById("btn1"),
  fire: document.getElementById("btn2"),
  water: document.getElementById("btn3"),
  ground: document.getElementById("btn4"),
  rock: document.getElementById("btn5"),
  ghost: document.getElementById("btn6"),
  gallery: document.getElementById("card-container"),
  themeSwitch: document.getElementById("btn7"),
  h2: document.getElementById("h2"),
  search: document.querySelector("input[name='Find a berry']")
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
             </div>`
             
             
             );
        
             }
            )   
            };
            createGallery(data)
            data.forEach((data) => {console.log(data.name)})
        }
        catch(error){
          DOMSelectors.h2.textContent="Can't find!"
        }
    DOMSelectors.enter.addEventListener("submit", function(event){
      event.preventDefault();
      clear();
      let value = DOMSelectors.search.value
      let link = `https://pokeapi.co/api/v2/berry/${value}`
      async function getData(link){
        try{
          const response = await fetch (link);
          if (response.status !=200){
            throw new Error (response.statusText);
          }
          const data = await response.json();
          function createGallery(arr){
            arr.forEach((data) => {
              DOMSelectors.gallery.insertAdjacentHTML(
                'beforeend', 
                `<div class="card>
                <h2 class="name">${data.name}</h2>
                <h2 class="size">${data.size}</h2>
                <h2 class="smoothness">${data.smoothness}</h2>`
              )
            })
          };
          createGallery(data);
        }
        catch (error) {
          console.log("no info");
          document.querySelector("h2").textContent = "Berry doesn't exist!"
        DOMSelectors.search.addEventListener
        
        }
      }
    })
      }
      getData(url)

      function clear(){
        DOMSelectors.gallery.innerHTML = "";
      }
      function clearhead(){
        DOMSelectors.h2.innerHTML=""
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
