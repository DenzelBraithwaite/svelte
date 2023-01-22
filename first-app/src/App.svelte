<script>
    import ContactCard from "./ContactCard.svelte";

  export let name;
  // let name = "Kaz";
  
  // export let age;
  let age = 27;

  // let uppercaseName; not required!

  $: uppercaseName = name.toUpperCase();

  function incrementAge() {
    age ++;
  }

  function changeName() {
    name = "Kaz";
  }

  function nameInput(event) {
    const enteredValue = event.target.value;
    name = enteredValue;
  }
</script>

<style>
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

</style>

<h1>Hey, I'm {uppercaseName}.</h1>
<br>
<h1> my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>
<!-- <button on:click="{changeName}">Change Name</button> -->
<input placeholder="enter name" type="text" on:input={nameInput} />
<ContactCard />
