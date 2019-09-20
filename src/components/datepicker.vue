<template>
  <div>
    <el-date-picker
      v-model="form[post]"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'EllDatePicker',
  props: {
    form: {
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