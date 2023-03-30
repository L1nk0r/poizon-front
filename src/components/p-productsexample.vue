<template>
   <div class="productsexample">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
   </div>
</template>

<script>
export default{
   name: 'PProductsExample',
   components: { },
   data(){
      return { }
   },
   methods: { },
   created() { },
   mounted() { },
   computed: { },

}
</script>

<style>
.productsexample{
   margin-top: 50px;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>