<template>
  <div class="page-content">
    <LxTable :tableData="pageListData" @selectionChange="selectionChange" v-bind="pageContentConfig">
      <!-- :title="title"
      :propList="propList"
      :isShowIndexColum="isShowIndexColum"
      :isShowSelection="isShowSelection"
       -->
      <!-- header -->
      <template #headerHandler>
        <el-button type="primary">新增用户</el-button>
      </template>
      <!-- column插槽 -->
      <template #status="{ row }">
        <el-tag>{{ row.enable ? "启用" : "停用用" }}</el-tag>
      </template>
      <template #createAt="{ row }">
        <el-tag>{{ $filters.formatUtcString(row.createAt) }}</el-tag>
      </template>
      <template #updateAt="{ row }">
        <el-tag>{{ $filters.formatUtcString(row.updateAt) }}</el-tag>
      </template>
      <template #option="{ row }">
        <el-button icon="el-icon-edit" size="mini" type="text" @click="onEdit(row)">编辑</el-button>
        <el-button icon="el-icon-delete" size="mini" type="text" @click="onDelete(row)">删除</el-button>
      </template>
    </LxTable>
  </div>
</template>

<script>
import LxTable from "@/base-ui/table"

import { useStore } from "@/store"
export default {
  components: {
    LxTable
  },
  props: {
    pageContentConfig: {
      type: Object,
      required: true
    },
    selectionChange: Function,
    tableData: {
      type: Array,
      default: () => []
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()

    store.dispatch("system/getPageListActive", {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const pageListData = store.getters[`system/pageListData`](props.pageName)

    console.log(pageListData, "pageListData")

    return {
      pageListData
    }
  }
}
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
