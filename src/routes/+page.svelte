<script type="text/javascript">
	import { onMount } from 'svelte';

	async function requestFromApi(apiEndpoint) {
		let response = await fetch(apiEndpoint);
		if (response.ok) {
			let body = await response.json();
			return body;
		}
		else {
			return "Fail";
		}
	}

	let test, data;

	onMount(async () => {
		test = await requestFromApi("http://ergast.com/api/f1/seasons.json?limit=80");
		data = test.MRData.SeasonTable.Seasons;
	});

	
</script>

<h1>All Seasons in F1:</h1>
{#if data !== undefined}
	{#each data as year}
		<li>{year.season}</li>
	{/each}
{:else}
	<p>Oops</p>
{/if}