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
import NavMenu from '~/components/_navigation/NavMenu'

export default {
  components: {
    LayoutsHeader,
    LayoutsFooter,
    NavMenu
  }
}
</script>

<style lang="scss">
.l-main {
  min-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
}

.c-section {
  &_inner {
    max-width: $width_xl;
    margin: auto;
    padding: 8px;
    position: relative;
    height: inherit;
  }
}
</style>
