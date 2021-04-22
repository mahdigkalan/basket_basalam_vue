<template>
  <div id="payApp" class="flex_column full_width">
    <div class="back_to_address_page full_width">
      <div class="rightside-div full-height flex_row_reverse">
        <router-link to="/adress"><button></button></router-link>
        <p>آدرس ارسال</p>
      </div>
    </div>
    <div class="discount_input full_width">Hello world !</div>
    <div class="toggle_button full_width">Hello world !</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#payApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
}
button {
  height: 40px;
  width: 40px;
  border-radius: 100px;
  background-image: url("~@/image/backpageVector.png");
  background-position: 14px 14px;
  background-repeat: no-repeat;
  background-size: 12px 12px;
  border: none;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: -10px;
  background-color: #eeeeee;
}
.rightside-div{
    margin-right: 25px;
}
.rightside-div > p {
  margin: 16px 10px 0 0;
}
</style>