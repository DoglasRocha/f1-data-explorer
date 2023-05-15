import requestFromApi, { unwrapObject } from "../../lib/js/fetch_func.js"

export async function fetchTeamData(team) {

	let results = await requestFromApi(
		`https://ergast.com/api/f1/constructors/${team}/constructorStandings.json?limit=80`, fetch
	);

	results = unwrapObject(results, [], 'MRData', 'StandingsTable', 'StandingsLists');
	let teamData = unwrapObject(results, [], 'ConstructorStandings', 'Constructor');

	if (results.length == 0) {
		teamData = await requestFromApi(
		`https://ergast.com/api/f1/constructors/${team}.json`, fetch
		);


		results = [];
		teamData = unwrapObject(teamData, [], 'MRData', 'ConstructorTable', 'Constructors')[0];
	}

	return {
		results, 
		teamData
	}
}