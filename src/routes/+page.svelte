<script type="text/javascript">
	import Wrapper from "$lib/components/wrapper.svelte"

	export let data; // variable that recieves the data fetched

</script>

<Wrapper class="bg-image">
	<h1 class="title text-outline">F1 Data Explorer</h1>
	<div class="text-wrapper">
		<p class="text-outline text">Hi! This project is built using the SvelteKit framework!</p>
		<br>
		<p class="text-outline text">It is a F1 Data Explorer. It is possible to view data from all F1 seasons.</p>
		<br>
		<p class="text-outline text">I am using the Ergast Developer API to get the data displayed in this project. You can access the API <a class="text text-outline" href="http://ergast.com/mrd/" target="_blank">here</a>.</p>
		<br>
		<p class="text-outline text">Feel free to click in the List of Years and begin exploring!</p>
	</div>
</Wrapper>

<style>
	:global(*) {
		padding: 0;
		margin: 0;
	}

	:global(.bg-image) {
		background-image: url("../lib/img/main-bg.webp");
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-attachment: scroll;
		background-position: center;
	}

	.title {
		font-size: 40px;
		color: #F1FAEE;
	}

	.text-wrapper {
		width: 60%;
	}

	.text {
		text-align: justify;
		font-size: 26px;
		color: #F1FAEE;
	}

	.text-outline {
		-webkit-text-stroke: 0.5px #1D3557;
	}
</style>