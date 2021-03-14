export default {
  target: 'static',

  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'CHamburr',
    meta: [
      {hid: 'charset', charset: 'utf-8'},
      {hid: 'viewport', name: 'viewport', content: 'initial-scale=1.0'},
      {hid: 'description', name: 'description', content: 'CHamburr\'s personal website.'},
      {hid: 'theme-color', name: 'theme-color', content: '#1e90ff'},
      {hid: 'og:title', property: 'og:title', content: 'CHamburr'},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'https://chamburr.xyz'},
      {hid: 'og:image', property: 'og:image', content: 'https://chamburr.xyz/icon.png'},
      {hid: 'og:site_name', property: 'og:site_name', content: 'CHamburr'},
      {hid: 'og:description', property: 'og:description', content: 'CHamburr\'s personal website.'},
      {hid: 'twitter:card', name: 'twitter:card', content: 'summary'},
      {hid: 'twitter:title', name: 'twitter:title', content: 'CHamburr'},
      {hid: 'twitter:image', name: 'twitter:image', content: 'https://chamburr.xyz/icon.png'},
      {hid: 'twitter:creator', name: 'twitter:creator', content: '@CHamburr22'},
      {hid: 'twitter:description', name: 'twitter:description', content: 'CHamburr\'s personal website.'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#1e90ff'},
      {rel: 'manifest', href: '/site.webmanifest'},
      {rel: 'canonical', href: 'https://chamburr.xyz'},
    ],
  },

  build: {
    babel: {
      compact: true,
    },
  },

  css: ['~/assets/css/styles.css'],

  generate: {
    crawler: false,
  },

  loading: {
    color: '#1e90ff',
    height: '2px',
  },

  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    'nuxt-purgecss',
  ],

  bootstrapVue: {
    directives: ['VBTooltip'],
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faArrowLeft',
        'faAt',
      ],
      brands: [
        'faDiscord',
        'faFacebook',
        'faGithub',
        'faInstagram',
        'faKeybase',
        'faLinkedin',
        'faTwitter',
      ],
    },
  },

  googleAnalytics: {
    id: 'UA-129600306-6',
  },

  purgeCSS: {
    whitelistPatterns: [
      /^[-_]*nuxt[-_]*/,
      /(^|\.)fa-/,
      /-fa($|\.)/,
    ],
  },
}
