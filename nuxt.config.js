
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  serverMiddleware: ['~/api/index.js'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['plugins/vue-lodash','plugins/vue-morris',
  'plugins/chart'
],

  /*
  ** Nuxt.js dev-modules
  */


  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/svg',
    '@nuxtjs/vuetify',
  ],
  vuetify: {

  },
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  axios:{
    baseURL: process.env.BASE_URL || 'http://localhost:3000/ '
  },
  server: {
    port: process.env.PORT || 3000
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-social-sharing'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
