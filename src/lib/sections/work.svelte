<script lang="ts">
	import TextHighlight from '$lib/components/text_highlight.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import type { WorkItem } from '$lib/types';

	let { data }: { data: WorkItem[] } = $props();

	let container: HTMLDivElement;
	let title: HTMLDivElement;
	let trackerBall: HTMLDivElement;
	let trackBar: HTMLDivElement;
	let trackerDots: HTMLDivElement[] = [];
	let workItems: HTMLDivElement[] = [];

	onMount(() => {
		const ctx = gsap.context(() => {
			gsap.set(workItems, { opacity: 0, y: 50 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: 'top top',
					end: '+=3000',
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
			});

			tl.fromTo(
				trackBar,
				{
					opacity: 0,
					top: -20
				},
				{
					top: 0,
					opacity: 100
				}
			);

			tl.fromTo(
				trackerBall,
				{
					opacity: 0,
					top: -20
				},
				{
					top: 0,
					opacity: 100
				}
			);

			workItems.forEach((item, i) => {
				const dotTop = trackerDots[i]?.offsetTop ?? 0;

				if (i === 0) {
					tl.to(item, {
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease: 'power2.out'
					});
				} else {
					tl.to(
						item,
						{
							opacity: 1,
							y: 0,
							duration: 0.6,
							ease: 'power2.out'
						},
						'<'
					);
				}

				tl.to(
					trackerBall,
					{
						top: dotTop,
						duration: 0.6,
						ease: 'power2.out'
					},
					'<'
				);

				tl.to({}, { duration: 0.4 });

				tl.to(item, {
					opacity: 0,
					y: -40,
					duration: 0.5,
					ease: 'power2.in'
				});
			});

			tl.to(
				trackerBall,
				{
					top: '+=50',
					opacity: 0
				},
				'<'
			);

			tl.to(trackBar, {
				opacity: 0,
				bottom: '+=50'
			});
		}, container);

		ScrollTrigger.refresh();

		return () => ctx.revert();
	});
</script>

<div id="work" class="flex h-screen w-full items-center justify-center px-8" bind:this={container}>
	<div class="grid w-full max-w-160 grid-cols-1 grid-rows-1 place-items-center">
		<div bind:this={title} class="z-10 col-start-1 row-start-1 text-center">
			<TextHighlight text="Work" size="text-5xl sm:text-6xl" />
		</div>
		<div
			class="relative col-start-1 row-start-1 grid w-full max-w-180 grid-cols-1 grid-rows-1 items-center pl-8"
		>
			<div
				class="absolute -left-0.75 z-90 h-2 w-2 scale-125 rounded-full bg-orange-400"
				bind:this={trackerBall}
			></div>
			<div
				bind:this={trackBar}
				class="absolute flex h-full w-0.5 flex-col items-center justify-around rounded-full bg-text-500 brightness-80"
			>
				{#each data as _, i}
					<div bind:this={trackerDots[i]} class="z-80 h-2 w-2 rounded-full bg-text-500"></div>
				{/each}
			</div>
			{#each data as work, i}
				<div bind:this={workItems[i]} class="col-start-1 row-start-1 w-full space-y-4 pl-4">
					<div class="flex flex-row flex-wrap gap-2">
						<TextHighlight text={work.title} size="text-4xl sm:text-5xl md:text-6xl pb-1" />
					</div>
					<div class="sm:text-md pt-2 text-sm text-text-500 brightness-80">
						<div>{work.when}</div>
						<div>{work.company} • {work.country}</div>
					</div>
					<ul class="text-md list-disc sm:text-xl">
						{#each work.points as point}
							<li class="text-orange-400"><div class="text-text-500">{point}</div></li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</div>
