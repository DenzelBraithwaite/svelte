<script>
    export let value;
    export let id;
    export let title;
    export let subtitle;
    export let address;
    export let email;
    export let imgUrl;
    export let description;
    export let inputType;
    export let cols;
    export let rows;
    export let placeholder;
</script>

<style>
    input {
        width: 90%;
        margin-bottom: 1.25rem;
        border: none;
        border-bottom: 1px solid #a00d26;
    }

    input::placeholder {
        color: rgba(68, 68, 68, 0.548);
    }

    input:focus {
        outline: none;
    }

    textarea {
        resize: none;
        width: 90%;
        margin-bottom: 2rem;
        border: 1px solid #a00d26;
        border-radius: 4px;
        padding: 0.5rem;
    }

    textarea:focus {
        outline: none;
    }

</style>

{#if inputType = 'text'}
    <input on:input value={value} type="text" name="{id}" id="{id}"  placeholder="{placeholder}">
{:else}
    <textarea on:input value={value} name="{id}" id="{id}" cols="{cols}" rows="{rows}"  placeholder="{placeholder}"></textarea>
{/if}