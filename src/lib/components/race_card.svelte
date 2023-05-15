<script>
	import Link from "./link.svelte";
	export let raceProps, changeDataObject, changeState;

	$: date = raceProps.date.split('-');
</script>

<div class="card">
	<h3 class="card-title">
		<Link
			to="round"
			value={raceProps.round}
			text={raceProps.raceName}
			{changeDataObject}
			{changeState}
			class="link-color"
		/>
	</h3>
	<ul>
		<li>Circuito: {raceProps.Circuit.circuitName}</li>
		<li>Data: {`${date[2]}/${date[1]}/${date[0]}`}</li>
		<li>País: {raceProps.Circuit.Location.country}</li>
	</ul>
</div>

<style>
	.card {
		border: 3px solid #F1FAEE;
		border-radius: 20%;
		background-color: #A8DADC;
		padding: 1.5rem;
		margin: .5rem;
	}

	.card-title {
		text-align: center;
		font-size: 20px;
		margin-bottom: .5rem;
	}

	:global(.link-color) {
		color: #000000 !important;
		text-decoration: underline !important;
		font-weight: 700 !important; 
	}
</style>