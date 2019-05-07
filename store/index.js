import getPostsData from '~/assets/json/topPage.json'
import axios from 'axios'
// import { nextTick } from 'q'

// 状態管理したい要素に名前をつけて、stateとしてexportする
export const state = () => ({
  authUser: null,
  user: null,
  // auth: {
  //   login: false
  // },
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
      console.log('nuxtServerInit')
      commit('SET_USER', req.session.authUser)
      // this.$router.push({ name: 'index' })
      // this.$router.replace('/')
    }
  },
  async login({ commit }, { username, password }) {
    /* eslint-disable no-console */
    console.log('ログインアクション')
    console.log(username)
    console.log(password)
    try {
      console.log('トライ')
      const { data } = await axios.post('/api/login', { username, password })
      console.log(data)
      console.log(this.$router)
      commit('SET_USER', data)
      // this.$router.replace('/')
      // this.$router.push('/')
      // this.$router.push({ path: '/' })
      // this.$route.router.go('/')
    } catch (error) {
      console.log('えらー')
      if (error.response && error.response.status === 401) {
        throw new Error('ユーザー情報が正しくありません')
      }
      throw error
    }

    // return fetch('/api/login', {
    //   // クライアントのクッキーをサーバーに送信
    //   credentials: 'same-origin',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password
    //   })
    // })
    //   .then(res => {
    //     if (res.status === 401) {
    //       throw new Error('Bad credentials')
    //     } else {
    //       // console.log(res.json())
    //       return res.json()
    //     }
    //   })
    //   .then(authUser => {
    //     commit('SET_USER', authUser)
    //     this.$router.push('/')
    //   })
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
