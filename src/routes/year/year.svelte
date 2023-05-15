<script type="text/javascript">
	import Wrapper from "../../lib/components/wrapper.svelte";
	import Title from "../../lib/components/title.svelte";
	import Subtitle from "../../lib/components/subtitle.svelte";
	import Text from "../../lib/components/text.svelte";
	import Table from "../../lib/components/table.svelte"
	import RaceCard from "../../lib/components/race_card.svelte";
	import Link from "../../lib/components/link.svelte";
	import { fetchYearData } from "./year.js";
	import { onMount } from "svelte";

	export let getDataObject, changeDataObject, changeState;
	let data;

	onMount(async () => {
		let result = await fetchYearData(getDataObject()["year"]);
		data = result;
	});
</script>

<Wrapper>
	<Title text={`Dados do ano ${getDataObject().year}`} class="mb"></Title>
	<section class="mainframe">
		<Subtitle text="Campeonato de Pilotos"/>
		<Subtitle text="Campeonato de Construtores"/>
		<Subtitle text="Corridas"/>
		{#if data}
			<article>
				<Table>
					<thead>
						<th>Posição</th>
						<th>Nome</th>
						<th>Pontos</th>
						<th>Equipe</th>
					</thead>
					<tbody>
						{#each data.driverStandings as position, index}
							<tr class={index % 2 == 0 ? "dark-bg-cell" : "light-bg-cell"}>
								<td>{position.position}</td>
								<td> 
									<Link 
										to="driver" 
										value={position.Driver.driverId} 
										text="{position.Driver.givenName} {position.Driver.familyName}"
										{changeDataObject} 
										{changeState}
									/>
								</td>
								<td>{position.points}</td>
								<td>
									<Link 
										to="team" 
										value={position.Constructors[0].constructorId} 
										text={position.Constructors[0].name}
										{changeDataObject} 
										{changeState}
									/>
								</td>
							</tr>
						{/each}
					</tbody>
				</Table>
			</article>
			<article>
				{#if data.constructorStandings.length}
					<Table>
						<thead>
							<th>Posição</th>
							<th>Nome</th>
							<th>Pontos</th>
						</thead>
						<tbody>
							{#each data.constructorStandings as position, index}
								<tr class={index % 2 == 0 ? "dark-bg-cell" : "light-bg-cell"}>
									<td>{position.position}</td>
									<td>
										<Link 
											to="team" 
											value={position.Constructor.constructorId} 
											text={position.Constructor.name}
											{changeDataObject} 
											{changeState}
										/>
									</td>
									<td>{position.points}</td>
								</tr>
							{/each}
						</tbody>
					</Table>
				{:else}
					<Text>Não há dados disponíveis</Text>
				{/if}
			</article>
			<article>
				{#each data.races as race}
					<RaceCard raceProps={race} {changeState} {changeDataObject}/>
				{/each}	
			</article>
		{:else}
			<span></span>
			<Text>Carregando...</Text>
			<span></span>
		{/if}
	</section>
</Wrapper>

<style>
	.mainframe {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr;
		grid-template-rows: auto auto;
		grid-gap: 2rem;
	}

	:global(.margin) {
		margin: 2rem;
	}

	:global(.mb) {
		margin-bottom: 1rem;
	}

	.light-bg-cell {
		background-color: #A8DADC;
	}

	.dark-bg-cell {
		background-color: #7db4b6;
	}
</style>