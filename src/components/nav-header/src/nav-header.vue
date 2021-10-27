<template>
  <div class="nav-header">
    <i class="fold-menu" :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="handleFoldClick"></i>
    <div class="content">
      <div>
        <LxBreadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UserInfo from "./user-info.vue"
import { computed, defineComponent, ref } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "@/store"
import { LxBreadcrumb } from "@/base-ui/breadcrumb"
import { pathMapToBreadcrumb } from "@/untils/map-menu"

export default defineComponent({
  components: {
    UserInfo,
    LxBreadcrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)

    const breadcrumbs = computed(() => {
      const store = useStore()
      const userMenus = store.state.login.userMenus

      const route = useRoute()
      const currentPath = route.path

      return pathMapToBreadcrumb(userMenus, currentPath)
    })

    console.log(breadcrumbs.value)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }
    return {
      isFold,
      breadcrumbs,
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
