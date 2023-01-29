<script>

</script>

<style>

    form {
        margin: 2rem auto;
        width: 400px;
        border-radius: 1rem;
        text-align: center;
        background-color: #fff;
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
    <input type="text" placeholder="Title">
    <input type="text" placeholder="Subtitle">
    <input type="text" placeholder="Description">
    <input type="text" placeholder="Address">
    <input type="text" placeholder="Image Url">
    <input type="text" placeholder="Email address">
    <input type="submit" class="btn-submit">
  </form>