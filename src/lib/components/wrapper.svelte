<div class={"wrapper" + ($$restProps.class ? " " + $$restProps.class : "")}>
	<slot></slot>
</div>

<style>
	.wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
</style>