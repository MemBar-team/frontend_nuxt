<template>
  <header id="LayoutsHeader" class="l-header">
    <div class="l-header_inner">
      <h1 class="l-header_logo">
        <nuxt-link to="/">
          MemBar
        </nuxt-link>
      </h1>
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
.l-header {
  // background: linear-gradient(to right, $color_red, $color_orange);
  // background-color: $bg_header;
  @include boxShadow_down(0.1);

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
    cursor: pointer;

    a {
      color: $main_text;
      text-decoration: none;
    }
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
