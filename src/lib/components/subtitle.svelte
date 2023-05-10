<script>
	export let text;
</script>

<h2 class={"subtitle" + ($$restProps.class ? " " + $$restProps.class : "")}>{text}</h2>

<style>
	.subtitle {
		color: #F1FAEE;
		font-size: 24px;
		text-align: center;
	}
</style>