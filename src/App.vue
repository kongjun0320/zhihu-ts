<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <ColumnList :lists="columnLists" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnListProps } from './components/column-list/index.vue'
import GlobalHeader, { UserProps } from './components/global-header/index.vue'

const columnLists: ColumnListProps[] = [
  {
    _id: 1,
    title: '标题',
    avatar: '',
    description: '描述信息'
  },
  {
    _id: 2,
    title: '标题2',
    avatar: '',
    description: '描述信息2'
  },
  {
    _id: 3,
    title: '标题',
    avatar: '',
    description: '描述信息'
  },
  {
    _id: 4,
    title: '标题2',
    avatar: '',
    description: '描述信息2'
  },
  {
    _id: 5,
    title: '标题2',
    avatar: '',
    description: '描述信息2'
  }
]
const currentUser: UserProps = {
  isLogin: true,
  nickName: 'AiCherish',
  column: 1
}

export default defineComponent({
  name: 'App',
  setup() {
    return {
      columnLists,
      currentUser
    }
  },
  components: { ColumnList, GlobalHeader }
})
</script>

<style lang="scss"></style>
