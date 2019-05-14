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
  // position: relative;
  position: absolute;
  bottom: 0;

  &_inner {
    padding: 16px 0;
    position: relative;
  }

  &_copyright {
    font-size: 14px;
    text-align: center;
    color: $white_100;
    font-weight: $font_light;
  }

  @include mq(sm) {
    &_inner {
      padding: 12px;
    }
  }
}
</style>
