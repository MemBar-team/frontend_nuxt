<template>
  <div class="TopPage">
    <!-- <transition name="fade"> -->
    <div class="TopPage_inner">
      <div class="TopPage_bg"></div>
      <div class="TopPage_overlay"></div>
      <!-- <div class="TopPage_contents"> -->
      <h1 class="TopPage_title">
        趣味と仲間を繋げよう
      </h1>
      <h2 class="TopPage_logo">Mem<br />Bar</h2>
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
      <!-- </div> -->
    </div>
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
  &_inner {
    position: relative;
    height: 100vh;
  }
  &_bg {
    height: 100%;
    width: 100%;
    background: url(/images/toppage_bg.jpg) no-repeat center;
    background-size: cover;
    opacity: 0.4;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // mix-blend-mode: overlay;
  }
  &_overlay {
    // position: absolute;
    // z-index: 10;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    height: 100%;
    width: 100%;
    mix-blend-mode: overlay;
    background: linear-gradient(
      45deg,
      rgba($color_pink, 0.8),
      rgba($color_orange, 0.8)
    );
    background-size: 600% 600%;
    animation: moveGradient 6s ease infinite;

    @keyframes moveGradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
  &_contents {
    min-height: 400px;
    width: 100%;
    padding: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    text-align: center;
    // mix-blend-mode: ;
  }
  &_title {
    font-size: $font28;
    font-weight: $font_bold;
    text-align: center;
    color: $color_white;
    margin: 0 auto 16px;
    mix-blend-mode: color-burn;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 1;
    background-clip: text;
    text-fill-color: transparent;
    // background: linear-gradient(
    //   45deg,
    //   rgba($color_pink, 0.8),
    //   rgba($color_orange, 0.8)
    // );
  }
  &_logo {
    font-size: 5rem;
    font-weight: $font_bold;
    color: $color_white;
  }
  &_access {
    width: 300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  @include mq(sm) {
    &_bg {
      // background-size: 100%;
    }
  }
}
</style>
