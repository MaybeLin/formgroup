<template>
  <div>
    <!-- 基础信息表单 -->
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" v-if="formType===1">
      <div v-for="item in formList">
        <el-form-item :label="item.name" :prop="item.name">
          <component
            :is="'Ell' + item.type"
            :form="form"
            :pitem="item"
            :post="item.name"
            :disabled="disabled"
          />
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                <span @click="edit(item)">编辑</span>
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                <span @click="delform(item)">删除</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
      </div>
    </el-form>
    <!-- 表格 -->
    <div class="table-list" v-if="showTableType === 1&&formType===2">
      <!-- <div v-for="item in tableList"> -->
        <span v-for="items in tableList">{{items.name}}&nbsp;&nbsp;&nbsp;</span>
      <!-- </div> -->
    </div>
    <div class="table-list" v-if="showTableType === 2">
      <div v-for="item in tableList">
        <h1>表格名称：{{item.name}}</h1>
        <el-button @click="addTableRow(item)">添加数据</el-button>
        <el-table :data="item.row" border>
          <el-table-column
            v-for="(col,index) in item.list"
            :key="index"
            :label="col.name"
            :prop="'parameter' + (index + 1)"
          />
          <el-table-column label="操作" fixed="right" width="100">
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 模版表单 -->
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" v-if="formType===3">
      <div v-for="item in modelFormList">
        <el-form-item :label="item.name" :prop="item.name">
          <component
            :is="'Ell' + item.type"
            :form="form"
            :pitem="item"
            :post="item.name"
            :disabled="disabled"
          />
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                <span @click="edit(item)">编辑</span>
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                <span @click="delform(item)">删除</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import EllInput from "./input.vue";
import EllDatepicker from "./datepicker.vue";
import EllRadio from "./radio";
import EllCheckBox from "./checkbox.vue";
import EllInputnumber from "./inputnumber.vue";
export default {
  props: {
    formType: {
      type: Number,
      default: 1
    },
    formList: {
      type: Array,
      default: () => []
    },
    form: {
      type: Object,
      default: () => {
        return {};
      }
    },
    showTableType: {
      type: Number,
      default: 2
    },
    tableList: {
      type: Array,
      default: () => []
    },
    modelFormList: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  },

  components: {
    EllInput,
    EllDatepicker,
    EllRadio,
    EllCheckBox,
    EllInputnumber
  },

  computed: {
    rules() {
      const rules = {};
      this.formList.forEach(item => {
        rules[item.name] = [
          { required: item.required, message: `${item.name}必填` }
        ];
      });
      return rules;
    }
  },

  methods: {
    addTableRow(item) {
      this.$emit("addTableRow", item);
    },
    edit(item) {
      //编辑表单
      this.$emit("edit", item);
    },
    delform(item) {
      //删除表单
      this.$emit("delform", item);
    }
  },
  watch:{
    modelFormList(){
      console.log(1)
    }
  }
};
</script>
<style lang='scss' scoped>
</style>