<script lang="ts">
	import { onMount } from 'svelte';

	const { text } = $props();

	const words = text.split(' ');

	const colors = ['text-blue-600', 'text-white', 'text-red-600'];

	let currentIndex = $state(0);
	let updateInterval: number;

	onMount(() => {
		updateInterval = setInterval(() => {
			currentIndex = (currentIndex + 1) % colors.length;
		}, 1000);

		return () => {
			clearInterval(updateInterval);
		};
	});

	function _getColor(offset: number) {
		return colors[(currentIndex + offset) % colors.length];
	}
</script>

{#each words as word}
	<span class="anim-word">
		{#each [...word] as character, index}
			<span
				class={`text-xl font-bold transition-colors duration-1000 ease-linear sm:text-2xl md:text-3xl ${_getColor(index)}`}
				>{character}</span
			>
		{/each}
	</span>
{/each}
