<template>
  <main class="l-main">
    <section class="c-section">
      <div class="c-section_inner">
        <div class="c-form">
          <h2 class="c-form_title">
            ログインフォーム
          </h2>
          <!-- {{ this.$store.state }} -->

          <!-- {{ this.$auth }} -->

          <div v-if="formError" class="c-form_error">
            <span class="c-form_error-message">
              <i class="material-icons">error</i>
              {{ formError }}
            </span>
          </div>

          <div class="c-form_col3">
            <div class="c-form_col3-item">
              <div class="c-form_col3-inner">
                <el-form
                  ref="validateForm"
                  :model="validateForm"
                  class="c-form_login"
                  status-icon
                >
                  <el-form-item
                    label="User ID or Email"
                    prop="id"
                    :rules="[
                      {
                        required: true,
                        message: 'ユーザーIDかメールアドレスを入力してください',
                        trigger: 'blur'
                      }
                    ]"
                  >
                    <el-input
                      v-model="validateForm.id"
                      type="email"
                      autocomplete="on"
                      maxlength="100"
                    >
                    </el-input>
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
                    <el-input
                      v-model="validateForm.password"
                      type="password"
                      autocomplete="on"
                      maxlength="100"
                      show-password
                    >
                    </el-input>
                  </el-form-item>
                  <el-form-item class="c-form_btn">
                    <el-button
                      type="primary"
                      native-type="submit"
                      @click="submitForm('validateForm', $event)"
                    >
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

            <div class="c-form_col3-item">
              <span class="c-form_col3-center">OR</span>
            </div>

            <div class="c-form_col3-item">
              <div class="c-form_col3-inner">
                <h3 class="c-form_sns-title">ソーシャルログイン</h3>
                <div>
                  <el-button
                    v-for="s in strategies"
                    :key="s.key"
                    class="c-form_sns-btn"
                    type="primary"
                    :class="'c-form_sns-' + s.name"
                    @click="$auth.loginWith(s.key)"
                  >
                    Login with {{ s.name }}
                  </el-button>
                </div>
              </div>
            </div>
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
    strategies: () => [
      // { key: 'auth0', name: 'Auth0', color: '#ec5425' },
      { key: 'google', name: 'google', color: '#4284f4' },
      { key: 'facebook', name: 'facebook', color: '#3c65c4' }
      // { key: 'github', name: 'Github', color: '#202326' }
    ],
    redirect() {
      console.log(this.$route.query.redirect)
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    },
    isCallback() {
      console.log('callback--')
      console.log(this.$route.query.callback)
      return Boolean(this.$route.query.callback)
    }
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
  asyncData(context) {
    console.log(context.userAgent)
    // console.log(context.data)
    return { project: 'nuxt' }
  },
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
    submitForm(formName, event) {
      console.log(this.$refs)
      console.log(event)
      event.preventDefault()
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!')
          // console.log('aaaaaa')
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
    },
    passwordToggle() {
      console.log('クリック')
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

<style lang="scss" scoped>
.c-form {
  &_sns {
    &-title {
      font-size: $font-size_c-form_sns-title;
      text-align: center;
      @include padding(8px, 0);
      @include margin(0, 0, 12px);
    }

    &-btn {
      @include margin(0, 0, 20px);
      transition: all 0.3s;
      width: 100%;

      &:hover {
        background-color: $colro_hover_primary;
        border-color: $colro_hover_primary;
      }
    }

    &-google {
      background-color: $color_google;
      border-color: $color_google;
    }

    &-facebook {
      margin-bottom: 0;
      background-color: $color_facebook;
      border-color: $color_facebook;
    }
  }

  @include mq(sm) {
    &_sns {
      &-title {
        font-size: $font14;
      }
    }
  }
}
</style>
