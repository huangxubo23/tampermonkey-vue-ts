<template>
  <el-card shadow="hover" class="login-card">
    <el-form :model="formData" ref="loginFormRef" label-width="100px">
      <el-form-item
        prop="account"
        label="登录账号"
        :rules="[
          { required: true, message: '请输入登录账号', trigger: 'blur' },
        ]"
      >
        <el-input v-model="formData.account" size="small" placeholder="请输入登录账号" />
      </el-form-item>
      <el-form-item
        prop="password"
        label="登录密码"
        :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
      >
        <el-input v-model="formData.password" size="small" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Login',
  props: {
    platform: {
      type: String,
      required: false,
      default: 'hjs',
    },
  },
  data() {
    return {
      formData: {
        account: '',
        password: '',
      },
    }
  },
  methods: {
    handleLogin() {
      ;(this.$refs.loginFormRef as any).validate((valid: boolean) => {
        if (!valid) {
          return false
        }

        console.info('==handleLogin==', this.formData)
        this.$router.push('/task-list')
      })
    },
  },
})
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.login-card {
  max-width: $middle-size;
  margin: 20px auto;
}
</style>