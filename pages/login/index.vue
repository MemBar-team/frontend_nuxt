<template>
  <section class="Section">
    <div class="Section_inner">
      <h1 class="title">
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      error: null,
      email: '',
      password: ''
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
    }
  }
}
</script>

<style scoped></style>
