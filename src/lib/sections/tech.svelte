<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import TextHighlight from '$lib/components/text_highlight.svelte';
	import type { Tech } from '$lib/types';

	let { data }: { data: Tech } = $props();

	gsap.registerPlugin(ScrollTrigger);

	let container: HTMLDivElement;
	let title: HTMLDivElement;
	let primaryTitle: HTMLDivElement;
	let secondaryTitle: HTMLDivElement;
	let toolTitle: HTMLDivElement;

	let primaryIcons: HTMLDivElement[] = [];
	let secondaryIcons: HTMLDivElement[] = [];
	let toolIcons: HTMLDivElement[] = [];

	onMount(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: 'top top',
					end: '+=1000',
					pin: true,
					scrub: 1,
					anticipatePin: 1
				}
			});
			tl.to(title, {
				opacity: 0,
				scale: 0.7,
				y: -50,
				duration: 0.8,
				ease: 'power2.in'
			})
				.from(primaryTitle, {
					opacity: 0,
					y: 50,
					duration: 0.8,
					ease: 'power2.in'
				})
				.from(primaryIcons, {
					opacity: 0,
					scale: 0.2,
					y: 40,
					ease: 'back.out(2)',
					stagger: 0.2,
					duration: 1
				})
				.from(secondaryTitle, {
					opacity: 0,
					y: -20,
					duration: 0.2,
					ease: 'power2.in'
				})
				.from(secondaryIcons, {
					opacity: 0,
					scale: 0.2,
					y: 40,
					ease: 'back.out(2)',
					stagger: 0.2,
					duration: 1
				})
				.from(toolTitle, {
					opacity: 0,
					y: -20,
					duration: 0.2,
					ease: 'power2.in'
				})
				.from(toolIcons, {
					opacity: 0,
					scale: 0.2,
					y: 40,
					ease: 'back.out(2)',
					stagger: 0.2,
					duration: 1
				});
		}, container);

		ScrollTrigger.refresh();

		return () => ctx.revert();
	});
</script>

<div id="tech" class="flex h-screen w-full items-center justify-center px-8" bind:this={container}>
	<div class="grid w-full max-w-160 grid-cols-1 grid-rows-1 place-items-center">
		<div bind:this={title} class="z-10 col-start-1 row-start-1 text-center">
			<TextHighlight text="Tech" size="text-5xl sm:text-6xl" />
		</div>
		<div class="col-start-1 row-start-1 flex max-w-180 flex-col gap-6">
			<div bind:this={primaryTitle} class="space-x-2 text-center">
				<TextHighlight text="Primary Tech" size="text-4xl sm:text-5xl" />
			</div>
			<div class="flex flex-wrap items-center justify-center gap-6">
				{#each data.primary as skill, i}
					<div class="flex w-18 items-center justify-center" bind:this={primaryIcons[i]}>
						<img
							src="https://skillicons.dev/icons?i={skill}"
							alt={skill}
							class="w-16 transition-transform duration-200 hover:scale-125 md:w-20"
						/>
					</div>
				{/each}
			</div>
			<div bind:this={secondaryTitle} class="space-x-2 text-center">
				<TextHighlight text="Other Tech" size="text-4xl sm:text-5xl" />
			</div>
			<div class="flex flex-wrap items-center justify-center gap-6">
				{#each data.other as skill, i}
					<div class="flex w-18 items-center justify-center" bind:this={secondaryIcons[i]}>
						<img
							src="https://skillicons.dev/icons?i={skill}"
							alt={skill}
							class="w-16 transition-transform duration-200 hover:scale-125 md:w-20"
						/>
					</div>
				{/each}
			</div>
			<div bind:this={toolTitle} class="space-x-2 text-center">
				<TextHighlight text="Tools" size="text-4xl sm:text-5xl" />
			</div>
			<div class="flex flex-wrap items-center justify-center gap-6">
				{#each data.tools as skill, i}
					<div class="flex w-18 items-center justify-center" bind:this={toolIcons[i]}>
						<img
							src="https://skillicons.dev/icons?i={skill}"
							alt={skill}
							class="w-16 transition-transform duration-200 hover:scale-125 md:w-20"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
