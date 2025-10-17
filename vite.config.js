import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    // 🚀 THE FIX: Set the base path to your repository name
    base: '/M294/',
    plugins: [vue()],
})