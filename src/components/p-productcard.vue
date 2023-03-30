<template>
   <div class="card">
      <h1>{{ product_data.name }}</h1>
   </div>
</template>

<script>
export default{
   name: 'PProductCard',
   components: { },
   data(){
      return { }
   },
   props: {
      product_data: {
         type: Object,
         default: () => {},
      }
   },
   methods: { },
   created() { },
   mounted() { },
   computed: { },

}
</script>

<style>
.card {
   /* justify-content: center;
   align-items: center; */

   height: 100px;
   background-color: bisque;
}
</style>