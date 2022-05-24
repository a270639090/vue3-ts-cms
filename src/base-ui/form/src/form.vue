<template>
  <div class="lx-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.label"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

import { IFormItems } from "../types"

export default defineComponent({
  props: {
    // v-mode 外部绑定名称
    modelValue: {
      type: Object,
      require: true
    },
    formItems: {
      type: Array as PropType<IFormItems[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: "5px 20px"
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 8,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  // 处理与外部调用的双向绑定
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // 1. 与el-form之间以v-model语法糖方式实现
    // let formData = ref({ ...props.modelValue })
    // 外部 v-model 名称 modelValue
    // 处理与外部调用的双向绑定: 内部深拷贝外部内容, 再赋值于内部双向绑定内容, 内部改变后实时返回给外部 v-model, 需要外部 v-model 传递内容
    // watch(formData, (newValue) => emit("update:modelValue", newValue), { deep: true })

    // 2. 采用:model-value与@update:model-value方式实现
    const handleValueChange = (value: any, field: string) => {
      emit("update:modelValue", { ...props.modelValue, [field]: value })
    }
    return {
      // formData
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
.lx-form {
  padding-top: 20px;
}
</style>
