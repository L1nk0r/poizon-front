<template>
  <div class="productsexample">
    <p-productcard-vue 
      v-for="item in PRODUCTS"
      :key="item.id"
      :product_data="item"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import pProductcardVue from "./p-productcard.vue";

export default {
  name: "PProductsExample",
  components: {
    pProductcardVue,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  created() {},
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Products arrived!");
      }
    });
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
};
</script>

<style>
.productsexample {
  /* margin-top: 50px; */
  /* margin-left: 100px; */
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
