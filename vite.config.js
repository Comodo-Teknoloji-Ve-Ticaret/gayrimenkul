import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { BASE_PATH } from './site.config.js'

export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), tailwindcss()],
})
