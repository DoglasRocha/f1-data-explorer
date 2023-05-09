<script type="text/javascript">
	import Wrapper from "$lib/components/wrapper.svelte";
	export let data;

	$:console.log(data.races)
</script>

<Wrapper class="margin">
	<h1 class="text title">Dados do ano {data.year}</h1>
	<section class="mainframe">
		<div>
			<h2 class="text subtitle">Campeonato de Pilotos</h2>
			<table class="table">
				<thead>
					<tr>
						<th>Posição</th>
						<th>Nome</th>
						<th>Pontos</th>
						<th>Equipe</th>
					</tr>
				</thead>
				<tbody>
					{#each data.driverStandings as position, index}
						<tr class={index % 2 == 0 ? "dark-bg-cell" : "light-bg-cell"}>
							<td>{position.position}</td>
							<td>{position.Driver.givenName} {position.Driver.familyName}</td>
							<td>{position.points}</td>
							<td>{position.Constructors[0].name}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div>
			<h2 class="text subtitle">Campeonato de Construtores</h2>
			{#if data.constructorStandings.length}
			<table class="table">
				<thead>
					<tr>
						<th>Posição</th>
						<th>Nome</th>
						<th>Pontos</th>
					</tr>
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
			</table>
			{:else}
				<p>Não há dados disponíveis</p>
			{/if}
		</div>
		<div>
			<h2 class="text subtitle">Corridas</h2>
			<ul>
				{#each data.races as race}
				<li>{race.raceName}</li>
				{/each}	
			</ul>
		</div>
	</section>
</Wrapper>

<style>
	.mainframe {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr;
		grid-gap: 2rem;
	}

	:global(.margin) {
		margin: 2rem;
	}

	.text {
		color: #F1FAEE;
	}

	.title {
		font-size: 32px;
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 18px;
		text-align: center;
		margin-bottom: 1rem;
	}

	.table {
		padding: 0.5rem;
		border: 1px solid #F1FAEE;
		background-color: #A8DADC;
		border-collapse: collapse;
	}

	th, td {
		border: 1px solid #F1FAEE;
		padding: 0.4rem;
		text-align: center;
	}

	.light-bg-cell {
		background-color: #A8DADC;
	}

	.dark-bg-cell {
		background-color: #7db4b6;
	}
</style>