<template>
  <div class="product-footer flex_column">
    <div class="firstProductFooter flex_row">
      <div class="freeSend flex_row">
        <b>.رایگان شد </b> هورا! ارسال از این غرفه برای شما
      </div>
    </div>
    <div class="secondProductFooter flex_row">
      <div class="saleCode flex_row">
        <p>ثبت کد تخفیف غرفه</p>
        <img src="@/image/codeVector.png" alt="" />
      </div>
    </div>
    <div class="thirdProductFooter flex_row">
      <div class="finalCost flex_column">
        <div class="constSen">جمع مبلغ برای این 2 کالا</div>
        <div class="factor">{{finalFooter}}</div>
      </div>
      <div class="conShop">
        <button class="mainButton">ادامه خرید فقط از این غرفه</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "footerShop",
  props : ["finalFooter"],
  data() {
    return {
      mahdi : "Hello World !",
    }
  },
};
</script>

<style scoped>
.product-footer{
    width: 100%;
    height: 150px;
}
.firstProductFooter{
    height: 30%;
    width: 100%;
    justify-content: center;
}
.freeSend{
    margin: 10px 0 0 0;
    background: rgba(223, 245, 241, 1);
    height: 28px;
    width: 328.5047912597656px;
    border-radius: 2px;
    justify-content: flex-end;
    padding: 5px;
    color: rgba(0, 120, 108, 1);
    font-size: 12px;
    font-weight: 700;
}
.secondProductFooter{
    height: 30%;
    width: 100%;
}
.saleCode{
    height: 24px;
    width: 125px;
    border-radius: 100px;
    background: rgba(238, 238, 238, 1);
    margin: 10px;
}
.saleCode > p{
    font-size: 15px;
    margin: 4px 0 0 10px;
    color:rgba(62, 62, 62, 1);
    font-size: 10px;
    font-weight: 700;
}
.saleCode > img{
    height: 10.5px;
    width: 15px;
    margin: 5px 5px 0 10px;
    border-radius: 0px;
}
.finalCost{
    width: 50%;
    height: 100%;
}
.constSen{
    padding: 0 0 0 10px;
    color: rgba(83, 83, 83, 1);
    font-size: 12px;
    font-weight: 400;
}
.factor{
    padding: 0 0 0 10px;
}
.conShop{
    width: 50%;
    height: 100%;
}
.mainButton{
    height: 32px;
    width: 172px;
    border-radius: 100px;
    background: rgba(223, 56, 86, 1);
    border: none;
    color: rgba(250, 250, 250, 1);
}
</style>