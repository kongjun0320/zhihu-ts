<template>
  <div class="column-detail-page w-75 mx-auto">
    <div
      class="column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column"
    >
      <div class="col-3 text-center">
        <img
          :src="column.avatar"
          :alt="column.title"
          class="rounded-circle border w-100"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <PostList :posts="posts" />
  </div>
</template>

<script lang="ts">
import { ColumnListProps } from '@/components/column-list/index.vue'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '@/components/post-list/index.vue'

export interface PostProps {
  _id: number
  title: string
  content: string
  image?: string
  excerpt?: string
  createdAt: string
  columnId: number
}

const posts: PostProps[] = [
  {
    _id: 3,
    title: '标题',
    content: '描述信息',
    image: 'https://images.dog.ceo/breeds/terrier-silky/n02097658_7970.jpg',
    excerpt: '123',
    createdAt: '2021-10-10',
    columnId: 1
  },
  {
    _id: 33,
    title: '标题',
    content: '描述信息',
    image: 'https://images.dog.ceo/breeds/terrier-silky/n02097658_7970.jpg',
    createdAt: '2021-10-10',
    columnId: 2
  }
]
const column: ColumnListProps = {
  _id: 4,
  title: '标题2',
  avatar: 'https://images.dog.ceo/breeds/terrier-silky/n02097658_7970.jpg',
  description: '描述信息2'
}

export default defineComponent({
  name: 'ColumnDetail',
  setup() {
    const route = useRoute()
    console.log('route >>> ', route.params.id)
    return {
      column,
      posts
    }
  },
  components: { PostList }
})
</script>

<style scoped></style>
