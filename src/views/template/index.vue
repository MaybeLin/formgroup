<template>
  <div>
    <MoBanTemplate
      :formList="list"
      :form="form"
      :tableList="tableList"
      :uploadImgList="uploadImgList"
      :showTableType="2"
      @addTableRow="addTableRow"
    />
    <el-button @click="showForm">提交</el-button>
  </div>
</template>

<script>
import MOCK from "../../mock/index";
import MoBanTemplate from "../../components/zdytemplate.vue";
export default {
  
  data() {
    return {
      list: MOCK.form,
      tableList: MOCK.table,
      uploadImgList: MOCK.uploadImgList,
      form: {}
    };
  },
  components: {
    MoBanTemplate
  },
  mounted() {
    this.list.forEach(item => {
      if (item.value) {
        this.$set(this.form, item.name, item.value);
      }
    });
    console.log(this.form);
    console.log(this.list);
  },
  methods: {
    showForm() {
      this.list.forEach(item => {
        if (this.form[item.name]) {
          item.value = this.form[item.name];
        }
      });
      console.log(this.uploadImgList)
    },
    addTableRow(item) {
      item.row.push({
        parameter1: "哈哈",
        parameter2: "哈哈2"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>