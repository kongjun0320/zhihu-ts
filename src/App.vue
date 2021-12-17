<template>
  <div class="container">
    <form action="">
      <div class="mb-3">
        <label for="form-label">邮箱地址</label>
        <ValidateInput :rules="emailRules" v-model="emailVal"></ValidateInput>
        {{ emailVal }}
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail" class="form-label">邮箱地址</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail"
          v-model="emailState.val"
          @blur="validateEmail"
        />
        <div class="form-text" v-if="emailState.error">
          {{ emailState.message }}
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputEmail1" />
      </div>
    </form>
    <GlobalHeader :user="currentUser" />
    <ColumnList :lists="columnLists" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ColumnList, { ColumnListProps } from './components/column-list/index.vue'
import GlobalHeader, { UserProps } from './components/global-header/index.vue'
import ValidateInput, { RulesProp } from './components/validate-input/index.vue'

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
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup() {
    const emailState = reactive({
      val: '',
      error: false,
      message: ''
    })
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '请输入邮箱地址'
      },
      {
        type: 'range',
        message: '输入长度不够'
      }
    ]

    const validateEmail = () => {
      if (!emailState.val.trim()) {
        emailState.error = true
        emailState.message = '请输入邮箱'
      } else {
        emailState.error = false
        emailState.message = ''
      }
    }

    const emailVal = ref('aicherish')

    return {
      columnLists,
      currentUser,
      emailState,
      emailRules,
      validateEmail,
      emailVal
    }
  }
})
</script>

<style lang="scss"></style>
