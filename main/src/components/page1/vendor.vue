<template>
  <div class="main" v-if="delShop">
    <div class="main-content">
      <!-- :keyIndex="index"
        :jsonPr="vendorInfo.cartContent"
        @loadCost="finalShop = $event" -->

        <!-- :jsonPr="venderInfo.cartContent.vendor" -->
      <VendorTitle :jsonPr="vendorInfo[vendorIndex].cartContent" />
      <Product
        v-for="(pr, index) in vendorInfo[vendorIndex].cart"
        :jsonPr="vendorInfo[vendorIndex].cart"
        :keyIndex="index"
        :vendorIndexInProduct="vendorIndex"
        :key="index"
      ></Product>
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

  data() {
    return {
      finalShop: 0,
      delShop: true,
    };
  },



  props: {
    // products: {
    //   type: Array,
    //   required: true,
    // },
    vendorIndex: {
      type: Number,
      required : true ,
    },
    vendorInfo: {
      type: Array,
      required: true,
    },

  },


  components: {
    VendorTitle,
    Product,
    VendorFooter,
  },

  mounted() {
  },
};
</script>

<style>
</style>