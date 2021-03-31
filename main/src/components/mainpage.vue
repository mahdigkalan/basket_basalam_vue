<template>
  <div id="app">
    <headTitle/>
    <container @changeContent=" basket = $event "/>
    <keep-alive>
      <component :is="basket"></component>    
    </keep-alive>
  </div>
</template>

<script>
import headTitle from './headTitle.vue'
import container from './containerHeader.vue'
import newBasket from './newBasket.vue'
import changeComponent from './changeComponent.vue'

export default {
  name: 'App',
  data() {
    return {
      basket : "default",
    }
  },
  components: {
    headTitle,
    container,
    newBasket,
    changeComponent,
  },
}
</script>

<style>
@font-face {
    font-family: 'IRANSansWeb';
    src: url('../IRANSans 5 WebFonts/fonts/eot/IRANSansWeb.eot') format('eot');
    src: url('../IRANSans 5 WebFonts/fonts/ttf/IRANSansWeb.ttf') format('ttf');
    src: url('../IRANSans 5 WebFonts/fonts/woff/IRANSansWeb.woff') format('woff');
    src: url('../IRANSans 5 WebFonts/fonts/woff2/IRANSansWeb.woff2') format('woff2');
}
.flex_row{
    display: flex;
    flex-direction: row;
}
.flex_row_reverse{
    display: flex;
    flex-direction: row-reverse;
}
.flex_column{
    display: flex;
    flex-direction: column;
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
