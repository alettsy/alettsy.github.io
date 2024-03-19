<script>
	import controls from '../assets/controls.json';
	import {createEventDispatcher} from "svelte";
	import Control from './Control.svelte';

	const dispatch = createEventDispatcher();

	function togglePopup(control) {
		dispatch('toggle-popup', {
			control
		})
	}
</script>

<div class="controls">
	{#each controls as control}
		<Control text={control.name} onclick={() => togglePopup(control)}/>
	{/each}
</div>

<style>
	@media only screen and (min-width: 480px) {
		.controls {
			display: flex;
			justify-content: center;
		}
	}
</style>
