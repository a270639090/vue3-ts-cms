<template>
  <div>
    <div class="header">
      <!-- 1. header插槽 -->
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column v-if="isShowSelection" align="center" type="selection" width="55"></el-table-column>
      <el-table-column v-if="isShowIndexColum" label="序号" type="index" align="center" width="80"></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <!-- 2. column插槽 -->
        <el-table-column v-bind="propItem" align="center">
          <template #default="scoped">
            <slot :name="propItem.slotName" :row="scoped.row">{{ scoped.row[propItem.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 3. foooter插槽 -->
    <div class="footer">
      <el-pagination
        v-model:currentPage="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    isShowIndexColum: {
      type: Boolean,
      default: false
    },
    isShowSelection: {
      type: Boolean,
      default: false
    }
  },
  emits: ["selectionChange"],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit("selectionChange", value)
    }

    return {
      handleSelectionChange
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
