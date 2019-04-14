<template>
  <div class="TopPage">
    <!-- <transition name="fade"> -->
    <div class="TopPage_inner">
      <div class="TopPage_bg"></div>
      <div class="TopPage_overlay"></div>
      <div class="TopPage_contents">
        <h1 class="TopPage_title">
          趣味と仲間を繋げよう
        </h1>
        <!-- <h2 class="TopPage_logo">Mem<br />Bar</h2> -->
        <div class="TopPage_access">
          <nuxt-link to="/signup">
            <el-button type="primary">アカウント作成</el-button>
          </nuxt-link>
          <nuxt-link to="/login">
            <el-button type="primary" plain>ログイン</el-button>
          </nuxt-link>
        </div>
      </div>
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
    height: calc(100vh - 46px);
  }
  &_bg {
    height: 100%;
    width: 100%;
    opacity: 0.8;
    mix-blend-mode: luminosity;
    background: rgba($color_black10, 1);
  }
  &_overlay {
    height: 100%;
    width: 100%;
    background: url(/images/toppage_bg02.jpg) no-repeat center;
    background-size: cover;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    mix-blend-mode: luminosity;
    background-position: 0 0;
    animation: slideBgImage 60s infinite;

    @keyframes slideBgImage {
      0% {
        background-position: 0% 0%;
      }
      50% {
        background-position: 100% 0%;
      }
      100% {
        background-position: 0% 0%;
      }
    }
  }
  &_contents {
    width: 100%;
    padding: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    text-align: center;
  }
  &_title {
    font-size: 6rem;
    font-weight: $font_bold;
    text-align: center;
    color: rgba($color_white, 0);
    margin: 0 auto 1.5em;
    line-height: 1.5;
    background: linear-gradient(
      45deg,
      rgba($color_red, 1),
      rgba($color_orange, 1)
    );
    background-size: 500% 500%;
    background-clip: text;
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
  &_logo {
    font-size: 5rem;
    font-weight: $font_bold;
    color: $color_white;
  }
  &_access {
    max-width: 300px;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }

  @include mq(sm) {
    &_inner {
      position: relative;
      height: calc(100vh - 38px);
    }
  }
}
</style>
