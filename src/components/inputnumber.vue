<template>
  <div>
    <el-input-number v-model="form[post]" :disabled="disabled" :min="1" :max="1000" controls-position="right" label></el-input-number>
  </div>
</template>

<script>
export default {
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