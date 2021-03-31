<template>
  <div class="container-header">
    <div class="selectList flex_row_reverse">
      <div
        :class="{ selectedList: isOn, nextList: !isOn }"
        @click="check(true)"
      >
        سبد خرید
      </div>
      <div
        :class="{ nextList: isOn, selectedList: !isOn }"
        @click="check(false)"
      >
        لیست خرید بعدی
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "container",
  data() {
    return {
      content: "changeComponent",
      isOn: true,
    };
  },

  created() {
    this.$emit("changeContent", this.content);
  },

  methods: {
    check(status) {
      this.isOn = status;

      if (this.isOn) {
        this.content = "changeComponent";
      } else {
        this.content = "newBasket";
      }

      this.$emit("changeContent", this.content);
    },
    
  },

};
</script>

<style scoped>
.container-header {
  width: 100%;
  height: 40px;
}
.selectList {
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.selectedList {
  width: 50%;
  height: 100%;
  text-align: center;
  padding: 10px;
  border-bottom: solid #df3856 2px;
  color: rgba(223, 56, 86, 1);
}
.nextList {
  width: 50%;
  height: 100%;
  text-align: center;
  padding: 10px;
  border-bottom: solid 2px rgba(223, 223, 223, 1);
}
</style>