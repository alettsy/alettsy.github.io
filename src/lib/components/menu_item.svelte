<script lang="ts">
	import gsap from 'gsap';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

	gsap.registerPlugin(ScrollToPlugin);

	let { title, url } = $props();

	function _onTap() {
		gsap.to(window, { scrollTo: url });
	}
</script>

<button onclick={_onTap} class="cursor-pointer font-bold text-text-500 hover:brightness-80">
	{title}
</button>
