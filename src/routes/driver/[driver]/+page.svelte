<script type="text/javascript">
	import Title from "$lib/components/title.svelte";
	import Subtitle from "$lib/components/subtitle.svelte";
	import Text from "$lib/components/text.svelte";
	import Wrapper from "$lib/components/wrapper.svelte";
	import Table from "$lib/components/table.svelte";
	import Grid from "$lib/components/grid.svelte";

	export let data;
	let dateOfBirth = data.driverData.dateOfBirth.split('-');
</script>

<Wrapper>
	<Title class="mb-1" text="{data.driverData.givenName} {data.driverData.familyName}"/>
	<Grid>
		<Subtitle text="Informações"/>
		<Subtitle text="Resultados"/>
		<section>
			<ul>
				<Text><li>Data de Nascimento: {`${dateOfBirth[2]}/${dateOfBirth[1]}/${dateOfBirth[0]}`}</li></Text>
				<Text><li>Nacionalidade: {data.driverData.nationality}</li></Text>
			</ul>
		</section>
		<section>
			<Table>
				<thead>
					<th>Ano</th>
					<th>Posição</th>
					<th>Vitórias</th>
					<th>Equipe</th>
				</thead>
				<tbody>
					{#each data.results as result, index}
						<tr class={index % 2 == 0 ? "dark-bg-cell" : "light-bg-cell"}>
							<td>
								<a href="/year/{result.season}">{result.season}</a>
							</td>
							<td>{result.DriverStandings[0].position}</td>
							<td>{result.DriverStandings[0].wins}</td>
							<td>
								<a href="/team/{result.DriverStandings[0].Constructors[0].constructorId}">
									{result.DriverStandings[0].Constructors[0].name}
								</a>
							</td>
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