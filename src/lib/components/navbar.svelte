<script>
	import F1Logo from "../img/f1-logo.svg"

	export let changeState;
	export let setShowSidebar;
	export let clientHeight;
</script>

<nav class="navbar" bind:clientHeight={clientHeight}>
	<div class="burger-button" on:click={setShowSidebar}>List of Years &#9660;</div>
	<button on:click={() => changeState("index")} class="logo-button">
		<img src={F1Logo} alt="Logo F1" class="f1-logo">
	</button>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: .5rem 0;
		background-color: #457B9D;
	}

	.f1-logo {
		width: 100px;
		margin-right: 1rem;
	}

	.burger-button {
		color: #F1FAEE;
		cursor: pointer;
		background-color: transparent;
		transition: .4s ease all;
		border-radius: 10px;
		border: 1px solid transparent;
		padding: .4rem;
		margin-left: 1rem;
		font-weight: 400;
	}

	.burger-button:hover {
		color: #1D3557;
	}

	.logo-button {
		background: transparent;
		border: 0;
		cursor: pointer;
	}
</style>