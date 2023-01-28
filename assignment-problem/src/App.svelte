<script>
  import Output from "./lib/Output.svelte";
  let goal = '';
</script>

<style>
.form-group {
  border: 1px solid #444;
  border-radius: 8px;
  display: inline-block;
  padding: 1rem;
  box-shadow: 4px 0 10px #4444443f;
  background-color: rgb(219, 228, 255);
}

.form-group h3 {
  font-weight: 700;
}

.form-group input {
  border: 1px solid #444;
  border-radius: 0.25rem;
}
</style>

<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
  <li>Add an input field that allows users to enter a course goal.</li>
  <li>Output the user input in a h1 tag.</li>
  <li>
    Color the output red (e.g. by adding a class) if it contains at least one exclamation mark.
  </li>
  <li>
    Put the h1 tag + output into a separate component to which you pass the user input
  </li>
</ol>
<br>

<div class="form-group">
  <h3>Enter a course goal</h3>
  <input
    type="text"
    placeholder="Get 90's in French"
    bind:value={goal}>
</div>

<Output {goal}/>
<Output {goal}/>
<Output {goal}/>
<Output {goal}/>
