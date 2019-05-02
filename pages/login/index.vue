<template>
  <main class="c-main">
    <section class="c-section">
      <div class="c-section_inner">
        <!-- <h1 class="title">
          ログイン
        </h1>
        <nuxt-link to="/">
          <el-button type="primary" icon="el-icon-arrow-left">戻る</el-button>
        </nuxt-link>
        <div class="login-form">
          <form @submit.prevent="login">
            <p v-if="error" class="error">{{ error }}</p>
            <p>
              <input
                v-model="email"
                type="text"
                placeholder="email"
                name="email"
              />
            </p>
            <p>
              <input
                v-model="password"
                type="text"
                placeholder="password"
                name="password"
              />
            </p>
            <div class="login-btn">
              <button type="submit">ログイン</button>
            </div>
          </form>
        </div> -->

        <div class="c-form">
          <h2 class="c-form_title">
            ログインフォーム
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
            <nuxt-link to="/forgot">
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
export default {
  components: {},
  layout: 'signupLogin',
  data() {
    return {
      error: null,
      email: '',
      password: '',
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

<style lang="scss" scoped>
// .c-main {
//   min-height: 400px;
//   height: calc(100vh - 50px - 46px); // 画面高さ - Header - Footer の高さ

//   @include mq(sm) {
//     height: calc(100vh - 46px - 38px); // 画面高さ - Header - Footer の高さ
//   }
// }
// .c-form {
//   max-width: 500px;
//   min-width: 300px;
//   margin: auto;
//   padding: 0 16px 80px;
//   position: absolute;
//   width: 100%;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);

//   &_title {
//     font-size: $font-size_c-form_title;
//     text-align: center;
//     padding: 32px 0;
//   }

//   &_login {
//     margin: 0 0 40px;
//   }

//   &_btn {
//     text-align: center;
//   }

//   &_forgot {
//     font-size: $font-size_c-form_forgot;
//     text-align: center;
//     margin: 0 0 16px;
//   }

//   &_notRegister {
//     font-size: $font-size_c-form_notRegister;
//     font-weight: $font_bold;
//     text-align: center;
//   }

//   @include mq(sm) {
//     padding: 0 16px 40px;
//   }
// }
</style>
