<script lang="ts">
  let fName;
  let lName;
  let age;
  let isLoading = false;
  let teachers = [];

  function addTeacher() {
    isLoading = true;
    const teacher =   {
    firstName: fName,
    lastName: lName,
    age: age
  };

    teachers = [...teachers, teacher]

  fetch('https://svelte-api-testing-default-rtdb.firebaseio.com/tests.json', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(teacher),
  })
  .then(response => {
    isLoading = false;
    if (!response.ok) {
      throw new Error('Failed');
    }
  }).catch(error => {
    isLoading = false;
    console.log(error);
  })
  }

  // Load database data
  fetch('https://svelte-api-testing-default-rtdb.firebaseio.com/tests.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed!');
    }
    return response.json()
  })
  .then(data => {
    let values = Object.values(data);
    // let keys = Object.keys(data);
    console.log('Values:');
    console.log(values);
    console.log('');
    values.forEach((teacher) => {
      teachers = [...teachers, teacher]
    })
    })
  .catch(error => {
    console.log(error)})
</script>

<main>
  
  <h1>Teacher Form</h1>
  <div class="form-control">
    <label for="">First Name</label>
    <input type="text" bind:value={fName}>
  </div>
  <div class="form-control">
    <label for="">Last Name</label>
    <input type="text" bind:value={lName}>
  </div>
  <div class="form-control">
    <label for="">Age</label>
    <input type="text" bind:value={age}>
  </div>
  <button on:click={addTeacher}>Submit</button>
  
  {#if isLoading}
    <p class="loading">Loading . . .</p>
  {:else}
    {#each teachers as teacher}
    <div class="teacher-card">
      <p>First Name: {teacher.firstName}</p>
      <p>Last Name: {teacher.lastName}</p>
      <p>Age: {teacher.age}</p>
    </div>
    {/each}
  {/if}
</main>

<style>
  .loading {
    color: #49bb58;
  }

  main {
    position: relative;
    width: 800px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 4px;
  }

  .form-control {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  label {
    color: #eeeeee;
    display: block;
    font-weight: bold;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #444;
    outline: none;
    padding: 4px;
    border-radius: 5px 5px 0 0;
    background-color: #eee;
    caret-color: #49bb58;
  }

  input:focus {
    border-bottom: 2px solid #49bb58;
    background-color: #f5fff6
  }

  h1 {
    text-align: center;
    color: #49bb58;
  }

  button {
    display: block;
    margin: 0 auto;
    border: none;
    outline: none;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    background-color: #49bb58;
    color: #fff;
  }
  
  button:hover,
  button:focus {
    background-color: #53ce63;
    cursor: pointer;
    border: none;
  }

  button:active {
    background-color: #49bb58;
  }

  .teacher-card {
    background-color: #edfff0;
    box-shadow: 0 2px 8px #49bb5836;
    border-radius: 5px;
    margin: 3rem auto;
    padding: 1rem;
  }
</style>