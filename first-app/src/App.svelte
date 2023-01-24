<script>
  import ContactCard from "./ContactCard.svelte";
  import InputGroup from "./InputGroup.svelte";

  export let name;
  // export let age;
  // let name = 'Kaz';
  // let age = 27;
  let jobTitle = '';
  let description = '';
  let url ='';

  // let uppercaseName; not required!

  $: uppercaseName = name.toUpperCase();

  // function incrementAge() {
  //   age ++;
  // }

  // function changeName() {
  //   name = "Kaz";
  // }

  // Basically 2 way binding
  // function nameInput(event) {
  //   const enteredValue = event.target.value;
  //   name = enteredValue;
  // }
</script>

<style>

* {
  font-family: sans-serif;
}

button {
    font: inherit;
    border: 1px solid #cf0056;
    background: #cf0056;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
    cursor: pointer;
}

button:hover,
button:active {
    background: #e40763;
    border-color: #e40763;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
}

.input-group {
  display: inline-block;
  border: 1px solid black;
  padding: 2px;
  background-color: rgb(72, 226, 226);
  margin-bottom: 1rem;
}
</style>

<InputGroup valueNeeded="name." placeholder="Ex: John" bind:value={name}/>
<InputGroup valueNeeded="job title." placeholder="Ex: Smith" bind:value={jobTitle}/>
<InputGroup
  valueNeeded="image url."
  placeholder="https://media.licdn.com/dms/image/C5603AQFBRKu_6EWQeg/profile-displayphoto-shrink_800_800/0/1656078955408?e=2147483647&v=beta&t=gX8_J4PmYgKMhphzxG9h1l5m5I9VEC1PRkNvDB5j1Ic"
  bind:value={url}
/>

<!-- This one is a text area, didn't feel like modifying InputGroup component -->
<div class="input-group">
  <h4>Enter a short description</h4>
  <textarea placeholder="I love traveling and coding😎" cols=35 rows=5 bind:value={description}/>
</div>

<ContactCard url={url} userName={name} jobTitle={jobTitle} description={description}/>
