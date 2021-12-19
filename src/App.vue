<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <Loader v-if="isLoading" />
    <router-view />
    <GlobalFooter />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import GlobalHeader from './components/global-header/index.vue'
import GlobalFooter from './components/global-footer/index.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store'
import Loader from './components/loader/index.vue'

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
    return {
      currentUser,
      isLoading
    }
  }
})
</script>

<style lang="scss"></style>
