<template>
  <!-- <transition name="fade"> -->
  <div class="Wrapper">
    <!-- <LayoutsHeader /> -->
    <nuxt />
    <LayoutsFooter />
  </div>
  <!-- </transition> -->
</template>

<script>
// import LayoutsHeader from '~/layouts/_header/LayoutsHeader'
import LayoutsFooter from '~/layouts/_footer/LayoutsFooter'

export default {
  components: {
    // LayoutsHeader,
    LayoutsFooter
  }
}
</script>

<style lang="scss">
#__nuxt,
#__layout {
  position: relative;
}

.Wrapper {
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
}

.block {
  padding: 0 20px;
}

.container {
  margin: 0 auto;
  background: $color_white;
}

// .fade-enter-active,
// .fade-leave-active {
//   transition: all 0.1s;
// }
// .fade-enter,
// .fade-leave-active {
//   opacity: 0;
//   transform: scale(0);
// }
</style>
