<template>
  <div>
    <Vendor
      v-for="(shop, index) in product"
      :products="shop.productsArray"
      :venderInfo="shop"
      :key="index"
    />
  </div>
</template>

<script>
import fakeProducts from "@/fakeProducts.json";
import Vendor from '@/components/page1/vendor.vue' 

export default {
  data() {
    return {
      product: fakeProducts,
    };
  },
  components: {
    Vendor,
  },
};
</script>

<style>
</style>