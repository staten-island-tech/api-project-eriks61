/* const URL = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};
async function getData(URL){
try {
	const response = await fetch(URL, options);
    console.log(response);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}}

getData(URL) */

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