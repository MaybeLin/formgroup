<template>
  <div>
    <div>
      模板名称:
      <el-input placeholder="名称" />
    </div>
    <el-button @click="showForm">查看form</el-button>
    <div @click="addItem">添加一个字段</div>
    <div @click="addTable">添加一个表格</div>
    <AddItemDaiLog
      :type="addItemType"
      :showDialog="showAddItemDialog"
      @update:showDialog="showAddItemDialog = $event"
      @addItemForm="addItemForm"
    />
    <div class="table-list">
      <div v-for="(item,index) in tableList">
        <p>
          <span>表格内容编辑&nbsp;&nbsp;&nbsp;</span>
          <span @click="addTr(item,index)">增加一列&nbsp;&nbsp;&nbsp;</span>
          <span>删除表格&nbsp;&nbsp;&nbsp;</span>
        </p>
      </div>
    </div>
    <MoBanTemplate :formList="formList" :form="form" :tableList="tableList"></MoBanTemplate>
  </div>
</template>

<script>
import AddItemDaiLog from "../../components/addItem.vue";
import MoBanTemplate from "../../components/zdytemplate.vue";
export default {
  data() {
    return {
      addItemType: 1, //1 添加表单 2添加表格一列
      showAddItemDialog: false,
      formList: [],
      tableList: [],
      form: {}
    };
  },

  components: {
    AddItemDaiLog,
    MoBanTemplate
  },
  
  methods: {
    addItemForm(form,type) {
      if(type === 1) {
        this.formList.push(form);
      } else {
        this.tableList[this.addTrIndex].list.push({
          name: form.name,
          type: form.type
        })
        console.log(JSON.stringify(this.tableList[this.addTrIndex]))
      }
    },
    addItem() {
      this.showAddItemDialog = true;
      this.addItemType = 1;
    },
    addTable() {
      const len = this.tableList.length + 1
      this.tableList.push({
        name: 'table' + len,
        list: []
      })
    },
    addTr(item, index) {
      this.showAddItemDialog = true;
      this.addItemType = 2;
      this.addTrIndex = index
    },
    showForm() {
      console.log(this.form);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>