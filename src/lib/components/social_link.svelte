<script lang="ts">
	const { icon, link } = $props();
</script>

<a class="anim-word" href={link} title={icon}>
	<div
		class="inline-block h-12 w-12 bg-text-500 hover:bg-orange-400"
		style="
		mask: url('/socials/{icon}.svg') no-repeat center / contain;
		-webkit-mask: url('/socials/{icon}.svg') no-repeat center / contain;
	"
	></div>
</a>
