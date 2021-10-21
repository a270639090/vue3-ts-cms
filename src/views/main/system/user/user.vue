<template>
  <div class="user">
    <LxForm v-bind="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import LxForm from "@/base-ui"
import { searchFormConfig } from "./config/search.config"

export default defineComponent({
  name: "user",
  components: {
    LxForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
