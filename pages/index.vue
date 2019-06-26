<template>
  <div class="l-wrapper_contents">
    <main class="l-main">
      <section class="c-section">
        <!-- {{ this.$store.state }} -->
        <!-- {{ checkAuth }} -->
        <div class="c-section_inner">
          <div class="c-posts">
            <div
              v-for="(renderPost, title) in renderPosts"
              :key="title"
              class="c-posts_item"
            >
              <div class="c-posts_item-inner">
                <div class="c-posts_item-header">
                  <div class="c-posts_item-icon">
                    <el-image :src="renderPost.icon" :alt="renderPost.name">
                      <!-- <img :src="renderPost.icon" :alt="renderPost.name" /> -->
                      <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                      </div>
                    </el-image>
                  </div>
                  <p class="c-posts_item-name">{{ renderPost.name }}</p>
                </div>
                <div class="c-posts_item-thumb">
                  <el-image :src="renderPost.thumb" :alt="renderPost.title">
                    <!-- <img :src="renderPost.thumb" :alt="renderPost.title" /> -->
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                </div>
                <div class="c-posts_item-contents">
                  <h2 class="c-posts_item-title">{{ renderPost.title }}</h2>
                  <p class="c-posts_item-read">{{ renderPost.read }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <el-pagination
        ref="pagination"
        class="c-pagination"
        router
        layout="prev, pager, next, ->"
        :small="this.$store.state.deviceType === 'sp'"
        :total="renderPosts.length"
        :current-page.sync="currentPage"
      >
      </el-pagination>
    </main>
    <ContensSidebar />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ContensSidebar from '~/components/_sidebar/ContentsSidebar'
export default {
  components: {
    ContensSidebar
  },
  layout: 'contents',
  data() {
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
  middleware: 'unAuthRedirect'
}
</script>

<style lang="scss" scoped>
.c-posts {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;

  &_item {
    width: calc(100% / 4);
    @include padding(8px);
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
      @include fontSize($font16);
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
      font-size: 3rem;
    }
    &-contents {
      padding: 12px;
    }
    &-title {
      @include fontSize($font20);
      font-weight: $font_bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      margin: 0 0 4px;
    }
    &-read {
      @include fontSize($font14);
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

.c-pagination {
  padding: 16px 16px 32px;
}
</style>
