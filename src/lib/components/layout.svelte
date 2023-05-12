<script>
	import Navbar from "./navbar.svelte"
	import Container from "./container.svelte"
	import Footer from "./footer.svelte"
	import PageLogo from "../img/f1-logo.svg"
	import Sidebar from "./sidebar.svelte"
	import Wrapper from "./wrapper.svelte"
	import { onMount } from "svelte";
	import getData from "./helpers/layout.js";

	export let changeState;
	export let changeDataObject;

	let data;
	let navHeight, footerHeight, showSidebar = false;

	const setShowSidebar = () => {
		showSidebar = !showSidebar;
	}

	onMount(async () => {
		let result = await getData();
		data = result;
	});
</script>

<svelte:head>
	<title>F1 Data Explorer</title>
	<link rel="icon" href={PageLogo}>
</svelte:head>
	
<Container>
	<Navbar bind:clientHeight={navHeight} {setShowSidebar} {changeState}/>
	{#if showSidebar}
		<Sidebar decades={data.byDecade} {navHeight} {footerHeight} {changeState} {changeDataObject}/>
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