<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <Loader v-if="isLoading" />
    <router-view />
    <GlobalFooter />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue'
import { useStore } from 'vuex'
import GlobalHeader from '@/components/global-header/index.vue'
import GlobalFooter from '@/components/global-footer/index.vue'
import { GlobalDataProps } from './store'
import Loader from '@/components/loader/index.vue'
import createMessage from './utils/createMessage'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter,
    Loader
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.loading)
    const error = computed(() => store.state.error)

    watch(
      () => error.value.status,
      () => {
        const { status, message } = error.value
        if (status && message) {
          createMessage(message, 'error')
        }
      }
    )

    return {
      currentUser,
      isLoading
    }
  }
})
</script>

<style lang="scss"></style>
