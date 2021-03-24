<template>
  <div class="main">
      <shopTitle />
      <product></product>
      <footerShop />
  </div>
</template>

<script>
import shopTitle from "./shopTitle.vue";
import product from "./product.vue";
import footerShop from "./footerShop.vue";
import fakeProducts from "@/fakeProducts.json";

export default {
  name: "firstContainer",

  data() {
    return {
      product: fakeProducts,
    };
  },

  components: {
    shopTitle,
    product,
    footerShop,
  },

  methods: {
    show: function () {
      console.log(this.product);
    },
  },
};
</script>

<style>
</style>