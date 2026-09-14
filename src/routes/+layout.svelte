<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import MenuItem from '$lib/components/menu_item.svelte';

	let { children } = $props();
</script>

<svelte:head><title>Alex Betts | alettsy</title><link rel="icon" href={favicon} /></svelte:head>
<div
	class="fixed top-4 right-4 z-90 hidden flex-row gap-6 rounded-2xl border-2 border-text-500 bg-primary-500 p-2 pr-4 pl-3 sm:flex"
>
	<MenuItem url="#home" title="HOME"></MenuItem>
	<MenuItem url="#about" title="ABOUT"></MenuItem>
	<MenuItem url="#tech" title="TECH"></MenuItem>
	<MenuItem url="#projects" title="PROJECTS"></MenuItem>
	<MenuItem url="#certs" title="CERTS"></MenuItem>
	<MenuItem url="#work" title="WORK"></MenuItem>
</div>
{@render children()}
