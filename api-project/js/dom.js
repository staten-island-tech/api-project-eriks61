const DOMSelectors = {
	grass: document.getElementById("btn1"),
	fire: document.getElementById("btn2"),
	water: document.getElementById("btn3"),
	ground: document.getElementById("btn4"),
	rock: document.getElementById("btn5"),
	ghost: document.getElementById("btn6"),
}


const url = 'https://pokeapi.co/api/v2/';

async function getData(endpoint){
 try {
	const response = await fetch(url + endpoint);
	const result = await response.json();
	console.log(result);
} catch (error) {
	
}}

async function getPokeInfo() {
	const ditto = await getData(`pokemon/132`);
	console.log('Pokemon Info', ditto);
}

getPokeInfo();






DOMSelectors.themeSwitch.addEventListener("click", () => {
	const currentTheme = document.body.classList.contains("cool")
	  ? "warm"
	  : "cool";
	document.body.classList.toggle("cool");
	document.body.classList.toggle("warm");
	setTheme(currentTheme);
  });