<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @handleResetClick="handleResetClick"
      @handleQueryClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :pageContentConfig="pageContentConfig"
      :tableData="usersList"
      :selectionChange="selectionChange"
      pageName="users"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"

import { useStore } from "@/store"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"

import { searchFormConfig } from "./config/search.config"
import { pageContentConfig } from "./config/content.config"

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const store = useStore()
    const usersList = computed(() => store.state.system.usersList)
    const userCount = computed(() => store.state.system.userCount)

    const selectionChange = (value: any) => {
      console.log(value)
    }

    const pageContentRef = ref<InstanceType<typeof PageContent>>()
    const handleResetClick = () => {
      // ccc
    }
    const handleQueryClick = (queryInfo: any) => {
      pageContentRef.value?.getPageData(queryInfo)
    }

    return {
      pageContentRef,
      usersList,
      userCount,
      selectionChange,
      handleResetClick,
      handleQueryClick,
      searchFormConfig,
      pageContentConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
