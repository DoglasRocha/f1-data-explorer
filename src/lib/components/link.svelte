<script>
	export let to, value, text, changeDataObject, changeState;

	const onClick = () => {
		changeDataObject(to, value);
		changeState(to);
	}
</script>

<button 
		on:click={onClick} 
		class={"link" + ($$restProps.class ? " " + $$restProps.class : "")}>
	{text}	
</button>

<style>
	.link {
		color: #1D3557;
		text-decoration: none;
		border: 0;
		background: 0;
		cursor: pointer;
	}

	.link:hover {
		text-decoration: underline;
	}
</style>