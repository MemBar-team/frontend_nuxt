<template>
  <section class="container">
    <h1 class="title">
      サインアップ
    </h1>
    <el-rate v-model="value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']">
    </el-rate>
    <nuxt />
  </section>
</template>

<script>
export default {
  components: {},
  layout: 'contents',
  data() {
    return {
      value: null
    }
  }
}
</script>

<style scoped></style>
