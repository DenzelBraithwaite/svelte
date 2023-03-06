<script>
    import { createEventDispatcher } from 'svelte';

    export let agreed = false;

    const createEvent = createEventDispatcher();
</script>

<div on:click={() => {createEvent('cancel')}} class="backdrop"></div>
<div class="modal">
    <slot name='header'/>
    <slot name="agree" closeable={agreed}>
        <button on:click={() => {createEvent('close')}} disabled={!agreed}>Close</button>
    </slot>
    <slot name="close"/>
</div>

<style>
    .hidden {
        display: none;
    }

    .backdrop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #00000091;
        z-index: 5;
    }

    .modal {
        position: fixed;
        top: 10vh;
        left: 10%;
        width: 80%;
        max-height: 80vh;
        background-color: #fff;
        color: #444;
        font-weight: bold;
        border-radius: 4px;
        z-index: 10;
        box-shadow: 0 2px 8px #00000033;
        overflow: scroll;
        padding: 20px;
    }

    button {
        color: #fff;
        background-color: #444;
        border: none;
        padding: 10px 20px;
    }
</style>