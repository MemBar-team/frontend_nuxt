<template>
  <header id="LayoutsHeader" class="l-header">
    <div class="l-header_inner">
      <h1 class="l-header_logo">
        <nuxt-link to="/">
          <span class="l-header_logo-img">
            <img src="/images/common/logo_membar_primary.svg" alt="MemBar" />
          </span>
          MemBar{{ menuActive }}
        </nuxt-link>
      </h1>
      <div class="l-header_option">
        <div
          class="slideMenu_btn"
          :class="{ active: menuActive }"
          @click="modalOpen()"
        >
          <span></span>
        </div>
      </div>
    </div>
    <transition name="slideFade">
      <div
        id="LayoutsSlideMenu"
        class="slideMenu"
        :class="{ active: menuActive }"
      >
        <div class="slideMenu_inner">
          <nav class="slideMenu_list">
            <ul>
              <router-link
                tag="li"
                id="nav-home"
                to="/"
                exact
                @click.native="modalClose()"
              >
                <a>ホーム</a>
              </router-link>
              <router-link
                tag="li"
                id="nav-operator"
                to="/operator/"
                @click.native="modalClose()"
              >
                <a>オペレーター</a>
              </router-link>
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
            </ul>
          </nav>
        </div>
        <div class="slideMenu_bg" @click="modalOpen()"></div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menuActive: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      const el = document.documentElement
      if (this.menuActive === true) {
        el.classList.add('htmlFixed')
      } else {
        el.classList.remove('htmlFixed')
      }
    })
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    },
    modalOpen: () => {
      this.menuActive = !this.menuActive
      const el = document.documentElement
      if (this.menuActive === true) {
        el.classList.add('htmlFixed')
      } else {
        el.classList.remove('htmlFixed')
      }
    },
    modalClose: () => {
      this.menuActive = false
      const el = document.documentElement
      if (this.menuActive === true) {
        el.classList.add('htmlFixed')
      } else {
        el.classList.remove('htmlFixed')
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

.slideMenu {
  opacity: 0;
  transition: 0.3s all;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 42px;
  left: -100%;
  pointer-events: none;

  &_btn {
    width: 44px;
    height: 42px;
    background-color: $color_white;
    border-right: solid 1px $black_origin_60;
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
    box-sizing: content-box;

    span {
      background-color: #000;
      display: block;
      width: 24px;
      height: 4px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transition: all 0.3s;
    }

    &::after {
      content: '';
      background-color: #000;
      display: block;
      width: 24px;
      height: 4px;
      position: absolute;
      top: -18px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transition: all 0.3s;
      z-index: 10;
    }
    &::before {
      content: '';
      background-color: #000;
      display: block;
      width: 24px;
      height: 4px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -18px;
      margin: auto;
      transition: all 0.3s;
      z-index: 10;
    }
  }
  &_btn:hover {
    background-color: #000;

    span {
      background-color: $color_white;
    }
    &::after {
      background-color: $color_white;
    }
    &::before {
      background-color: $color_white;
    }
  }
  &_btn.active {
    background-color: #000;

    span {
      background: none !important;
    }

    &::after {
      background-color: $color_white;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: rotate(-45deg);
    }
    &::before {
      background-color: $color_white;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: rotate(45deg);
    }
  }

  &.active {
    opacity: 1;
    pointer-events: auto;
    left: 0;

    .slideMenu {
      &_list {
        left: 0;
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
    left: -220px;
    width: 220px;
    background-color: #000;
    color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
    overflow-x: hidden;
    height: calc(100% - 42px);
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
    transform: translateX(-280px);
    opacity: 0;
  }
}
</style>
