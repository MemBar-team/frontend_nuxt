<template>
  <main>
    <section class="Section">
      <div class="Section_inner">
        <!-- {{ this.$store.state.posts.data }} -->
        {{ posts }}
        <div class="Contents">
          <div
            class="Contents_item"
            v-for="(post, index) in posts"
            :key="index"
          >
            <div class="Contents_item-thumb"></div>
            <h2>{{ post.title }}</h2>
          </div>
          <!-- <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>iiiiiiiiiiiii</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>うううううううううううううううううう</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>eeeeeeeeeeeeeeeeeeeeeeee</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>ああああああ</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>ああああああああ</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>iiiiiiiiiiiii</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>うううううううううううううううううう</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>eeeeeeeeeeeeeeeeeeeeeeee</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>ああああああ</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>ああああああああ</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>iiiiiiiiiiiii</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>うううううううううううううううううう</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>eeeeeeeeeeeeeeeeeeeeeeee</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>ああああああ</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>ああああああああ</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>iiiiiiiiiiiii</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>うううううううううううううううううう</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>eeeeeeeeeeeeeeeeeeeeeeee</h2>
          </div>
          <div class="Contents_item">
            <div class="Contents_item-thumb"></div>
            <h2>ああああああ</h2>
          </div> -->
        </div>
      </div>
    </section>
    <el-pagination
      ref="pagination"
      background
      small
      layout="prev, pager, next, ->"
      :total="100"
      :current-page.sync="currentPage"
      router
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
    return {
      value: null,
      currentPage: 1,
      internalPage: null,
      posts: this.$store.state.posts.data
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
    // async fetchSomething: () => () {
    // const ip = await this.$axios.$get('http://icanhazip.com')
    // this.ip = ip
    // console.log(this.ip)
    // }
    /* eslint-disable no-console */
    console.log('マウント')
    this.getPosts()
    // console.log(this.getList())
    this.posts = this.$store.state.posts.data
    console.log(this.posts)
  },
  // computed() {
  //   console.log('コンピューテッド')
  //   this.getList()
  //   console.log(this.posts)
  // },
  methods: {
    ...mapActions({
      getPosts: 'getPosts'
    })
  }
}
</script>

<style lang="scss" scoped></style>
