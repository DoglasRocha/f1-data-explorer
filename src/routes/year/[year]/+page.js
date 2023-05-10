import requestFromApi from "$lib/js/fetch_func.js";

function unwrapObject(object, error, ...attributes) {
	attributes.forEach(attribute => {
		if (object.length) 
			object = object[0];

		if (object[attribute])
			object = object[attribute];
		else 
			return error;
	})

	return object;
}

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
