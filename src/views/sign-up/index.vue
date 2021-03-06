<template>
  <div class="signup-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">注册者也账户</h5>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput
          :rules="emailRules"
          v-model="formData.email"
          placeholder="请输入邮箱地址"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">昵称</label>
        <ValidateInput
          :rules="nameRules"
          v-model="formData.nickName"
          placeholder="请输入昵称"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="formData.password"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">重复密码</label>
        <ValidateInput
          type="password"
          placeholder="请再次密码"
          :rules="repeatPasswordRules"
          v-model="formData.repeatPassword"
        />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">
          注册新用户
        </button>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { RulesProp } from '@/components/validate-input/index.vue'
import { defineComponent, reactive } from 'vue'
import ValidateForm from '@/components/validate-form/index.vue'
import ValidateInput from '../../components/validate-input/index.vue'
import { registry } from '@/api'
import createMessage from '@/utils/createMessage'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SignUp',
  setup() {
    const router = useRouter()
    const formData = reactive({
      email: '',
      nickName: '',
      password: '',
      repeatPassword: ''
    })
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' }
    ]
    const nameRules: RulesProp = [{ type: 'required', message: '昵称不能为空' }]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const repeatPasswordRules: RulesProp = [
      { type: 'required', message: '重复密码不能为空' },
      {
        type: 'custom',
        validator: () => {
          return formData.password === formData.repeatPassword
        },
        message: '密码不相同'
      }
    ]

    const onFormSubmit = async (result: boolean) => {
      if (result) {
        const payload = {
          email: formData.email,
          password: formData.password,
          nickName: formData.nickName
        }
        await registry(payload)
        createMessage('注册工程,2s后跳转到登陆页', 'success')
        setTimeout(() => {
          router.push('/login')
        }, 2000)
      }
    }

    return {
      emailRules,
      nameRules,
      passwordRules,
      repeatPasswordRules,
      formData,
      onFormSubmit
    }
  },
  components: { ValidateForm, ValidateInput }
})
</script>

<style scoped>
.w-330 {
  max-width: 330px;
}
</style>
