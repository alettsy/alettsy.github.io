<script>
	import TextHighlight from '$lib/components/text_highlight.svelte';
	import Link from './link.svelte';
	import Tag from './tag.svelte';

	let { title, description, link, tags } = $props();
</script>

<div
	class="flex min-h-60 w-100 max-w-100 min-w-40 flex-col gap-4 rounded-2xl border-2 border-text-500 bg-primary-500 p-4"
>
	<div class="flex flex-wrap space-x-1">
		<TextHighlight text={title} size="text-2xl"></TextHighlight>
	</div>
	<div class="flex gap-2">
		{#each tags as tag}
			<Tag name={tag.name} color={tag.color} />
		{/each}
	</div>
	<div class="grow text-text-500">
		{description}
	</div>
	<div class="flex justify-end">
		<Link iconSize="w-4 h-4" {link} size="text-md" text="View on GitHub" />
	</div>
</div>
