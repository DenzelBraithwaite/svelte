<script>
    export let value = null;
    export let id = null;
    export let title = 'title';
    export let subtitle = 'subtitle';
    export let address = null;
    export let email = null;
    export let imgUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
    export let description = 'description';
    export let inputType = null;
    export let cols = 10;
    export let rows = 3;
    export let placeholder = null;
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

{#if inputType === 'text'}
    <input on:input value={value} type="text" name="{id}" id="{id}"  placeholder="{placeholder}">
{:else}
    <textarea on:input value={value} name="{id}" id="{id}" cols="{cols}" rows="{rows}"  placeholder="{placeholder}"></textarea>
{/if}