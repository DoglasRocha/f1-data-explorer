import requestFromApi, { unwrapObject } from "$lib/js/fetch_func.js";

export async function load({ params, fetch }) {
	let year = params.year;

	let races = await 
		requestFromApi(`https://ergast.com/api/f1/${year}.json`, fetch);
	let driverStandings = await 
		requestFromApi(`https://ergast.com/api/f1/${year}/driverStandings.json?limit=100`, fetch);
	let constructorStandings = await 
		requestFromApi(`https://ergast.com/api/f1/${year}/constructorStandings.json`, fetch);


	return {
		year, 
		races: unwrapObject(races, [], 'MRData', 'RaceTable', 'Races'), 
		driverStandings: unwrapObject(
			driverStandings, [], 
			'MRData', 'StandingsTable', 
			'StandingsLists', 'DriverStandings'
		), 
		constructorStandings: unwrapObject(
			constructorStandings, [], 
			'MRData', 'StandingsTable', 
			'StandingsLists', 'ConstructorStandings'
		)
	};
}
