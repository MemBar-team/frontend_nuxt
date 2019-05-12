<template>
  <main class="c-main">
    <section class="c-section">
      <div class="c-section_inner">
        <h1 class="title">
          パスワード忘れ
        </h1>
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

<style lang="scss" scoped></style>
