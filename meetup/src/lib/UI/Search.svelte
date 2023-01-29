<script>


</script>

<style>
    .input {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.212);
    }
    
    input {
        width: 100%;
        border-top: 1px solid #a00d25b0;
        border-left: 1px solid #a00d25b0;
        border-bottom: 1px solid #a00d25b0;
        border-right: none;
        border-radius: 0.25rem 0 0 0.25rem;
        padding: 0.25rem 0.5rem;
        outline: none;
    }

    #search-icon {
        width: 10%;
        border-top: 1px solid #a00d25b0;
        border-right: 1px solid #a00d25b0;
        border-bottom: 1px solid #a00d25b0;
        border-left: none;
        border-radius: 0 0.25rem 0.25rem 0;
        padding: 0.25rem 0.5rem;
        background-color: #fff;
    }
</style>

<div class="input">
    <input type="text" placeholder="Search for a meetup...">
    <span id="search-icon">🔍</span>
</div>