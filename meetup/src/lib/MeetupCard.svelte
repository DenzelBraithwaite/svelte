<script>
    import Button from './Button.svelte'

    const meetups = [
        {
            id: 'm1',
            title: 'Men\'s Code Night',
            subtitle: 'Build a landing page in 2 hours',
            description: 'Spend an evening learning the fundamentals of coding, surrounded by like-minded individuals.',
            imageUrl: 'https://images.squarespace-cdn.com/content/v1/593040b8414fb5fe9c94eac5/1530995349369-98KY66Z3QY909YNQW3NX/asc3_zps288d94f7.jpg?format=300w',
            location: '5333 Casgrain Ave, H4R1D7'
        },
        {
            id: 'm2',
            title: 'Women\'s Yoga Night',
            subtitle: 'Learn to Relax in Minutes',
            description: 'Spend an evening doing yoga in a park.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmFbgS9RgsaoxMVO4GYxjH9RgpyvEXTeGCQcfZRpElUdv_UInT_EwxHU834b517MKf6M&usqp=CAU',
            location: '122 park Ave, J8H2D3'
        }
    ];
</script>

<style>
article {
    margin-top: 100px;
}
</style>

{#each meetups as meet, i (meet.id)}
    <article>
        <header>
            <h1>{meet.title}</h1>
            <h2>{meet.subtitle}</h2>
        </header>
            <div class="image">
                <img src={meet.imageUrl} alt={meet.description}>
            </div>
            <div class="content">
                <p></p>
            </div>
            <footer>
                <Button text="Show Details" btnClass="bg-red"/>
                <Button text="Favourite" btnClass="bg-blue"/>
            </footer>
    </article>
{/each}