<template>
  <header class="header">
    <p class="header_logo">MemBar</p>
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
.header {
  // background: linear-gradient(to right, $color_red, $color_orange);
  background-color: $color_white;
  padding: 8px 24px;
  display: flex;

  &_logo {
    // color: $color_white;
    color: $main_text;
    padding: 4px 0;
    font-size: 26px;
    margin: 0 24px 0 0px;
  }

  @include mq(sm) {
    &_logo {
      margin: auto;
    }
  }
}
</style>
