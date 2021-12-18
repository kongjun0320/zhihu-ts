<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="@/assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <ColumnList :lists="columnLists" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnListProps } from '@/components/column-list/index.vue'
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
export default defineComponent({
  setup() {
    return {
      columnLists
    }
  },
  components: { ColumnList }
})
</script>

<style scoped></style>
