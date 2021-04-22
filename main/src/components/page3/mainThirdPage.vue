<template>
  <div id="payApp">
    <MainHeader />
    <DiscountHeader />
  </div>
</template>

<script>
import MainHeader from "@/components/page1/mainHeader.vue";
import DiscountHeader from "@/components/page3/discountHeader.vue";
// import axios from "axios";
export default {
  components: {
    MainHeader,
    DiscountHeader,
  },
  // mounted() {
  //   axios
  //     .get(
  //       "https://internship-cart.iran.liara.run/api/v1.0/users/60578bb23579bd08186a213b"
  //     )
  //     .then((response) => response.data)
  //     .then((response) => console.log(response.data));
  // },
};
</script>

<style scoped>
#payApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
}
</style>