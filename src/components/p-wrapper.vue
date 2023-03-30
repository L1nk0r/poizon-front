<template>
   <div class="wrapper">
      <div class="gallery-wrap">
         <div class="item item-1"></div>
         <div class="item item-2"></div>
         <div class="item item-3"></div>
         <div class="item item-4"></div>
         <div class="item item-5"></div>
         <div class="item item-6"></div>
         <div class="item item-7"></div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default{
   name: 'PWrapper',
   components: {
      
   },
   data(){
      return { }
   },
   methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API"
    ])
   },
   created() { },
   mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data){
        console.log("Products arrived!");
      }
    })
   },
   computed: {
    ...mapGetters(["PRODUCTS"])
   },

}
</script>

<style lang="scss">
.wrapper{
  padding: 75px 0;
  margin: 0 auto;
  width: 100%;
}

.gallery-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;

  transform: skew(-6deg);
}

.item {
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  transition: flex 0.8s ease;
  
  &:hover{
    flex: 2;
  }
}

.item-1 { 
  background-image: url('../../accordion-photoes/sn1.jpeg');
}

.item-2 { 
  background-image: url('../../accordion-photoes/sn2.jpeg');
}

.item-3 { 
  background-image: url('../../accordion-photoes/sn3.jpeg');
}

.item-4 { 
  background-image: url('../../accordion-photoes/sn4.jpeg');
}

.item-5 { 
  background-image: url('../../accordion-photoes/sn5.jpeg');
}

.item-6 {
   background-image: url('../../accordion-photoes/sn6.jpeg');
}

.item-7 {
   background-image: url('../../accordion-photoes/sn7.jpeg');
}
</style>