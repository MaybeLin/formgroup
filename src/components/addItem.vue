<template>
  <div class="add-item" v-if="showDialog">
    <el-dialog title="添加字段" :visible.sync="dialogaddItemVisible" @close="close">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="字段名称">
          <el-input v-model="form.name"></el-input>
          <el-checkbox v-model="form.required" v-if="type === 1">是否必填</el-checkbox>
        </el-form-item>
        <el-form-item label="字段类型">
          <el-radio-group v-model="form.type">
            <el-radio v-for="item in formList" :label="item.type">{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="单选选择" v-if="form.type === 'Radio' && type === 1">
          <div v-for="item in radioList">
            <el-input  v-model="item.name" />
          </div>
          <el-button @click="pushRadio">添加一个</el-button>
        </el-form-item>
        <el-form-item label="添加选项" v-if="form.type === 'CheckBox' && type === 1">
          <div v-for="item in checkList">
            <el-input  v-model="item.name" />
          </div>
          <el-button @click="pushCheck">添加一个</el-button>
        </el-form-item>
        <el-form-item label="展示类型" v-if="type === 1">
          <el-radio v-model="form.showType" label="half">半行</el-radio>
          <el-radio v-model="form.showType" label="line">整行</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="saveForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "addItemComponents",
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    type: {
      type: Number,
      default: 1
    }
  },
  watch: {
    showDialog() {
      if(this.showDialog) {
        this.form= { }
      }
      this.dialogaddItemVisible = this.showDialog;
    }
  },
  data() {
    return {
      dialogaddItemVisible: true,
      form: {},
      radioList: [{name: ''}],
      checkList: [{name: ''}],
      formList: [{
        name: '单选框',
        type: 'Radio'
      },{
        name: '多选框',
        type: 'CheckBox'
      },{
        name: '文字输入框',
        type: 'Input'
      },{
        name: '数字输入框',
        type: 'input'
      },{
        name: '日期选择',
        type: 'Datepicker'
      }]
    };
  },
  methods: {
    close() {
      this.dialogaddItemVisible = false;
      this.$emit("update:showDialog", false);
    },
    saveForm() {
      const form = this.form;
      if(form.type === 'Radio') form.radioList = this.radioList
      if(form.type === 'CheckBox') form.checkList = this.checkList

      this.dialogaddItemVisible = false;
      this.$emit("update:showDialog", false);
      this.$emit("addItemForm", form, this.type);
    },
    pushRadio() {
      this.radioList.push({
        name: ''
      })
    },
    pushCheck() {
      this.checkList.push({
        name: ''
      })
    }
  }
};
</script>
<style lang='scss' scoped>
</style>