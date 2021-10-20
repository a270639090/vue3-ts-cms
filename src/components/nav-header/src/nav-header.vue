<template>
  <div class="nav-header">
    <i class="fold-menu" :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="handleFoldClick"></i>
    <div class="content">
      <div>面包屑</div>
      <div>
        <UserInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UserInfo from "./user-info.vue"

import { defineComponent, ref } from "vue"

export default defineComponent({
  components: {
    UserInfo
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    flex: 1;
  }
}
</style>
