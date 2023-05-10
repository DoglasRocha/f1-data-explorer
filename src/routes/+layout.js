import fetchFunc from "$lib/js/fetch_func.js"

export async function load({ fetch }) {
	let byDecade;

	let data = await fetchFunc("http://ergast.com/api/f1/seasons.json?limit=80", fetch);

	let years;
	if (data === undefined || JSON.stringify(data) === '{}') 
		years = undefined;
	else
		years = data.MRData.SeasonTable.Seasons;
	if (years !== undefined) {
		years =  years.map(year => year.season);
		byDecade = [];

		for (let i = 0; i < years.length / 10; i++) {
			byDecade[i] = [];
			for (let j = 0; j < 10; j++) {
				if (years[i * 10 + j] === undefined) break;
				
				byDecade[i][j] = years[i * 10 + j];
			}
		}
	}
	
	return {
		byDecade: byDecade
	}
}