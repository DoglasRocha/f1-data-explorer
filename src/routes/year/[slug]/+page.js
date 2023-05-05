import requestFromApi from "$lib/js/fetch_func.js";

export async function load({ params, fetch }) {
	let year = params.slug;

	let races = await 
		requestFromApi(`https://ergast.com/api/f1/${year}.json`, fetch);
	let driverStandings = await 
		requestFromApi(`https://ergast.com/api/f1/${year}/driverStandings.json?limit=100`, fetch);
	let constructorStandings = await 
		requestFromApi(`https://ergast.com/api/f1/${year}/constructorStandings.json`, fetch);

	if (races) 
		races = races.MRData.RaceTable.Races;
	if (driverStandings) 
		driverStandings = driverStandings.MRData.StandingsTable.StandingsLists[0]
	if (driverStandings) 
		driverStandings = driverStandings.DriverStandings;
	if (constructorStandings) 
		constructorStandings = constructorStandings.MRData.StandingsTable.StandingsLists[0]
	if (constructorStandings)
		constructorStandings = constructorStandings.ConstructorStandings;

	return {year, races, driverStandings, constructorStandings};
}
