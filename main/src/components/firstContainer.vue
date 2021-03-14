<template>
    <div class="main">
        <template>
            <shopTitle/> 
            <template>
                <product/>
            </template>  
        </template>
    </div>
</template>

<script>
import shopTitle from './shopTitle.vue'
import product from './product.vue'
export default {
    name : "firstContainer",
    components: {
        shopTitle,
        product,
  }
}
</script>

<style>

</style>