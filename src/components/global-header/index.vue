<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/">知乎专栏</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2"
          >登陆</router-link
        >
      </li>
      <li class="list-inline-item">
        <router-link to="/sign_up" class="btn btn-outline-light my-2"
          >注册</router-link
        >
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好 ${user.nickName}`">
          <DropdownItem>
            <router-link class="dropdown-item" to="/create"
              >新建文章</router-link
            >
          </DropdownItem>
          <DropdownItem>
            <router-link class="dropdown-item" :to="`/column/${user?.column}`"
              >我的专栏</router-link
            >
          </DropdownItem>
          <DropdownItem disabled>
            <a href="#" class="dropdown-item">编辑资料</a>
          </DropdownItem>
          <DropdownItem>
            <a href="#" class="dropdown-item" @click="handleLogout">退出登陆</a>
          </DropdownItem>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from '@/components/dropdown/index.vue'
import DropdownItem from '@/components/dropdown/dropdown-item.vue'
import { UserProps } from '@/store/store-type'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup() {
    const store = useStore()

    const handleLogout = () => {
      store.commit('logout')
      store.commit('setCurrentUser', {
        isLogin: false
      })
    }
    return {
      handleLogout
    }
  }
})
</script>

<style scoped></style>
