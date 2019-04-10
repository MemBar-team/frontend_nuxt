<template>
  <div class="TopPage">
    <!-- <transition name="fade"> -->
    <section class="Section">
      <div class="Section_inner">
        <h1 class="title">
          趣味と仲間を繋げよう
        </h1>
        <el-rate
          v-model="value"
          class="TopPage_star"
          :colors="['#2F3D4D', '#64B486', '#4B7C6E']"
        >
        </el-rate>
        <nuxt-link to="/home">
          <el-button type="primary">スタート</el-button>
        </nuxt-link>
        <div class="TopPage_access">
          <nuxt-link to="/signup">
            <el-button type="primary">アカウント作成</el-button>
          </nuxt-link>
          <nuxt-link to="/login">
            <el-button type="primary" plain>ログイン</el-button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
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
