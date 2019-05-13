<template>
  <transition name="fade">
    <div class="l-wrapper">
      <LayoutsHeader />
      <NavMenu />
      <nuxt />
      <LayoutsFooter />
    </div>
  </transition>
</template>

<script>
import LayoutsHeader from '~/layouts/_header/LayoutsHeader'
import LayoutsFooter from '~/layouts/_footer/LayoutsFooter'
import NavMenu from '~/components/navigation/NavMenu'

export default {
  components: {
    LayoutsHeader,
    LayoutsFooter,
    NavMenu
  }
}
</script>

<style lang="scss">
.c-main {
  min-height: 400px;
  height: calc(100vh - 50px - 46px); // 画面高さ - Header - Footer の高さ
  overflow-x: hidden;
  overflow-y: auto;

  @include mq(sm) {
    height: calc(100vh - 46px - 38px); // 画面高さ - Header - Footer の高さ
  }
}

.c-section {
  // height: inherit;

  &_inner {
    max-width: $width_xl;
    margin: auto;
    padding: 12px;
    position: relative;
    height: inherit;
  }

  @include mq(sm) {
    &_inner {
      padding: 8px;
    }
  }
}
</style>
