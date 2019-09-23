<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <div v-for="item in formList">
        <el-form-item :label="item.name" :prop="item.name">
          <component :is="'Ell' + item.type" :form="form" :pitem="item" :post="item.name" />
        </el-form-item>
      </div>
    </el-form>
    <div class="table-list" v-if="showTableType === 1">
      <div v-for="item in tableList">
        <span v-for="items in item.list">{{items.name}}&nbsp;&nbsp;&nbsp;</span>
      </div>
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
  </div>
</template>

<script>
import EllInput from "./input.vue";
import EllDatepicker from "./datepicker.vue";
import EllRadio from "./radio";
export default {
  props: {
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
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.form);
  },
  components: {
    EllInput,
    EllDatepicker,
    EllRadio
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
    }
  }
};
</script>
<style lang='scss' scoped>
</style>