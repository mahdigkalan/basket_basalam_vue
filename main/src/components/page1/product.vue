<template>
  <div class="product flex_column" v-if="delProduct">
    <div class="main-product flex_row_reverse">
      <div class="product-picture">
        <img src="@/image/image 2.png" />
      </div>
      <div class="product-cost flex_column">
        <div class="product-name">
          <p>{{ jsonPr[keyIndex].title }}</p>
        </div>
        <div class="productFinal-cost flex_row_reverse">
          <div class="line-cost">
            <del>{{ jsonPr[keyIndex].primaryPrice }}</del>
          </div>
          <div class="final-cost">
            <p class="pCost">{{ jsonPr[keyIndex].price }}</p>
          </div>
          <div class="exist">{{ testData }}</div>
        </div>
      </div>
    </div>
    <div class="else-product flex_row">
      <div class="saveInNext">
        <div>ذخیره در لیست بعدی</div>
      </div>
      <div class="orderCount flex_row">
        <button class="delButton ordersButtons" @click="deleteProduct"></button>
        <button
          class="add-button ordersButtons"
          @mousedown="add(200)"
          @mouseup="stop"
          @click="addSlow"
        >
          <img src="@/image/addVector.png" />
        </button>
        <input type="text" readonly class="inp" v-model="counter" />

        <button
          class="less-button ordersButtons"
          @mousedown="less(200)"
          @mouseup="stop"
          @click="lessSlow"
        >
          <img src="@/image/lowVector.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",

  data() {
    return {
      delProduct: true,
      final: 0,
      counter: 1,
      testData: "",
    };
  },

  // props from vendor component
  props: {
    keyIndex: {
      type: Number,
      required: true,
    },
    jsonPr: {
      type: Array,
      required: true,
    },
    vendorIndexInProduct: {
      type: Number,
      required: true,
    },
  },

  // beforeMount() {
  //   let num = this.$store.state.count ;
  //   let val = this.$store.state.cost ;
  //   this.$store.state.final = num * val ;
  // },
  // updated() {
  //   let num = this.$store.state.count ;
  //   let val = this.$store.state.cost ;
  //   this.$store.state.final = num * val ;
  // },

  // beforeMount() {
  //   let num = this.jsonFile.count;
  //   let val = this.jsonFile.price;
  //   this.final = num * val;
  //   this.$emit("loadCost", this.final);
  //   return this.final;
  // },
  // updated() {
  //   let num = this.jsonFile.count;
  //   let val = this.jsonFile.price;
  //   this.final = num * val;
  //   this.$emit("loadCost", this.final);
  //   return this.final;
  // },

  mounted() {
    if (this.jsonPr[this.keyIndex].stock == 0) {
      this.testData = "! موجود نیست ";
      this.counter = 0;
    } else {
      this.counter = 1;
    }
  },
  
  methods: {
    deleteProduct() {
      this.$store.dispatch("deleteProduct", {
        vendorIndex: this.vendorIndexInProduct,
        productIndex: this.keyIndex,
      });
    },

    add(duration) {
      if (this.counter < this.jsonPr[this.keyIndex].stock) {
        this.setting = setTimeout(() => {
          this.counter++ ;
          this.add(duration - 15) ;
        }, duration);
      }
    },

    less(duration) {
      if (this.counter > 1) {
        this.setting = setTimeout(() => {
          this.counter--;
          this.less(duration - 15);
        }, duration);
      }
    },

    addSlow() {
      if (this.counter < this.jsonPr[this.keyIndex].stock) {
        this.counter++;
      }
    },

    lessSlow() {
      if (this.counter > 1) {
        this.counter--;
      }
    },

    stop() {
      clearInterval(this.setting);
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
  max-height: 100%;
  max-width: 100%;
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
  position: relative;
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
.exist {
  width: 120px;
  height: 20px;
  right: 5px;
  top: 5px;
  color: #f10b0b;
  position: absolute;
  font-size: 18px;
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
  background-image: url("~@/image/delVector.png");
  background-position: 5px 4px;
  background-repeat: no-repeat;
}
</style>