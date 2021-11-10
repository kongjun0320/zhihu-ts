<template>
  <div class="container">
    <ColumnList :lists="columnLists" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnListProps } from './components/column-list/index.vue'

const columnLists: ColumnListProps[] = [
  {
    _id: 1,
    title: '标题',
    avatar: 'https://images.dog.ceo/breeds/clumber/n02101556_7317.jpg',
    description: '描述信息'
  },
  {
    _id: 2,
    title: '标题2',
    avatar: 'https://images.dog.ceo/breeds/clumber/n02101556_7317.jpg',
    description: '描述信息2'
  },
  {
    _id: 3,
    title: '标题',
    avatar: 'https://images.dog.ceo/breeds/clumber/n02101556_7317.jpg',
    description: '描述信息'
  },
  {
    _id: 4,
    title: '标题2',
    avatar: 'https://images.dog.ceo/breeds/clumber/n02101556_7317.jpg',
    description: '描述信息2'
  },
  {
    _id: 5,
    title: '标题2',
    avatar: '',
    description: '描述信息2'
  }
]

export default defineComponent({
  name: 'App',
  setup() {
    return {
      columnLists
    }
  },
  components: { ColumnList }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
