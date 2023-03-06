<script>
  import Product from './Product.svelte';
  import Modal from './Modal.svelte';

  let visibility = 'visible';
  const products = [
    {
      id: 1,
      title: 'Kiwi Juice',
      cost: 11
    },
    {
      id: 2,
      title: 'Cucumber Juice',
      cost: 10
    },
    {
      id: 3,
      title: 'Pickle Juice',
      cost: 7
    },
  ]

  function addToCart(event) {
    console.log(event);
  }

  function deleteProduct(event) {
    console.log(event);
  }

</script>

<body>
  <div class="container">
    {#each products as product, i (product.id)}
      <Product
      on:add-to-cart={addToCart} 
      on:delete={deleteProduct} 
      title={product.title} 
      cost={product.cost}/>  
    {/each}
  </div>
  <Modal>
    <header class={visibility}>
      <h1>Lemonade</h1>
      <p>Refreshing</p>
    </header>
    <button slot="footer">Confirm</button>
  </Modal>
</body>
      
<style>
  .hidden {
    display: none;
  }

  .container  {
    width: 1000px;
    margin: 0 auto;
    height: 100vh;
    padding: 30px;
  }

  button {
        color: #444;
        background-color: #fbfd5b;
        border: none;
        padding: 10px 20px;
    }
</style>