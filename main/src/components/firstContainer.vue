<template>
  <div class="main">
      <shopTitle :jsonPr="product[shopIndex]" />
      <product  v-for="(pr, index) in product[shopIndex].productsArray.length" :key="pr"  :keyIndex="index" :jsonPr="product[shopIndex].productsArray"></product>
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
  props : ["indexTurn","shopIndex"] ,
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

};

</script>

<style>
</style>