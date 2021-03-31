<template>
  <div class="main">
    <div class="main-content">
      <!-- {{finalShop}} -->
      <shopTitle :jsonPr="product[shopIndex]"/>
      <product class="product" v-for="(pr, index) in product[shopIndex].productsArray.length" :key="pr"  :keyIndex="index" :jsonPr="product[shopIndex].productsArray" @loadCost=" finalShop = $event "></product>
      <footerShop :finalFooter="finalShop"/>
    </div>
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
      // finalShop : 0 ,
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