<template>
  <div class="select-addres-header full_width flex_row">
    <div class="leftside-div full-height">
      <button>
        <p>آدرس جدید</p>
      </button>
    </div>
    <div class="rightside-div full-height flex_row_reverse">
      <router-link to="/"><button></button></router-link>
      <p>آدرس ارسال</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "headAdress",
};
</script>

<style scoped>
a > button {
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
.select-addres-header {
  height: 65px;
}
.leftside-div > button {
  width: 130px;
  height: 40px;
  border-radius: 100px;
  margin: 12px 0 0 23px;
  background: #ffffff;
  border: 1px solid #9d9d9d;
  background-image: url("~@/image/newaddVector.png");
  background-repeat: no-repeat;
  background-position: 91.5px 12px;
  font-size: 14px;
  font-weight: 700;
}
.leftside-div > button > p {
  margin: 0 20px 0 0;
}
.rightside-div {
  width: 50%;
}
.rightside-div > p {
  margin: 16px 10px 0 0;
}
</style>