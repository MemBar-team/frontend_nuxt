<template>
  <transition name="fade">
    <div class="Wrapper">
      <!-- <transition-group name="fade"> -->
      <Header />
      <nuxt />
      <!-- </transition-group> -->
    </div>
  </transition>
</template>

<script>
import Header from '~/components/header/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
// .Wrapper {
//   max-width: 1280px;
//   margin: auto;
// }

.block {
  padding: 0 20px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
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
