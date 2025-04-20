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

    i18n: {
        langDir: './locales',
        locales: [{ code: 'en', file: 'en.ts' }],
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