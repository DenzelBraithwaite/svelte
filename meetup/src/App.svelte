<script lang="ts">
  import Header from './lib/UI/Header.svelte'
  import MeetupGrid from './lib/meetups/MeetupGrid.svelte'
  import Button from './lib/UI/Button.svelte'
  import SearchBar from './lib/UI/Search.svelte'
  // import MeetupForm from './lib/meetups/MeetupForm.svelte'

  let title = '';
  let subtitle = '';
  let address = '';
  let email = '';
  let imgUrl = '';
  let description = '';

  let meetups = [
        {
            id: 'm1',
            title: 'Men\'s Code Night',
            subtitle: 'Build a landing page in 2 hours',
            address: '5333 Casgrain Ave, H4R1D7',
            email: 'garfunkle@email.com',
            imageUrl: 'https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/4XolI59CsK1wMCiAfwathv/2130a24167699d727f450eafa2941388/OnlineLearning_SouthAsia_Learning_Indoor_GettyImages-1071652068.jpg?fit=thumb',
            description: 'Spend an evening learning the fundamentals of coding, surrounded by like-minded individuals.'
        },
        {
            id: 'm2',
            title: 'Women\'s Yoga Night',
            subtitle: 'Learn to Relax in Minutes',
            address: '122 park Ave, J8H2D3',
            email: 'dawda@email.com',
            imageUrl: 'https://gwinnettmagazine.com/wp-content/uploads/2021/07/yoga2.jpg',
            description: 'Spend an evening doing yoga in a park.'
        },
        {
            id: 'm3',
            title: 'Soccer for All',
            subtitle: 'Enjoy some friendly soccer matches',
            address: '122 park Ave, J8H2D3',
            email: 'email@email.com',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Warminster_Community_Park_soccer_fields.jpg',
            description: 'Enjoy an efternoon playing soccer and soaking in vitamin D.'
        }
    ];

    function addMeetup() {
        meetups = [
            {   
                id: Math.random().toString(),
                title: title,
                subtitle: subtitle,
                address: address,
                email: email,
                imgUrl: imgUrl,
                description: description
            }, ...meetups
        ]
    }
</script>

<style>
  .lg-container{
    width: 80%;
    margin: 0 auto;
  }

  main {
    margin-top: 6rem;
  }

  form {
        margin: 2rem auto;
        width: 400px;
        border-radius: 1rem;
        text-align: center;
        background-color: #fff;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.212);
    }

    form h2 {
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

<div class="lg-container">
  <header>
    <Header />
  </header>
  
  <main>
    <SearchBar />
    <!-- <MeetupForm /> -->
    <form on:submit|preventDefault={addMeetup}>
      <h2>Create Meetup</h2>
      <input bind:value={title} id="title" type="text" placeholder="Title">
      <input bind:value={subtitle} id="subtitle" type="text" placeholder="Subtitle">
      <input bind:value={address} id="address" type="text" placeholder="Address">
      <input bind:value={email} id="email" type="text" placeholder="Email address">
      <input bind:value={imgUrl} id="imgUrl" type="text" placeholder="Image Url">
      <textarea bind:value={description} id="description" placeholder="Description"></textarea>
      <input type="submit" class="btn-submit">
  </form>
    <MeetupGrid {meetups}/>
  </main>
</div>