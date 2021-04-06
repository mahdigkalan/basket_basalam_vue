<template>
  <div id="mainApp">
    <MainHeader/>
    <BasketChangingHeader @changeContent=" basket = $event "/>
    <keep-alive>
      <component :is="basket"></component>    
    </keep-alive>
    <Space />
    <MainBasketFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/page1/mainHeader.vue'
import BasketChangingHeader from '@/components/page1/basketChangingHeader.vue'
import NewBasket from '@/components/page1/newBasket.vue'
import ChangeComponent from '@/components/page1/changeComponent.vue'
import MainBasketFooter from '@/components/page1/mainBasketFooter.vue'
import Space from '@/components/page1/space.vue'

export default {
  name: 'App',
  data() {
    return {
      basket : "default",
    }
  },
  components: {
    MainHeader,
    BasketChangingHeader,
    NewBasket,
    ChangeComponent,
    MainBasketFooter,
    Space,
  },
}
</script>

<style>
@font-face {
    font-family: 'IRANSansWeb';
    src: url('~@/IRANSans 5 WebFonts/fonts/eot/IRANSansWeb.eot') format('eot');
    src: url('~@/IRANSans 5 WebFonts/fonts/ttf/IRANSansWeb.ttf') format('ttf');
    src: url('~@/IRANSans 5 WebFonts/fonts/woff/IRANSansWeb.woff') format('woff');
    src: url('~@/IRANSans 5 WebFonts/fonts/woff2/IRANSansWeb.woff2') format('woff2');
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
.full_width{
    width: 100%;
}
.full-height{
    height: 100%;
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
#mainApp {
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
