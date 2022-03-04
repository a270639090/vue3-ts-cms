<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content :pageContentConfig="pageContentConfig" :tableData="roleList" pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useStore } from "@/store"

import PageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"

import { pageContentConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    pageContent
  },
  setup() {
    const store = useStore()

    const roleList = store.state.system.roleList
    return {
      roleList,
      pageContentConfig,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
