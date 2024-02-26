<script>
	import Certificates from "./Certificates.svelte";

	export let data;
	export let show;

	import {createEventDispatcher} from "svelte";
	import Control from "./Control.svelte";
	import WorkHistory from "./WorkHistory.svelte";

	const dispatch = createEventDispatcher();

	function toggle() {
		dispatch('toggle-popup', {
			control: data,
		})
	}
</script>

<div class="popup" class:show-popup={show}>
	<div class="close">
		<Control text="Close" onclick={toggle}/>
	</div>
	<div class="content">
		{#if data.type == "work-history"}
			<WorkHistory jobs={data.data.jobs}/>
		{:else if data.type === 'certificates'}
			<Certificates certificates={data.data.certificates}/>
		{:else}
			<p>Unable to show popup</p>
		{/if}
	</div>
</div>

<style>
	.popup {
		position: fixed;
		height: 100%;
		width: 100%;
		background-color: var(--gray-color);
		transform: translateX(-50%);
		transition: top 150ms ease;
		top: 100%;
		left: 50%;
	}

	.show-popup {
		top: 0;
	}

	.close {
		position: absolute;
		right: 10px;
		top: 20px;
		z-index: 1;
	}

	/* TABLET */
	@media only screen and (min-width: 480px) {
		.popup {
			width: 71vw;
		}
	}

	/* DESKTOP */
	@media only screen and (min-width: 1000px) {
		.popup {
			width: 61vw;
		}
	}

	/* LARGE DESKTOP */
	@media only screen and (min-width: 1200px) {
		.popup {
			width: 51vw;
		}
	}
</style>