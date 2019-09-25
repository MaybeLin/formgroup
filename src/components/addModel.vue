<template>
  <!-- 新增竞品 -->
  <div class="add-model" v-if="showModelDialog">
    <el-dialog title="添加竞品" :visible.sync="modelDialog" @close="close">
      <el-form :model="form" class="mt42" :rules="rules" ref="formData">
        <el-form-item label="竞品名称" label-width="100px" prop="name">
          <el-input v-model="form.modelName" placeholder="请输入数量"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="saveModel()">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    showModelDialog: {
      type: Boolean,
      default: false
    },
    defaultForm: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      modelDialog: false,
      form: {},
      rules: {
        modelName: {
          required: true,
          message: "请填写字段名称",
          trigger: "blur"
        }
      }
    };
  },
  methods: {
    //关闭弹窗
    close() {
      this.modelDialog = false;
      this.$emit("update:showModelDialog", false);
    },
    //保存
    saveModel() {
      this.$refs["formData"].validate(valid => {
        if (valid) {
          this.$emit("update:showModelDialog", false);
          this.$emit("addModelForm", this.form);
        } else {
          return false;
        }
      });
    }
  },
  watch: {
    showModelDialog() {
      this.form = {};
      this.modelDialog = this.showModelDialog;
    },
    defaultForm() {
      this.form = this.defaultForm;
    }
  }
};
</script>