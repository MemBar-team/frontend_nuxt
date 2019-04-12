<template>
  <header id="LayoutsHeader" class="Header">
    <div class="Header_inner">
      <nuxt-link class="Header_logo" tag="h1" to="/">
        MemBar
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.Header {
  // background: linear-gradient(to right, $color_red, $color_orange);
  // background-color: $bg_header;

  &_inner {
    display: flex;
    padding: 8px 24px;
    max-width: $width_xl;
    margin: 0 auto;
  }

  &_logo {
    // color: $color_white;
    color: $main_text;
    padding: 4px 0;
    font-size: $font26;
    margin: 0 24px 0 0px;
  }

  @include mq(sm) {
    @include boxShadow_down(0.1);

    &_inner {
      text-align: center;
    }

    &_logo {
      margin: auto;
      font-size: $font22;
    }
  }
}
</style>
