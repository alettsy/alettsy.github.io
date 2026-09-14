<script lang="ts">
	const { icon, size, color } = $props();
</script>

<div
	class="{size} {color} inline-block"
	style="
		mask: url('/icons/{icon}.svg') no-repeat center / contain;
		-webkit-mask: url('/icons/{icon}.svg') no-repeat center / contain;
	"
></div>
