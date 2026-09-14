<script lang="ts">
	import type { PageProps } from './$types';
	import HeroIcon from '$lib/components/hero_icon.svelte';
	import About from '$lib/sections/about.svelte';
	import Certs from '$lib/sections/certs.svelte';
	import Home from '$lib/sections/home.svelte';
	import Projects from '$lib/sections/projects.svelte';
	import Tech from '$lib/sections/tech.svelte';
	import Work from '$lib/sections/work.svelte';

	let { data }: PageProps = $props();
</script>

<div class="w-full">
	<Home />
	<About data={data.data.about} />
	<Tech data={data.data.tech} />
	<Projects data={data.data.projects} />
	<Certs data={data.data.certs} />
	<Work data={data.data.work} />
	<div class="flex h-40 w-full items-center justify-center gap-1 p-8 text-text-500">
		Made with <HeroIcon size="w-4 h-4" icon="heart" color="bg-orange-400" /> by Alex Betts (alettsy)
	</div>
</div>
