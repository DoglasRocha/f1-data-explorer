import requestFromApi from "$lib/js/fetch_func.js"

export async function load({ fetch }) {

	try {
		const response = await requestFromApi("http://ergast.com/api/f1/seasons.json?limit=80", fetch);
		return response;
	}
	catch {
		return undefined;
	}
}