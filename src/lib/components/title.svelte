<script>
	export let text;
</script>

<h1 class={"title" + ($$restProps.class ? " " + $$restProps.class : "")}>{text}</h1>

<style>
	.title {
		color: #F1FAEE;
		font-size: 40px;
	}
</style>