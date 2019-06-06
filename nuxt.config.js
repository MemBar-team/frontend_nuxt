// process.traceDeprecation = true;
import pkg from './package'
import bodyParser from 'body-parser'
import session from 'express-session'

// const { resolve } = require('path')

export default {
  mode: 'spa',
  // mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-TileColor', content: '#e14343' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e14343' },
      { rel: 'stylesheet',  href: '//fonts.googleapis.com/icon?family=Material+Icons' }
    ]
    // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    // <link rel="manifest" href="/site.webmanifest">
    // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e14343">
    // <meta name="msapplication-TileColor" content="#e14343">
    // <meta name="theme-color" content="#ffffff"></meta>
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#e14343' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/common/_reset.scss',
    '@/assets/scss/common/_material-icon.scss',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/ow_element-ui.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // '@nuxtjs/google-analytics',
    // '@nuxtjs/google-tag-manager', { id: 'GTM-XXXXXXX' }
  ],

  styleResources: {
    sass: [
      '@/assets/scss/common/_variable.scss',
      '@/assets/scss/common/_mixin.scss',
    ],
  },

  // googleAnalytics: {
  //   id: 'UA-12301-2'
  // },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api'
    // '~/api/auth'
  ],
  router: {
    // すべてのページで middleware/user-agent.js を実行します
    middleware: 'userAgent'
  },
  auth: {
    redirect: {
      callback: '/callback'
    },
    strategies: {
      local: {
        endpoints: {
          login: { propertyName: 'token.accessToken' }
        }
      },
      auth0: {
        domain: 'nuxt-auth.auth0.com',
        client_id: 'q8lDHfBLJ-Fsziu7bf351OcYQAIe3UJv'
      },
      facebook: {
        client_id: '1671464192946675',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ['public_profile', 'email', 'user_birthday']
      },
      google: {
        client_id:
          '956748748298-kr2t08kdbjq3ke18m3vkl6k843mra1cg.apps.googleusercontent.com'
      },
      github: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET
      },
      twitter: {
        client_id: 'FAJNuxjMTicff6ciDKLiZ4t0D'
      }
    }
  }
}
