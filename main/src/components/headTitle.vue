<template>
  <div class="header">
    <div class="main-container flex_row">
      <div class="basketItem flex_row">
        <!-- <img src="image/Small.png" alt="NumText" id="basketItemImg1"> -->
        <div class="small-badge">{{number}}</div>
        <img src="@/image/Vector.png" alt="basketLogo" id="basketItemImg2" />
        <div class="sellingButton">
          <button>فروش در باسلام</button>
        </div>
      </div>
      <div class="logoItem">
        <img src="@/image/Logo.png" alt="Logo" id="image1" />
        <img src="@/image/Type.png" alt="NameLogo" id="image2" />
        <img src="@/image/downVector.png" id="image3" />
      </div>
      <div class="searchbox">
        <input
          type="search"
          placeholder="جستجو در صدها هزار محصول خانگی و محلی ..."
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headTitle",
  data() {
    return {
      number : 0 ,
    }
  },
};
</script>

<style scoped>
.main-container{
    width: 360px;
    height: 101px;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
}
.basketItem{
    width: 180px;
    height: 50px;
    position: relative;
}
.small-badge{
    width: 18px;
    height: 18px;
    background: rgba(223, 56, 86, 1);
    border-radius: 50%;
    position: absolute;
    top: 8px;
    left: 8px;
    color: rgba(255, 255, 255, 1);
    font-size: 12px;
    font-weight: 700;
    padding-top: 1px;
    text-align: center;
}
#basketItemImg2{
    width: 16px;
    height: 20px;
    margin: 14px 8px 0px 22px;
}
.sellingButton{
    padding: 10px 0 0 0;
}
.sellingButton > button {
    width: 103px;
    height: 32px;
    background:#3E3E3E;
    border-radius: 50px;
    color: white;
}
.logoItem{
    width: 180px;
    height: 50px;
    direction: rtl;
    padding: 15px 20px 0 0 ;
}
.searchbox{
    width: 360px;
    height: 51px;
    text-align: center;
}
.searchbox input{
    width: 328px;
    height: 40px;
    border-radius: 100px;
    border: 1px solid #9D9D9D;
    box-sizing: border-box;
    direction: rtl;
    padding: 0 10px 0 0;
    /* background-image: url('image/searchVector.png'); */
    background-position: 10px 8px; 
    background-repeat: no-repeat;
    font-size: 12px;
    font-weight: 400;
}
#image3{
    padding: 5px;
}
</style>