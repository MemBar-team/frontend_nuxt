<template>
  <main class="l-main">
    <section class="c-section">
      <div class="c-section_inner">
        <div class="p-form">
          <h2 class="p-form_title">
            アカウントを作成
          </h2>

          <div class="c-form-single">
            <el-form
              ref="validateForm"
              :model="validateForm"
              class="c-form_login"
            >
              <el-form-item
                label="User Name"
                prop="userName"
                :rules="[
                  {
                    required: true,
                    message: 'ユーザー名を入力してください',
                    trigger: 'blur'
                  }
                ]"
              >
                <el-input v-model="validateForm.userName"></el-input>
              </el-form-item>
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
                <el-button
                  type="primary"
                  native-type="submit"
                  @click="submitForm('validateForm', $event)"
                >
                  アカウント作成
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
        userName: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signup() {
      console.log('サインアップ 動作')
      console.log(this.userName)
      console.log(this.email)
      console.log(this.password)
      try {
        console.log('サインアップ トライ')
        await this.$store.dispatch('signup', {
          userName: this.validateForm.userName,
          email: this.validateForm.email,
          password: this.validateForm.password
        })
        this.validateForm.userName = ''
        this.validateForm.email = ''
        this.validateForm.password = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    submitForm(formName, event) {
      event.preventDefault()
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.signup()
        } else {
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
