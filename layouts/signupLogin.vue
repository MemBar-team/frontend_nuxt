<template>
  <transition name="fade">
    <div class="l-wrapper">
      <LayoutsHeader />
      <nuxt />
      <LayoutsFooter />
    </div>
  </transition>
</template>

<script>
// import { mapActions } from 'vuex'
import LayoutsHeader from '~/layouts/_header/LayoutsHeader'
import LayoutsFooter from '~/layouts/_footer/LayoutsFooter'

export default {
  components: {
    LayoutsHeader,
    LayoutsFooter
  }
}
</script>

<style lang="scss">
.c-form {
  &_col3 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;

    &-item {
      text-align: center;
    }

    &-inner {
      width: 300px;
      height: inherit;
      padding: 16px 20px 24px;
      @include boxShadow_spread(0.1);
    }

    &-center {
      background-color: $color_bg_common;
      font-size: $font16;
      padding: 4px 12px;
      border-radius: 100px;
      margin: 0 40px;
      display: inline-block;
    }
  }

  &_title {
    font-size: $font-size_c-form_title;
    text-align: center;
    padding: 40px 0 32px;
    margin: 0 0 20px;
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

  &_error {
    font-size: $font-size_c-form_error;
    text-align: center;
    color: $color-error;
    margin-bottom: 20px;

    &-message {
      position: relative;
      padding: 4px 4px 4px 28px;

      .material-icons {
        position: absolute;
        top: 50%;
        left: 4px;
        transform: translate(0, -50%);
        color: $color-error;
      }
    }
  }

  @include mq(md) {
    &_col3 {
      display: block;

      &-inner {
        width: 100%;
      }
      &-center {
        margin: 20px auto;
      }
    }
  }

  @include mq(sm) {
    padding: 0 16px 40px;
  }
}
</style>
