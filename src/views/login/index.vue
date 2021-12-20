<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">登录到者也</h5>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput
          :rules="emailRules"
          v-model="emailVal"
          placeholder="请输入邮箱地址"
          type="text"
          ref="inputRef"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="passwordVal"
        />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">
          登录
        </button>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '@/components/validate-form/index.vue'
import ValidateInput, { RulesProp } from '@/components/validate-input/index.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import createMessage from '@/utils/createMessage'

export default defineComponent({
  setup() {
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '请输入邮箱地址'
      }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const emailVal = ref('aicherish@3020.com')
    const passwordVal = ref('1234567')

    const router = useRouter()
    const store = useStore()

    const onFormSubmit = (result: boolean) => {
      if (result) {
        store
          .dispatch('loginAndFetch', {
            email: emailVal.value,
            password: passwordVal.value
          })
          .then(() => {
            createMessage('登陆成功，2秒钟跳转到首页', 'success')
            setTimeout(() => {
              router.push('/')
            }, 2000)
          })
          .catch((e) => {
            console.log('e >>> ', e)
          })
      }
    }
    return {
      emailVal,
      passwordVal,
      emailRules,
      passwordRules,
      onFormSubmit
    }
  },
  components: { ValidateForm, ValidateInput }
})
</script>

<style scoped></style>
