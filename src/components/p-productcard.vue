<template>
  <div class="product_card">
    <img :src="getProductImg()" class="product-img" />
    <div class="product-info">
      <div class="product-text">
        <h1>{{ product_data.name }}</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          necessitatibus delectus eveniet, accusantium, odit excepturi quis,
          animi illum soluta blanditiis libero temporibus molestiae veritatis?
          Aspernatur ipsam illo iusto animi soluta!
        </p>
      </div>

      <div class="product-price-btn">
        <p>
          <span>{{ product_data.price }}$</span>
        </p>
        <button type="button">Buy</button>
      </div>
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

</style>
