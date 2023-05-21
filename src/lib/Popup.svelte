<script>
    export let data;
    export let show;

    import { createEventDispatcher } from "svelte";
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
        <Control text="Close" onclick={toggle} />
    </div>
    <div class="content">
        {#if data.type == "work-history"}
            <WorkHistory jobs={data.data.jobs} />
        {:else}
            <p>Unable to show popup</p>
        {/if}
    </div>
</div>

<style>
    .popup {
        position: fixed;
        height: 101%;
        width: 100%;
        background-color: var(--gray-color);
        transform: translate(-2%, 101%);
        transition: transform 150ms ease;
    }

    .show-popup {
        transform: translate(-2%, -2%);
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
            transform: translate(19%, 101%);
        }

        .show-popup {
            transform: translate(19%, -2%);
        }
    }

    /* DESKTOP */
    @media only screen and (min-width: 1000px) {
        .popup {
            width: 51vw;
            transform: translate(47%, 101%);
        }

        .show-popup {
            transform: translate(47%, -2%);
        }
    }

    /* LARGE DESKTOP */
    @media only screen and (min-width: 1200px) {
        .popup {
            width: 41vw;
            transform: translate(71%, 101%);
        }

        .show-popup {
            transform: translate(71%, -2%);
        }
    }
</style>