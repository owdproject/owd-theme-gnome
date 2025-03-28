import pkg from './package.json'
import {createResolver} from "@nuxt/kit";

const {resolve} = createResolver(import.meta.url);

export default defineNuxtConfig({
    ssr: false,

    alias: {
        "#": resolve(__dirname, "."),
    },

    css: [
        'vue3-carousel/dist/carousel.css'
    ],

    primevue: {
        options: {
            theme: {
                options: {
                    prefix: 'owd-gnome',
                    cssLayer: false
                }
            }
        }
    },

    i18n: {
        langDir: './locales',
        locales: [{ code: 'en', file: 'en.json' }],
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        },
    },

    imports: {
        dirs: ['composables', 'consts', 'stores', 'utils', 'stores'],
    },

    runtimeConfig: {
        public: {
            themeVersion: pkg.version,
        }
    },

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-11-28',
});