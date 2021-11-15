import { Ref, ref, onMounted, onUnmounted } from 'vue'

function useClickOutside(elementRef: Ref<null | HTMLElement>): Ref<boolean> {
  const isClickOutside = ref(false)

  const handler = (e: MouseEvent) => {
    const elementRefVal = elementRef.value
    if (elementRefVal) {
      if (elementRefVal.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })

  return isClickOutside
}

export default useClickOutside
