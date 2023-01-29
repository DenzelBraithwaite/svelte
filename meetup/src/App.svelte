<script lang="ts">
  import Header from './lib/UI/Header.svelte'
  import MeetupCard from './lib/meetups/MeetupCard.svelte'
  import Button from './lib/UI/Button.svelte'
  import SearchBar from './lib/UI/Search.svelte'

  const meetups = [
        {
            id: 'm1',
            title: 'Men\'s Code Night',
            subtitle: 'Build a landing page in 2 hours',
            description: 'Spend an evening learning the fundamentals of coding, surrounded by like-minded individuals.',
            imageUrl: 'https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/4XolI59CsK1wMCiAfwathv/2130a24167699d727f450eafa2941388/OnlineLearning_SouthAsia_Learning_Indoor_GettyImages-1071652068.jpg?fit=thumb',
            location: '5333 Casgrain Ave, H4R1D7'
        },
        {
            id: 'm2',
            title: 'Women\'s Yoga Night',
            subtitle: 'Learn to Relax in Minutes',
            description: 'Spend an evening doing yoga in a park.',
            imageUrl: 'https://gwinnettmagazine.com/wp-content/uploads/2021/07/yoga2.jpg',
            location: '122 park Ave, J8H2D3'
        },
        {
            id: 'm3',
            title: 'Soccer for All',
            subtitle: 'Enjoy some friendly soccer matches',
            description: 'Enjoy an efternoon playing soccer and soaking in vitamin D.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Warminster_Community_Park_soccer_fields.jpg',
            location: '122 park Ave, J8H2D3'
        }
    ];
</script>

<style>
  .lg-container{
    width: 90%;
    margin: 0 auto;
  }
</style>

<div class="lg-container">
  <SearchBar />
  <Header />
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
</div>