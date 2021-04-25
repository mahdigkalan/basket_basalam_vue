<template>
  <div>
    <!-- :products="shop.productsArray" -->
    <Vendor v-for="(shop, index) in vendorLoop"
    :vendorInfo="vendorLoop"
    :vendorIndex="index"
    :key="index" />
  </div>
</template>

<script>
// import fkakeProducts from "@/fakeProducts.json";
import Vendor from "@/components/page1/vendor.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      vendorLoop: this.$store.state.vendors,
    };
  },

  components: {
    Vendor,
  },

  computed: {
    ...mapState(["todo"]),
  },

  // async mounted() {
  //   await this.$store.dispatch("getApi", {
  //     url:
  //       "https://internship-cart.iran.liara.run/api/v1.0/users/60578bb23579bd08186a213b",
  //   });

  //   this.product = await this.todo.cart;
  //   this.$store.getters.filtervendor;

  //   console.log("vendor loop is => ", this.vendorLoop);
  // },
};
</script>

<style>
</style>