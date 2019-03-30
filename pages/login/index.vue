<template>
  <section class="container">
    <h1 class="title">
      ログイン
    </h1>
    <el-rate v-model="value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']">
    </el-rate>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

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
