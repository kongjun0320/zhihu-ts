<template>
  <div class="container">
    <ValiDateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="form-label">邮箱地址</label>
        <ValidateInput
          ref="inputRef"
          type="text"
          :rules="emailRules"
          v-model="emailVal"
          placeholder="情输入邮箱地址"
        ></ValidateInput>
      </div>
      <div class="mb-3">
        <label for="form-label">密码</label>
        <ValidateInput
          type="password"
          :rules="emailRules"
          v-model="passwordVal"
          placeholder="情输入密码"
        ></ValidateInput>
      </div>
      <template v-slot:submit>
        <button type="submit" class="btn btn-danger">submit</button>
      </template>
    </ValiDateForm>
    <GlobalHeader :user="currentUser" />
    <ColumnList :lists="columnLists" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ColumnList, { ColumnListProps } from './components/column-list/index.vue'
import GlobalHeader, { UserProps } from './components/global-header/index.vue'
import ValidateInput, { RulesProp } from './components/validate-input/index.vue'
import ValiDateForm from './components/validate-form/index.vue'

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
    ValidateInput,
    ValiDateForm
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

    const emailVal = ref()
    const passwordVal = ref()

    const inputRef = ref<any>(null)
    const onFormSubmit = (result: boolean) => {
      console.log('result >>> ', result)
    }

    return {
      columnLists,
      currentUser,
      emailState,
      emailRules,
      validateEmail,
      emailVal,
      onFormSubmit,
      inputRef,
      passwordVal
    }
  }
})
</script>

<style lang="scss"></style>
