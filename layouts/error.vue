<template>
  <main class="l-main">
    <section class="c-section">
      <div class="c-section_inner">
        <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
        <h1 v-else>エラーが発生しました</h1>
        <nuxt-link to="/">ホーム</nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'signupLogin'
}
</script>
