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
.c-section {
  height: inherit;
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
