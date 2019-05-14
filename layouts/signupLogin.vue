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
      @include padding(16px, 20px, 24px);
      @include boxShadow_spread(0.1);
    }

    &-center {
      background-color: $color_bg_common;
      font-size: $font16;
      @include padding(4px, 12px);
      border-radius: 100px;
      @include margin(0, 40px);
      display: inline-block;
    }
  }

  &_title {
    @include padding(36px, 0, 28px);
    @include margin(0, 0, 20px);
    @include fontSize($font-size_c-form_title);
    text-align: center;
  }

  &_login {
    @include margin(0, 0, 40px);
  }

  &_btn {
    text-align: center;
  }

  &_forgot {
    @include fontSize($font-size_c-form_forgot);
    text-align: center;
    @include margin(0, 0, 16px);
  }

  &_notRegister {
    @include fontSize($font-size_c-form_notRegister);
    font-weight: $font_bold;
    text-align: center;
    @include margin(auto, auto, 16px);
  }

  &_error {
    @include fontSize($font-size_c-form_error);
    text-align: center;
    color: $color-error;
    @include margin(auto, auto, 20px);

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
        @include margin(20px, auto);
      }
    }
  }

  @include mq(sm) {
    padding: 0 4px 20px;

    &_title {
      // font-size: $font18;
    }
  }
}
</style>
