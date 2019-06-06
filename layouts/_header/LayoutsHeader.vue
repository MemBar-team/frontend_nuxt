<template>
  <header id="LayoutsHeader" class="l-header">
    <div class="l-header_inner">
      <h1 class="l-header_logo">
        <nuxt-link to="/">
          <span class="l-header_logo-img">
            <img src="/images/common/logo_membar_primary.svg" alt="MemBar" />
          </span>
          MemBar
        </nuxt-link>
      </h1>
      <div class="l-header_option">
        <button
          v-if="this.$store.state.authUser"
          class="l-header_option-logout"
          @click="logout"
        >
          <i class="material-icons">
            exit_to_app
          </i>
          ログアウト
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.l-header {
  @include boxShadow_down(0.1);
  position: relative;
  background-color: $color_white;
  z-index: 100;
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

      img {
        width: 100%;
      }
    }
  }

  &_option {
    position: absolute;
    top: 50%;
    right: 24px;
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

    &_option {
      right: 8px;
    }
  }
}
</style>
