import requestFromApi, { unwrapObject } from "../../lib/js/fetch_func.js"

export async function fetchDriverData(driver) {

	let results = await requestFromApi(
		`https://ergast.com/api/f1/drivers/${driver}/driverStandings.json`, fetch
	);

	results = unwrapObject(results, [], 'MRData', 'StandingsTable', 'StandingsLists');
	let driverData = unwrapObject(results, [], 'DriverStandings', 'Driver');

	return {
		results, 
		driverData
	}
}