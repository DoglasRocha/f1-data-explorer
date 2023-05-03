<script>
	import F1Logo from "$lib/img/f1-logo.svg"
	import fetchFunc from "$lib/js/fetch_func.js"
	import { onMount } from "svelte";

	export let decades;

	let showDecades = false;
	let showYears = false;
	function setShowDecades() {
		showDecades = !showDecades;
		if (!showDecades)
			showYears = showDecades;
	}

	let decadeToDisplay;
	function setShowYears(index) {
		showYears = true;
		decadeToDisplay = index;
	}

	let navHeight;
	$: sty =
		"position: absolute; " +
		"top: " + navHeight + "px; " +
		"z-index: 1; " + 
		"display: flex; ";
	
</script>

<nav class="navbar" bind:clientHeight={navHeight}>
	<div class="burger-button" on:click={setShowDecades}>List of Years</div>
	<a href="/">
		<img src={F1Logo} alt="Logo F1" class="f1-logo">
	</a>
</nav>

{#if showDecades}
	<div style={sty}>
		<div class="mini-container">
			{#each decades as decade, index}
				<button class="button" on:click={() => setShowYears(index)}>{decade[0]}</button>
			{/each}
		</div>
		<div class="mini-container">
			{#if showYears}
				{#each decades[decadeToDisplay] as year}
					<a class="button" href={"/year/" + year}>{year}</a>
				{/each}
			{/if}
		</div>
	</div>
{/if}

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: .5rem 0;
		background-color: grey;
	}

	.f1-logo {
		width: 100px;
		margin-right: 1rem;
	}

	.mini-container {
		display: flex; 
		flex-direction: column;
	}

	.burger-button {
		color: #ffffff;
		cursor: pointer;
		background-color: transparent;
		transition: .4s ease all;
		border-radius: 10px;
		border: 1px solid transparent;
		padding: .4rem;
		margin-left: 1rem;
	}

	.burger-button:hover {
		background-color: #333333;
		border-color: #ffffff;
	}

	.button {
		color: #ffffff;
		background-color: #ff1801;
		border: #ffffff 1px solid;
		font-size: 20px;
		padding: .5rem 2rem;
		cursor: pointer;
		text-decoration: none;
	}
</style>