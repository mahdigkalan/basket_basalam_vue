<template>
  <div class="shop-title flex_column">
    <div class="boothName">
      <!-- <p class="whereFrom">از غرفه : <span>خوشمزه های خاتون</span></p> -->
    </div>
    <div class="boothFounder flex_row">
      <div class="boothPicture">
        <img src="../image/Ellipse 4.png" alt="" />
      </div>
      <div class="boothLocation flex_column">
        <div class="boothLocationFirstDiv">
          <p>مینو همگام</p>
        </div>
        <div class="boothLocationSecondDiv">
          <p>
            <img src="../image/VectorThree.png" alt="LocationVector" />از سعادت
            شهر
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopTitle",
};
</script>

<style scoped>
.shop-title {
  width: 100%;
  height: 100px;
}
.boothName{
    width: 100%;
    height: 40px;
    direction: rtl;
}
.boothName > p{
    font-size: 14px;
    font-weight: 400;
}
.boothName > span {
    font-size: 14px;
    font-weight: 700;
}
.whereFrom{
    padding: 20px 10px 0 0;
}
.whereFrom > span{
    font-weight: 700;
}
.boothFounder{
    width: 100%;
    height: 60px;
    direction: rtl;
}
.boothPicture{
    width: 20%;
    height: 100%;
}
.boothPicture > img{
    padding: 8px 15px 0 0 ;
}
.boothLocation{
    width: 80%;
    height: 100%;
}
.boothLocationFirstDiv{
    width: 100%;
    height: 50%;
    direction: rtl;
}
.boothLocationSecondDiv{
    width: 100%;
    height: 50%;
    direction: rtl;
}
.boothLocationFirstDiv > p{
    padding: 10px 0 0 0;
    font-size: 12px;
    font-weight: 400;
}
.boothLocationSecondDiv > p{
    font-size: 12px;
    font-weight: 400;
}
</style>