<script lang="ts">
  import Product from './lib/products/Product.svelte'
</script>

<style>

</style>

<Product productTitle="Soap" on:click={() => alert('hi')}/>