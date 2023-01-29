<script>

</script>

<style>

    form {
        background-color: #d86377;
        padding: 1rem 2rem;
        margin: 0 auto;
        width: 80%;
        border-radius: 1rem;
        text-align: center;
        border: 2px solid #a00d26;
    }

    .form-control {
        display: flex;
        margin-bottom: 0.5rem;
        justify-content: space-between;
        font-weight: bold;
        color: #fff;
        letter-spacing: 0.5px;
    }

    .form-control input {
        background-color: #ffeeee;
        width: 80%;
        padding: 2px 0;
        border: none;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .form-control input:focus {
        background-color: #eed6d6;
        outline: 2px solid #a00d26;
    }

    h2 {
        text-decoration: underline #444;
    }

    .btn-submit {
        text-decoration: none;
        color: #444;
        font-weight: 700;
        border: 2px solid #444;
        border-radius: 1rem;
        padding: 0.25rem 0.5rem;
        font-size: 14px;
        letter-spacing: 0;
        background-color: #eed6d6;
    }

    .btn-submit:hover,
    .btn-submit:active {
        color: #444;
        font-weight: bold;
        background-color: #f8ebeb;
        cursor: pointer;
    }
</style>

<form action="./App.svelte">
    <h2>Create Meetup</h2>
    <br>
    <div class="form-control">
      <label for="">Title</label>
      <input type="text">
    </div>

    <div class="form-control">
      <label for="">Subtitle</label>
      <input type="text">
    </div>

    <div class="form-control">
      <label for="">Description</label>
      <input type="text">
    </div>

    <div class="form-control">
      <label for="">Address</label>
      <input type="text">
    </div>
    
    <div class="form-control">
      <label for="">Image Url</label>
      <input type="text">
    </div>

    <div class="form-control">
      <label for="">Email</label>
      <input type="text">
    </div>

    <input type="submit" class="btn-submit">
  </form>