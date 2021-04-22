<template>
  <div>
    <!-- :products="shop.productsArray" -->
    <Vendor
      v-for="(shop, index) in product"
      :venderInfo="shop"
      :key="index"
    />
  </div>
</template>

<script>
// import fkakeProducts from "@/fakeProducts.json";
import Vendor from "@/components/page1/vendor.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      product: [],
    };
  },

  components: {
    Vendor,
  },

  computed: {
    ...mapState(["todo"]),
  },

  async mounted() {
    await this.$store.dispatch("getApi", {
      url:
        "https://internship-cart.iran.liara.run/api/v1.0/users/60578bb23579bd08186a213b",
    });

    // await console.log("our api", this.todo.cart);
    this.product = await this.todo.cart;
  },
};
</script>

<style>
</style>