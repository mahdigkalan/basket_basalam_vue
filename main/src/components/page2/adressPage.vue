<template>
  <div id="addressApp">
    <MainHeader />
    <HeadAdress />
    <ClientAddress v-for="x in 2" :key="x"/>
    <AddressFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/page1/mainHeader.vue"
import HeadAdress from "@/components/page2/headAdress.vue"
import Address from "@/components/page2/address.vue"
import AddressFooter from "@/components/page2/addressFooter.vue"

export default {
  name: "adress",
  components: {
    MainHeader,
    HeadAdress,
    ClientAddress : Address,
    AddressFooter,
  },
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "IRANSansWeb";
}
body {
  display: flex;
  justify-content: center;
  background: #eeeeee;
}
#addressApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
}
</style>