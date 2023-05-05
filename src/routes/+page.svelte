<script type="text/javascript">
	import Wrapper from "$lib/components/wrapper.svelte"

	export let data; // variable that recieves the data fetched

</script>

<Wrapper class="bg-image">
	<h1>F1 Data Explorer</h1>
	
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
</style>