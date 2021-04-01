<template>
  <div class="container-third">
    <div class="finalBuyBtn flex_row">
      <div class="finalCost" id="secondFinalCost">
        <div class="constSen">مبلغ قابل پرداخت 2 غرفه</div>
        <div class="factor">465000</div>
      </div>
      <div class="buyBtn">
        <a><button>ادامه خرید از 2 غرفه</button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-third{
    width: 100%;
    height: 90px;
    position: fixed;
    bottom: 0;
    width: 360px;
    background: white;
}
.finalBuyBtn{
    width: 100%;
    height: 70px;
}
.finalCost{
    width: 50%;
    height: 100%;
}
#secondFinalCost{
    margin: 25px 0 0 0;
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
a > button{
    height: 48px;
    width: 180px;
    border-radius: 100px;
    border: none;
    background: rgba(223, 56, 86, 1);
    margin: 20px 10px 0 0;
    font-size: 16px;
    color: rgba(250, 250, 250, 1);
    font-size: 16px;
    font-weight: 700;
}
</style>