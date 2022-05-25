<template>
  <div class="page-search">
    <LxForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="title">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="el-icon-search" @click="handleQueryClick">查询</el-button>
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
  emits: ["handleResetClick", "handleQueryClick"],
  setup(props, { emit }) {
    //  双向绑定的属性由配置文件的field来决定
    //  1.优化一：formData中的属性应该动态生成
    const formItems = props.searchFormConfig.formItems ?? []
    let formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ""
    }
    const formData = ref(formOriginData)

    // 2. 优化二：用户点击重置
    const handleResetClick = () => {
      // 1. form中为v-model绑定方式重置
      // for (const key in formOriginData) {
      //   formData.value[key] = formOriginData[key]
      // }
      // 2. form中为:model-value、@update:model-value
      formData.value = formOriginData
      emit("handleResetClick")
    }

    // 3. 优化三：查询
    const handleQueryClick = () => {
      emit("handleQueryClick", formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
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
