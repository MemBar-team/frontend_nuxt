import getPostsData from '~/assets/json/topPage.json'
import axios from 'axios'

// 状態管理したい要素に名前をつけて、stateとしてexportする
export const state = () => ({
  authUser: null,
  user: null,
  auth: {
    login: false
  },
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
  SET_USER: (state, user) => {
    state.authUser = user
  },

  login(state, user) {
    state.user = user
  },

  logout(state) {
    state.user = null
  },

  SET_AUTH(state, value) {
    state.auth = value
  },

  setPostsStore(state, value) {
    state.posts = value
  },

  setDeviceType(state, value) {
    state.deviceType = value
  }
}

// 実際に各コンポーネントから呼び出す処理をactionとしてexportする
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login({ commit }, { username, password }) {
    /* eslint-disable no-console */
    console.log('ログインアクション')
    console.log(username)
    console.log(password)
    try {
      const { data } = await axios.post('/api/login', { username, password })
      console.log(data)
      commit('SET_USER', data)
      this.$router.replace('/')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('ユーザー情報が正しくありません')
      }
      throw error
    }
  },
  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
    this.$router.replace('/top')
  },

  async GET_AUTH(state) {
    // 投稿データを取得
    const res = await this.$axios.$get('/api/auth.json')
    /* eslint-disable no-console */
    console.log('GET_AUTH')
    console.log(res.auth)
    state.commit('SET_AUTH', res.auth)
  },

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
