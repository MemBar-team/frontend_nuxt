<template>
  <transition name="slideFade">
    <div
      v-if="this.$store.state.authUser && this.$store.state.slideMenuOpen"
      class="l-slideMenu"
      :class="{ active: this.$store.state.slideMenuOpen }"
    >
      <div class="l-slideMenu_inner">
        <nav class="l-slideMenu_list">
          <ul>
            <router-link tag="li" to="/" exact @click.native="slideMenuClose()">
              <a>
                <span>
                  <i class="material-icons">home</i>
                  ホーム
                </span>
              </a>
            </router-link>
            <router-link
              tag="li"
              to="/account/"
              @click.native="slideMenuClose()"
            >
              <a>
                <span>
                  <i class="material-icons">account_circle</i>
                  アカウント
                </span>
              </a>
            </router-link>
            <li @click="logout($event)">
              <a>
                <span>
                  <i class="material-icons">exit_to_app</i>
                  ログアウト
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="l-slideMenu_bg" @click="slideMenuClose()"></div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    async logout(e) {
      // e.preventdefault
      console.log('ログアウト、、、、、、')
      e.preventDefault()
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
    // slideMenuToggle() {
    //   this.$store.dispatch('slideMenuToggle')
    //   this.htmlFixedToggle()
    // },
    slideMenuClose() {
      this.$store.dispatch('slideMenuClose')
      this.htmlFixedToggle()
    }
  }
}
</script>

<style lang="scss">
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

    ul {
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

          span {
            display: inline-block;
            position: relative;
            padding-left: 28px;

            i {
              position: absolute;
              top: 50%;
              left: 0;
              transform: translate(0, -50%);
              color: $color_white;
            }
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
