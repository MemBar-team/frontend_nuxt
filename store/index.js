import getPostsData from '~/assets/json/topPage.json'

// 状態管理したい要素に名前をつけて、stateとしてexportする
export const state = () => ({
  // 'hogeFromStore' という名前の状態を管理する
  hogeFromStore: 'Hello, Vuex!',
  user: null,
  posts: getPostsData,
  deviceType: 'pc',
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

  setDeviceType(state, value) {
    state.deviceType = value
  },

  // ここでは hogeFromStore の状態（値）を変更する処理を定義
  setHogeFromStore(state, value) {
    state.hogeFromStore = value
  }
}

// 実際に各コンポーネントから呼び出す処理をactionとしてexportする
export const actions = {
  getUserAgent(state) {
    // ユーザーエージェント取得
    const ua = navigator.userAgent.toLowerCase()
    // iPhone
    const iphone = ua.indexOf('iphone') > -1
    // Android
    const android = ua.indexOf('android') > -1 && ua.indexOf('mobile') > -1

    // PC or SP 判定
    if (iphone || android) {
      // スマホ（iPhone, Android）の時
      state.commit('setDeviceType', 'sp')
    } else {
      // それ以外はPC
      state.commit('setDeviceType', 'pc')
    }
  },

  async getPosts(state) {
    // 投稿データを取得
    const res = await this.$axios.$get('/api/posts.json')
    state.commit('setPostsStore', res)
  }
}
