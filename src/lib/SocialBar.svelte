<script>
	import socials from '../assets/socials.json';
</script>

<div class="socials">
	{#each socials as social}
		<a class="social" href={social.file ?? social.url}>
			<img class="logo" src={social.icon} alt={social.name}>
		</a>
	{/each}
</div>

<style>
	.socials {
		display: flex;
		justify-content: center;
	}

	.social {
		text-decoration: none;
		margin: 0 3px;
		padding: 0;
		cursor: pointer;
	}

	.social .logo {
		width: 50px;
		filter: var(--accent-color-filter);
	}
</style>
