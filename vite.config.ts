import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const env = process.env.VITE_MODE
const isProduction = env === 'production'
const baseUrl = isProduction ? '/abz.agency/' : './'

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
