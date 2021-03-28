<template>
  <div class="product flex_column" v-if="delProduct">
    <div class="main-product flex_row_reverse">
      <div class="product-picture">
        <img :src="jsonFile.image.url"/>
      </div>
      <div class="product-cost flex_column">
        <div class="product-name">
          <p>{{ jsonFile.name }}</p>
        </div>
        <div class="productFinal-cost flex_row_reverse">
          <div class="line-cost">
            <del>{{ jsonFile.primaryPrice }}</del>
          </div>
          <div class="final-cost">
            <p class="pCost">{{ jsonFile.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="else-product flex_row">
      <div class="saveInNext">
        <div>ذخیره در لیست بعدی</div>
      </div>
      <div class="orderCount flex_row">
        <button
          class="delButton ordersButtons"
          @click="delProduct = !delProduct"
        ></button>
        <button class="add-button ordersButtons" @mousedown="add(200)" @mouseup="stop" @click="addSlow">
          <img src="../image/addVector.png" />
        </button>
        <input
          type="text"
          readonly
          class="inp"
          :value="jsonPr[keyIndex].count"
        />
        <button
          class="less-button ordersButtons"
          @mousedown="less(200)" @mouseup="stop" @click="lessSlow"
        >
          <img src="../image/lowVector.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delProduct: true,
      jsonFile : this.jsonPr[this.keyIndex] ,
    };
  },
  name: "product",
  props: ["keyIndex", "jsonPr"],
  methods: {
    addSlow(){
      if(this.jsonFile.count < this.jsonFile.stock){
        this.jsonFile.count++;
      }
    },

    lessSlow(){
      if(this.jsonFile.count > 1 ){
        this.jsonFile.count--;
      }
    },
    add(duration) {
      if(this.jsonFile.count < this.jsonFile.stock){
          this.setting = setTimeout(() => {
          this.jsonFile.count++;
          this.add(duration - 15);
        }, duration);
      }
    },

    stop(){
      clearInterval(this.setting)
    },

    less(duration){
      if(this.jsonFile.count > 1 ){
          this.setting = setTimeout(() => {
          this.jsonFile.count--;
          this.less(duration - 15);
        }, duration);
      }
    },

  },
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