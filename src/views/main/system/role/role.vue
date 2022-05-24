<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content :pageContentConfig="pageContentConfig" pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
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

    const roleList = computed(() => store.state.system.roleList)
    return {
      roleList,
      pageContentConfig,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
