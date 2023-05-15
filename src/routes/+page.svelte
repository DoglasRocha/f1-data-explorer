<script type="text/javascript">
	import Wrapper from "$lib/components/wrapper.svelte"
	import Title from "$lib/components/title.svelte"
	import Text from "$lib/components/text.svelte"

	export let data; // variable that recieves the data fetched

</script>

<Wrapper class="bg-image">
	<Title text="F1 Data Explorer"/>
	<div class="text-wrapper">
		<Text>Hi! This project was built using the SvelteKit Framework!</Text>
		<br>
		<Text>It is a F1 Data Explorer. It is possible to view data from all F1 seasons in this app.</Text>
		<br>
		<Text>I am using the Ergast Developer API to get the data that is displayed in this project. You can access the API <a id="link" href="http://ergast.com/mrd/" target="_blank">here</a>.</Text>
		<br>
		<Text>Feel free to click on the List of Years and begin exploring!</Text>
	</div>
</Wrapper>

<style>
	:global(*) {
		padding: 0;
		margin: 0;
	}

	:global(.bg-image) {
		background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("../lib/img/main-bg.webp");
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-attachment: scroll;
		background-position: center;
	}

	.text-wrapper {
		width: 60%;
	}

	#link {
		text-align: justify;
		color: #F1FAEE;
	}
</style>