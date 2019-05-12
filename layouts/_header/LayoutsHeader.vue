<template>
  <header id="LayoutsHeader" class="l-header">
    <div class="l-header_inner">
      <h1 class="l-header_logo">
        <nuxt-link to="/">
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
    font-size: $font26;
    margin: 0 24px 0 0px;
    cursor: pointer;

    a {
      color: $color_main_text;
      text-decoration: none;

      // &:hover {
      //   color: $color_link;
      // }
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

    &_inner {
      text-align: center;
      padding: 8px;
    }

    &_logo {
      margin: auto;
      font-size: $font22;
    }

    &_option {
      right: 8px;
    }
  }
}
</style>
