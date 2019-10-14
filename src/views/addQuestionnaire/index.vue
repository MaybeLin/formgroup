<template>
  <div class="add-questionnaire">
    <div class="add">
      <el-button type="text" class="add-text" @click="handleAdd()">
        <i class="el-icon-circle-plus-outline"></i>添加
      </el-button>
      <el-button type="text" class="add-text" @click="handlePreview()">
        <i class="el-icon-circle-plus-outline"></i>预览问卷
      </el-button>
    </div>
    <AddQuestionDaiLog
      :showDialog="showDialog"
      :editForm="editForm"
      @update:showDialog="showDialog = $event"
      @addForm="addForm"
    ></AddQuestionDaiLog>
    <Questionnaire
      :questionList="questionList"
      @updateQuestionList="updateQuestionList"
      @delQuestion="delQuestion"
      @editQuestion="editQuestion"
    ></Questionnaire>
    <previewQuestionDialog
      :questionList="questionList"
      :showPreviewDialog="showPreviewDialog"
      @update:showPreviewDialog="showPreviewDialog = $event"
    ></previewQuestionDialog>
  </div>
</template>

<script>
import AddQuestionDaiLog from "../../components/addQuestion.vue";
import Questionnaire from "../../components/questionnaire.vue";
import previewQuestionDialog from "../../components/previewQuestionDialog.vue";
export default {
  components: { AddQuestionDaiLog, Questionnaire, previewQuestionDialog },

  data() {
    return {
      showDialog: false,
      showPreviewDialog: false,
      questionList: [],
      isEdit: false,
      editForm: {}
    };
  },
  methods: {
    handleAdd() {},
    //添加问题
    handleAdd() {
      this.isEdit = false;
      this.showDialog = true;
    },
    addForm(form) {
      if (this.isEdit) {
        for (let i = 0; i < this.questionList.length; i++) {
          if (this.questionList[i].keys === form.keys) {
            this.$set(this.questionList, i, form);
            break;
          }
        }
        return;
      }
      form.keys = +new Date() + Math.floor(Math.random() * 10000);
      this.questionList.push(form);
    },
    //更新问题
    updateQuestionList(v) {
      this.questionList = v;
    },
    //删除问题
    delQuestion(item) {
      this.questionList.splice(
        this.questionList.findIndex(items => items.keys === item.keys),
        1
      );
    },
    //编辑问题
    editQuestion(item) {
      this.editForm = JSON.parse(JSON.stringify(item));
      this.isEdit = true;
      this.showDialog = true;
    },
    //预览问卷
    handlePreview() {
      this.showPreviewDialog = true;
    }
  }
};
</script>