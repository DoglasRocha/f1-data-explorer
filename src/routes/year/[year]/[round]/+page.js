import requestFromApi, { unwrapObject } from "$lib/js/fetch_func.js";

export async function load({ params, fetch }) {
	
	let result = await requestFromApi(
		`http://ergast.com/api/f1/${params.year}/${params.round}/results.json`, 
		fetch
	);

	return {result: unwrapObject(result, [], 'MRData', 'RaceTable', 'Races')[0]};
}
