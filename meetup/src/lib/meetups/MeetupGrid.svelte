<script>
    import MeetupCard from "./MeetupCard.svelte";
    export let meetups;
</script>

<style>

</style>

<section id="meetups">
    {#each meetups as meet, i (meet.id)}
    <MeetupCard
    meetId="{meet.id}"
    title="{meet.title}"
    subtitle="{meet.subtitle}"
    description="{meet.description}"
    imgUrl="{meet.imageUrl}"
    location="{meet.location}"/>
    {/each}
  </section>