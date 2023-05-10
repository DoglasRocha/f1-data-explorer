<script type="text/javascript">
	import Wrapper from "$lib/components/wrapper.svelte";
	import Title from "$lib/components/title.svelte";
	import Subtitle from "$lib/components/subtitle.svelte";
	import Text from "$lib/components/text.svelte";
	import Table from "$lib/components/table.svelte"
	import RaceCard from "$lib/components/race_card.svelte";
	export let data;
</script>

<Wrapper>
	<Title text={`Dados do ano ${data.year}`} class="mb"></Title>
	<section class="mainframe">
		<Subtitle text="Campeonato de Pilotos"/>
		<Subtitle text="Campeonato de Construtores"/>
		<Subtitle text="Corridas"/>
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
								<a href={"/driver/" + position.Driver.driverId}>
									{position.Driver.givenName} {position.Driver.familyName}
								</a>
							</td>
							<td>{position.points}</td>
							<td>{position.Constructors[0].name}</td>
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
								<td>{position.Constructor.name}</td>
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
				<RaceCard raceProps={race}></RaceCard>
			{/each}	
		</article>
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

	a {
		color: #1D3557;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>