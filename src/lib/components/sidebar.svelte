<script>
	export let decades;
	export let navHeight, footerHeight;
	let windowHeight;
	let showYears = false, decadeToDisplay = undefined;

	const setShowYears = (index) => {
		showYears = decadeToDisplay === index && showYears ? false : true;
		decadeToDisplay = index;
	}

	$: windowHeight = document.body.scrollHeight;
</script>

<svelte:body bind:innerHeight={windowHeight}/>

<div class="sidebar" 
		style:top={navHeight + "px"} 
		style:height={`calc(${windowHeight}px - ${navHeight+footerHeight}px`}>
	<div class="mini-container">
		{#if decades !== undefined}
			{#each decades as decade, index}
				<button class="button" on:click={() => setShowYears(index)}>{decade[0]}</button>
			{/each}
		{/if}
	</div>
	<div class="mini-container">
		{#if showYears}
			{#each decades[decadeToDisplay] as year}
				<a class="button" href={"/year/" + year}>{year}</a>
			{/each}
		{/if}
	</div>
</div>

<style>
	.mini-container {
		display: flex; 
		flex-direction: column;
		border: 1px solid transparent;
		border-right-color: #F1FAEE;
	}

	.button {
		color: #F1FAEE;
		background-color: transparent;
		border: transparent 1px solid;
		font-size: 20px;
		padding: .5rem 2rem;
		cursor: pointer;
		text-decoration: none;
		transition: .4s ease all;
	}

	.button:hover {
		border-color: #F1FAEE transparent;
	}

	.sidebar {
		position: absolute;
		z-index: 1;
		display: flex;
		background-color: #E63946;
	}
</style>