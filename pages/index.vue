<template>
  <div class="TopPage">
    <section class="container">
      <!-- <logo /> -->
      <h1 class="title">
        趣味と仲間を繋げるサイト
      </h1>
      <el-rate
        class="TopPage_star"
        v-model="value"
        :colors="['#2F3D4D', '#64B486', '#4B7C6E']"
      >
      </el-rate>
      <div class="TopPage_access">
        <nuxt-link to="/signup">
          <el-button type="primary">
            サインアップ
          </el-button>
        </nuxt-link>

        <nuxt-link to="/login">
          <el-button type="primary">ログイン</el-button>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // },
  data() {
    return {
      value: null
    }
  }
}
</script>

<style lang="scss" scoped>
.TopPage {
  &_star {
    text-align: center;
  }
  &_access {
    width: 300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>
