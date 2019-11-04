<template>
  <!-- 文本框 -->
  <div>
    <el-input type="textarea" v-model="form[post]" :disabled="disabled" placeholder="请输入"></el-input>
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
/deep/.el-textarea {
  padding: 0 0.2rem;
  margin-bottom: .2rem;
}
/deep/.el-textarea__inner {
  height: 2.8rem;
  background: #f1f1f1;
  border: none;
  border-radius: .08rem;
}
</style>