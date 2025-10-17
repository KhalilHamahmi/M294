import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // <--- IS THIS LINE CORRECT?

// vite.config.js
export default defineConfig({
    base: '/M294/', // The fix you previously applied
    plugins: [vue()], // <--- IS 'vue()' INCLUDED IN PLUGINS?
    // ... other settings (leave them out if unsure)
})