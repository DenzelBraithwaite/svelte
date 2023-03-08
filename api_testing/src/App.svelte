<script lang="ts">
  import { onMount } from 'svelte';

  let loading = false;
  let first = '';
  let last = '';
  let students = [];

  onMount(() => {
    loading = true;
    fetch('https://svelte-api-testing-default-rtdb.firebaseio.com/students.json')
    .then(res => {
      if (!res.ok) {
        throw new Error('Somethign went very wrong :c')
      }

      return res.json()
    }).then(data => {
      const values = Object.values(data);
      values.forEach(student => {
        students = [student, ...students]
      })
      loading = false;
    })
    .catch(err => {
      console.log(err);
      loading = false;
    })
  })

  function addStudent() {
  loading = true;
  const student = {
    firstName: first,
    lastName: last
  }

  students = [...students, student];

  fetch('https://svelte-api-testing-default-rtdb.firebaseio.com/students.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(student)
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Something went wrong :(')
    }
    loading = false;
  })
  .catch(err => {
    loading = false;
    console.log(err);
  })
}
</script>

<main>
  <h1>Student Form</h1>
  <div class="form-control">
    <label for="first-name">First Name</label>
    <input bind:value={first} id="first-name" name="last-name" type="text">
  </div>
  <div class="form-control">
    <label for="last-name">Last Name</label>
    <input bind:value={last} id="last-name" name="last-name" type="text">
  </div>
  <button on:click={addStudent}>Submit</button>

  {#if loading}
    <p class="loading">Loading ...</p>
  {:else}
    {#each students as student}
      <div class="student-card">
        <p>First name: {student.firstName}</p>
        <p>Last name: {student.lastName}</p>
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

  .student-card {
    background-color: #edfff0;
    box-shadow: 0 2px 8px #49bb5836;
    border-radius: 5px;
    margin: 3rem auto;
    padding: 1rem;
  }
</style>