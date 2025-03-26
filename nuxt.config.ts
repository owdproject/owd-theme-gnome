import pkg from './package.json'
import {createResolver} from "@nuxt/kit";

const {resolve} = createResolver(import.meta.url);

export default defineNuxtConfig({
    ssr: false,

    alias: {
        "#": resolve(__dirname, "."),
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
        dirs: ['composables', 'stores', 'utils'],
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