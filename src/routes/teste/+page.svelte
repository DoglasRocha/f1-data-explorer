<script>
	import Nav from "$lib/components/navbar.svelte"
	let state = false;

	function changeState() {
		state = !state;
	}
</script>

<button on:mouseover={changeState} on:mouseleave={changeState}>clique</button>

{#if state}
	<div style="width: 100px; background-color: green;">olha o palhaço</div>
{/if}