<script lang="ts">
	const { title, cert } = $props();
</script>

<div class="overflow-clip">
	<img class="rounded-2xl" src="/certs/{cert}.png" alt={title} />
</div>
