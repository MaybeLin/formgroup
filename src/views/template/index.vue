<template>
  <MoBanTemplate :formList="list" :form="form"></MoBanTemplate>
</template>

<script>
import MOCK from '../../mock/index'
import MoBanTemplate from "../../components/zdytemplate.vue";
export default {
  data () {
    return {
      list: MOCK,
      form: {}
    };
  },

  components: {
    MoBanTemplate
  }
}

</script>
<style lang='scss' scoped>
</style>