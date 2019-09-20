<template>
  <div>
    <el-input v-model="form[post]"></el-input>
  </div>
</template>

<script>
export default {
  name: 'EllInput',
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