<template>
  <main>
    <section class="Section">
      <div class="Section_inner">
        <div class="Posts">
          <div
            v-for="(renderPost, title) in renderPosts"
            :key="title"
            class="Posts_item"
          >
            <div class="Posts_item-inner">
              <div class="Posts_item-header">
                <div class="Posts_item-icon">
                  <img :src="renderPost.icon" :alt="renderPost.name" />
                </div>
                <p class="Posts_item-name">{{ renderPost.name }}</p>
              </div>
              <div class="Posts_item-thumb">
                <img :src="renderPost.thumb" :alt="renderPost.title" />
              </div>
              <div class="Posts_item-contents">
                <h2 class="Posts_item-title">{{ renderPost.title }}</h2>
                <p class="Posts_item-read">{{ renderPost.read }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <el-pagination
      ref="pagination"
      class="pagination"
      background
      router
      layout="prev, pager, next, ->"
      :small="this.$store.state.deviceType === 'sp'"
      :total="renderPosts.length"
      :current-page.sync="currentPage"
    >
    </el-pagination>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {},
  layout: 'contents',
  data() {
    /* eslint-disable no-console */
    console.log('データ')
    return {
      value: null,
      currentPage: 1,
      internalPage: null
    }
  },
  computed: {
    renderPosts() {
      /* eslint-disable no-console */
      console.log('コンピューテッド')
      return this.$store.state.posts.data
    }
  },
  watch: {
    currentPage() {
      this.internalPage.internalCurrentPage = this.currentPage
    }
  },
  mounted() {
    /* eslint-disable no-console */
    console.log('マウント')
    this.getPosts()
    this.internalPage = this.$refs.pagination
  },
  methods: {
    ...mapActions({
      getPosts: 'getPosts'
    })
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  padding: 16px 16px 32px;
}
</style>
