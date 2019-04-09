<template>
  <transition name="fade">
    <div class="Wrapper">
      <LayoutsHeader />
      <NavMenu />
      <nuxt />
      <el-pagination
        ref="pagination"
        background
        layout="prev, pager, next"
        :total="50"
        :current-page.sync="currentPage"
      >
      </el-pagination>
      <el-pagination
        ref="pagination"
        background
        small
        layout="prev, pager, next, ->"
        :total="100"
        :current-page.sync="currentPage"
      >
      </el-pagination>
      <LayoutsFooter />
    </div>
  </transition>
</template>

<script>
import LayoutsHeader from '~/layouts/_header/LayoutsHeader'
import LayoutsFooter from '~/layouts/_footer/LayoutsFooter'
import NavMenu from '~/components/navigation/NavMenu'

export default {
  components: {
    LayoutsHeader,
    LayoutsFooter,
    NavMenu
  },
  data() {
    return {
      // currentPage: 1,
      // internalPage: {
      //   top: null,
      //   bottom: null
      // }
      currentPage: 1,
      internalPage: null
    }
  },
  watch: {
    currentPage() {
      // this.currentPage = 1
      // this.internalPage.bottom.internalCurrentPage = this.currentPage
      this.internalPage.internalCurrentPage = this.currentPage
    }
  },
  mounted() {
    this.internalPage = this.$refs.pagination
  }
}
</script>

<style lang="scss">
.Section {
  &_inner {
    max-width: $width_xl;
    margin: auto;
    padding: 16px;
  }
  @include mq(sm) {
    &_inner {
      padding: 8px;
    }
  }
}

.Contents {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;

  &_item {
    width: 20%;
    margin: 8px;
    padding: 4px;
    @include boxShadow_spread(0.1);
    flex-grow: 1;
    overflow: hidden;

    &-thumb {
      background-color: rgba($color_black, 0.2);
      height: 100px;
    }
  }

  @include mq(lg) {
    &_item {
      width: 25%;
    }
  }

  @include mq(sm) {
    &_item {
      width: 100%;
    }
  }
}
</style>
