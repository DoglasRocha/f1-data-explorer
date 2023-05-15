import requestFromApi, { unwrapObject } from "../../../lib/js/fetch_func.js";

export async function fetchRoundData(year, round) {
	
	let result = await requestFromApi(
		`http://ergast.com/api/f1/${year}/${round}/results.json`, 
		fetch
	);

	return {result: unwrapObject(result, [], 'MRData', 'RaceTable', 'Races')[0]};
}
