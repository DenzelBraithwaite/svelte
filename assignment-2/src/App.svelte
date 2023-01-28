<script>
let password = '';
let passwordList = [];
$: passwordLength = password.length;

function addPassword(index) {
	if ([5, 6, 7, 8, 9, 10].includes(passwordLength))
		passwordList = [...passwordList, password]
};

function deletePassword(index) {
	passwordList = passwordList.filter((pw, i) => {
		return i !== index
	})
};
</script>

<style>
.input-group {
	display: inline-block;
	background-color: #c2fff0;
	border-radius: 4px;
	border: 0.5px solid #4444442d;
	text-align: center;
	box-shadow: 2px 0 4px #4444443f;
	margin-bottom: 1rem;
}

.input-group input {
	border: none;
	border-bottom: 2px solid #444;
	background-color: #c2fff0;
	width: 90%;
	
}

.input-group :focus {
	background-color: #9ee2d1;
	border: none;
}

button {
	background-color: #9ee2d1;
	color: #444;
	border: 2px solid #9ee2d1;
	font-weight: 500;
	padding: 0.5rem 1rem;
}

button:hover {
	cursor: pointer;
}

ul li:hover {
	cursor: pointer;
}
</style>

<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
	<li>Add a password input field and save the user input in a variable.</li>
	<li>Output "Too short" if the password is shorter than 5 characters and "Too long" if it's longer than 10.</li>
	<li>Output the password in a paragraph tag if it's between these boundaries.</li>
	<li>Add a button and let the user add the passwords to an array.</li>
	<li>Output the array values (= passwords) in a unordered list (ul tag).</li>
	<li>Bonus: If a password is clicked, remove it from the list.</li>
</ol>

<br>

{#if password.length < 5}
	<p style="color: red">Password too short⛔</p>
	<p>Add {5 - password.length} more</p>
{:else if password.length > 10}
	<p style="color: red">Password too long⛔</p>
	<p>Remove {password.length - 10}</p>
{:else}
	<p>Your password: {password}</p>
{/if}

<div class="input-group">
	<h3>Enter a Password</h3>
	<input type="password" bind:value={password}>
</div>


<br>

<button on:click={addPassword}>Add</button>

<ul>
	{#each passwordList as password, i (password)}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li on:click={deletePassword.bind(this, i)}>{password}</li>
	{/each}
</ul>

