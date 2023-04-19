<template>
   <div class='p-index'>
      <p-navbar-vue/>
      <div class="content">
         <p-wrapper-vue/>
         <p-productsexample-vue/>
      </div>
   </div>
</template>

<script>
import pNavbarVue from './p-navbar.vue'
import pProductsexampleVue from './p-productsexample.vue'
import pWrapperVue from './p-wrapper.vue'

export default{
   name: 'PIndex',
   components: {
      pNavbarVue,
      pWrapperVue,
      pProductsexampleVue
   },
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

</style>