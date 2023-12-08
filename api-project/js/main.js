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

const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2021-01-29';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}