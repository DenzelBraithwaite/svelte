<script>
    export let text;
    export let btnClass;
</script>

<style>
    button {
        border: none;
        border-radius: 100px;
        color: #fff;
        padding: 0.5rem 1rem;
        box-shadow: 2px 0 8px #0000001e;
    }

    button:hover,
    button:active {
        cursor: pointer;
    }

    .bg-red {
        background-color: #A00D26;
    }

    .bg-red:hover,
    .bg-red:active {
        background-color: #940d23;
    }

    .bg-blue {
        background-color: #170da0;
    }
</style>

<button class="{btnClass}">{text}</button>