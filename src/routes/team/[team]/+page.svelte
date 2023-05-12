<script type="text/javascript">
	import Title from "$lib/components/title.svelte";
	import Subtitle from "$lib/components/subtitle.svelte";
	import Text from "$lib/components/text.svelte";
	import Wrapper from "$lib/components/wrapper.svelte";
	import Table from "$lib/components/table.svelte";
	import Grid from "$lib/components/grid.svelte";

	export let data;
</script>

<Wrapper>
	<Title class="mb-1" text="{data.teamData.name}"/>
	<Grid>
		<Subtitle text="Informações"/>
		<Subtitle text="Resultados"/>
		<section>
			<ul>
				<Text><li>Nacionalidade: {data.teamData.nationality}</li></Text>
			</ul>
		</section>
		<section>
			{#if data.results.length}
				<Table>
					<thead>
						<th>Ano</th>
						<th>Posição</th>
						<th>Vitórias</th>
					</thead>
					<tbody>
							{#each data.results as result, index}
								<tr class={index % 2 == 0 ? "dark-bg-cell" : "light-bg-cell"}>
									<td>
										<a href="/year/{result.season}">{result.season}</a>
									</td>
									<td>{result.ConstructorStandings[0].position}</td>
									<td>{result.ConstructorStandings[0].wins}</td>
								</tr>
							{/each}
					</tbody>
				</Table>
			{:else}
				<Text>Não Há dados</Text>
			{/if}
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