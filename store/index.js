import getPostsData from '~/assets/json/topPage.json'

// 状態管理したい要素に名前をつけて、stateとしてexportする
export const state = () => ({
  // 'hogeFromStore' という名前の状態を管理する
  hogeFromStore: 'Hello, Vuex!',
  user: null,
  posts: getPostsData,
  page: [
    {
      url: '/',
      name: 'ホーム'
    },
    {
      url: '/search',
      name: 'サーチ'
    },
    {
      url: '/message',
      name: 'メッセージ'
    }
  ]
})

// 状態を変更する処理は mutationとしてexportする
export const mutations = {
  login(state, user) {
    state.user = user
  },

  logout(state) {
    state.user = null
  },

  setPostsStore(state, value) {
    state.posts = value
  },

  // ここでは hogeFromStore の状態（値）を変更する処理を定義
  setHogeFromStore(state, value) {
    state.hogeFromStore = value
  }
}

// 実際に各コンポーネントから呼び出す処理をactionとしてexportする
export const actions = {
  writeHoge(state, value) {
    /* eslint-disable no-console */
    console.log(state)
    // コミットすることで状態変更が反映される
    state.commit('setHogeFromStore', value)
  },

  async getPosts({ commit }) {
    const res = await this.$axios.$get('/api/posts.json')
    /* eslint-disable no-console */
    console.log('アクション')
    console.log(res)
    commit('setPostsStore', res)
  }
}
