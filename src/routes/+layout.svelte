<script>
	import Navbar from "$lib/components/navbar.svelte"
	import Container from "$lib/components/container.svelte"
	import Footer from "$lib/components/footer.svelte"

	export let data;
</script>

<svelte:head>
	<title>F1 Data Explorer</title>
</svelte:head>
	
<Container>
	<Navbar decades={data.byDecade}/>
		<slot></slot>
	<Footer/>
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
		background-color: #1D3557
	}
</style>