<script type="text/javascript">
	import Wrapper from "$lib/components/wrapper.svelte";
	import Title from "$lib/components/title.svelte";
	import Subtitle from "$lib/components/subtitle.svelte";
	import Text from "$lib/components/text.svelte";
	import Table from "$lib/components/table.svelte";
	import Grid from "$lib/components/grid.svelte";

	export let data;
	let results = data.result;
	let date = data.result.date.split('-');
	date = `${date[2]}/${date[1]}/${date[0]}`;
</script>


<Wrapper>
	<Title text="{results.raceName}"/>
	<Grid>
		<Subtitle text="Informações"/>
		<Subtitle text="Resultados"/>
		<section>
			<ul>
				<Text>
					<li>Data: {date}</li>
				</Text>
				<Text>
					<li>Nome do circuito: {results.Circuit.circuitName}</li>
				</Text>
				<Text>
					<li>Rodada: {results.round}</li>
				</Text>
			</ul>
		</section>
		<section>
			<Table>
				<thead>
					<th>Posição</th>
					<th>Piloto</th>
					<th>Equipe</th>
					<th>Posição no Grid</th>
					<th>Status</th>
					<th>Tempo</th>
				</thead>
				<tbody>
					{#each results.Results as result, index}
						<tr class={index % 2 == 0 ? "dark-bg-cell" : "light-bg-cell"}>
							<td>{result.position}</td>
							<td>
								<a href="/driver/{result.Driver.driverId}">
									{result.Driver.givenName} {result.Driver.familyName}
								</a>
							</td>
							<td>
								<a href="/team/{result.Constructor.constructorId}">
									{result.Constructor.name}
								</a>
							</td>
							<td>{result.grid}</td>
							<td>{result.status}</td>
							{#if result.Time}
								<td>{result.Time.time}</td>
							{:else}
								<td></td>
							{/if}

						</tr>
					{/each}
				</tbody>
			</Table>
		</section>
	</Grid>
</Wrapper>

<style>
	.light-bg-cell {
		background-color: #A8DADC;
	}

	.dark-bg-cell {
		background-color: #7db4b6;
	}

	a {
		color: #1D3557;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>