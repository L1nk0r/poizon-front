<template>
   <div class='p-index'>
      <p-navbar-vue/>
      <div class="content">
         <p-wrapper-vue/>
      </div>
   </div>
</template>

<script>
import pNavbarVue from './p-navbar.vue'
import pWrapperVue from './p-wrapper.vue'

export default{
   name: 'PIndex',
   components: {
      pNavbarVue,
      pWrapperVue
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