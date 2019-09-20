<template>
  <div class="add-item" v-if="showDialog">
    <el-dialog title="添加字段" :visible.sync="dialogaddItemVisible" @close="close">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="字段名称">
          <el-input v-model="form.name"></el-input>
          <el-checkbox v-model="form.required">是否必填</el-checkbox>
        </el-form-item>
        <el-form-item label="字段类型">
          <el-radio-group v-model="form.type">
            <el-radio v-for="item in formList" :label="item.type">{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="单选选择" v-if="form.type === 'Radio'">
          <div v-for="item in radioList">
            <el-input  v-model="item.name" />
          </div>
          <el-button @click="pushRadio">添加一个</el-button>
        </el-form-item>
        <el-form-item label="展示类型">
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
      formList: [{
        name: '单选框',
        type: 'Radio'
      },{
        name: '多选框',
        type: 'checkbox'
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
      this.dialogaddItemVisible = false;
      this.$emit("update:showDialog", false);
      this.$emit("addItemForm", form);
    },
    pushRadio() {
      this.radioList.push({
        name: ''
      })
    }
  }
};
</script>
<style lang='scss' scoped>
</style>