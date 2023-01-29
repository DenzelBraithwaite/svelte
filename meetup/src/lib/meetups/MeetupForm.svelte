<script>
    export let title;
    export let subtitle;
    export let description;
    export let address;
    export let imgUrl;
    export let email;
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

    h2 {
        background-color: #a00d26;
        border-radius: 0.5rem 0.5rem 0 0;
        padding: 1rem 0;
        color: #fff;
        margin-bottom: 2rem;
    }

    form input {
        width: 90%;
        margin-bottom: 1.25rem;
        border: none;
        border-bottom: 1px solid #a00d26;
    }

    form input::placeholder {
        color: rgba(68, 68, 68, 0.548);
    }

    form input:focus {
        outline: none;
    }

    form textarea {
        resize: none;
        width: 90%;
        margin-bottom: 2rem;
        border: 1px solid #a00d26;
        border-radius: 4px;
        padding: 0.5rem;
    }

    form textarea:focus {
        outline: none;
    }

    .btn-submit {
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

<form action="#">
    <h2>Create Meetup</h2>
    <input bind:value={title} id="title" type="text" placeholder="Title">
    <input bind:value={subtitle} id="subtitle" type="text" placeholder="Subtitle">
    <input bind:value={address} id="address" type="text" placeholder="Address">
    <input bind:value={email} id="email" type="text" placeholder="Email address">
    <input bind:value={imgUrl} id="imgUrl" type="text" placeholder="Image Url">
    <textarea bind:value={description} id="description" placeholder="Description"></textarea>
    <input type="submit" class="btn-submit">
  </form>