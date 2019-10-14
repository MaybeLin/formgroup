<template>
  <!-- 日期选择 -->
  <div>
    <el-date-picker v-model="form[post]" type="date" placeholder="选择日期" :disabled="disabled"></el-date-picker>
  </div>
</template>

<script>
export default {
  name: "EllDatePicker",
  props: {
    form: {
      type: Object,
      default: () => {
        return {};
      }
    },
    post: {
      type: String
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang='scss' scoped>
</style>