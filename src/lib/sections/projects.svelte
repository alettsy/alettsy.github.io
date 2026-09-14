<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import Project from '$lib/components/project.svelte';
	import TextHighlight from '$lib/components/text_highlight.svelte';
	import Link from '$lib/components/link.svelte';
	import type { ProjectItem } from '$lib/types';

	let { data }: { data: ProjectItem[] } = $props();

	gsap.registerPlugin(ScrollTrigger);

	let container: HTMLDivElement;
	let title: HTMLDivElement;
	let endMessage: HTMLDivElement;
	let projectsGroup: HTMLDivElement;
	let projects: HTMLDivElement[] = [];

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

			projects.forEach((card, i) => {
				tl.from(card, {
					y: '100vh',
					opacity: 0,
					duration: 1,
					ease: 'power1.out'
				});

				if (i > 0) {
					for (let j = 0; j < i; j++) {
						tl.to(
							projects[j],
							{
								scale: 1 - (i - j) * 0.04,
								y: -(i - j) * 15,
								duration: 1
							},
							'<'
						);
					}
				}
			});

			tl.to(projectsGroup, {
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

<div
	id="projects"
	class="flex h-screen w-full items-center justify-center px-4"
	bind:this={container}
>
	<div class="grid w-full max-w-250 grid-cols-1 grid-rows-1 place-items-center">
		<div bind:this={title} class="z-10 col-start-1 row-start-1 text-center">
			<TextHighlight text="Projects" size="text-5xl sm:text-6xl pb-1" />
		</div>

		<div
			class="col-start-1 row-start-1 grid w-full grid-cols-1 grid-rows-1 place-items-center"
			bind:this={projectsGroup}
		>
			{#each data as project, i}
				<div
					bind:this={projects[i]}
					class="col-start-1 row-start-1 flex w-full justify-center"
					style:z-index={i + 1}
				>
					<Project
						title={project.title}
						description={project.description}
						link={project.link}
						tags={project.tags}
					/>
				</div>
			{/each}
		</div>

		<div bind:this={endMessage} class="z-20 col-start-1 row-start-1 space-x-1 text-center">
			<Link
				iconSize="w-8 h-8"
				size="text-2xl sm:text-3xl md:text-4xl"
				text="See my projects on Github..."
				link="https://www.github.com/alettsy"
			/>
		</div>
	</div>
</div>
