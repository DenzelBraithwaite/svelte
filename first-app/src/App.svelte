<script>
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
  h1 {
    color: purple;
  }
</style>

<h1>Hey, I'm {uppercaseName}.</h1>
<br>
<h1> my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>
<!-- <button on:click="{changeName}">Change Name</button> -->
<input placeholder="enter name" type="text" on:input={nameInput} />
