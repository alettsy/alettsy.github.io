<script lang="ts">
    let { title, url, isActive = false } = $props();
</script>

<a href={url} class={`hover:brightness-80 cursor-pointer font-bold ${isActive ? 'text-secondary-500' : 'text-text-500'}`}>{title}</a>
