<template>
  <section class="container">
    <!-- <transition name="fade"> -->
    <h1 class="title">
      ログイン
    </h1>
    <nuxt-link to="/">
      <el-button type="primary" icon="el-icon-arrow-left">戻る</el-button>
    </nuxt-link>
    <el-rate v-model="value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']">
    </el-rate>
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: null
    }
  }
}
</script>

<style scoped></style>
