<template>
  <div class="questionnare-survey">
    <div class="questionnare-survey-name">
      <p>{{title}}</p>
      <div class="progress-info">
        <div class="progress-box">
          <span class="progress" :style="{width:progressWidth}"></span>
        </div>
        <span>1/{{questionList.length}}</span>
      </div>
    </div>
    <div class="content">
      <div class="question-list" v-for="(item,index) in questionList" :key="item.keys">
        <div class="title">
          <span v-if="item.type==='Radio'" class="item-type">「单选题」</span>
          <span v-else-if="item.type==='CheckBox'" class="item-type">「多选题」</span>
          <span v-else-if="item.type==='Textarea'" class="item-type">「问答题」</span>
          <span v-else-if="item.type==='Datepicker'" class="item-type">「日期」</span>
          <span v-else class="item-type">「时间」</span>
          <span>{{index+1}}.</span>
          {{item.name}}
        </div>
        <component :is="'Ell' + item.type" :pitem="item" :post="item.name" class="el-form-cont" />
      </div>
    </div>
  </div>
</template>

<script>
import EllDatepicker from "./datepicker.vue"; //日期
import EllTimepicker from "./timepicker.vue"; //时间
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
  data() {
    return {
      title: "浙江省调查问卷",
      questionList: [
        {
          name: "性别",
          require: "false",
          type: "Radio",
          radioList: [
            {
              name: "男"
            },
            {
              name: "女"
            }
          ]
        },
        {
          name: "备注",
          require: "false",
          type: "Textarea"
        },
        {
          name: "这是一个多选题",
          require: "false",
          type: "CheckBox",
          checkList: [
            {
              name: "爱好"
            },
            {
              name: "吃饭"
            },
            {
              name: "鞋子"
            },
            {
              name: "逛"
            }
          ]
        },
      ]
    };
  },
  computed: {
    progressWidth() {
      return "50px";
    }
  },
  mounted() {
    document.documentElement.style.fontSize =
      document.documentElement.clientWidth / 7.5 + "px";
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
p,
html,
body,
li {
  margin: 0;
}
body,
html {
  width: 100%;
  height: 100%;
  background: #f9f9f9;
}
.questionnare-survey-name {
  padding: 0 0.3rem;
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 9;
}
.questionnare-survey-name p {
  font-size: 0.36rem;
  margin: 0.4rem 0 0.1rem;
  color: #333;
}
.progress-info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.16rem;
}
.progress-info > span {
  font-size: 0.24rem;
  color: #fcab37;
  margin-left: 0.14rem;
}
.progress-box {
  position: relative;
  width: 100%;
  background: #cfcfcf;
  opacity: 0.38;
  border-radius: 4px;
  height: 0.06rem;
}
.progress {
  height: 0.06rem;
  position: absolute;
  left: 0;
  top: 0;
  background: #fcab37;
  border-radius: 4px;
}
.content {
  margin-top: 1.78rem;
}
.question-list {
  background: #fff;
  margin: 0.3rem;
  padding: 0.26rem 0 0 0rem;
}
.question-list > .title {
  font-size: 0.28rem;
  color: #333333;
  margin-bottom: 0.26rem;
}
.question-list .item-type {
  color: #fd9e2f;
}
</style>