<template>
  <div>
    {{fianl}}
    <firstContainer
      v-for="(shop, index) in product"
      :key="shop"
      :shopIndex="index"
    ></firstContainer>
  </div>
</template>

<script>
import fakeProducts from "@/fakeProducts.json";
import firstContainer from './firstContainer.vue' 

export default {
  data() {
    return {
      product: fakeProducts,
    };
  },
  components: {
    firstContainer,
  },
};
</script>

<style>
</style>