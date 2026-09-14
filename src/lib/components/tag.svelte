<script lang="ts">
	const { name, color } = $props();
</script>

<div class={`mono-font rounded-xl pr-1.5 pl-1.5 text-xs ${color}`}>{name}</div>
