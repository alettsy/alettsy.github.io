<script lang="ts">
    let { icon, title } = $props();
</script>

<div class="w-20 flex items-center justify-center">
    <img src="https://skillicons.dev/icons?i={icon}" alt="{title}" class="hover:scale-125 w-16 transition-transform duration-200" />
</div>
