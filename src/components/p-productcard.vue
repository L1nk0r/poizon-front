<template>
  <div class="product_card">
    <img :src="getProductImg()" class="preview_image" />
    <div class="product_details">
      <h5>{{ product_data.name }}</h5>
      <h4>{{ product_data.price }}</h4>
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
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

.product_card {
  /* border: 1px solid black; */
  padding: 15px;
  border-radius: 3%;
  font-size: 42px;
  font-family: 'Oswald', sans-serif;

  margin: 20px;

  transition: 0.3s;
}

.product_card:hover {
  /* background-color: red; */
  -webkit-box-shadow: 6px 8px 15px 3px rgba(0, 0, 0, 0.35);
  box-shadow: 6px 8px 15px 3px rgba(0, 0, 0, 0.35);

  cursor: pointer;
}

.product_card:hover .product_card1 .product_details {
  margin-top: 30px;
}

.product_card img {
  width: 200px;
}

.product_card .product_details {
  margin-top: 20px;
  border-top: 1px solid #c1bddb;
  margin-bottom: 20px;

  transition: 0.3s;
}

.product_card .product_details h5 {
}

.product_card .product_details h4 {
}
</style>
