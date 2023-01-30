<script>
    import TextInput from '../UI/TextInput.svelte';

    let title = '';
    let subtitle = '';
    let address = '';
    let email = '';
    let imgUrl = '';
    let description = '';
    export let meetups;
    
</script>

<style>

    form {
        margin: 2rem auto;
        width: 400px;
        border-radius: 1rem;
        text-align: center;
        background-color: #fff;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.212);
    }

    form h2 {
        background-color: #a00d26;
        border-radius: 0.5rem 0.5rem 0 0;
        padding: 1rem 0;
        color: #fff;
        margin-bottom: 2rem;
    }

    .btn-submit {
        display: inline-block;
        margin: 1rem auto;
        width: 90%;
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        border: none;
        border-radius: 1rem;
        padding: 0.5rem 0.5rem;
        font-size: 14px;
        letter-spacing: 0;
        background-color: #a00d26;
    }

    .btn-submit:hover,
    .btn-submit:active {
        background-color: #911026;
        cursor: pointer;
    }
</style>

<form on:submit|preventDefault>
    <h2>Create Meetup</h2>
    <TextInput  on:input={(event) => {title = event.target.value}} value={title}  id="title" inputType="text" placeholder="Title"/>
    <TextInput  on:input={(event) => {subtitle = event.target.value}} value={subtitle}  id="subtitle" inputType="text" placeholder="Subtitle"/>
    <TextInput  on:input={(event) => {address = event.target.value}} value={address}  id="address" inputType="text" placeholder="Adress"/>
    <TextInput  on:input={(event) => {email = event.target.value}} value={email}  id="email" inputType="text" placeholder="Email"/>
    <TextInput  on:input={(event) => {imgUrl = event.target.value}} value={imgUrl}  id="img-url" inputType="text" placeholder="Image Url"/>

    <!-- Description, textarea -->
    <TextInput
        rows=3
        inputType="textarea"
        on:input={(event) => {description = event.target.value}}
        value={description} 
        id="description"
        placeholder="Enter a description..."/>
    <input type="submit" class="btn-submit">
</form>