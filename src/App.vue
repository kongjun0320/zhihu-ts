<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
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

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    return {
      currentUser
    }
  }
})
</script>

<style lang="scss"></style>
