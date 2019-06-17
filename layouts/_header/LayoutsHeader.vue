<template>
  <header id="LayoutsHeader" class="l-header">
    <div class="l-header_inner">
      <h1 class="l-header_logo">
        <nuxt-link to="/">
          <span class="l-header_logo-img">
            <img src="/images/common/logo_membar_primary.svg" alt="MemBar" />
          </span>
          <span class="l-header_logo-text">
            <img
              src="/images/common/logo_membar_normal_text.svg"
              alt="MemBar"
            />
          </span>
        </nuxt-link>
      </h1>
      <div class="l-header_option">
        <div
          v-if="this.$store.state.authUser"
          class="l-slideMenu-btn"
          :class="{ active: this.$store.state.slideMenuOpen }"
          @click="slideMenuToggle()"
        >
          <span></span>
        </div>
      </div>
    </div>
    <SlideMenu />
  </header>
</template>

<script>
import SlideMenu from '~/layouts/_slideMenu'
export default {
  components: {
    SlideMenu
  },
  methods: {
    htmlFixedToggle() {
      const el = document.documentElement
      if (this.$store.state.slideMenuOpen === true) {
        el.classList.add('htmlFixed')
      } else {
        el.classList.remove('htmlFixed')
      }
    },
    slideMenuToggle() {
      this.$store.dispatch('slideMenuToggle')
      this.htmlFixedToggle()
    }
  }
}
</script>

<style lang="scss" scoped>
.l-header {
  @include boxShadow_down(0.1);
  position: relative;
  background-color: $color_white;
  z-index: 200;
  height: 50px;

  &_inner {
    position: relative;
    display: flex;
    padding: 8px 24px;
    max-width: $width_xl;
    margin: 0 auto;
  }

  &_logo {
    color: $color_main_text;
    padding: 4px 0;
    @include fontSize($font26);
    margin: 0 24px 0 0px;
    cursor: pointer;

    a {
      color: $color_main_text;
      text-decoration: none;
      display: inline-block;
      position: relative;
      padding-left: 32px;

      // &:hover {
      //   color: $color_link;
      // }
    }

    &-img {
      display: inline-block;
      max-width: 28px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      font-size: 0;

      img {
        width: 100%;
      }
    }
    &-text {
      display: inline-block;
      height: 24px;
      font-size: 0;

      img {
        height: 100%;
      }
    }
  }

  &_option {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);

    &-logout {
      padding: 8px;
      cursor: pointer;
      transition: 0.3s;
      position: relative;
      padding-left: 28px;
      background-color: $color_white;

      &:hover {
        background-color: $color_bg_hover_common;
      }

      .material-icons {
        position: absolute;
        top: 50%;
        left: 4px;
        transform: translate(0, -50%);
      }
    }
  }

  @include mq(sm) {
    @include boxShadow_down(0.1);
    height: 46px;

    &_inner {
      text-align: center;
      padding: 8px;
    }

    &_logo {
      margin: auto;
    }
  }
}
</style>
