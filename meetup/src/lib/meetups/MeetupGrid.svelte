<script>
    import MeetupCard from "./MeetupCard.svelte";
    export let meetups;

</script>

<style>
    #meetups {
        margin: 5rem 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        row-gap: 3rem;
    }

    @media (max-width: 1100px) {
        #meetups {
            margin: 5rem 0;
            display: grid;
            grid-template-columns: 1fr;
        }
    }
</style>

<section id="meetups">
    {#each meetups as meet, i (meet.id)}
    <MeetupCard
    meetId="{meet.id}"
    title="{meet.title}"
    subtitle="{meet.subtitle}"
    description="{meet.description}"
    imgUrl="{meet.imageUrl}"
    address="{meet.address}"/>
    {/each}
  </section>