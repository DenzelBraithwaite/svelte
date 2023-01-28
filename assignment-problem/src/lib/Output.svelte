<script>
    export let goal;

</script>

<style>
.red {
  color: red;
} 

</style>
<h1 class:red="{goal.includes('!')}">Your goal: {goal}</h1>
