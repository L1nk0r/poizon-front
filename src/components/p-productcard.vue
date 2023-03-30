<template>
  <div class="card">
    <img :src="getProductImg()" class="preview_image"/>

    <div class="product_details">
      <h5>{{ product_data.name }}</h5>
      <h5>{{ product_data.id }}</h5>
      <h5>{{ product_data.price }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "PProductCard",
  components: {},
  data() {
    return {};
  },
  props: {
    product_data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getProductImg() {
      return this.product_data.img;
    },
  },
  created() {},
  mounted() {},
  computed: {},
};
</script>

<style>
.card {
  /* justify-content: center;
   align-items: center; */

  /* border: 1px black solid; */
  margin: 20px;
  box-shadow: 5.9px 11.8px 11.8px hsl(0deg 0% 0% / 0.32);
  border-radius: 15px;
}

.preview_image {
  width: 80%;
}

.product_details{
   /* border: 1px solid red; */

   height: 20%;

   font-family: 'Montserrat';
   font-weight: 400;
}
</style>
