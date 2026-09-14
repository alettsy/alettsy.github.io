<script lang="ts">
	import TextHighlight from '$lib/components/text_highlight.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import SocialLink from '$lib/components/social_link.svelte';

	let body: HTMLDivElement;

	onMount(() => {
		const words = body.querySelectorAll('.anim-word');

		gsap.from(words, {
			y: -80,
			x: -20,
			rotate: () => -5,
			opacity: 0,
			duration: 2,
			stagger: 0.25,
			ease: 'back.out(1.7)'
		});
	});
</script>

<div
	id="home"
	class="flex min-h-dvh w-full flex-col items-center justify-center p-4"
	bind:this={body}
>
	<div class="w-full max-w-2xl space-y-6">
		<h1 class="mono-font text-8xl font-bold text-text-500">
			<span class="anim-word">ALEX</span> <span class="anim-word">BETTS</span>
		</h1>
		<h1 class="flex flex-wrap gap-4">
			<TextHighlight size="text-5xl sm:text-6xl" text="Software Developer" />
		</h1>
		<div class="flex w-full justify-end gap-2 pt-10">
			<SocialLink link="https://github.com/alettsy" icon="github" />
			<SocialLink link="https://www.linkedin.com/in/alex-betts/" icon="linkedin" />
			<SocialLink link="/files/alex_betts_cv.pdf" icon="cv" />
		</div>
	</div>
</div>

<style>
	.anim-word {
		display: inline-block;
	}
</style>
