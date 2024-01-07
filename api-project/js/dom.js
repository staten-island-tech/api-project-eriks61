import "../css/style.css";
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

function createGallery(pokedeets) {
  const gallerycon = DOMSelectors.gallery;
  gallerycon.innerHTML = "";
  if (Array.isArray(pokedeets)) {
    pokedeets.forEach((pokemon) => {
      const card = document.createElement("div");
      card.classList.add("boxy");

      const name = document.createElement("h2");
      name.classList.add("card.name");
      name.textContent = `${pokemon.name}`;

      const health = document.createElement("h3");
      health.classList.add("card.health");
      health.textContent = `HEALTH: ${pokemon.health}`;

      const height = document.createElement("h3");
      height.classList.add("card.height");
      height.textContent = `HEIGHT: ${pokemon.height}`;

      card.appendChild(name);
      card.appendChild(health);
      card.appendChild(height);

      gallerycon.appendChild(card);
    });
  }
}
createGallery();

async function getPokeInfograss() {
  const url = "https://pokeapi.co/api/v2/type/grass";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const pokedeets = await Promise.all(
      data.pokemon.map(async (entry) => {
        const pokemonResponse = await fetch(entry.pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`error! Status: ${pokemonResponse.status}`);
        }
        const pokemonData = await pokemonResponse.json();
        const health = pokemonData.stats.find(
          (stat) => stat.stat.name === "hp"
        ).base_stat;
        const pokeheight = pokemonData.height;

        return {
          name: entry.pokemon.name,
          health: health,
          height: pokeheight,
        };
      })
    );

    createGallery(pokedeets);
  } catch (error) {
    console.error("error", error);
  }
}
DOMSelectors.grass.addEventListener("click", getPokeInfograss);

async function getPokeInfofire() {
  const url = "https://pokeapi.co/api/v2/type/fire";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const pokedeets = await Promise.all(
      data.pokemon.map(async (entry) => {
        const pokemonResponse = await fetch(entry.pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`error! Status: ${pokemonResponse.status}`);
        }
        const pokemonData = await pokemonResponse.json();
        const health = pokemonData.stats.find(
          (stat) => stat.stat.name === "hp"
        ).base_stat;
        const pokeheight = pokemonData.height;

        return {
          name: entry.pokemon.name,
          health: health,
          height: pokeheight,
        };
      })
    );

    createGallery(pokedeets);
  } catch (error) {
    console.error("error", error);
  }
}
DOMSelectors.fire.addEventListener("click", getPokeInfofire);

async function getPokeInfowater() {
  const url = "https://pokeapi.co/api/v2/type/water";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const pokedeets = await Promise.all(
      data.pokemon.map(async (entry) => {
        const pokemonResponse = await fetch(entry.pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`error! Status: ${pokemonResponse.status}`);
        }
        const pokemonData = await pokemonResponse.json();
        const health = pokemonData.stats.find(
          (stat) => stat.stat.name === "hp"
        ).base_stat;
        const pokeheight = pokemonData.height;

        return {
          name: entry.pokemon.name,
          health: health,
          height: pokeheight,
        };
      })
    );

    createGallery(pokedeets);
  } catch (error) {
    console.error("error", error);
  }
}
DOMSelectors.water.addEventListener("click", getPokeInfowater);

async function getPokeInfoground() {
  const url = "https://pokeapi.co/api/v2/type/ground";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const pokedeets = await Promise.all(
      data.pokemon.map(async (entry) => {
        const pokemonResponse = await fetch(entry.pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`error! Status: ${pokemonResponse.status}`);
        }
        const pokemonData = await pokemonResponse.json();
        const health = pokemonData.stats.find(
          (stat) => stat.stat.name === "hp"
        ).base_stat;
        const pokeheight = pokemonData.height;

        return {
          name: entry.pokemon.name,
          health: health,
          height: pokeheight,
        };
      })
    );

    createGallery(pokedeets);
  } catch (error) {
    console.error("error", error);
  }
}
DOMSelectors.ground.addEventListener("click", getPokeInfoground);

async function getPokeInforock() {
  const url = "https://pokeapi.co/api/v2/type/rock";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const pokedeets = await Promise.all(
      data.pokemon.map(async (entry) => {
        const pokemonResponse = await fetch(entry.pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`error! Status: ${pokemonResponse.status}`);
        }
        const pokemonData = await pokemonResponse.json();
        const health = pokemonData.stats.find(
          (stat) => stat.stat.name === "hp"
        ).base_stat;
        const pokeheight = pokemonData.height;

        return {
          name: entry.pokemon.name,
          health: health,
          height: pokeheight,
        };
      })
    );

    createGallery(pokedeets);
  } catch (error) {
    console.error("error", error);
  }
}
DOMSelectors.rock.addEventListener("click", getPokeInforock);

async function getPokeInfoghost() {
  const url = "https://pokeapi.co/api/v2/type/dark";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const pokedeets = await Promise.all(
      data.pokemon.map(async (entry) => {
        const pokemonResponse = await fetch(entry.pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`error! Status: ${pokemonResponse.status}`);
        }
        const pokemonData = await pokemonResponse.json();
        const health = pokemonData.stats.find(
          (stat) => stat.stat.name === "hp"
        ).base_stat;
        const pokeheight = pokemonData.height;

        return {
          name: entry.pokemon.name,
          health: health,
          height: pokeheight,
        };
      })
    );

    createGallery(pokedeets);
  } catch (error) {
    console.error("error", error);
  }
}
DOMSelectors.ghost.addEventListener("click", getPokeInfoghost);

DOMSelectors.themeSwitch.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("cool")
    ? "warm"
    : "cool";
  document.body.classList.toggle("cool");
  document.body.classList.toggle("warm");
  setTheme(currentTheme);
});
