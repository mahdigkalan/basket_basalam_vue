<template>
  <div id="app">
    <headTitle/>
    <container/>
    <firstContainer/>
  </div>
</template>

<script>
import headTitle from './components/headTitle.vue'
import container from './components/containerHeader.vue'
import firstContainer from './components/firstContainer.vue'

export default {
  name: 'App',
  components: {
    headTitle,
    container,
    firstContainer,
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
  font-family: 'IRANSansWeb';
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
