<script>
	import TextHighlight from '$lib/components/text_highlight.svelte';
	import HeroIcon from './hero_icon.svelte';

	const { text, link, size, iconSize } = $props();
</script>

<a href={link} class="flex cursor-pointer items-center gap-2 hover:brightness-80">
	<HeroIcon icon="link" size={iconSize} color="bg-secondary-500" />
	<div class="space-x-1">
		<TextHighlight {text} {size} />
	</div>
</a>
