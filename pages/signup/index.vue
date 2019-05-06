<template>
  <main class="c-main">
    <section class="c-section">
      <div class="c-section_inner">
        <div class="c-form">
          <h2 class="c-form_title">
            アカウントを作成
          </h2>
          <el-form
            ref="validateForm"
            :model="validateForm"
            class="c-form_login"
          >
            <el-form-item
              label="Email"
              prop="email"
              :rules="[
                {
                  required: true,
                  message: 'メールアドレスを入力してください',
                  trigger: 'blur'
                },
                {
                  type: 'email',
                  message: '正しいメールアドレス形式で入力してください',
                  trigger: 'blur'
                }
              ]"
            >
              <el-input v-model="validateForm.email"></el-input>
            </el-form-item>
            <el-form-item
              label="Password"
              prop="password"
              :rules="[
                {
                  required: true,
                  message: 'パスワードを入力してください',
                  trigger: 'blur'
                }
              ]"
            >
              <el-input v-model="validateForm.password"></el-input>
            </el-form-item>
            <el-form-item
              label="Password（確認用）"
              prop="password"
              :rules="[
                {
                  required: true,
                  message: 'パスワードを入力してください',
                  trigger: 'blur'
                }
              ]"
            >
              <el-input v-model="validateForm.password"></el-input>
            </el-form-item>
            <el-form-item class="c-form_btn">
              <el-button type="primary" @click="submitForm('validateForm')">
                ログイン
              </el-button>
              <el-button @click="resetForm('validateForm')">
                リセット
              </el-button>
            </el-form-item>
          </el-form>

          <div class="c-form_notRegister ">
            すでにアカウントを登録している方
            <nuxt-link to="/login">ログインする</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  components: {},
  layout: 'signupLogin',
  data() {
    return {
      error: null,
      validateForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.message
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          /* eslint-disable no-console */
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped></style>
