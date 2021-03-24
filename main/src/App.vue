<template>
  <div id="app">
    <headTitle/>
    <container/>
    <firstContainer></firstContainer>
  </div>
</template>

<script>
import headTitle from './components/headTitle.vue'
import container from './components/containerHeader.vue'
import firstContainer from './components/firstContainer.vue'
import fakeProducts from "@/fakeProducts.json";


export default {
  name: 'App',
  data() {
    return {
      product : fakeProducts,
    }
  },
  components: {
    headTitle,
    container,
    firstContainer,
  },
}
</script>

<style>
@font-face {
    font-family: 'IRANSansWeb';
    src: url('./IRANSans 5 WebFonts/fonts/eot/IRANSansWeb.eot') format('eot');
    src: url('./IRANSans 5 WebFonts/fonts/ttf/IRANSansWeb.ttf') format('ttf');
    src: url('./IRANSans 5 WebFonts/fonts/woff/IRANSansWeb.woff') format('woff');
    src: url('./IRANSans 5 WebFonts/fonts/woff2/IRANSansWeb.woff2') format('woff2');
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IRANSansWeb';
}
body{
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
button{
  outline: none;
  cursor: pointer;
}
input{
  outline: none;
}
</style>
