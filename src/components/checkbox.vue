<template>
  <div>
    <el-checkbox-group v-model="form[post]">
      <el-checkbox v-for="(item,index) in pitem.checkList" :key="index" :label="item.name" />
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "EllCheckBox",
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
    }
  },
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"]
    };
  }
};
</script>