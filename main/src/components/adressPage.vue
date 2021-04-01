<template>
  <div id="app">
    <headTitle />
    <headAdress />
    <clientAddress v-for="x in 2" :key="x"/>
    <addressFooter />
  </div>
</template>

<script>
import headTitle from "./headTitle.vue"
import headAdress from "./headAdress.vue"
import address from "./address.vue"
import addressFooter from "./addressFooter.vue"

export default {
  name: "adress",
  components: {
    headTitle,
    headAdress,
    clientAddress : address,
    addressFooter,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
}
</style>