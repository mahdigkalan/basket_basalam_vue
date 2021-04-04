<template>
  <div>
    <h1>Hello world this is a test for VueX</h1>
    <p>{{doubleCounter}}</p>
    <button @click="add">click me to add counter !</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex" ;
export default {
  computed : mapGetters([
    'doubleCounter'
  ]),
  methods: {
    add(){
      this.$store.state.counter++ ;
    }
  },
}
</script>

<style>

</style>