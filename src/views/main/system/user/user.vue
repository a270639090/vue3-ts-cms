<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <div class="content">
      <LxTable
        :title="'用户列表'"
        :propList="propList"
        :tableData="userList"
        :isShowIndexColum="isShowIndexColum"
        :isShowSelection="isShowSelection"
        @selectionChange="selectionChange"
      >
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "@/store"

import { pageSearch } from "@/components/page-search"
import LxTable from "@/base-ui/table/index"

import { searchFormConfig } from "./config/search.config"

export default defineComponent({
  name: "user",
  components: {
    pageSearch,
    LxTable
  },
  setup() {
    const store = useStore()

    store.dispatch("system/getPageListActive", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const isShowIndexColum = true
    const isShowSelection = true
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const selectionChange = (value: any) => {
      console.log(value)
    }

    const onEdit = (row: any) => {
      console.log(row)
    }

    const onDelete = (row: any) => {
      console.log(row)
    }

    const propList = [
      { prop: "name", label: "用户名", minWidth: "100" },
      { prop: "realname", label: "真实姓名", minWidth: "100" },
      { prop: "cellphone", label: "手机号码", minWidth: "100" },
      { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
      { prop: "createAt", label: "创建时间", minWidth: "250", slotName: "createAt" },
      { prop: "updateAt", label: "更新时间", minWidth: "250", slotName: "updateAt" },
      { prop: "option", label: "操作", minWidth: "", slotName: "option" }
    ]

    return {
      userList,
      userCount,
      propList,
      isShowIndexColum,
      isShowSelection,
      onDelete,
      onEdit,
      selectionChange,
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
