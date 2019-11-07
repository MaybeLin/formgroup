<template>
  <!-- 字段新增 -->
  <div class="add-item" v-if="showDialog">
    <el-dialog title="添加字段" :visible.sync="dialogaddItemVisible" @close="close">
      <el-form ref="formData" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="字段名称" prop="name">
          <el-input v-model="form.name"></el-input>
          <el-checkbox v-model="form.required">是否必填</el-checkbox>
        </el-form-item>
        <el-form-item label="字段类型" prop="type" v-if="type !== 4">
          <el-radio-group v-model="form.type" @change="typeChange">
            <el-radio v-for="item in formList" :label="item.type" :disabled="isEdit">{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 单选 -->
        <el-form-item label="添加选项" v-if="form.type === 'Radio'">
          <div v-for="(item,index) in radioList">
            <el-input v-model="item.name" />
            <i v-if="index!==0" class="el-icon-remove-outline" @click="delRadioOption(index)"></i>
          </div>
          <el-button @click="pushRadio">添加选项</el-button>
        </el-form-item>
        <!-- 多选 -->
        <el-form-item label="添加选项" v-if="form.type === 'CheckBox'">
          <div v-for="(item,index) in checkList">
            <el-input v-model="item.name" />
            <i v-if="index!==0" class="el-icon-remove-outline" @click="delCheckOption(index)"></i>
          </div>
          <el-button @click="pushCheck">添加选项</el-button>
        </el-form-item>
        <el-form-item label="展示类型" v-if="type === 1||type ===4">
          <el-radio v-model="form.showType" label="half" :disabled="isEdit">半行</el-radio>
          <el-radio v-model="form.showType" label="line" :disabled="isEdit">整行</el-radio>
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
      default: 1 //1表单 2表格 3模版 4表格
    },
    editForm: {
      type: Object,
      default: () => {}
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showDialog() {
      this.form = {};
      this.radioList = [{ name: "" }];
      this.checkList = [{ name: "" }];
      if (this.showDialog) {
        this.form = this.editForm || {};
        if (this.form.type === "Radio") this.radioList = this.form.radioList;
        if (this.form.type === "CheckBox") this.checkList = this.form.checkList;
      }
      this.dialogaddItemVisible = this.showDialog;
    }
  },
  data() {
    return {
      dialogaddItemVisible: true,
      form: {},
      radioList: [{ name: "" }],
      checkList: [{ name: "" }],
      formList: [
        {
          name: "单选框",
          type: "Radio"
        },
        {
          name: "多选框",
          type: "CheckBox"
        },
        {
          name: "文字输入框",
          type: "Input"
        },
        {
          name: "数字输入框",
          type: "Inputnumber"
        },
        {
          name: "日期选择",
          type: "Datepicker"
        }
      ],
      rules: {
        name: {
          required: true,
          message: "请填写字段名称",
          trigger: "blur"
        },
        type: {
          required: true,
          message: "请选择字段类型",
          trigger: "blur"
        }
      }
    };
  },
  methods: {
    close() {
      //关闭弹窗
      this.dialogaddItemVisible = false;
      this.$emit("update:showDialog", false);
    },
    typeChange(v) {
      //切换字段---清空list
      this.radioList = [{ name: "" }];
      this.checkList = [{ name: "" }];
    },
    saveForm() {
      //保存字段
      this.$refs["formData"].validate(valid => {
        if (valid) {
          if (this.form.type === "Radio" && this.radioList.length !== 0) {
            for (let i = 0; i < this.radioList.length; i++) {
              if (this.radioList[i].name === "") {
                this.$message.error("请完善选项内容");
                return false;
              }
            }
          }
          if (this.form.type === "CheckBox" && this.checkList.length !== 0) {
            for (let i = 0; i < this.checkList.length; i++) {
              if (this.checkList[i].name === "") {
                this.$message.error("请完善选项内容");
                return false;
              }
            }
          }
          const form = this.form;
          if (form.type === "Radio") form.radioList = this.radioList;
          if (form.type === "CheckBox") form.checkList = this.checkList;
          this.dialogaddItemVisible = false;
          this.$emit("update:showDialog", false);
          this.$emit("addItemForm", form, this.type);
        } else {
          return false;
        }
      });
    },
    pushRadio() {
      //新增单选选项
      this.radioList.push({
        name: ""
      });
    },
    delRadioOption(index) {
      //删除单选选项
      this.radioList.splice(index, 1);
    },
    pushCheck() {
      //新增多选选项
      this.checkList.push({
        name: ""
      });
    },
    delCheckOption(index) {
      //删除单选选项
      this.checkList.splice(index, 1);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>