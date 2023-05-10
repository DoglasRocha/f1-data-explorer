<script>
	
</script>

<table class="table">
	<slot></slot>
</table>

<style>
	.table {
		padding: 0.5rem;
		border: 1px solid #F1FAEE;
		background-color: #A8DADC;
		border-collapse: collapse;
	}

	table :global(td) {
		border: 1px solid #F1FAEE;
		padding: 0.4rem;
		text-align: center;
	}

	table :global(th) {
		border: 1px solid #F1FAEE;
		padding: 0.4rem;
		text-align: center;
	}
</style>