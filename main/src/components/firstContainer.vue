<template>
    <div class="main">
        <template>
            <shopTitle/> 
            <template>
                <product/>
            </template>  
            <footerShop/>
        </template>
    </div>
</template>

<script>
import shopTitle from './shopTitle.vue'
import product from './product.vue'
import footerShop from './footerShop.vue'
export default {
    name : "firstContainer",
    components: {
        shopTitle,
        product,
        footerShop
  }
}
</script>

<style>

</style>