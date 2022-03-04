<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :pageContentConfig="pageContentConfig"
      :tableData="userList"
      :selectionChange="selectionChange"
      pageName="user"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"

import { useStore } from "@/store"
import pageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"

import { searchFormConfig } from "./config/search.config"
import { pageContentConfig } from "./config/content.config"

export default defineComponent({
  name: "user",
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    const store = useStore()

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const onEdit = (row: any) => {
      console.log(row)
    }

    const onDelete = (row: any) => {
      console.log(row)
    }

    const selectionChange = (value: any) => {
      console.log(value)
    }

    return {
      userList,
      userCount,
      onDelete,
      onEdit,
      selectionChange,
      searchFormConfig,
      pageContentConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
