<template>
  <div>
    <input type="file" @change="handleFileChange" />
  </div>
</template>

<script lang="ts">
import http from '@/utils/request'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const handleFileChange = async (e: Event) => {
      const target = e.target as HTMLInputElement
      const files = target.files
      if (files) {
        const uploadFiles = files[0]
        const formData = new FormData()
        formData.append(uploadFiles.name, uploadFiles)
        const result = await http.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log('result >>> ', result)
      }
    }
    return { handleFileChange }
  }
})
</script>

<style scoped></style>
