<template>
  <main>
    <section class="c-section">
      <!-- {{ this.$store.state }} -->
      <!-- {{ checkAuth }} -->
      <div class="c-section_inner">
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
      internalPage: null,
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  computed: {
    renderPosts() {
      console.log('コンピューテッド')
      console.log(this.$store.state)
      // this.getPosts()
      return this.$store.state.posts.data
    }
  },
  watch: {
    currentPage() {
      console.log('ウォッチ')
      this.internalPage.internalCurrentPage = this.currentPage
    }
  },
  asyncData(context) {
    console.log('asyncData')
    console.log(context)
    // this.$store.dispatch('getPosts')
  },
  fetch({ store, params, redirect }) {
    console.log('フェッチ')
    console.log(store)
    console.log(params)
    console.log(store.state.auth)
  },
  created() {
    console.log('クリエイテッド')
    this.getPosts()
  },
  mounted() {
    console.log('マウント')
    console.log(this.$store.state)
    // this.getPosts()
    // this.$store.dispatch('getPosts')
    this.internalPage = this.$refs.pagination
  },
  methods: {
    ...mapActions({
      // getAuth: 'getAuth',
      getPosts: 'getPosts'
      // nuxtServerInit: 'nuxtServerInit'
    })
  },
  middleware: 'notLoggedRedirect'
  // middleware: 'auth'
}
</script>

<style lang="scss" scoped>
.Posts {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;

  &_item {
    width: calc(100% / 4);
    padding: 12px;
    flex-grow: 1;
    overflow: hidden;

    &-inner {
      @include boxShadow_spread(0.1);
      background-color: $white_100;
    }
    &-header {
      background-color: $bg_posts_header;
      padding: 8px;
      position: relative;
    }
    &-icon {
      width: 32px;
      height: 32px;
      overflow: hidden;
      border-radius: 100px;
      background-color: $bg_posts_icon;

      img {
        width: 100%;
      }
    }
    &-name {
      font-size: $font16;
      font-weight: $font_bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      color: $white_100;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      padding-left: 48px;
    }
    &-thumb {
      background-color: $black_origin_20;
      height: 100px;
    }
    &-contents {
      padding: 12px;
    }
    &-title {
      font-size: $font20;
      font-weight: $font_bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      margin: 0 0 4px;
    }
    &-read {
      font-size: $font14;
      font-weight: $font_medium;
      line-height: 1.5;
    }
  }

  @include mq(lg) {
    &_item {
      width: calc(100% / 3);
    }
  }

  @include mq(md) {
    &_item {
      width: calc(100% / 2);
    }
  }

  @include mq(sm) {
    &_item {
      width: 100%;
    }
  }
}

.pagination {
  padding: 16px 16px 32px;
}
</style>
