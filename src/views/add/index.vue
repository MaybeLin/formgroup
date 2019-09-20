<template>
  <div>
    <div>
      模板名称:
      <el-input placeholder="名称" />
    </div>
    <el-button @click="showForm">查看form</el-button>
    <div @click="addItem">添加一个字段</div>
    <div>添加一个表格</div>
    <AddItemDaiLog
      :showDialog="showAddItemDialog"
      @update:showDialog="showAddItemDialog = $event"
      @addItemForm="addItemForm"
    />
    <MoBanTemplate :formList="formList" :form="form"></MoBanTemplate>
    <!-- <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <div v-for="item in formList">
        <el-form-item :label="item.name" :prop="item.name">
          <component 
            :is="'Ell' + item.type" 
            :form="form" 
            :post="item.name" 
            :name="item.name" 
          />
        </el-form-item>
      </div>
    </el-form> -->
  </div>
</template>

<script>
import AddItemDaiLog from "../../components/addItem.vue";
import MoBanTemplate from "../../components/zdytemplate.vue";
export default {
  data() {
    return {
      showAddItemDialog: false,
      formList: [],
      form: {}
    };
  },

  components: {
    AddItemDaiLog,
    MoBanTemplate
  },
  
  methods: {
    addItemForm(form) {
      this.formList.push(form);
      console.log(this.formList)
    },
    addItem() {
      this.showAddItemDialog = true;
    },
    showForm() {
      console.log(this.form);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>