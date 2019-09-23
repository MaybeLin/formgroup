<template>
<div>
  <MoBanTemplate 
    :formList="list" 
    :form="form" 
    :tableList="tableList" 
    @addTableRow="addTableRow"
  />
  <el-button @click="showForm">提交</el-button>
</div>
  
</template>

<script>
import MOCK from '../../mock/index'
import MoBanTemplate from "../../components/zdytemplate.vue";
export default {
  data () {
    return {
      list: MOCK.form,
      tableList: MOCK.table,
      form: {}
    };
  },
  components: {
    MoBanTemplate
  },
  methods: {
    showForm() {
      console.log(this.form)
      console.log(this.tableList)
    },
    addTableRow(item) {
      item.row.push({
        parameter1: '哈哈',
        parameter2: '哈哈2'
      })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>