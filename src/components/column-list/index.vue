<template>
  <div class="row">
    <div class="col-4 mb-4" v-for="list in columnLists" :key="list._id">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="list.avatar?.url"
            :alt="list.title"
            class="rounded-circle border border-right my-3"
          />
          <h5 class="card-title">{{ list.title }}</h5>
          <p class="card-text text-left">{{ list.description }}</p>
          <router-link
            :to="{ name: 'ColumnDetail', params: { id: list._id } }"
            class="btn btn-outline-primary"
            >进入专栏</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ColumnProps } from '@/store/store-type'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ColumnList',
  props: {
    lists: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const columnLists = computed(() => {
      return props.lists.map((l) => {
        if (!l.avatar) {
          l.avatar = {
            url: 'require("@/assets/column.jpg")'
          }
        }
        return l
      })
    })
    return {
      columnLists
    }
  }
})
</script>

<style lang="scss" scoped>
.card-body {
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
