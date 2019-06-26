<template>
  <nav class="p-globalNav">
    <el-menu
      :default-active="activeIndex"
      class="p-globalNav_inner"
      mode="horizontal"
      router
    >
      <el-menu-item
        class="p-globalNav_item"
        index="index"
        :route="{ name: 'index' }"
      >
        <div class="p-globalNav_item-inner">
          <i class="material-icons">home</i>
          <span class="p-globalNav_item-text">ホーム</span>
        </div>
      </el-menu-item>
      <el-menu-item
        class="p-globalNav_item"
        index="search"
        :route="{ name: 'search' }"
      >
        <!-- <p>{{ this.$route }}</p> -->
        <div class="p-globalNav_item-inner">
          <i class="material-icons">search</i>
          <span class="p-globalNav_item-text">サーチ</span>
        </div>
      </el-menu-item>
      <el-menu-item
        class="p-globalNav_item"
        index="message"
        :route="{ name: 'message' }"
      >
        <div class="p-globalNav_item-inner">
          <i class="material-icons">alternate_email</i>
          <span class="p-globalNav_item-text">メッセージ</span>
        </div>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: ''
      // activeIndex2: '1'
    }
  },
  mounted() {
    // 読み込まれたページをアクティブ
    this.activeIndex = this.$route.name
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.p-globalNav {
  position: sticky;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  border-top: solid 2px;
  border-image: $gradientToRight;
  border-image-slice: 1;
  background-color: $bg_navMenu;
  @include boxShadow_down(0.1);

  &_inner {
    // max-width: $width_xl;
    margin: 0 auto;
  }

  &_item {
    height: 48px;
    line-height: 48px;
  }

  @include mq(sm) {
    top: auto;
    bottom: 0px;
    position: fixed;

    &_item {
      height: 40px;
      line-height: 40px;
      text-align: center;

      &-text {
        display: none;
      }
    }
  }
}
</style>
