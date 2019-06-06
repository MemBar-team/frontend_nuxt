<template>
  <footer id="LayoutsFooter" class="l-footer">
    <div class="l-footer_inner">
      <p class="l-footer_copyright">&copy; {{ copyright }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LayoutsFooter',
  data() {
    return {
      copyright: 'membar.com'
    }
  }
}
</script>

<style lang="scss" scoped>
.l-footer {
  background: $gradientToRight;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 46px;

  &_inner {
    padding: 16px;
    position: relative;
    height: inherit;
  }

  &_copyright {
    font-size: 14px;
    text-align: center;
    color: $white_100;
    font-weight: $font_light;
  }

  @include mq(sm) {
    height: 42px;

    &_inner {
      height: inherit;
      padding: 12px;
    }
  }
}
</style>
