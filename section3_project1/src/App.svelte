<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "";
  let title = "";
  let image = "";
  let description = "";
  let formState = 'empty';
  let contactCards = [];

  function addCard() {
    if (
      name.trim().length === 0 ||
      title.trim().length === 0 ||
      image.trim().length === 0 ||
      description.trim().length === 0
    ) {
      formState = 'invalid';
    } else {
      formState = 'valid';
        contactCards = [...contactCards, {
        id: Math.random(),
        name: name,
        title: title,
        image: image,
        description: description
      }]
    }
  }

  function deleteFirst() {
    contactCards = contactCards.slice(1);
  }

  function deleteLast() {
    contactCards = contactCards.slice(0, -1);
  }
</script>

<style>
  #form {
    width: 30rem;
    max-width: 100%;
  }
</style>

<div id="form">
  <div class="form-control">
    <label for="userName">User Name</label>
    <input placeholder="Ex: Denzel" type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input placeholder="Ex: Technician" type="text" bind:value={title} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input placeholder="https://media.istockphoto.com/id/642809804"
    type="text"
    bind:value={image}
    id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea placeholder="Troubleshooting computer problems." rows="3" bind:value={description} id="desc" />
  </div>
</div>

<button on:click={addCard}>Create Card</button>
<button on:click={deleteFirst}>Delete First</button>
<button on:click={deleteLast}>Delete Last</button>
{#if formState === 'invalid'}
  <h1 style="background-color: red">Invalid entry!</h1>
{/if}

{#each contactCards as cc, i (cc.id)}
  <h2>#{i}</h2>
<ContactCard
  userName={cc['name']}
  jobTitle={cc['title']}
  userImage={cc['image']} 
  description={cc['description']}/>
{:else}
<ContactCard
  userName="Denzel"
  jobTitle="Technician"
  description="Troubleshooting computer problems."
  userImage="https://memorial-assets.frontrunnerpro.com/include/site_storage/473/DeathRecordStub/4628719/converted/9d54ca0e7ad0bccfad227614ab235a99.png" />
{/each}