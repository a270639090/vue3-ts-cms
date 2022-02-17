<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" />
      </template>
    </el-table>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  props: {
    tableData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
