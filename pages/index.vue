<template>
  <main>
    <section class="Section">
      <!-- {{ this.$store.state }} -->
      <!-- {{ checkAuth }} -->
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
      /* eslint-disable no-console */
      console.log('コンピューテッド')
      console.log(this.$store.state)
      return this.$store.state.posts.data
    },
    checkAuth(redirect) {
      /* eslint-disable no-console */
      console.log('チェック')
      // console.log(store)
      console.log(this.$store.state)
      console.log(this.$store.state.auth.login)
      // console.log(this.$store.state.auth)
      if (!this.$store.state.auth.login) {
        console.log('チェック リダイレクト')
        // this.router.push('top')
        return redirect('/top')
      }
      return this.$store.state.auth
      // this.redirect()
    }
  },
  watch: {
    currentPage() {
      /* eslint-disable no-console */
      console.log('ウォッチ')
      this.internalPage.internalCurrentPage = this.currentPage
    }
  },
  // fetch({ store, redirect }) {
  //   console.log('フェッチ')
  //   console.log(store.state.auth.login)
  //   // console.log(this.$store.state.auth)
  //   if (!store.state.auth.login) {
  //     return redirect('/top')
  //   }
  // },
  fetch({ store, params, redirect }) {
    console.log('フェッチ')
    console.log(store)
    console.log(params)
    console.log(store.state.auth)
    // await store.dispatch('GET_AUTH')
    // // this.getAuth()
    // if (!store.state.auth.login) {
    //   this.$router.push('/top')
    // }
  },
  mounted() {
    /* eslint-disable no-console */
    console.log('マウント')
    console.log(this.$store.state.auth.login)
    // this.getAuth()
    // if (!this.$store.state.auth.login) {
    //   console.log('!!!!!1マウント')
    //   return redirect('/top')
    // }
    this.nuxtServerInit()
    this.getPosts()
    this.internalPage = this.$refs.pagination
  },
  methods: {
    // redirect({ redirect }) {
    //   console.log('リダイレクト')
    //   if (!this.$store.state.auth.login) {
    //     return redirect('/top')
    //   }
    // },
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    },
    // async getAuth() {
    //   this.getAuth()
    // },

    ...mapActions({
      getAuth: 'getAuth',
      getPosts: 'getPosts',
      nuxtServerInit: 'nuxtServerInit'
    })
  }
  // middleware: 'authenticated'
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
      background-color: $color_white;
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
      color: $color_white;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      padding-left: 48px;
    }
    &-thumb {
      background-color: $color_black20;
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
      // width: calc(100% / 4);
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
