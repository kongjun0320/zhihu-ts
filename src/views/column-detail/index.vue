<template>
  <div class="column-detail-page w-75 mx-auto">
    <div
      class="column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column"
    >
      <div class="col-3 text-center">
        <img
          :src="column.avatar.url"
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
import { computed, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '@/components/post-list/index.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'

export default defineComponent({
  name: 'ColumnDetail',
  setup() {
    const route = useRoute()
    const store = useStore<GlobalDataProps>()
    const columnId = route.params.id

    onMounted(() => {
      store.dispatch('fetchColumn', columnId)
      store.dispatch('fetchPosts', columnId)
    })

    const column = computed(() => store.getters.getColumnById(columnId))
    const posts = computed(() => store.getters.getPostsByCid(columnId))

    return {
      column,
      posts
    }
  },
  components: { PostList }
})
</script>

<style scoped></style>
