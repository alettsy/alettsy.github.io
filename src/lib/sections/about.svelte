<script lang="ts">
	import FrenchText from '$lib/components/french_text.svelte';
	import TextHighlight from '$lib/components/text_highlight.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import type { AboutItem } from '$lib/types';

	let { data }: { data: AboutItem[] } = $props();

	gsap.registerPlugin(ScrollTrigger);

	let container: HTMLDivElement;
	let title: HTMLDivElement;
	let body: HTMLDivElement;

	onMount(() => {
		const ctx = gsap.context(() => {
			const words = body.querySelectorAll('.anim-word');

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: 'top top',
					end: '+=2200',
					pin: true,
					scrub: 0.8
				}
			});

			tl.to(title, {
				opacity: 0,
				scale: 0.7,
				y: -50,
				duration: 0.8,
				ease: 'power2.in'
			})

				.from(
					words,
					{
						y: -80,
						opacity: 0,
						rotate: () => (Math.random() - 0.5) * 20,
						scale: 1.2,
						stagger: 0.05,
						ease: 'back.out(1.7)',
						duration: 1
					},
					'>-0.2'
				);
		}, container);

		ScrollTrigger.refresh();

		return () => ctx.revert();
	});
</script>

<div id="about" class="flex h-screen w-full items-center justify-center px-4" bind:this={container}>
	<div class="grid w-full max-w-200 grid-cols-1 grid-rows-1 place-items-center">
		<div bind:this={title} class="z-10 col-start-1 row-start-1 text-center">
			<TextHighlight text="About" size="text-5xl sm:text-6xl" />
		</div>

		<div
			bind:this={body}
			class="col-start-1 row-start-1 flex flex-wrap justify-center gap-1.5 text-xl text-text-500 sm:text-2xl md:text-3xl"
		>
			{#each data as text}
				{#if text.type === 'highlight'}
					<TextHighlight size="text-xl text-text-500 sm:text-2xl md:text-3xl" text={text.content} />
				{:else if text.type == 'french'}
					<FrenchText text={text.content}></FrenchText>
				{:else}
					{#each text.content.split(' ') as word}
						<span class="anim-word">{word}</span>
					{/each}
				{/if}
			{/each}
		</div>
	</div>
</div>
