<template>
  <div class="product flex_column">
    <div class="main-product flex_row_reverse">
      <div class="product-picture">
        <img :src="jsonPr[keyIndex].image.url" />
      </div>
      <div class="product-cost flex_column">
        <div class="product-name">
          <p>{{jsonPr[keyIndex].name}}</p>
        </div>
        <div class="productFinal-cost flex_row_reverse">
          <div class="line-cost"><del>{{jsonPr[keyIndex].primaryPrice}}</del></div>
          <div class="final-cost">
            <p class="pCost">{{jsonPr[keyIndex].price}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="else-product flex_row">
      <div class="saveInNext">
        <div>ذخیره در لیست بعدی</div>
      </div>
      <div class="orderCount flex_row">
        <button class="delButton ordersButtons"></button>
        <button class="add-button ordersButtons">
          <img src="../image/addVector.png" />
        </button>
        <input type="text" readonly class="inp" :value="jsonPr[keyIndex].count"/>
        <button class="less-button ordersButtons">
          <img src="../image/lowVector.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props : ["keyIndex","jsonPr"] ,
};
</script>

<style scoped>
.product {
  width: 100%;
  height: 180px;
  border-bottom: solid rgba(238, 238, 238, 1) 2px;
}
.main-product {
  width: 100%;
  height: 70%;
}
.product-picture {
  width: 30%;
  height: 100%;
}
.product-picture > img {
  padding: 20px 10px;
}
.product-cost {
  width: 70%;
  height: 100%;
}
.product-name {
  direction: rtl;
  width: 100%;
  height: 50%;
}
.product-name > P {
  padding: 22px 5px 0 0;
  font-size: 12px;
  font-weight: 400;
}
.productFinal-cost {
  height: 100%;
}
.line-cost {
  width: 70%;
  height: 100%;
  padding: 40px 0 0 5px;
}
.final-cost > p {
  padding: 40px 0 0 0;
}
.else-product {
  justify-content: flex-start;
}
.saveInNext {
  width: 60%;
}
.saveInNext > div {
  width: 90px;
  border-bottom: dotted #7d7d7d 2px;
  margin: 10px 20px 0 10px;
  color: #7d7d7d;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
}
.orderCount {
  width: 40%;
  justify-content: flex-end;
  padding: 12px;
}
.orderCount > input {
  margin: 0 0 0 5px;
  height: 23.362829208374023px;
  width: 25.785627365112305px;
  border-radius: 6px;
  text-align: center;
  margin: 0 2.5px 0 2.5px;
  border: solid 1px #eeeeee;
}
.ordersButtons {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: none;
  background: #eeeeee;
}
.delButton {
  margin: 0 12px 0 5px;
  background-image: url("../image/delVector.png");
  background-position: 5px 4px;
  background-repeat: no-repeat;
}
</style>