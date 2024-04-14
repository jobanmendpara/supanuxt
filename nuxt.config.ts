// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {},
  },
  css: ['~/assets/global.css'],
  typescript: {
    shim: false,
  },
  build: {
    transpile: ['trpc-nuxt', 'vue-sonner'],
  },
  imports: {
    autoImport: true,
    dirs: ['types/*.ts', 'types/**/*.ts'],
  },
  modules: [
    '@hebilicious/vue-query-nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-viewport',
    'dayjs-nuxt',
    'shadcn-nuxt',
    'nuxt-icon',
    'nuxt-typed-router',
  ],
  vite: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV,
      baseUrl: process.env.BASE_URL || 'http://localhost:3000/',
      timeZone: process.env.TZ,
    },
  },
  ssr: false,
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
      {
        path: '~/components/forms',
        pathPrefix: false,
      },
      {
        path: '~/components/ui/',
        pathPrefix: false,
      },
    ],
  },
  devtools: {
    timeline: {
      enabled: true,
    },
  },
  dayjs: {
    locales: ['en'],
    plugins: ['duration', 'isLeapYear', 'relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'Etc/GMT',
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_KEY,
    redirect: true,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: [
        '/',
        '404',
        'confirm',
        '/magicLink',
        '/login',
        '/signUp',
        '/passwordlessLogin'
      ]
    },
  },
  viewport: {
    breakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
});
