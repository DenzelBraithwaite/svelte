<script>
	export let name;
	export let age;

	function ageIncrementer() {
		age ++;
	}
</script>

<style>
	h1 {
		color: rgb(44, 180, 139);
	}
</style>

<h1>👋🏽Hey, I'm {name}.</h1>
<h1>I'm {age} years old!</h1>
<button on:click={ageIncrementer}>Age up!</button>
