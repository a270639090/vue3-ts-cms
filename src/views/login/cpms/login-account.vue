<template>
  <div class="login-account">
    <el-form
      ref="formRef"
      :model="account"
      :rules="rules"
      label-width="60px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          show-password
          v-model="account.password"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { rules } from "../config/account-config"
import { ElForm } from "element-plus"
import Local from "@/untils/cache"

export default defineComponent({
  setup() {
    const account = reactive({
      name: Local.getLocal("name") ?? "",
      password: Local.getLocal("password") ?? ""
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginActive = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否保存密码
          if (isKeepPassword) {
            // 本地缓存
            Local.setLocal("name", account.name)
            Local.setLocal("password", account.password)
          } else {
            Local.deleteLocal("name")
            Local.deleteLocal("password")
          }

          // 2.开始进行登录验证
        }
      })
    }

    return {
      account,
      // 表单规则
      rules,
      loginActive,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>
