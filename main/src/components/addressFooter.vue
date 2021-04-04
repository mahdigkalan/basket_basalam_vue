<template>
  <div class="main">
    <div class="border"></div>
    <div class="footer full_width flex_row">
      <div class="cost full-height">75000</div>

      <div class="confrim-button full-height">
        <router-link to="/third"><button>ادامه فرآیند خرید</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "addressFooter",
};
</script>

<style>
.border{
    height: 50px;
    background: #EEEEEE;
}
.footer{
    height: 78px;
}
.cost{
    width: 40%;
}
.confrim-button{
    width: 60%;
}
.confrim-button > button {
    height: 48px;
    width: 180px;
    border-radius: 100px;
    background: #DF3856;   
    margin: 14px 0 0 15px ;
    font-size: 16px;
    font-weight: 700;
    color: white;
}
</style>