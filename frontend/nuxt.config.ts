// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        baseURL: '/mindminer/',
        head: {
            title: 'Mind Miner',
            base: {
                href: '/mindminer/'
            },
            meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
            bodyAttrs: {
                class: 'light'
            }
        }
    },
    runtimeConfig: {
        public: {
            openaiEndpoint: './api/suggest.php'
        }
    }
})

