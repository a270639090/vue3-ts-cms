<template>
  <div id="app">
    <router-link to="/login">login</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

// defineComponent 增加类型限制与提示
export default defineComponent({
  name: "App",
  components: {}
})
</script>

<style lang="less"></style>
