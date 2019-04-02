<template>
  <el-menu
    :default-active="activeIndex"
    class="NavMenu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">タブ1</el-menu-item>
    <el-menu-item index="2">タブ2</el-menu-item>
    <el-menu-item index="3">タブ3</el-menu-item>
  </el-menu>
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
.NavMenu {
  position: sticky;
  z-index: 100;
  top: 0;
  border-top: solid 2px;
  border-image: linear-gradient(to right, $color_red, $color_orange);
  border-image-slice: 1;
  box-shadow: 0 2px 4px 0 $box_shadow;
  width: 100%;

  @include mq(sm) {
    top: auto;
    bottom: 0px;
    position: fixed;
  }
}
</style>
