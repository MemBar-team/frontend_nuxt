<template>
  <footer id="LayoutsFooter" class="Footer">
    <div class="Footer_inner">
      <p class="Footer_copyright">&copy; {{ copyright }}</p>
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
.Footer {
  background: $gradientToRight;
  position: relative;

  &_inner {
    padding: 16px 0;
    position: relative;
  }

  &_copyright {
    font-size: 14px;
    text-align: center;
    color: $color_white;
    font-weight: $font_light;
  }
}
@include mq(sm) {
  .Footer {
    &_inner {
      padding: 12px;
      height: 40px;
    }
  }
}
</style>
