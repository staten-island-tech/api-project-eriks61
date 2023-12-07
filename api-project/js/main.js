const URL = 'https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/team?name=Liverpool';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
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
}
}
getData(URL)