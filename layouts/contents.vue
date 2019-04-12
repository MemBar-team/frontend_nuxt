<template>
  <transition name="fade">
    <div class="Wrapper">
      <LayoutsHeader />
      <NavMenu />
      <nuxt />
      <LayoutsFooter />
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'
import LayoutsHeader from '~/layouts/_header/LayoutsHeader'
import LayoutsFooter from '~/layouts/_footer/LayoutsFooter'
import NavMenu from '~/components/navigation/NavMenu'

export default {
  components: {
    LayoutsHeader,
    LayoutsFooter,
    NavMenu
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
.Section {
  &_inner {
    max-width: $width_xl;
    margin: auto;
    padding: 16px;
  }
  @include mq(sm) {
    &_inner {
      padding: 8px;
    }
  }
}

.Posts {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;

  &_item {
    width: 20%;
    margin: 8px;
    padding: 4px;
    @include boxShadow_spread(0.1);
    flex-grow: 1;
    overflow: hidden;

    &-header {
      background-color: $bg_posts_header;
      padding: 8px;
      position: relative;
    }
    &-icon {
      width: 32px;
      height: 32px;
      overflow: hidden;
      border-radius: 100px;
      background-color: $bg_posts_icon;

      img {
        width: 100%;
      }
    }
    &-name {
      font-size: $font16;
      font-weight: $font_bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      color: $color_white;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      padding-left: 48px;
    }
    &-thumb {
      background-color: $color_black20;
      height: 100px;
    }
    &-contents {
      padding: 12px;
    }
    &-title {
      font-size: $font20;
      font-weight: $font_bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      margin: 0 0 4px;
    }
    &-read {
      font-size: $font14;
      font-weight: $font_medium;
      line-height: 1.5;
    }
  }

  @include mq(lg) {
    &_item {
      width: 25%;
    }
  }

  @include mq(sm) {
    &_item {
      width: 100%;
    }
  }
}
</style>
