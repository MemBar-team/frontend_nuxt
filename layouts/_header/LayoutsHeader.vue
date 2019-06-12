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
    <transition name="slideFade">
      <div
        v-if="this.$store.state.authUser && this.$store.state.slideMenuOpen"
        id="LayoutsSlideMenu"
        class="l-slideMenu"
        :class="{ active: this.$store.state.slideMenuOpen }"
      >
        <div class="l-slideMenu_inner">
          <nav class="l-slideMenu_list">
            <ul>
              <router-link
                id="nav-home"
                tag="li"
                to="/"
                exact
                @click.native="slideMenuClose()"
              >
                <a>ホーム</a>
              </router-link>
              <router-link
                id="nav-account"
                tag="li"
                to="/account/"
                @click.native="slideMenuClose()"
              >
                <a>アカウント</a>
              </router-link>
              <router-link
                id="nav-login"
                tag="li"
                to="/login/"
                @click.native="slideMenuClose()"
              >
                <a>ログイン</a>
              </router-link>
              <router-link id="nav-loout" tag="li" to="/top/" @click="logout()">
                <a class="">
                  <i class="material-icons">exit_to_app</i>
                  ログアウト
                </a>
              </router-link>
              <!-- <button
                class="l-header_option-logout"
                @click="logout()"
                @click.native="slideMenuClose()"
              >
                <i class="material-icons">
                  exit_to_app
                </i>
                ログアウト
              </button> -->
            </ul>
          </nav>
        </div>
        <div class="l-slideMenu_bg" @click="slideMenuToggle()"></div>
      </div>
    </transition>
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
  mounted() {
    // this.$nextTick(() => {
    //   const el = document.documentElement
    //   if (this.$store.state.slideMenuOpen === true) {
    //     el.classList.add('htmlFixed')
    //   } else {
    //     el.classList.remove('htmlFixed')
    //   }
    // })
  },
  // computed() {
  //   const el = document.documentElement
  //   if (this.$store.state.slideMenuOpen === true) {
  //     el.classList.add('htmlFixed')
  //   } else {
  //     el.classList.remove('htmlFixed')
  //   }
  // },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout')
        await this.$store.dispatch('slideMenuClose')
      } catch (e) {
        this.formError = e.message
      }
    },
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
    },
    slideMenuClose() {
      this.$store.dispatch('slideMenuClose')
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

      img {
        width: 100%;
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

.l-slideMenu {
  opacity: 0;
  transition: 0.3s all;
  position: sticky;
  width: 100%;
  height: 100vh;
  right: -100%;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: auto;
    right: 0;

    .l-slideMenu {
      &_list {
        right: 0;
        opacity: 1;
        pointer-events: auto;
      }
      &_bg {
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }

  &_inner {
    position: relative;
    max-width: 1280px;
    margin: auto;
    width: 100%;
    height: 100%;
    z-index: 10;
    transition: 0.3s all;
    pointer-events: none;
  }

  &_list {
    position: absolute;
    top: 0;
    right: -220px;
    width: 220px;
    background-color: $black_origin;
    color: rgba($color_white, 0.8);
    @include boxShadow_spread(0.2);
    overflow-x: hidden;
    height: 100%;
    transition: 0.3s all;

    > ul {
      li {
        a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          display: block;
          padding: 16px 12px;
          font-size: 16px;
          border-bottom: solid 1px rgba(255, 255, 255, 0.2);
          &:hover {
            background-color: rgba(255, 255, 255, 0.4);
            color: rgba(255, 255, 255, 1);
            transition: 0.3s;
          }
        }
        &.nuxt-link-active {
          a {
            color: rgba(255, 255, 255, 1);
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
        &:last-child {
          a {
            border-bottom: solid 1px #000;
          }
        }
      }
    }
  }

  &-btn {
    width: 50px;
    height: 50px;
    background-color: $color_white;
    position: relative;
    transition: all 0.3s;
    cursor: pointer;

    span,
    &::after,
    &::before {
      background-color: $black_origin;
      display: block;
      width: 20px;
      height: 2px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transition: all 0.3s;
      z-index: 10;
      border-radius: 100px;
    }

    &::after {
      content: '';
      top: -12px;
    }
    &::before {
      content: '';
      bottom: -12px;
    }

    &:hover {
      background-color: $black_origin;

      span,
      &::after,
      &::before {
        background-color: $color_white;
      }
    }

    &.active {
      background-color: $black_origin;

      span {
        background: none !important;
      }

      &::after,
      &::before {
        background-color: $color_white;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      &::after {
        transform: rotate(-45deg);
      }
      &::before {
        transform: rotate(45deg);
      }
    }
  }

  @include mq(sm) {
    &-btn {
      width: 46px;
      height: 46px;
    }
  }
}

.slideFade {
  &-enter-active {
    transition: all 0.3s ease;
  }
  &-leave-active {
    transition: all 0.3s;
  }
  &-enter,
  &-leave-to {
    transform: translateX(280px);
    opacity: 0;
  }
}
</style>
