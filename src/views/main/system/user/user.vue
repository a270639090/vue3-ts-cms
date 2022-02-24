<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <div class="content">
      <LxTable :propList="propList" :tableData="userList">
        <template #status="{ row }">
          <el-tag>{{ row.enable ? "启用" : "停用用" }}</el-tag>
        </template>
        <template #createAt="{ row }">
          <el-tag>{{ $filters.formatUtcString(row.createAt) }}</el-tag>
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

    const userList = computed(() => store.state.system.userList)

    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: "name", label: "用户名", minWidth: "100" },
      { prop: "realname", label: "真实姓名", minWidth: "100" },
      { prop: "cellphone", label: "手机号码", minWidth: "100" },
      { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
      { prop: "createAt", label: "创建时间", minWidth: "250", slotName: "createAt" },
      { prop: "updateAt", label: "更新时间", minWidth: "250", slotName: "updateAt" }
    ]

    return {
      userList,
      userCount,
      propList,
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
