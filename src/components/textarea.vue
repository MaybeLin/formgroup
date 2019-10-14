<template>
  <!-- 文本框 -->
  <div>
    <el-input type="textarea" v-model="form[post]" :disabled="disabled"></el-input>
  </div>
</template>

<script>
export default {
  name: "EllTextarea",
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