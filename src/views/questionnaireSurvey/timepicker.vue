<template>
  <!-- 时间选择 -->
  <div>
    <el-date-picker v-model="form[post]" type="date" placeholder="选择时间" :disabled="disabled"></el-date-picker>
  </div>
</template>

<script>
export default {
  name: "EllTimePicker",
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