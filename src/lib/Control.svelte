<script>
    export let text;
    export let onclick;
</script>

<button class="control" on:click={onclick}>
    <span class="text">
        {text}
    </span>
</button>

<style>
    .control {
        background-color: var(--accent-color-darker);
        border-radius: 8px;
        border: none;
        padding: 0;
        margin: 5px;
    }

    .control .text {
        display: block;
        padding: 10px 16px;
        border-radius: 8px;
        font-size: 1.3rem;
        background: var(--accent-color);
        color: var(--gray-color);
        transform: translateY(-6px);
    }

    .control:hover .text {
        cursor: pointer;
    }

    .control:active .text {
        transform: translateY(0px);
        background: var(--accent-color-darker);
    }
</style>