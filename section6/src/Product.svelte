<script>
    import { createEventDispatcher} from 'svelte';

    export let title;
    export let cost;

    const createEvent = createEventDispatcher();

    function addToCart() {
        createEvent('add-to-cart', {id: 'p1'});
    }

    function showModal() {
        createEvent('open-modal');
    }
</script>
  
<article>
<h1>{title}</h1>
<h1>${cost}</h1>
<div class="btn-wrapper">
    <button on:click={showModal}>Open</button>
    <!-- <button on:click={addToCart}>Add to Cart</button> -->
    <!-- <button on:click={() => {createEvent('delete', {'p1': 'details'})}}>Delete</button> -->
</div>
</article>

<style>
    article {
        position: relative;
        padding: 20px;
        background-color: #f0fffb;
        box-shadow: 0 2px 8px #37dfb5;
        outline: 2px solid #37dfb5;
        width: 400px;
        height: 300px;
        border-radius: 4px;
        margin: 0 auto;
        margin-top: 100px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }

    button {
        width: 40%;
        background-color: #37dfb5;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        box-shadow: 0 2px 8px #00000023;
    }

    button:hover {
        cursor: pointer;
        background-color: #3bebbf;
    }

    button:active {
        cursor: pointer;
        background-color: #30c5a0;
    }

    h1 {
        margin-bottom: 10px;
        color: #37dfb5;
    }
</style>