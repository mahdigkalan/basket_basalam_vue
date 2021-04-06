<template>
  <div class="main" v-if="delShop">
    <div class="main-content">
      <VendorTitle :jsonPr="venderInfo" />
      <Product
        v-for="(pr, index) in products.length"
        :key="pr"
        :keyIndex="index"
        :jsonPr="products"
        @loadCost="finalShop = $event"
      ></product>
      <VendorFooter :finalFooter="finalShop" />
    </div>
  </div>
</template>

<script>
import VendorTitle from "@/components/page1/vendorTitle.vue";
import Product from "@/components/page1/product.vue";
import VendorFooter from "@/components/page1/vendorFooter.vue";

export default {
  name: "firstContainer",
  props: {
    products: {
      type: Array,
      required: true,
    },
    venderInfo : {
      type : Object,
      required : true,
    }
  },
  data() {
    return {
      finalShop: 0,
      delShop: true,
    };
  },

  components: {
    VendorTitle,
    Product,
    VendorFooter
  },

  mounted() {
    console.log("this.products", this.products);
  },
};
</script>

<style>
</style>