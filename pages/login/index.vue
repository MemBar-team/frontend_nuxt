<template>
  <main class="c-main">
    <section class="c-section">
      <div class="c-section_inner">
        <div class="c-form">
          <h2 class="c-form_title">
            ログインフォーム
          </h2>
          {{ this.$store.state }}

          <div v-if="formError">
            {{ formError }}
          </div>
          <el-form
            ref="validateForm"
            :model="validateForm"
            class="c-form_login"
            @submit.prevent="login"
          >
            <el-form-item
              label="ID or Email"
              prop="id"
              :rules="[
                {
                  required: true,
                  message: 'ユーザーIDかメールアドレスを入力してください',
                  trigger: 'blur'
                }
              ]"
            >
              <el-input v-model="validateForm.id"></el-input>
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
            <el-form-item class="c-form_btn">
              <el-button type="primary" @click="submitForm('validateForm')">
                ログイン
              </el-button>
              <el-button @click="resetForm('validateForm')">
                リセット
              </el-button>
            </el-form-item>
          </el-form>

          <p class="c-form_forgot">
            <nuxt-link to="/login/forgot">
              パスワードを忘れた場合はこちら
            </nuxt-link>
          </p>

          <div class="c-form_notRegister ">
            アカウントを登録していない？
            <nuxt-link to="/signup">新規登録する</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  components: {},
  layout: 'signupLogin',
  data() {
    return {
      formError: null,
      logged: false,
      validateForm: {
        id: '',
        password: ''
      }
    }
  },
  computed: {
    // loggedRedirect() {
    //   if (this.$store.state.authUser) {
    //     console.log('ログインしている')
    //     return this.$router.push('/')
    //   }
    // }
  },
  // mounted: {
  //   loggedRedirect() {
  //     if (this.$store.state.authUser) {
  //       console.log('ログインしている')
  //       return this.$router.push('/')
  //     }
  //   }
  // },
  // fetch({ store, redirect }) {
  //   if (!store.state.authUser) {
  //     return redirect('/')
  //   }
  // },
  methods: {
    async login() {
      console.log('ログインクリック')
      try {
        console.log('トライ')
        await this.$store.dispatch('login', {
          username: this.validateForm.id,
          password: this.validateForm.password
        })
        this.validateForm.id = ''
        this.validateForm.password = ''
        this.formError = null
        // this.$router.push({ name: '/' })
        // this.$router.push({ path: '/' })
      } catch (e) {
        console.log('エラー')
        this.formError = e.message
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!')
          console.log('aaaaaa')
          this.login()
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
    // ...mapActions({
    //   login: 'login'
    //   // getAuth: 'getAuth',
    //   // getPosts: 'getPosts'
    //   // nuxtServerInit: 'nuxtServerInit'
    // })
  }
}
</script>

<style lang="scss" scoped></style>
