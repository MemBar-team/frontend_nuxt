<template>
  <transition name="fade">
    <div class="Wrapper">
      <LayoutsHeader />
      <NavMenu />
      <nuxt />
      <el-pagination
        ref="paginationBottom"
        background
        layout="prev, pager, next"
        :total="50"
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
      currentPage: 1,
      internalPage: {
        top: null,
        bottom: null
      }
    }
  },
  watch: {
    currentPage() {
      this.currentPage = 1
      this.internalPage.bottom.internalCurrentPage = this.currentPage
    }
  },
  mounted() {
    this.internalPage.top = this.$refs.paginationTop
    this.internalPage.bottom = this.$refs.paginationBottom
  }
}
</script>

<style lang="scss">
.Contents {
}
</style>
