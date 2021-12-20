<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <Loader v-if="isLoading" />
    <router-view />
    <GlobalFooter />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import GlobalHeader from '@/components/global-header/index.vue'
import GlobalFooter from '@/components/global-footer/index.vue'
import { GlobalDataProps } from './store'
import Loader from '@/components/loader/index.vue'
import http from '@/utils/request'

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
    const token = computed(() => store.state.token)

    onMounted(() => {
      if (token.value && !currentUser.value.isLogin) {
        http.defaults.headers.common.Authorization = `Bearer ${token.value}`
        store.dispatch('fetchCurrentUser')
      }
    })

    return {
      currentUser,
      isLoading
    }
  }
})
</script>

<style lang="scss"></style>
