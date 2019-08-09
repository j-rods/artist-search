
export default {
  mode: 'spa',
  head: {
    title: 'Artist Search App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,500,700|Material+Icons' }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: ['~plugins/vuetify.js'],
  devModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  modules: [],
  build: {
    vendor: ['vuetify'],
    extend (config, ctx) {
    }
  }
};
