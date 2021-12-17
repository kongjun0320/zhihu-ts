<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-model="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
    />
    <span class="invalid-feedback" v-if="inputRef.error">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

interface RuleProp {
  type: 'required' | 'range'
  message: string
}

export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
      default: () => []
    },
    modelValue: String
  },
  setup(props, { emit }) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const updateValue = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'range':
              passed = inputRef.val.length > 7
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }

    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style scoped></style>
