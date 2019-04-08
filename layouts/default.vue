<template>
  <transition name="fade">
    <div class="Wrapper">
      <!-- <transition-group name="fade"> -->
      <LayoutsHeader />
      <nuxt />
      <!-- </transition-group> -->
      <LayoutsFooter />
    </div>
  </transition>
</template>

<script>
import LayoutsHeader from '~/layouts/_header/LayoutsHeader'
import LayoutsFooter from '~/layouts/_footer/LayoutsFooter'

export default {
  components: {
    LayoutsHeader,
    LayoutsFooter
  }
}
</script>

<style lang="scss">
.Wrapper {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  margin: auto;
}

.block {
  padding: 0 20px;
}

.container {
  margin: 0 auto;
  background: $color_white;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  // transform: scale(0);
  transform: translate(100%, 0);
  // transform: scale(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: scale(0);
}
</style>
