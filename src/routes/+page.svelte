<script type="text/javascript">
	export let data; // variable that recieves the data fetched

	let years = JSON.stringify(data) !== '{}' ? data.MRData.SeasonTable.Seasons : undefined;
	years = years.map(year => year.season);
	let byDecade = [];

	for (let i = 0; i < years.length / 10; i++) {
		byDecade[i] = [];
		for (let j = 0; j < 10; j++) {
			if (years[i * 10 + j] === undefined) break;
			
			byDecade[i][j] = years[i * 10 + j];
		}
	}

	console.log(byDecade);
</script>

<h1>All Seasons in F1:</h1>

{#if years !== undefined}
	{#each byDecade as decade}
		<ul>{decade[0]}</ul>
		{#each decade as year}
			<li>{year}</li>
		{/each}
	{/each}
{:else}
	<p>oops</p>
{/if}

<style>
	:global(body) {
		padding: 0;
		margin: 0;
	}
</style>