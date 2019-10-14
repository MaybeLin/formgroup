<template>
  <div class="preview-question-list">
    <div class="question-list" v-for="(item,index) in questionList" :key="item.keys">
      <div class="title">
        <span>{{index+1}}</span>
        <span v-if="item.type==='Radio'" class="item-type">「单选题」</span>
        <span v-else-if="item.type==='CheckBox'" class="item-type">「多选题」</span>
        <span v-else-if="item.type==='Textarea'" class="item-type">「问答题」</span>
        <span v-else-if="item.type==='Datepicker'" class="item-type">「日期」</span>
        <span v-else class="item-type">「时间」</span>
        {{item.name}}
      </div>
      <component
        :is="'Ell' + item.type"
        :pitem="item"
        :post="item.name"
        :disabled="true"
        class="el-form-cont"
      />
    </div>
  </div>
</template>
<script>
import EllDatepicker from "./datepicker.vue"; //日期
import EllTimepicker from "./datepicker.vue"; //时间
import EllTextarea from "./textarea.vue"; //文本框
import EllRadio from "./radio"; //单选
import EllCheckBox from "./checkbox.vue"; //多选
export default {
  components: {
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
  }
};
</script>

<style scoped>
.preview-question-list{
  /* max-height: 400px;
  overflow: auto; */
}
.question-list{
  margin-top: 20px;
}
.title{
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
}
.item-type{
  font-weight: 500;
}
</style>