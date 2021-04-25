<template>
  <div class="shop-title flex_column">
    <div class="boothName">
      <p class="whereFrom">
        از غرفه : <span>{{ jsonPr.title }}</span>
      </p>
    </div>
    <div class="boothFounder flex_row">
      <div class="boothPicture">
        <img :src="avatarUrl()" :alt="jsonPr.title" />
      </div>
      <div class="boothLocation flex_column">
        <div class="boothLocationFirstDiv">
          <p>{{ jsonPr.owner.name }}</p>
        </div>
        <div class="boothLocationSecondDiv">
          <p>
            <img src="@/image/VectorThree.png" alt="LocationVector" />
            {{ jsonPr.owner.city }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopTitle",
  data() {
    return {
      test : "Hello World !"
    }
  },
  // props from vendor component
  props: {
    jsonPr: {
      type: Object,
      required: true,
    },
  },
  
  methods: {
    avatarUrl : function(){
      let url = this.jsonPr.owner.avatar.url ;
      if(url == "#"){
        return "data:image/png;base64,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"
      }else{
        return url ;
      }
    }
  },
  mounted() {
    console.log("jsonPr is : ",this.jsonPr);
  },
};
</script>

<style scoped>
.shop-title {
  width: 100%;
  height: 100px;
}
.boothName {
  width: 100%;
  height: 40px;
  direction: rtl;
}
.boothName > p {
  font-size: 14px;
  font-weight: 400;
}
.boothName > span {
  font-size: 14px;
  font-weight: 700;
}
.whereFrom {
  padding: 20px 10px 0 0;
}
.whereFrom > span {
  font-weight: 700;
}
.boothFounder {
  width: 100%;
  height: 60px;
  direction: rtl;
}
.boothPicture {
  width: 20%;
  height: 100%;
}
.boothPicture > img {
  padding: 8px 15px 0 0;
  max-width: 100%;
  max-height: 100%;
}
.boothLocation {
  width: 80%;
  height: 100%;
}
.boothLocationFirstDiv {
  width: 100%;
  height: 50%;
  direction: rtl;
}
.boothLocationSecondDiv {
  width: 100%;
  height: 50%;
  direction: rtl;
}
.boothLocationFirstDiv > p {
  padding: 10px 0 0 0;
  font-size: 12px;
  font-weight: 400;
}
.boothLocationSecondDiv > p {
  font-size: 12px;
  font-weight: 400;
}
</style>