<template>
  <div>
    <el-radio-group v-model="form[post]">
      <el-radio v-for="item in pitem.radioList" :label="item.name">{{item.name}}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'EllRadio',
  props: {
    form: {
      type: Object,
      default: () => {
        return {}
      }
    },
    pitem: {
      type: Object,
      default: () => {
        return {}
      }
    },
    post: {
      type: String
    },
    name: {
      type: String
    }
  }
}

</script>
<style lang='scss' scoped>
</style>