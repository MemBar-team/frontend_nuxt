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
  // background: linear-gradient(to right, $color_red, $color_orange);
  // background-color: $bg_header;
  @include boxShadow_down(0.1);

  &_inner {
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

      &:hover {
        color: $color_link;
      }
    }
  }

  &_option {
    margin-left: auto;

    &-logout {
      padding: 4px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: $color_bg_hover_common;
      }
    }
  }

  @include mq(sm) {
    @include boxShadow_down(0.1);

    &_inner {
      text-align: center;
    }

    &_logo {
      margin: auto;
      font-size: $font22;
    }
  }
}
</style>
