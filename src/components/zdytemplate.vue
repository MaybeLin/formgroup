<template>
  <el-form ref="form" :model="form" label-width="80px" :rules="rules">
    <div v-for="item in formList">
      <el-form-item :label="item.name" :prop="item.name">
        <component 
          :is="'Ell' + item.type" 
          :form="form" 
          :pitem="item"
          :post="item.name" 
        />
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import EllInput from "./input.vue";
import EllDatepicker from "./datepicker.vue";
import EllRadio from "./radio";
export default {
  props: {
    formList: {
      type: Array,
      default: () => []
    },
    form: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
    };
  },

  components: {
    EllInput,
    EllDatepicker,
    EllRadio
  },

  computed: {
    rules() {
      const rules = {}
      console.log(JSON.stringify(this.formList))
      this.formList.forEach(item => {
        rules[item.name] = [
          {required: item.required,message: `${item.name}必填`}
        ]
      })
      return rules
    }
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>