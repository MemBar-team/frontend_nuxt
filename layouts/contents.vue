<template>
  <div class="Wrapper">
    <!-- <transition name="fade"> -->
    <Header />
    <NavMenu />
    <!-- </transition> -->
  </div>
</template>

<script>
import Header from '~/components/header/Header.vue'
import NavMenu from '~/components/navigation/NavMenu.vue'

export default {
  components: {
    Header,
    NavMenu
  }
}
</script>

<style lang="scss">
.Contents {
}
</style>
