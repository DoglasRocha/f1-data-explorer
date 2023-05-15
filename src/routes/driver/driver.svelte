<script type="text/javascript">
	import Title from "../../lib/components/title.svelte";
	import Subtitle from "../../lib/components/subtitle.svelte";
	import Text from "../../lib/components/text.svelte";
	import Wrapper from "../../lib/components/wrapper.svelte";
	import Table from "../../lib/components/table.svelte";
	import Grid from "../../lib/components/grid.svelte";
	import Link from "../../lib/components/link.svelte";
	import { onMount } from "svelte";
	import { fetchDriverData } from "./driver.js";

	export let getDataObject, changeDataObject, changeState;

	let data, dateOfBirth;

	onMount(async () => {
		let result = await fetchDriverData(getDataObject().driver);
		data = result;
		dateOfBirth = data.driverData.dateOfBirth.split('-');
		dateOfBirth = `${dateOfBirth[2]}/${dateOfBirth[1]}/${dateOfBirth[0]}`;
	});
</script>

<Wrapper>
	{#if data}
		<Title class="mb-1" text="{data.driverData.givenName} {data.driverData.familyName}"/>
		<Grid>
			<Subtitle text="Informações"/>
			<Subtitle text="Resultados"/>
			<section>
				<ul>
					<Text><li>Data de Nascimento: {dateOfBirth}</li></Text>
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
									<Link
										to="year"
										value={result.season}
										text={result.season}
										{changeState}
										{changeDataObject}
									/>
								</td>
								<td>{result.DriverStandings[0].position}</td>
								<td>{result.DriverStandings[0].wins}</td>
								<td>
									<Link
										to="team"
										value={result.DriverStandings[0].Constructors[0].constructorId}
										text={result.DriverStandings[0].Constructors[0].name}
										{changeState}
										{changeDataObject}
									/>
								</td>
							</tr>
						{/each}
					</tbody>
				</Table>
			</section>
		</Grid>
	{:else}
		<Title class="mb-1" text="Carregando..."/>
	{/if}
</Wrapper>

<style>
	.light-bg-cell {
		background-color: #A8DADC;
	}

	.dark-bg-cell {
		background-color: #7db4b6;
	}
</style>