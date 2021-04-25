<template>
  <router-view></router-view>
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch("getApi", {
      url:
        "https://internship-cart.iran.liara.run/api/v1.0/users/60578bb23579bd08186a213b",
    });

    // this.product = await this.todo.cart;
    this.$store.getters.filtervendor;

  },
};
</script>

<style>
</style>