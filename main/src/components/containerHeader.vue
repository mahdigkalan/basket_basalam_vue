<template>
  <div class="container-header">
    <div class="selectList flex_row_reverse">
      <div class="selectedList">سبد خرید</div>
      <div class="nextList">لیست خرید بعدی</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "container",
};
</script>

<style scoped>
.container-header{
    width: 100%;
    height: 40px;
}
.selectList{
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
}
.selectedList{
    width: 50%;
    height: 100%;
    text-align: center;
    padding: 10px;
    border-bottom: solid #DF3856 2px ;
    color: rgba(223, 56, 86, 1);
}
.nextList{
    width: 50%;
    height: 100%;
    text-align: center;
    padding: 10px;
    border-bottom: solid #DFDFDF 2px;
}
</style>