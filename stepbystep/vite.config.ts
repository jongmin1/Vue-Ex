// 전역 Alias부터 전역 CSS 코드를 Vite config에서 어떻게 적용하기
// npm install vue-router@4
// npm install @types/node -> url
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@apis': fileURLToPath(new URL('./src/apis', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
            '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
        },
    },
    // SCSS 전역 사용
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/assets/styles/main.scss";`,
            },
        },
    },
})