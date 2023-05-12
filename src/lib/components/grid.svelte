<section class="mainframe">
	<slot></slot>
</section>

<style>
	.mainframe {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 1rem;
		column-gap: 1rem;
		margin-top: 1rem;
	}
</style>