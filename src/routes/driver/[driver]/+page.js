import requestFromApi, { unwrapObject } from "$lib/js/fetch_func.js"

export async function load({ params, fetch }) {

	let results = await requestFromApi(
		`https://ergast.com/api/f1/drivers/${params.driver}/driverStandings.json`, fetch
	);

	results = unwrapObject(results, [], 'MRData', 'StandingsTable', 'StandingsLists');
	let driverData = unwrapObject(results, [], 'DriverStandings', 'Driver');

	return {
		results, 
		driverData
	}
}