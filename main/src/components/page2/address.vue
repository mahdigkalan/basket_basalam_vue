<template>
  <div class="address full_width flex_column">
    <div class="address-header-to full_width flex_row_reverse">
      <p>به : مهدی خدادادی</p>
      <button></button>
    </div>

    <div class="main-address full_width">
      <label class="label"
        >قم،پردیسان،خیابان دانشگاه،بعد از میدان علوم،رو به روی پایانه،ساختمان
        شرکت توسعه و تدبیر جوامع باسلام
        <input type="radio" checked="checked" name="radio" />
        <span class="span"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "address",
};
</script>

<style>
.address{
    width: 360px;
   height: 130px;
   border-bottom: 1px solid #EEEEEE; 
}
.address-header-to{
    height: 40px;
    position: relative;
}
.address-header-to > p {
    margin:10px 58px 0 0;
}
.address-header-to > button {
    height: 32px;
    width: 32px;
    border-radius: 100px;
    border: none;
    background: rgba(238, 238, 238, 1);
    background-image: url('~@/image/editVector.png');
    background-position: 6px 4px; 
    background-repeat: no-repeat;
    position: absolute;
    top: 10px;
    left: 16px;
}
.main-address{
    direction: rtl;
}
.main-address > form >input{
    width: 20px;
    height: 20px;
    margin: 10px 22px 0 0 ;
}
.main-address > form > label{
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
}
.label {
    display: block;
    position: relative;
    padding: 4px 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .span {
    position: absolute;
    top: 10px;
    right: 22px;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }
  .label:hover input ~ .span {
    background-color: #ccc;
  }
  .label input:checked ~ .span {
    background: #DF3856;
  }
  .span:after {
    content: "";
    position: absolute;
    display: none;
  }
  .label input:checked ~ .span:after {
    display: block;
  }
  .label .span:after {
       top: 6.5px;
      left: 6.5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
}
</style>