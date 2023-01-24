<script>
export let value;
export let valueNeeded; // For input label
export let placeholder;

</script>

<style>

.input-group {
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    display: inline-block;
    border: 1px solid black;
    padding: 2px;
    background-color: rgb(72, 226, 226);
    margin-bottom: 1rem;
    width: 20%;
}

input {
    width: 90%;
}

</style>


<div class="input-group">
    <p>Enter your {valueNeeded}</p>
    <input placeholder={placeholder} type="text" bind:value={value}>
</div>
<br>

