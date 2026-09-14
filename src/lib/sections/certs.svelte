<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import TextHighlight from '$lib/components/text_highlight.svelte';
	import Link from '$lib/components/link.svelte';
	import Cert from '$lib/components/cert.svelte';
	import type { CertItem } from '$lib/types';

	let { data }: { data: CertItem[] } = $props();

	gsap.registerPlugin(ScrollTrigger);

	let container: HTMLDivElement;
	let title: HTMLDivElement;
	let endMessage: HTMLDivElement;
	let certsGroup: HTMLDivElement;
	let certs: HTMLDivElement[] = [];

	onMount(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: 'top top',
					end: `+=${data.length * 1200}`,
					pin: true,
					scrub: 0.8,
					anticipatePin: 1
				}
			});

			tl.to(title, {
				opacity: 0,
				scale: 0.7,
				y: -50,
				duration: 0.8,
				ease: 'power2.in'
			});

			certs.forEach((card, i) => {
				tl.from(card, {
					y: '100vh',
					opacity: 0,
					duration: 1,
					ease: 'power1.out'
				});

				if (i > 0) {
					for (let j = 0; j < i; j++) {
						tl.to(
							certs[j],
							{
								scale: 1 - (i - j) * 0.04,
								y: -(i - j) * 20,
								duration: 1
							},
							'<'
						);
					}
				}
			});

			tl.to(certsGroup, {
				opacity: 0,
				scale: 0.7,
				y: -50,
				duration: 0.8,
				ease: 'power2.in'
			});

			tl.from(endMessage, {
				opacity: 0,
				scale: 0.7,
				y: -50,
				duration: 0.8,
				ease: 'power2.in'
			});

			tl.to(endMessage, {
				duration: 1
			});
		}, container);

		ScrollTrigger.refresh();

		return () => ctx.revert();
	});
</script>

<div id="certs" class="flex h-screen w-full items-center justify-center px-4" bind:this={container}>
	<div class="grid w-full max-w-200 grid-cols-1 grid-rows-1 place-items-center">
		<div bind:this={title} class="z-10 col-start-1 row-start-1 text-center">
			<TextHighlight text="Certificates" size="text-5xl sm:text-6xl" />
		</div>

		<div
			class="col-start-1 row-start-1 grid w-full grid-cols-1 grid-rows-1 place-items-center"
			bind:this={certsGroup}
		>
			{#each data as cert, i}
				<div
					bind:this={certs[i]}
					class="col-start-1 row-start-1 flex w-full justify-center"
					style:z-index={i + 1}
				>
					<Cert title={cert.title} cert={cert.image} />
				</div>
			{/each}
		</div>

		<div bind:this={endMessage} class="z-20 col-start-1 row-start-1 space-x-1 text-center">
			<Link
				iconSize="w-8 h-8"
				size="text-xl sm:text-3xl md:text-4xl"
				text="See my 19+ certificates on LinkedIn..."
				link="https://www.linkedin.com/in/alex-betts/"
			/>
		</div>
	</div>
</div>
