<template>
  <div class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { emitter, ValidateFunc } from './defineTypes'

export default defineComponent({
  emits: ['form-submit'],
  setup(props, { emit }) {
    let funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = funcArr.map((func) => func()).every((r) => r)
      emit('form-submit', result)
    }
    const callback = (func: ValidateFunc) => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback)

    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return { submitForm }
  }
})
</script>

<style scoped></style>
