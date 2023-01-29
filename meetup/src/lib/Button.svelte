<script>
    export let text;
    export let btnClass;
</script>

<style>
    button {
        font-weight: 700;
        display: inline-block;
        border: none;
        border-radius: 1rem;
        color: #fff;
        padding: 0.5rem 1rem;
        /* box-shadow: 2px 0 8px #00000049; */
    }

    button:hover,
    button:active {
        cursor: pointer;
    }

    .bg-red {
        background-color: #b81530;
        box-shadow: 2px 0 8px #a00d2556;
    }

    .bg-red:hover,
    .bg-red:active {
        background-color: #a3132b;
        
    }

    .bg-blue {
        background-color: #2fa884;
        box-shadow: 2px 0 8px #00000049;
    }

    .bg-blue:hover,
    .bg-blue:active {
        background-color: #25886a;
    }
</style>

<button class="{btnClass}">{text}</button>