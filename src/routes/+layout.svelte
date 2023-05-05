<script>
	import Navbar from "$lib/components/navbar.svelte"
	import Container from "$lib/components/container.svelte"
	import Footer from "$lib/components/footer.svelte"
	import PageLogo from "$lib/img/f1-logo.svg"
	import Sidebar from "$lib/components/sidebar.svelte"

	export let data;
	let navHeight, footerHeight, showSidebar = false;

	const setShowSidebar = () => {
		showSidebar = !showSidebar;
	}
</script>

<svelte:head>
	<title>F1 Data Explorer</title>
	<link rel="icon" href={PageLogo}>
</svelte:head>
	
<Container>
	<Navbar bind:clientHeight={navHeight} {setShowSidebar}/>
	{#if showSidebar}
		<Sidebar decades={data.byDecade} {navHeight} {footerHeight} />
	{/if}
	<slot></slot>
	<Footer bind:clientHeight={footerHeight}/>
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