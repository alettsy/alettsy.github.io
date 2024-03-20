<script>
	import Control from "./Control.svelte";

	export let projects;
</script>

<div class="projects">
	<div class="spacer" />
	{#each projects as project}
		<div class="project">
			<h3 class="name">{project.name}</h3>
			<p class="description">{project.description}</p>
			<div class="controls">
				{#if project.repo}
					<Control stretch={true} text="GitHub Repo" onclick={() => window.open(project.repo)}/>
				{/if}
				{#if project.demo}
					<Control stretch={true} text="Demo" onclick={() => window.open(project.demo)}/>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	.spacer {
		padding-top: 80px;
	}

	.projects {
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		width: 100%;
		height: 100vh;
		align-items: center;
	}

	.project {
		width: 90%;
		border: var(--accent-color-darker) 2px solid;
		border-radius: 10px;
		margin-bottom: 25px;
	}

	.project:last-child {
		margin-bottom: 100px;
	}

	.name {
		color: var(--accent-color);
		font-size: 18pt;
	}

	.description {
		padding-bottom: 10px;
		height: 3em;
	}

	.name, .description {
		padding-left: 10px;
	}

	.controls {
		padding-right: 10px;
	}

	@media only screen and (min-width: 480px) {
		.project {
			width: 95%;
		}
	}

	@media only screen and (min-width: 1000px) {
		.project {
			width: 80%;
		}

		.project:last-child {
			margin-bottom: 40px;
		}
	}
</style>
