<template>
  <div class="page-search">
    <LxForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="title">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
      </template>
    </LxForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import LxForm from "@/base-ui/form"

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    LxForm
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      password: "",
      sports: "",
      createTime: ""
    })
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.page-search {
  .handle-btns {
    text-align: right;
    padding: 0 20px 20px 0;
  }
}
</style>
