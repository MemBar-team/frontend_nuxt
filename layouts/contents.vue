<template>
  <transition name="fade">
    <div class="Wrapper">
      <Header />
      <NavMenu />
      <nuxt />
    </div>
  </transition>
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
