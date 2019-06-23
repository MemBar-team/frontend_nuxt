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
  slideMenuOpen: false,
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
  },

  SET_SLIDE_MENU_TOGGLE(state, value) {
    state.slideMenuOpen = value
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
  async signup({ commit }, { userName, email, password }) {
    console.log('サインアップ アクション')
    console.log(userName)
    console.log(email)
    console.log(password)
    try {
      console.log('トライ')
      const { data } = await axios.post('/api/signup', {
        userName,
        email,
        password
      })
      console.log(data)
      // commit('SET_USER', data)
      this.$router.replace('/login')
    } catch (error) {
      console.log('store signup エラー')
      if (error.response && error.response.status === 401) {
        throw new Error('ユーザー情報が正しくありません')
      }
      throw error
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
      commit('SET_USER', data)
      this.$router.replace('/')
    } catch (error) {
      console.log('store login エラー')
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
    console.log('ログアウト')
    await axios.post('/api/logout')
    commit('SET_USER', null)
    this.$router.replace('/top')
    console.log('aaa')
  },

  async GET_AUTH(state) {
    // 投稿データを取得
    const res = await this.$axios.$get('/api/auth.json')
    /* eslint-disable no-console */
    console.log('GET_AUTH')
    console.log(res.auth)
    state.commit('SET_AUTH', res.auth)
  },

  async getPosts(state) {
    // 投稿データを取得
    console.log('投稿データを取得')
    const res = await this.$axios.$get('/db/posts.json')
    console.log(res)
    console.log('取得')
    state.commit('setPostsStore', res)
  },

  slideMenuToggle(context) {
    console.log('スライド')
    console.log(context.state)
    const toggleStatus = context.state.slideMenuOpen
    if (toggleStatus === true) {
      context.commit('SET_SLIDE_MENU_TOGGLE', false)
    } else {
      context.commit('SET_SLIDE_MENU_TOGGLE', true)
    }
  },

  slideMenuClose(context) {
    console.log('スライド')
    console.log(context.state)
    const toggleStatus = false
    context.commit('SET_SLIDE_MENU_TOGGLE', toggleStatus)
  }
}
