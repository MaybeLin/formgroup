<template>
  <!-- 添加问卷渲染 -->
  <div class="questionnaire">
    <draggable v-model="questionDataList" @change="changeList">
      <transition-group>
        <div class="question-list" v-for="(item,index) in questionDataList" :key="item.keys">
          <div class="title">
            <div class="title-left">
              <span>{{index+1}}</span>
              <span v-if="item.type==='Radio'">「单选题」</span>
              <span v-else-if="item.type==='CheckBox'">「多选题」</span>
              <span v-else-if="item.type==='Textarea'">「问答题」</span>
              <span v-else-if="item.type==='Datepicker'">「日期」</span>
              <span v-else>「时间」</span>
              {{item.name}}
            </div>
            <div class="title-right">
              <i class="el-icon-delete" @click="delet(item)"></i>
              <i class="el-icon-edit-outline" @click="edit(item)"></i>
            </div>
          </div>
          <component
            :is="'Ell' + item.type"
            :form="form"
            :pitem="item"
            :post="item.name"
            :disabled="true"
            class="el-form-cont"
          />
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import EllDatepicker from "./datepicker.vue"; //日期
import EllTimepicker from "./datepicker.vue"; //时间
import EllTextarea from "./textarea.vue"; //文本框
import EllRadio from "./radio"; //单选
import EllCheckBox from "./checkbox.vue"; //多选
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
    EllDatepicker,
    EllTimepicker,
    EllTextarea,
    EllRadio,
    EllCheckBox
  },
  props: {
    questionList: {
      type: Array,
      default: []
    }
  },
  watch: {
    questionList(v) {
      console.log(v);
      this.questionDataList = v;
    }
  },
  data() {
    return {
      form: {},
      questionDataList: []
    };
  },
  methods: {
    // 拖拽题目顺序
    changeList(e) {
      this.$emit("updateQuestionList", this.questionDataList);
      console.log(this.questionDataList);
    },
    //编辑题目
    edit(item) {
      this.$emit("editQuestion", item);
    },
    //删除题目
    delet(item, index) {
      this.$emit("delQuestion", item);
    }
  }
};
</script>

<style scoped>
.question-list {
  padding: 19px 17px;
  background: rgba(29, 30, 31, 0.02);
  margin-bottom: 12px;
}
.title {
  display: flex;
  margin-bottom: 15px;
}
.title-left {
  flex: 1;
}
.title-right {
  width: 50px;
}
.el-radio-group {
  display: flex;
}
</style>