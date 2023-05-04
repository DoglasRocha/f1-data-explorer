<script>
	import GithubLogo from "$lib/img/github-mark-white.svg";
</script>

<footer class="footer">
	<p class="text">© by Doglas Rocha</p>
	<a href="https://github.com/DoglasRocha" target="_blank">
		<img src={GithubLogo} alt="Logo do Github" class="logo">
	</a>
</footer>

<style>
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #457B9D;
		padding: .4rem 1.5rem;
	}

	.text {
		color: #F1FAEE;
	}

	.logo {
		width: 40px;
	}
</style>