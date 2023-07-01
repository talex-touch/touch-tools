import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import optimizer from 'vite-plugin-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
})