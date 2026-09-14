<script lang="ts">
	const { title, cert } = $props();
</script>

<div class="overflow-clip rounded-2xl border-4 border-orange-400">
	<img class="rounded-2xl" src="/certs/{cert}.png" alt={title} />
</div>
