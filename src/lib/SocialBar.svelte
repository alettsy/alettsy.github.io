<script>
	import socials from '../assets/socials.json';
</script>

<div>
	{#each socials as social}
		<a class="social" href={social.url}>
			<img class="logo" src={social.icon} alt={social.name}>
		</a>
	{/each}
</div>

<style>
	.social {
		text-decoration: none;
		margin: 0 3px;
		padding: 0;
	}

	.social .logo {
		width: 50px;
		filter: var(--accent-color-filter);
	}
</style>