<script>
	export let name;
	let age = 27;

	function incrementAge() {
		age++;
		if (age > 30) {
			name = 'oldy😥';
		};
	};
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>👋🏽Hello, my name is {name}, I'm {age} years old!</h1>
<p>Unless you press on that button down there...</p>
<button on:click={incrementAge}>Don't click me</button>
