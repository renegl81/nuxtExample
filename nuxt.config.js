export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'example-nuxt',
    htmlAttrs: {
      lang: 'es'
    },
    script: [

      ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
            rel: 'stylesheet',
            href: 'https://unpkg.com/daisyui@latest/dist/full.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'
      }
  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    buildModules: [
      // https://go.nuxtjs.dev/tailwindcss
      '@nuxtjs/tailwindcss',
      '@nuxt/postcss8',
      '@nuxtjs/style-resources',
      '@nuxtjs/dotenv',
      '@forked-prs/nuxt-infinite-scroll-module'
    ],
    transpile: [/^element-ui/]
  },
  target: 'server',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },
}
