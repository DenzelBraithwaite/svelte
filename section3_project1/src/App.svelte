<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "";
  let title = "";
  let image = "";
  let description = "";
  let submitted = false;

  function addCard() {
    submitted = true;
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
    <input placeholder="Ex: John" type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input placeholder="Ex: Smith" type="text" bind:value={title} id="jobTitle" />
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
    <textarea placeholder="I love chess, coding and coffee" rows="3" bind:value={description} id="desc" />
  </div>
</div>

{#if submitted}
  <ContactCard userName={name} jobTitle={title} {description} userImage={image} />
{/if}

<button on:click={addCard}>Create Card</button>