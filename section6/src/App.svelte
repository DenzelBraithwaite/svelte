<script>
  import Product from './Product.svelte';
  import Modal from './Modal.svelte';

  let showModal = false;
  let agreed = false;
  let didAgree = false;

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
    {
      id: 4,
      title: 'Kiwi Juice',
      cost: 11
    },
    {
      id: 5,
      title: 'Cucumber Juice',
      cost: 10
    },
    {
      id: 6,
      title: 'Pickle Juice',
      cost: 7
    }
  ]

  function addToCart(event) {
    console.log(event);
  }

  function deleteProduct(event) {
    console.log(event);
  }

  function modalHandler() {
    showModal = true;
  }
</script>

<body>
  <div class="container">
    {#each products as product, i (product.id)}
      <Product
      on:add-to-cart={addToCart} 
      on:delete={deleteProduct} 
      on:open-modal={modalHandler}
      title={product.title} 
      cost={product.cost}/>  
    {/each}
  </div>
  {#if (showModal)}
    <Modal on:cancel={() => {showModal = false}} 
      on:close={() => {showModal = false}}
      let:closeable={didAgree}>
      <header slot='header'>
        <h1>Terms and Conditions</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore quia officiis reprehenderit odio iste sequi eius deserunt nam quidem, labore, libero ad officia neque id nisi repellat enim quod!</p>
      </header>
      <button on:click={() => {agreed = true}} class="btn btn-green" slot="agree">I agree</button>
      <button on:click={() => {showModal = false}} 
        class="btn btn-grey" 
        slot="close" 
        disabled={!agreed}>Close</button>
    </Modal>
  {/if}
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

  .btn {
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      margin-right: 10px;
  }

  .btn:hover,
  .btn:active {
    cursor: pointer;
  }

    .btn-green {
    background-color: #57c068;
  }

  .btn-grey {
    background-color: #c0c0c0;
  }
</style>