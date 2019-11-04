<template>
  <!-- 单选 -->
  <div>
    <el-radio-group v-model="form[post]">
      <el-radio
        v-for="item in pitem.radioList"
        :label="item.name"
        :disabled="disabled"
      >{{item.name}}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "EllRadio",
  props: {
    form: {
      type: Object,
      default: () => {
        return {};
      }
    },
    pitem: {
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
<style lang="scss" scoped>
.el-radio-group{
  width: 100%;
}
/deep/.el-radio{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: .21rem;
  margin-right: 0;
}
/deep/.el-radio__label{
  flex: 1!important;
  border-bottom: 2px solid #F1F1F1;
  padding: .28rem 0;
  margin-left: .35rem;
}
/deep/.el-radio:last-child{
  .el-radio__label{
    border: none;
  }
}
</style>