<template>
  <div>
    <div>
      模板名称:
      <el-input placeholder="名称" />
    </div>
    <el-button @click="showForm">查看form</el-button>
    <div @click="addItem">添加一个字段</div>
    <div @click="addTable">添加一个表格</div>
    <div @click="addModel">添加一个竞品</div>
    <!-- 基本表单 -->
    <AddItemDaiLog
      :type="addItemType"
      :showDialog="showAddItemDialog"
      :editForm="editForm"
      :isEdit="isEdit"
      @update:showDialog="showAddItemDialog = $event"
      @addItemForm="addItemForm"
    />
    <MoBanTemplate
      :formList="formList"
      :form="form"
      :disabled="true"
      :formType="1"
      @edit="edit"
      @delform="delform"
    />
    <!-- 表格 -->
    <div class="table-list">
      <div v-for="(item,index) in tableList" :key="index">
        <p>
          <span>表格内容编辑&nbsp;&nbsp;&nbsp;</span>
          <span @click="addTr(item,index)">增加一列&nbsp;&nbsp;&nbsp;</span>
          <span @click="delTable(item,index)">删除表格&nbsp;&nbsp;&nbsp;</span>
        </p>
        <MoBanTemplate
          :tableList="item.list"
          :indexTable="index"
          :showTableType="1"
          :disabled="true"
          :formType="2"
          @edit="edit"
          @editTr="editTr"
          @delTr="delTr"
          @delform="delform"
        />
      </div>
    </div>

    <!-- 模版 -->
    <div class="model-list" v-for="(item,index) in modelList" :key="index">
      <div class="title">
        <span>
          {{item.modelName}}
          <i @click="editModel(item,index)" class="el-icon-edit"></i>
        </span>&nbsp;&nbsp;&nbsp;
        <span @click="addModelItem(item,index)">添加字段</span>&nbsp;&nbsp;&nbsp;
        <i @click="delModel(item,index)" class="el-icon-delete"></i>
      </div>
      <MoBanTemplate
        :modelFormList="item.list"
        :form="form"
        :disabled="true"
        :formType="3"
        @edit="edit"
        @delform="delform"
      />
    </div>
    <AddModelDaiLog
      :showModelDialog="showAddModelDialog"
      :defaultForm="modelIndexForm"
      @update:showModelDialog="showAddModelDialog = $event"
      @addModelForm="addModelForm"
    />
  </div>
</template>

<script>
import AddItemDaiLog from "../../components/addItem.vue";
import AddModelDaiLog from "../../components/addModel.vue";
import MoBanTemplate from "../../components/zdytemplate.vue";
export default {
  data() {
    return {
      addItemType: 1, //1 添加表单 2添加表格一列
      showAddItemDialog: false,
      showAddModelDialog: false,
      formList: [],
      tableList: [],
      modelList: [], //模版列表
      modelFormList: [], //模版表单列表
      form: {},
      editForm: {},
      modelIndexForm: {}, //当前模版编辑
      isEdit: false, //编辑某个字段
      isEditModel: false, //编辑模版否
      tableIndex: "" //当前表格编辑
    };
  },

  components: {
    AddItemDaiLog,
    MoBanTemplate,
    AddModelDaiLog
  },

  methods: {
    addItemForm(form, type) {
      if (type === 1) {
        //基础表单
        if (form.type === "CheckBox") {
          this.$set(this.form, form.name, []);
        }
        if (this.isEdit) {
          for (let i = 0; i < this.formList.length; i++) {
            if (this.formList[i].keys === form.keys) {
              this.$set(this.formList, i, form);
              break;
            }
          }
          return;
        }
        form.keys = +new Date() + Math.floor(Math.random() * 10000);
        this.formList.push(form);
      } else if (type === 2) {
        //表格
        if (this.isEdit) {
          console.log(this.tableList)
          console.log(this)
          for (let i = 0; i < this.tableList[this.tableIndex].list.length; i++) {
            if (this.tableList[this.tableIndex].list[i].keys === form.keys) {
              this.$set(this.tableList[this.tableIndex].list, i, form);
              break;
            }
          }
          return;
        }
        this.tableList[this.addTrIndex].list.push({
          name: form.name,
          type: form.type,
          keys: +new Date() + Math.floor(Math.random() * 10000)
        });
      } else if (type === 3) {
        //模版表单
        if (form.type === "CheckBox") {
          this.$set(this.form, form.name, []);
        }
        if (this.isEdit) {
          for (
            let i = 0;
            i < this.modelList[this.addModelIndex].list.length;
            i++
          ) {
            if (this.modelList[this.addModelIndex].list[i].keys === form.keys) {
              this.$set(this.modelList[this.addModelIndex].list, i, form);
              break;
            }
          }
          return;
        }
        form.keys = +new Date() + Math.floor(Math.random() * 10000);
        const indexList = this.modelList[this.addModelIndex].list
        
        indexList.push(form)
        const newList = JSON.parse(JSON.stringify(indexList))
        this.$set(this.modelList[this.addModelIndex], 'list' ,newList)
      }
    },
    //添加字段
    addItem() {
      this.showAddItemDialog = true;
      this.isEdit = false;
      this.editForm = {};
      this.addItemType = 1;
    },
    //添加表格
    addTable() {
      const len = this.tableList.length + 1;
      this.tableList.push({
        name: "table" + len,
        list: [],
        keys: +new Date() + Math.floor(Math.random() * 10000)
      });
    },
    //添加一列
    addTr(item, index) {
      this.showAddItemDialog = true;
      this.addItemType = 2;
      this.isEdit = false;
      this.editForm = {};
      this.addTrIndex = index;
    },
    //编辑一列
    editTr(item, indexTable) {
      this.saveIndexEditForm = item;
      this.editForm = JSON.parse(JSON.stringify(item));
      this.isEdit = true;
      this.showAddItemDialog = true;
      this.tableIndex = indexTable;
    },
    //删除一列
    delTr(item, indexTable) {
      this.tableList[indexTable].list.splice(
        this.tableList[indexTable].list.findIndex(
          items => items.keys === item.keys
        ),
        1
      );
    },
    //删除表格
    delTable(item, index) {
      this.tableList.splice(
        this.tableList.findIndex(items => items.name === item.name),
        1
      );
    },
    showForm() {
      console.log(this.formList);
      console.log(this.tableList);
      console.log(this.modelList);
    },
    //编辑字段
    edit(item) {
      this.saveIndexEditForm = item;
      this.editForm = JSON.parse(JSON.stringify(item));
      this.isEdit = true;
      this.showAddItemDialog = true;
    },
    //删除某个表单
    delform(item) {
      this.formList.splice(
        this.formList.findIndex(items => items.keys === item.keys),
        1
      );
    },
    //添加竞品
    addModel() {
      this.showAddModelDialog = true;
      this.isEditModel = false;
    },
    addModelForm(form) {
      if (this.isEditModel) {
        for (let i = 0; i < this.modelList.length; i++) {
          if (this.modelList[i].keys === form.keys) {
            this.$set(this.modelList, i, form);
            break;
          }
        }
        return;
      }
      form.keys = +new Date() + Math.floor(Math.random() * 10000);
      form.list = [];
      this.modelList.push(form);
      console.log(this.modelList);
    },
    //编辑竞品
    editModel(item, index) {
      this.showAddModelDialog = true;
      this.modelIndexForm = JSON.parse(JSON.stringify(item));
      this.isEditModel = true;
    },
    //添加模版字段
    addModelItem(item, index) {
      this.showAddItemDialog = true;
      this.isEdit = false;
      this.editForm = {};
      this.addItemType = 3;
      this.addModelIndex = index;
    },
    //删除模版
    delModel(item, index) {
      this.modelList.splice(
        this.modelList.findIndex(items => items.keys === item.keys),
        1
      );
    }
  }
};
</script>
<style lang='scss' scoped>
</style>