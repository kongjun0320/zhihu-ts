<template>
  <div
    class="
      alert
      message-info
      fixed-top
      w-50
      mx-auto
      d-flex
      justify-content-between
      mt-2
    "
    v-if="isVisible"
    :class="classObject"
  >
    <span>{{ message }}</span>
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { MessageType } from './defineTypes'

export default defineComponent({
  props: {
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    }
  },
  emits: ['close-message'],
  setup(props, { emit }) {
    const isVisible = ref(true)
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default'
    }
    const hide = () => {
      isVisible.value = false
      emit('close-message', true)
    }
    return {
      isVisible,
      classObject,
      hide
    }
  }
})
</script>

<style scoped></style>
