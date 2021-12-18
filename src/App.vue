<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <router-view />
    <GlobalFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import GlobalHeader, { UserProps } from './components/global-header/index.vue'
import GlobalFooter from './components/global-footer/index.vue'

const currentUser: UserProps = {
  isLogin: false,
  nickName: 'AiCherish',
  column: 1
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  setup() {
    return {
      currentUser
    }
  }
})
</script>

<style lang="scss"></style>
