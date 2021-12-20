import { MessageType } from '@/components/message/defineTypes'
import Message from '@/components/message/index.vue'
import { createApp } from 'vue'

const createMessage = (
  message: string,
  type: MessageType,
  timeout = 2000
): void => {
  const messageInstance = createApp(Message, {
    message,
    type
  })
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  messageInstance.mount(mountNode)

  setTimeout(() => {
    messageInstance.unmount()
    document.body.removeChild(mountNode)
  }, timeout)
}

export default createMessage
