<script>
    import Button from '../UI/Button.svelte'

    export let meetId;
    export let title;
    export let subtitle;
    export let imgUrl;
    export let description;
    export let location;
    export let email;
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
    header h2,
    header h3 {
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

    header h3 {
        position: absolute;
        top: 5rem;
        left: 1rem;
        color: #fff;
        font-size: 0.9rem;
    }

    .image img{
        width: 100%;
        height: 400px;
    }

    footer {
        padding: 0.5rem 0;
        margin-left: 1rem;
    }

    article > footer a {
        text-decoration: none;
        color: #b81530;
        font-weight: 700;
        border: 2px solid #b81530;
        border-radius: 1rem;
        padding: 0.25rem 0.5rem;
        font-size: 14px;
        letter-spacing: 0;
    }

    article > footer a:hover,
    article > footer a:hover {
        color: #b81530;
        font-weight: bold;
        text-decoration: underline;
    }
</style>

<article>
    <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{location}</h3>
    </header>
        <div class="image">
            <img src={imgUrl} alt={description}>
        </div>
        <div class="content">
            <p></p>
        </div>
        <footer>
            <a href="mailto:{email}">Contact</a>
            <Button text="Show Details" btnClass="bg-red"/>
            <Button text="Favourite" btnClass="bg-red"/>
        </footer>
</article>