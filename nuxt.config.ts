import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-22',

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      title: "Green Light ELD - An ELD platform prioritizing your time, safety, and comfort",
      meta: [
        {
          name: "description",
          content: "Wave goodbye to unnecessary violations, wasting time on boring paperwork and focus on what's important"
        },
        {
          property: "og:title",
          content: "Green Light ELD - An ELD platform prioritizing your time, safety, and comfort"
        },
        {
          property: "og:description",
          content: "Wave goodbye to unnecessary violations, wasting time on boring paperwork and focus on what's important"
        },
        {
          property: "og:image",
          content: "https://static.tildacdn.one/tild3030-3561-4437-a261-613339663635/Frame_55.png"
        },
        { property: "og:url", content: "https://greenlighteld.com" },
        { property: "og:type", content: "website" },
        {
          name: "google-site-verification",
          content: "your-verification-code"
        }
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" },
        { rel: "canonical", href: "https://greenlighteld.com" },
      ],
      script: [
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-53GDJ5CG');`,
          type: "text/javascript"
        }
      ],
      noscript: [
        {
          children:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-53GDJ5CG" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          tagPosition: "bodyOpen"
        }
      ]
    }
  },

  ui: {
    colorMode: false,

    theme: {
      colors: ['primary', 'error']
    }
  },

  modules: ['@nuxt/eslint', '@nuxt/ui'],
})