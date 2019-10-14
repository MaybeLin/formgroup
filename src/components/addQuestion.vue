<template>
  <div class="add-question">
    <el-dialog title="添加问题" :visible.sync="dialogVisible" @close="close">
      <el-form ref="formData" :model="form" label-width="130px" :rules="rules">
        <el-form-item label="请选择问题类型" prop="type">
          <el-radio-group v-model="form.type" @change="typeChange">
            <el-radio v-for="item in formList" :label="item.type" :disabled="isEdit">{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="问题名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入"></el-input>
        </el-form-item>
        <!-- 单选 -->
        <el-form-item label="请输入问题选项" v-if="form.type === 'Radio'">
          <div v-for="(item,index) in radioList">
            <el-input v-model="item.name" />
            <i v-if="index!==0" class="el-icon-remove-outline" @click="delRadioOption(index)"></i>
          </div>
          <el-button type="text" class="add-text" @click="pushRadio">
            <i class="el-icon-circle-plus-outline"></i>添加新选项
          </el-button>
        </el-form-item>
        <!-- 多选 -->
        <el-form-item label="请输入问题选项" v-if="form.type === 'CheckBox'">
          <div v-for="(item,index) in checkList">
            <el-input v-model="item.name" />
            <i v-if="index!==0" class="el-icon-remove-outline" @click="delCheckOption(index)"></i>
          </div>
          <el-button type="text" class="add-text" @click="pushCheck">
            <i class="el-icon-circle-plus-outline"></i>添加新选项
          </el-button>
        </el-form-item>
        <el-form-item label="是否为必填题目" prop="require">
          <el-radio-group v-model="form.require">
            <el-radio label="true">是</el-radio>
            <el-radio label="false">否</el-radio>
          </el-radio-group>
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
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    editForm: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dialogVisible: false,
      radioList: [{ name: "" }],
      checkList: [{ name: "" }],
      form: {},
      rules: {
        name: {
          required: true,
          message: "请输入问题名称",
          trigger: "blur"
        },
        type: {
          required: true,
          message: "请选择问题类型",
          trigger: "blur"
        },
        require: {
          required: true,
          message: "请选则是否必填",
          trigger: "blur"
        }
      },
      formList: [
        {
          name: "单选题",
          type: "Radio"
        },
        {
          name: "多选题",
          type: "CheckBox"
        },
        {
          name: "问答题",
          type: "Textarea"
        },
        {
          name: "日期",
          type: "Datepicker"
        },
        {
          name: "时间",
          type: "Timepicker"
        }
      ]
    };
  },

  watch: {
    showDialog() {
      this.form = {};
      this.radioList = [{ name: "" }];
      this.checkList = [{ name: "" }];
      this.dialogVisible = this.showDialog;
    },
    editForm(v) {
      this.form = v;
      if (v.type === "Radio") this.radioList = this.form.radioList;
      if (v.type === "CheckBox") this.checkList = this.form.checkList;
    }
  },
  methods: {
    typeChange() {
      //切换字段---清空list
      this.radioList = [{ name: "" }];
      this.checkList = [{ name: "" }];
    },
    //单选添加一项
    pushRadio() {
      this.radioList.push({
        name: ""
      });
    },
    //单选删除一项
    delRadioOption(index) {
      this.radioList.splice(index, 1);
    },
    //多选添加一项
    pushCheck() {
      this.checkList.push({
        name: ""
      });
    },
    //多选删除一项
    delCheckOption(index) {
      this.checkList.splice(index, 1);
    },
    //确定
    saveForm() {
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
          const typeArr = form.type.split(",");
          form.type = typeArr[0]; //类型
          form.label = typeArr[1]; //类型中文
          if (form.type === "Radio") form.radioList = this.radioList;
          if (form.type === "CheckBox") form.checkList = this.checkList;
          this.dialogVisible = false;
          this.$emit("update:showDialog", false);
          this.$emit("addForm", form);
        } else {
        }
      });
    },
    //取消弹窗
    close() {
      this.dialogVisible = false;
      this.$emit("update:showDialog", false);
    }
  }
};
</script>