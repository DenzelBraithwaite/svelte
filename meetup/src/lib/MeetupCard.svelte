<script>
    import Button from './Button.svelte'

    export let meetId;
    export let title;
    export let subtitle;
    export let imgUrl;
    export let description;
    export let location;
</script>

<style>
    article {
        position: relative;
        margin: 5rem 0;
        background-color: #0000001a;
        border: 1px solid #a00d2565;
        border-radius: 0.25rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.199);
    }

    article img {
        border-radius: 0.25rem 0.25rem 0 0;
    }

    header h1,
    header h2 {
        text-shadow: 0 2px #0000004d
    }

    header h1 {
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: #fff;
        font-size: 2rem;
    }

    header h2 {
        position: absolute;
        top: 3.5rem;
        left: 1rem;
        color: #fff;
        font-size: 1rem;
    }

    .image img{
        width: 100%;
        height: 50vh;
    }

    footer {
        padding: 0.5rem 0;
        margin-left: 1rem;
    }
</style>

<article>
    <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </header>
        <div class="image">
            <img src={imgUrl} alt={description}>
        </div>
        <div class="content">
            <p></p>
        </div>
        <footer>
            <Button text="Show Details" btnClass="bg-red"/>
            <Button text="Favourite" btnClass="bg-red"/>
        </footer>
</article>