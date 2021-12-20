import { onMounted } from 'vue'

const useDOMCreate = (nodeId: string): void => {
  const node = document.createElement('div')
  node.id = nodeId
  document.body.appendChild(node)

  onMounted(() => {
    document.body.removeChild(node)
  })
}

export default useDOMCreate
