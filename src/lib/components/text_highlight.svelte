<script lang="ts">
	const { text, size } = $props();

	// svelte-ignore state_referenced_locally
	const parts = text.split(' ');
	const total = parts.length;
</script>

{#each parts as word, i}
	{@const bgSize = `${total * 100}% 100%`}
	{@const bgPos = `${total > 1 ? (i / (total - 1)) * 100 : 0}% 0%`}
	<span
		class="anim-word bg-linear-to-r from-secondary-500 to-orange-400 bg-clip-text font-bold text-transparent {size}"
		style:background-size={bgSize}
		style:background-position={bgPos}>{word}</span
	>
{/each}
