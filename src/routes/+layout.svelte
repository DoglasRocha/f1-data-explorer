<script>
	import Navbar from "$lib/components/navbar.svelte"
	import Container from "$lib/components/container.svelte"

	export let data;
</script>

<Container>
	<Navbar decades={data.byDecade}/>
<slot/>
</Container>


<style>
	:global(*) {
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-family: "Arial";
	}

	:global(body) {
		min-height: 100vh;
	}
</style>