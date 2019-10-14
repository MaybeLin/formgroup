<template>
  <div class="preview-question" v-if="showPreviewDialog">
    <el-dialog title="调查问卷" :visible.sync="dialogPreviewVisible" @close="close">
      <div class="title">{{questionTitle}}</div>
      <previewQuestionList :questionList="questionDataList"></previewQuestionList>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import previewQuestionList from "../components/previewQuestionList.vue";
export default {
  components: { previewQuestionList },
  props: {
    questionTitle: {
      type: String,
      default: "问卷调查的题目什么的限制20个字"
    },
    questionList: {
      type: Array,
      default: []
    },
    showPreviewDialog: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showPreviewDialog() {
      this.dialogPreviewVisible = this.showPreviewDialog;
      this.questionDataList = this.questionList;
      console.log(this.questionDataList);
    }
  },
  data() {
    return {
      dialogPreviewVisible: false,
      questionDataList: []
    };
  },
  methods: {
    close() {
      //关闭弹窗
      this.dialogPreviewVisible = false;
      this.$emit("update:showPreviewDialog", false);
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}
</style>