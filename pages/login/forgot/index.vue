<template>
  <main class="c-main">
    <section class="c-section">
      <div class="c-section_inner">
        <h1 class="title">
          パスワード忘れ
        </h1>
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
          <el-form
            ref="form"
            :model="form"
            label-width="120px"
            class="c-form_login"
          >
            <el-form-item label="Email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">ログイン</el-button>
              <el-button>キャンセル</el-button>
            </el-form-item>
          </el-form>

          <p>
            <nuxt-link to="/forgot">
              パスワードを忘れた場合はこちら
            </nuxt-link>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  components: {},
  layout: 'headerOnly',
  data() {
    return {
      error: null,
      email: '',
      password: '',
      form: {
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
    onSubmit() {
      /* eslint-disable no-console */
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
.c-main {
  min-height: 400px;
  height: calc(100vh - 50px - 46px);
}
.c-form {
  max-width: 500px;
  min-width: 300px;
  margin: auto;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
