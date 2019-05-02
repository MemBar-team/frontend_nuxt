<template>
  <transition name="fade">
    <div class="Wrapper">
      <LayoutsHeader />
      <nuxt />
      <LayoutsFooter />
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'
import LayoutsHeader from '~/layouts/_header/LayoutsHeader'
import LayoutsFooter from '~/layouts/_footer/LayoutsFooter'

export default {
  components: {
    LayoutsHeader,
    LayoutsFooter
  },
  mounted() {
    this.getUserAgent()
  },
  methods: {
    ...mapActions({
      getUserAgent: 'getUserAgent'
    })
  }
}
</script>

<style lang="scss">
.c-main {
  min-height: 400px;
  height: calc(100vh - 50px - 46px); // 画面高さ - Header - Footer の高さ

  @include mq(sm) {
    height: calc(100vh - 46px - 38px); // 画面高さ - Header - Footer の高さ
  }
}

.c-section {
  height: inherit;
  &_inner {
    max-width: $width_xl;
    margin: auto;
    padding: 12px;
    position: relative;
    height: inherit;
  }
  @include mq(sm) {
    &_inner {
      padding: 8px;
    }
  }
}

.c-form {
  max-width: 500px;
  min-width: 300px;
  margin: auto;
  padding: 0 16px 80px;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &_title {
    font-size: $font-size_c-form_title;
    text-align: center;
    padding: 32px 0;
  }

  &_login {
    margin: 0 0 40px;
  }

  &_btn {
    text-align: center;
  }

  &_forgot {
    font-size: $font-size_c-form_forgot;
    text-align: center;
    margin: 0 0 16px;
  }

  &_notRegister {
    font-size: $font-size_c-form_notRegister;
    font-weight: $font_bold;
    text-align: center;
  }

  @include mq(sm) {
    padding: 0 16px 40px;
  }
}
</style>
