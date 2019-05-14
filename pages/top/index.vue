<template>
  <main class="p-top">
    <!-- <transition name="fade"> -->
    <div class="p-top_inner">
      <div class="p-top_bg"></div>
      <div class="p-top_overlay"></div>
      <div class="p-top_contents">
        <h1 class="p-top_title">
          趣味と仲間を繋げよう
        </h1>
        <div class="p-top_access">
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
  </main>
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  }
  // middleware: 'auth'
}
</script>

<style lang="scss" scoped>
.p-top {
  &_inner {
    position: relative;
    height: calc(100vh - 46px);
  }
  &_bg {
    height: 100%;
    width: 100%;
    opacity: 0.8;
    mix-blend-mode: luminosity;
    background: rgba($black_origin_10, 1);
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
    font-size: $font-size_p-top_title;
    font-weight: $font_bold;
    text-align: center;
    color: rgba($white_100, 0);
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
    color: $white_100;
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
    &_title {
      font-size: $font-size_p-top_title_sm;
    }
  }
}
</style>
